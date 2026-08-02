import Link from "next/link";
import { CITIES, getCitiesByProcheDe } from "@/lib/cities";
import { INTENTS } from "@/lib/intents";
import { RESOURCES } from "@/lib/resources";
import { USE_CASES } from "@/lib/usecases";
import { SITE_URL } from "@/lib/seo";

// Maillage interne : relie la home aux pages ville (géo) et intention
// (mots-clés), et vice-versa. Composant réutilisé sur la home, les
// pages ville et les pages intention pour boucler le maillage.

const METRO_SLUGS = [
  "paris",
  "lyon",
  "marseille",
  "toulouse",
  "nice",
  "nantes",
  "montpellier",
  "strasbourg",
  "bordeaux",
  "lille",
  "rennes",
  "reims",
  "grenoble",
  "dijon",
  "rouen",
  "tours",
  "nancy",
  "clermont-ferrand",
  "aix-en-provence",
  "saint-etienne",
];

const INTENTS_FEATURED = [
  "developpeur-ia-freelance",
  "developpeur-agent-ia",
  "automatisation-ia",
  "expert-n8n",
  "agence-ia",
  "consultant-ia",
];

export function GeoLinks({
  currentSlug,
  variant = "home",
}: {
  currentSlug?: string;
  variant?: "home" | "city" | "intent";
}) {
  const metros = METRO_SLUGS.map((s) => CITIES.find((c) => c.slug === s)).filter(
    (c): c is NonNullable<typeof c> => Boolean(c)
  );
  const intents = INTENTS.filter((i) => INTENTS_FEATURED.includes(i.slug));

  if (variant === "city" && currentSlug) {
    const near = getCitiesByProcheDe(currentSlug).slice(0, 8);
    return (
      <section
        aria-labelledby="geo-near-heading"
        className="w-full px-5 pb-24 sm:px-10 md:pb-32 lg:px-16"
      >
        <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
          <h2
            id="geo-near-heading"
            className="max-w-3xl text-foreground"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              textWrap: "balance",
            }}
          >
            Autour de cette ville, j'interviens aussi
          </h2>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[15px] text-muted">
          {near.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/villes/${c.seoSlug}`}
                className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                Développeur IA à {c.nom}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="geo-links-heading"
      className="w-full px-5 pb-24 sm:px-10 md:pb-32 lg:px-16"
    >
      <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
        <h2
          id="geo-links-heading"
          className="max-w-3xl text-foreground"
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            textWrap: "balance",
          }}
        >
          {variant === "intent"
            ? "Autres expertises et zones d'intervention"
            : "Où j'interviens et sur quoi"}
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <div
            className="mb-4 text-sm font-semibold text-foreground/60"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Grandes villes desservies
          </div>
          <ul className="flex flex-col gap-2.5 text-[15px] text-muted">
            {metros.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/villes/${c.seoSlug}`}
                  className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  Développeur IA à {c.nom}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div
            className="mb-4 text-sm font-semibold text-foreground/60"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Expertises
          </div>
          <ul className="flex flex-col gap-2.5 text-[15px] text-muted">
            {intents.map((i) => (
              <li key={i.slug}>
                <Link
                  href={`/intentions/${i.slug}`}
                  className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {i.h1}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div
            className="mb-4 text-sm font-semibold text-foreground/60"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Cas d'usage
          </div>
          <ul className="flex flex-col gap-2.5 text-[15px] text-muted">
            {USE_CASES.map((u) => (
              <li key={u.slug}>
                <Link
                  href={`/cas-usage/${u.slug}`}
                  className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {u.h1}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/cas-usage"
                className="text-[14px] text-muted-soft underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                Tous les cas d'usage →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div
            className="mb-4 text-sm font-semibold text-foreground/60"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ressources IA
          </div>
          <ul className="flex flex-col gap-2.5 text-[15px] text-muted">
            {RESOURCES.slice(0, 6).map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/ressources/${r.slug}`}
                  className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {r.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/ressources"
                className="text-[14px] text-muted-soft underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                Toutes les ressources →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
