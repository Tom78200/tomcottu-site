import Link from "next/link";
import { CtaButton } from "./CtaButton";
import { GeoLinks } from "./GeoLinks";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import type { UseCase } from "@/lib/usecases";

export function UseCasePage({ useCase }: { useCase: UseCase }) {
  return (
    <>
      <Navbar />
      <main id="top" className="flex flex-1 flex-col">
        {/* HERO */}
        <section
          aria-labelledby="usecase-hero-heading"
          className="w-full px-5 pb-24 pt-28 sm:px-10 md:pb-32 md:pt-36 lg:px-16"
        >
          <div className="mb-14 border-t border-border-soft pt-16 md:mb-20 md:pt-24">
            <div className="mb-4 text-base font-semibold text-accent md:text-lg">
              Cas d'usage
            </div>
            <h1
              id="usecase-hero-heading"
              className="max-w-3xl text-foreground"
              style={{
                fontSize: "clamp(34px, 5vw, 58px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                textWrap: "balance",
              }}
            >
              {useCase.h1}
            </h1>
            <p
              className="mt-6 max-w-2xl text-xl text-foreground"
              style={{ lineHeight: 1.55 }}
            >
              {useCase.problem}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <CtaButton href="/contact" size="lg" />
              <a
                href="mailto:cottutom@outlook.fr"
                className="py-2.5 text-[15px] text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                cottutom@outlook.fr
              </a>
            </div>
          </div>
        </section>

        {/* PROBLÈME -> en une phrase, plus de détail ci-dessous */}
        <section
          id="solution"
          aria-labelledby="usecase-solution-heading"
          className="w-full px-5 pb-24 sm:px-10 md:pb-32 lg:px-16"
        >
          <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
            <h2
              id="usecase-solution-heading"
              className="max-w-3xl text-foreground"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              Ce que l'agent fait
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="mb-8 text-[17px] text-muted" style={{ lineHeight: 1.65 }}>
              {useCase.solution}
            </p>
            <div className="grid gap-4">
              {useCase.examples.map((s) => (
                <div
                  key={s.titre}
                  className="rounded-xl border border-border-soft bg-background p-6"
                >
                  <div className="text-[16px] font-medium text-foreground">
                    {s.titre}
                  </div>
                  <p
                    className="mt-1.5 text-[15px] text-muted"
                    style={{ lineHeight: 1.6 }}
                  >
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RÉSULTATS */}
        <section
          id="resultats"
          aria-labelledby="usecase-resultats-heading"
          className="w-full px-5 pb-24 sm:px-10 md:pb-32 lg:px-16"
        >
          <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
            <h2
              id="usecase-resultats-heading"
              className="max-w-3xl text-foreground"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              Résultats typiques
            </h2>
          </div>
          <ul className="grid gap-4 md:grid-cols-3">
            {useCase.resultats.map((r) => (
              <li
                key={r}
                className="rounded-xl border border-border-soft bg-background p-6"
              >
                <p className="text-[15px] text-muted" style={{ lineHeight: 1.6 }}>
                  {r}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        {useCase.faq.length > 0 && (
          <section
            id="faq"
            aria-labelledby="usecase-faq-heading"
            className="w-full px-5 pb-24 sm:px-10 md:pb-32 lg:px-16"
          >
            <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
              <h2
                id="usecase-faq-heading"
                className="max-w-3xl text-foreground"
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  textWrap: "balance",
                }}
              >
                Questions fréquentes
              </h2>
            </div>
            <div className="max-w-2xl flex flex-col gap-6">
              {useCase.faq.map((f, i) => (
                <div key={i}>
                  <div className="text-[16px] font-medium text-foreground">
                    {f.q}
                  </div>
                  <p
                    className="mt-1.5 text-[15px] text-muted"
                    style={{ lineHeight: 1.6 }}
                  >
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CONVERSION */}
        <section
          id="contact"
          aria-labelledby="usecase-contact-heading"
          className="w-full px-5 pb-24 sm:px-10 md:pb-32 lg:px-16"
        >
          <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
            <h2
              id="usecase-contact-heading"
              className="max-w-3xl text-foreground"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              On commence par quoi ?
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="mt-5 text-[17px] text-muted" style={{ lineHeight: 1.6 }}>
              20 minutes en visio pour cadrer votre cas. Pas de jargon, pas
              d'engagement : on regarde un de vos process et je vous dis si un
              agent IA le rend automatique.
            </p>
            <div className="mt-10">
              <CtaButton href="/contact" size="lg" />
            </div>
            <div className="mt-8">
              <Link
                href="/cas-usage"
                className="text-[15px] text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                ← Tous les cas d'usage
              </Link>
            </div>
          </div>
        </section>

        <GeoLinks variant="home" />
        <Footer />
      </main>
    </>
  );
}
