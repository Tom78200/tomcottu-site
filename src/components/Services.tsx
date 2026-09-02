"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import styles from "./UseCases.module.css";
import {
  ActivityLogVisual,
  KnowledgeBaseVisual,
  SelfHostedVisual,
  WorkflowVisual,
} from "./ServiceVisuals";

function ArrowIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 7h8M7.5 3.5 11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:rotate-90"
    >
      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2 2l12 12M14 2 2 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ModalList({
  label,
  items,
  marker,
}: {
  label: string;
  items: string[];
  marker: "check" | "dot";
}) {
  return (
    <div>
      <div
        className="mb-4 text-[11px] font-semibold tracking-[0.09em] text-accent uppercase"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {label}
      </div>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] text-muted" style={{ lineHeight: 1.5 }}>
            {marker === "check" ? (
              <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent/25 text-foreground">
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path
                    d="M1.5 5.2 4 7.5 8.5 2.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            ) : (
              <span className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-accent" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const services = [
  {
    title: "Agent IA sur-mesure",
    body: "Un assistant intelligent qui traite vos emails, devis et tâches répétitives à votre place, selon vos règles métier précises.",
    visual: ActivityLogVisual,
    intro:
      "Un agent construit pour votre quotidien : on cible la tâche qui vous coûte le plus de temps chaque semaine pour l'automatiser de A à Z.",
    livre: [
      "Un agent branché sur vos outils habituels (Gmail, Outlook, CRM…)",
      "Des règles claires : ce qu'il traite seul et ce qu'il vous soumet",
      "Un suivi en direct de chaque action réalisée",
      "Une prise en main facile pour toute votre équipe",
    ],
    deroule: [
      "Testé directement sur vos vraies demandes et vos logiciels",
      "Validé par vos soins avant toute mise en service",
      "Ajustements garantis jusqu'à satisfaction totale",
    ],
  },
  {
    title: "Connexion & Automatisation",
    body: "Synchronisez vos logiciels entre eux pour supprimer définitivement les copier-coller et les doubles saisies manuelles.",
    visual: WorkflowVisual,
    intro:
      "Fini de recopier les données d'un outil à l'autre à la main. Je crée des passerelles automatiques et fluides entre vos applications.",
    livre: [
      "Connexion directe entre vos outils (devis, facturation, CRM, planning)",
      "Gestion automatique des cas d'erreur sans blocage",
      "Historique de synchronisation transparent et vérifiable",
      "Fonctionnement autonome sans coût caché d'abonnement",
    ],
    deroule: [
      "Identification des ressaisies les plus lourdes",
      "Mise en place immédiate et mesure du temps gagné",
      "Extension progressive sans perturber votre activité",
    ],
  },
  {
    title: "Assistant IA Hermes (Sur votre matériel)",
    body: "Installation de l'agent Hermes sur votre propre équipement. Une IA 100% confidentielle où aucune donnée ne sort de votre entreprise.",
    visual: SelfHostedVisual,
    intro:
      "J'installe Hermes, l'agent IA de référence, directement sur votre machine ou serveur privé. Vos données restent chez vous et vous ne payez aucun abonnement d'API externe.",
    livre: [
      "Installation et paramétrage complet de l'agent Hermes",
      "Connexion sécurisée à votre messagerie et à vos outils",
      "Gestion stricte des accès et permissions de votre équipe",
      "Maintenance, sécurité et mises à jour assurées par mes soins",
    ],
    deroule: [
      "Confidentialité absolue : vos données ne transitent par aucun tiers",
      "Indépendance totale : l'agent vous appartient sans abonnement imposé",
      "Suivi technique et accompagnement inclus",
    ],
  },
  {
    title: "Recherche documentaire IA",
    body: "Interrogez tous vos contrats, PDF et procédures internes en français simple pour obtenir la réponse exacte en 2 secondes.",
    visual: KnowledgeBaseVisual,
    intro:
      "Transformez vos dossiers et classeurs en un assistant interne capable de répondre instantanément à n'importe quelle question.",
    livre: [
      "Connexion à vos dossiers (Drive, Notion, SharePoint, PDF, contrats)",
      "Moteur de recherche intelligent en langage naturel",
      "Accès rapide et intuitif pour tous vos collaborateurs",
      "Respect strict de la confidentialité de vos documents",
    ],
    deroule: [
      "Indexation de vos documents clés",
      "Tests de précision sur vos questions types",
      "Mise à disposition immédiate pour vos équipes",
    ],
  },
];

export function Services() {
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-44 lg:px-16"
    >
      <div className="mb-14 border-t border-border-soft pt-16 md:mb-20 md:pt-24">
        <div
          className="mb-4 text-base font-semibold text-foreground md:text-lg"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Services
        </div>
        <h2
          id="services-heading"
          className="max-w-4xl font-medium text-foreground"
          style={{
            fontSize: "clamp(34px, 5vw, 60px)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            textWrap: "balance",
          }}
        >
          Par où vous pouvez commencer.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-7">
        {services.map((item, i) => (
          <motion.button
            key={item.title}
            type="button"
            layoutId={`service-card-${i}`}
            onClick={() => setActiveIndex(i)}
            aria-expanded={activeIndex === i}
            className={`group relative flex flex-col rounded-3xl bg-white p-6 text-left border border-border-soft shadow-soft transition-all duration-300 hover:border-border hover:shadow-card sm:p-7 md:p-8 ${styles.glowCard}`}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: reduce ? 0 : (i % 2) * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Visuel compact et soigné */}
            <div className="mb-6 flex flex-1 items-stretch min-h-[160px] md:min-h-[180px]">
              <item.visual />
            </div>

            <div
              className="mb-2 text-xs font-semibold text-accent"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              0{i + 1}
            </div>

            <div>
              <motion.h3
                layoutId={`service-title-${i}`}
                className="max-w-md font-medium text-foreground"
                style={{
                  fontSize: "clamp(20px, 2vw, 24px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.025em",
                  textWrap: "pretty",
                }}
              >
                {item.title}
              </motion.h3>
              <p
                className="mt-2.5 max-w-md text-[14px] sm:text-[15px] text-muted"
                style={{ lineHeight: 1.55 }}
              >
                {item.body}
              </p>
            </div>

            <span className="mt-6 flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-background text-foreground/60 shadow-xs transition-all duration-300 group-hover:border-foreground/30 group-hover:text-foreground">
              <PlusIcon />
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <>
            <motion.div
              key="voile"
              className="fixed inset-0 z-[60] bg-accent/50 backdrop-blur-sm"
              onClick={() => setActiveIndex(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
            <div
              key="dialogue"
              className="fixed inset-0 z-[61] flex items-center justify-center overflow-y-auto p-5 sm:p-8"
            >
              <motion.div
                layoutId={`service-card-${activeIndex}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="dialog-title"
                className="relative my-auto flex w-full max-w-2xl flex-col rounded-3xl bg-white p-8 shadow-2xl sm:p-10 md:p-12"
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-start justify-between gap-6 border-b border-border-soft pb-6">
                  <div>
                    <div
                      className="mb-2 text-xs font-semibold text-accent"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      DÉTAIL DU SERVICE 0{activeIndex + 1}
                    </div>
                    <motion.h3
                      id="dialog-title"
                      layoutId={`service-title-${activeIndex}`}
                      className="font-medium text-foreground"
                      style={{
                        fontSize: "clamp(24px, 2.8vw, 32px)",
                        lineHeight: 1.15,
                        letterSpacing: "-0.025em",
                      }}
                    >
                      {services[activeIndex].title}
                    </motion.h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(null)}
                    aria-label="Fermer le dialogue"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-soft bg-background text-foreground/60 transition-colors hover:border-foreground/30 hover:text-foreground"
                  >
                    <CloseIcon />
                  </button>
                </div>

                <div className="flex flex-col gap-8 pt-6">
                  <p className="text-[16px] text-foreground" style={{ lineHeight: 1.6 }}>
                    {services[activeIndex].intro}
                  </p>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <ModalList
                      label="Ce qui est livré"
                      items={services[activeIndex].livre}
                      marker="check"
                    />
                    <ModalList
                      label="Comment ça se passe"
                      items={services[activeIndex].deroule}
                      marker="dot"
                    />
                  </div>

                  <div className="flex flex-col items-start justify-between gap-4 border-t border-border-soft pt-6 sm:flex-row sm:items-center">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-accent-foreground shadow-accent transition-all duration-200 hover:bg-accent-hover hover:shadow-lg"
                    >
                      Discuter de ce service
                      <ArrowIcon />
                    </a>
                    <span className="text-xs text-muted">
                      Premier échange de 30 min, sans engagement
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
