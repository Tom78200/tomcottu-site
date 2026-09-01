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
    tag: "Étape 01 — Cadrage",
    title: "Analyse de votre activité",
    headline: "Comprendre vos flux réels, pas un questionnaire théorique.",
    timing: "Jour 1 — 48h",
    description:
      "On analyse votre site, vos logiciels métier et les ressaisies qui ralentissent vos équipes chaque semaine.",
    points: [
      "Cartographie des outils déjà en place (Gmail, CRM, ERP, Notion, Slack)",
      "Identification de la tâche précise qui vous fait perdre le plus de temps",
      "Définition des garde-fous : ce que l'agent traite seul, ce qu'il vous soumet",
    ],
    deliverable: {
      type: "Fiche de cadrage",
      badge: "Périmètre validé",
      items: [
        { label: "Sources analysées", value: "Documents internes, emails, process" },
        { label: "Outils branchés", value: "Vos logiciels actuels sans refonte" },
        { label: "Gain estimé", value: "8h à 15h / collaborateur / mois" },
      ],
    },
  },
  {
    step: "02",
    tag: "Étape 02 — Conception",
    title: "Construction de l'agent",
    headline: "Un agent sur-mesure connecté à vos outils, pas un chatbot générique.",
    timing: "Semaine 1",
    description:
      "Je développe et configure votre agent directement dans votre environnement de travail avec toutes les règles de sécurité.",
    points: [
      "Connexion sécurisée et bidirectionnelle avec vos outils existants",
      "Garde-fous stricts : validation humaine obligatoire sur les actions critiques",
      "Hébergement au choix : sur votre machine ou sur serveur dédié",
    ],
    deliverable: {
      type: "Architecture livrée",
      badge: "Prêt au test",
      items: [
        { label: "Hébergement", value: "Chez vous ou cloud dédié sécurisé" },
        { label: "Sécurité", value: "Logs complets & accès restreints" },
        { label: "Propriété", value: "Code et documentation 100% à vous" },
      ],
    },
  },
  {
    step: "03",
    tag: "Étape 03 — Déploiement",
    title: "Affinage en conditions réelles",
    headline: "Des ajustements après mise en service, tant que l'usage n'est pas parfait.",
    timing: "Suivi continu",
    description:
      "L'agent est testé sur vos vrais cas clients. J'ajuste en direct pour que la précision et le comportement collent à 100% à votre quotidien.",
    points: [
      "Période de rodage en double commande avec vos collaborateurs",
      "Ajustement fin des réponses et traitement des cas particuliers",
      "Garantie satisfait ou remboursé sous 14 jours",
    ],
    deliverable: {
      type: "Mise en service",
      badge: "En production",
      items: [
        { label: "Précision", value: "Ajustée sur vos données réelles" },
        { label: "Autonomie", value: "Votre équipe garde la main totale" },
        { label: "Garantie", value: "14 jours pour valider sans risque" },
      ],
    },
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });
  const [activeStep, setActiveStep] = useState(0);
  const [isManual, setIsManual] = useState(false);

  // Défilement automatique plus lent (9.5s) qui s'arrête définitivement dès que l'utilisateur clique
  useEffect(() => {
    if (!inView || reduce || isManual) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stages.length);
    }, 9500);
    return () => clearInterval(interval);
  }, [inView, reduce, isManual]);

  const handleStepClick = (idx: number) => {
    setActiveStep(idx);
    setIsManual(true); // Arrêt définitif du défilement automatique
  };

  const current = stages[activeStep];

  return (
    <section
      id="methode"
      ref={sectionRef}
      aria-labelledby="methode-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-44 lg:px-16"
    >
      {/* ── En-tête de section ── */}
      <div className="mb-14 border-t border-border-soft pt-16 md:mb-20 md:pt-24">
        <div
          className="mb-4 text-base font-semibold text-foreground md:text-lg"
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

      <div className="space-y-8">
        {/* ── Sélecteur / Timeline épuré au sommet ── */}
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
                {/* Ligne indicatrice de progression en haut de l'onglet actif */}
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
                    {stage.timing}
                  </span>
                </div>

                <h3
                  className={`mt-2.5 text-[16px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${
                    isActive ? "text-foreground" : "text-foreground/70"
                  }`}
                >
                  {stage.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* ── Écran Studio Central ── */}
        <div className="relative overflow-hidden rounded-3xl border border-border-soft bg-white p-7 sm:p-10 lg:p-12 shadow-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.step}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start"
            >
              {/* Colonne Gauche : Explications & Actions réelles */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider text-accent"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {current.tag}
                    </span>
                    <span className="text-border">•</span>
                    <span className="text-xs text-muted-soft">
                      {current.timing}
                    </span>
                  </div>

                  <h3
                    className="text-[26px] sm:text-[32px] font-semibold text-foreground tracking-tight"
                    style={{ lineHeight: 1.15 }}
                  >
                    {current.headline}
                  </h3>

                  <p className="mt-4 text-[16px] text-muted leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Liste des actions menées par Tom */}
                <div className="mt-8 pt-6 border-t border-border-soft">
                  <div
                    className="mb-3 text-[11px] font-semibold tracking-[0.09em] text-accent uppercase"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Ce qui est fait concrètement
                  </div>
                  <ul className="flex flex-col gap-3">
                    {current.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-3 text-[15px] text-foreground/85"
                        style={{ lineHeight: 1.5 }}
                      >
                        <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent/30 text-accent">
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
              </div>

              {/* Colonne Droite : Fiche de livrable claire */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-border-soft bg-background/60 p-6 sm:p-7 shadow-sm">
                  <div className="flex items-center justify-between pb-5 border-b border-border-soft">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-soft block">
                        Livrable de l&apos;étape
                      </span>
                      <span className="text-[17px] font-semibold text-foreground">
                        {current.deliverable.type}
                      </span>
                    </div>
                    <span
                      className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {current.deliverable.badge}
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    {current.deliverable.items.map((item) => (
                      <div
                        key={item.label}
                        className="flex flex-col gap-1 rounded-xl bg-white p-3.5 border border-border-soft/60"
                      >
                        <span className="text-[11px] font-medium text-muted-soft uppercase tracking-wider">
                          {item.label}
                        </span>
                        <span className="text-[14px] font-semibold text-foreground">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
