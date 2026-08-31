"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const scenarios = [
  {
    sector: "Agence web",
    title: "Ne plus perdre un prospect parce que personne n'était libre mardi",
    image: "/exemples/01.webp",
    situation:
      "Une demande de refonte tombe en plein sprint. Personne ne l'ouvre avant le lendemain soir. Quand vous rappelez, le prospect a déjà trois autres devis sur la table.",
    agent:
      "Dès la réception, il répond, demande le périmètre, le délai et l'enveloppe envisagée, puis range le dossier au bon niveau de priorité. Vous récupérez une demande déjà cadrée.",
    result: "Vous rappelez en connaissant le budget, pas pour le découvrir.",
    tools: ["Gmail", "HubSpot", "Slack"],
  },
  {
    sector: "Cabinet de recrutement",
    title: "Des comptes rendus d'entretien qui existent vraiment",
    image: "/exemples/02.webp",
    situation:
      "Après quatre entretiens dans la journée, les notes tiennent sur un coin de carnet et dans votre mémoire. Le vendredi, il faut reconstituer qui a dit quoi.",
    agent:
      "Vous dictez deux minutes en sortant de l'entretien. Il en tire la synthèse, remplit les critères du poste, place le candidat au bon stade et programme la relance.",
    result: "Le suivi est à jour le soir même, sans une heure de saisie le vendredi.",
    tools: ["WhatsApp", "Notion", "Votre ATS"],
  },
  {
    sector: "E-commerce",
    title: "Le SAV qui répond avant votre premier café",
    image: "/exemples/03.webp",
    situation:
      "Où est ma commande, comment je retourne un article, est-ce que ça taille grand. Trois questions font l'essentiel du volume, et elles arrivent la nuit et le week-end.",
    agent:
      "Il va chercher le suivi transporteur et vos conditions de retour, répond dans la langue du client, et vous bascule les litiges et les demandes de remboursement.",
    result: "Vous ouvrez votre boîte sur les vrais problèmes, pas sur des numéros de suivi.",
    tools: ["Shopify", "Gorgias", "Slack"],
  },
  {
    sector: "Cabinet comptable",
    title: "Arrêter de courir après les pièces justificatives",
    image: "/exemples/04.webp",
    situation:
      "Chaque mois, il manque des factures chez la moitié des clients. Un collaborateur passe ses journées à demander, noter qui a répondu, puis redemander.",
    agent:
      "Il compare les écritures aux pièces reçues, repère ce qui manque et chez qui, écrit au client avec la liste précise, et tient à jour le tableau de ce qui est rentré.",
    result: "Le collaborateur s'occupe des dossiers bloqués, plus de la relance de routine.",
    tools: ["Pennylane", "Outlook", "Google Sheets"],
  },
];

// Source en 1672x941 (16:9), avec du vide en haut et en bas. Le cadre 3:1
// combiné à object-cover recadre pile sur la bande utile (y 192 à 749),
// sans toucher au fichier d'origine.
const BAND = { src: "/exemples/bande.webp", ratio: "3 / 1" };

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

function Heading({ index, sector }: { index: number; sector: string }) {
  return (
    <div className="mb-3 flex items-baseline gap-3">
      <span
        className="text-[26px] leading-none text-accent/20 transition-colors duration-300 group-hover:text-accent/35"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        0{index + 1}
      </span>
      <span
        className="text-[11px] tracking-[0.09em] text-accent/50 uppercase"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {sector}
      </span>
    </div>
  );
}

function DetailBlock({
  label,
  children,
  strong = false,
}: {
  label: string;
  children: React.ReactNode;
  strong?: boolean;
}) {
  return (
    <div>
      <div
        className="mb-2 text-[11px] tracking-[0.09em] text-accent/40 uppercase"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {label}
      </div>
      <p
        className={`text-[15px] ${strong ? "font-medium text-foreground" : "text-muted"}`}
        style={{ lineHeight: 1.6 }}
      >
        {children}
      </p>
    </div>
  );
}

