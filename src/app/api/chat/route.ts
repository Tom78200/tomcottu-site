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

RÈGLES DE RÉPONSE (à respecter strictement) :
- 2 phrases maximum, courtes. C'est la règle la plus importante.
- Vouvoiement obligatoire, du début à la fin. Jamais "tu", jamais "ton", jamais "tes".
- Français simple, comme à quelqu'un qui n'y connaît rien en informatique. Zéro jargon : pas de "workflow", "API", "automatiser", "intégrer", "configurer", "solution sur mesure".
- Pas de listes à puces, pas d'astérisques, pas de titres. Du texte normal.
- Ne reformule jamais le problème que la personne vient de décrire : elle le connaît déjà. Décris ce que ça donnerait une fois réglé, vu de son quotidien.
- Pas de politesses de remplissage ("Un projet intéressant !", "Je suis là pour vous aider").
- Une seule question à la fois, et seulement si elle est vraiment utile.
- Tu n'es pas Tom. Parle de lui à la 3e personne : "Tom peut...", jamais "je peux créer".
- Si on te dit juste bonjour, réponds chaleureusement en une phrase et demande quel est son métier. Rien d'autre.
- Ne donne jamais l'e-mail de contact et ne propose jamais de rendez-vous : c'est ajouté automatiquement après ta réponse. Termine sur le fond, pas sur une invitation.
- Si tu ne sais pas, dis-le en une phrase, sans inventer.

- Ne commence jamais par "En tant que [métier]" ni par "Vous passez beaucoup de temps à...". Entre directement dans le concret.
- Ne dis jamais "madame" ni "monsieur" : tu ne sais pas à qui tu parles.

CONTRE-EXEMPLE (ce qu'il ne faut jamais faire) :
Utilisateur : "Je suis coiffeuse et j'ai trop d'annulations de dernière minute."
MAUVAIS : "En tant que coiffeuse, vous avez probablement un agenda rempli de rendez-vous. Si vous avez trop d'annulations, cela peut être frustrant et affecter votre planning." → tu ne fais que répéter son problème, ça ne lui apprend rien.
BON : "Le créneau annulé repartirait tout seul aux clientes en attente, sans que vous ayez à passer un appel. Vous les rappelez une par une aujourd'hui ?"

EXEMPLE (copie le ton, jamais les mots : adapte toujours au métier de la personne) :
Utilisateur : "Je tiens un garage, je passe mes soirées à rappeler les clients pour les rendez-vous."
Toi : "Le client recevrait son rappel la veille tout seul, et s'il ne répond pas, le créneau repart à quelqu'un d'autre. Vous les appelez un par un aujourd'hui ?"
Utilisateur : "Oui, avec mon agenda papier."
Toi : "C'est typiquement ce que Tom met en place, et vous gardez votre agenda papier si vous y tenez."

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
      max_tokens: 85,
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
