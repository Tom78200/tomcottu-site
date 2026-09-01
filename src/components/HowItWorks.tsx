"use client";

import Image from "next/image";
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
    image: "/exemples/01.webp",
  },
  {
    title: "Construction de l'agent",
    body: "Sur mesure, connecté aux outils déjà en place, pas un chatbot prêt à l'emploi.",
    image: "/exemples/02.webp",
  },
  {
    title: "Affinage en conditions réelles",
    body: "Ajustements après mise en service, tant que l'agent ne colle pas à l'usage réel.",
    image: "/exemples/03.webp",
  },
];

const VIEW_W = 1200;
const VIEW_H = 620;

const NODES = [
  { x: 210, y: 260, at: 0.06, placement: "above" as const },
  { x: 600, y: 390, at: 0.5, placement: "below" as const },
  { x: 990, y: 260, at: 0.85, placement: "above" as const },
];

// Courbe unique continue 1 -> 2 -> 3
const FULL_PATH = "M210,260 C 380,260 430,390 600,390 C 770,390 820,260 990,260";

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
  const scale = useTransform(
    progress,
    [node.at - 0.04, node.at, node.at + 0.06],
    [1, 1.3, 1]
  );
  const ringScale = useTransform(
    progress,
    [node.at - 0.02, node.at + 0.16],
    [0.7, 2.1]
  );
  const ringOpacity = useTransform(
    progress,
    [node.at - 0.02, node.at + 0.07, node.at + 0.16],
    [0, 0.28, 0]
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
      {!reduce && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full border border-accent"
          style={{ scale: ringScale, opacity: ringOpacity }}
        />
      )}
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

function StepNodeContent({
  index,
  node,
  step,
  progress,
  reduce,
}: {
  index: number;
  node: (typeof NODES)[number];
  step: (typeof steps)[number];
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  // L'image et le bloc apparaissent au moment où le bleu passe sur le nœud
  const revealOpacity = useTransform(
    progress,
    [node.at - 0.06, node.at + 0.06],
    [0, 1]
  );
  const revealScale = useTransform(
    progress,
    [node.at - 0.06, node.at + 0.06],
    [0.85, 1]
  );
  const revealY = useTransform(
    progress,
    [node.at - 0.06, node.at + 0.06],
    [node.placement === "above" ? 12 : -12, 0]
  );

  const isAbove = node.placement === "above";

  return (
    <div
      className="absolute w-[18em] text-center"
      style={{
        left: `${(node.x / VIEW_W) * 100}%`,
        top: `${(node.y / VIEW_H) * 100}%`,
        transform: isAbove
          ? "translate(-50%, calc(-100% - 50px))"
          : "translate(-50%, 50px)",
      }}
    >
      <motion.div
        style={
          reduce
            ? {}
            : {
                opacity: revealOpacity,
                scale: revealScale,
                y: revealY,
              }
        }
        className="flex flex-col items-center gap-3"
      >
        {/* Si le texte est au-dessus du point : Image au sommet, puis texte */}
        {isAbove && (
          <div className="relative h-24 w-36 overflow-hidden rounded-2xl border border-border-soft bg-white shadow-soft">
            <Image
              src={step.image}
              alt={step.title}
              fill
              sizes="150px"
              className="object-cover object-center"
            />
          </div>
        )}

        <div>
          <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-foreground">
            {step.title}
          </h3>
          <p
            className="mt-1.5 text-[14px] text-muted leading-relaxed"
            style={{ textWrap: "pretty" }}
          >
            {step.body}
          </p>
        </div>

        {/* Si le texte est en-dessous du point : Texte d'abord, puis Image en-dessous */}
        {!isAbove && (
          <div className="relative mt-1 h-24 w-36 overflow-hidden rounded-2xl border border-border-soft bg-white shadow-soft">
            <Image
              src={step.image}
              alt={step.title}
              fill
              sizes="150px"
              className="object-cover object-center"
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}

export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.35 });

  // progression 0 -> 1 (unique source de vérité)
  const progressMV = useMotionValue(0);
  const dashOffset = useTransform(progressMV, [0, 1], [1, 0]);
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

    // Animation ralentie pour bien voir chaque étape et ses illustrations apparaître
    const controls = animate(progressMV, 1, {
      duration: 5.5,
      ease: "easeInOut",
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
        <div className="relative hidden h-[620px] lg:block">
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

            {/* Remplissage bleu continu 1 -> 3 */}
            <motion.path
              ref={pathRef}
              d={FULL_PATH}
              stroke="#0077cd"
              strokeWidth="6"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="1"
              style={{ strokeDashoffset: dashOffset }}
            />

            {/* Pointeur blanc qui suit la pointe et s'arrête au bord du nœud 3 */}
            {!reduce && (
              <motion.circle
                cx={tip.x}
                cy={tip.y}
                r="8"
                fill="#ffffff"
                style={{ opacity: tipOpacity }}
              />
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
            <StepNodeContent
              key={`content-${steps[i].title}`}
              index={i}
              node={node}
              step={steps[i]}
              progress={progressMV}
              reduce={reduce}
            />
          ))}
        </div>

        {/* Version Mobile */}
        <div className="grid gap-10 lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex flex-col gap-4 rounded-2xl border border-border-soft bg-white p-6 shadow-soft"
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
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  0{i + 1}
                </span>
                <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-foreground">
                  {step.title}
                </h3>
              </div>

              <div className="relative h-32 w-full overflow-hidden rounded-xl border border-border-soft bg-black/5">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="300px"
                  className="object-cover object-center"
                />
              </div>

              <p
                className="text-sm text-muted leading-relaxed"
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
