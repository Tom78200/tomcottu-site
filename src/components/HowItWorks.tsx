"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

/* ── MOTEUR CANVAS DE PARTICULES, CÂBLES QUI GROSSISSENT & COMÈTES DE LUMIÈRE ── */
function PhotonStreamCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = canvas.offsetWidth * window.devicePixelRatio || 1000);
    let h = (canvas.height = canvas.offsetHeight * window.devicePixelRatio || 400);

    const onResize = () => {
      if (!canvas) return;
      w = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };
    window.addEventListener("resize", onResize);

    interface Comet {
      progress: number;
      speed: number;
      pathIndex: number;
      color: string;
      size: number;
    }

    const comets: Comet[] = [];
    const COMET_COUNT = 18;
    const colors = ["#0077cd", "#00d2ff", "#10b981", "#3b82f6"];

    for (let i = 0; i < COMET_COUNT; i++) {
      comets.push({
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.005,
        pathIndex: i % 6, // 4 entrées gauches, 2 sorties droites
        color: colors[i % colors.length],
        size: 3 + Math.random() * 2,
      });
    }

    const getBezierPoint = (
      t: number,
      p0: [number, number],
      p1: [number, number],
      p2: [number, number],
      p3: [number, number]
    ): [number, number] => {
      const u = 1 - t;
      const tt = t * t;
      const uu = u * u;
      const uuu = uu * u;
      const ttt = tt * t;
      const x = uuu * p0[0] + 3 * uu * t * p1[0] + 3 * u * tt * p2[0] + ttt * p3[0];
      const y = uuu * p0[1] + 3 * uu * t * p1[1] + 3 * u * tt * p2[1] + ttt * p3[1];
      return [x, y];
    };

    let time = 0;

    const render = () => {
      time += 0.025;
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.5;

      // 4 points d'entrée à gauche
      const leftInputs: [number, number][] = [
        [w * 0.22, h * 0.2],
        [w * 0.22, h * 0.4],
        [w * 0.22, h * 0.6],
        [w * 0.22, h * 0.8],
      ];

      // 2 points de sortie à droite
      const rightOutputs: [number, number][] = [
        [w * 0.78, h * 0.35],
        [w * 0.78, h * 0.65],
      ];

      // ── DESSIN DES CÂBLES AVEC ÉPAISSEUR VIVANTE QUI GROSSIT ──
      leftInputs.forEach(([lx, ly], i) => {
        // Le câble grossit avec une onde sinusoïdale en fonction du temps
        const dynamicWidth = (2.5 + Math.sin(time * 3 + i) * 1.5) * window.devicePixelRatio;
        const glowWidth = (6 + Math.sin(time * 3 + i) * 3) * window.devicePixelRatio;

        // Halo néon du câble
        ctx.save();
        ctx.lineWidth = glowWidth;
        ctx.strokeStyle = "rgba(0, 119, 205, 0.08)";
        ctx.beginPath();
        ctx.moveTo(lx, ly);
        ctx.bezierCurveTo(lx + (cx - lx) * 0.5, ly, cx - (cx - lx) * 0.4, cy, cx, cy);
        ctx.stroke();
        ctx.restore();

        // Câble principal
        ctx.save();
        ctx.lineWidth = dynamicWidth;
        ctx.strokeStyle = "rgba(0, 119, 205, 0.22)";
        ctx.beginPath();
        ctx.moveTo(lx, ly);
        ctx.bezierCurveTo(lx + (cx - lx) * 0.5, ly, cx - (cx - lx) * 0.4, cy, cx, cy);
        ctx.stroke();
        ctx.restore();
      });

      // Rails de centre -> droite
      rightOutputs.forEach(([rx, ry], i) => {
        const dynamicWidth = (2.5 + Math.sin(time * 3 + i + 2) * 1.5) * window.devicePixelRatio;
        const glowWidth = (6 + Math.sin(time * 3 + i + 2) * 3) * window.devicePixelRatio;

        ctx.save();
        ctx.lineWidth = glowWidth;
        ctx.strokeStyle = i === 0 ? "rgba(16, 185, 129, 0.1)" : "rgba(0, 119, 205, 0.1)";
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.bezierCurveTo(cx + (rx - cx) * 0.4, cy, rx - (rx - cx) * 0.5, ry, rx, ry);
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.lineWidth = dynamicWidth;
        ctx.strokeStyle = i === 0 ? "rgba(16, 185, 129, 0.3)" : "rgba(0, 119, 205, 0.25)";
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.bezierCurveTo(cx + (rx - cx) * 0.4, cy, rx - (rx - cx) * 0.5, ry, rx, ry);
        ctx.stroke();
        ctx.restore();
      });

      // ── DESSIN DES COMÈTES LASER SUR LES CÂBLES ──
      comets.forEach((c) => {
        c.progress += c.speed;
        if (c.progress > 1) c.progress = 0;

        let pt: [number, number];

        if (c.pathIndex < 4) {
          const [lx, ly] = leftInputs[c.pathIndex];
          pt = getBezierPoint(
            c.progress,
            [lx, ly],
            [lx + (cx - lx) * 0.5, ly],
            [cx - (cx - lx) * 0.4, cy],
            [cx, cy]
          );
        } else {
          const [rx, ry] = rightOutputs[c.pathIndex - 4];
          pt = getBezierPoint(
            c.progress,
            [cx, cy],
            [cx + (rx - cx) * 0.4, cy],
            [rx - (rx - cx) * 0.5, ry],
            [rx, ry]
          );
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(pt[0], pt[1], c.size * window.devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.shadowColor = c.color;
        ctx.shadowBlur = 14 * window.devicePixelRatio;
        ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 hidden lg:block h-full w-full"
    />
  );
}

export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      id="methode"
      ref={sectionRef}
      aria-labelledby="methode-heading"
      className="relative w-full px-5 pb-32 sm:px-10 md:pb-44 lg:px-16 overflow-hidden"
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
          Vos outils connectés. Vos tâches automatisées.
        </h2>
      </div>

      {/* ── GRAND WORKFLOW PANORAMIQUE VIVANT (SANS BLOC NI CADRE FERMÉ) ── */}
      <div className="relative mx-auto w-full max-w-6xl py-6 sm:py-12">
        {/* Canvas des câbles dynamiques et flux de comètes laser */}
        <PhotonStreamCanvas />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4">
          {/* ── 1. COLONNE GAUCHE : Canaux Sources avec impulsions néon ── */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-bold tracking-wider text-muted-soft uppercase">
                1. Vos flux quotidiens
              </span>
            </div>

            {[
              { label: "Emails & Demandes", sub: "Gmail / Outlook", icon: "✉️", badge: "Live sync" },
              { label: "Ressaisie & Devis", sub: "CRM / ERP", icon: "📊", badge: "Auto-fetch" },
              { label: "Messages & SAV", sub: "Slack / WhatsApp", icon: "💬", badge: "Instantané" },
              { label: "Bases documentaires", sub: "Notion / Drive", icon: "📁", badge: "Indexé" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={reduce ? false : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-border-soft bg-white/95 p-3.5 shadow-xs backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:shadow-md"
              >
                {/* Lueur subtile de bordure au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-background text-base border border-border-soft/60 shadow-xs">
                    {item.icon}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-foreground block">{item.label}</span>
                    <span className="text-[11px] font-medium text-muted-soft">{item.sub}</span>
                  </div>
                </div>

                <span className="relative z-10 rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold text-accent border border-accent/20">
                  {item.badge}
                </span>
              </motion.div>
            ))}
          </div>

          {/* ── 2. COLONNE CENTRALE : Cœur Réacteur 3D Gyroscopique (L'Agent Sur-Mesure) ── */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center py-8 lg:py-0 px-2 sm:px-6">
            <div className="relative flex flex-col items-center justify-center">
              {/* Halos de lumière volumétrique d'arrière-plan */}
              <div className="absolute -inset-10 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              {/* Gyroscope Rotatif Vectoriel Extérieur */}
              <motion.div
                animate={reduce ? {} : { rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute h-64 w-64 rounded-full border border-dashed border-accent/30 pointer-events-none"
              />

              {/* Gyroscope Intérieur Inversé */}
              <motion.div
                animate={reduce ? {} : { rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute h-52 w-52 rounded-full border border-dotted border-accent/40 pointer-events-none"
              />

              {/* Boîtier Principal du Réacteur */}
              <motion.div
                initial={reduce ? false : { scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20 flex flex-col items-center rounded-3xl border-2 border-accent bg-white/95 p-7 sm:p-9 text-center shadow-2xl backdrop-blur-xl max-w-[300px]"
              >
                {/* Onde de choc pulsante */}
                <div className="relative flex h-20 w-20 items-center justify-center">
                  {!reduce && (
                    <motion.div
                      animate={{ scale: [1, 1.45, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-2xl bg-accent blur-sm"
                    />
                  )}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-accent">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M9 8h6M9 12h6M9 16h4" />
                    </svg>
                  </div>
                </div>

                <span className="mt-4 text-[18px] font-bold text-foreground tracking-tight">
                  Agent IA Métier
                </span>
                <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Moteur temps réel actif
                </span>

                <div className="mt-5 w-full border-t border-border-soft/70 pt-3 flex items-center justify-between text-[11px]">
                  <span className="text-muted-soft">Temps de calcul</span>
                  <span className="font-bold text-accent">&lt; 0.4 seconde</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── 3. COLONNE DROITE : Résultats Réels & Validations en Continu ── */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold tracking-wider text-emerald-700 uppercase">
                2. Actions délivrées
              </span>
            </div>

            {/* Voie 1 : Exécution Automatique avec Shimmer */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 shadow-xs backdrop-blur-md"
            >
              <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                    Autonome (90%)
                  </span>
                </div>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                  Immédiat
                </span>
              </div>

              <ul className="mt-3 space-y-2">
                {[
                  "Réponse SAV rédigée & envoyée",
                  "Devis généré & loggé au CRM",
                  "Ressaisies supprimées à 100%",
                ].map((act) => (
                  <li key={act} className="flex items-center gap-2 text-xs font-medium text-emerald-950">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Voie 2 : Validation Humaine Sécurisée 1-Clic */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded-2xl border border-accent/25 bg-accent/5 p-4 shadow-xs backdrop-blur-md"
            >
              <div className="flex items-center justify-between pb-2 border-b border-accent/20">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-accent" />
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">
                    Validation Humaine (10%)
                  </span>
                </div>
                <span className="text-[10px] font-bold text-accent bg-white px-2 py-0.5 rounded-full border border-accent/20">
                  Garde-fous
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-xs text-foreground/80 font-medium">
                  Notification 1-clic Slack/Email pour les cas sensibles
                </p>
                <span className="shrink-0 rounded-lg bg-accent px-3 py-1.5 text-xs font-bold text-white shadow-accent">
                  Valider
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
