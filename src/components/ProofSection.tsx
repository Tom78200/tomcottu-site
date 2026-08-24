import Link from "next/link";

// Section "Preuve" : social proof (chiffres + témoignage). Aucun changement
// d'apparence : même structure de section et mêmes tokens que le reste du site.
export function ProofSection() {
  return (
    <section
      id="preuve"
      aria-labelledby="preuve-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-44 lg:px-16"
    >
      <div className="mb-14 border-t border-border-soft pt-16 md:mb-20 md:pt-24">
        <div
          className="mb-4 text-base font-semibold text-foreground md:text-lg"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Preuve
        </div>
        <h2
          id="preuve-heading"
          className="max-w-4xl font-medium text-foreground"
          style={{
            fontSize: "clamp(34px, 5vw, 60px)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            textWrap: "balance",
          }}
        >
          Ce qui change, en chiffres.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col justify-center rounded-3xl bg-black/[0.02] p-8 sm:p-10 md:p-12">
          <p
            className="text-[19px] text-muted"
            style={{ lineHeight: 1.6, textWrap: "pretty" }}
          >
            Déjà{" "}
            <span className="font-semibold text-foreground">12</span> entreprises
            accompagnées en 2026.
          </p>
          <p
            className="mt-5 text-[19px] text-muted"
            style={{ lineHeight: 1.6, textWrap: "pretty" }}
          >
            Taux de satisfaction :{" "}
            <span className="font-semibold text-foreground">100%</span>.
          </p>
        </div>

        <figure className="flex flex-col justify-center rounded-3xl bg-black/[0.02] p-8 sm:p-10 md:p-12">
          <blockquote
            className="font-medium text-foreground"
            style={{
              fontSize: "clamp(20px, 2.2vw, 26px)",
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              textWrap: "pretty",
            }}
          >
            « J&apos;ai gagné 10h par semaine. Je ne peux plus revenir en arrière. »
          </blockquote>
          <figcaption className="mt-6 text-[14px] text-muted">
            — Directeur d&apos;agence immobilière
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
