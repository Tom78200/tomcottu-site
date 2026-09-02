"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}

function MessageSquareIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/* ── NOYAU ORBE CIRCULAIRE 3D VIVANT (100% ROND, DESIGN ORIGINAL) ── */
function Model3DAgentCore({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="relative flex flex-col items-center justify-center py-2">
      {/* Espace Scène Circulaire 3D */}
      <div
        className="relative flex h-48 w-48 sm:h-60 sm:w-60 items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        {/* 1. Anneau orbital extérieur en rotation continue douce */}
        <motion.div
          animate={reduce ? {} : { rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute h-44 w-44 sm:h-54 sm:w-54 rounded-full border border-dashed border-accent/30"
        />

        {/* 2. Anneau orbital intérieur en contre-rotation */}
        <motion.div
          animate={reduce ? {} : { rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute h-34 w-34 sm:h-42 sm:w-42 rounded-full border border-dotted border-accent/40"
        />

        {/* 3. L'Orbe / Disque 3D Circulaire en Lévitation */}
        <motion.div
          animate={
            reduce
              ? {}
              : {
                  y: [-6, 6, -6],
                  rotateY: [-5, 5, -5],
                  rotateX: [3, -3, 3],
                }
          }
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-32 w-32 sm:h-38 sm:w-38 items-center justify-center rounded-full border-2 border-accent/80 bg-white p-2.5 sm:p-3 shadow-2xl"
          style={{
            transformStyle: "preserve-3d",
            boxShadow: "0 20px 40px -12px rgba(0, 119, 205, 0.25), 0 0 0 1px rgba(0, 119, 205, 0.1)",
          }}
        >
          {/* Onde de respiration circulaire */}
          {!reduce && (
            <motion.div
              animate={{ scale: [1, 1.18, 1], opacity: [0.25, 0.05, 0.25] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-1.5 rounded-full bg-accent"
            />
          )}

          {/* Cœur Sphérique Bleu avec Puce Vectorielle */}
          <div
            className="relative z-10 flex h-22 w-22 sm:h-26 sm:w-26 items-center justify-center rounded-full bg-gradient-to-br from-[#0088ea] via-[#0077cd] to-[#005fa6] text-white shadow-accent overflow-hidden"
            style={{ transform: "translateZ(12px)" }}
          >
            {/* Symbole IA Métier Vectoriel */}
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="sm:w-9 sm:h-9">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
              <path d="m4.93 4.93 2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
            </svg>

            {/* Reflet spéculaire lumineux courbé */}
            {!reduce && (
              <motion.div
                animate={{ x: [-45, 65] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                className="pointer-events-none absolute inset-0 rounded-full -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />
            )}
          </div>
        </motion.div>
      </div>

      {/* Titre sous l'orbe 3D */}
      <span className="mt-1 text-sm sm:text-[15px] font-semibold text-foreground tracking-tight">
        Agent IA Métier
      </span>
    </div>
  );
}

const inputTools = [
  {
    label: "Emails & Demandes",
    icon: <MailIcon />,
    colorStyle: "bg-rose-50 text-rose-600 border-rose-200/80",
    dot: "bg-rose-500",
  },
  {
    label: "Ressaisie & Devis",
    icon: <FileTextIcon />,
    colorStyle: "bg-amber-50 text-amber-600 border-amber-200/80",
    dot: "bg-amber-500",
  },
  {
    label: "Messages & SAV",
    icon: <MessageSquareIcon />,
    colorStyle: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    dot: "bg-emerald-500",
  },
  {
    label: "Bases documentaires",
    icon: <DatabaseIcon />,
    colorStyle: "bg-violet-50 text-violet-600 border-violet-200/80",
    dot: "bg-violet-500",
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="methode"
      ref={sectionRef}
      aria-labelledby="methode-heading"
      className="relative w-full px-5 pb-32 sm:px-10 md:pb-44 lg:px-16 overflow-hidden"
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
          Vos outils connectés. Vos tâches automatisées.
        </h2>
      </div>

      {/* ── Halo dégradé bleu doux d'ambiance (Style Hero) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 -z-10 h-[550px] w-full"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 50%, var(--accent-soft) 0%, transparent 75%)",
          opacity: 0.9,
        }}
      />

      {/* ═════════════════════════════════════════════════════════════════════ */}
      {/* ── 1. VERSION MOBILE DÉDIÉE (< lg) : FLUX VERTICAL LASER ANIMÉ ──── */}
      {/* ═════════════════════════════════════════════════════════════════════ */}
      <div className="block lg:hidden w-full max-w-md mx-auto">
        {/* Étape 1 : Les 4 outils d'entrée */}
        <div className="flex items-center gap-2 mb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-[11px] font-bold tracking-wider text-muted uppercase" style={{ fontFamily: "var(--font-heading)" }}>
            Vos outils existants
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {inputTools.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-xl border border-border-soft bg-white p-2.5 shadow-xs"
            >
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${item.colorStyle}`}>
                {item.icon}
              </span>
              <span className="text-[11px] font-semibold text-foreground leading-tight truncate">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── 4 CÂBLES LASER COURBES DE CONVERGENCE VERTICALE ── */}
        <div className="w-full my-[-2px] overflow-visible">
          <svg className="w-full h-16 overflow-visible" viewBox="0 0 360 64" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="mCablePulseRed" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ea4335" stopOpacity="0" />
                <stop offset="50%" stopColor="#ea4335" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ea4335" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="mCablePulseAmber" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="mCablePulseEmerald" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="mCablePulseViolet" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Tracé 1 : Rouge */}
            <path d="M 45 0 C 45 35, 180 25, 180 64" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 45 0 C 45 35, 180 25, 180 64"
                stroke="url(#mCablePulseRed)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="40 90"
                animate={{ strokeDashoffset: [0, -130] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
              />
            )}

            {/* Tracé 2 : Ambre */}
            <path d="M 135 0 C 135 30, 180 30, 180 64" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 135 0 C 135 30, 180 30, 180 64"
                stroke="url(#mCablePulseAmber)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="40 90"
                animate={{ strokeDashoffset: [0, -130] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "linear", delay: 0.5 }}
              />
            )}

            {/* Tracé 3 : Émeraude */}
            <path d="M 225 0 C 225 30, 180 30, 180 64" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 225 0 C 225 30, 180 30, 180 64"
                stroke="url(#mCablePulseEmerald)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="40 90"
                animate={{ strokeDashoffset: [0, -130] }}
                transition={{ duration: 2.3, repeat: Infinity, ease: "linear", delay: 1.1 }}
              />
            )}

            {/* Tracé 4 : Violet */}
            <path d="M 315 0 C 315 35, 180 25, 180 64" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 315 0 C 315 35, 180 25, 180 64"
                stroke="url(#mCablePulseViolet)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="40 90"
                animate={{ strokeDashoffset: [0, -130] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.6 }}
              />
            )}
          </svg>
        </div>

        {/* Étape 2 : Cœur Agent IA en Lévitation */}
        <div className="flex flex-col items-center justify-center py-1">
          <Model3DAgentCore reduce={reduce} />
        </div>

        {/* ── 2 CÂBLES LASER COURBES DE DIVERGENCE VERTICALE ── */}
        <div className="w-full my-[-2px] overflow-visible">
          <svg className="w-full h-16 overflow-visible" viewBox="0 0 360 64" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="mCablePulseRightEmerald" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="mCablePulseRightBlue" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Sortie 1 : Vers Carte Autonome (Gauche) */}
            <path d="M 180 0 C 180 30, 90 30, 90 64" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 180 0 C 180 30, 90 30, 90 64"
                stroke="url(#mCablePulseRightEmerald)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="40 90"
                animate={{ strokeDashoffset: [0, -130] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.3 }}
              />
            )}

            {/* Sortie 2 : Vers Carte Validation (Droite) */}
            <path d="M 180 0 C 180 30, 270 30, 270 64" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 180 0 C 180 30, 270 30, 270 64"
                stroke="url(#mCablePulseRightBlue)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="40 90"
                animate={{ strokeDashoffset: [0, -130] }}
                transition={{ duration: 2.3, repeat: Infinity, ease: "linear", delay: 0.8 }}
              />
            )}
          </svg>
        </div>

        {/* Étape 3 : Actions Délivrées */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-[11px] font-bold tracking-wider text-muted uppercase" style={{ fontFamily: "var(--font-heading)" }}>
              Actions délivrées
            </span>
          </div>

          <div className="rounded-2xl border border-border-soft bg-white p-3.5 shadow-xs">
            <div className="flex items-center gap-2 pb-2 border-b border-border-soft">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                Autonome (90%)
              </span>
            </div>
            <ul className="mt-2.5 space-y-1.5 text-xs text-foreground/85">
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Réponse SAV rédigée & envoyée</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Devis généré & synchronisé au CRM</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border-soft bg-white p-3.5 shadow-xs flex items-center justify-between gap-3">
            <div>
              <span className="text-xs font-semibold text-foreground block">Validation Humaine (10%)</span>
              <span className="text-[11px] text-muted">Notification pour les cas sensibles</span>
            </div>
            <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground shadow-xs">
              Valider
            </span>
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════ */}
      {/* ── 2. VERSION DESKTOP GRAND ÉCRAN (lg:block) : WORKFLOW PANORAMIQUE ─ */}
      {/* ═════════════════════════════════════════════════════════════════════ */}
      <div className="relative mx-auto hidden lg:block w-full max-w-6xl py-6">
        {/* Câbles de connexion avec couleur dédiée par outil */}
        <div className="pointer-events-none absolute inset-0 h-full w-full">
          <svg className="h-full w-full overflow-visible" viewBox="0 0 1000 400" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="cablePulseRed" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ea4335" stopOpacity="0" />
                <stop offset="50%" stopColor="#ea4335" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ea4335" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="cablePulseAmber" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="cablePulseEmerald" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="cablePulseViolet" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="cablePulseRightEmerald" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="cablePulseRightBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Câble 1 : Rouge */}
            <path d="M 230 65 C 360 65, 380 200, 500 200" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 230 65 C 360 65, 380 200, 500 200"
                stroke="url(#cablePulseRed)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="90 220"
                animate={{ strokeDashoffset: [0, -310] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
              />
            )}

            {/* Câble 2 : Ambre */}
            <path d="M 230 155 C 360 155, 380 200, 500 200" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 230 155 C 360 155, 380 200, 500 200"
                stroke="url(#cablePulseAmber)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="90 220"
                animate={{ strokeDashoffset: [0, -310] }}
                transition={{ duration: 3.1, repeat: Infinity, ease: "linear", delay: 0.7 }}
              />
            )}

            {/* Câble 3 : Émeraude */}
            <path d="M 230 245 C 360 245, 380 200, 500 200" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 230 245 C 360 245, 380 200, 500 200"
                stroke="url(#cablePulseEmerald)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="90 220"
                animate={{ strokeDashoffset: [0, -310] }}
                transition={{ duration: 2.9, repeat: Infinity, ease: "linear", delay: 1.4 }}
              />
            )}

            {/* Câble 4 : Violet */}
            <path d="M 230 335 C 360 335, 380 200, 500 200" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 230 335 C 360 335, 380 200, 500 200"
                stroke="url(#cablePulseViolet)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="90 220"
                animate={{ strokeDashoffset: [0, -310] }}
                transition={{ duration: 3.3, repeat: Infinity, ease: "linear", delay: 2.1 }}
              />
            )}

            {/* Câbles de sortie */}
            <path d="M 500 200 C 620 200, 640 135, 770 135" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 500 200 C 620 200, 640 135, 770 135"
                stroke="url(#cablePulseRightEmerald)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="90 220"
                animate={{ strokeDashoffset: [0, -310] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "linear", delay: 0.3 }}
              />
            )}

            <path d="M 500 200 C 620 200, 640 265, 770 265" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 500 200 C 620 200, 640 265, 770 265"
                stroke="url(#cablePulseRightBlue)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="90 220"
                animate={{ strokeDashoffset: [0, -310] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "linear", delay: 0.9 }}
              />
            )}
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-12 items-center gap-4">
          {/* 1. Outils Sources */}
          <div className="col-span-3 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[11px] font-bold tracking-wider text-muted uppercase" style={{ fontFamily: "var(--font-heading)" }}>
                Vos outils existants
              </span>
            </div>

            {inputTools.map((item, i) => (
              <motion.div
                key={item.label}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex items-center justify-between rounded-2xl border border-border-soft bg-white p-3.5 shadow-xs transition-all duration-200 hover:border-accent/30 hover:shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-xl border ${item.colorStyle}`}>
                    {item.icon}
                  </span>
                  <span className="text-xs font-semibold text-foreground">{item.label}</span>
                </div>
                <span className={`h-2 w-2 rounded-full ${item.dot} opacity-80`} />
              </motion.div>
            ))}
          </div>

          {/* 2. Orbe 3D Agent IA */}
          <div className="col-span-6 flex flex-col items-center justify-center py-0 px-6">
            <Model3DAgentCore reduce={reduce} />
          </div>

          {/* 3. Actions Délivrées */}
          <div className="col-span-3 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[11px] font-bold tracking-wider text-muted uppercase" style={{ fontFamily: "var(--font-heading)" }}>
                Actions délivrées
              </span>
            </div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.12 }}
              className="rounded-2xl border border-border-soft bg-white p-4 shadow-xs"
            >
              <div className="flex items-center justify-between pb-2.5 border-b border-border-soft">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                    Autonome (90%)
                  </span>
                </div>
              </div>
              <ul className="mt-3 space-y-2">
                {[
                  "Réponse SAV rédigée & envoyée",
                  "Devis généré & synchronisé au CRM",
                  "Ressaisies supprimées à 100%",
                ].map((act) => (
                  <li key={act} className="flex items-center gap-2 text-xs font-medium text-foreground/85">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-2xl border border-border-soft bg-white p-4 shadow-xs"
            >
              <div className="flex items-center justify-between pb-2.5 border-b border-border-soft">
                <div className="flex items-center gap-1.5 text-foreground">
                  <ShieldCheckIcon />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Validation Humaine (10%)
                  </span>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-xs text-muted font-normal leading-tight">
                  Notification pour les cas sensibles
                </p>
                <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground shadow-accent transition-all duration-200">
                  Valider
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
