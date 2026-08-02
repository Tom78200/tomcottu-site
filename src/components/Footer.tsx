import Link from "next/link";
import { EMAIL, LINKEDIN } from "@/lib/seo";
import { CITIES } from "@/lib/cities";
import { INTENTS } from "@/lib/intents";

const footerLinks = [
  { href: "/cas-usage", label: "Cas d'usage" },
  { href: "/#exemples", label: "Exemples" },
  { href: "/#services", label: "Services" },
  { href: "/#methode", label: "Comment ça marche" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/#faq", label: "Questions fréquentes" },
];

const footerCities = [
  "paris",
  "lyon",
  "marseille",
  "toulouse",
  "nice",
  "nantes",
  "bordeaux",
  "lille",
].map((s) => CITIES.find((c) => c.slug === s)).filter((c): c is NonNullable<typeof c> => Boolean(c));

const footerIntents = [
  "developpeur-ia-freelance",
  "developpeur-agent-ia",
  "automatisation-ia",
  "expert-n8n",
  "agence-ia",
].map((s) => INTENTS.find((i) => i.slug === s)).filter((i): i is NonNullable<typeof i> => Boolean(i));

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-soft">
      <div className="w-full px-5 py-12 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <span
              className="text-[20px] tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Tom Cottu
            </span>
            <p
              className="mt-3 text-[14px] text-muted"
              style={{ lineHeight: 1.55 }}
            >
              Développeur IA freelance. Agents IA sur mesure, automatisation de
              workflows et assistants auto-hébergés pour PME, à distance partout
              en France.
            </p>
          </div>

          <nav aria-label="Navigation de bas de page">
            <div className="grid grid-cols-2 gap-x-10 sm:grid-cols-3 md:grid-cols-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-2.5 text-[14px] text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Zones d'intervention">
            <div className="text-[12px] uppercase tracking-[0.08em] text-muted-soft">
              Grandes villes
            </div>
            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
              {footerCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/villes/${c.seoSlug}`}
                  className="text-[13px] text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {c.nom}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Expertises">
            <div className="text-[12px] uppercase tracking-[0.08em] text-muted-soft">
              Expertises
            </div>
            <div className="mt-3 flex flex-col gap-2">
              {footerIntents.map((i) => (
                <Link
                  key={i.slug}
                  href={`/intentions/${i.slug}`}
                  className="text-[13px] text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {i.h1}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex flex-col">
            <a
              href={`mailto:${EMAIL}`}
              className="py-2.5 text-[14px] text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {EMAIL}
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 text-[14px] text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border-soft pt-6 text-[13px] text-muted-soft">
          {year} Tom Cottu
        </div>
      </div>
    </footer>
  );
}
