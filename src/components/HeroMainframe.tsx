"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useTypewriter } from "@/hooks/useTypewriter";
import styles from "./HeroMainframe.module.css";

const IMAGE_URL = "/hero-image/character.webp";

const CTA_LABEL = "Cadrer mon diagnostic";

const secondaryLinks = [
  { href: "#services", label: "Services" },
  { href: "#methode", label: "Comment ça marche" },
  { href: "#a-propos", label: "À propos" },
];

function CopyIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="1" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1" />
      <rect x="4" y="1" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 7h8M7.5 3.5 11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroMainframe() {
  const [pillsVisible, setPillsVisible] = useState(false);
  const mainframeRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: mainframeRef,
    offset: ["start start", "end start"],
  });
  // White curtain that rises and covers the photo as the user scrolls,
  // so the hero dissolves into the site's white background instead of
  // just scrolling away as a hard-edged block.
  const wipeScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const { displayed, done } = useTypewriter(
    "Des agents IA qui font le travail, pas la démo.",
    38,
    600
  );

  useEffect(() => {
    const timeout = setTimeout(() => setPillsVisible(true), 400);
    return () => clearTimeout(timeout);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("cottutom@outlook.fr");
  };

  return (
    <div ref={mainframeRef} className={`${styles.mainframe} bg-white sm:bg-transparent`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={IMAGE_URL}
        alt="Tom Cottu, développeur IA freelance"
        className={`${styles.video} hidden sm:block`}
      />
      <div className={`${styles.bottomFade} hidden sm:block`} />
      <motion.div
        className={`${styles.wipe} hidden sm:block`}
        style={{ scaleY: reduce ? 0 : wipeScale }}
      />

      <section className="relative z-[1] flex h-[78vh] flex-col justify-end overflow-hidden px-5 pb-12 sm:px-8 md:justify-center md:px-14 md:pb-0">
        <div className="relative z-10 max-w-3xl rounded-3xl bg-white/55 p-6 backdrop-blur-md sm:p-8">
          {/* h1 et non p : c'est le seul titre de niveau 1 de la page, il
              porte la requête principale. Le rendu visuel est inchangé. */}
          <h1
            className="mb-6 text-black"
            style={{
              fontSize: "clamp(30px, 5.6vw, 52px)",
              lineHeight: 1.08,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              minHeight: "1.1em",
            }}
          >
            {displayed}
            {!done && <span className={styles.cursor} />}
          </h1>

          <div
            className="flex flex-wrap items-center gap-3"
            style={{
              opacity: pillsVisible ? 1 : 0,
              transform: pillsVisible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-black/80"
            >
              {CTA_LABEL}
              <ArrowIcon />
            </Link>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-5 py-3 text-[13px] text-black transition-colors duration-200 hover:bg-black hover:text-white sm:text-[14px]"
            >
              <span>
                <span className="underline underline-offset-2">cottutom@outlook.fr</span>
              </span>
              <CopyIcon />
            </button>
          </div>

          <div
            className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-black/60"
            style={{
              opacity: pillsVisible ? 1 : 0,
              transition: "opacity 0.4s ease 0.1s",
            }}
          >
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 underline-offset-2 transition-colors hover:text-black hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
