"use client";

import { useRef, useState } from "react";

// Section vidéo sous le hero. Sans cadre (pleine largeur fondue dans le
// fond via masque dégradé des deux côtés). Taille moyenne, centrée.
// Pas d'autoplay : la vidéo démarre en pause avec un bouton play
// esthétique centré. Clic = lecture/pause.
export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
    } else {
      v.pause();
    }
  };

  return (
    <section
      className="flex w-full justify-center overflow-hidden px-5 py-10 sm:px-8 sm:py-16"
      style={{ background: "var(--background)" }}
    >
      <div className="relative w-full" style={{ maxWidth: "960px" }}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          className="block w-full object-cover"
          style={{
            aspectRatio: "16 / 9",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
          }}
          src="/agent-presentation.mp4"
          muted
          loop
          playsInline
          onClick={toggle}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        {!playing && (
          <button
            type="button"
            onClick={toggle}
            aria-label="Lire la vidéo"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-black/70">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 4.5v13l11-6.5z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
