import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourcePage } from "@/components/ResourcePage";
import { RESOURCES, getResource } from "@/lib/resources";
import { SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};

  const url = `${SITE_URL}/ressources/${resource.slug}`;
  return {
    title: resource.title,
    description: resource.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url,
      siteName: "Tom Cottu",
      title: resource.title,
      description: resource.description,
    },
  };
}

export default async function ResourceRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: resource.title,
    description: resource.description,
    datePublished: resource.published,
    dateModified: resource.updated,
    author: { "@id": `${SITE_URL}/#tom` },
    publisher: { "@id": `${SITE_URL}/#business` },
    mainEntityOfPage: `${SITE_URL}/ressources/${resource.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResourcePage resource={resource} />
    </>
  );
}
