import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UseCasePage } from "@/components/UseCasePage";
import { USE_CASES, getUseCase } from "@/lib/usecases";
import { SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return USE_CASES.map((u) => ({ slug: u.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) return {};

  const url = `${SITE_URL}/cas-usage/${useCase.slug}`;
  return {
    title: useCase.title,
    description: useCase.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      siteName: "Tom Cottu",
      title: useCase.title,
      description: useCase.description,
    },
  };
}

export default async function UseCaseRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: useCase.h1,
    name: useCase.title,
    description: useCase.description,
    url: `${SITE_URL}/cas-usage/${useCase.slug}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "Country", name: "France" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UseCasePage useCase={useCase} />
    </>
  );
}
