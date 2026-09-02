"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

/* ── ANIMATION 01 : Radar de scan & Flux d'outils ── */
function AnimationStage1() {
  return (
    <div className="relative flex h-full min-h-[300px] w-full items-center justify-center overflow-hidden">
      {/* Cercles radar concentriques */}
      <div className="absolute flex items-center justify-center">
        <div className="h-[240px] w-[240px] sm:h-[320px] sm:w-[320px] rounded-full border border-accent/15" />
        <div className="absolute h-[150px] w-[150px] sm:h-[210px] sm:w-[210px] rounded-full border border-accent/25" />
        <div className="absolute h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full border border-accent/40" />

        {/* Faisceau de scan rotatif continu */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, ease: "linear", repeat: Infinity }}
          className="absolute h-[240px] w-[240px] sm:h-[320px] sm:w-[320px] rounded-full"
          style={{
            background: "conic-gradient(from 0deg, transparent 70%, var(--color-accent-soft) 95%, var(--color-accent) 100%)",
            opacity: 0.35,
          }}
        />
      </div>

      {/* 4 Nœuds d'outils en orbite avec pulsations */}
      {[
        { name: "Gmail / Outlook", top: "12%", left: "15%", delay: 0 },
        { name: "CRM / Devis", top: "14%", right: "15%", delay: 1.5 },
        { name: "Notion / ERP", bottom: "14%", left: "18%", delay: 3 },
        { name: "Slack / WhatsApp", bottom: "16%", right: "16%", delay: 4.5 },
      ].map((node) => (
        <motion.div
          key={node.name}
          animate={{ scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 3, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
          style={{ position: "absolute", top: node.top, bottom: node.bottom, left: node.left, right: node.right }}
          className="z-10 flex items-center gap-2 rounded-xl border border-border-soft bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-xs font-semibold text-foreground">{node.name}</span>
        </motion.div>
      ))}

      {/* Cœur Central : Audit */}
      <div className="relative z-20 flex flex-col items-center rounded-2xl border-2 border-accent bg-white p-5 text-center shadow-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-accent">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <span className="mt-2 text-[15px] font-bold text-foreground">Audit 48h</span>
        <span className="text-[11px] font-semibold text-accent">Tâche ciblée</span>
      </div>
    </div>
  );
}

/* ── ANIMATION 02 : Processeur & Flux sécurisés (Conception) ── */
function AnimationStage2() {
  return (
    <div className="relative flex h-full min-h-[300px] w-full items-center justify-center overflow-hidden">
      <div className="relative z-10 flex w-full max-w-xl items-center justify-between gap-3 sm:gap-6 px-4">
        {/* Entrée */}
        <div className="flex flex-col items-center rounded-2xl border border-border-soft bg-white p-4 shadow-sm text-center">
          <span className="text-[10px] font-bold text-muted-soft uppercase tracking-wider">Entrée</span>
          <span className="mt-1 text-xs font-bold text-foreground">Demande Client</span>
          <span className="mt-0.5 text-[10px] text-accent font-semibold">24h / 24</span>
        </div>

        {/* Flèche animée vers processeur */}
        <div className="relative flex flex-1 items-center justify-center">
          <svg className="w-full h-12 overflow-visible" viewBox="0 0 80 40" fill="none">
            <path d="M0,20 H70" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" />
            <motion.circle
              cx="0"
              cy="20"
              r="3.5"
              fill="var(--color-accent)"
              animate={{ cx: [0, 70] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>

        {/* Processeur Central */}
        <div className="relative flex flex-col items-center rounded-2xl border-2 border-accent bg-white p-5 shadow-xl">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-accent">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M9 8h6M9 12h6M9 16h4" />
            </svg>
          </div>
          <span className="mt-2 text-[14px] font-bold text-foreground">Agent Sur-mesure</span>
          <span className="text-[10px] font-semibold text-emerald-600">Règles métier</span>
        </div>

        {/* Flèches de sortie */}
        <div className="relative flex flex-1 items-center justify-center">
          <svg className="w-full h-16 overflow-visible" viewBox="0 0 80 40" fill="none">
            <path d="M0,20 C30,20 40,8 80,8" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
            <path d="M0,20 C30,20 40,32 80,32" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Sorties */}
        <div className="flex flex-col gap-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/90 px-3 py-1.5 text-left">
            <span className="text-[11px] font-bold text-emerald-800 block">Exécution auto</span>
            <span className="text-[9px] text-emerald-600">Tâches récurrentes</span>
          </div>
          <div className="rounded-xl border border-accent/30 bg-accent/5 px-3 py-1.5 text-left">
            <span className="text-[11px] font-bold text-accent block">Avis humain</span>
            <span className="text-[9px] text-muted-soft">Cas critiques</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── ANIMATION 03 : Rodage & Certification (Déploiement) ── */
function AnimationStage3() {
  return (
    <div className="relative flex h-full min-h-[300px] w-full items-center justify-center overflow-hidden">
      <div className="relative z-10 flex w-full max-w-xl items-center justify-around gap-6 px-4">
        {/* Flux de tickets traités */}
        <div className="flex flex-col gap-2.5">
          {[
            { id: "1", text: "Email trié & traité", time: "0.4s" },
            { id: "2", text: "Devis généré & prêt", time: "0.8s" },
            { id: "3", text: "Ressaisie validée", time: "0.3s" },
          ].map((ticket, i) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="flex items-center justify-between gap-4 rounded-xl border border-border-soft bg-white px-3.5 py-2 shadow-xs"
            >
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold text-xs">✓</span>
                <span className="text-xs font-semibold text-foreground">{ticket.text}</span>
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                {ticket.time}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Jauge 100% */}
        <div className="flex flex-col items-center">
          <div className="relative flex h-24 w-24 items-center justify-center">
            <svg className="h-24 w-24 -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="var(--border-soft)"
                strokeWidth="2.5"
              />
              <motion.path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="3"
                strokeDasharray="100, 100"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-lg font-extrabold text-foreground leading-none">100%</span>
              <span className="text-[9px] font-semibold text-accent uppercase">Précision</span>
            </div>
          </div>
          <span className="mt-2 text-xs font-semibold text-muted-soft">Sur vos données</span>
        </div>

        {/* Garantie 14j */}
        <div className="flex flex-col items-center rounded-2xl border-2 border-accent bg-white p-5 text-center shadow-xl">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <span className="mt-2 text-[15px] font-bold text-foreground">Garantie 14j</span>
          <span className="text-[10px] font-medium text-muted-soft">Sans engagement</span>
        </div>
      </div>
    </div>
  );
}

const STAGES = [
  {
    step: "01",
    tag: "Audit 48h",
    title: "1. Diagnostic & Cartographie",
    description: "Scan de vos outils pour isoler la tâche qui vous coûte le plus de temps.",
    animation: <AnimationStage1 />,
  },
  {
    step: "02",
    tag: "Semaine 1",
    title: "2. Construction sur-mesure",
    description: "Développement d'un agent taillé pour vos logiciels avec garde-fous stricts.",
    animation: <AnimationStage2 />,
  },
  {
    step: "03",
    tag: "Suivi continu",
    title: "3. Mise en service & Rodage",
    description: "Calibrage en conditions réelles et garantie 14 jours satisfait ou remboursé.",
    animation: <AnimationStage3 />,
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.2 });

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % STAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + STAGES.length) % STAGES.length);
  };

  const current = STAGES[currentIndex];

  return (
    <section
      id="methode"
      ref={sectionRef}
      aria-labelledby="methode-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-44 lg:px-16"
    >
      {/* ── En-tête de section ── */}
      <div className="mb-10 border-t border-border-soft pt-16 md:mb-14 md:pt-24 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <div
            className="mb-3 text-base font-semibold text-foreground md:text-lg"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Comment ça marche
          </div>
          <h2
            id="methode-heading"
            className="max-w-2xl font-medium text-foreground"
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

        {/* Boutons Défilement & Pagination */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 mr-2">
            {STAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Aller à l'étape ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? "w-8 bg-accent" : "w-2 bg-border-soft hover:bg-muted-soft"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Étape précédente"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-soft bg-white text-foreground shadow-xs transition-all hover:border-accent/40 hover:bg-accent-soft hover:text-accent active:scale-95"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Étape suivante"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-soft bg-white text-foreground shadow-xs transition-all hover:border-accent/40 hover:bg-accent-soft hover:text-accent active:scale-95"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Grand Écran Défilable (Swipe & Drag fluide) ── */}
      <div className="relative min-h-[420px] sm:min-h-[460px] w-full overflow-hidden rounded-3xl border border-border-soft bg-white p-3 sm:p-4 shadow-2xl">
        <div className="relative h-full min-h-[390px] sm:min-h-[430px] w-full overflow-hidden rounded-[22px] bg-gradient-to-b from-[#fafaf9] to-[#f4f3f0] flex flex-col justify-between p-6 sm:p-10">
          {/* Badge haut gauche */}
          <div className="flex items-center justify-between">
            <span
              className="rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1 text-xs font-bold text-accent"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Étape {current.step} — {current.tag}
            </span>

            <span className="text-xs font-semibold text-muted-soft">
              {currentIndex + 1} / {STAGES.length}
            </span>
          </div>

          {/* Scène animée interactive */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.step}
              initial={reduce ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="my-auto flex items-center justify-center w-full"
            >
              {current.animation}
            </motion.div>
          </AnimatePresence>

          {/* Titre & Description en 1 ligne claire */}
          <div className="pt-4 border-t border-border-soft/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-[18px] sm:text-[21px] font-bold text-foreground">
              {current.title}
            </h3>
            <p className="text-sm text-muted font-normal max-w-lg">
              {current.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
