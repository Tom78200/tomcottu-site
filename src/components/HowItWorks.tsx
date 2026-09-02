"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

/* ── MOCKUP ANIMÉ ÉTAPE 01 : Scanner & Flux d'outils ── */
function MockupStep1() {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-border-soft/80 bg-background/50 p-4 backdrop-blur-sm">
      {/* Header macOS épuré */}
      <div className="flex items-center justify-between pb-3 border-b border-border-soft/60">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <span className="text-[10px] font-semibold tracking-wider text-accent uppercase">
          Scan des flux en cours
        </span>
      </div>

      {/* Visualisation animée */}
      <div className="mt-4 flex flex-col gap-2.5">
        {[
          { name: "Gmail & Outlook", tag: "Emails répétitifs", gain: "4h/sem" },
          { name: "CRM & Facturation", tag: "Ressaisie devis", gain: "5h/sem" },
          { name: "Notion & Slack", tag: "Tri & synthèses", gain: "3h/sem" },
        ].map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group flex items-center justify-between rounded-xl border border-border-soft/70 bg-white px-3 py-2 shadow-xs transition-colors hover:border-accent/30"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-semibold text-foreground">{item.name}</span>
              <span className="hidden sm:inline text-[11px] text-muted-soft">({item.tag})</span>
            </div>
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
              +{item.gain}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── MOCKUP ANIMÉ ÉTAPE 02 : Architecture & Garde-fous ── */
function MockupStep2() {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-border-soft/80 bg-background/50 p-4 backdrop-blur-sm">
      {/* Header macOS */}
      <div className="flex items-center justify-between pb-3 border-b border-border-soft/60">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <span className="text-[10px] font-semibold tracking-wider text-emerald-600 uppercase">
          Garde-fous 100% actifs
        </span>
      </div>

      {/* Schéma de flux sécurisé */}
      <div className="mt-4 flex h-28 items-center justify-between gap-2">
        {/* Nœud Central Agent */}
        <div className="relative flex flex-1 flex-col items-center justify-center rounded-xl border border-accent/30 bg-white p-3 shadow-xs">
          <div className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-accent-foreground shadow-accent">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M9 8h6M9 12h6M9 16h4" />
            </svg>
          </div>
          <span className="mt-1 text-[11px] font-semibold text-foreground">Agent Métier</span>
          <span className="text-[9px] text-muted-soft">Sur-mesure</span>
        </div>

        {/* Flèches */}
        <div className="flex flex-col gap-3 py-1">
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="text-emerald-500">
            <path d="M2 8h16M14 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="text-accent">
            <path d="M2 8h16M14 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* 2 Règles */}
        <div className="flex flex-1 flex-col gap-2">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 p-2 text-left">
            <span className="text-[10px] font-bold text-emerald-700 block">Exécution auto</span>
            <span className="text-[9px] text-emerald-600/80">Tâches récurrentes</span>
          </div>
          <div className="rounded-lg border border-accent/20 bg-accent/5 p-2 text-left">
            <span className="text-[10px] font-bold text-accent block">Validation humaine</span>
            <span className="text-[9px] text-muted-soft">Cas sensibles</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── MOCKUP ANIMÉ ÉTAPE 03 : Rodage & Certification ── */
function MockupStep3() {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-border-soft/80 bg-background/50 p-4 backdrop-blur-sm">
      {/* Header macOS */}
      <div className="flex items-center justify-between pb-3 border-b border-border-soft/60">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <span className="text-[10px] font-semibold tracking-wider text-accent uppercase">
          Mise en production
        </span>
      </div>

      {/* Jauge de précision & Garantie */}
      <div className="mt-4 flex items-center justify-around gap-3 pt-1">
        {/* Anneau Circulaire */}
        <div className="flex flex-col items-center">
          <div className="relative flex h-16 w-16 items-center justify-center">
            <svg className="h-16 w-16 -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="var(--border-soft)"
                strokeWidth="3"
              />
              <motion.path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="3.2"
                strokeDasharray="100, 100"
                strokeDashoffset="1"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
              />
            </svg>
            <span className="absolute text-xs font-bold text-foreground">99.4%</span>
          </div>
          <span className="mt-1 text-[10px] font-semibold text-muted-soft">Précision validée</span>
        </div>

        {/* Badge Garantie */}
        <div className="flex flex-col items-center rounded-xl border border-accent/25 bg-white p-3 shadow-xs">
          <span className="text-[18px] font-extrabold text-accent leading-none">14j</span>
          <span className="mt-1 text-[11px] font-semibold text-foreground text-center">Garantie complète</span>
          <span className="text-[9px] text-muted-soft">Satisfait ou remboursé</span>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    step: "01",
    tag: "Jour 1 — 48h",
    title: "Analyse de votre activité",
    summary: "Audit de vos outils pour isoler la tâche qui vous coûte le plus de temps.",
    mockup: <MockupStep1 />,
  },
  {
    step: "02",
    tag: "Semaine 1",
    title: "Construction de l'agent",
    summary: "Développement sur-mesure branché directement à vos logiciels métier.",
    mockup: <MockupStep2 />,
  },
  {
    step: "03",
    tag: "Suivi continu",
    title: "Affinage en conditions réelles",
    summary: "Rodage en double commande et garantie 14 jours satisfait ou remboursé.",
    mockup: <MockupStep3 />,
  },
];

/* ── CARTE AVEC MICRO-INTERACTIONS 3D & GLOW ── */
function StepCard({
  item,
  index,
  reduce,
}: {
  item: (typeof steps)[number];
  index: number;
  reduce: boolean | null;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 24,
        delay: reduce ? 0 : index * 0.12,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border-soft bg-white p-6 sm:p-7 shadow-card transition-all duration-300 hover:border-accent/40 hover:shadow-xl"
    >
      {/* Lueur subtile qui suit la souris */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, var(--color-accent-soft), transparent 80%)`,
        }}
      />

      {/* Contenu supérieur : Numéro & En-tête */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {item.step}
          </span>
          <span className="rounded-full bg-background px-3 py-1 text-[11px] font-semibold text-muted-soft border border-border-soft/60">
            {item.tag}
          </span>
        </div>

        <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.02em] text-foreground">
          {item.title}
        </h3>
        <p className="mt-1.5 text-[13px] text-muted leading-relaxed" style={{ textWrap: "pretty" }}>
          {item.summary}
        </p>
      </div>

      {/* Mockup interactif en bas de carte */}
      <div className="relative z-10 mt-6">
        {item.mockup}
      </div>
    </motion.div>
  );
}

export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="methode"
      ref={sectionRef}
      aria-labelledby="methode-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-40 lg:px-16"
    >
      {/* ── En-tête de section sobre & affirmé ── */}
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

      {/* ── 3 Cartes Bento Interactives (Style Linear / Stripe) ── */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {steps.map((item, index) => (
          <StepCard
            key={item.step}
            item={item}
            index={index}
            reduce={reduce}
          />
        ))}
      </div>
    </section>
  );
}
