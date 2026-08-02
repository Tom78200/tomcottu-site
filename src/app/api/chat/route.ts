import Groq from "groq-sdk";

// groq-sdk n'est pas compatible avec le Edge Runtime de Vercel.
// On force le runtime Node pour cette route.
export const runtime = "nodejs";

// Initialisation lazy au moment de l'appel : évite de casser le build quand
// GROQ_API_KEY n'est pas présente (dev mode, prérender).
let groqClient: Groq | null = null;
function getGroq() {
  if (!groqClient) groqClient = new Groq({ apiKey: process.env.GROQ_API_KEY });
  return groqClient;
}

type Message = { role: "user" | "assistant"; content: string };

const CONTACT = "cottutom@outlook.fr";

// On ne renvoie que la fin de la conversation au modèle : le contexte utile
// tient dans les derniers échanges, et ça divise les tokens d'entrée par 3-4.
const MAX_HISTORY = 6;

// Contexte statique : FAQ + présentation de Tom (SEO).
const STATIC_CONTEXT = `Tu es l'assistant de Tom Cottu, développeur IA freelance français.

Tu réponds en 2 phrases maximum. Tu proposes UNE seule idée d'agent, la plus
évidente pour son métier, décrite comme un résultat concret. Puis tu t'arrêtes.

- Vouvoiement. Français simple, zéro jargon (pas de "automatiser", "intégrer",
  "workflow", "solution sur mesure").
- Une seule idée, jamais une liste de possibilités.
- Ne répète pas le problème qu'on vient de te décrire, ne commence pas par
  "En tant que...". Va droit au résultat.
- Tu n'es pas Tom, tu es son assistant. Dis "Tom peut", jamais "je peux".
- Ne donne jamais l'e-mail : il est ajouté automatiquement après ta réponse.
- Si on te dit juste bonjour ou salut, réponds au salut et demande le métier ou
  le besoin. Ne fais jamais remarquer qu'il manque une information.

EXEMPLES (le format à suivre) :
"Salut"
→ "Salut ! Vous faites quoi comme métier, et qu'est-ce qui vous prend le plus de temps ?"


"Je tiens un garage, je passe mes soirées à rappeler les clients."
→ "Vos clients recevraient leur rappel de rendez-vous la veille, tout seuls. Vous ne décrochez plus le téléphone le soir."

"Je vends des vêtements en ligne."
→ "Un agent répondrait aux questions de taille et de livraison à votre place, jour et nuit. Vos clients n'attendent plus, et vous ne relisez plus les mêmes messages."

INFOS :

- Tom construit des agents IA sur mesure, automate les workflows métier et installe des assistants IA auto-hébergés pour PME/TPE.
- Il travaille à distance partout en France.
- Diagnostic gratuit de 20 minutes pour cadrer un projet.
- Contact : cottutom@outlook.fr

FAQ :
Q: C'est quoi un agent IA, concrètement ?
R: Un programme qui exécute une tâche de bout en bout à votre place, pas un chatbot.
Q: Faut-il changer mes outils ?
R: Non, l'agent se branche sur vos outils existants.
Q: Mes données partent-elles chez un éditeur ?
R: L'agent est hébergé chez vous. Seul le modèle de langage transite par API si besoin.
Q: Combien de temps avant que ça tourne ?
R: Variable selon le périmètre. Le diagnostic donne un délai précis.
Q: Travaillez-vous à distance ?
R: Oui, partout en France, avec visio pour le diagnostic initial.`;

// Filet de sécurité : le modèle glisse parfois des puces markdown malgré la
// consigne, et max_tokens peut couper au milieu d'une phrase.
function clean(text: string): string {
  let out = text
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/^\s*[*\-•]\s+/gm, "")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  // Dernière ponctuation forte suivie d'un espace ou de la fin : évite de couper
  // au point d'un nom de domaine (cottutom@outlook.fr).
  const ends = [...out.matchAll(/[.!?](?=\s|$)/g)];
  const lastStop = ends.length ? (ends[ends.length - 1].index ?? -1) : -1;
  if (lastStop > 40 && lastStop < out.length - 1) {
    out = out.slice(0, lastStop + 1);
  }
  return out;
}

export async function POST(req: Request) {
  if (!process.env.GROQ_API_KEY) {
    return new Response(
      JSON.stringify({ error: "GROQ_API_KEY non configurée" }),
      { status: 500 }
    );
  }

  const { messages, cityContent } = await req.json();

  let context = cityContent
    ? `\nContexte page ville :\n${cityContent}\n\n${STATIC_CONTEXT}`
    : STATIC_CONTEXT;

  // Le CTA est ajouté par le code, pas par le modèle : un 8B le place mal, le
  // répète à chaque tour ou le tronque en fragment de phrase.
  const history = (messages ?? []) as Message[];
  const nbEchanges = history.filter((m) => m.role === "user").length;
  const ctaDejaDonne = history.some(
    (m) => m.role === "assistant" && m.content.includes(CONTACT)
  );

  try {
    const completion = await getGroq().chat.completions.create({
      // Le 8B suffit largement pour des réponses de 2 phrases, et coûte ~10x moins
      // que le 70B. Le plafond de sortie fait le reste du travail : un 8B ne sait
      // pas compter ses mots, mais il ne peut pas dépasser max_tokens.
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: context },
        ...messages.slice(-MAX_HISTORY),
      ],
      temperature: 0.3,
      max_tokens: 65,
      top_p: 0.9,
    });

    let response = clean(completion.choices[0]?.message?.content || "");

    // À partir du 2e message, la personne a décrit son besoin : on propose le
    // diagnostic. Une seule fois dans la conversation.
    if (nbEchanges >= 2 && !ctaDejaDonne && response) {
      response += `\n\nLe plus simple est d'en parler 20 min avec Tom, c'est gratuit : ${CONTACT}`;
    }

    return Response.json({ response });
  } catch (error: any) {
    console.error("Groq error:", error.message);
    return new Response(
      JSON.stringify({ error: "Erreur du service de chat" }),
      { status: 500 }
    );
  }
}
