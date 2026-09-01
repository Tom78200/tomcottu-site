"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";

const steps = [
  {
    tag: "Phase 01 — Cadrage",
    title: "Analyse de votre activité",
    body: "Basée sur votre site, vos outils et vos process réels, pas un questionnaire générique.",
  },
  {
    tag: "Phase 02 — Conception",
    title: "Construction de l'agent",
    body: "Sur mesure, connecté aux outils déjà en place, pas un chatbot prêt à l'emploi.",
  },
  {
    tag: "Phase 03 — Déploiement",
    title: "Affinage en conditions réelles",
    body: "Ajustements après mise en service, tant que l'agent ne colle pas à l'usage réel.",
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const progressMV = useMotionValue(0);

  const [activeStep, setActiveStep] = useState(0);

  // Largeur de la barre de progression (0% à 100%)
  const fillWidth = useTransform(progressMV, (v) => `${Math.min(100, Math.max(0, v * 100))}%`);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      progressMV.set(1);
      setActiveStep(2);
      return;
    }

    const controls = animate(progressMV, 1, {
      duration: 3.5,
      ease: [0.16, 1, 0.3, 1],
    });

    const unsubscribe = progressMV.on("change", (latest) => {
      if (latest < 0.33) {
        setActiveStep(0);
      } else if (latest < 0.75) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [inView, reduce, progressMV]);

  return (
    <section
      id="methode"
      aria-labelledby="methode-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-40 lg:px-16"
    >
      {/* En-tête de section */}
      <div className="mb-14 border-t border-border-soft pt-16 md:mb-20 md:pt-24">
        <div
          className="mb-4 text-base font-semibold text-foreground md:text-lg"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Comment ça marche
        </div>
        <h2
          id="methode-heading"
          className="max-w-3xl font-medium text-foreground"
          style={{
            fontSize: "clamp(34px, 5vw, 60px)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            textWrap: "balance",
          } as React.CSSProperties}
        >
          Trois étapes, pas de blabla.
        </h2>
      </div>

      <div ref={sectionRef} className="relative">
        {/* ══════════ Desktop : Timeline & 3 Cartes Connectées ══════════ */}
        <div className="hidden lg:block space-y-10">
          
          {/* Barre de progression principale — Épaisse, épurée et arrondie (Linear style) */}
          <div className="relative">
            {/* Rail de fond */}
            <div className="h-3 w-full rounded-full bg-border-soft/70 overflow-hidden">
              {/* Remplissage animé */}
              <motion.div
                className="h-full rounded-full bg-accent"
                style={{ width: fillWidth }}
              />
            </div>

            {/* Paliers / Points de repère sur la barre */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-4">
              {[0, 1, 2].map((idx) => {
                const isPassed = activeStep >= idx;
                return (
                  <div
                    key={idx}
                    className="relative flex items-center justify-center"
                  >
                    <div
                      className={`h-5 w-5 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                        isPassed
                          ? "bg-accent border-white scale-110 shadow-sm"
                          : "bg-background border-border-soft"
                      }`}
                    >
                      {isPassed && (
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Grille des 3 cartes d'étapes */}
          <div className="grid grid-cols-3 gap-6 pt-4">
            {steps.map((step, idx) => {
              const isPassed = activeStep >= idx;
              const isCurrent = activeStep === idx;

              return (
                <motion.div
                  key={step.title}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-500 border ${
                    isPassed
                      ? "bg-white/90 border-accent/40 shadow-soft ring-1 ring-accent/15"
                      : "bg-background/40 border-border-soft/70 opacity-60"
                  }`}
                >
                  <div>
                    {/* Header de carte avec numéro et tag */}
                    <div className="flex items-center justify-between mb-8">
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full transition-colors duration-300 ${
                          isPassed
                            ? "bg-accent/10 text-accent"
                            : "bg-border-soft text-muted"
                        }`}
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {step.tag}
                      </span>
                      <span
                        className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                          isPassed ? "text-accent" : "text-border"
                        }`}
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3 className="text-xl font-semibold text-foreground tracking-[-0.02em] mb-3">
                      {step.title}
                    </h3>

                    {/* Corps de texte */}
                    <p className="text-[15px] text-muted leading-relaxed">
                      {step.body}
                    </p>
                  </div>

                  {/* Indicateur de statut en bas de carte */}
                  <div className="mt-8 pt-5 border-t border-border-soft/60 flex items-center justify-between">
                    <span className="text-xs text-muted-soft">
                      {isCurrent
                        ? "En cours"
                        : isPassed
                        ? "Validé"
                        : "À venir"}
                    </span>
                    <div
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${
                        isCurrent
                          ? "bg-accent animate-pulse"
                          : isPassed
                          ? "bg-accent"
                          : "bg-border-soft"
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ══════════ Mobile : Stepper Vertical Élégant ══════════ */}
        <div className="grid gap-6 lg:hidden">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col rounded-2xl border border-border-soft bg-white/80 p-6 shadow-soft"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10 text-accent"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.tag}
                </span>
                <span
                  className="text-lg font-bold text-accent"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  0{idx + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground tracking-[-0.02em] mb-2">
                {step.title}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
