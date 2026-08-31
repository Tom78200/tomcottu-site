// Section "Preuve" : social proof en version RELATIVE (démos réussies, pas
// de clients nommés ni de témoignage inventé). Même design system que le
// reste du site.
export function ProofSection() {
  return (
    <section
      id="preuve"
      aria-labelledby="preuve-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-44 lg:px-16"
    >
      <div className="mb-14 border-t border-border-soft pt-16 md:mb-20 md:pt-24">
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

      <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
        <div className="flex flex-col justify-center rounded-3xl bg-black/[0.02] p-8 sm:p-10 md:p-12">
          <div
            className="font-semibold text-foreground"
            style={{ fontSize: "clamp(34px, 4vw, 48px)", letterSpacing: "-0.03em" }}
          >
            12
          </div>
          <p className="mt-3 text-[17px] text-muted" style={{ lineHeight: 1.55 }}>
            démonstrations réussies en 2026.
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-3xl bg-black/[0.02] p-8 sm:p-10 md:p-12">
          <div
            className="font-semibold text-foreground"
            style={{ fontSize: "clamp(34px, 4vw, 48px)", letterSpacing: "-0.03em" }}
          >
            100%
          </div>
          <p className="mt-3 text-[17px] text-muted" style={{ lineHeight: 1.55 }}>
            de satisfaction après chaque démo.
          </p>
        </div>
      </div>
    </section>
  );
}
