"use client";

// Section vidéo insérée sous le hero. Aucun cadre : la vidéo est pleine
// largeur (elle touche les bords de l'écran, donc aucun "carré"), sans
// bordure ni ombre ni coins arrondis. Un masque de dégradé en haut et en
// bas la fait fondre dans le fond du site (var(--background)), exactement
// comme le wipe du hero. Le fond de la section est celui du reste du site.
export function VideoSection() {
  return (
    <section
      className="w-full overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        className="block w-full object-cover"
        style={{
          aspectRatio: "16 / 9",
          // Fond la vidéo dans le fond : estompée vers le bas du hero et
          // vers la section suivante. Pas de bord dur visible.
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
        src="/agent-presentation.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls
      />
    </section>
  );
}
