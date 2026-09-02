"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

export function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  const [playing, setPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:34");

  // Animation 3D fluide au scroll style Apple Studio / Linear
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.4, 0.9, 1]);

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds) || timeInSeconds <= 0) return "00:00";
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  useEffect(() => {
    const v = videoRef.current;
    if (v && !isNaN(v.duration) && v.duration > 0) {
      setDuration(formatTime(v.duration));
    }
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setPlaying(true))
          .catch(() => {
            // Si le navigateur bloque l'audio lors du premier clic, on mute et on joue
            v.muted = true;
            setIsMuted(true);
            void v.play().then(() => setPlaying(true));
          });
      }
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || isNaN(v.duration) || v.duration <= 0) return;
    setProgress((v.currentTime / v.duration) * 100);
    setCurrentTime(formatTime(v.currentTime));
    if (duration === "00:34" || duration === "00:00") {
      setDuration(formatTime(v.duration));
    }
  };

  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (!v || isNaN(v.duration) || v.duration <= 0) return;
    setDuration(formatTime(v.duration));
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const v = videoRef.current;
    const bar = e.currentTarget;
    if (!v || !bar || isNaN(v.duration)) return;
    const rect = bar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    v.currentTime = pos * v.duration;
  };

  return (
    <section
      ref={containerRef}
      aria-label="Démonstration vidéo"
      className="w-full px-5 pb-32 sm:px-10 md:pb-44 lg:px-16"
      style={{ perspective: "1200px" }}
    >
      {/* ── En-tête de section ── */}
      <div className="mb-14 flex flex-col items-center text-center border-t border-border-soft pt-16 md:mb-20 md:pt-24">
        <h2
          className="max-w-4xl font-medium text-foreground text-center"
          style={{
            fontSize: "clamp(34px, 5vw, 60px)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            textWrap: "balance",
          } as React.CSSProperties}
        >
          Voyez comment l&apos;IA prend le relais sur votre quotidien.
        </h2>
      </div>

      {/* ── Player Studio Mockup ── */}
      <div className="relative mx-auto max-w-5xl">
        {/* Glow ambiant diffus en arrière-plan */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-4 rounded-[40px] opacity-40 blur-3xl transition-opacity duration-700 sm:-inset-8"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--accent-soft-2) 0%, transparent 70%)",
          }}
        />

        {/* Cadre de fenêtre App / Studio */}
        <motion.div
          style={
            reduce
              ? {}
              : {
                  rotateX,
                  scale,
                  opacity,
                  transformOrigin: "center bottom",
                }
          }
          className="group relative overflow-hidden rounded-2xl border border-border-soft bg-white/90 shadow-2xl backdrop-blur-xl sm:rounded-3xl"
        >
          {/* Barre supérieure style macOS / App Window */}
          <div className="flex h-11 items-center justify-between border-b border-border-soft/70 bg-white/80 px-4 sm:px-6">
            {/* 3 dots de fenêtre */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]/80 border border-[#e0443e]/40" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/80 border border-[#dea123]/40" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]/80 border border-[#1aab29]/40" />
            </div>

            {/* Titre central onglet */}
            <div className="flex items-center gap-2 rounded-md bg-background/60 px-3 py-1 text-xs text-foreground font-medium border border-border-soft/50">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="text-accent">
                <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
                <polygon points="6 5 10 7 6 9 6 5" fill="currentColor" />
              </svg>
              <span>Présentation — Agent IA</span>
            </div>

            {/* Badge statut */}
            <div className="flex items-center gap-1.5 text-[11px] text-muted font-mono">
              <span className="hidden sm:inline">1080p HD</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
          </div>

          {/* Zone Vidéo & Overlay Interactif */}
          <div className="relative cursor-pointer bg-black/5" onClick={togglePlay}>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              ref={videoRef}
              className="block w-full object-cover"
              style={{ aspectRatio: "16 / 9" }}
              src="/agent-presentation.mp4"
              preload="metadata"
              loop
              playsInline
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onCanPlay={handleLoadedMetadata}
              onDurationChange={handleLoadedMetadata}
            />

            {/* Bouton Play Glassmorphism Central (quand la vidéo est en pause) */}
            {!playing && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/15 backdrop-blur-[2px] transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
              >
                <motion.button
                  type="button"
                  aria-label="Lancer la démonstration"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white text-foreground shadow-2xl ring-1 ring-black/10 transition-shadow hover:shadow-accent/20 sm:h-24 sm:w-24"
                >
                  {/* Onde de pulsation douce */}
                  <span className="absolute inset-0 rounded-full bg-white/40 animate-ping opacity-60 pointer-events-none" />
                  
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1 text-foreground"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.button>
              </div>
            )}

            {/* Barre de contrôle élégante (Overlay au bas de la vidéo) */}
            <div
              className={`absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 sm:p-6 transition-opacity duration-300 ${
                playing ? "opacity-0 hover:opacity-100" : "opacity-100"
              }`}
            >
              {/* Scrubber / Barre de progression de lecture */}
              <div
                onClick={handleSeek}
                className="group/scrub relative mb-3 h-1.5 w-full cursor-pointer rounded-full bg-white/30 transition-all hover:h-2.5"
              >
                <div
                  className="h-full rounded-full bg-accent transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Contrôles du bas */}
              <div className="flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
                  >
                    {playing ? (
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="currentColor">
                        <rect x="2" y="2" width="3.5" height="10" rx="1" />
                        <rect x="8.5" y="2" width="3.5" height="10" rx="1" />
                      </svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="currentColor" className="ml-0.5">
                        <path d="M3 2v10l9-5z" />
                      </svg>
                    )}
                  </button>

                  <span className="font-mono text-white/90 tabular-nums font-semibold">
                    {currentTime} / {duration}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Activer le son" : "Couper le son"}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
                  >
                    {isMuted ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="1" y1="1" x2="23" y2="23" />
                        <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
                        <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
