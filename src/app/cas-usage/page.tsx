import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GeoLinks } from "@/components/GeoLinks";
import { USE_CASES } from "@/lib/usecases";
import { SITE_URL } from "@/lib/seo";

export const metadata = {
  title: "Cas d'usage agent IA par métier",
  description:
    "Un agent IA par problème métier : service client, commercial, recrutement, comptabilité, immobilier. Ce que cherche un dirigeant, traduit en solution.",
  alternates: { canonical: `${SITE_URL}/cas-usage` },
};

export default function UseCasesIndex() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex flex-1 flex-col">
        <section className="w-full px-5 pb-24 pt-28 sm:px-10 md:pb-32 md:pt-36 lg:px-16">
          <div className="mb-14 border-t border-border-soft pt-16 md:mb-20 md:pt-24">
            <div className="mb-4 text-base font-semibold text-accent md:text-lg">
              Cas d'usage
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
              Un agent IA pour chaque problème métier
            </h1>
            <p
              className="mt-6 max-w-2xl text-xl text-foreground"
              style={{ lineHeight: 1.55 }}
            >
              Un dirigeant ne cherche pas « agent IA ». Il cherche « automatiser
              mes réponses clients ». Voici ce que l'agent fait, par métier.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border-soft bg-border-soft md:grid-cols-2">
            {USE_CASES.map((u) => (
              <Link
                key={u.slug}
                href={`/cas-usage/${u.slug}`}
                className="group bg-background p-7 transition-colors hover:bg-black/[0.02]"
              >
                <div className="text-[17px] font-medium text-foreground">
                  {u.h1}
                </div>
                <p
                  className="mt-2 text-[14px] text-muted"
                  style={{ lineHeight: 1.55 }}
                >
                  {u.description}
                </p>
                <div className="mt-3 text-[13px] text-muted-soft">
                  « {u.intent} »
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
