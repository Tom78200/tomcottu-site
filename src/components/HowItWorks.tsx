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
    placement: "above" as const,
  },
  {
    title: "Construction de l'agent",
    body: "Sur mesure, connecté aux outils déjà en place, pas un chatbot prêt à l'emploi.",
    placement: "below" as const,
  },
  {
    title: "Affinage en conditions réelles",
    body: "Ajustements après mise en service, tant que l'agent ne colle pas à l'usage réel.",
    placement: "above" as const,
  },
];

/*
  Layout desktop (tout en px absolus pour un alignement parfait) :
  - LABEL_H   : hauteur de la zone texte (au-dessus ET en-dessous de la ligne)
  - BADGE_D   : diamètre du badge
  - LINE_Y    : ordonnée de la ligne = LABEL_H + BADGE_D/2
  - Badges centrés à 1/6, 1/2, 5/6 de la largeur du conteneur
  - Fusée se déplace de 0 % à 83.33 % (= 5/6)
  - Nœuds s'allument à progress 0.2 / 0.6 / 1.0
*/
const LABEL_H = 148;
const BADGE_D = 48;
const LINE_Y = LABEL_H + BADGE_D / 2;    // 172 px depuis le haut
const TRACK_H = LABEL_H * 2 + BADGE_D;   // 344 px total

const LINE_START = 1 / 6;   // 16.67 %
const LINE_END   = 5 / 6;   // 83.33 %
const LINE_RANGE = LINE_END - LINE_START; // 66.66 %

const NODE_X   = [LINE_START, 0.5, LINE_END] as const;
const NODE_AT  = [0.2, 0.6, 1.0] as const; // valeurs progress pour chaque allumage

/* ── Fusée aérodynamique ─────────────────────────────────────────── */
function RocketSVG() {
  return (
    <svg
      width="62"
      height="24"
      viewBox="0 0 62 24"
      fill="none"
      aria-hidden="true"
    >
      {/* Corps principal */}
      <path
        d="M2,12 C5,3 16,0 32,0 L50,0 C57,0 62,6 62,12 C62,18 57,24 50,24 L32,24 C16,24 5,21 2,12Z"
        fill="var(--accent)"
      />
      {/* Nez légèrement plus sombre */}
      <path
        d="M46,0 L50,0 C57,0 62,6 62,12 C62,18 57,24 50,24 L46,24Z"
        fill="oklch(0.46 0.17 250)"
      />
      {/* Hublot */}
      <circle cx="28" cy="12" r="4.5" fill="white" opacity="0.55" />
      {/* Aileron bas */}
      <path d="M14,24 L6,32 L18,24Z" fill="oklch(0.46 0.17 250)" />
      {/* Sillage très discret — pas de flamme néon */}
      <ellipse
        cx="-3"
        cy="12"
        rx="9"
        ry="4"
        fill="oklch(0.56 0.17 250 / 0.12)"
      />
    </svg>
  );
}

/* ── Badge numéroté ─────────────────────────────────────────────── */
function Badge({
  index,
  lit,
  reduce,
}: {
  index: number;
  lit: boolean;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full border-2 text-[14px] font-semibold text-white"
      style={{
        width: BADGE_D,
        height: BADGE_D,
        fontFamily: "var(--font-heading)",
        position: "relative",
        zIndex: 4,
      }}
      animate={
        lit
          ? {
              backgroundColor: "var(--accent)",
              borderColor: "var(--accent)",
              scale: reduce ? 1 : [1, 1.12, 0.95, 1.04, 1],
            }
          : {
              backgroundColor: "oklch(0.25 0.03 250)",
              borderColor: "oklch(0.25 0.03 250)",
              scale: 1,
            }
      }
      transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
    >
      0{index + 1}
    </motion.div>
  );
}

