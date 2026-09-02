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
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-6 sm:p-10">
      {/* Cercles radar concentriques */}
      <div className="absolute flex items-center justify-center">
        <div className="h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] rounded-full border border-accent/15" />
        <div className="absolute h-[140px] w-[140px] sm:h-[200px] sm:w-[200px] rounded-full border border-accent/25" />
        <div className="absolute h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full border border-accent/40" />

        {/* Faisceau de scan rotatif continu */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, ease: "linear", repeat: Infinity }}
          className="absolute h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] rounded-full"
          style={{
            background: "conic-gradient(from 0deg, transparent 70%, var(--color-accent-soft) 95%, var(--color-accent) 100%)",
            opacity: 0.35,
          }}
        />
      </div>

      {/* 4 Nœuds d'outils en orbite avec pulsations */}
      {[
        { name: "Gmail", top: "18%", left: "22%", delay: 0 },
        { name: "CRM / Devis", top: "20%", right: "22%", delay: 1.5 },
        { name: "Notion / ERP", bottom: "18%", left: "26%", delay: 3 },
        { name: "Slack / WhatsApp", bottom: "20%", right: "24%", delay: 4.5 },
      ].map((node, i) => (
        <motion.div
          key={node.name}
          initial={{ scale: 0.9, opacity: 0.7 }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
          style={{ position: "absolute", top: node.top, bottom: node.bottom, left: node.left, right: node.right }}
          className="z-10 flex items-center gap-2 rounded-xl border border-border-soft bg-white px-3.5 py-1.5 shadow-sm backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-xs font-semibold text-foreground">{node.name}</span>
        </motion.div>
      ))}

      {/* Cœur Central : Audit & Gain détecté */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center rounded-2xl border-2 border-accent bg-white p-5 text-center shadow-xl"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-accent">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <span className="mt-2.5 text-[15px] font-bold text-foreground">Audit 48h</span>
        <span className="text-[11px] font-semibold text-accent">Tâche prioritaire ciblée</span>
      </motion.div>
    </div>
  );
}

