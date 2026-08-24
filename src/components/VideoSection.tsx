"use client";

// Section vidéo insérée sous le hero. Aucun texte, aucun changement de
// l'apparence du site : fond blanc, vidéo responsive en 16:9, coins
// arrondis cohérents avec le style existant. Lecture automatique muette
// en boucle (lecture auto exigée par les navigateurs uniquement si muted)
// + contrôles pour que le visiteur puisse couper/relancer.
export function VideoSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto w-full max-w-5xl">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          className="aspect-video w-full rounded-2xl border border-black/10 bg-black object-cover shadow-sm"
          src="/agent-presentation.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      </div>
    </section>
  );
}
