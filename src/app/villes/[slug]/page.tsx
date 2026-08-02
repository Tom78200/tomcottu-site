import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { CityPage } from "@/components/CityPage";
import { GeoLinks } from "@/components/GeoLinks";
import { Footer } from "@/components/Footer";
import { CITIES as cities, getCity as getCityBySlug } from "@/lib/cities";
import { SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  // On génère les pages pour les nouveaux slugs SEO uniquement.
  // Les anciens slugs (ex. "marseille") sont gérés par redirect() dans
  // la route elle-même (301 permanent vers le nouveau slug).
  return cities.map((c) => ({ slug: c.seoSlug }));
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = cities.find((c) => c.seoSlug === slug || c.slug === slug);
  if (!city) return {};

  const url = `${SITE_URL}/villes/${city.seoSlug}`;
  const title = `Développeur IA à ${city.nom}, agents sur mesure`;
  const description = `Développeur IA freelance à ${city.nom}. Agents IA sur mesure, automatisation de workflows et assistants auto-hébergés pour PME et TPE de ${city.nom} (${city.departement}). Diagnostic gratuit 20 min.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      siteName: "Tom Cottu",
      title,
      description,
      images: [{ url: "/hero-image/character.webp", width: 1672, height: 941, alt: `Développeur IA à ${city.nom}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/hero-image/character.webp"],
    },
  };
}

export default async function CityRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 301 redirect : anciens slugs (ex. /villes/marseille) → nouveaux slugs SEO
  // (/villes/developpeur-ia-marseille). On teste si le slug correspond à un
  // slug interne legacy.
  const legacyCity = cities.find((c) => c.slug === slug && c.seoSlug !== slug);
  if (legacyCity) {
    redirect(`/villes/${legacyCity.seoSlug}`);
  }

  const city = cities.find((c) => c.seoSlug === slug);
  if (!city) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Développement d'agents IA et automatisation",
    name: `Développeur IA à ${city.nom}`,
    description: `Agents IA sur mesure, automatisation de workflows et assistants auto-hébergés pour les structures de ${city.nom} (${city.departement}).`,
    areaServed: [
      {
        "@type": "City",
        name: city.nom,
        address: {
          "@type": "PostalAddress",
          addressLocality: city.nom,
          addressRegion: city.region,
          postalCode: city.codeDept,
          addressCountry: "FR",
        },
      },
      { "@type": "AdministrativeArea", name: city.departement },
    ],
    provider: { "@id": `${SITE_URL}/#business` },
    url: `${SITE_URL}/villes/${city.seoSlug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <CityPage city={city} />
      <GeoLinks variant="city" currentSlug={city.slug} />
      <Footer />
    </>
  );
}
