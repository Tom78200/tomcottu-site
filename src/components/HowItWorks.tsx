"use client";

import { useState, useEffect, useRef } from "react";

interface Step {
  id: number;
  tag: string;
  headline: string;
  subheadline: string;
  renderVisual: () => React.ReactNode;
}

export function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const steps: Step[] = [
    {
      id: 1,
      tag: "Étape 01 • Connexion",
      headline: "Vos outils connectés. Zéro changement d'habitude.",
      subheadline:
        "L'agent se branche directement sur vos boîtes mails, CRM, ERP, messageries et documents sans perturber vos équipes.",
      renderVisual: () => (
        <div className="relative w-full max-w-[580px] rounded-[22px] border-[5px] sm:border-[7px] border-[#1d1d1f] bg-white p-4 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]">
          {/* Barre de statut style tablette Apple */}
          <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 mb-4 text-[11px] font-medium text-black/50">
            <span className="font-semibold text-foreground">9:41</span>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600">
                4 connecteurs actifs
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-foreground/70">
              <span>5G</span>
              <span>100%</span>
            </div>
          </div>

          {/* Grille des outils connectés */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            <div className="rounded-xl border border-black/[0.06] bg-neutral-50/80 p-3 transition-colors hover:bg-neutral-100/60">
              <div className="flex items-center justify-between mb-1.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-500/10 text-rose-600 text-xs font-bold">
                  ✉️
                </span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold text-emerald-600 uppercase">
                  Actif
                </span>
              </div>
              <p className="text-xs font-semibold text-foreground">Boîtes Mails</p>
              <p className="text-[11px] text-black/50 truncate">Gmail, Outlook</p>
            </div>

            <div className="rounded-xl border border-black/[0.06] bg-neutral-50/80 p-3 transition-colors hover:bg-neutral-100/60">
              <div className="flex items-center justify-between mb-1.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 text-xs font-bold">
                  📊
                </span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold text-emerald-600 uppercase">
                  Sync
                </span>
              </div>
              <p className="text-xs font-semibold text-foreground">CRM & Données</p>
              <p className="text-[11px] text-black/50 truncate">HubSpot, Pipedrive</p>
            </div>

            <div className="rounded-xl border border-black/[0.06] bg-neutral-50/80 p-3 transition-colors hover:bg-neutral-100/60">
              <div className="flex items-center justify-between mb-1.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 text-xs font-bold">
                  💬
                </span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold text-emerald-600 uppercase">
                  24/7
                </span>
              </div>
              <p className="text-xs font-semibold text-foreground">Messageries</p>
              <p className="text-[11px] text-black/50 truncate">WhatsApp, Slack</p>
            </div>

            <div className="rounded-xl border border-black/[0.06] bg-neutral-50/80 p-3 transition-colors hover:bg-neutral-100/60">
              <div className="flex items-center justify-between mb-1.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 text-xs font-bold">
                  📁
                </span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold text-emerald-600 uppercase">
                  Indexé
                </span>
              </div>
              <p className="text-xs font-semibold text-foreground">ERP & Documents</p>
              <p className="text-[11px] text-black/50 truncate">Notion, Pennylane</p>
            </div>
          </div>

          <div className="mt-3.5 flex items-center justify-between pt-2.5 border-t border-black/[0.05] text-[11px] text-black/50">
            <span>Déploiement en 24h à 48h</span>
            <span className="font-semibold text-foreground">Aucune migration requise</span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      tag: "Étape 02 • Analyse Métier",
      headline: "Un moteur IA qui comprend votre entreprise.",
      subheadline:
        "L'agent lit les demandes, applique vos règles de tarification et prépare le travail avec une précision absolue.",
      renderVisual: () => (
        <div className="relative w-full max-w-[580px] rounded-[22px] border-[5px] sm:border-[7px] border-[#1d1d1f] bg-white p-4 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]">
          {/* Barre supérieure tablette */}
          <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 mb-3 text-[11px] font-medium text-black/50">
            <span className="font-semibold text-foreground">9:41</span>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                Analyse & Décision IA
              </span>
            </div>
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
              1.2s
            </span>
          </div>

          {/* Demande entrante */}
          <div className="rounded-xl border border-black/[0.06] bg-neutral-50/80 p-3 mb-2.5">
            <div className="flex items-center justify-between text-[11px] text-black/50 mb-1">
              <span className="font-semibold text-foreground">Email entrant analysé</span>
              <span>Reçu il y a 2 min</span>
            </div>
            <p className="text-xs text-foreground/85 font-medium leading-relaxed">
              « Bonjour Tom, besoin d'automatiser le tri de nos devis et commandes sous Pennylane & HubSpot. Pouvez-vous nous chiffrer ça ? »
            </p>
          </div>

          {/* Étapes d'analyse */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between rounded-lg bg-emerald-50/80 px-3 py-1.5 text-xs border border-emerald-100">
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold text-xs">✓</span>
                <span className="text-foreground font-medium text-[11px] sm:text-xs">Extraction du besoin & volume</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-700">100% Qualifié</span>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-emerald-50/80 px-3 py-1.5 text-xs border border-emerald-100">
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold text-xs">✓</span>
                <span className="text-foreground font-medium text-[11px] sm:text-xs">Grille tarifaire & règles appliquées</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-700">Conforme</span>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-blue-50/80 px-3 py-1.5 text-xs border border-blue-100">
              <div className="flex items-center gap-2">
                <span className="text-accent font-bold text-xs">➔</span>
                <span className="text-foreground font-medium text-[11px] sm:text-xs">Brouillon de devis & réponse rédigés</span>
              </div>
              <span className="text-[10px] font-bold text-accent">Prêt</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      tag: "Étape 03 • Exécution & Contrôle",
      headline: "90% d'autonomie. 100% sous votre contrôle.",
      subheadline:
        "Les opérations courantes sont traitées immédiatement. Vous gardez la main sur les validations sensibles.",
      renderVisual: () => (
        <div className="relative w-full max-w-[580px] rounded-[22px] border-[5px] sm:border-[7px] border-[#1d1d1f] bg-white p-4 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]">
          {/* Barre supérieure tablette */}
          <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 mb-3 text-[11px] font-medium text-black/50">
            <span className="font-semibold text-foreground">9:41</span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-black/60">
              Orchestration finale
            </span>
            <span className="text-[10px] font-semibold text-emerald-600">En ligne</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {/* Colonne Autonome */}
            <div className="rounded-xl border border-emerald-200/70 bg-emerald-50/40 p-3">
              <div className="flex items-center gap-1.5 pb-1.5 mb-2 border-b border-emerald-200/50">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-bold text-foreground uppercase tracking-wider">
                  Autonome (90%)
                </span>
              </div>
              <ul className="space-y-1.5 text-[11px] text-foreground/80">
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>Réponses rédigées & envoyées</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>CRM mis à jour automatiquement</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>Zéro tâche manuelle le soir</span>
                </li>
              </ul>
            </div>

            {/* Colonne Validation */}
            <div className="flex flex-col justify-between rounded-xl border border-accent/25 bg-blue-50/40 p-3">
              <div>
                <div className="flex items-center gap-1.5 pb-1.5 mb-2 border-b border-accent/20">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-[11px] font-bold text-foreground uppercase tracking-wider">
                    Validation (10%)
                  </span>
                </div>
                <p className="text-[11px] text-foreground/80 font-medium leading-relaxed">
                  Sur les devis stratégiques ou litiges, notification instantanée prête à valider.
                </p>
              </div>

              <div className="mt-2.5 pt-2 border-t border-accent/15 flex items-center justify-between">
                <span className="text-[10px] text-black/50">Alerte Slack / SMS</span>
                <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold text-white shadow-xs">
                  Valider en 1 clic
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 text-center">
            <span className="text-[10px] text-black/45">
              Vos équipes gardent la décision finale sur les dossiers stratégiques.
            </span>
          </div>
        </div>
      ),
    },
  ];

  // Défilement fluide vers une slide
  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card = container.children[index] as HTMLElement;
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  // Auto-play avec intervalle
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % steps.length;
        scrollToSlide(next);
        return next;
      });
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, steps.length]);

  // Synchronisation du scroll tactile/molette avec l'index actif
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft + container.clientWidth / 3;

    for (let i = 0; i < steps.length; i++) {
      const card = container.children[i] as HTMLElement;
      if (card) {
        const cardStart = card.offsetLeft - container.offsetLeft;
        const cardEnd = cardStart + card.clientWidth;
        if (scrollPosition >= cardStart && scrollPosition < cardEnd) {
          if (activeIndex !== i) setActiveIndex(i);
          break;
        }
      }
    }
  };

  const handleSelect = (idx: number) => {
    scrollToSlide(idx);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <section
      id="methode"
      aria-labelledby="methode-heading"
      className="relative w-full px-5 py-20 sm:px-10 md:py-28 lg:px-16 overflow-hidden bg-background"
    >
      {/* ── En-tête de section Apple-style ── */}
      <div className="mx-auto max-w-7xl mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-t border-border-soft pt-12 md:pt-16">
          <div>
            <span className="text-xs md:text-sm font-semibold text-accent uppercase tracking-wider block mb-2">
              Comment ça marche
            </span>
            <h2
              id="methode-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-foreground tracking-tight leading-[1.08]"
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

      {/* ── Conteneur de carrousel avec effet de dépassement (Peek) façon Apple ── */}
      <div className="relative mx-auto max-w-7xl">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className="w-[88vw] sm:w-[80vw] lg:w-[76vw] max-w-[960px] shrink-0 snap-start"
            >
              <div className="relative flex flex-col justify-between rounded-[28px] sm:rounded-[36px] bg-[#f5f5f7] p-6 sm:p-10 md:p-12 min-h-[520px] md:min-h-[580px] border border-black/[0.04] transition-all">
                {/* Textes en haut façon Apple Highlights */}
                <div className="mx-auto max-w-2xl text-center mb-6 md:mb-8">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    {step.tag}
                  </span>
                  <h3
                    className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold text-foreground tracking-tight leading-snug"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.headline}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-muted font-normal leading-relaxed max-w-xl mx-auto">
                    {step.subheadline}
                  </p>
                </div>

                {/* Visuel central façon produit Apple */}
                <div className="w-full flex-1 flex items-center justify-center my-auto">
                  {step.renderVisual()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Barre de contrôles Apple au bas : Pilule d'indicateurs + Bouton Play/Pause ── */}
        <div className="mt-8 md:mt-10 flex items-center justify-center gap-3">
          {/* Pilule avec les 3 indicateurs */}
          <div
            className="flex items-center gap-2 rounded-full bg-neutral-200/80 px-4 py-2.5 backdrop-blur-md border border-black/5 shadow-xs"
            role="tablist"
            aria-label="Navigation des points forts"
          >
            {steps.map((_, idx) => {
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
                  aria-label={`Étape ${idx + 1}`}
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
        </div>
      </div>
    </section>
  );
}
