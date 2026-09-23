"use client";

import { useState, useEffect, useRef } from "react";

/* ── VRAIES ICÔNES OFFICIELLES GOOGLE & MICROSOFT ── */

function GmailIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="52 42 88 66" fill="none">
      <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
      <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
      <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
      <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
      <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
    </svg>
  );
}

function OutlookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 17.9 512.1 476.2" fill="none">
      <path d="M512 267.9c0-4-2-7.7-5.5-9.8h-.1l-.2-.1-177.4-105c-.8-.5-1.6-1-2.4-1.4-6.9-3.5-15-3.5-21.8 0-.8.4-1.6.9-2.4 1.4L124.8 258l-.2.1c-5.4 3.4-7.1 10.5-3.7 15.9 1 1.6 2.4 2.9 4 3.9l177.4 105c.8.5 1.6 1 2.4 1.4 6.9 3.5 15 3.5 21.8 0 .8-.4 1.6-.9 2.4-1.4l177.4-105c3.6-2.1 5.7-5.9 5.7-10" fill="#0a2767" />
      <path d="M145.5 197.8H262v106.7H145.5zM488.2 89.3V40.5c.3-12.2-9.4-22.3-21.6-22.6H164.5c-12.2.3-21.9 10.4-21.6 22.6v48.8l178.6 47.6z" fill="#0364b8" />
      <path d="M142.9 89.3H262v107.2H142.9z" fill="#0078d4" />
      <path d="M381 89.3H262v107.2l119 107.1h107.2V196.5z" fill="#28a8ea" />
      <path d="M262 196.5h119v107.2H262z" fill="#0078d4" />
      <path d="M262 303.6h119v107.2H262z" fill="#0364b8" />
      <path d="M145.5 304.5H262v97H145.5z" fill="#14447d" />
      <path d="M381 303.6h107.2v107.2H381z" fill="#0078d4" />
      <path d="m506.5 277.2-.2.1-177.4 99.8c-.8.5-1.6.9-2.4 1.3-6.9 3.4-14.9 3.4-21.8 0-.8-.4-1.6-.8-2.4-1.3l-177.4-99.8-.2-.1c-3.4-1.9-5.6-5.4-5.6-9.3v202c.1 13.5 11.1 24.3 24.6 24.2h343.8c13.5.1 24.5-10.8 24.6-24.2v-202c-.1 3.9-2.2 7.4-5.6 9.3" fill="#1490df" />
      <path d="M144 494.1h343.5c5.3 0 10.4-1.6 14.7-4.8l-195-114.1c-.8-.4-1.6-.9-2.4-1.4L125 271.2h-.1l-5.9-3.3v201.3c.1 13.8 11.2 24.9 25 24.9" fill="#28a8ea" />
      <path d="M21.8 125h218.3c12.1 0 21.8 9.8 21.8 21.8v218.3c0 12.1-9.8 21.8-21.8 21.8H21.8C9.8 387 0 377.2 0 365.2V146.8c0-12 9.8-21.8 21.8-21.8" fill="#107ad5" />
      <path d="M68.2 216.6c5.4-11.5 14.1-21.1 24.9-27.5 12-6.9 25.7-10.3 39.6-9.9 12.9-.3 25.5 3 36.7 9.4 10.5 6.2 18.9 15.4 24.3 26.3 5.8 12 8.8 25.3 8.5 38.7.3 14-2.7 27.9-8.8 40.5-5.5 11.3-14.2 20.8-25 27.2-11.6 6.6-24.7 10-38 9.7-13.1.3-26.1-3-37.5-9.5-10.5-6.4-19.1-15.5-24.6-26.5-5.9-11.9-8.8-25-8.6-38.2-.2-13.9 2.7-27.6 8.5-40.2m26.6 64.6c2.9 7.2 7.7 13.5 14 18.1 6.4 4.5 14.1 6.8 21.9 6.6 8.3.3 16.5-2.1 23.4-6.8 6.2-4.6 11-10.9 13.6-18.1 3-8.1 4.5-16.7 4.3-25.3.1-8.7-1.3-17.4-4.1-25.6-2.5-7.4-7.1-14-13.2-18.9-6.7-5-14.9-7.5-23.2-7.1-8-.2-15.8 2.1-22.4 6.7-6.4 4.6-11.4 11-14.3 18.3-6.4 16.7-6.4 35.3 0 52.1" fill="#fff" />
    </svg>
  );
}

function GoogleCalendarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="none">
      <path d="M387 117.5 265.7 104l-148.2 13.5L104 252.2 117.5 387l134.7 16.8L387 387l13.5-138.1z" fill="#fff" transform="translate(3.75 3.75)" />
      <path d="M176.55 330.35c-10.1-6.8-17-16.7-20.9-29.9l23.4-9.6c2.1 8.1 5.8 14.3 11.1 18.8 5.3 4.4 11.7 6.6 19.1 6.6 7.6 0 14.2-2.3 19.7-7s8.3-10.6 8.3-17.8q0-10.95-8.7-18c-5.8-4.6-13.1-7-21.8-7h-13.5v-23.1h12.1c7.5 0 13.8-2 18.9-6.1 5.1-4 7.7-9.6 7.7-16.6q0-9.45-6.9-15c-4.6-3.7-10.4-5.6-17.4-5.6-6.9 0-12.3 1.8-16.4 5.5-4 3.7-7 8.2-8.8 13.5l-23.1-9.6c3.1-8.7 8.7-16.4 16.9-23 8.3-6.6 18.8-10 31.6-10 9.5 0 18 1.8 25.5 5.5s13.5 8.8 17.8 15.2c4.3 6.5 6.4 13.8 6.4 21.9 0 8.3-2 15.2-6 21q-6 8.55-14.7 13.2v1.4c7.6 3.2 13.9 8.1 18.8 14.7s7.3 14.4 7.3 23.6-2.3 17.3-7 24.5c-4.6 7.2-11.1 12.8-19.2 16.9-8.2 4.1-17.4 6.2-27.6 6.2-11.6 0-22.5-3.4-32.6-10.2m143.4-116-25.5 18.6-12.8-19.5 46-33.2h17.7v156.7h-25.3v-122.6z" fill="#1a73e8" />
      <path d="M387 508.2 508.2 387l-60.6-27-60.6 27-27 60.6z" fill="#ea4335" transform="translate(3.75 3.75)" />
      <path d="m90.6 447.6 26.9 60.6H387V387H117.5z" fill="#34a853" transform="translate(3.75 3.75)" />
      <path d="M36.7-3.8C14.3-3.8-3.8 14.3-3.8 36.7V387l60.6 26.9 60.6-26.9V117.5H387l26.9-60.6L387-3.8z" fill="#4285f4" transform="translate(3.75 3.75)" />
      <path d="M-3.8 387v80.8c0 22.3 18.1 40.4 40.4 40.4h80.8V387z" fill="#188038" transform="translate(3.75 3.75)" />
      <path d="M387 117.5V387h121.3V117.5l-60.6-26.9z" fill="#fbbc04" transform="translate(3.75 3.75)" />
      <path d="M508.2 117.5V36.7c0-22.3-18.1-40.4-40.4-40.4H387v121.3h121.2z" fill="#1967d2" transform="translate(3.75 3.75)" />
    </svg>
  );
}

function GoogleDriveIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="none">
      <path d="m38.7 419.3 22.6 39c4.7 8.2 11.4 14.7 19.4 19.4l80.6-139.6H0c0 9.1 2.3 18.2 7 26.4z" fill="#0066da" />
      <path d="M256 173.9 175.4 34.3c-7.9 4.7-14.7 11.1-19.4 19.4L7 311.7c-4.6 8-7 17.1-7 26.4h161.3z" fill="#00ac47" />
      <path d="M431.4 477.7c7.9-4.7 14.7-11.1 19.4-19.4l9.4-16.1 44.9-77.7c4.7-8.2 7-17.3 7-26.4H350.7l34.3 67.4z" fill="#ea4335" />
      <path d="m256 173.9 80.6-139.6c-7.9-4.7-17-7-26.4-7H201.8c-9.4 0-18.5 2.6-26.4 7z" fill="#00832d" />
      <path d="M350.7 338.1H161.3L80.6 477.7c7.9 4.7 17 7 26.4 7h298c9.4 0 18.5-2.6 26.4-7z" fill="#2684fc" />
      <path d="M430.5 182.7 356 53.7c-4.7-8.2-11.4-14.7-19.4-19.4L256 173.9l94.7 164.2h161c0-9.1-2.3-18.2-7-26.4z" fill="#ffba00" />
    </svg>
  );
}

function HubSpotIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FF7A59">
      <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z" />
    </svg>
  );
}

function NotionIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
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
      headline: "L'agent se branche sur les outils déjà en place.",
      text: "Messagerie, CRM, agenda, fichiers, comptabilité. Aucun outil existant n'est remplacé. L'accès se fait via les API ou les intégrations natives de chaque logiciel.",
      renderVisual: () => (
        <div className="w-full max-w-xl mx-auto">
          {/* Pastilles épurées avec vraies icônes de marques */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2 border border-black/[0.06] shadow-xs text-xs font-medium text-foreground hover:shadow-sm transition-shadow">
              <GmailIcon className="w-4 h-4 shrink-0" />
              <span className="font-semibold">Gmail</span>
              <span className="text-muted-soft text-[11px]">&</span>
              <OutlookIcon className="w-4 h-4 shrink-0" />
              <span className="font-semibold">Outlook</span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2 border border-black/[0.06] shadow-xs text-xs font-medium text-foreground hover:shadow-sm transition-shadow">
              <HubSpotIcon className="w-4 h-4 shrink-0" />
              <span className="font-semibold">HubSpot</span>
              <span className="text-muted-soft text-[11px]">& CRM</span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2 border border-black/[0.06] shadow-xs text-xs font-medium text-foreground hover:shadow-sm transition-shadow">
              <GoogleCalendarIcon className="w-4 h-4 shrink-0" />
              <span className="font-semibold">Google Agenda</span>
              <span className="text-muted-soft text-[11px]">& Outlook</span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2 border border-black/[0.06] shadow-xs text-xs font-medium text-foreground hover:shadow-sm transition-shadow">
              <GoogleDriveIcon className="w-4 h-4 shrink-0" />
              <span className="font-semibold">Google Drive</span>
              <span className="text-muted-soft text-[11px]">& Notion</span>
              <NotionIcon className="w-3.5 h-3.5 shrink-0 opacity-75" />
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
      headline: "Des agents qui exécutent vos tâches métier de bout en bout.",
      text: "Dès qu'un email ou une demande arrive, l'agent la lit, extrait les informations clés, interroge vos outils et agit immédiatement sans intervention humaine.",
      renderVisual: () => (
        <div className="w-full max-w-2xl mx-auto">
          {/* 3 exemples concrets d'agents métier */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            {/* Exemple 1 : Agent Devis & Vente */}
            <div className="rounded-2xl bg-white p-4 border border-black/[0.06] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-accent uppercase tracking-wider">
                    Commercial & Devis
                  </span>
                  <span className="text-emerald-600 text-xs font-semibold">Autonome</span>
                </div>
                <p className="text-xs font-semibold text-foreground">
                  Email de demande entrant
                </p>
                <p className="text-[11px] text-muted-soft mt-1 leading-relaxed">
                  L'agent calcule selon votre grille, crée le devis PDF et synchronise la fiche dans le CRM.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-black/[0.04] flex items-center gap-1.5 text-[10px] text-foreground/80 font-medium">
                <HubSpotIcon className="w-3.5 h-3.5 shrink-0" />
                <span>Devis créé en 30s</span>
              </div>
            </div>

            {/* Exemple 2 : Agent SAV & Support */}
            <div className="rounded-2xl bg-white p-4 border border-black/[0.06] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-accent uppercase tracking-wider">
                    Support & SAV 24/7
                  </span>
                  <span className="text-emerald-600 text-xs font-semibold">Autonome</span>
                </div>
                <p className="text-xs font-semibold text-foreground">
                  Question client récurrente
                </p>
                <p className="text-[11px] text-muted-soft mt-1 leading-relaxed">
                  Recherche instantanée dans vos process et expédition de la réponse personnalisée par email.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-black/[0.04] flex items-center gap-1.5 text-[10px] text-foreground/80 font-medium">
                <GmailIcon className="w-3.5 h-3.5 shrink-0" />
                <span>Réponse immédiate</span>
              </div>
            </div>

            {/* Exemple 3 : Agent Facturation & Relance */}
            <div className="rounded-2xl bg-white p-4 border border-black/[0.06] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-accent uppercase tracking-wider">
                    Facturation & Admin
                  </span>
                  <span className="text-emerald-600 text-xs font-semibold">Autonome</span>
                </div>
                <p className="text-xs font-semibold text-foreground">
                  Pièces & Rapprochement
                </p>
                <p className="text-[11px] text-muted-soft mt-1 leading-relaxed">
                  Lecture des factures reçues, contrôle des écritures et relance automatique sans ressaisie.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-black/[0.04] flex items-center gap-1.5 text-[10px] text-foreground/80 font-medium">
                <PennylaneIcon className="w-3.5 h-3.5 shrink-0" />
                <span>Zéro saisie le soir</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-muted-soft">
            90% de vos processus de routine traités de bout en bout
          </p>
        </div>
      ),
    },
    {
      id: 3,
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
                className="w-full shrink-0 p-7 sm:p-10 md:p-12 min-h-[440px] md:min-h-[480px] flex flex-col justify-between"
                aria-hidden={activeIndex !== idx}
              >
                {/* Titre et description épurés (sans le tag bleu étape 1, 2, 3) */}
                <div className="mx-auto max-w-2xl text-center mb-7">
                  <h3
                    className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground tracking-tight leading-snug"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.headline}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-muted font-normal leading-relaxed max-w-xl mx-auto">
                    {step.text}
                  </p>
                </div>

                {/* Visuel central */}
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
