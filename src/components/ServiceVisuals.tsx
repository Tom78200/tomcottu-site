import Image from "next/image";

const headingFont = { fontFamily: "var(--font-heading)" };

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col rounded-2xl border border-accent/15 bg-white/90 p-6 shadow-sm sm:p-7">
      {children}
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-[11px] tracking-[0.09em] text-accent/40 uppercase"
      style={headingFont}
    >
      {children}
    </div>
  );
}

export function ActivityLogVisual() {
  const lines = [
    { time: "09:12", label: "Demande de refonte reçue" },
    { time: "09:12", label: "Périmètre et budget extraits" },
    { time: "09:13", label: "Réponse envoyée au prospect" },
    { time: "09:14", label: "Dossier ouvert, priorité haute" },
  ];

  return (
    <Frame>
      <div className="mb-4 flex items-center justify-between">
        <Caption>Agent qualification</Caption>
        <span className="flex items-center gap-1.5 text-[11px] text-accent/50">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          en service
        </span>
      </div>
      <ul className="flex flex-col gap-2.5">
        {lines.map((line) => (
          <li key={line.label} className="flex items-baseline gap-3 text-[13px]">
            <span className="shrink-0 text-accent/35 tabular-nums">{line.time}</span>
            <span className="text-foreground">{line.label}</span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export function WorkflowVisual() {
  const nodes = ["Déclencheur", "Agent", "Action"];
  const tools = ["Gmail", "Pipedrive", "Pennylane", "Slack", "Drive"];

  return (
    <Frame>
      <Caption>Flux connecté</Caption>
      <div className="mt-4 mb-5 flex items-center gap-2">
        {nodes.map((node, i) => (
          <div key={node} className="flex flex-1 items-center gap-2">
            <span
              className={`flex-1 rounded-lg border px-2 py-2 text-center text-[12px] ${
                i === 1
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-accent/20 text-foreground"
              }`}
            >
              {node}
            </span>
            {i < nodes.length - 1 && (
              <span className="shrink-0 text-accent/40">→</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-accent/15 px-2.5 py-1 text-[11px] text-muted"
          >
            {tool}
          </span>
        ))}
      </div>
    </Frame>
  );
}

export function SelfHostedVisual() {
  // Faits vérifiés sur le projet Hermes Agent (Nous Research, licence MIT).
  const specs = [
    { label: "Licence", value: "MIT, open source" },
    { label: "Hébergement", value: "Votre serveur" },
    { label: "Modèle", value: "Claude, GPT, Mistral ou local" },
    { label: "Canaux", value: "WhatsApp, Slack, Telegram, Signal" },
    // Formulation prudente : seul un modèle local garde tout hors ligne.
    { label: "Historique", value: "Stocké chez vous, pas chez l'éditeur" },
  ];

  return (
    <Frame>
      <div className="mb-4 flex items-center justify-between gap-3 border-b border-accent/10 pb-3">
        <span className="flex items-center gap-2.5">
          <Image
            src="/hermes-agent.webp"
            alt="Hermes Agent"
            width={32}
            height={32}
            quality={95}
            // Le fichier a un fond blanc opaque : multiply le fond dans la
            // carte au lieu de laisser un carré blanc visible.
            className="h-8 w-8 shrink-0 mix-blend-multiply"
          />
          <span
            className="text-[15px] font-medium text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Hermes Agent
          </span>
        </span>
        <Caption>Nous Research</Caption>
      </div>

      <dl className="flex flex-col gap-2.5">
        {specs.map((spec) => (
          <div key={spec.label} className="flex items-baseline gap-3">
            <dt className="w-[86px] shrink-0 text-[11px] tracking-[0.06em] text-accent/40 uppercase">
              {spec.label}
            </dt>
            <dd className="text-[13px] text-foreground">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </Frame>
  );
}

export function AdviceVisual() {
  const items = [
    "Audit des processus existants",
    "Feuille de route priorisée",
    "Recommandations d'outils neutres",
    "Estimation de charge et de coût",
  ];

  return (
    <Frame>
      <Caption>Ce que vous repartez avec</Caption>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-[13px] text-foreground">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent/25">
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path
                  d="M1.5 5.2 4 7.5 8.5 2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export function KnowledgeBaseVisual() {
  const sources = ["Drive", "Notion", "SharePoint", "PDF", "CRM"];

  return (
    <Frame>
      <Caption>Base de connaissances</Caption>
      <div className="mt-4 mb-5 flex flex-wrap gap-1.5">
        {sources.map((source) => (
          <span
            key={source}
            className="rounded-full border border-accent/15 px-2.5 py-1 text-[11px] text-muted"
          >
            {source}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-accent bg-accent px-3 py-2.5 text-[12px] text-accent-foreground">
        <span aria-hidden="true">→</span>
        <span className="truncate">Réponse précise en langage naturel</span>
      </div>
      <ul className="mt-4 flex flex-col gap-2.5 text-[13px]">
        {["Recherche intelligente (RAG)", "Droits d'accès par équipe", "Confidentialité garantie"].map(
          (line) => (
            <li key={line} className="flex items-baseline gap-3">
              <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-accent/35" />
              <span className="text-foreground">{line}</span>
            </li>
          )
        )}
      </ul>
    </Frame>
  );
}
