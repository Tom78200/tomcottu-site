import Image from "next/image";

const headingFont = { fontFamily: "var(--font-heading)" };

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col rounded-2xl border border-border-soft bg-background/60 p-4 sm:p-6 overflow-hidden">
      {children}
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-[11px] tracking-[0.09em] text-accent/50 uppercase"
      style={headingFont}
    >
      {children}
    </div>
  );
}

export function ActivityLogVisual() {
  const lines = [
    { time: "09:12", label: "Demande reçue & qualifiée" },
    { time: "09:12", label: "Périmètre et budget extraits" },
    { time: "09:13", label: "Réponse envoyée au client" },
    { time: "09:14", label: "Dossier synchronisé au CRM" },
  ];

  return (
    <Frame>
      <div className="mb-3 flex items-center justify-between">
        <Caption>Agent qualification</Caption>
        <span className="flex items-center gap-1.5 text-[10px] font-semibold text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          En service
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {lines.map((line) => (
          <li key={line.label} className="flex items-baseline gap-2.5 text-[12px] sm:text-[13px]">
            <span className="shrink-0 text-accent/40 tabular-nums">{line.time}</span>
            <span className="text-foreground truncate">{line.label}</span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export function WorkflowVisual() {
  const nodes = ["Déclencheur", "Agent IA", "Action"];
  const tools = ["Gmail", "Pipedrive", "Pennylane", "Slack", "Drive"];

  return (
    <Frame>
      <Caption>Flux connecté</Caption>
      <div className="mt-3 mb-4 flex items-center gap-1 sm:gap-2">
        {nodes.map((node, i) => (
          <div key={node} className="flex flex-1 items-center gap-1 sm:gap-2">
            <span
              className={`flex-1 rounded-lg border px-1.5 py-1.5 sm:px-2 sm:py-2 text-center text-[10px] sm:text-[12px] font-medium truncate ${
                i === 1
                  ? "border-accent bg-accent text-accent-foreground shadow-xs"
                  : "border-border-soft bg-white text-foreground"
              }`}
            >
              {node}
            </span>
            {i < nodes.length - 1 && (
              <span className="shrink-0 text-accent/40 text-xs">→</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-1">
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-border-soft bg-white px-2 py-0.5 text-[10px] sm:text-[11px] text-muted"
          >
            {tool}
          </span>
        ))}
      </div>
    </Frame>
  );
}

export function SelfHostedVisual() {
  const specs = [
    { label: "Licence", value: "Open source, souverain" },
    { label: "Hébergement", value: "Sur votre serveur privé" },
    { label: "Modèle", value: "Claude, GPT ou local" },
    { label: "Canaux", value: "WhatsApp, Slack, Email" },
  ];

  return (
    <Frame>
      <div className="mb-3 flex items-center justify-between gap-2 border-b border-border-soft/60 pb-2.5">
        <span className="flex items-center gap-2">
          <Image
            src="/hermes-agent.webp"
            alt="Hermes Agent"
            width={26}
            height={26}
            quality={95}
            className="h-6 w-6 shrink-0 mix-blend-multiply"
          />
          <span
            className="text-[13px] sm:text-[14px] font-semibold text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Hermes Agent
          </span>
        </span>
        <Caption>Nous Research</Caption>
      </div>

      <dl className="flex flex-col gap-2">
        {specs.map((spec) => (
          <div key={spec.label} className="flex items-baseline gap-2 text-[12px] sm:text-[13px]">
            <dt className="w-[75px] sm:w-[84px] shrink-0 text-[10px] tracking-[0.06em] text-accent/50 uppercase">
              {spec.label}
            </dt>
            <dd className="text-foreground truncate">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </Frame>
  );
}

export function KnowledgeBaseVisual() {
  const sources = ["Drive", "Notion", "PDF", "CRM"];

  return (
    <Frame>
      <Caption>Base de connaissances</Caption>
      <div className="mt-2.5 mb-3 flex flex-wrap gap-1">
        {sources.map((source) => (
          <span
            key={source}
            className="rounded-full border border-border-soft bg-white px-2 py-0.5 text-[10px] sm:text-[11px] text-muted"
          >
            {source}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/5 px-2.5 py-1.5 text-[11px] sm:text-[12px] text-foreground font-medium truncate">
        <span className="text-accent font-bold">→</span>
        <span className="truncate">Réponse en langage naturel</span>
      </div>
      <ul className="mt-2.5 flex flex-col gap-1.5 text-[11px] sm:text-[12px]">
        {["Recherche instantanée (RAG)", "Confidentialité garantie"].map(
          (line) => (
            <li key={line} className="flex items-baseline gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="text-foreground/80 truncate">{line}</span>
            </li>
          )
        )}
      </ul>
    </Frame>
  );
}
