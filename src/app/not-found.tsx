import type { Metadata } from "next";
import Link from "next/link";

// Sans cette page, le 404 héritait des métadonnées de l'accueil : même
// description et surtout une canonique pointant vers la racine, ce qui crée
// un doublon aux yeux de Google. Ici : noindex et canonique propre.
export const metadata: Metadata = {
  title: "Page introuvable",
  description:
    "Cette page n'existe pas ou a été déplacée. Retrouvez les prestations, cas d'usage et ressources IA depuis l'accueil.",
  alternates: { canonical: "/404" },
  robots: { index: false, follow: true },
};

const raccourcis = [
  { href: "/", label: "Accueil" },
  { href: "/cas-usage", label: "Cas d'usage par métier" },
  { href: "/ressources", label: "Ressources IA" },
  { href: "/intentions/developpeur-ia-freelance", label: "Développeur IA freelance" },
];

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-5 py-32 sm:px-10">
      <div
        className="mb-4 text-base font-semibold text-foreground"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Erreur 404
      </div>
      <h1
        className="font-medium text-foreground"
        style={{
          fontSize: "clamp(32px, 5vw, 52px)",
          lineHeight: 1.08,
          letterSpacing: "-0.03em",
        }}
      >
        Cette page n&apos;existe pas.
      </h1>
      <p className="mt-6 text-[17px] text-muted" style={{ lineHeight: 1.6 }}>
        Le lien est peut-être erroné ou la page a été déplacée. Voici par où
        reprendre.
      </p>
      <ul className="mt-10 flex flex-col divide-y divide-border-soft border-y border-border-soft">
        {raccourcis.map((r) => (
          <li key={r.href}>
            <Link
              href={r.href}
              className="block py-4 text-[16px] text-foreground underline-offset-4 transition-colors hover:underline"
            >
              {r.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
