import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
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

const offers = [
  {
    name: "L'Agent Solo",
    pitch: "Pour tester l'IA sans se ruiner",
    setup: "990€",
    monthly: "190€/mois",
    items: [
      "1 agent IA autonome sur une tâche précise (emails de devis, factures, relances…)",
      "Branchement à vos outils (Gmail, Outlook, Google Agenda, Notion…)",
      "Formation de 2h pour votre équipe",
      "Support par email 7j/7",
    ],
  },
  {
    name: "Le Pack Process Complet",
    pitch: "L'offre la plus vendue",
    setup: "2490€",
    monthly: "390€/mois",
    featured: true,
    items: [
      "3 agents IA interconnectés sur un process complet",
      "Tableau de bord unique pour tout piloter",
      "Espace client pour modifier les règles (sans code)",
      "Support prioritaire + mises à jour incluses",
    ],
  },
  {
    name: "L'Agence IA en Marque Blanche",
    pitch: "Pour les revendeurs",
    setup: "4900€",
    monthly: "790€/mois",
    items: [
      "Système complet à votre logo, revendable à vos clients",
      "Formation de votre équipe à la vente et la config",
      "Templates d'agents pré-configurés (10 en une journée)",
      "Droit de revente — vous gardez 100% de la marge",
    ],
  },
];

export function OffersSection() {
  return (
    <section
      id="offres"
      aria-labelledby="offres-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-44 lg:px-16"
    >
      <div className="mb-14 border-t border-border-soft pt-16 md:mb-20 md:pt-24">
        <div
          className="mb-4 text-base font-semibold text-foreground md:text-lg"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Nos offres
        </div>
        <h2
          id="offres-heading"
          className="max-w-4xl font-medium text-foreground"
          style={{
            fontSize: "clamp(34px, 5vw, 60px)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            textWrap: "balance",
          }}
        >
          Un forfait, selon votre ambition.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {offers.map((offer) => (
          <div
            key={offer.name}
            className={`flex flex-col rounded-3xl bg-accent-soft p-8 sm:p-10 shadow-soft ${
              offer.featured ? "ring-1 ring-accent/40 shadow-card" : ""
            }`}
          >
            <h3
              className="font-medium text-foreground"
              style={{
                fontSize: "clamp(22px, 2vw, 28px)",
                lineHeight: 1.18,
                letterSpacing: "-0.025em",
              }}
            >
              {offer.name}
            </h3>
            <p className="mt-2 text-[15px] text-muted" style={{ lineHeight: 1.5 }}>
              {offer.pitch}
            </p>

            <div className="mt-6 flex items-baseline gap-2">
              <span
                className="font-semibold text-foreground"
                style={{ fontSize: "28px", letterSpacing: "-0.02em" }}
              >
                {offer.setup}
              </span>
              <span className="text-[14px] text-muted">installation</span>
            </div>
            <div className="mt-1 text-[15px] text-foreground">
              + {offer.monthly}
            </div>

            <ul className="mt-7 flex flex-col gap-3">
              {offer.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[15px] text-muted"
                  style={{ lineHeight: 1.5 }}
                >
                  <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent/25 text-foreground">
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1.5 5.2 4 7.5 8.5 2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-white/60 px-4 py-3 text-center text-[13px] text-muted">
              Satisfait ou remboursé sous 14 jours
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-accent-foreground transition-colors duration-200 hover:bg-accent/80"
            >
              Je réserve ma démo gratuite
              <ArrowIcon />
            </Link>

            <p className="mt-4 text-center text-[13px] leading-snug text-muted">
              Sans engagement. Vous gardez votre agent même si vous ne
              renouvelez pas l&apos;abonnement.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
