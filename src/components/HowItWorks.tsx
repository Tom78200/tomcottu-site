"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";

const steps = [
  {
    title: "Analyse de votre activité",
    body: "Basée sur votre site, vos outils et vos process réels, pas un questionnaire générique.",
  },
  {
    title: "Construction de l'agent",
    body: "Sur mesure, connecté aux outils déjà en place, pas un chatbot prêt à l'emploi.",
  },
  {
    title: "Affinage en conditions réelles",
    body: "Ajustements après mise en service, tant que l'agent ne colle pas à l'usage réel.",
  },
];

/*
  Progress 0→1, fusée s'arrête sur le nœud 3 (x = 5/6 = 83.33 %).
  Nœuds allumés respectivement à 0.20 / 0.60 / 1.00.
*/
const LINE_END = 5 / 6;
const NODE_X   = [1 / 6, 1 / 2, 5 / 6] as const;
const NODE_AT  = [(1 / 6) / (5 / 6), (3 / 6) / (5 / 6), 1.0] as const;

/* ── Icône check (SVG, pas de dépendance externe) ─────────────── */
function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2 6L5 9L10 3"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Checkpoint — inspire du status-progress de la facture ─────── */
function Checkpoint({
  index,
  lit,
  reduce,
}: {
  index: number;
  lit: boolean;
  reduce: boolean | null;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Cercle checkpoint */}
      <motion.div
        className="relative flex items-center justify-center rounded-full border-[1.5px]"
        style={{ width: 32, height: 32 }}
        animate={
          lit
            ? { borderColor: "var(--accent)", backgroundColor: "var(--accent)" }
            : { borderColor: "var(--border)", backgroundColor: "var(--background)" }
        }
        transition={{ duration: 0.3 }}
      >
        {/* Check qui "tampon" en surgissant */}
        {lit && (
          <motion.div
            initial={reduce ? false : { scale: 1.8, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <CheckIcon />
          </motion.div>
        )}

        {/* Cercle vide (avant lit) */}
        {!lit && (
          <span
            className="rounded-full"
            style={{
              width: 8,
              height: 8,
              background: "var(--border-soft)",
            }}
          />
        )}
      </motion.div>

      {/* Numéro sous le checkpoint */}
      <motion.span
        className="text-[11px] font-semibold tracking-widest uppercase"
        style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.1em" }}
        animate={{ color: lit ? "var(--accent)" : "var(--muted-soft)" }}
        transition={{ duration: 0.3 }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>
    </div>
  );
}

/* ── Curseur (fusée épurée) ─────────────────────────────────────── */
function RocketCursor() {
  return (
    <svg width="38" height="16" viewBox="0 0 38 16" fill="none" aria-hidden>
      <path
        d="M2,8 C5,2 11,0 24,0 L32,0 C35.3,0 38,3.6 38,8 C38,12.4 35.3,16 32,16 L24,16 C11,16 5,14 2,8Z"
        fill="var(--accent)"
      />
      <circle cx="23" cy="8" r="3" fill="white" opacity="0.5" />
      <path d="M2,8 L-7,5 L-7,11Z" fill="var(--accent)" opacity="0.18" />
    </svg>
  );
}

/* ── Colonne de contenu ─────────────────────────────────────────── */
function StepColumn({
  step,
  index,
  progress,
  reduce,
  onLit,
}: {
  step: (typeof steps)[number];
  index: number;
  progress: MotionValue<number>;
  reduce: boolean | null;
  onLit: () => void;
}) {
  const [lit, setLit] = useState(reduce ? true : false);
  const fired = useRef(false);

  useEffect(() => {
    if (reduce) {
      if (!fired.current) { fired.current = true; setLit(true); onLit(); }
      return;
    }
    return progress.on("change", (v) => {
      if (v >= NODE_AT[index] && !fired.current) {
        fired.current = true;
        setLit(true);
        onLit();
      }
    });
  }, [progress, index, reduce, onLit]);

  return (
    <div className="flex flex-col gap-3 pr-8">
      {/* Grand numéro fantôme qui s'illumine */}
      <motion.span
        className="block select-none font-black leading-none tracking-[-0.04em]"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(52px, 5.5vw, 76px)",
        }}
        animate={{
          color: lit ? "var(--accent)" : "oklch(0.25 0.03 250 / 0.1)",
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        0{index + 1}
      </motion.span>

      {/* Titre */}
      <motion.h3
        className="text-[16px] font-semibold leading-snug tracking-[-0.02em]"
        animate={{ color: lit ? "var(--foreground)" : "var(--foreground)" }}
        transition={{ duration: 0.3 }}
      >
        {step.title}
      </motion.h3>

      {/* Corps */}
      <p
        className="text-[13px] leading-relaxed text-muted"
        style={{ textWrap: "pretty" } as React.CSSProperties}
      >
        {step.body}
      </p>
    </div>
  );
}

/* ── Composant principal ─────────────────────────────────────────── */
export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.35 });
  const progressMV = useMotionValue(0);

  /* Fusée : centre → v × LINE_END × 100 %, largeur 38 px → left = centre − 19 px */
  const rocketLeft = useTransform(
    progressMV,
    (v) => `calc(${v * LINE_END * 100}% - 19px)`
  );
  /* Traînée bleue */
  const trailWidth = useTransform(
    progressMV,
    (v) => `${v * LINE_END * 100}%`
  );

  const [litStates, setLitStates] = useState([false, false, false]);
  const markLit = useCallback(
    (i: number) =>
      setLitStates((prev) => {
        if (prev[i]) return prev;
        const next = [...prev];
        next[i] = true;
        return next;
      }),
    []
  );

  useEffect(() => {
    if (!inView) return;
    if (reduce) { progressMV.set(1); setLitStates([true, true, true]); return; }
    const c = animate(progressMV, 1, { duration: 4.0, ease: [0.22, 0, 0.12, 1] });
    return () => c.stop();
  }, [inView, reduce, progressMV]);

  return (
    <section
      id="methode"
      aria-labelledby="methode-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-40 lg:px-16"
    >
      {/* En-tête */}
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

      <div ref={sectionRef}>
        {/* ════ Desktop ════ */}
        <div className="hidden lg:block">

          {/* Colonnes de contenu (grands numéros + titres + corps) */}
          <div className="grid grid-cols-3 gap-x-10 mb-14">
            {steps.map((step, i) => (
              <StepColumn
                key={step.title}
                step={step}
                index={i}
                progress={progressMV}
                reduce={reduce}
                onLit={() => markLit(i)}
              />
            ))}
          </div>

          {/*
            ── Tracker de progression (inspiré status-progress de la facture) ──
            Ligne + fusée + checkpoints qui tamponnent quand atteints.
          */}
          <div className="relative" style={{ height: 56 }}>

            {/* Ligne de fond */}
            <div
              className="absolute"
              style={{
                top: 14, /* aligne sur le centre des checkpoints (32px/2 = 16 − 2 offset) */
                left: `${NODE_X[0] * 100}%`,
                right: `${(1 - NODE_X[2]) * 100}%`,
                height: 1,
                background: "var(--border-soft)",
              }}
            />

            {/* Traînée bleue */}
            <motion.div
              className="absolute"
              style={{
                top: 14,
                left: `${NODE_X[0] * 100}%`,
                height: 1.5,
                background: "var(--accent)",
                /* Traînée de NODE_X[0] jusqu'à la fusée */
                width: useTransform(
                  progressMV,
                  (v) =>
                    `${Math.max(0, v * LINE_END * 100 - NODE_X[0] * 100)}%`
                ),
              }}
            />

            {/* Fusée (se déplace de 0 à LINE_END) */}
            {!reduce && (
              <motion.div
                aria-hidden="true"
                className="absolute"
                style={{
                  top: 6,
                  left: rocketLeft,
                  zIndex: 10,
                }}
              >
                <RocketCursor />
              </motion.div>
            )}

            {/* Checkpoints aux positions des nœuds */}
            {NODE_X.map((x, i) => (
              <div
                key={i}
                className="absolute"
                style={{ left: `${x * 100}%`, top: 0, transform: "translateX(-50%)" }}
              >
                <Checkpoint index={i} lit={litStates[i]} reduce={reduce} />
              </div>
            ))}
          </div>
        </div>

        {/* ════ Mobile ════ */}
        <div className="grid gap-10 lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex gap-4 items-start"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                delay: reduce ? 0 : i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Checkpoint mobile */}
              <div className="shrink-0 flex flex-col items-center gap-1 mt-1">
                <div
                  className="flex items-center justify-center rounded-full border-[1.5px] border-accent bg-accent"
                  style={{ width: 28, height: 28 }}
                >
                  <CheckIcon />
                </div>
                <span
                  className="text-[10px] font-semibold tracking-widest text-accent"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  0{i + 1}
                </span>
              </div>

              <div>
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[14px] text-muted" style={{ lineHeight: 1.55 }}>
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
