"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

const stages = [
  {
    step: "01",
    tag: "Audit 48h",
    title: "Analyse de votre activité",
    headline: "Cartographier vos outils et cibler la tâche prioritaire.",
    points: [
      "Scan de vos outils (Gmail, CRM, ERP, Notion, Slack)",
      "Ciblage de la tâche la plus chronophage",
      "Définition des règles et des accès autorisés",
    ],
    deliverable: "Fiche de cadrage & périmètre validé",
  },
  {
    step: "02",
    tag: "Semaine 1",
    title: "Construction de l'agent",
    headline: "Développement sur-mesure connecté à votre écosystème.",
    points: [
      "Connexion sécurisée à vos logiciels métier",
      "Garde-fous : validation humaine sur les cas sensibles",
      "Hébergement dédié chez vous ou sur cloud privé",
    ],
    deliverable: "Agent configuré & prêt au test",
  },
  {
    step: "03",
    tag: "Suivi continu",
    title: "Affinage en conditions réelles",
    headline: "Rodage sur vos vraies données jusqu'à validation complète.",
    points: [
      "Tests en double commande avec vos équipes",
      "Ajustements précis sur vos cas particuliers",
      "Garantie satisfait ou remboursé sous 14 jours",
    ],
    deliverable: "Mise en production & accompagnement",
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });
  const [activeStep, setActiveStep] = useState(0);
  const [isManual, setIsManual] = useState(false);

  // Défilement automatique calme qui s'arrête définitivement dès qu'on clique
  useEffect(() => {
    if (!inView || reduce || isManual) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stages.length);
    }, 9500);
    return () => clearInterval(interval);
  }, [inView, reduce, isManual]);

  const handleStepClick = (idx: number) => {
    setActiveStep(idx);
    setIsManual(true);
  };

  const current = stages[activeStep];

  return (
    <section
      id="methode"
      ref={sectionRef}
      aria-labelledby="methode-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-40 lg:px-16"
    >
      {/* ── En-tête de section ── */}
      <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
        <div
          className="mb-3 text-base font-semibold text-foreground md:text-lg"
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

      <div className="space-y-6">
        {/* ── Sélecteur / 3 Onglets épurés ── */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {stages.map((stage, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => handleStepClick(idx)}
                className={`group relative flex flex-col rounded-2xl p-5 text-left transition-all duration-300 border ${
                  isActive
                    ? "border-accent/40 bg-white shadow-soft"
                    : "border-border-soft/70 bg-background/50 hover:bg-white/60 hover:border-border"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-step-bar"
                    className="absolute top-0 inset-x-6 h-[2.5px] rounded-full bg-accent"
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}

                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm font-semibold transition-colors duration-200 ${
                      isActive ? "text-accent" : "text-muted-soft"
                    }`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stage.step}
                  </span>
                  <span className="text-[11px] font-medium text-muted-soft">
                    {stage.tag}
                  </span>
                </div>

                <h3
                  className={`mt-2 text-[16px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${
                    isActive ? "text-foreground" : "text-foreground/75"
                  }`}
                >
                  {stage.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* ── Panneau Central Épuré & Synthétique ── */}
        <div className="relative overflow-hidden rounded-3xl border border-border-soft bg-white p-7 sm:p-10 shadow-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.step}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
            >
              {/* Contenu principal épuré */}
              <div className="max-w-2xl space-y-6">
                <h3
                  className="text-[22px] sm:text-[28px] font-semibold text-foreground tracking-tight"
                  style={{ lineHeight: 1.2 }}
                >
                  {current.headline}
                </h3>

                <ul className="space-y-2.5">
                  {current.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-3 text-[15px] text-foreground/85"
                    >
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent/30 text-accent">
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 10 10"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M1.5 5.2 4 7.5 8.5 2.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Capsule Livrable Compacte */}
              <div className="shrink-0 rounded-2xl border border-border-soft bg-background/70 px-5 py-4 sm:px-6 sm:py-5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-soft block">
                  Livrable
                </span>
                <span className="mt-1 text-[15px] font-semibold text-foreground block">
                  {current.deliverable}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
