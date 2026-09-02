"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

/* ── ICÔNES SVG ÉPURÉES (STYLE APPLE / LINEAR 1.5PX) ── */
function MailIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/* ── MODÈLE 3D PROCESSEUR VU DE FACE (STYLE APPLE M4 3D SILICON) ── */
function Model3DAgentCore({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="relative flex flex-col items-center justify-center py-2">
      {/* Espace Scène 3D */}
      <div
        className="relative flex h-56 w-56 sm:h-64 sm:w-64 items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        {/* 1. Anneau orbital extérieur en rotation continue douce */}
        <motion.div
          animate={reduce ? {} : { rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute h-52 w-52 sm:h-56 sm:w-56 rounded-full border border-dashed border-accent/25"
        />

        {/* 2. Anneau orbital intérieur en contre-rotation */}
        <motion.div
          animate={reduce ? {} : { rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute h-40 w-40 sm:h-44 sm:w-44 rounded-full border border-dotted border-accent/35"
        />

        {/* 3. Boîtier Processeur 3D Vu de Face avec Lévitation & Micro-Tilt */}
        <motion.div
          animate={
            reduce
              ? {}
              : {
                  y: [-6, 6, -6],
                  rotateY: [-6, 6, -6],
                  rotateX: [4, -4, 4],
                }
          }
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-36 w-36 sm:h-40 sm:w-40 items-center justify-center rounded-3xl border-2 border-accent/80 bg-white p-4 text-center shadow-2xl"
          style={{
            transformStyle: "preserve-3d",
            boxShadow: "0 20px 40px -15px rgba(0, 119, 205, 0.25), 0 0 0 1px rgba(0, 119, 205, 0.1)",
          }}
        >
          {/* Onde de respiration interne */}
          {!reduce && (
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.05, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-2 rounded-2xl bg-accent"
            />
          )}

          {/* Cœur Silicium de Face */}
          <div
            className="relative z-10 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0088ea] via-[#0077cd] to-[#005fa6] text-white shadow-accent"
            style={{ transform: "translateZ(12px)" }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect width="16" height="16" x="4" y="4" rx="3" />
              <rect width="6" height="6" x="9" y="9" rx="1" fill="currentColor" fillOpacity="0.2" />
              <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
            </svg>

            {/* Reflet spéculaire qui glisse sur la face avant */}
            {!reduce && (
              <motion.div
                animate={{ x: [-40, 70] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent"
              />
            )}
          </div>
        </motion.div>
      </div>

      {/* Titre sobre sous la puce 3D */}
      <span className="mt-2 text-[15px] font-semibold text-foreground tracking-tight">
        Agent IA Métier
      </span>
    </div>
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

      {/* ── GRAND WORKFLOW PANORAMIQUE VIVANT AVEC MODÈLE 3D VU DE FACE ── */}
      <div className="relative mx-auto w-full max-w-6xl py-4 sm:py-8">
        {/* Câbles de connexion */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block h-full w-full">
          <svg className="h-full w-full overflow-visible" viewBox="0 0 1000 400" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="cablePulseLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0077cd" stopOpacity="0" />
                <stop offset="50%" stopColor="#0077cd" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#0077cd" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="cablePulseRight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0077cd" stopOpacity="0" />
                <stop offset="50%" stopColor="#0077cd" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#0077cd" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* 4 Câbles de gauche */}
            {[
              { d: "M 230 75 C 370 75, 390 200, 500 200", delay: 0 },
              { d: "M 230 155 C 370 155, 390 200, 500 200", delay: 0.7 },
              { d: "M 230 245 C 370 245, 390 200, 500 200", delay: 1.4 },
              { d: "M 230 325 C 370 325, 390 200, 500 200", delay: 2.1 },
            ].map((c, i) => (
              <g key={i}>
                <path d={c.d} stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
                {!reduce && (
                  <motion.path
                    d={c.d}
                    stroke="url(#cablePulseLeft)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="90 260"
                    animate={{ strokeDashoffset: [0, -350] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: c.delay,
                    }}
                  />
                )}
              </g>
            ))}

            {/* 2 Câbles de droite */}
            <path d="M 500 200 C 620 200, 640 135, 770 135" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 500 200 C 620 200, 640 135, 770 135"
                stroke="url(#cablePulseRight)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="90 220"
                animate={{ strokeDashoffset: [0, -310] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
              />
            )}

            <path d="M 500 200 C 620 200, 640 265, 770 265" stroke="var(--border-soft)" strokeWidth="1.5" strokeLinecap="round" />
            {!reduce && (
              <motion.path
                d="M 500 200 C 620 200, 640 265, 770 265"
                stroke="url(#cablePulseRight)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="90 220"
                animate={{ strokeDashoffset: [0, -310] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "linear", delay: 0.9 }}
              />
            )}
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4">
          {/* ── 1. COLONNE GAUCHE : Outils Sources ── */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[11px] font-bold tracking-wider text-muted uppercase" style={{ fontFamily: "var(--font-heading)" }}>
                Vos outils existants
              </span>
            </div>

            {[
              { label: "Emails & Demandes", sub: "Gmail / Outlook", icon: <MailIcon /> },
              { label: "Ressaisie & Devis", sub: "CRM / Facturation", icon: <FileTextIcon /> },
              { label: "Messages & SAV", sub: "Slack / WhatsApp", icon: <MessageSquareIcon /> },
              { label: "Bases documentaires", sub: "Notion / Drive", icon: <DatabaseIcon /> },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex items-center justify-between rounded-2xl border border-border-soft bg-white p-3.5 shadow-xs transition-all duration-200 hover:border-accent/30 hover:shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent/5 text-accent border border-accent/15">
                    {item.icon}
                  </span>
                  <div>
                    <span className="text-xs font-semibold text-foreground block">{item.label}</span>
                    <span className="text-[11px] text-muted">{item.sub}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── 2. COLONNE CENTRALE : Modèle 3D Vu de Face (Agent IA) ── */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center py-6 lg:py-0 px-2 sm:px-6">
            <Model3DAgentCore reduce={reduce} />
          </div>

          {/* ── 3. COLONNE DROITE : Actions Délivrées ── */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[11px] font-bold tracking-wider text-muted uppercase" style={{ fontFamily: "var(--font-heading)" }}>
                Actions délivrées
              </span>
            </div>

            {/* Voie 1 : Exécution Automatique */}
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
                    <span className="text-accent font-bold">✓</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Voie 2 : Validation Humaine Sécurisée 1-Clic */}
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
