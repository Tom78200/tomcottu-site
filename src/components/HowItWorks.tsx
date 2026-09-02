"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

/* ── MOTEUR CINÉMATIQUE PARTICULES & RAILS LUMINEUX (RENDU VIDÉO 60 FPS) ── */
function VideoMotionCanvas({ isPlaying, speedMultiplier }: { isPlaying: boolean; speedMultiplier: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = canvas.offsetWidth * window.devicePixelRatio || 1200);
    let h = (canvas.height = canvas.offsetHeight * window.devicePixelRatio || 500);

    const onResize = () => {
      if (!canvas) return;
      w = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };
    window.addEventListener("resize", onResize);

    interface LaserPacket {
      progress: number;
      speed: number;
      pathIndex: number;
      color: string;
      size: number;
    }

    const packets: LaserPacket[] = [];
    const PACKET_COUNT = 24;
    const colors = ["#0077cd", "#00d2ff", "#10b981", "#3b82f6", "#06b6d4"];

    for (let i = 0; i < PACKET_COUNT; i++) {
      packets.push({
        progress: Math.random(),
        speed: (0.003 + Math.random() * 0.004) * speedMultiplier,
        pathIndex: i % 6,
        color: colors[i % colors.length],
        size: 2.5 + Math.random() * 2,
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
      if (isPlaying) time += 0.02 * speedMultiplier;
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.48;

      // 4 points d'entrée gauche
      const inputs: [number, number][] = [
        [w * 0.18, h * 0.22],
        [w * 0.18, h * 0.38],
        [w * 0.18, h * 0.58],
        [w * 0.18, h * 0.76],
      ];

      // 2 points de sortie droite
      const outputs: [number, number][] = [
        [w * 0.82, h * 0.34],
        [w * 0.82, h * 0.64],
      ];

      // Rails de guidage lumineux
      ctx.lineWidth = 1.5 * window.devicePixelRatio;
      ctx.strokeStyle = "rgba(0, 119, 205, 0.15)";

      inputs.forEach(([lx, ly]) => {
        ctx.beginPath();
        ctx.moveTo(lx, ly);
        ctx.bezierCurveTo(lx + (cx - lx) * 0.5, ly, cx - (cx - lx) * 0.4, cy, cx, cy);
        ctx.stroke();
      });

      outputs.forEach(([rx, ry]) => {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.bezierCurveTo(cx + (rx - cx) * 0.4, cy, rx - (rx - cx) * 0.5, ry, rx, ry);
        ctx.stroke();
      });

      // Rendu des lasers de données
      packets.forEach((p) => {
        if (isPlaying) {
          p.progress += p.speed;
          if (p.progress > 1) p.progress = 0;
        }

        let pt: [number, number];

        if (p.pathIndex < 4) {
          const [lx, ly] = inputs[p.pathIndex];
          pt = getBezierPoint(
            p.progress,
            [lx, ly],
            [lx + (cx - lx) * 0.5, ly],
            [cx - (cx - lx) * 0.4, cy],
            [cx, cy]
          );
        } else {
          const [rx, ry] = outputs[p.pathIndex - 4];
          pt = getBezierPoint(
            p.progress,
            [cx, cy],
            [cx + (rx - cx) * 0.4, cy],
            [rx - (rx - cx) * 0.5, ry],
            [rx, ry]
          );
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(pt[0], pt[1], p.size * window.devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
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
  }, [isPlaying, speedMultiplier]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}

export function HowItWorks() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const totalDuration = 12; // 12 secondes de boucle

  // Horloge de lecture vidéo
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentTime((prev) => (prev + 0.1 >= totalDuration ? 0 : Number((prev + 0.1).toFixed(1))));
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const progressPercent = (currentTime / totalDuration) * 100;

  return (
    <section
      id="methode"
      ref={sectionRef}
      aria-labelledby="methode-heading"
      className="relative w-full px-5 pb-32 sm:px-10 md:pb-44 lg:px-16 overflow-hidden"
    >
      {/* ── En-tête de section ── */}
      <div className="mb-10 border-t border-border-soft pt-16 md:mb-14 md:pt-24 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
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

        {/* Badge Live Motion Video */}
        <div className="flex items-center gap-2 rounded-full border border-border-soft bg-white/90 px-3.5 py-1.5 shadow-xs">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
          </span>
          <span className="text-xs font-bold text-foreground">DÉMO EN DIRECT 60 FPS</span>
        </div>
      </div>

      {/* ── GRAND MOCKUP LECTEUR VIDÉO STUDIO 16:9 (CINEMATIC MOTION VIDEO) ── */}
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-border-soft bg-[#fafaf9] p-3 sm:p-5 shadow-2xl">
        {/* Cadre intérieur écran vidéo 16:9 */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-white border border-border-soft/60 shadow-inner flex flex-col justify-between p-5 sm:p-8">
          {/* ── Header Fenêtre Vidéo Studio ── */}
          <div className="relative z-20 flex items-center justify-between pb-3 border-b border-border-soft/60">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-black/10" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-black/10" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-black/10" />
              <span className="ml-2 hidden sm:inline-block text-xs font-medium text-muted-soft">
                Workflow-Live-Render.mp4
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="rounded-md bg-background px-2.5 py-1 text-[11px] font-bold text-muted-soft uppercase tracking-wider">
                4K UHD
              </span>
              <span className="text-xs font-bold text-accent">
                {formatTime(currentTime)} / {formatTime(totalDuration)}
              </span>
            </div>
          </div>

          {/* ── SCÈNE CINÉMATIQUE ANIMÉE (LE CŒUR DE LA VIDÉO) ── */}
          <div className="relative my-auto flex h-full w-full items-center justify-between">
            {/* Canvas de flux laser en arrière-plan */}
            <VideoMotionCanvas isPlaying={isPlaying} speedMultiplier={1} />

            {/* Colonne Gauche : Outils sources */}
            <div className="relative z-10 hidden sm:flex flex-col gap-2.5 max-w-[200px]">
              {[
                { label: "Emails", sub: "Gmail / Outlook", icon: "✉️" },
                { label: "Factures & Devis", sub: "CRM / ERP", icon: "📊" },
                { label: "Messages", sub: "WhatsApp / Slack", icon: "💬" },
                { label: "Documents", sub: "Notion / Drive", icon: "📁" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-xl border border-border-soft bg-white/95 p-2.5 shadow-xs backdrop-blur-md"
                >
                  <span className="text-sm">{item.icon}</span>
                  <div className="text-left">
                    <span className="text-xs font-bold text-foreground block">{item.label}</span>
                    <span className="text-[10px] text-muted-soft">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Cœur Central : Réacteur Gyroscopique 3D */}
            <div className="relative z-10 mx-auto flex flex-col items-center justify-center">
              <motion.div
                animate={reduce || !isPlaying ? {} : { rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute h-48 w-48 sm:h-60 sm:w-60 rounded-full border border-dashed border-accent/30 pointer-events-none"
              />
              <motion.div
                animate={reduce || !isPlaying ? {} : { rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute h-36 w-36 sm:h-44 sm:w-44 rounded-full border border-dotted border-accent/40 pointer-events-none"
              />

              <div className="relative flex flex-col items-center rounded-3xl border-2 border-accent bg-white p-5 sm:p-7 text-center shadow-xl">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-accent">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M9 8h6M9 12h6M9 16h4" />
                  </svg>
                </div>
                <span className="mt-3 text-[16px] font-bold text-foreground">Agent IA Sur-mesure</span>
                <span className="mt-0.5 text-[10px] font-semibold text-emerald-600">Calcul en temps réel</span>
              </div>
            </div>

            {/* Colonne Droite : Sorties d'action */}
            <div className="relative z-10 hidden sm:flex flex-col gap-3 max-w-[220px]">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/90 p-3 text-left shadow-xs">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                  Autonome (90%)
                </span>
                <span className="text-xs font-semibold text-emerald-950 mt-1 block">
                  Devis & SAV envoyés ✓
                </span>
              </div>

              <div className="rounded-xl border border-accent/30 bg-accent/5 p-3 text-left shadow-xs">
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider block">
                  Garde-fous (10%)
                </span>
                <span className="text-xs font-semibold text-foreground mt-1 block">
                  Avis humain 1-clic 🛡️
                </span>
              </div>
            </div>
          </div>

          {/* ── Contrôles & Timeline Vidéo Intelligente ── */}
          <div className="relative z-20 pt-3 border-t border-border-soft/60 flex flex-col gap-2.5">
            {/* Barre de scrubbing timeline */}
            <div className="relative h-1.5 w-full rounded-full bg-border-soft overflow-hidden cursor-pointer">
              <motion.div
                className="h-full bg-accent rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Boutons de contrôle vidéo */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying((p) => !p)}
                  aria-label={isPlaying ? "Mettre en pause" : "Lire"}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white shadow-xs transition-transform active:scale-95"
                >
                  {isPlaying ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <rect width="6" height="18" x="4" y="3" rx="1.5" />
                      <rect width="6" height="18" x="14" y="3" rx="1.5" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  )}
                </button>

                <span className="text-xs font-semibold text-foreground">
                  {isPlaying ? "Lecture vidéo en cours…" : "Vidéo en pause"}
                </span>
              </div>

              {/* 3 Chapitres Horodatés */}
              <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-muted-soft">
                <span className={currentTime < 4 ? "text-accent font-bold" : ""}>01. Audit</span>
                <span>•</span>
                <span className={currentTime >= 4 && currentTime < 8 ? "text-accent font-bold" : ""}>02. Conception</span>
                <span>•</span>
                <span className={currentTime >= 8 ? "text-accent font-bold" : ""}>03. Production</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
