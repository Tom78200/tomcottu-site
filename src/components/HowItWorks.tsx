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
  Layout : 3 colonnes égales → centres à 1/6, 1/2, 5/6 de la largeur.
  La ligne (en dessous du contenu) a exactement la même largeur que la grille.
  Les dots sur la ligne sont positionnés à ces mêmes %, donc alignés sans calc complexe.

  Progress 0 → 1 :
    - Fusée : de x=0 à x = (5/6) × 100 % (s'arrête sur le nœud 3)
    - Node 1 s'allume à v = (1/6)/(5/6) ≈ 0.20
    - Node 2 s'allume à v = (1/2)/(5/6) ≈ 0.60
    - Node 3 s'allume à v = 1.00
*/
const LINE_END = 5 / 6;
const NODE_X = [1 / 6, 1 / 2, 5 / 6] as const;
const NODE_AT = [
  (1 / 6) / (5 / 6), // 0.200
  (3 / 6) / (5 / 6), // 0.600
  1.0,                // 1.000
] as const;

/* ── Fusée : silhouette bullet épurée ───────────────────────────── */
function RocketSVG() {
  return (
    <svg width="40" height="16" viewBox="0 0 40 16" fill="none" aria-hidden>
      {/* Corps */}
      <path
        d="M2,8 C4,2 10,0 24,0 L34,0 C37.3,0 40,3.6 40,8 C40,12.4 37.3,16 34,16 L24,16 C10,16 4,14 2,8Z"
        fill="var(--accent)"
      />
      {/* Hublot */}
      <circle cx="24" cy="8" r="3" fill="white" opacity="0.5" />
      {/* Aileron bas — micro-détail qui donne la direction */}
      <path d="M10,16 L4,22 L14,16Z" fill="oklch(0.46 0.17 250)" />
      {/* Sillage : dégradé de transparence, pas de couleur vive */}
      <path
        d="M2,8 L-10,5 L-10,11 Z"
        fill="var(--accent)"
        opacity="0.18"
      />
    </svg>
  );
}

/* ── Dot sur la ligne ────────────────────────────────────────────── */
function LineDot({ lit }: { lit: boolean }) {
  return (
    <motion.div
      style={{ width: 12, height: 12, borderRadius: "50%", border: "2px solid" }}
      animate={
        lit
          ? { backgroundColor: "var(--accent)", borderColor: "var(--accent)" }
          : { backgroundColor: "var(--background)", borderColor: "var(--border-soft)" }
      }
      transition={{ duration: 0.35 }}
    />
  );
}

/* ── Colonne étape ───────────────────────────────────────────────── */
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
    <div className="flex flex-col gap-4">
      {/* Numéro géant : "fantôme" → vivid accent */}
      <motion.span
        className="block select-none font-black leading-none tracking-tighter"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(56px, 6vw, 80px)",
        }}
        animate={{
          color: lit ? "var(--accent)" : "oklch(0.25 0.03 250 / 0.12)",
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        0{index + 1}
      </motion.span>

      {/* Titre */}
      <motion.h3
        className="text-[17px] font-semibold leading-snug tracking-[-0.02em]"
        animate={{ color: lit ? "var(--accent)" : "var(--foreground)" }}
        transition={{ duration: 0.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
      >
        {step.title}
      </motion.h3>

      {/* Corps */}
      <motion.p
        className="text-[14px] text-muted leading-relaxed"
        animate={{ opacity: lit ? 1 : 0.45 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        style={{ textWrap: "pretty" } as React.CSSProperties}
      >
        {step.body}
      </motion.p>
    </div>
  );
}

/* ── Section principale ──────────────────────────────────────────── */
export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.35 });
  const progressMV = useMotionValue(0);

  /*
    La fusée va de 0 % à (5/6)×100 % = 83.33 %.
    Largeur fusée = 40 px → left = centre - 20 px.
  */
  const rocketLeft = useTransform(
    progressMV,
    (v) => `calc(${v * LINE_END * 100}% - 20px)`
  );
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
    if (reduce) {
      progressMV.set(1);
      setLitStates([true, true, true]);
      return;
    }
    const c = animate(progressMV, 1, { duration: 4.0, ease: [0.22, 0, 0.12, 1] });
    return () => c.stop();
  }, [inView, reduce, progressMV]);

  return (
    <section
      id="methode"
      aria-labelledby="methode-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-40 lg:px-16"
    >
      {/* En-tête ────────────────────────────────────────────────── */}
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

          {/* Contenu : 3 colonnes */}
          <div className="grid grid-cols-3 gap-x-10 mb-16">
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

          {/* Barre + fusée */}
          <div className="relative" style={{ height: 40 }}>
            {/* Barre de fond — épaisse et arrondie */}
            <div
              className="absolute"
              style={{
                top: "50%",
                left: 0,
                right: `${(1 - LINE_END) * 100}%`,
                height: 12,
                borderRadius: 99,
                background: "var(--border-soft)",
                transform: "translateY(-50%)",
              }}
            />

            {/* Portion bleue */}
            <motion.div
              className="absolute"
              style={{
                top: "50%",
                left: 0,
                height: 12,
                borderRadius: 99,
                background: "var(--accent)",
                width: trailWidth,
                transform: "translateY(-50%)",
              }}
            />

            {/* Fusée */}
            {!reduce && (
              <motion.div
                aria-hidden="true"
                className="absolute"
                style={{
                  top: "50%",
                  left: rocketLeft,
                  transform: "translateY(-50%)",
                  zIndex: 10,
                }}
              >
                <RocketSVG />
              </motion.div>
            )}

            {/* Marqueurs aux nœuds */}
            {NODE_X.map((x, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: "50%",
                  left: `${x * 100}%`,
                  transform: "translate(-50%, -50%)",
                  width: 3,
                  height: 18,
                  borderRadius: 99,
                  zIndex: 6,
                  background: "white",
                  opacity: 0.6,
                }}
              />
            ))}
          </div>
        </div>

        {/* ════ Mobile ════ */}
        <div className="grid gap-10 lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex gap-5 items-start"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                delay: reduce ? 0 : i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span
                className="shrink-0 select-none font-black leading-none tracking-tighter text-accent/25"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(40px, 5vw, 52px)",
                }}
              >
                0{i + 1}
              </span>
              <div className="pt-1">
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] text-muted" style={{ lineHeight: 1.6 }}>
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
