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

const VIEW_W = 1200;
const VIEW_H = 550;

const NODES = [
  { x: 210, y: 212, at: 0.06, placement: "above" as const },
  { x: 600, y: 388, at: 0.5, placement: "below" as const },
  { x: 990, y: 212, at: 0.85, placement: "above" as const },
];

const FULL_PATH = "M210,212 C 380,212 430,388 600,388 C 770,388 820,212 990,212";

/* ── Node avec spring goofy ─────────────────────────────────────── */
function PathNode({
  index,
  node,
  progress,
  reduce,
}: {
  index: number;
  node: (typeof NODES)[number];
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  // Suivi de l'état "allumé" pour déclencher les animations spring
  const [lit, setLit] = useState(false);

  useEffect(() => {
    const unsubscribe = progress.on("change", (v) => {
      if (v >= node.at && !lit) setLit(true);
    });
    return unsubscribe;
  }, [progress, node.at, lit]);

  // Couleur animée via useTransform (interpolation douce)
  const range: [number, number] = [node.at - 0.1, node.at];
  const background = useTransform(progress, range, ["#162330", "#0077cd"]);
  const borderColor = useTransform(progress, range, ["#162330", "#0077cd"]);

  // Halo/ring qui pulse fort au moment du pop
  const ringScale = useTransform(
    progress,
    [node.at - 0.01, node.at + 0.04, node.at + 0.22],
    [0.6, 1.8, 2.8]
  );
  const ringOpacity = useTransform(
    progress,
    [node.at - 0.01, node.at + 0.05, node.at + 0.22],
    [0, 0.55, 0]
  );

  return (
    <div
      className="absolute"
      style={{
        left: `${(node.x / VIEW_W) * 100}%`,
        top: `${(node.y / VIEW_H) * 100}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Halo qui explose au pop */}
      {!reduce && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full border-2 border-accent"
          style={{ scale: ringScale, opacity: ringOpacity }}
        />
      )}

      {/* Badge avec spring goofy : overshoot + wobble */}
      <motion.div
        className="flex h-16 w-16 items-center justify-center rounded-full border-2 text-[15px] font-medium"
        style={
          reduce
            ? {
                background: "#0077cd",
                color: "#ffffff",
                borderColor: "#0077cd",
                fontFamily: "var(--font-heading)",
              }
            : {
                background,
                color: "#ffffff",
                borderColor,
                fontFamily: "var(--font-heading)",
              }
        }
        animate={
          reduce
            ? {}
            : lit
            ? {
                scale: [1, 1.55, 0.85, 1.18, 0.95, 1.04, 1],
                rotate: [0, -8, 10, -5, 3, -1, 0],
              }
            : { scale: 1, rotate: 0 }
        }
        transition={
          reduce
            ? {}
            : {
                duration: 0.7,
                ease: "easeOut",
              }
        }
      >
        0{index + 1}
      </motion.div>
    </div>
  );
}

/* ── Label avec pop goofy ────────────────────────────────────────── */
function StepLabel({
  step,
  node,
  progress,
  index,
  reduce,
}: {
  step: (typeof steps)[number];
  node: (typeof NODES)[number];
  progress: MotionValue<number>;
  index: number;
  reduce: boolean | null;
}) {
  const [lit, setLit] = useState(false);

  useEffect(() => {
    const unsubscribe = progress.on("change", (v) => {
      if (v >= node.at && !lit) setLit(true);
    });
    return unsubscribe;
  }, [progress, node.at, lit]);

  const range: [number, number] = [node.at - 0.06, node.at + 0.02];
  const titleColor = useTransform(progress, range, ["#162330", "#0077cd"]);

  return (
    <div
      className="absolute w-[16em] text-center"
      style={{
        left: `${(node.x / VIEW_W) * 100}%`,
        top: `${(node.y / VIEW_H) * 100}%`,
        transform:
          node.placement === "above"
            ? "translate(-50%, calc(-100% - 58px))"
            : "translate(-50%, 58px)",
      }}
    >
      {/* Apparition initiale du bloc texte */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.6,
          delay: reduce ? 0 : index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* Titre qui bounce au pop avec spring goofy */}
        <motion.h3
          className="text-[21px] font-medium tracking-[-0.02em]"
          style={{ color: reduce ? "#0077cd" : titleColor }}
          animate={
            reduce
              ? {}
              : lit
              ? {
                  y: [0, -10, 4, -4, 1, 0],
                  scale: [1, 1.08, 0.97, 1.03, 0.99, 1],
                }
              : { y: 0, scale: 1 }
          }
          transition={
            reduce
              ? {}
              : {
                  duration: 0.65,
                  ease: "easeOut",
                }
          }
        >
          {step.title}
        </motion.h3>
        <p
          className="mt-2 text-[15px] text-muted"
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
  const pathRef = useRef<SVGPathElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.4 });

  const progressMV = useMotionValue(0);
  const dashOffset = useTransform(progressMV, [0, 1], [1, 0]);
  const tipOpacity = useTransform(progressMV, [0, 0.03, 0.97, 1], [0, 1, 1, 0]);
  // La bille pulse légèrement (scale) en continu pour un effet "vivant"
  const tipScale = useTransform(
    progressMV,
    [0, 0.03, 0.5, 1],
    [0, 1, 1, 0]
  );

  const [tip, setTip] = useState({ x: NODES[0].x, y: NODES[0].y });

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      progressMV.set(1);
      const p = pathRef.current;
      if (p) {
        const pt = p.getPointAtLength(0.96 * p.getTotalLength());
        setTip({ x: pt.x, y: pt.y });
      }
      return;
    }
    const controls = animate(progressMV, 1, {
      // Légèrement plus lent pour profiter de l'animation goofy
      duration: 3.4,
      ease: [0.4, 0, 0.2, 1],
      onUpdate: (v) => {
        const p = pathRef.current;
        if (p) {
          const pt = p.getPointAtLength(Math.min(v, 0.96) * p.getTotalLength());
          setTip({ x: pt.x, y: pt.y });
        }
      },
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
        {/* ── Desktop ── */}
        <div className="relative hidden h-[520px] lg:block lg:h-[580px]">
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="absolute inset-0 h-full w-full overflow-visible"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Trace de fond */}
            <path
              d={FULL_PATH}
              stroke="var(--border-soft)"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />

            {/* Trait bleu animé */}
            <motion.path
              ref={pathRef}
              d={FULL_PATH}
              stroke="#0077cd"
              strokeWidth="5"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="1"
              style={{ strokeDashoffset: dashOffset }}
            />

            {/* Bille qui trace : plus grosse + halo blanc pour un effet pop */}
            {!reduce && (
              <>
                {/* Halo flou derrière la bille */}
                <motion.circle
                  cx={tip.x}
                  cy={tip.y}
                  r="16"
                  fill="#0077cd"
                  style={{ opacity: tipOpacity, scale: tipScale }}
                  className="blur-[6px]"
                />
                {/* Bille principale */}
                <motion.circle
                  cx={tip.x}
                  cy={tip.y}
                  r="8"
                  fill="#ffffff"
                  stroke="#0077cd"
                  strokeWidth="3"
                  style={{ opacity: tipOpacity }}
                />
              </>
            )}
          </svg>

          {NODES.map((node, i) => (
            <PathNode
              key={steps[i].title}
              index={i}
              node={node}
              progress={progressMV}
              reduce={reduce}
            />
          ))}

          {NODES.map((node, i) => (
            <StepLabel
              key={`label-${steps[i].title}`}
              step={steps[i]}
              node={node}
              index={i}
              progress={progressMV}
              reduce={reduce}
            />
          ))}
        </div>

        {/* ── Mobile ── */}
        <div className="grid gap-8 lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex items-start gap-4"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.55,
                delay: reduce ? 0 : i * 0.1,
                ease: [0.34, 1.56, 0.64, 1],
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
