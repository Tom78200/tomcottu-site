"use client";

import { useEffect, useRef, useState } from "react";
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
    placement: "above" as const,
    at: 0.10,
  },
  {
    title: "Construction de l'agent",
    body: "Sur mesure, connecté aux outils déjà en place, pas un chatbot prêt à l'emploi.",
    placement: "below" as const,
    at: 0.50,
  },
  {
    title: "Affinage en conditions réelles",
    body: "Ajustements après mise en service, tant que l'agent ne colle pas à l'usage réel.",
    placement: "above" as const,
    at: 0.90,
  },
];

/* ── Fusée SVG pointant à droite ────────────────────────────────── */
function RocketIcon() {
  return (
    <svg width="52" height="32" viewBox="0 0 52 32" fill="none" aria-hidden="true">
      {/* Corps */}
      <path d="M8,16 C13,4 26,0 46,16 C26,32 13,28 8,16Z" fill="#0077cd" />
      {/* Hublot */}
      <circle cx="28" cy="16" r="5.5" fill="white" opacity="0.72" />
      <circle cx="28" cy="16" r="2.8" fill="#d0eaff" opacity="0.55" />
      {/* Aileron haut */}
      <path d="M15,9 L7,1 L5,11Z" fill="#0058a5" />
      {/* Aileron bas */}
      <path d="M15,23 L7,31 L5,21Z" fill="#0058a5" />
      {/* Flamme extérieure */}
      <ellipse cx="3" cy="16" rx="7" ry="4" fill="#ff8400" />
      {/* Flamme intérieure */}
      <ellipse cx="1.5" cy="16" rx="3.5" ry="2.2" fill="#ffe44a" />
    </svg>
  );
}

/* ── Nœud d'étape ────────────────────────────────────────────────── */
function StepNode({
  step,
  index,
  progress,
  reduce,
}: {
  step: (typeof steps)[number];
  index: number;
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  const [lit, setLit] = useState(reduce ? true : false);
  const [showHalo, setShowHalo] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    if (reduce) { setLit(true); return; }
    return progress.on("change", (v) => {
      if (v >= step.at && !fired.current) {
        fired.current = true;
        setLit(true);
        setShowHalo(true);
        setTimeout(() => setShowHalo(false), 700);
      }
    });
  }, [progress, step.at, reduce]);

  return (
    <div
      className="absolute"
      style={{
        left: `${step.at * 100}%`,
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
      }}
    >
      {/* Halo explosion au passage de la fusée */}
      {showHalo && (
        <motion.span
          className="pointer-events-none absolute rounded-full border-2 border-accent"
          initial={{ scale: 0.4, opacity: 1 }}
          animate={{ scale: 3.2, opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{
            width: 48,
            height: 48,
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: -24,
            marginLeft: -24,
          }}
        />
      )}

      {/* Badge 01/02/03 */}
      <motion.div
        className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-semibold text-white"
        style={{ fontFamily: "var(--font-heading)" }}
        animate={
          lit
            ? {
                backgroundColor: "#0077cd",
                borderColor: "#0077cd",
                scale: [1, 1.55, 0.80, 1.20, 0.94, 1],
                rotate: [0, -14, 11, -5, 2, 0],
              }
            : {
                backgroundColor: "#162330",
                borderColor: "#162330",
                scale: 1,
                rotate: 0,
              }
        }
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        0{index + 1}
      </motion.div>

      {/* Libellé au-dessus ou en-dessous */}
      <motion.div
        className="absolute w-[15em] text-center"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          ...(step.placement === "above"
            ? { bottom: "calc(100% + 20px)" }
            : { top: "calc(100% + 20px)" }),
        }}
        initial={{ opacity: 0, y: step.placement === "above" ? 12 : -12 }}
        animate={lit ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.h3
          className="text-[19px] font-medium tracking-[-0.02em]"
          animate={{
            color: lit ? "#0077cd" : "#162330",
            y: lit ? [0, -7, 3, -2, 0] : 0,
            scale: lit ? [1, 1.06, 0.97, 1.02, 1] : 1,
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          {step.title}
        </motion.h3>
        <p
          className="mt-2 text-[14px] text-muted"
          style={{ lineHeight: 1.55, textWrap: "pretty" }}
        >
          {step.body}
        </p>
      </motion.div>
    </div>
  );
}

/* ── Section principale ──────────────────────────────────────────── */
export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.4 });

  const progressMV = useMotionValue(0);

  // Fusée centrée sur le point de progression
  const rocketLeft = useTransform(progressMV, (v) => `calc(${v * 100}% - 26px)`);
  // Traînée bleue = portion de ligne parcourue
  const trailWidth = useTransform(progressMV, (v) => `${v * 100}%`);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      progressMV.set(1);
      return;
    }
    const controls = animate(progressMV, 1, {
      duration: 3.6,
      ease: [0.2, 0, 0.15, 1],
    });
    return () => controls.stop();
  }, [inView, reduce, progressMV]);

  return (
    <section
      id="methode"
      aria-labelledby="methode-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-40 lg:px-16"
    >
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
          }}
        >
          Trois étapes, pas de blabla.
        </h2>
      </div>

      <div ref={sectionRef}>
        {/* ── Desktop : animation fusée ── */}
        <div className="relative hidden lg:block" style={{ height: "400px" }}>

          {/* Ligne de fond */}
          <div
            className="absolute"
            style={{
              top: "50%",
              left: 0,
              right: 0,
              height: 2,
              borderRadius: 99,
              background: "var(--border-soft)",
              transform: "translateY(-50%)",
            }}
          />

          {/* Traînée bleue */}
          <motion.div
            className="absolute"
            style={{
              top: "50%",
              left: 0,
              height: 2,
              width: trailWidth,
              borderRadius: 99,
              background: "linear-gradient(to right, #0077cd, #38b6ff)",
              transform: "translateY(-50%)",
            }}
          />

          {/* Fusée */}
          {!reduce && (
            <motion.div
              aria-hidden="true"
              className="absolute z-20"
              style={{
                top: "50%",
                left: rocketLeft,
                transform: "translateY(-50%)",
                filter: "drop-shadow(0 0 12px rgba(0,119,205,0.55))",
              }}
            >
              <RocketIcon />
            </motion.div>
          )}

          {/* Nœuds des 3 étapes */}
          {steps.map((step, i) => (
            <StepNode
              key={step.title}
              step={step}
              index={i}
              progress={progressMV}
              reduce={reduce}
            />
          ))}
        </div>

        {/* ── Mobile : liste verticale ── */}
        <div className="grid gap-8 lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex items-start gap-4"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                delay: reduce ? 0 : i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-foreground shadow-accent"
                style={{ fontFamily: "var(--font-heading)" }}
                initial={reduce ? false : { scale: 0, rotate: -15 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  delay: reduce ? 0 : i * 0.1 + 0.15,
                  type: "spring",
                  stiffness: 380,
                  damping: 14,
                }}
              >
                0{i + 1}
              </motion.span>
              <div>
                <h3 className="text-[20px] font-medium tracking-[-0.02em] text-accent">
                  {step.title}
                </h3>
                <p
                  className="mt-1.5 text-base text-muted"
                  style={{ lineHeight: 1.55, textWrap: "pretty" }}
                >
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
