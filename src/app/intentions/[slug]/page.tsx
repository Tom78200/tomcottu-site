import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { IntentPage } from "@/components/IntentPage";
import { GeoLinks } from "@/components/GeoLinks";
import { Footer } from "@/components/Footer";
import { INTENTS, getIntent } from "@/lib/intents";
import { SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return INTENTS.map((i) => ({ slug: i.slug }));
}

export const dynamicParams = false;

function buildJsonLd(intent: (typeof INTENTS)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: intent.h1,
    serviceType: intent.h1,
    description: intent.description,
    url: `${SITE_URL}/intentions/${intent.slug}`,
    provider: {
      "@type": "ProfessionalService",
      name: "Tom Cottu",
      url: SITE_URL,
      email: "cottutom@outlook.fr",
    },
    areaServed: { "@type": "Country", name: "France" },
    offers: {
      "@type": "Offer",
      description: "Diagnostic gratuit de 20 minutes",
      price: "0",
      priceCurrency: "EUR",
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const intent = getIntent(slug);
  if (!intent) return {};

  return {
    title: intent.title,
    description: intent.description,
    keywords: intent.keywords,
    alternates: { canonical: `/intentions/${intent.slug}` },
    openGraph: {
      title: intent.title,
      description: intent.description,
      url: `${SITE_URL}/intentions/${intent.slug}`,
      siteName: "Tom Cottu",
      locale: "fr_FR",
      type: "website",
    },
  };
}

export default async function IntentPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const intent = getIntent(slug);
  if (!intent) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildJsonLd(intent)),
        }}
      />
      <Navbar />
      <IntentPage intent={intent} />
      <GeoLinks variant="intent" currentSlug={intent.slug} />
      <Footer />
    </>
  );
}
