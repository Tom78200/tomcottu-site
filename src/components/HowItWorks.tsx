"use client";

import { motion, useReducedMotion } from "motion/react";

export function HowItWorks() {
  const reduce = useReducedMotion();

  return (
    <section
      id="methode"
      aria-labelledby="methode-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-44 lg:px-16 overflow-hidden"
    >
      {/* ── En-tête de section sobre ── */}
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

      {/* ── Grand Schéma Panoramique Vivant (End-to-End Workflow) ── */}
      <div className="relative mx-auto w-full max-w-6xl py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4">
          {/* ── COLONNE GAUCHE : Sources & Canaux d'entrée ── */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <div className="mb-1 text-[11px] font-bold tracking-wider text-muted-soft uppercase">
              1. Vos outils existants
            </div>

            {[
              { label: "Emails & Demandes", sub: "Gmail / Outlook", icon: "✉️" },
              { label: "Ressaisie & Devis", sub: "CRM / ERP", icon: "📊" },
              { label: "Messages & SAV", sub: "Slack / WhatsApp", icon: "💬" },
              { label: "Bases internes", sub: "Notion / Drive", icon: "📁" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={reduce ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex items-center justify-between rounded-2xl border border-border-soft bg-white p-3.5 shadow-xs transition-all duration-300 hover:border-accent/40 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-background text-base border border-border-soft/60 shadow-xs">
                    {item.icon}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-foreground block">{item.label}</span>
                    <span className="text-[11px] font-medium text-muted-soft">{item.sub}</span>
                  </div>
                </div>

                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
              </motion.div>
            ))}
          </div>

          {/* ── COLONNE CENTRALE : L'Agent Sur-Mesure & Circuits Connectés ── */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center py-6 lg:py-0 px-2 sm:px-6">
            <div className="relative flex w-full flex-col items-center justify-center">
              {/* Lignes de circuit vectorielles gauche */}
              <div className="hidden lg:block absolute -left-12 inset-y-0 w-24 pointer-events-none">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 200" fill="none">
                  <path d="M0 30 C 50 30, 50 100, 100 100" stroke="var(--color-accent)" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M0 70 C 50 70, 50 100, 100 100" stroke="var(--color-accent)" strokeWidth="2.5" />
                  <path d="M0 130 C 50 130, 50 100, 100 100" stroke="var(--color-accent)" strokeWidth="2.5" />
                  <path d="M0 170 C 50 170, 50 100, 100 100" stroke="var(--color-accent)" strokeWidth="2" strokeDasharray="4 4" />
                  {!reduce && (
                    <motion.circle
                      cx="0"
                      cy="70"
                      r="4"
                      fill="var(--color-accent)"
                      animate={{ cx: [0, 100], cy: [70, 100] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                </svg>
              </div>

              {/* Processeur / Cœur Central Agent */}
              <motion.div
                initial={reduce ? false : { scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center rounded-3xl border-2 border-accent bg-white p-7 sm:p-8 text-center shadow-xl w-full max-w-[280px]"
              >
                {/* Anneau d'onde pulsante */}
                <div className="relative flex h-20 w-20 items-center justify-center">
                  {!reduce && (
                    <motion.div
                      animate={{ scale: [1, 1.35, 1], opacity: [0.35, 0, 0.35] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-2xl bg-accent"
                    />
                  )}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-accent">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M9 8h6M9 12h6M9 16h4" />
                    </svg>
                  </div>
                </div>

                <span className="mt-4 text-[17px] font-bold text-foreground">
                  Agent IA Métier
                </span>
                <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Règles & Garde-fous actifs
                </span>

                <div className="mt-5 w-full border-t border-border-soft/70 pt-3 flex items-center justify-between text-[11px] text-muted-soft">
                  <span>Temps de réponse</span>
                  <span className="font-bold text-foreground">&lt; 1 seconde</span>
                </div>
              </motion.div>

              {/* Lignes de circuit vectorielles droite */}
              <div className="hidden lg:block absolute -right-12 inset-y-0 w-24 pointer-events-none">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 200" fill="none">
                  <path d="M0 100 C 50 100, 50 45, 100 45" stroke="#10b981" strokeWidth="2.5" />
                  <path d="M0 100 C 50 100, 50 155, 100 155" stroke="var(--color-accent)" strokeWidth="2.5" />
                  {!reduce && (
                    <motion.circle
                      cx="0"
                      cy="100"
                      r="4"
                      fill="#10b981"
                      animate={{ cx: [0, 100], cy: [100, 45] }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                </svg>
              </div>
            </div>
          </div>

          {/* ── COLONNE DROITE : Résultats & Actions Réelles ── */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            <div className="mb-1 text-[11px] font-bold tracking-wider text-emerald-700 uppercase">
              2. Actions traitées sans friction
            </div>

            {/* Voie 1 : Exécution Automatique */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 shadow-xs"
            >
              <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                    Autonome (90%)
                  </span>
                </div>
                <span className="text-[11px] font-bold text-emerald-700">Immédiat</span>
              </div>

              <ul className="mt-3 space-y-2">
                {[
                  "Réponse SAV rédigée & personnalisée",
                  "Devis généré & synchronisé dans l'ERP",
                  "Emails triés et classés sans ressaisie",
                ].map((act) => (
                  <li key={act} className="flex items-center gap-2 text-xs font-medium text-emerald-950">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Voie 2 : Validation Humaine Sécurisée */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded-2xl border border-accent/25 bg-accent/5 p-4 shadow-xs"
            >
              <div className="flex items-center justify-between pb-2 border-b border-accent/20">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-accent" />
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">
                    Validation Humaine (10%)
                  </span>
                </div>
                <span className="text-[11px] font-bold text-accent">Sécurisé</span>
              </div>

              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-xs text-foreground/80 font-medium">
                  Notification 1-clic sur Slack/Email pour les cas sensibles
                </p>
                <span className="shrink-0 rounded-lg bg-accent px-2.5 py-1 text-[11px] font-bold text-white shadow-xs">
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
