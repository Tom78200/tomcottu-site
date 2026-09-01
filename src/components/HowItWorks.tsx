"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

/* ── VISUEL ÉTAPE 01 : Cartographie des flux ── */
function StepVisual1() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center py-6 sm:py-10">
      <div className="relative flex w-full max-w-lg items-center justify-between gap-4">
        {/* Outils sources */}
        <div className="flex flex-col gap-3">
          {["Gmail / Outlook", "CRM & Devis", "Notion / ERP", "WhatsApp / Slack"].map(
            (tool, i) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-2 rounded-xl border border-border-soft bg-background/80 px-3.5 py-2 text-xs font-semibold text-foreground shadow-sm"
              >
                <span className="h-2 w-2 rounded-full bg-accent" />
                {tool}
              </motion.div>
            )
          )}
        </div>

        {/* Lignes de flux animées */}
        <div className="relative flex flex-1 items-center justify-center">
          <svg className="w-full h-32 overflow-visible" viewBox="0 0 100 80" fill="none">
            <path d="M0,15 C40,15 60,40 100,40" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M0,35 C40,35 60,40 100,40" stroke="var(--accent)" strokeWidth="2" />
            <path d="M0,55 C40,55 60,40 100,40" stroke="var(--accent)" strokeWidth="2" />
            <path d="M0,75 C40,75 60,40 100,40" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
        </div>

        {/* Nœud d'audit central */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-col items-center rounded-2xl border-2 border-accent bg-white p-5 text-center shadow-lg"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <span className="mt-2 text-[14px] font-semibold text-foreground">Audit 48h</span>
          <span className="text-[11px] font-medium text-accent">Tâche ciblée</span>
        </motion.div>
      </div>
    </div>
  );
}

/* ── VISUEL ÉTAPE 02 : L'Agent & Les Garde-fous ── */
function StepVisual2() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center py-6 sm:py-10">
      <div className="relative flex w-full max-w-lg items-center justify-between gap-4">
        {/* Entrée */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center rounded-2xl border border-border-soft bg-background/80 p-4 text-center"
        >
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-soft">Entrée</span>
          <span className="mt-1 text-[13px] font-semibold text-foreground">Demande client</span>
        </motion.div>

        {/* Bloc central Agent */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-col items-center rounded-2xl border-2 border-accent bg-white p-5 shadow-lg"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-accent">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M9 8h6M9 12h6M9 16h4" />
            </svg>
          </div>
          <span className="mt-2 text-[14px] font-semibold text-foreground">Agent sur-mesure</span>
          <span className="text-[11px] font-medium text-muted-soft">Règles métier codées</span>
        </motion.div>

        {/* 2 Sorties sécurisées */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/5 px-3.5 py-2 text-xs font-semibold text-accent"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Action autonome (90%)
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center gap-2 rounded-xl border border-border-soft bg-background/80 px-3.5 py-2 text-xs font-semibold text-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            Validation humaine (10%)
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ── VISUEL ÉTAPE 03 : Rodage & Garantie ── */
function StepVisual3() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center py-6 sm:py-10">
      <div className="relative flex w-full max-w-lg items-center justify-around gap-4">
        {/* Test en direct */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center rounded-2xl border border-border-soft bg-background/80 p-4 text-center"
        >
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-soft">Rodage</span>
          <span className="mt-1 text-[14px] font-semibold text-foreground">Double commande</span>
          <span className="mt-1 text-[11px] text-accent font-medium">Cas réels</span>
        </motion.div>

        {/* Jauge Précision */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-col items-center rounded-2xl border-2 border-accent bg-white p-5 shadow-lg"
        >
          <span className="text-[28px] font-bold text-accent leading-none">100%</span>
          <span className="mt-1 text-[13px] font-semibold text-foreground">Précision validée</span>
          <span className="text-[11px] text-muted-soft">Sur vos données</span>
        </motion.div>

        {/* Garantie */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-col items-center rounded-2xl border border-accent/20 bg-accent/5 p-4 text-center"
        >
          <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">Garantie</span>
          <span className="mt-1 text-[14px] font-semibold text-foreground">14 jours</span>
          <span className="mt-1 text-[11px] text-muted-soft">Satisfait ou remboursé</span>
        </motion.div>
      </div>
    </div>
  );
}

const stages = [
  {
    step: "01",
    tag: "Audit 48h",
    title: "Analyse de votre activité",
    summary: "Cartographie de vos outils pour isoler la tâche la plus chronophage.",
    visual: <StepVisual1 />,
  },
  {
    step: "02",
    tag: "Semaine 1",
    title: "Construction de l'agent",
    summary: "Développement sur-mesure avec règles métier et garde-fous stricts.",
    visual: <StepVisual2 />,
  },
  {
    step: "03",
    tag: "Suivi continu",
    title: "Affinage en conditions réelles",
    summary: "Tests en double commande et garantie 14 jours satisfait ou remboursé.",
    visual: <StepVisual3 />,
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });
  const [activeStep, setActiveStep] = useState(0);
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    if (!inView || reduce || isManual) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stages.length);
    }, 9000);
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
      {/* ── En-tête de section sobre ── */}
      <div className="mb-10 border-t border-border-soft pt-16 md:mb-14 md:pt-24">
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
        {/* ── 3 Boutons / Onglets épurés ── */}
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

        {/* ── Scène Visuelle Illustrée ── */}
        <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-border-soft bg-white p-6 sm:p-10 shadow-card flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.step}
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center w-full"
            >
              {/* Le schéma interactif */}
              {current.visual}

              {/* 1 seule phrase de synthèse en bas */}
              <p className="mt-4 text-center text-[15px] font-medium text-muted max-w-lg">
                {current.summary}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
