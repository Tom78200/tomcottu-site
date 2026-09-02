"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

/* ── ICÔNES SVG ÉPURÉES (STYLE APPLE / LINEAR 1.5PX) ── */
function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

function CpuIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="16" x="4" y="4" rx="3" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
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

      {/* ── GRAND WORKFLOW PANORAMIQUE VIVANT & PUR (ZÉRO ÉMOJI, CÂBLES SVG ÉNERGISÉS) ── */}
      <div className="relative mx-auto w-full max-w-6xl py-6 sm:py-12">
        {/* Câbles SVG animés continus avec faisceaux d'énergie fluides (Pas de petits points qui bougent) */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block h-full w-full">
          <svg className="h-full w-full overflow-visible" viewBox="0 0 1000 400" fill="none" preserveAspectRatio="none">
            <defs>
              {/* Dégradé de lumière continue pour les câbles gauche -> centre */}
              <linearGradient id="cableGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0077cd" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#0077cd" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#0077cd" stopOpacity="0.15" />
              </linearGradient>

              {/* Dégradé émeraude pour la sortie automatique */}
              <linearGradient id="cableGradRight1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
              </linearGradient>

              {/* Dégradé bleu accent pour la sortie humaine */}
              <linearGradient id="cableGradRight2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0077cd" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#0077cd" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0077cd" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* ── 4 CÂBLES DE GAUCHE : Rails de base + Faisceaux d'énergie qui glissent ── */}
            {[
              { d: "M 230 80 C 370 80, 390 200, 500 200", delay: 0 },
              { d: "M 230 155 C 370 155, 390 200, 500 200", delay: 0.6 },
              { d: "M 230 245 C 370 245, 390 200, 500 200", delay: 1.2 },
              { d: "M 230 320 C 370 320, 390 200, 500 200", delay: 1.8 },
            ].map((c, i) => (
              <g key={i}>
                {/* Rail de câble statique fin */}
                <path d={c.d} stroke="var(--border-soft)" strokeWidth="2.5" strokeLinecap="round" />

                {/* Impulsion d'énergie fluide continue qui avance de gauche vers la droite */}
                {!reduce && (
                  <motion.path
                    d={c.d}
                    stroke="url(#cableGradLeft)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="120 280"
                    animate={{ strokeDashoffset: [0, -400] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: c.delay,
                    }}
                  />
                )}
              </g>
            ))}

            {/* ── 2 CÂBLES DE DROITE : Centre vers les sorties (Avance vers la droite) ── */}
            {/* Câble 1 (Sortie Émeraude Autonome) */}
            <path d="M 500 200 C 620 200, 640 140, 770 140" stroke="var(--border-soft)" strokeWidth="2.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 500 200 C 620 200, 640 140, 770 140"
                stroke="url(#cableGradRight1)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="100 220"
                animate={{ strokeDashoffset: [0, -320] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
              />
            )}

            {/* Câble 2 (Sortie Bleue Validation) */}
            <path d="M 500 200 C 620 200, 640 260, 770 260" stroke="var(--border-soft)" strokeWidth="2.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 500 200 C 620 200, 640 260, 770 260"
                stroke="url(#cableGradRight2)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="100 220"
                animate={{ strokeDashoffset: [0, -320] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "linear", delay: 0.8 }}
              />
            )}
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4">
          {/* ── 1. COLONNE GAUCHE : Les Outils Sources (Icônes SVG pures) ── */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-bold tracking-wider text-muted-soft uppercase">
                1. Vos flux quotidiens
              </span>
            </div>

            {[
              { label: "Emails & Demandes", sub: "Gmail / Outlook", icon: <MailIcon />, badge: "Synchronisé" },
              { label: "Ressaisie & Devis", sub: "CRM / Facturation", icon: <FileTextIcon />, badge: "Automatique" },
              { label: "Messages & SAV", sub: "Slack / WhatsApp", icon: <MessageSquareIcon />, badge: "Temps réel" },
              { label: "Bases documentaires", sub: "Notion / Drive", icon: <DatabaseIcon />, badge: "Connecté" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={reduce ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-border-soft bg-white p-3.5 shadow-xs transition-all duration-300 hover:border-accent/40 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/5 text-accent border border-accent/15 shadow-xs">
                    {item.icon}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-foreground block">{item.label}</span>
                    <span className="text-[11px] font-medium text-muted-soft">{item.sub}</span>
                  </div>
                </div>

                <span className="rounded-full bg-background px-2.5 py-0.5 text-[10px] font-semibold text-muted-soft border border-border-soft/60">
                  {item.badge}
                </span>
              </motion.div>
            ))}
          </div>

          {/* ── 2. COLONNE CENTRALE : L'Agent IA Métier (Noyau Vectoriel Vivant) ── */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center py-8 lg:py-0 px-2 sm:px-6">
            <div className="relative flex flex-col items-center justify-center">
              {/* Lueur volumétrique d'ambiance */}
              <div className="absolute -inset-10 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              {/* Anneau orbital vectoriel 1 */}
              <motion.div
                animate={reduce ? {} : { rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute h-64 w-64 rounded-full border border-dashed border-accent/25 pointer-events-none"
              />

              {/* Anneau orbital vectoriel 2 */}
              <motion.div
                animate={reduce ? {} : { rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute h-52 w-52 rounded-full border border-dotted border-accent/35 pointer-events-none"
              />

              {/* Boîtier Central Processeur */}
              <motion.div
                initial={reduce ? false : { scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20 flex flex-col items-center rounded-3xl border-2 border-accent bg-white p-7 sm:p-9 text-center shadow-2xl max-w-[290px]"
              >
                {/* Onde de pulsation d'énergie */}
                <div className="relative flex h-20 w-20 items-center justify-center">
                  {!reduce && (
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [0.35, 0, 0.35] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-2xl bg-accent blur-sm"
                    />
                  )}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-accent">
                    <CpuIcon />
                  </div>
                </div>

                <span className="mt-4 text-[18px] font-bold text-foreground tracking-tight">
                  Agent IA Métier
                </span>
                <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Moteur temps réel actif
                </span>

                <div className="mt-5 w-full border-t border-border-soft/70 pt-3 flex items-center justify-between text-[11px]">
                  <span className="text-muted-soft">Temps de réponse</span>
                  <span className="font-bold text-accent">&lt; 0.4 seconde</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── 3. COLONNE DROITE : Les Actions Traitées en Continu ── */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold tracking-wider text-emerald-700 uppercase">
                2. Actions délivrées
              </span>
            </div>

            {/* Voie 1 : Exécution Automatique */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 shadow-xs"
            >
              <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                    Autonome (90%)
                  </span>
                </div>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                  Immédiat
                </span>
              </div>

              <ul className="mt-3 space-y-2">
                {[
                  "Réponse SAV rédigée & envoyée",
                  "Devis généré & loggé au CRM",
                  "Ressaisies supprimées à 100%",
                ].map((act) => (
                  <li key={act} className="flex items-center gap-2 text-xs font-medium text-emerald-950">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Voie 2 : Validation Humaine Sécurisée 1-Clic */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded-2xl border border-accent/25 bg-accent/5 p-4 shadow-xs"
            >
              <div className="flex items-center justify-between pb-2 border-b border-accent/20">
                <div className="flex items-center gap-2 text-accent">
                  <ShieldCheckIcon />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Validation Humaine (10%)
                  </span>
                </div>
                <span className="text-[10px] font-bold text-accent bg-white px-2 py-0.5 rounded-full border border-accent/20">
                  Garde-fous
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-xs text-foreground/80 font-medium">
                  Notification 1-clic Slack/Email pour les cas sensibles
                </p>
                <span className="shrink-0 rounded-lg bg-accent px-3 py-1.5 text-xs font-bold text-white shadow-accent">
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
