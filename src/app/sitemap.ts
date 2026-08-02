import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { CITIES } from "@/lib/cities";
import { INTENTS } from "@/lib/intents";
import { RESOURCES } from "@/lib/resources";
import { USE_CASES } from "@/lib/usecases";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/ressources`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/cas-usage`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  const cityPages = CITIES.map((c) => ({
    url: `${SITE_URL}/villes/${c.seoSlug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const intentPages = INTENTS.map((i) => ({
    url: `${SITE_URL}/intentions/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const resourcePages = RESOURCES.map((r) => ({
    url: `${SITE_URL}/ressources/${r.slug}`,
    lastModified: new Date(r.updated),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const useCasePages = USE_CASES.map((u) => ({
    url: `${SITE_URL}/cas-usage/${u.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...cityPages,
    ...intentPages,
    ...resourcePages,
    ...useCasePages,
  ];
}