/* ── Nœud (badge + logique d'allumage) ─────────────────────────── */
function StepNode({
  index,
  progress,
  reduce,
  onLit,
}: {
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

  return <Badge index={index} lit={lit} reduce={reduce} />;
}

/* ── Libellé (titre + corps) ─────────────────────────────────────── */
function StepLabel({
  step,
  lit,
  placement,
}: {
  step: (typeof steps)[number];
  lit: boolean;
  placement: "above" | "below";
}) {
  return (
    <motion.div
      className="w-full px-5 text-center"
      initial={{ opacity: 0, y: placement === "above" ? 8 : -8 }}
      animate={lit ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.p
        className="text-[16px] font-semibold leading-snug tracking-[-0.02em]"
        animate={{ color: lit ? "var(--accent)" : "var(--foreground)" }}
        transition={{ duration: 0.35 }}
      >
        {step.title}
      </motion.p>
      <p className="mt-2 text-[13px] leading-relaxed text-muted">
        {step.body}
      </p>
    </motion.div>
  );
}

/* ── Composant principal ─────────────────────────────────────────── */
export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.4 });

  const progressMV = useMotionValue(0);

  /*
    Toutes les transformations découlent du seul progressMV (0 → 1).
    La fusée va de 0 % à LINE_END * 100 % en x.
  */
  const rocketLeft = useTransform(
    progressMV,
    (v) => `calc(${v * LINE_END * 100}% - 31px)` // 31 = moitié de 62 px (largeur fusée)
  );

  const trailWidth = useTransform(
    progressMV,
    (v) => `${v * LINE_END * 100}%`
  );

  /*
    Fond animé : un halo de lumière douce qui suit la fusée.
    Pas de néon — juste une lueur accent-soft très diluée.
    Le halo est large (60 % du conteneur) et très flou (blur 56 px),
    ce qui donne un effet de "lumière naturelle qui se déplace".
  */
  const spotLeft = useTransform(
    progressMV,
    (v) => `${v * LINE_END * 100}%`
  );

  // État "allumé" par colonne (pour les libellés)
  const [litStates, setLitStates] = useState([false, false, false]);
  const markLit = useCallback((i: number) => {
    setLitStates((prev) => {
      if (prev[i]) return prev;
      const next = [...prev];
      next[i] = true;
      return next;
    });
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      progressMV.set(1);
      setLitStates([true, true, true]);
      return;
    }
    const c = animate(progressMV, 1, {
      duration: 4.0,
      ease: [0.2, 0, 0.12, 1],
    });
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
          }}
        >
          Trois étapes, pas de blabla.
        </h2>
      </div>

      <div ref={sectionRef}>
        {/* ════════ Desktop ════════ */}
        <div
          className="relative hidden overflow-hidden rounded-2xl lg:block"
          style={{ height: TRACK_H }}
        >
          {/* ── Fond animé (lumière qui suit la fusée) ── */}
          {!reduce && (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute"
              style={{
                inset: 0,
                /* On déplace un gradient radial via clip-path trick :
                   on crée le gradient centré à droite, et on le translate */
              }}
            >
              <motion.div
                className="absolute h-full"
                style={{
                  width: "60%",
                  left: spotLeft,
                  transform: "translateX(-50%)",
                  background:
                    "radial-gradient(ellipse 80% 100% at 50% 50%, oklch(0.94 0.05 250 / 0.28) 0%, transparent 75%)",
                  filter: "blur(48px)",
                }}
              />
            </motion.div>
          )}

          {/* ── Ligne de référence (grise, fond) ── */}
          <div
            className="pointer-events-none absolute"
            style={{
              top: LINE_Y,
              left: `${LINE_START * 100}%`,
              right: `${(1 - LINE_END) * 100}%`,
              height: 1,
              background: "var(--border-soft)",
              transform: "translateY(-50%)",
            }}
          />

          {/* ── Traînée bleue (suit la fusée) ── */}
          <motion.div
            className="pointer-events-none absolute"
            style={{
              top: LINE_Y,
              left: 0,
              height: 1.5,
              borderRadius: 99,
              background: "var(--accent)",
              transform: "translateY(-50%)",
              width: trailWidth,
              opacity: 0.7,
            }}
          />

          {/* ── Fusée ── */}
          {!reduce && (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute"
              style={{
                top: LINE_Y - 12, // centre vertical : fusée h=24 → -12
                left: rocketLeft,
                zIndex: 10,
              }}
            >
              <RocketSVG />
            </motion.div>
          )}

          {/*
            ── Grille 3 colonnes pour libellés + badges ──
            Les labels vivent dans la grille (positionnement stable).
            Les badges sont absolus sur la ligne (alignement exact).
          */}
          <div
            className="absolute inset-0 grid grid-cols-3"
            style={{ height: TRACK_H, zIndex: 5 }}
          >
            {steps.map((step, i) => {
              const isAbove = step.placement === "above";
              return (
                <div key={step.title} className="flex flex-col items-center">
                  {/* Zone label au-dessus */}
                  <div
                    className="flex w-full items-end justify-center"
                    style={{ height: LABEL_H }}
                  >
                    {isAbove && (
                      <div className="pb-8 w-full">
                        <StepLabel
                          step={step}
                          lit={litStates[i]}
                          placement="above"
                        />
                      </div>
                    )}
                  </div>

                  {/* Badge (toujours affiché, même quand pas encore allumé) */}
                  <div
                    className="flex items-center justify-center"
                    style={{ height: BADGE_D }}
                  >
                    <StepNode
                      index={i}
                      progress={progressMV}
                      reduce={reduce}
                      onLit={() => markLit(i)}
                    />
                  </div>

                  {/* Zone label en-dessous */}
                  <div
                    className="flex w-full items-start justify-center"
                    style={{ height: LABEL_H }}
                  >
                    {!isAbove && (
                      <div className="pt-8 w-full">
                        <StepLabel
                          step={step}
                          lit={litStates[i]}
                          placement="below"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ════════ Mobile ════════ */}
        <div className="grid gap-8 lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex items-start gap-4"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                delay: reduce ? 0 : i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-[13px] font-semibold text-accent-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
                initial={reduce ? false : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  delay: reduce ? 0 : i * 0.1 + 0.12,
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
              >
                0{i + 1}
              </motion.span>
              <div>
                <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-foreground">
                  {step.title}
                </h3>
                <p
                  className="mt-1.5 text-[15px] text-muted"
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
