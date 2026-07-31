import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { CityPage } from "@/components/CityPage";
import { GeoLinks } from "@/components/GeoLinks";
import { Footer } from "@/components/Footer";
import { CITIES as cities, getCity as getCityBySlug } from "@/lib/cities";
import { SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  const url = `${SITE_URL}/villes/${city.slug}`;
  const title = `Développeur IA à ${city.nom} — agents sur mesure & automatisation`;
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
      images: [{ url: "/hero-image/character.png", width: 1672, height: 941, alt: `Développeur IA à ${city.nom}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/hero-image/character.png"],
    },
  };
}

export default async function CityRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
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
    url: `${SITE_URL}/villes/${city.slug}`,
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
