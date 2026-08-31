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
              className="mb-4 text-base font-semibold text-accent md:text-lg"
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
              <CtaButton href="/contact" size="lg" />
            </div>
          </div>
        </section>

        {/* CAS D'USAGE DÉTAILLÉS (avant/après) */}
        <section
          aria-labelledby="city-usecases-heading"
          className="w-full px-5 pb-24 sm:px-10 md:pb-32 lg:px-16"
        >
          <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
            <h2
              id="city-usecases-heading"
              className="max-w-3xl text-foreground"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              Cas d'usage concrets à {city.nom}
            </h2>
            <p
              className="mt-5 max-w-2xl text-[17px] text-muted"
              style={{ lineHeight: 1.6 }}
            >
              Des exemples réels d'agents IA que je déploie pour les structures de {city.region}. Chaque cas décrit la situation avant et le résultat après automatisation.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {c.useCasesEtendus.map((uc) => (
              <div
                key={uc.titre}
                className="rounded-2xl border border-border-soft p-8 md:p-10"
              >
                <h3 className="text-[20px] font-medium text-foreground">
                  {uc.titre}
                </h3>
                <div className="mt-5 grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wide text-muted">
                      Avant
                    </div>
                    <p
                      className="mt-2 text-[15px] text-muted"
                      style={{ lineHeight: 1.6 }}
                    >
                      {uc.avant}
                    </p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wide text-foreground">
                      Après
                    </div>
                    <p
                      className="mt-2 text-[15px] text-foreground"
                      style={{ lineHeight: 1.6 }}
                    >
                      {uc.apres}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESSUS DÉTAILLÉ */}
        <section
          aria-labelledby="city-process-heading"
          className="w-full px-5 pb-24 sm:px-10 md:pb-32 lg:px-16"
        >
          <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
            <h2
              id="city-process-heading"
              className="max-w-3xl text-foreground"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              Comment se déroule une mission à {city.nom}
            </h2>
          </div>
          <ol className="flex max-w-2xl flex-col gap-8">
            {c.process.map((step, i) => (
              <li key={step.etape} className="flex gap-6">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border-soft text-[15px] font-medium text-foreground"
                >
                  {step.etape}
                </div>
                <div>
                  <h3 className="text-[17px] font-medium text-foreground">
                    {step.titre}
                  </h3>
                  <p
                    className="mt-1 text-[15px] text-muted"
                    style={{ lineHeight: 1.6 }}
                  >
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* STACK TECHNIQUE */}
        <section
          aria-labelledby="city-stack-heading"
          className="w-full px-5 pb-24 sm:px-10 md:pb-32 lg:px-16"
        >
          <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
            <h2
              id="city-stack-heading"
              className="max-w-3xl text-foreground"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              La stack technique que j'utilise à {city.nom}
            </h2>
            <p
              className="mt-5 max-w-2xl text-[17px] text-muted"
              style={{ lineHeight: 1.6 }}
            >
              Je travaille avec des outils open-source et matures, déployables sur votre infrastructure ou en SaaS selon vos contraintes de confidentialité.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border-soft bg-border-soft sm:grid-cols-2 lg:grid-cols-3">
            {c.stack.map((tech) => (
              <div key={tech.nom} className="bg-background p-6 md:p-8">
                <div className="text-[16px] font-medium text-foreground">
                  {tech.nom}
                </div>
                <p
                  className="mt-2 text-[14px] text-muted"
                  style={{ lineHeight: 1.55 }}
                >
                  {tech.usage}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* COMPARATIF FREELANCE vs AGENCE */}
        <section
          aria-labelledby="city-comparison-heading"
          className="w-full px-5 pb-24 sm:px-10 md:pb-32 lg:px-16"
        >
          <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
            <h2
              id="city-comparison-heading"
              className="max-w-3xl text-foreground"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              Développeur IA freelance vs agence à {city.nom}
            </h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border-soft">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border-soft bg-background">
                  <th className="p-5 text-[14px] font-semibold text-muted md:p-6">
                    Critère
                  </th>
                  <th className="p-5 text-[14px] font-semibold text-foreground md:p-6">
                    Freelance (Tom Cottu)
                  </th>
                  <th className="p-5 text-[14px] font-semibold text-muted md:p-6">
                    Agence classique
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.comparison.map((row) => (
                  <tr key={row.label} className="border-b border-border-soft last:border-0">
                    <td className="p-5 text-[15px] font-medium text-foreground md:p-6">
                      {row.label}
                    </td>
                    <td className="p-5 text-[15px] text-foreground md:p-6">
                      {row.freelance}
                    </td>
                    <td className="p-5 text-[15px] text-muted md:p-6">
                      {row.agence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* MÉTRIQUES */}
        <section
          aria-labelledby="city-metrics-heading"
          className="w-full px-5 pb-24 sm:px-10 md:pb-32 lg:px-16"
        >
          <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
            <h2
              id="city-metrics-heading"
              className="max-w-3xl text-foreground"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              Ce que ça change pour les structures de {city.nom}
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border-soft bg-border-soft sm:grid-cols-2 lg:grid-cols-4">
            {c.metrics.map((m) => (
              <div key={m.label} className="bg-background p-8 text-center md:p-10">
                <div
                  className="text-foreground"
                  style={{
                    fontSize: "clamp(32px, 5vw, 48px)",
                    fontWeight: 500,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {m.value}
                </div>
                <div className="mt-2 text-[14px] text-muted">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="city-faq-heading"
          className="w-full px-5 pb-24 sm:px-10 md:pb-32 lg:px-16"
        >
          <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
            <h2
              id="city-faq-heading"
              className="max-w-3xl text-foreground"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              Questions fréquentes sur l'IA à {city.nom}
            </h2>
          </div>
          <div className="max-w-3xl flex flex-col gap-4">
            {c.faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-border-soft p-6 md:p-8"
              >
                <summary
                  className="flex cursor-pointer items-center justify-between gap-4 text-[17px] font-medium text-foreground list-none"
                >
                  {item.q}
                  <span className="text-2xl text-muted transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p
                  className="mt-4 text-[15px] text-muted"
                  style={{ lineHeight: 1.6 }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-12 max-w-2xl">
            <p
              className="text-[17px] text-muted"
              style={{ lineHeight: 1.6 }}
            >
              D'autres questions sur un projet IA à {city.nom} ? Le diagnostic de 20 minutes est là pour ça.
            </p>
            <div className="mt-8">
              <CtaButton href="/contact" size="lg" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
