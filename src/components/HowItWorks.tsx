"use client";

import { useState, useEffect, useRef } from "react";

interface Step {
  id: number;
  tag: string;
  headline: string;
  text: string;
  renderVisual: () => React.ReactNode;
}

export function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const steps: Step[] = [
    {
      id: 1,
      tag: "Étape 1 — Connexion",
      headline: "L'agent se branche sur les outils déjà en place.",
      text: "Messagerie, CRM, agenda, fichiers, comptabilité. Aucun outil existant n'est remplacé. L'accès se fait via les API ou les intégrations natives de chaque logiciel.",
      renderVisual: () => (
        <div className="w-full max-w-lg mx-auto">
          {/* Outils en pastilles épurées */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {[
              { name: "Messagerie", detail: "Gmail, Outlook" },
              { name: "CRM", detail: "HubSpot, Pipedrive" },
              { name: "Agenda", detail: "Google, Outlook" },
              { name: "Fichiers", detail: "Drive, Notion" },
              { name: "Comptabilité", detail: "Pennylane, ERP" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-black/[0.06] shadow-xs text-xs"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="font-semibold text-foreground">{tool.name}</span>
                <span className="text-muted-soft text-[11px] hidden sm:inline">({tool.detail})</span>
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-xs text-muted-soft">
            Connexion directe par API • Zéro logiciel à réinstaller
          </p>
        </div>
      ),
    },
    {
      id: 2,
      tag: "Étape 2 — Traitement autonome (90%)",
      headline: "L'agent exécute la tâche de bout en bout, sans intervention.",
      text: "Quand un email arrive, l'agent le lit, identifie la demande, va chercher les informations dans les outils connectés, produit la réponse ou le document, et l'envoie ou le range au bon endroit. Le devis est généré et synchronisé au CRM. La réponse SAV est rédigée et expédiée. Les ressaisies entre logiciels disparaissent.",
      renderVisual: () => (
        <div className="w-full max-w-lg mx-auto">
          {/* Flux linéaire ultra-simple */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs">
            <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 border border-black/[0.06] shadow-xs text-foreground font-medium w-full sm:w-auto justify-center">
              <span>📩</span>
              <span>Email reçu</span>
            </div>

            <span className="text-muted-soft rotate-90 sm:rotate-0 text-sm">→</span>

            <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 border border-black/[0.06] shadow-xs text-foreground font-medium w-full sm:w-auto justify-center">
              <span>⚙️</span>
              <span>Devis & CRM créés</span>
            </div>

            <span className="text-muted-soft rotate-90 sm:rotate-0 text-sm">→</span>

            <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 border border-emerald-500/20 bg-emerald-50/30 shadow-xs text-emerald-800 font-medium w-full sm:w-auto justify-center">
              <span>✓</span>
              <span>Réponse expédiée</span>
            </div>
          </div>

          <p className="mt-5 text-center text-xs text-muted-soft">
            90% des demandes traitées instantanément, sans aucune ressaisie manuelle
          </p>
        </div>
      ),
    },
    {
      id: 3,
      tag: "Étape 3 — Validation humaine (10%)",
      headline: "Une notification avant d'agir sur les cas sensibles.",
      text: "Pour les cas sensibles — montant élevé, client stratégique, anomalie détectée — l'agent envoie une notification avant d'agir. Le dirigeant ou le responsable valide d'un clic. L'agent apprend des corrections et ajuste son comportement pour les prochaines fois.",
      renderVisual: () => (
        <div className="w-full max-w-md mx-auto">
          {/* Notification épurée en 1 seule ligne */}
          <div className="flex items-center justify-between gap-3 rounded-2xl bg-white p-3.5 sm:p-4 border border-black/[0.06] shadow-xs">
            <div className="flex items-center gap-3 min-w-0">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 text-sm">
                🔔
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-foreground truncate">
                  Cas sensible détecté
                </p>
                <p className="text-[11px] text-muted-soft truncate">
                  Montant élevé ou client stratégique
                </p>
              </div>
            </div>

            <span className="shrink-0 rounded-full bg-accent px-3.5 py-1.5 text-xs font-medium text-white shadow-xs">
              Valider d'un clic
            </span>
          </div>

          <p className="mt-5 text-center text-xs text-muted-soft">
            L'équipe garde le contrôle final et l'agent s'ajuste en continu
          </p>
        </div>
      ),
    },
  ];

  // Auto-play avec intervalle
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, steps.length]);

  const handleSelect = (idx: number) => {
    setActiveIndex(idx);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // Support swipe tactile mobile
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="methode"
      aria-labelledby="methode-heading"
      className="relative w-full px-5 py-20 sm:px-10 md:py-28 lg:px-16 overflow-hidden bg-background"
    >
      {/* ── En-tête de section ── */}
      <div className="mx-auto max-w-4xl mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-t border-border-soft pt-12 md:pt-16">
          <div>
            <span className="text-xs md:text-sm font-semibold text-accent uppercase tracking-wider block mb-2">
              Comment ça marche
            </span>
            <h2
              id="methode-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.08]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Points forts.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              <span>Échanger sur vos process</span>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Carrousel épuré ── */}
      <div
        className="relative mx-auto max-w-4xl"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#f5f5f7] border border-black/[0.04]">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {steps.map((step, idx) => (
              <div
                key={step.id}
                className="w-full shrink-0 p-7 sm:p-10 md:p-14 min-h-[440px] md:min-h-[480px] flex flex-col justify-between"
                aria-hidden={activeIndex !== idx}
              >
                {/* Textes épurés et lisibles */}
                <div className="mx-auto max-w-2xl text-center mb-8">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-2.5">
                    {step.tag}
                  </span>
                  <h3
                    className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground tracking-tight leading-snug"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.headline}
                  </h3>
                  <p className="mt-3.5 text-sm sm:text-base text-muted font-normal leading-relaxed max-w-xl mx-auto">
                    {step.text}
                  </p>
                </div>

                {/* Visuel simple & léger */}
                <div className="w-full flex-1 flex items-center justify-center my-auto">
                  {step.renderVisual()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Barre de navigation Apple ── */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {/* Flèche précédente */}
          <button
            onClick={handlePrev}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-200/80 text-foreground hover:bg-neutral-300/80 backdrop-blur-md border border-black/5 shadow-xs transition-colors focus:outline-hidden"
            aria-label="Étape précédente"
            title="Précédent"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Pilule d'indicateurs de slides */}
          <div
            className="flex items-center gap-2 rounded-full bg-neutral-200/80 px-4 py-2.5 backdrop-blur-md border border-black/5 shadow-xs"
            role="tablist"
            aria-label="Navigation des étapes"
          >
            {steps.map((step, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`transition-all duration-300 focus:outline-hidden ${
                    isActive
                      ? "h-2 w-8 rounded-full bg-[#1d1d1f]"
                      : "h-2 w-2 rounded-full bg-black/20 hover:bg-black/45"
                  }`}
                  aria-label={step.tag}
                  aria-selected={isActive}
                  role="tab"
                />
              );
            })}
          </div>

          {/* Bouton Play/Pause */}
          <button
            onClick={togglePlay}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-200/80 text-foreground hover:bg-neutral-300/80 backdrop-blur-md border border-black/5 shadow-xs transition-colors focus:outline-hidden"
            aria-label={isPlaying ? "Mettre en pause le carrousel" : "Lancer le défilement du carrousel"}
            title={isPlaying ? "Pause" : "Lecture"}
          >
            {isPlaying ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <rect x="5" y="3" width="4" height="18" rx="1" />
                <rect x="15" y="3" width="4" height="18" rx="1" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="translate-x-[1px]">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>

          {/* Flèche suivante */}
          <button
            onClick={handleNext}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-200/80 text-foreground hover:bg-neutral-300/80 backdrop-blur-md border border-black/5 shadow-xs transition-colors focus:outline-hidden"
            aria-label="Étape suivante"
            title="Suivant"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* ── Résultat (épuré, sans bloc lourd) ── */}
        <div className="mt-8 text-center max-w-2xl mx-auto px-4">
          <p className="text-xs sm:text-sm font-medium text-muted leading-relaxed">
            <strong className="text-foreground">Résultat :</strong> Les tâches répétitives ne mobilisent plus personne. L'équipe ne relit que les cas qui le méritent. Le processus tourne 24/7, sans saisie manuelle.
          </p>
        </div>
      </div>
    </section>
  );
}
