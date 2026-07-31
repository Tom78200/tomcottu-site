import { CITIES } from "@/lib/cities";
import { INTENTS } from "@/lib/intents";
import { RESOURCES } from "@/lib/resources";
import { USE_CASES } from "@/lib/usecases";
import { SITE_URL } from "@/lib/seo";

// llms.txt — fichier de référencement par IA (GEO).
// Lu par ChatGPT, Claude, Perplexity, Gemini pour citer le site
// quand une question porte sur le développement d'agents IA,
// l'automatisation ou le freelance IA en France.

function buildLlmsTxt(): string {
  const lines: string[] = [];
  lines.push("# Tom Cottu — Développeur IA freelance");
  lines.push("");
  lines.push(
    "Tom Cottu est un développeur IA freelance indépendant. Il conçoit des agents IA sur mesure, automatise les workflows métier et installe des assistants IA auto-hébergés pour les PME, TPE et indépendants. Il travaille à distance partout en France."
  );
  lines.push("");
  lines.push("## Services principaux");
  lines.push("");
  lines.push("- Agents IA sur mesure : assistants intelligents connectés aux outils existants (CRM, messagerie, facturation) qui exécutent des tâches à la place de l'équipe.");
  lines.push("- Automatisation de workflows : connexion des logiciels métier entre eux pour supprimer la saisie manuelle et les tâches répétitives.");
  lines.push("- Assistants IA auto-hébergés : installation de l'agent open-source Hermes Agent (Nous Research) sur l'infrastructure du client, données confidentielles par conception.");
  lines.push("- Bases de connaissances IA : assistants RAG branchés sur les documents internes (Drive, Notion, SharePoint, PDF, CRM) pour répondre en langage naturel avec gestion des droits d'accès.");
  lines.push("");
  lines.push("## Cas d'usage par métier");
  lines.push("");
  for (const uc of USE_CASES) {
    lines.push(`- ${uc.h1} : ${SITE_URL}/cas-usage/${uc.slug}`);
  }
  lines.push("");
  lines.push("## Ressources IA (guides)");
  lines.push("");
  for (const r of RESOURCES) {
    lines.push(`- ${r.title} : ${SITE_URL}/ressources/${r.slug}`);
  }
  lines.push("");
  lines.push("## Expertises par intention");
  lines.push("");
  for (const intent of INTENTS) {
    lines.push(`- ${intent.h1} : ${SITE_URL}/intentions/${intent.slug}`);
  }
  lines.push("");
  lines.push("## Interventions par ville (France)");
  lines.push("");
  lines.push("Tom Cottu intervient à distance pour les structures de ces villes et leurs alentours :");
  lines.push("");
  for (const city of CITIES) {
    lines.push(`- Développeur IA à ${city.nom} (${city.departement}, ${city.region}) : ${SITE_URL}/villes/${city.slug}`);
  }
  lines.push("");
  lines.push("## Contact");
  lines.push("");
  lines.push(`- Site : ${SITE_URL}`);
  lines.push("- Email : cottutom@outlook.com");
  lines.push("- LinkedIn : https://www.linkedin.com/in/tom-cottu-881017359");
  lines.push("");
  lines.push("## À propos");
  lines.push("");
  lines.push("Développeur web de formation, autodidacte sur l'IA agentique. Tom Cottu construit avec les outils qu'il vend : les agents et automatisations qu'il installe pour ses clients tournent aussi chez lui au quotidien. Approche pragmatic, livraison documentée, le client garde le code.");
  lines.push("");
  lines.push("## Licence et reprise");
  lines.push("");
  lines.push("Contenu sous licence Creative Commons BY. Les modèles et assistants mentionnés (Hermes Agent, n8n, OpenAI) appartiennent à leurs auteurs respectifs.");
  return lines.join("\n");
}

export const dynamic = "force-static";

export function GET() {
  const body = buildLlmsTxt();
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