export function AgentExamples() {
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

  const active = activeIndex === null ? null : scenarios[activeIndex];

  return (
    <section
      id="exemples"
      aria-labelledby="exemples-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-44 lg:px-16"
    >
      <div className="mb-14 border-t border-border-soft pt-16 md:mb-20 md:pt-24">
        <div
          className="mb-4 text-base font-semibold text-accent md:text-lg"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Exemples
        </div>
        <h2
          id="exemples-heading"
          className="max-w-4xl font-medium text-foreground"
          style={{
            fontSize: "clamp(34px, 5vw, 60px)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            textWrap: "balance",
          }}
        >
          Des exemples d&apos;agents IA, métier par métier.
        </h2>
        <p
          className="mt-6 max-w-xl text-lg text-muted"
          style={{ lineHeight: 1.6, textWrap: "pretty" }}
        >
          Quatre situations de PME et l&apos;agent IA sur mesure qui les prend
          en charge. Le bon point de départ pour automatiser, c&apos;est la
          tâche qui vous coûte le plus de temps aujourd&apos;hui.
        </p>
      </div>

      {/* Grand écran : les textes en 4 colonnes, puis la scène continue en dessous. */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-4 gap-6">
          {scenarios.map((scenario, i) => (
            <motion.button
              key={scenario.title}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-expanded={activeIndex === i}
              className="group flex flex-col text-left"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                delay: reduce ? 0 : i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Heading index={i} sector={scenario.sector} />
              <h3
                className="min-h-[3.6em] font-medium text-foreground"
                style={{
                  fontSize: "clamp(17px, 1.4vw, 20px)",
                  lineHeight: 1.24,
                  letterSpacing: "-0.02em",
                  textWrap: "pretty",
                }}
              >
                {scenario.title}
              </h3>
              <span className="mt-4 flex h-9 w-9 items-center justify-center rounded-full border border-accent/10 text-accent/45 transition-colors duration-300 group-hover:border-accent/25 group-hover:text-accent/70">
                <PlusIcon />
              </span>
            </motion.button>
          ))}
        </div>

        <motion.div
          className="relative mt-10 w-full overflow-hidden rounded-3xl shadow-soft"
          style={{ aspectRatio: BAND.ratio, background: "linear-gradient(120deg, var(--accent-soft), var(--background))" }}
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={BAND.src}
            alt="Quatre métiers de PME accompagnés par un agent IA : agence web, cabinet de recrutement, e-commerce et cabinet comptable"
            fill
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>

      {/* Petit écran : la scène ne peut pas se réduire à quatre de front,
          on repasse donc à un personnage par bloc. */}
      <div className="grid gap-14 sm:grid-cols-2 lg:hidden">
        {scenarios.map((scenario, i) => (
          <motion.button
            key={scenario.title}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-expanded={activeIndex === i}
            className="group flex flex-col text-left"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.55,
              delay: reduce ? 0 : (i % 2) * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Heading index={i} sector={scenario.sector} />
            <h3
              className="font-medium text-foreground"
              style={{
                fontSize: "19px",
                lineHeight: 1.26,
                letterSpacing: "-0.02em",
                textWrap: "pretty",
              }}
            >
              {scenario.title}
            </h3>
            <div className="relative mt-6 aspect-[3/4] w-full max-w-[260px] self-center overflow-hidden rounded-2xl shadow-soft" style={{ background: "linear-gradient(160deg, var(--accent-soft), var(--background))" }}>
              <Image
                src={scenario.image}
                alt={`Agent IA pour ${scenario.sector.toLowerCase()}`}
                fill
                quality={95}
                sizes="260px"
                className="object-contain object-bottom"
              />
            </div>
            <span className="mt-4 flex h-9 w-9 items-center justify-center rounded-full border border-accent/10 text-accent/45">
              <PlusIcon />
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && activeIndex !== null && (
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
                className="relative my-auto w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl sm:p-12"
                initial={reduce ? false : { opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.96, y: 8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  aria-label="Fermer"
                  className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-accent/10 text-accent/60 transition-colors hover:bg-accent/5 sm:top-8 sm:right-8"
                >
                  <CloseIcon />
                </button>

                <div className="mb-4 flex items-baseline gap-3">
                  <span
                    className="text-[22px] leading-none text-accent/25"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    0{activeIndex + 1}
                  </span>
                  <span
                    className="text-[11px] tracking-[0.09em] text-accent/50 uppercase"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {active.sector}
                  </span>
                </div>

                <h3
                  className="mb-8 max-w-lg font-medium text-foreground"
                  style={{
                    fontSize: "clamp(24px, 3vw, 34px)",
                    lineHeight: 1.16,
                    letterSpacing: "-0.025em",
                    textWrap: "balance",
                  }}
                >
                  {active.title}
                </h3>

                <div className="flex flex-col gap-6">
                  <DetailBlock label="Le contexte">{active.situation}</DetailBlock>
                  <DetailBlock label="Ce que fait l'agent">{active.agent}</DetailBlock>
                  <DetailBlock label="Ce que vous y gagnez" strong>
                    {active.result}
                  </DetailBlock>

                  <div className="flex flex-wrap items-center gap-2 border-t border-border-soft pt-6">
                    <span className="mr-1 text-xs text-accent/40">Connecté à</span>
                    {active.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-accent/10 px-3 py-1.5 text-[13px] text-foreground"
                      >
                        {tool}
                      </span>
                    ))}
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
