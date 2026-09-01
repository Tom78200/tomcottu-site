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

// Le dernier point s'allume à 0.85 et non à 1 : sa transition dure 0.12,
// donc calé sur 1 il n'atteignait le noir qu'à l'ultime image et paraissait
// rester gris.
// Les nœuds extrêmes sont rentrés à 210/990 et non 150/1050 : les libellés
// sont centrés dessus et débordaient de l'écran en dessous de 1100px.
const NODES = [
  { x: 210, y: 212, at: 0.06, placement: "above" as const },
  { x: 600, y: 388, at: 0.5, placement: "below" as const },
  { x: 990, y: 212, at: 0.85, placement: "above" as const },
];

// Courbe unique continue 1 -> 2 -> 3
const FULL_PATH = "M210,212 C 380,212 430,388 600,388 C 770,388 820,212 990,212";

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
  const background = useTransform(progress, range, ["#162330", "#0077cd"]);
  const color = useTransform(progress, range, ["#ffffff", "#ffffff"]);
  const borderColor = useTransform(progress, range, ["#162330", "#0077cd"]);
  const scale = useTransform(
    progress,
    [node.at - 0.04, node.at, node.at + 0.06],
    [1, 1.25, 1]
  );
  const ringScale = useTransform(
    progress,
    [node.at - 0.02, node.at + 0.16],
    [0.7, 2.1]
  );
  const ringOpacity = useTransform(
    progress,
    [node.at - 0.02, node.at + 0.16],
    [0, 0.35, 0]
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
          className="absolute inset-0 rounded-full border-2 border-accent"
          style={{ scale: ringScale, opacity: ringOpacity }}
        />
      )}
      <motion.div
        className="flex h-16 w-16 items-center justify-center rounded-full border-2 text-[15px] font-medium shadow-sm"
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

function StepLabel({
  step,
  node,
  progress,
  reduce,
}: {
  step: (typeof steps)[number];
  node: (typeof NODES)[number];
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  const range: [number, number] = [node.at - 0.08, node.at + 0.02];
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
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          duration: 0.55,
          delay: reduce ? 0 : 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <motion.h3
          className="text-[21px] font-medium tracking-[-0.02em]"
          style={{ color: reduce ? "#0077cd" : titleColor }}
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

export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.4 });

  // progression 0 -> 1 (unique source de vérité)
  const progressMV = useMotionValue(0);
  const dashOffset = useTransform(progressMV, [0, 1], [1, 0]);
  // Déclaré ici et non dans le JSX : appelé sous condition, ce hook cassait
  // l'ordre des hooks dès que la préférence de mouvement réduit changeait.
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
      duration: 3,
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

            {/* Remplissage bleu continu 1 -> 3 */}
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

            {/* Pointeur qui suit la pointe et s'arrête au bord du nœud 3 */}
            {!reduce && (
              <motion.circle
                cx={tip.x}
                cy={tip.y}
                r="7"
                fill="#ffffff"
                stroke="#0077cd"
                strokeWidth="3"
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
            <StepLabel
              key={`label-${steps[i].title}`}
              step={steps[i]}
              node={node}
              progress={progressMV}
              reduce={reduce}
            />
          ))}
        </div>

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
                delay: reduce ? 0 : i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-foreground shadow-accent"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                0{i + 1}
              </span>
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
