"use client";

import { motion, useReducedMotion } from "motion/react";
import { CtaButton } from "./CtaButton";
import type { Intent } from "@/lib/intents";

export function IntentPage({ intent }: { intent: Intent }) {
  const reduce = useReducedMotion();

  return (
    <main id="top" className="flex flex-1 flex-col">
      {/* HERO */}
      <section
        aria-labelledby="intent-hero-heading"
        className="w-full px-5 pb-24 pt-28 sm:px-10 md:pb-32 md:pt-36 lg:px-16"
      >
        <div className="mb-14 border-t border-border-soft pt-16 md:mb-20 md:pt-24">
          <div className="mb-4 text-base font-semibold text-foreground md:text-lg">
            {intent.ctaLabel.split(" ")[0] === "Diagnostic"
              ? "Résultat recherché"
              : "Prestation"}
          </div>
          <h1
            id="intent-hero-heading"
            className="max-w-3xl text-foreground"
            style={{
              fontSize: "clamp(34px, 5vw, 60px)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              textWrap: "balance",
            }}
          >
            {intent.h1}
          </h1>
          <p
            className="mt-6 max-w-2xl text-xl text-foreground"
            style={{ lineHeight: 1.55 }}
          >
            {intent.intro}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <CtaButton href="mailto:cottutom@outlook.fr" size="lg" />
            <a
              href="mailto:cottutom@outlook.fr"
              className="py-2.5 text-[15px] text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              cottutom@outlook.fr
            </a>
          </div>
        </div>
      </section>

      {/* SECTIONS BÉNÉFICE */}
      <section
        id="details"
        aria-labelledby="intent-details-heading"
        className="w-full px-5 pb-24 sm:px-10 md:pb-32 lg:px-16"
      >
        <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
          <h2
            id="intent-details-heading"
            className="max-w-3xl text-foreground"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              textWrap: "balance",
            }}
          >
            Ce que ça change pour vous
          </h2>
        </div>
        <motion.div
          className="grid gap-px overflow-hidden rounded-2xl border border-border-soft bg-border-soft md:grid-cols-3"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {intent.sections.map((s) => (
            <div key={s.titre} className="bg-background p-8 md:p-10">
              <div className="text-[17px] font-medium text-foreground">
                {s.titre}
              </div>
              <p
                className="mt-2 text-[15px] text-muted"
                style={{ lineHeight: 1.6, textWrap: "pretty" }}
              >
                {s.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* CONVERSION */}
      <section
        id="contact"
        aria-labelledby="intent-contact-heading"
        className="w-full px-5 pb-24 sm:px-10 md:pb-32 lg:px-16"
      >
        <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
          <h2
            id="intent-contact-heading"
            className="max-w-3xl text-foreground"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              textWrap: "balance",
            }}
          >
            On commence par quoi ?
          </h2>
        </div>
        <div className="max-w-2xl">
          <p className="mt-5 text-[17px] text-muted" style={{ lineHeight: 1.6 }}>
            {intent.closing}
          </p>
          <div className="mt-10">
            <CtaButton href="mailto:cottutom@outlook.fr" size="lg" />
          </div>
        </div>
      </section>
    </main>
  );
}
