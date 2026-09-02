"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

const STAGES = [
  {
    step: "01",
    tag: "Audit 48h",
    title: "Diagnostic & Cartographie",
    caption: "On identifie la tâche unique qui vous coûte le plus de temps.",
    image: "/howitworks/etape1.png",
  },
  {
    step: "02",
    tag: "Semaine 1",
    title: "Construction sur-mesure",
    caption: "L'agent est codé pour vos outils avec des garde-fous stricts.",
    image: "/howitworks/etape2.png",
  },
  {
    step: "03",
    tag: "Suivi continu",
    title: "Mise en service & Rodage",
    caption: "Calibrage sur vos données réelles avec 14 jours de garantie.",
    image: "/exemples/03.webp",
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.2 });

  const [activeStage, setActiveStage] = useState(0);
  const [isManual, setIsManual] = useState(false);

  // Défilement cinématique doux (7.5s) si l'utilisateur n'a pas cliqué
  useEffect(() => {
    if (!inView || reduce || isManual) return;
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [inView, reduce, isManual]);

  const handleSelect = (idx: number) => {
    setActiveStage(idx);
    setIsManual(true);
  };

  const current = STAGES[activeStage];

  return (
    <section
      id="methode"
      ref={sectionRef}
      aria-labelledby="methode-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-44 lg:px-16"
    >
      {/* ── En-tête de section sobre ── */}
      <div className="mb-10 border-t border-border-soft pt-16 md:mb-14 md:pt-24">
        <div
          className="mb-3 text-base font-semibold text-foreground md:text-lg"
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

      <div className="space-y-6">
        {/* ── 3 Onglets Épurés au sommet ── */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {STAGES.map((st, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={st.step}
                type="button"
                onClick={() => handleSelect(idx)}
                className={`group relative flex flex-col rounded-2xl p-5 text-left transition-all duration-300 border ${
                  isActive
                    ? "border-accent/50 bg-white shadow-soft"
                    : "border-border-soft/70 bg-background/50 hover:bg-white/60 hover:border-border"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-stage-line"
                    className="absolute top-0 inset-x-6 h-[2.5px] rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                )}

                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm font-bold transition-colors duration-200 ${
                      isActive ? "text-accent" : "text-muted-soft"
                    }`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {st.step}
                  </span>
                  <span className="rounded-full bg-background/80 px-2.5 py-0.5 text-[10px] font-semibold text-muted-soft border border-border-soft/60">
                    {st.tag}
                  </span>
                </div>

                <h3
                  className={`mt-2.5 text-[16px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${
                    isActive ? "text-foreground" : "text-foreground/75"
                  }`}
                >
                  {st.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* ── Grand Écran Cinématique 3D (Apple Studio Visual) ── */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border-soft bg-white p-2 shadow-2xl">
          <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-gradient-to-b from-[#fafaf9] to-[#f4f3f0]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.step}
                initial={reduce ? false : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full w-full"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain object-center"
                />
              </motion.div>
            </AnimatePresence>

            {/* Légende flottante en verre dépoli translucide (Ultra épurée) */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-white/80 bg-white/85 px-5 py-3.5 backdrop-blur-md shadow-lg sm:max-w-md"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span
                      className="text-xs font-semibold tracking-wider text-accent uppercase"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {current.tag}
                    </span>
                  </div>
                  <h4 className="mt-1 text-[16px] sm:text-[18px] font-semibold text-foreground">
                    {current.title}
                  </h4>
                  <p className="mt-0.5 text-[13px] sm:text-[14px] text-muted leading-snug">
                    {current.caption}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
