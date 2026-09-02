"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originX: number;
  originY: number;
  targetX: number;
  targetY: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
  angle: number;
  speed: number;
  orbitRadius: number;
  layer: number;
}

const STAGES = [
  {
    step: "01",
    tag: "Audit 48h",
    title: "Diagnostic & Cartographie",
    headline: "Identifier la tâche unique qui vous coûte le plus de temps.",
    caption: "Scan de vos flux réels et détection du goulot d'étranglement.",
    mode: "radar" as const,
  },
  {
    step: "02",
    tag: "Semaine 1",
    title: "Conception sur-mesure",
    headline: "Un agent taillé pour vos process avec garde-fous stricts.",
    caption: "Connexion sécurisée à vos outils et codage des règles métier.",
    mode: "neural" as const,
  },
  {
    step: "03",
    tag: "Suivi continu",
    title: "Mise en service & Rodage",
    headline: "Calibrage en conditions réelles jusqu'à perfection.",
    caption: "Accompagnement en double commande et garantie 14 jours.",
    mode: "flow" as const,
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.2 });

  const [activeStage, setActiveStage] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });

  // Défilement automatique calme (8s) si l'utilisateur n'a pas pris la main
  useEffect(() => {
    if (!inView || reduce || isManual) return;
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [inView, reduce, isManual]);

  const handleSelect = (idx: number) => {
    setActiveStage(idx);
    setIsManual(true);
  };

  /* ── MOTEUR CINÉMATIQUE PARTICULES CANVAS 2D ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio || 800);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio || 450);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };
    window.addEventListener("resize", handleResize);

    const PARTICLE_COUNT = 90;
    const particles: Particle[] = [];

    const ACCENT_COLOR = "#0077cd";
    const CYAN_COLOR = "#00a3ff";
    const WHITE_COLOR = "#162330";

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = (i / PARTICLE_COUNT) * Math.PI * 2;
      const orbitRadius = 40 + (i % 5) * 45;
      const layer = i % 3;
      particles.push({
        x: width / 2 + Math.cos(angle) * orbitRadius,
        y: height / 2 + Math.sin(angle) * orbitRadius,
        vx: 0,
        vy: 0,
        originX: width / 2,
        originY: height / 2,
        targetX: width / 2,
        targetY: height / 2,
        radius: 2 + Math.random() * 2.5,
        baseRadius: 2 + Math.random() * 2.5,
        color: i % 3 === 0 ? ACCENT_COLOR : i % 3 === 1 ? CYAN_COLOR : WHITE_COLOR,
        alpha: 0.3 + Math.random() * 0.7,
        angle: angle,
        speed: 0.008 + (i % 4) * 0.004,
        orbitRadius: orbitRadius,
        layer: layer,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const mode = STAGES[activeStage].mode;
      const mouse = mouseRef.current;

      // ── MISE À JOUR DES POSITIONS SELON LE MODE ──
      particles.forEach((p, i) => {
        let tx = cx;
        let ty = cy;

        if (mode === "radar") {
          // Mode 01 : Cercles de scan orbitaux concentriques avec faisceau
          p.angle += p.speed;
          const currentRadius = p.orbitRadius * (width < 600 ? 0.7 : 1);
          tx = cx + Math.cos(p.angle) * currentRadius;
          ty = cy + Math.sin(p.angle) * currentRadius * 0.55; // Vue en perspective elliptique
        } else if (mode === "neural") {
          // Mode 02 : Constellation neuronale / maillage géométrique 3D
          const col = i % 9;
          const row = Math.floor(i / 9);
          const spacingX = (width * 0.7) / 9;
          const spacingY = (height * 0.6) / 10;
          const offsetX = (row % 2) * (spacingX / 2);
          const wave = Math.sin(time * 2 + col * 0.5 + row * 0.5) * 12;
          tx = cx - (width * 0.35) + col * spacingX + offsetX;
          ty = cy - (height * 0.3) + row * spacingY + wave;
        } else if (mode === "flow") {
          // Mode 03 : Onde de flux sinusoïdale fluide infinie
          const stepX = (width * 0.8) / PARTICLE_COUNT;
          const px = cx - (width * 0.4) + i * stepX;
          const wave1 = Math.sin(time * 3 + i * 0.15) * (height * 0.18);
          const wave2 = Math.cos(time * 2 + i * 0.1) * (height * 0.08);
          tx = px;
          ty = cy + (p.layer === 0 ? wave1 : p.layer === 1 ? -wave1 * 0.8 : wave2);
        }

        // Physique douce (Spring damping vers la cible)
        p.vx += (tx - p.x) * 0.05;
        p.vy += (ty - p.y) * 0.05;

        // Interaction fluide avec le curseur de souris
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 120 * window.devicePixelRatio;
          if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * 18;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        p.vx *= 0.82;
        p.vy *= 0.82;
        p.x += p.vx;
        p.y += p.vy;
      });

      // ── DESSIN DES CONNEXIONS ET FILAMENTS LUMINEUX ──
      if (mode === "neural" || mode === "radar") {
        ctx.lineWidth = 1 * window.devicePixelRatio;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const connectDist = mode === "neural" ? 70 * window.devicePixelRatio : 55 * window.devicePixelRatio;

            if (dist < connectDist) {
              const alpha = (1 - dist / connectDist) * 0.35;
              ctx.strokeStyle = `rgba(0, 119, 205, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      } else if (mode === "flow") {
        // En mode flow : relier les particules adjacentes par couche
        ctx.lineWidth = 1.5 * window.devicePixelRatio;
        ctx.strokeStyle = "rgba(0, 119, 205, 0.25)";
        ctx.beginPath();
        particles.forEach((p, idx) => {
          if (idx === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.stroke();
      }

      // ── DESSIN DES PARTICULES & GLOWS ──
      particles.forEach((p) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * window.devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = "#0077cd";
        ctx.shadowBlur = 10 * window.devicePixelRatio;
        ctx.fill();
        ctx.restore();
      });

      // ── LUEUR CENTRALE AMBIANTE DOUCE ──
      const glowGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 180 * window.devicePixelRatio);
      glowGrad.addColorStop(0, "rgba(0, 119, 205, 0.08)");
      glowGrad.addColorStop(1, "rgba(0, 119, 205, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 180 * window.devicePixelRatio, 0, Math.PI * 2);
      ctx.fill();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeStage]);

  /* ── GESTIONNAIRE SOURIS POUR INTERACTION CURSEUR ── */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: (e.clientX - rect.left) * window.devicePixelRatio,
      y: (e.clientY - rect.top) * window.devicePixelRatio,
      active: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
  };

  const current = STAGES[activeStage];

  return (
    <section
      id="methode"
      ref={sectionRef}
      aria-labelledby="methode-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-44 lg:px-16"
    >
      {/* ── En-tête de section ── */}
      <div className="mb-12 border-t border-border-soft pt-16 md:mb-16 md:pt-24">
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
        {/* ── Sélecteur / 3 Onglets Épurés & Haut de Gamme ── */}
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

        {/* ── Grand Écran Cinématique Interactif (Canvas Réactif + Typo Pure) ── */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="group relative h-[380px] sm:h-[440px] md:h-[480px] w-full overflow-hidden rounded-3xl border border-border-soft bg-white p-8 shadow-card flex flex-col justify-between"
        >
          {/* Canvas WebGL/2D interactif en arrière-plan */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full cursor-crosshair transition-opacity duration-500"
          />

          {/* Calque de profondeur & vignette douce */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40 opacity-70" />

          {/* Badge haut gauche */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-full border border-border-soft/80 bg-white/80 px-3.5 py-1.5 backdrop-blur-md shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-accent uppercase">
                {current.tag}
              </span>
            </div>

            <span className="hidden sm:inline-block text-[11px] text-muted-soft">
              Survolez les particules pour interagir
            </span>
          </div>

          {/* Texte épuré & percutant au centre/bas */}
          <div className="relative z-10 max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.step}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-2"
              >
                <h3
                  className="text-[22px] sm:text-[28px] md:text-[34px] font-semibold text-foreground tracking-tight"
                  style={{ lineHeight: 1.15 }}
                >
                  {current.headline}
                </h3>
                <p className="text-[14px] sm:text-[16px] text-muted font-normal max-w-lg leading-relaxed">
                  {current.caption}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