/* ── ANIMATION 02 : Processeur & Flux sécurisés (Conception) ── */
function AnimationStage2() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-6 sm:p-10">
      {/* Fond de grille vectorielle animée */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <svg className="h-full w-full" viewBox="0 0 400 300" fill="none">
          <path d="M50 150 H350" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M200 50 V250" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="150" r="90" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="relative z-10 flex w-full max-w-xl items-center justify-between gap-4">
        {/* Entrée de données client */}
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center rounded-2xl border border-border-soft bg-white p-4 shadow-sm text-center"
        >
          <span className="text-[10px] font-bold text-muted-soft uppercase tracking-wider">Entrée</span>
          <span className="mt-1 text-xs font-bold text-foreground">Demande Client</span>
          <span className="mt-0.5 text-[10px] text-accent">24h / 24</span>
        </motion.div>

        {/* Lignes de circuit animées */}
        <div className="relative flex flex-1 items-center justify-center">
          <svg className="w-full h-24 overflow-visible" viewBox="0 0 120 60" fill="none">
            <path d="M0,30 H50" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" />
            <motion.circle
              cx="0"
              cy="30"
              r="3.5"
              fill="var(--color-accent)"
              animate={{ cx: [0, 50] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>

        {/* Processeur Central Agent */}
        <div className="relative flex flex-col items-center rounded-2xl border-2 border-accent bg-white p-5 shadow-xl">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-accent">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-xl border-2 border-dashed border-white/40"
            />
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M9 8h6M9 12h6M9 16h4" />
            </svg>
          </div>
          <span className="mt-2.5 text-[14px] font-bold text-foreground">Agent Sur-mesure</span>
          <span className="text-[10px] font-semibold text-emerald-600">Règles métier validées</span>
        </div>

        {/* Lignes de sortie */}
        <div className="relative flex flex-1 items-center justify-center">
          <svg className="w-full h-24 overflow-visible" viewBox="0 0 120 60" fill="none">
            <path d="M0,30 C30,30 40,15 120,15" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
            <path d="M0,30 C30,30 40,45 120,45" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* 2 Règles sécurisées */}
        <div className="flex flex-col gap-2.5">
          <motion.div
            animate={{ opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50/90 px-3.5 py-2 text-left"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <div>
              <span className="text-[11px] font-bold text-emerald-800 block">Exécution auto</span>
              <span className="text-[9px] text-emerald-600">Tâches standard</span>
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/5 px-3.5 py-2 text-left"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            <div>
              <span className="text-[11px] font-bold text-accent block">Avis humain</span>
              <span className="text-[9px] text-muted-soft">Cas critiques</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ── ANIMATION 03 : Rodage en direct & Certification ── */
function AnimationStage3() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-6 sm:p-10">
      <div className="relative z-10 flex w-full max-w-xl items-center justify-around gap-6">
        {/* Flux de tickets traités en continu */}
        <div className="flex flex-col gap-2.5">
          {[
            { id: "#041", text: "Email trié & traité", time: "0.4s" },
            { id: "#042", text: "Devis généré & prêt", time: "0.8s" },
            { id: "#043", text: "Ressaisie validée", time: "0.3s" },
          ].map((ticket, i) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="flex items-center justify-between gap-4 rounded-xl border border-border-soft bg-white px-3.5 py-2 shadow-xs"
            >
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold text-xs">✓</span>
                <span className="text-xs font-medium text-foreground">{ticket.text}</span>
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                {ticket.time}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Jauge Circulaire de Précision 100% */}
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
          <span className="mt-2 text-xs font-semibold text-muted-soft">Sur vos données réelles</span>
        </div>

        {/* Sceau de Garantie 14 jours */}
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center rounded-2xl border-2 border-accent bg-white p-5 text-center shadow-xl"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <span className="mt-2.5 text-[15px] font-bold text-foreground">Garantie 14j</span>
          <span className="text-[10px] font-medium text-muted-soft">Satisfait ou remboursé</span>
        </motion.div>
      </div>
    </div>
  );
}

const STAGES = [
  {
    step: "01",
    tag: "Audit 48h",
    title: "Diagnostic & Cartographie",
    caption: "On identifie la tâche unique qui vous coûte le plus de temps.",
    animation: <AnimationStage1 />,
  },
  {
    step: "02",
    tag: "Semaine 1",
    title: "Construction sur-mesure",
    caption: "L'agent est codé pour vos outils avec des garde-fous stricts.",
    animation: <AnimationStage2 />,
  },
  {
    step: "03",
    tag: "Suivi continu",
    title: "Mise en service & Rodage",
    caption: "Calibrage sur vos données réelles avec 14 jours de garantie.",
    animation: <AnimationStage3 />,
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.2 });

  const [activeStage, setActiveStage] = useState(0);
  const [isManual, setIsManual] = useState(false);

  // Défilement automatique fluide (8s)
  useEffect(() => {
    if (!inView || reduce || isManual) return;
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [inView, reduce, isManual]);

  const handleSelect = (idx: number) => {
    setActiveStage(idx);
    setIsManual(true);
  };

  const current = STAGES[activeStage];

  return (
    <section
      id="methode"
      ref={sectionRef}
      aria-labelledby="methode-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-44 lg:px-16"
    >
      {/* ── En-tête de section ── */}
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
        {/* ── 3 Onglets Épurés ── */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {STAGES.map((st, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={st.step}
                type="button"
                onClick={() => handleSelect(idx)}
                className={`group relative flex flex-col rounded-2xl p-5 text-left transition-all duration-300 border ${
                  isActive
                    ? "border-accent/50 bg-white shadow-soft"
                    : "border-border-soft/70 bg-background/50 hover:bg-white/60 hover:border-border"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-stage-line"
                    className="absolute top-0 inset-x-6 h-[2.5px] rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                )}

                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm font-bold transition-colors duration-200 ${
                      isActive ? "text-accent" : "text-muted-soft"
                    }`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {st.step}
                  </span>
                  <span className="rounded-full bg-background/80 px-2.5 py-0.5 text-[10px] font-semibold text-muted-soft border border-border-soft/60">
                    {st.tag}
                  </span>
                </div>

                <h3
                  className={`mt-2.5 text-[16px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${
                    isActive ? "text-foreground" : "text-foreground/75"
                  }`}
                >
                  {st.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* ── Grand Écran Animé 100% Vectoriel (Zéro Image) ── */}
        <div className="relative min-h-[360px] sm:min-h-[400px] w-full overflow-hidden rounded-3xl border border-border-soft bg-white p-2 shadow-2xl">
          <div className="relative h-full min-h-[340px] sm:min-h-[380px] w-full overflow-hidden rounded-[20px] bg-gradient-to-b from-[#fafaf9] to-[#f4f3f0] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.step}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full w-full flex-1 flex items-center justify-center"
              >
                {current.animation}
              </motion.div>
            </AnimatePresence>

            {/* Légende flottante translucide minimale */}
            <div className="relative z-20 p-4 sm:p-6 pt-0">
              <div className="rounded-2xl border border-white/80 bg-white/85 px-5 py-3 backdrop-blur-md shadow-sm inline-flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-xs sm:text-sm font-semibold text-foreground">
                  {current.caption}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
