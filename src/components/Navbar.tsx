"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "./HeroMainframe.module.css";

const navLinks = [
  { href: "/#exemples", label: "Exemples" },
  { href: "/#services", label: "Services" },
  { href: "/#methode", label: "Comment ça marche" },
  { href: "/#a-propos", label: "À propos" },
];

const CTA_LABEL = "Cadrer mon diagnostic";

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

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backdropOpacity = useTransform(scrollY, [0, 140], [0, 1]);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 grid grid-cols-3 items-center gap-4 px-5 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5">
        <motion.div
          className="absolute inset-0 -z-10 border-b border-black/[0.06] bg-white/70 backdrop-blur-md"
          style={{ opacity: backdropOpacity }}
        />

        <div className="flex items-center justify-start gap-3">
          <Link
            href="/"
            aria-label="Tom Cottu, développeur IA freelance, accueil"
            className={`${styles.headingFont} text-[19px] tracking-tight text-black sm:text-[21px] lg:text-[24px]`}
          >
            Tom Cottu
          </Link>
        </div>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center justify-center gap-6 text-[15px] whitespace-nowrap text-black lg:flex xl:gap-9 xl:text-[17px]"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors hover:text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[14px] font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-black/80 lg:inline-flex xl:px-6 xl:py-3 xl:text-[15px]"
          >
            {CTA_LABEL}
            <ArrowIcon />
          </Link>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <motion.span
              animate={{ 
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 6 : 0
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="h-[2px] w-6 bg-black"
            />
            <motion.span
              animate={{ 
                scaleX: menuOpen ? 0 : 1,
                opacity: menuOpen ? 0 : 1
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="h-[2px] w-6 bg-black"
            />
            <motion.span
              animate={{ 
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -6 : 0
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="h-[2px] w-6 bg-black"
            />
          </button>
        </div>
      </header>

      <nav
        aria-label="Navigation principale mobile"
        className={`fixed inset-0 z-40 flex flex-col items-start justify-center gap-8 bg-white/95 px-8 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-[32px] font-medium text-black"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[18px] font-medium text-white"
        >
          {CTA_LABEL}
          <ArrowIcon />
        </Link>
      </nav>
    </>
  );
}
