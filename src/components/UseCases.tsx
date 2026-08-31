"use client";

import { motion, useReducedMotion } from "motion/react";
import type { SVGProps } from "react";
import styles from "./UseCases.module.css";

function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <rect
        x="8"
        y="12"
        width="48"
        height="32"
        rx="10"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M20 44v8l10-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M18 24h28M18 32h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="49" cy="17" r="4.5" fill="currentColor" />
    </svg>
  );
}

function DocsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <rect x="12" y="8" width="30" height="40" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M19 20h16M19 28h16M19 36h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="45" cy="42" r="11" stroke="currentColor" strokeWidth="1.6" />
      <path d="M40.5 42.5 43.5 45.5 50 39" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <rect x="10" y="14" width="44" height="38" rx="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 25h44" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 8v10M44 8v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M24 40c0-4 4-6 8-6s8 2 8 6-4 6-8 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M32 46l-3 4M32 46l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const useCases = [
  {
    friction: "Vous ratez des demandes parce que vous répondez trop tard",
    solution: "Un agent qualifie et répond aux prospects dès leur premier message.",
    icon: ChatIcon,
  },
  {
    friction: "Vos équipes répondent aux mêmes questions 50 fois par semaine",
    solution:
      "Un agent répond depuis votre doc et votre FAQ, et n'escalade que les cas complexes.",
    icon: DocsIcon,
  },
  {
    friction: "Vos relances de devis, vous les oubliez ou vous les faites à la main",
    solution: "Un agent relance automatiquement selon un calendrier, au bon moment.",
    icon: CalendarIcon,
  },
];

export function UseCases() {
  const reduce = useReducedMotion();

  return (
    <section
      id="cas-usage"
      aria-labelledby="cas-usage-heading"
      className="w-full px-5 pb-40 sm:px-10 md:pb-56 lg:px-16"
    >
      {/* Pas de border-t ici, contrairement aux autres sections : le dégradé
          de fin du hero assure déjà la séparation. */}
      <div className="mb-14 pt-8 md:mb-20 md:pt-10">
        <div
          className="mb-4 text-base font-semibold text-accent md:text-lg"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Cas d&apos;usage
        </div>
        <h2
          id="cas-usage-heading"
          className="max-w-4xl font-medium text-foreground"
          style={{
            fontSize: "clamp(34px, 5vw, 60px)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            textWrap: "balance",
          }}
        >
          Trois frictions qui vous coûtent du temps chaque semaine.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {useCases.map((item, i) => (
          <motion.div
            key={item.friction}
            className={`flex flex-col rounded-3xl bg-accent-soft p-9 sm:p-10 shadow-soft ${styles.glowCard}`}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              delay: reduce ? 0 : i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/15 bg-background text-accent">
              <item.icon className="h-8 w-8" />
            </div>
            <h3
              className="font-medium text-foreground"
              style={{
                fontSize: "clamp(21px, 2vw, 25px)",
                lineHeight: 1.28,
                letterSpacing: "-0.02em",
                textWrap: "pretty",
              }}
            >
              {item.friction}
            </h3>
            <p className="mt-4 text-base text-muted" style={{ lineHeight: 1.6 }}>
              {item.solution}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
