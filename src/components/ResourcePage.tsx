import Link from "next/link";
import { CtaButton } from "./CtaButton";
import { GeoLinks } from "./GeoLinks";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import type { Resource } from "@/lib/resources";

export function ResourcePage({ resource }: { resource: Resource }) {
  return (
    <>
      <Navbar />
      <main id="top" className="flex flex-1 flex-col">
        <article className="w-full px-5 pb-24 pt-28 sm:px-10 md:pb-32 md:pt-36 lg:px-16">
          <div className="mb-14 border-t border-border-soft pt-16 md:mb-20 md:pt-24">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-[13px] text-muted">
              <span className="uppercase tracking-[0.08em] text-muted-soft">
                Ressource IA
              </span>
              <span aria-hidden>·</span>
              <span>Mis à jour le {resource.updated}</span>
            </div>
            <h1
              className="max-w-3xl text-foreground"
              style={{
                fontSize: "clamp(34px, 5vw, 56px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                textWrap: "balance",
              }}
            >
              {resource.title}
            </h1>
            <p
              className="mt-6 max-w-2xl text-xl text-foreground"
              style={{ lineHeight: 1.55 }}
            >
              {resource.description}
            </p>
          </div>

          <div className="max-w-2xl">
            {resource.sections.map((section) => (
              <section key={section.h2} className="mb-12">
                <h2
                  className="mb-4 text-foreground"
                  style={{
                    fontSize: "clamp(22px, 3vw, 30px)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    textWrap: "balance",
                  }}
                >
                  {section.h2}
                </h2>
                {section.body.map((p, i) => (
                  <p
                    key={i}
                    className="mb-4 text-[17px] text-muted"
                    style={{ lineHeight: 1.65 }}
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}

            {resource.faq.length > 0 && (
              <section className="mb-12">
                <h2
                  className="mb-4 text-foreground"
                  style={{
                    fontSize: "clamp(22px, 3vw, 30px)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    textWrap: "balance",
                  }}
                >
                  Questions fréquentes
                </h2>
                <div className="flex flex-col gap-6">
                  {resource.faq.map((f, i) => (
                    <div key={i}>
                      <div className="text-[16px] font-medium text-foreground">
                        {f.q}
                      </div>
                      <p className="mt-1.5 text-[15px] text-muted" style={{ lineHeight: 1.6 }}>
                        {f.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-16 rounded-2xl border border-border-soft p-8">
              <div className="text-[15px] font-medium text-foreground">
                Besoin de passer à la pratique ?
              </div>
              <p className="mt-2 text-[15px] text-muted" style={{ lineHeight: 1.6 }}>
                On cadre votre premier agent en 20 minutes, gratuitement.
              </p>
              <div className="mt-5">
                <CtaButton href="mailto:cottutom@outlook.com" size="lg" />
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/ressources"
                className="text-[15px] text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                ← Toutes les ressources IA
              </Link>
            </div>
          </div>
        </article>

        <GeoLinks variant="home" />
        <Footer />
      </main>
    </>
  );
}
