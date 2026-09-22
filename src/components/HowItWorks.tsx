"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Step {
  id: number;
  tag: string;
  title: string;
  headline: string;
  description: string;
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
      tag: "Étape 1",
      title: "Connexion",
      headline: "L'agent se branche sur les outils déjà en place.",
      description:
        "Messagerie, CRM, agenda, fichiers, comptabilité. Aucun outil existant n'est remplacé. L'accès se fait via les API ou les intégrations natives de chaque logiciel.",
      renderVisual: () => (
        <div className="w-full max-w-2xl mx-auto rounded-2xl bg-white p-5 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.06]">
          {/* En-tête statut */}
          <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                Intégrations natives & API actives
              </span>
            </div>
            <span className="text-[11px] font-medium text-black/50">
              Aucun outil remplacé
            </span>
          </div>

          {/* Liste des 5 connecteurs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
            <div className="rounded-xl border border-black/[0.05] bg-neutral-50/70 p-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-foreground">Messagerie</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                  Connecté
                </span>
              </div>
              <p className="text-[11px] text-muted-soft">Gmail, Outlook</p>
            </div>

            <div className="rounded-xl border border-black/[0.05] bg-neutral-50/70 p-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-foreground">CRM</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                  Temps réel
                </span>
              </div>
              <p className="text-[11px] text-muted-soft">HubSpot, Pipedrive, Salesforce</p>
            </div>

            <div className="rounded-xl border border-black/[0.05] bg-neutral-50/70 p-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-foreground">Agenda</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                  Synchro
                </span>
              </div>
              <p className="text-[11px] text-muted-soft">Google Calendar, Outlook</p>
            </div>

            <div className="rounded-xl border border-black/[0.05] bg-neutral-50/70 p-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-foreground">Fichiers & Docs</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                  Indexé
                </span>
              </div>
              <p className="text-[11px] text-muted-soft">Drive, Notion, OneDrive</p>
            </div>

            <div className="rounded-xl border border-black/[0.05] bg-neutral-50/70 p-3 sm:col-span-2 lg:col-span-2">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-foreground">Comptabilité & Factures</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                  API direct
                </span>
              </div>
              <p className="text-[11px] text-muted-soft">Pennylane, QuickBooks, ERP sur mesure</p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between pt-3 border-t border-black/[0.05] text-[11px] text-muted">
            <span>Branchement sans coupure de service</span>
            <span className="font-semibold text-foreground">100% sécurisé (OAuth & clés API)</span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      tag: "Étape 2",
      title: "Traitement autonome (90%)",
      headline: "L'agent exécute la tâche de bout en bout, sans intervention.",
      description:
        "Quand un email arrive, l'agent le lit, identifie la demande, va chercher les informations dans les outils connectés, produit la réponse ou le document, et l'envoie ou le range au bon endroit. Le devis est généré et synchronisé au CRM. La réponse SAV est rédigée et expédiée. Les ressaisies entre logiciels disparaissent.",
      renderVisual: () => (
        <div className="w-full max-w-2xl mx-auto rounded-2xl bg-white p-5 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.06]">
          {/* En-tête */}
          <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                Pipeline d'exécution de bout en bout
              </span>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600">
              90% automatisé
            </span>
          </div>

          {/* Étapes séquentielles du traitement */}
          <div className="space-y-2.5">
            <div className="flex items-start gap-3 rounded-xl bg-neutral-50/80 p-3 border border-black/[0.04]">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/5 text-[11px] font-bold text-foreground">
                1
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-foreground">Réception & Compréhension</p>
                <p className="text-[11px] text-muted-soft mt-0.5">
                  L'email arrive : lecture, extraction de l'intention et recherche des données dans vos outils.
                </p>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">✓ Lu</span>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-neutral-50/80 p-3 border border-black/[0.04]">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/5 text-[11px] font-bold text-foreground">
                2
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-foreground">Génération du devis ou document</p>
                <p className="text-[11px] text-muted-soft mt-0.5">
                  Calcul selon votre grille de prix, génération du PDF et synchronisation directe dans le CRM.
                </p>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">✓ Créé</span>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-neutral-50/80 p-3 border border-black/[0.04]">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/5 text-[11px] font-bold text-foreground">
                3
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-foreground">Expédition & Archivage</p>
                <p className="text-[11px] text-muted-soft mt-0.5">
                  Réponse SAV expédiée au client et pièce classée au bon endroit sans ressaisie manuelle.
                </p>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">✓ Envoyé</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between pt-3 border-t border-black/[0.05] text-[11px] text-muted">
            <span>Ressaisies entre logiciels éliminées</span>
            <span className="font-semibold text-emerald-600">Zéro intervention requise</span>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      tag: "Étape 3",
      title: "Validation humaine (10%)",
      headline: "Notification et contrôle en un clic pour les cas sensibles.",
      description:
        "Pour les cas sensibles — montant élevé, client stratégique, anomalie détectée — l'agent envoie une notification avant d'agir. Le dirigeant ou le responsable valide d'un clic. L'agent apprend des corrections et ajuste son comportement pour les prochaines fois.",
      renderVisual: () => (
        <div className="w-full max-w-2xl mx-auto rounded-2xl bg-white p-5 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.06]">
          {/* En-tête */}
          <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                Contrôle des cas sensibles
              </span>
            </div>
            <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
              10% sous supervision
            </span>
          </div>

          {/* Carte d'alerte et de validation */}
          <div className="rounded-xl border border-accent/25 bg-blue-50/40 p-4 mb-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-base">🔔</span>
                <span className="text-xs font-bold text-foreground">
                  Alerte : Montant élevé ou client stratégique
                </span>
              </div>
              <span className="text-[10px] text-black/50 font-medium">Il y a 1 min</span>
            </div>
            <p className="text-xs text-foreground/85 leading-relaxed">
              « Devis proposé : 12 400 € HT pour refonte process. Brouillon de réponse prêt et vérifié. »
            </p>

            <div className="mt-3.5 flex items-center justify-between pt-3 border-t border-accent/15 gap-2">
              <span className="text-[11px] text-muted">Alerte envoyée sur Slack / SMS</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow-xs hover:bg-accent-hover transition-colors"
                >
                  Valider d'un clic
                </button>
              </div>
            </div>
          </div>

          {/* Boucle d'apprentissage */}
          <div className="flex items-center gap-2.5 rounded-xl bg-neutral-50/80 p-3 border border-black/[0.04] text-xs">
            <span className="text-accent text-sm">💡</span>
            <p className="text-[11px] text-foreground/85 leading-relaxed">
              <strong>Apprentissage continu :</strong> L'agent enregistre vos corrections et affine son comportement pour les prochaines occurrences.
            </p>
          </div>
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
    }, 6500);

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
      <div className="mx-auto max-w-5xl mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-t border-border-soft pt-12 md:pt-16">
          <div>
            <span className="text-xs md:text-sm font-semibold text-accent uppercase tracking-wider block mb-2">
              Comment ça marche
            </span>
            <h2
              id="methode-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-foreground tracking-tight leading-[1.08]"
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

      {/* ── Carrousel 100% propre (aucune coupure en 1440p) ── */}
      <div
        className="relative mx-auto max-w-5xl"
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
                className="w-full shrink-0 p-6 sm:p-10 md:p-12 min-h-[500px] md:min-h-[550px] flex flex-col justify-between"
                aria-hidden={activeIndex !== idx}
              >
                {/* Textes écrits par l'utilisateur */}
                <div className="mx-auto max-w-2xl text-center mb-6 md:mb-8">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    {step.tag} — {step.title}
                  </span>
                  <h3
                    className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground tracking-tight leading-snug"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.headline}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-muted font-normal leading-relaxed max-w-xl mx-auto">
                    {step.description}
                  </p>
                </div>

                {/* Visuel UI épuré (sans tablette) */}
                <div className="w-full flex-1 flex items-center justify-center my-auto">
                  {step.renderVisual()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Barre de navigation Apple : Flèches + Pilule d'indicateurs + Bouton Play/Pause ── */}
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
            aria-label="Navigation des points forts"
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
                  aria-label={`${step.tag} : ${step.title}`}
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

        {/* ── Encadré Résultat final ── */}
        <div className="mt-8 rounded-2xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-xs text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1.5">
            Résultat
          </span>
          <p className="text-sm sm:text-base font-medium text-foreground leading-relaxed">
            Les tâches répétitives ne mobilisent plus personne. L'équipe ne relit que les cas qui le méritent. Le processus tourne 24/7, sans saisie manuelle.
          </p>
        </div>
      </div>
    </section>
  );
}
