"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import styles from "./UseCases.module.css";
import {
  ActivityLogVisual,
  AdviceVisual,
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
        className="mb-4 text-[11px] tracking-[0.09em] text-accent/40 uppercase"
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
              <span className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-accent/35" />
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
    title: "Agents IA sur-mesure",
    body: "Des assistants intelligents connectés à vos outils, qui prennent les décisions simples à votre place. Construits et testés sur vos vraies données.",
    visual: ActivityLogVisual,
    intro:
      "Un agent est construit pour une tâche précise, pas pour tout faire. On choisit ensemble celle qui vous coûte le plus de temps chaque semaine, et je construis autour.",
    livre: [
      "Un agent branché sur vos outils existants, sans changer votre façon de travailler",
      "Les règles métier et les garde-fous : ce qu'il traite seul, ce qu'il vous soumet",
      "Un historique consultable de ce qu'il a fait, et sur quelles informations",
      "La documentation pour que votre équipe comprenne ce qui tourne",
    ],
    deroule: [
      "On part d'un cas réel et de vos vraies données, jamais d'un jeu de démonstration",
      "Vous le testez en conditions réelles avant toute mise en service",
      "J'ajuste tant que son comportement ne colle pas à votre usage",
    ],
  },
  {
    title: "Automatisation de workflows",
    body: "Connecter vos systèmes entre eux pour supprimer les ressaisies et les tâches répétitives. Chaque automatisation est cadrée et mesurable.",
    visual: WorkflowVisual,
    intro:
      "Quand deux outils ne se parlent pas, c'est quelqu'un qui fait le pont à la main. C'est ce pont que j'automatise, et lui seul.",
    livre: [
      "Les connexions entre vos outils, dans les deux sens quand c'est utile",
      "Le traitement des erreurs : ce qui se passe quand un outil ne répond pas",
      "Un suivi de ce qui a été synchronisé, pour pouvoir vérifier",
      "Une exécution sans coût à l'usage, l'automatisation tourne sur votre infrastructure",
    ],
    deroule: [
      "On liste les ressaisies qui reviennent chaque semaine",
      "On automatise la plus coûteuse en premier, et on mesure le temps gagné",
      "On étend seulement une fois que la première tourne sans surveillance",
    ],
  },
  {
    title: "Assistant IA auto-hébergé",
    body: "J'installe Hermes, l'agent open-source de Nous Research, sur une machine qui vous appartient. Je branche vos outils et j'assure la maintenance.",
    visual: SelfHostedVisual,
    intro:
      "Hermes est gratuit et sous licence MIT. Ce que vous payez, c'est de ne pas avoir à l'installer, le sécuriser et le maintenir vous-même.",
    livre: [
      "L'installation sur votre serveur, avec le modèle adapté à votre usage et à votre budget",
      "Le branchement à votre messagerie et à vos outils métier",
      "Les accès et les permissions : qui peut lui demander quoi",
      "Un guide de prise en main écrit pour votre équipe, pas pour un développeur",
    ],
    deroule: [
      "Vos données ne transitent par aucun service tiers",
      "Le projet étant open source, rien ne vous enferme : vous pouvez reprendre la main",
      "Je reste responsable des mises à jour et du maintien en condition",
    ],
  },
  {
    title: "Bases de connaissances IA",
    body: "Transformez vos documents internes en une source de réponses instantanées pour vos équipes. Je crée des assistants IA capables de comprendre vos documents, procédures, contrats, bases clients et données internes pour répondre avec précision.",
    visual: KnowledgeBaseVisual,
    intro:
      "Vos documents sont une mine de réponses que personne n'a le temps de chercher. Un assistant RAG les rend interrogables en langage naturel, sans que vos équipes ne fassent défiler des dizaines de fichiers.",
    livre: [
      "Connexion à vos sources de données (Drive, Notion, SharePoint, PDF, bases internes)",
      "Système de recherche intelligente (RAG)",
      "Assistant IA accessible par vos équipes",
      "Gestion des droits d'accès et de la confidentialité",
      "Tests de qualité et amélioration continue",
    ],
    deroule: [
      "Assistant juridique interne",
      "Support client augmenté",
      "Recherche documentaire instantanée",
      "Assistant commercial connecté au CRM",
      "Base de connaissances entreprise",
    ],
  },
];

export function Services() {
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
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

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {services.map((item, i) => (
          <motion.button
            key={item.title}
            type="button"
            layoutId={`service-card-${i}`}
            onClick={() => setActiveIndex(i)}
            aria-expanded={activeIndex === i}
            className={`group relative flex flex-col rounded-3xl bg-accent-soft p-8 text-left border border-accent/15 shadow-soft transition-all duration-300 hover:border-accent/35 hover:shadow-card sm:p-10 md:p-12 ${styles.glowCard}`}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: reduce ? 0 : (i % 2) * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Le visuel absorbe la différence de hauteur entre les cartes,
                pour que numéro, titre et texte se calent au même niveau. */}
            <div className="mb-8 flex flex-1 items-stretch md:min-h-[280px]">
              <item.visual />
            </div>

            <div
              className="mb-3 text-sm font-semibold text-accent"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              0{i + 1}
            </div>

            <div>
              <motion.h3
                layoutId={`service-title-${i}`}
                className="max-w-md font-medium text-foreground md:min-h-[2.36em]"
                style={{
                  fontSize: "clamp(24px, 2.4vw, 31px)",
                  lineHeight: 1.18,
                  letterSpacing: "-0.025em",
                  textWrap: "pretty",
                }}
              >
                {item.title}
              </motion.h3>
              <p
                className="mt-4 max-w-md text-[17px] text-muted md:min-h-[8em]"
                style={{ lineHeight: 1.6 }}
              >
                {item.body}
              </p>
            </div>

            <span className="mt-8 flex h-11 w-11 items-center justify-center rounded-full border border-accent/20 bg-background text-accent shadow-sm transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:border-accent">
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
                className="relative my-auto w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl sm:p-12"
                transition={{ duration: reduce ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  aria-label="Fermer"
                  className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-accent/10 text-accent/60 transition-colors hover:bg-accent/5 sm:top-8 sm:right-8"
                >
                  <CloseIcon />
                </button>

                <div
                  className="mb-4 text-sm font-semibold text-accent/40"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  0{activeIndex + 1}
                </div>

                <motion.h3
                  layoutId={`service-title-${activeIndex}`}
                  className="max-w-lg font-medium text-foreground"
                  style={{
                    fontSize: "clamp(26px, 3.2vw, 36px)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.025em",
                    textWrap: "balance",
                  }}
                >
                  {services[activeIndex].title}
                </motion.h3>

                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: reduce ? 0 : 0.15 }}
                >
                  <p
                    className="mt-5 max-w-lg text-[17px] text-foreground/80"
                    style={{ lineHeight: 1.6, textWrap: "pretty" }}
                  >
                    {services[activeIndex].intro}
                  </p>

                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
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
                </motion.div>

                <motion.a
                  href="/contact"
                  onClick={() => setActiveIndex(null)}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: reduce ? 0 : 0.22 }}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-accent-foreground transition-colors duration-200 hover:bg-accent/80"
                >
                  En discuter
                  <ArrowIcon />
                </motion.a>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
