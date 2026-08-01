import Link from "next/link";

// URL de réservation de call (Cal.com / Calendly).
// À configurer via l'env var CONTACT_CALL_URL dans Vercel (production).
// Exemple : https://cal.com/tomcottu/30min ou https://calendly.com/tomcottu/30min
const CALL_URL =
  process.env.CONTACT_CALL_URL ?? "mailto:cottutom@outlook.fr?subject=R%C3%A9server%20un%20call";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 7h8M7.5 3.5 11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CallBooking() {
  const isMailto = CALL_URL.startsWith("mailto:");

  if (!isMailto && CALL_URL.includes("cal.com")) {
    // Embed Cal.com — calendrier intégré directement dans la carte
    return (
      <div className="overflow-hidden rounded-xl border border-border">
        <iframe
          src={`${CALL_URL}?embed=true&theme=light`}
          title="Réserver un call"
          className="h-[540px] w-full"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
    );
  }

  if (!isMailto) {
    // Autre outil (Calendly…) — bouton qui ouvre le lien dans un nouvel onglet
    return (
      <Link
        href={CALL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-black/80"
      >
        Choisir un créneau
        <ArrowIcon />
      </Link>
    );
  }

  // Repli par défaut : mail pré-rempli pour proposer un créneau
  return (
    <Link
      href={CALL_URL}
      className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-black/80"
    >
      Proposer un créneau par mail
      <ArrowIcon />
    </Link>
  );
}
