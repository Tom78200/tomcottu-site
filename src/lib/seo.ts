// Domaine du site : cottutom.fr (registrar OVH), www en domaine canonique.
// DNS : A apex + A www → 76.76.21.21 (Vercel). Pour changer : modifier ce
// repli (ou définir NEXT_PUBLIC_SITE_URL) puis redéployer.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cottutom.fr";

export const EMAIL = "cottutom@outlook.fr";
export const LINKEDIN = "https://www.linkedin.com/in/tom-cottu-881017359";

export const faq = [
  {
    question: "C'est quoi un agent IA, concrètement ?",
    reponse:
      "Un programme qui exécute une tâche de bout en bout à votre place, pas un chatbot qui répond à des questions. Il lit une demande, va chercher l'information dans vos outils, produit un résultat et le range au bon endroit. Vous relisez, il travaille.",
  },
  {
    question: "Faut-il changer mes outils actuels ?",
    reponse:
      "Non. L'agent se branche sur ce que vous utilisez déjà : messagerie, CRM, comptabilité, stockage de fichiers. Remplacer vos outils coûterait plus cher que le problème que vous cherchez à régler.",
  },
  {
    question: "Mes données partent-elles chez un éditeur ?",
    reponse:
      "L'agent et son historique sont hébergés chez vous. Reste le modèle de langage : en local il est gratuit et rien ne sort, via une API il est plus performant mais les requêtes transitent. Le choix se fait au cadrage, en fonction de la sensibilité de vos données.",
  },
  {
    question: "Combien de temps avant que ça tourne ?",
    reponse:
      "Ça dépend du périmètre. Un agent qui traite un seul flux se met en place bien plus vite qu'une refonte de plusieurs processus. Le diagnostic de 20 minutes sert justement à donner un délai et un budget avant de s'engager.",
  },
  {
    question: "Travaillez-vous à distance partout en France ?",
    reponse:
      "Oui. Le travail se fait à distance, avec des points réguliers. Le diagnostic initial se fait en visio.",
  },
];

const services = [
  {
    nom: "Agent IA sur mesure",
    description:
      "Conception et développement d'un agent IA adapté à votre activité, connecté à vos outils existants.",
  },
  {
    nom: "Automatisation de workflows",
    description:
      "Automatisation des tâches répétitives entre vos logiciels métier, sans saisie manuelle.",
  },
  {
    nom: "Assistant IA auto-hébergé",
    description:
      "Installation et maintenance d'un assistant IA open source sur votre propre infrastructure.",
  },
  {
    nom: "Conseil et cadrage IA",
    description:
      "Audit des processus, feuille de route priorisée et estimation de charge avant tout développement.",
  },
];

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "Tom Cottu, développeur IA freelance",
      description:
        "Conception d'agents IA sur mesure, automatisation de workflows et assistants IA auto-hébergés pour PME, TPE et indépendants.",
      url: SITE_URL,
      email: EMAIL,
      image: `${SITE_URL}/tom-cottu.webp`,
      priceRange: "€€",
      areaServed: { "@type": "Country", name: "France" },
      availableLanguage: ["fr"],
      founder: { "@id": `${SITE_URL}/#tom` },
      sameAs: [LINKEDIN],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Prestations",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.nom,
            description: s.description,
            provider: { "@id": `${SITE_URL}/#business` },
            areaServed: { "@type": "Country", name: "France" },
          },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#tom`,
      name: "Tom Cottu",
      jobTitle: "Développeur IA freelance",
      description:
        "Développeur IA indépendant. Construit des agents IA et des applications hébergés chez le client.",
      email: EMAIL,
      url: SITE_URL,
      image: `${SITE_URL}/tom-cottu.webp`,
      sameAs: [LINKEDIN],
      knowsAbout: [
        "Agents IA",
        "Automatisation de workflows",
        "Développement web",
        "Référencement naturel",
        "Assistants IA auto-hébergés",
      ],
      alumniOf: [
        { "@type": "Organization", name: "WebForce3" },
        { "@type": "Organization", name: "OpenClassrooms" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#site`,
      url: SITE_URL,
      name: "Tom Cottu, développeur IA freelance",
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.reponse },
      })),
    },
  ],
};
