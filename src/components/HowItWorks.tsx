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

/* ── NOYAU AGENT IA HIGH-TECH MINIMALISTE (PUCE PROCESSEUR IA) ── */
function Model3DAgentCore({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="relative flex flex-col items-center justify-center py-2">
      {/* Cœur Agent IA en lévitation sobre et high-tech */}
      <motion.div
        animate={
          reduce
            ? {}
            : {
                y: [-4, 4, -4],
              }
        }
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-3xl border border-accent/40 bg-white p-2.5 shadow-card"
      >
        {/* Processeur IA Central Bleu Profond */}
        <div className="relative z-10 flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[#0088ea] to-[#005fa6] text-white shadow-accent">
          {/* Puce Microprocesseur AI */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="4" y="4" width="16" height="16" rx="3" />
            <rect x="8.5" y="8.5" width="7" height="7" rx="1.5" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
          </svg>

          {/* Micro-lueur interne */}
          <span className="pointer-events-none absolute inset-0 rounded-2xl bg-white/10" />
        </div>
      </motion.div>

      {/* Titre sous le cœur IA */}
      <span className="mt-2 text-xs sm:text-[14px] font-semibold text-foreground tracking-tight">
        Agent IA Métier
      </span>
    </div>
  );
}

const inputTools = [
  {
    label: "Emails & Demandes",
    shortLabel: "Emails",
    icon: <MailIcon />,
    colorStyle: "bg-rose-50 text-rose-600 border-rose-200/80",
    dot: "bg-rose-500",
  },
  {
    label: "Ressaisie & Devis",
    shortLabel: "Devis",
    icon: <FileTextIcon />,
    colorStyle: "bg-amber-50 text-amber-600 border-amber-200/80",
    dot: "bg-amber-500",
  },
  {
    label: "Messages & SAV",
    shortLabel: "Messages",
    icon: <MessageSquareIcon />,
    colorStyle: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    dot: "bg-emerald-500",
  },
  {
    label: "Bases documentaires",
    shortLabel: "Bases",
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
      {/* ── 1. VERSION MOBILE DÉDIÉE (< lg) : 4 OUTILS RELIÉS 100% AU CŒUR ── */}
      {/* ═════════════════════════════════════════════════════════════════════ */}
      <div className="block lg:hidden w-full max-w-md mx-auto">
        {/* Étape 1 : Les 4 outils d'entrée en 4 colonnes compactes */}
        <div className="flex items-center gap-2 mb-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-[11px] font-bold tracking-wider text-muted uppercase" style={{ fontFamily: "var(--font-heading)" }}>
            Vos outils sources
          </span>
        </div>

        <div className="grid grid-cols-4 gap-1.5">
          {inputTools.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center rounded-xl border border-border-soft bg-white p-2 text-center shadow-xs"
            >
              <span className={`flex h-7 w-7 items-center justify-center rounded-lg border ${item.colorStyle} mb-1`}>
                {item.icon}
              </span>
              <span className="text-[10px] font-semibold text-foreground leading-tight truncate w-full">
                {item.shortLabel}
              </span>
            </div>
          ))}
        </div>

        {/* ── 4 CÂBLES LASER QUI PARTENT DIRECTEMENT DE CHAQUE OUTIL VERS L'ORBE ── */}
        <div className="w-full my-[-4px] overflow-visible">
          <svg className="w-full h-20 overflow-visible" viewBox="0 0 360 80" fill="none" preserveAspectRatio="none">
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

            {/* Câble 1 : Directement sous Outil 1 (Emails) -> x=45 */}
            <path d="M 45 0 C 45 45, 180 35, 180 80" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 45 0 C 45 45, 180 35, 180 80"
                stroke="url(#mCablePulseRed)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="45 100"
                animate={{ strokeDashoffset: [0, -145] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
              />
            )}

            {/* Câble 2 : Directement sous Outil 2 (Devis) -> x=135 */}
            <path d="M 135 0 C 135 40, 180 40, 180 80" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 135 0 C 135 40, 180 40, 180 80"
                stroke="url(#mCablePulseAmber)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="45 100"
                animate={{ strokeDashoffset: [0, -145] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "linear", delay: 0.5 }}
              />
            )}

            {/* Câble 3 : Directement sous Outil 3 (Messages) -> x=225 */}
            <path d="M 225 0 C 225 40, 180 40, 180 80" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 225 0 C 225 40, 180 40, 180 80"
                stroke="url(#mCablePulseEmerald)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="45 100"
                animate={{ strokeDashoffset: [0, -145] }}
                transition={{ duration: 2.3, repeat: Infinity, ease: "linear", delay: 1.1 }}
              />
            )}

            {/* Câble 4 : Directement sous Outil 4 (Bases) -> x=315 */}
            <path d="M 315 0 C 315 45, 180 35, 180 80" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 315 0 C 315 45, 180 35, 180 80"
                stroke="url(#mCablePulseViolet)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="45 100"
                animate={{ strokeDashoffset: [0, -145] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.6 }}
              />
            )}
          </svg>
        </div>

        {/* Étape 2 : Cœur Agent IA en Lévitation */}
        <div className="flex flex-col items-center justify-center">
          <Model3DAgentCore reduce={reduce} />
        </div>

        {/* ── 2 CÂBLES LASER COURBES DE DIVERGENCE VERS LES ACTIONS ── */}
        <div className="w-full my-[-4px] overflow-visible">
          <svg className="w-full h-18 overflow-visible" viewBox="0 0 360 72" fill="none" preserveAspectRatio="none">
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
            <path d="M 180 0 C 180 35, 90 35, 90 72" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 180 0 C 180 35, 90 35, 90 72"
                stroke="url(#mCablePulseRightEmerald)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="45 100"
                animate={{ strokeDashoffset: [0, -145] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.3 }}
              />
            )}

            {/* Sortie 2 : Vers Carte Validation (Droite) */}
            <path d="M 180 0 C 180 35, 270 35, 270 72" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 180 0 C 180 35, 270 35, 270 72"
                stroke="url(#mCablePulseRightBlue)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="45 100"
                animate={{ strokeDashoffset: [0, -145] }}
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
