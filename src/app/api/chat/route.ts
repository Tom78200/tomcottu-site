// Chatbot branché sur l'API Google Gemini (generativelanguage.googleapis.com).
// Remplace l'ancien client Groq. Runtime Node pour la robustesse du fetch.
export const runtime = "nodejs";

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models";

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
    .replace(/^\s*[*\\-•]\s+/gm, "")
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
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "GEMINI_API_KEY non configurée" }),
      { status: 500 }
    );
  }

  const { messages, cityContent } = await req.json();

  let context = cityContent
    ? `\nContexte page ville :\n${cityContent}\n\n${STATIC_CONTEXT}`
    : STATIC_CONTEXT;

  // Le CTA est ajouté par le code, pas par le modèle : un petit modèle le place mal.
  const history = (messages ?? []) as Message[];
  const nbEchanges = history.filter((m) => m.role === "user").length;
  const ctaDejaDonne = history.some(
    (m) => m.role === "assistant" && m.content.includes(CONTACT)
  );

  // Gemini veut des rôles "user" | "model" (pas "assistant").
  const geminiHistory = (messages ?? [])
    .slice(-MAX_HISTORY)
    .map((m: Message) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

  const url = `${GEMINI_URL}/gemini-2.5-flash:generateContent?key=${apiKey}`;

  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: context }] },
        contents: geminiHistory,
        generationConfig: {
          maxOutputTokens: 65,
          temperature: 0.3,
          topP: 0.9,
        },
      }),
    });

    if (!upstream.ok) {
      const txt = await upstream.text();
      console.error("Gemini error:", upstream.status, txt);
      return new Response(
        JSON.stringify({ error: "Erreur du service de chat" }),
        { status: 500 }
      );
    }

    const data = await upstream.json();
    const candidate = data?.candidates?.[0];
    const text: string =
      candidate?.content?.parts?.map((p: any) => p.text || "").join("") || "";
    let response = clean(text);

    // À partir du 2e message, la personne a décrit son besoin : on propose le
    // diagnostic. Une seule fois dans la conversation.
    if (nbEchanges >= 2 && !ctaDejaDonne && response) {
      response += `\n\nLe plus simple est d'en parler 20 min avec Tom, c'est gratuit : ${CONTACT}`;
    }

    return Response.json({ response });
  } catch (error: any) {
    console.error("Gemini fetch error:", error?.message);
    return new Response(
      JSON.stringify({ error: "Erreur du service de chat" }),
      { status: 500 }
    );
  }
}
