"use client";

import { motion, useReducedMotion } from "motion/react";
import { CtaButton } from "./CtaButton";
import {
  type City,
  type CityContent,
  generateCityContent,
} from "@/lib/cities";

const services = [
  {
    nom: "Développeur IA à {ville}",
    detail:
      "Conception d'un agent IA sur mesure, branché sur vos outils existants, qui exécute vos tâches à votre place.",
  },
  {
    nom: "Automatisation de workflows à {ville}",
    detail:
      "Connexion de vos logiciels métier entre eux pour faire disparaître la saisie manuelle et les allers-retours.",
  },
  {
    nom: "Assistant IA auto-hébergé à {ville}",
    detail:
      "Installation d'une instance IA confidentielle sur votre propre infrastructure, sans dépendre d'un éditeur.",
  },
  {
    nom: "Conseil et cadrage IA à {ville}",
    detail:
      "Audit de vos process, feuille de route priorisée et estimation de budget avant tout développement.",
  },
];

export function CityPage({ city }: { city: City }) {
  const c: CityContent = generateCityContent(city);
  const reduce = useReducedMotion();

  return (
    <>
      <main id="top" className="flex flex-1 flex-col">
        {/* HERO */}
        <section
          aria-labelledby="city-hero-heading"
          className="w-full px-5 pb-24 pt-28 sm:px-10 md:pb-32 md:pt-36 lg:px-16"
        >
          <div className="mb-14 border-t border-border-soft pt-16 md:mb-20 md:pt-24">
            <div
              className="mb-4 text-base font-semibold text-foreground md:text-lg"
            >
              Développeur IA, {city.nom}
            </div>
            <h1
              id="city-hero-heading"
              className="max-w-3xl text-foreground"
              style={{
                fontSize: "clamp(34px, 5vw, 60px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                textWrap: "balance",
                fontStyle: "normal",
              }}
            >
              {c.h1}
            </h1>
            <p
              className="mt-6 max-w-2xl text-xl text-foreground"
              style={{ lineHeight: 1.55 }}
            >
              {c.intro}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <CtaButton href="mailto:cottutom@outlook.fr" size="lg" />
              <a
                href="mailto:cottutom@outlook.fr"
                className="py-2.5 text-[15px] text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                cottutom@outlook.fr
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          aria-labelledby="city-services-heading"
          className="w-full px-5 pb-24 sm:px-10 md:pb-32 lg:px-16"
        >
          <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
            <h2
              id="city-services-heading"
              className="max-w-3xl text-foreground"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              Ce que je construis pour les structures de {city.nom}
            </h2>
          </div>
          <motion.div
            className="grid gap-px overflow-hidden rounded-2xl border border-border-soft bg-border-soft md:grid-cols-2"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {services.map((s) => (
              <div key={s.nom} className="bg-background p-8 md:p-10">
                <div className="text-[17px] font-medium text-foreground">
                  {s.nom.replace("{ville}", city.nom)}
                </div>
                <p
                  className="mt-2 text-[15px] text-muted"
                  style={{ lineHeight: 1.6, textWrap: "pretty" }}
                >
                  {s.detail}
                </p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* CONTEXTE LOCAL (anti-doorway) */}
        <section
          className="w-full px-5 pb-24 sm:px-10 md:pb-32 lg:px-16"
        >
          <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
            <h2
              className="max-w-3xl text-foreground"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              Le contexte de {city.nom}
            </h2>
            <p
              className="mt-5 max-w-2xl text-[17px] text-muted"
              style={{ lineHeight: 1.6 }}
            >
              {city.nom} ({city.departement}, {city.region}) : {c.specificite}.
              Les structures locales tournent souvent autour de{" "}
              {c.secteurs.slice(0, 3).join(", ")}.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border-soft bg-border-soft md:grid-cols-2">
              <div className="bg-background p-8 md:p-10">
                <div className="text-[17px] font-medium text-foreground">
                  Secteurs dominants
                </div>
                <ul className="mt-3 flex flex-col gap-2 text-[15px] text-muted">
                  {c.secteurs.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-background p-8 md:p-10">
                <div className="text-[17px] font-medium text-foreground">
                  Problématiques fréquentes
                </div>
                <ul className="mt-3 flex flex-col gap-2 text-[15px] text-muted">
                  {c.problemes.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MÉTHODE + LEAD */}
        <section
          id="methode"
          aria-labelledby="city-methode-heading"
          className="w-full px-5 pb-24 sm:px-10 md:pb-32 lg:px-16"
        >
          <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
            <h2
              id="city-methode-heading"
              className="max-w-3xl text-foreground"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              Comment on démarre, à {city.nom} comme ailleurs
            </h2>
          </div>
          <div className="max-w-2xl">
            <p
              className="mt-5 text-[17px] text-muted"
              style={{ lineHeight: 1.6 }}
            >
              {c.method}
            </p>
            <p
              className="mt-5 text-[17px] text-muted"
              style={{ lineHeight: 1.6 }}
            >
              {c.lead}
            </p>
            <p
              className="mt-5 text-[17px] text-muted"
              style={{ lineHeight: 1.6 }}
            >
              {c.closing}
            </p>
            <div className="mt-10">
              <CtaButton href="mailto:cottutom@outlook.fr" size="lg" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
