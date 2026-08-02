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

// Contexte statique : FAQ + présentation de Tom (SEO).
const STATIC_CONTEXT = `Tu es un assistant IA qui répond aux questions sur Tom Cottu,
un développeur IA freelance français. Voici les infos essentielles :

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

export async function POST(req: Request) {
  if (!process.env.GROQ_API_KEY) {
    return new Response(
      JSON.stringify({ error: "GROQ_API_KEY non configurée" }),
      { status: 500 }
    );
  }

  const { messages, cityContent } = await req.json();

  const context = cityContent
    ? `\nContexte page ville :\n${cityContent}\n\n${STATIC_CONTEXT}`
    : STATIC_CONTEXT;

  try {
    // Stratégie model : 8B léger d'abord, 70B pour conversations complexes.
    let model = "llama-3.1-8b-instant";
    if (messages.length > 4) model = "llama-3.3-70b-versatile";

    const completion = await getGroq().chat.completions.create({
      model,
      messages: [
        { role: "system", content: context },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 0.9,
    });

    const response = completion.choices[0]?.message?.content || "";
    return Response.json({ response });
  } catch (error: any) {
    console.error("Groq error:", error.message);
    return new Response(
      JSON.stringify({ error: "Erreur du service de chat" }),
      { status: 500 }
    );
  }
}
