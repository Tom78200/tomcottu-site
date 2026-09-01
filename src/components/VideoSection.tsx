"use client";

import { useRef, useState } from "react";

// Section vidéo sous le hero. Pleine largeur, fondue dans le fond via
// masque dégradé symétrique haut/bas. AUCUN autoplay : la vidéo démarre
// en pause avec un bouton play esthétique centré. Au clic, elle se lance
// AVEC le son. Reclic = pause.
export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.muted = false; // lecture avec son
      void v.play();
    } else {
      v.pause();
    }
  };

  return (
    <section
      className="flex w-full justify-center px-5 py-8 sm:px-10 sm:py-12 lg:px-16"
      style={{ background: "var(--background)" }}
    >
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-border-soft bg-black/5 shadow-soft">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          className="block w-full object-cover"
          style={{
            aspectRatio: "16 / 9",
          }}
          src="/agent-presentation.mp4"
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
            className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg backdrop-blur-sm transition-transform duration-200 hover:scale-105 sm:h-20 sm:w-20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 22 22"
                fill="currentColor"
                aria-hidden="true"
                className="ml-1"
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
