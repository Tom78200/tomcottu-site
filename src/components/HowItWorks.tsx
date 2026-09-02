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
    body: "Audit basé sur vos outils et process réels, pas un questionnaire générique.",
  },
  {
    title: "Construction de l'agent",
    body: "Développement sur-mesure connecté à vos logiciels, avec garde-fous stricts.",
  },
  {
    title: "Affinage en conditions réelles",
    body: "Ajustements continus tant que l'usage n'est pas parfait, garanti 14 jours.",
  },
];

const VIEW_W = 1200;
const VIEW_H = 460;

const NODES = [
  { x: 210, y: 160, at: 0.06, placement: "above" as const },
  { x: 600, y: 310, at: 0.5, placement: "below" as const },
  { x: 990, y: 160, at: 0.85, placement: "above" as const },
];

// Courbe continue 1 -> 2 -> 3
const FULL_PATH = "M210,160 C 380,160 430,310 600,310 C 770,310 820,160 990,160";

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
  const range: [number, number] = [node.at - 0.12, node.at];
  const background = useTransform(progress, range, ["#ffffff", "#0077cd"]);
  const color = useTransform(progress, range, ["#00000059", "#ffffff"]);
  const borderColor = useTransform(progress, range, ["#0000001f", "#0077cd"]);
  
  // Grossissement élastique au passage du courant
  const scale = useTransform(
    progress,
    [node.at - 0.05, node.at, node.at + 0.08, node.at + 0.2],
    [1, 1.35, 1.1, 1]
  );
  
  // Ondes concentriques de dilatation
  const ringScale = useTransform(
    progress,
    [node.at - 0.03, node.at + 0.18],
    [0.7, 2.4]
  );
  const ringOpacity = useTransform(
    progress,
    [node.at - 0.03, node.at + 0.06, node.at + 0.18],
    [0, 0.45, 0]
  );

  const ringScale2 = useTransform(
    progress,
    [node.at, node.at + 0.25],
    [0.8, 3.2]
  );
  const ringOpacity2 = useTransform(
    progress,
    [node.at, node.at + 0.08, node.at + 0.25],
    [0, 0.3, 0]
  );

  return (
    <div
      className="absolute"
      style={{
        left: `${(node.x / VIEW_W) * 100}%`,
        top: `${(node.y / VIEW_H) * 100}%`,
        transform: "translate(-50%, -50%)",
        zIndex: 20,
      }}
    >
      {!reduce && (
        <>
          {/* Onde 1 */}
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full border-2 border-accent"
            style={{ scale: ringScale, opacity: ringOpacity }}
          />
          {/* Onde 2 de dilatation large */}
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-accent/60"
            style={{ scale: ringScale2, opacity: ringOpacity2 }}
          />
        </>
      )}

      <motion.div
        className="flex h-16 w-16 items-center justify-center rounded-full border-2 text-[16px] font-bold shadow-md transition-colors"
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
                color,
                borderColor,
                scale,
                fontFamily: "var(--font-heading)",
              }
        }
      >
        0{index + 1}
      </motion.div>
    </div>
  );
}

export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  const progressMV = useMotionValue(0);
  const dashOffset = useTransform(progressMV, [0, 1], [1, 0]);

  // Le câble s'épaissit et pulse dynamiquement lors du mouvement de l'onde
  const strokeWidth = useTransform(
    progressMV,
    [0, 0.06, 0.15, 0.5, 0.6, 0.85, 0.95, 1],
    [5, 12, 6, 12, 6, 12, 6, 6]
  );

  // Lueur de dilatation du câble
  const glowStrokeWidth = useTransform(
    progressMV,
    [0, 0.06, 0.15, 0.5, 0.6, 0.85, 0.95, 1],
    [10, 26, 12, 26, 12, 26, 12, 10]
  );
  const glowOpacity = useTransform(
    progressMV,
    [0, 0.06, 0.15, 0.5, 0.6, 0.85, 0.95, 1],
    [0.15, 0.5, 0.2, 0.5, 0.2, 0.5, 0.2, 0.15]
  );

  const tipOpacity = useTransform(progressMV, [0, 0.02, 0.97, 1], [0, 1, 1, 0]);
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
      duration: 3.8,
      ease: [0.25, 0.1, 0.25, 1],
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
      className="w-full px-5 pb-32 sm:px-10 md:pb-44 lg:px-16"
    >
      {/* ── En-tête de section sobre & affirmé ── */}
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

      {/* ── Scène Panoramique Ouverte (Grande Courbe Continue Vivante) ── */}
      <div ref={sectionRef}>
        <div className="relative hidden h-[460px] lg:block">
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="absolute inset-0 h-full w-full overflow-visible"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Câble inactif de fond */}
            <path
              d={FULL_PATH}
              stroke="var(--border-soft)"
              strokeWidth="4"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />

            {/* Onde de dilatation lumineuse volumétrique (Halo large qui grossit) */}
            {!reduce && (
              <motion.path
                d={FULL_PATH}
                stroke="#0077cd"
                style={{
                  strokeWidth: glowStrokeWidth,
                  strokeDashoffset: dashOffset,
                  opacity: glowOpacity,
                  filter: "blur(6px)",
                }}
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray="1"
              />
            )}

            {/* Câble d'énergie principal bleu (Grossit et pulse en direct) */}
            <motion.path
              ref={pathRef}
              d={FULL_PATH}
              stroke="#0077cd"
              style={{
                strokeWidth: reduce ? 6 : strokeWidth,
                strokeDashoffset: dashOffset,
              }}
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="1"
            />

            {/* Pointeur tête de câble de lumière */}
            {!reduce && (
              <motion.circle
                cx={tip.x}
                cy={tip.y}
                r="10"
                fill="#ffffff"
                stroke="#0077cd"
                strokeWidth="3"
                style={{ opacity: tipOpacity, filter: "drop-shadow(0 0 8px #0077cd)" }}
              />
            )}
          </svg>

          {/* 3 Nœuds avec physique de dilatation */}
          {NODES.map((node, i) => (
            <PathNode
              key={steps[i].title}
              index={i}
              node={node}
              progress={progressMV}
              reduce={reduce}
            />
          ))}

          {/* 3 Textes épurés positionnés le long de la courbe */}
          {NODES.map((node, i) => (
            <div
              key={`label-${steps[i].title}`}
              className="absolute w-[18em] text-center"
              style={{
                left: `${(node.x / VIEW_W) * 100}%`,
                top: `${(node.y / VIEW_H) * 100}%`,
                transform:
                  node.placement === "above"
                    ? "translate(-50%, calc(-100% - 48px))"
                    : "translate(-50%, 48px)",
                zIndex: 10,
              }}
            >
              <motion.div
                initial={reduce ? false : { opacity: 0, y: node.placement === "above" ? -12 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.6,
                  delay: reduce ? 0 : i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-foreground">
                  {steps[i].title}
                </h3>
                <p
                  className="mt-2 text-[15px] text-muted leading-relaxed"
                  style={{ textWrap: "pretty" }}
                >
                  {steps[i].body}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* ── Version Mobile ── */}
        <div className="grid gap-8 sm:grid-cols-2 lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex flex-col gap-2 rounded-2xl border border-border-soft bg-white p-6 shadow-xs"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: reduce ? 0 : i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  0{i + 1}
                </span>
                <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-foreground">
                  {step.title}
                </h3>
              </div>
              <p
                className="mt-2 text-[14px] text-muted leading-relaxed"
                style={{ textWrap: "pretty" }}
              >
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
