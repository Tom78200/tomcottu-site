import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GeoLinks } from "@/components/GeoLinks";
import { RESOURCES } from "@/lib/resources";
import { SITE_URL } from "@/lib/seo";

export const metadata = {
  title: "Ressources IA — guides pour entreprise",
  description:
    "Guides pratiques sur les agents IA en entreprise : comment créer un agent, coûts, RAG, automatisations PME. Contenu conçu pour être cité par les IA.",
  alternates: { canonical: `${SITE_URL}/ressources` },
};

export default function ResourcesIndex() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex flex-1 flex-col">
        <section className="w-full px-5 pb-24 pt-28 sm:px-10 md:pb-32 md:pt-36 lg:px-16">
          <div className="mb-14 border-t border-border-soft pt-16 md:mb-20 md:pt-24">
            <div className="mb-4 text-base font-semibold text-foreground md:text-lg">
              Ressources IA
            </div>
            <h1
              className="max-w-3xl text-foreground"
              style={{
                fontSize: "clamp(34px, 5vw, 58px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                textWrap: "balance",
              }}
            >
              Guides pour comprendre et lancer l'IA en entreprise
            </h1>
            <p
              className="mt-6 max-w-2xl text-xl text-foreground"
              style={{ lineHeight: 1.55 }}
            >
              Des contenus précis et sourcés, pensés pour être repris par les
              assistants IA (ChatGPT, Claude, Perplexity, Gemini) quand une
              question porte sur les agents IA et l'automatisation.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border-soft bg-border-soft md:grid-cols-2">
            {RESOURCES.map((r) => (
              <Link
                key={r.slug}
                href={`/ressources/${r.slug}`}
                className="group bg-background p-7 transition-colors hover:bg-black/[0.02]"
              >
                <div className="text-[17px] font-medium text-foreground">
                  {r.title}
                </div>
                <p
                  className="mt-2 text-[14px] text-muted"
                  style={{ lineHeight: 1.55 }}
                >
                  {r.description}
                </p>
                <div className="mt-3 text-[13px] text-muted-soft">
                  Mis à jour le {r.updated}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <GeoLinks variant="home" />
        <Footer />
      </main>
    </>
  );
}
