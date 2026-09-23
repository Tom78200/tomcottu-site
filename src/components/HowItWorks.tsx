"use client";

import { useState, useEffect, useRef } from "react";

/* ── ICÔNES OFFICIELLES GOOGLE & OUTILS ── */

function GmailIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M22 6.5C22 5.12 20.88 4 19.5 4H18V12L22 8.5V6.5Z" fill="#34A853" />
      <path d="M2 6.5C2 5.12 3.12 4 4.5 4H6V12L2 8.5V6.5Z" fill="#4285F4" />
      <path d="M6 4L12 8.5L18 4H6Z" fill="#EA4335" />
      <path d="M2 8.5L6 12V20H4.5C3.12 20 2 18.88 2 17.5V8.5Z" fill="#4285F4" />
      <path d="M22 8.5L18 12V20H19.5C20.88 20 22 18.88 22 17.5V8.5Z" fill="#34A853" />
      <path d="M6 12L12 16.5L18 12V20H6V12Z" fill="#FBBC04" />
      <path d="M6 4V12L12 16.5L18 12V4L12 8.5L6 4Z" fill="#EA4335" />
    </svg>
  );
}

function GoogleCalendarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="17" rx="3" fill="#FFFFFF" stroke="#4285F4" strokeWidth="2" />
      <path d="M3 8.5H21" stroke="#4285F4" strokeWidth="2" />
      <rect x="7" y="2" width="2" height="3" rx="1" fill="#4285F4" />
      <rect x="15" y="2" width="2" height="3" rx="1" fill="#4285F4" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#4285F4" fontFamily="sans-serif">
        31
      </text>
    </svg>
  );
}

function GoogleDriveIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M8.2 3.5L15.8 3.5L22 14.5L14.4 14.5L8.2 3.5Z" fill="#FFC107" />
      <path d="M2.5 14.5L6.3 7.8L14.4 14.5L10.6 21.2L2.5 14.5Z" fill="#2196F3" />
      <path d="M10.6 21.2L14.4 14.5L22 14.5L18.2 21.2L10.6 21.2Z" fill="#4CAF50" />
    </svg>
  );
}

function HubSpotIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FF7A59">
      <path d="M18.8 7.3V4.5C18.8 3.7 18.1 3 17.3 3C16.5 3 15.8 3.7 15.8 4.5V7.3C14.7 7.7 13.9 8.6 13.6 9.8L8.8 6.5C8.9 6.2 8.9 5.8 8.9 5.5C8.9 4.1 7.8 3 6.4 3C5 3 3.9 4.1 3.9 5.5C3.9 6.9 5 8 6.4 8C7 8 7.6 7.8 8 7.5L12.7 10.8C12.5 11.2 12.4 11.7 12.4 12.2C12.4 12.7 12.5 13.2 12.7 13.6L7.9 16.9C7.5 16.6 6.9 16.4 6.4 16.4C5 16.4 3.9 17.5 3.9 18.9C3.9 20.3 5 21.4 6.4 21.4C7.8 21.4 8.9 20.3 8.9 18.9C8.9 18.6 8.8 18.2 8.7 17.9L13.6 14.6C13.9 15.7 14.7 16.6 15.8 17.1V19.5C15.8 20.3 16.5 21 17.3 21C18.1 21 18.8 20.3 18.8 19.5V17.1C20.3 16.5 21.4 15 21.4 13.3C21.4 11.5 20.3 10.1 18.8 9.5V7.3ZM17.3 15.2C16.2 15.2 15.3 14.3 15.3 13.2C15.3 12.1 16.2 11.2 17.3 11.2C18.4 11.2 19.3 12.1 19.3 13.2C19.3 14.3 18.4 15.2 17.3 15.2Z" />
    </svg>
  );
}

function NotionIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.83c-.467-.373-.98-.606-2.195-.513L2.872 2.296c-.373.047-.466.28-.326.466l1.913 1.446zm1.4 3.498v13.565c0 .793.42 1.072 1.353 1.026l14.195-.84c.887-.046 1.073-.56 1.073-1.212V6.678c0-.653-.28-.933-.933-.886L6.88 6.678c-.7.047-1.021.42-1.021 1.028zm12.373.98c.093.42 0 .84-.42.886l-.887.14v10.168c-.653.373-1.306.56-1.866.56-.933 0-1.213-.373-1.913-1.306l-4.71-6.903v6.903l1.54.373c.046.373-.28.793-.7.793l-3.593.233c-.093-.373 0-.793.373-.84l1.027-.233V8.873l-1.4-.14c-.093-.42 0-.84.42-.886l3.966-.233 5.084 7.275V8.5l-1.353-.14c-.093-.42 0-.84.42-.886l4.012-.233z" />
    </svg>
  );
}

function OutlookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M22 6.5V17.5C22 18.6 21.1 19.5 20 19.5H10V4.5H20C21.1 4.5 22 5.4 22 6.5Z" fill="#0078D4" />
      <path d="M15 12L22 7.5V16.5L15 12Z" fill="#106EBE" opacity="0.6" />
      <path d="M10 4.5L2 6.5V17.5L10 19.5V4.5Z" fill="#0078D4" />
      <ellipse cx="6" cy="12" rx="3" ry="4" fill="#FFFFFF" />
      <ellipse cx="6" cy="12" rx="1.8" ry="2.5" fill="#0078D4" />
    </svg>
  );
}

function PennylaneIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#002D42" />
      <path d="M8 8H13.5C15.4 8 16.5 9.1 16.5 10.8C16.5 12.5 15.4 13.6 13.5 13.6H10.5V16.5H8V8ZM10.5 11.8H13.2C14.1 11.8 14.6 11.4 14.6 10.8C14.6 10.2 14.1 9.8 13.2 9.8H10.5V11.8Z" fill="#00E5A3" />
    </svg>
  );
}

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
        <div className="w-full max-w-xl mx-auto">
          {/* Pastilles épurées avec vraies icônes de marques */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2 border border-black/[0.06] shadow-xs text-xs font-medium text-foreground hover:shadow-sm transition-shadow">
              <GmailIcon className="w-4 h-4 shrink-0" />
              <span className="font-semibold">Gmail</span>
              <span className="text-muted-soft text-[11px]">& Outlook</span>
              <OutlookIcon className="w-3.5 h-3.5 shrink-0 opacity-80" />
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2 border border-black/[0.06] shadow-xs text-xs font-medium text-foreground hover:shadow-sm transition-shadow">
              <HubSpotIcon className="w-4 h-4 shrink-0" />
              <span className="font-semibold">HubSpot</span>
              <span className="text-muted-soft text-[11px]">& CRM</span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2 border border-black/[0.06] shadow-xs text-xs font-medium text-foreground hover:shadow-sm transition-shadow">
              <GoogleCalendarIcon className="w-4 h-4 shrink-0" />
              <span className="font-semibold">Google Agenda</span>
              <span className="text-muted-soft text-[11px]">Synchro</span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2 border border-black/[0.06] shadow-xs text-xs font-medium text-foreground hover:shadow-sm transition-shadow">
              <GoogleDriveIcon className="w-4 h-4 shrink-0" />
              <span className="font-semibold">Google Drive</span>
              <span className="text-muted-soft text-[11px]">& Notion</span>
              <NotionIcon className="w-3.5 h-3.5 shrink-0 opacity-70" />
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2 border border-black/[0.06] shadow-xs text-xs font-medium text-foreground hover:shadow-sm transition-shadow">
              <PennylaneIcon className="w-4 h-4 shrink-0" />
              <span className="font-semibold">Pennylane</span>
              <span className="text-muted-soft text-[11px]">& ERP</span>
            </div>
          </div>

          <p className="mt-5 text-center text-xs text-muted-soft">
            Connexion directe via API sécurisées • Zéro outil à changer
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
        <div className="w-full max-w-xl mx-auto">
          {/* Flux linéaire avec vraies icônes */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs">
            <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 border border-black/[0.06] shadow-xs text-foreground font-medium w-full sm:w-auto justify-center">
              <GmailIcon className="w-4 h-4 shrink-0" />
              <span>Email reçu</span>
            </div>

            <span className="text-muted-soft rotate-90 sm:rotate-0 text-sm">→</span>

            <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 border border-black/[0.06] shadow-xs text-foreground font-medium w-full sm:w-auto justify-center">
              <HubSpotIcon className="w-4 h-4 shrink-0" />
              <span>Devis & CRM synchronisés</span>
            </div>

            <span className="text-muted-soft rotate-90 sm:rotate-0 text-sm">→</span>

            <div className="flex items-center gap-2 rounded-xl bg-emerald-50/60 px-4 py-3 border border-emerald-500/20 shadow-xs text-emerald-800 font-medium w-full sm:w-auto justify-center">
              <span className="text-emerald-600 font-bold">✓</span>
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
          {/* Notification épurée */}
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

                {/* Visuel simple & léger avec vraies icônes */}
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
