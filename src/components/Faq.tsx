"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { faq } from "@/lib/seo";

function Chevron({ ouvert }: { ouvert: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-300 ${
        ouvert ? "rotate-180" : ""
      }`}
    >
      <path
        d="M3 5.5 7 9.5l4-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Faq() {
  const reduce = useReducedMotion();
  const [ouvert, setOuvert] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-44 lg:px-16"
    >
      <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
        <div
          className="mb-4 text-base font-semibold text-foreground md:text-lg"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Questions fréquentes
        </div>
        <h2
          id="faq-heading"
          className="max-w-3xl font-medium text-foreground"
          style={{
            fontSize: "clamp(34px, 5vw, 60px)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            textWrap: "balance",
          }}
        >
          Ce qu&apos;on me demande avant de commencer.
        </h2>
      </div>

      <div className="max-w-3xl divide-y divide-border-soft border-y border-border-soft">
        {faq.map((item, i) => {
          const actif = ouvert === i;
          return (
            <div key={item.question}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOuvert(actif ? null : i)}
                  aria-expanded={actif}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left text-[17px] font-medium text-foreground transition-colors hover:text-accent/70 sm:text-[19px]"
                >
                  {item.question}
                  <Chevron ouvert={actif} />
                </button>
              </h3>
              {/* La réponse reste montée même repliée : Google n'indexe le
                  balisage FAQPage que si le texte est présent dans le HTML. */}
              <motion.div
                initial={false}
                animate={{
                  height: actif ? "auto" : 0,
                  opacity: actif ? 1 : 0,
                }}
                transition={{
                  duration: reduce ? 0 : 0.32,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="overflow-hidden"
                aria-hidden={!actif}
              >
                <p
                  className="max-w-2xl pb-6 text-[16px] text-muted"
                  style={{ lineHeight: 1.6, textWrap: "pretty" }}
                >
                  {item.reponse}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
