import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { CallBooking } from "@/components/CallBooking";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact — Tom Cottu, Développeur IA freelance",
  description:
    "Envoyez-moi un message ou réservez un call pour discuter de votre projet d'automatisation IA. Réponse sous 24h ouvrées.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex flex-1 flex-col">
        <section className="w-full px-5 pb-24 pt-28 sm:px-10 md:pb-32 md:pt-36 lg:px-16">
          <div className="mb-14 border-t border-border-soft pt-16 md:mb-20 md:pt-24">
            <div className="mb-4 text-base font-semibold text-accent md:text-lg">Contact</div>
            <h1
              className="max-w-3xl text-foreground"
              style={{
                fontSize: "clamp(34px, 5vw, 58px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                textWrap: "balance",
              }}
            >
              Parlons de votre projet
            </h1>
            <p
              className="mt-6 max-w-2xl text-xl text-foreground"
              style={{ lineHeight: 1.55 }}
            >
              Dites-moi ce que vous voulez automatiser. Deux façons de démarrer : écrivez-moi,
              ou réservez directement un call de 30 minutes.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Option 1 : envoyer un mail */}
            <div className="flex flex-col rounded-3xl border border-border bg-background p-6 sm:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted-soft">
                    Option 1
                  </p>
                  <h2 className="mt-3 text-[24px] font-medium tracking-[-0.03em] text-foreground sm:text-[28px]">
                    Envoyer un message
                  </h2>
                </div>
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black"
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M3 5.5 9 9.5l6-4M3.5 14h11a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5Z"
                      stroke="white"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <p className="mt-4 text-[15px] text-muted" style={{ lineHeight: 1.55 }}>
                Idéal pour décrire votre projet en détail. Je vous réponds sous 24h ouvrées
                avec une première piste concrète, gratuite et sans engagement.
              </p>
              <div className="mt-8 flex-1">
                <ContactForm />
              </div>
            </div>

            {/* Option 2 : réserver un call */}
            <div className="flex flex-col rounded-3xl border border-border bg-background p-6 sm:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted-soft">
                    Option 2
                  </p>
                  <h2 className="mt-3 text-[24px] font-medium tracking-[-0.03em] text-foreground sm:text-[28px]">
                    Réserver un call
                  </h2>
                </div>
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black"
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M5.5 2.5v3M12.5 2.5v3M2.5 9h13M4 4h10a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
                      stroke="white"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <p className="mt-4 text-[15px] text-muted" style={{ lineHeight: 1.55 }}>
                Vous préférez parler directement ? Choisissez un créneau de 30 minutes
                dans mon agenda et on fait le point sur votre projet en direct.
              </p>
              <div className="mt-8 flex-1">
                <CallBooking />
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-start gap-2 text-[15px] text-muted">
            <span>Une question rapide ? Écris-moi directement :</span>
            <Link
              href="mailto:cottutom@outlook.fr"
              className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-black"
            >
              cottutom@outlook.fr
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
