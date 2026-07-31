// Pages d'intention « résultat », pas « outil ».
// Les dirigeants ne tapent pas "installer un agent IA", ils tapent le
// résultat qu'ils veulent : "automatiser mon entreprise", "chatbot client",
// "assistant IA sur mesure". Chaque entrée = une landing page statique.
//
// `keywords` alimente les métadonnées (title/description/canonical) et le
// JSON-LD. `h1` + `intro` + `sections` forment le contenu unique de la page.

export type Intent = {
  slug: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  keywords: string[];
  // 3 blocs de contenu orientés bénéfice
  sections: { titre: string; detail: string }[];
  closing: string;
  // lien de conversion
  ctaLabel: string;
};

export const INTENTS: Intent[] = [
  {
    slug: "developpeur-ia-freelance",
    h1: "Développeur IA freelance",
    title: "Développeur IA freelance, agents sur mesure",
    description:
      "Développeur IA freelance : je conçois des agents IA sur mesure et j'automatise vos workflows métier. Diagnostic gratuit de 20 minutes, livraison documentée, vous gardez le code.",
    intro:
      "Vous cherchez un développeur IA freelance qui livre un résultat concret, pas une démo. Je conçois des agents IA branchés sur vos outils existants, qui exécutent vos tâches à votre place : relances, saisie, reporting, support client.",
    keywords: [
      "développeur IA freelance",
      "freelance IA",
      "développeur intelligence artificielle indépendant",
      "consultant IA freelance",
    ],
    sections: [
      {
        titre: "Un agent, un workflow précis",
        detail:
          "On ne part pas d'un outil imposé. On part du flux qui vous coûte du temps, et on le rend automatique. L'agent s'adapte à vos logiciels, pas l'inverse.",
      },
      {
        titre: "Vous gardez la main",
        detail:
          "Code livré, documenté, hébergeable chez vous. Pas d'enfermement propriétaire, pas d'abonnement opaque : vous possédez ce qui est construit.",
      },
      {
        titre: "Tarif freelance, pas agence",
        detail:
          "Vous parlez à la personne qui code. Pas de cheffe de projet intermédiaire, pas de marge cachée. Le diagnostic de 20 minutes est gratuit.",
      },
    ],
    closing:
      "Le plus simple : 20 minutes en visio. On regarde un de vos process et je vous dis si un agent IA le rend automatique, sans engagement.",
    ctaLabel: "Diagnostic gratuit (20 min)",
  },
  {
    slug: "developpeur-agent-ia",
    h1: "Développeur agent IA",
    title: "Développeur d'agents IA sur mesure",
    description:
      "Développeur spécialisé en agents IA : conception, orchestration et déploiement d'agents autonomes sur vos outils. Sur mesure, auto-hébergeables, documentés.",
    intro:
      "Un agent IA, c'est un logiciel qui agit : il lit, décide et écrit dans vos outils. En tant que développeur agent IA, je construis le vôtre sur mesure, pas un GPT générique, mais un exécutant branché sur votre métier.",
    keywords: [
      "développeur agent IA",
      "création agent IA",
      "développement agent IA",
      "agent IA sur mesure",
      "expert agent IA",
    ],
    sections: [
      {
        titre: "Agent vs chatbot",
        detail:
          "Un chatbot répond. Un agent exécute : il lance une action dans votre CRM, envoie le mail, met à jour le tableau. C'est l'écart entre 'information' et 'travail fait'.",
      },
      {
        titre: "Orchestration fiable",
        detail:
          "Je gère les outils, les garde-fous et les reprises sur erreur pour que l'agent tourne en continu sans surveiller. Vous décrivez le résultat, il le produit.",
      },
      {
        titre: "Auto-hébergement possible",
        detail:
          "Pour les structures soucieuses de leurs données, l'agent peut tourner sur votre propre infrastructure. Confidentiel par conception.",
      },
    ],
    closing:
      "Vous avez un process répétitif en tête ? 20 minutes en visio suffisent pour le prototyper ensemble et estimer le budget.",
    ctaLabel: "Diagnostic gratuit (20 min)",
  },
  {
    slug: "creation-agents-ia",
    h1: "Création d'agents IA",
    title: "Création d'agents IA pour entreprises",
    description:
      "Création d'agents IA sur mesure : de l'audit à la mise en production. Automatisez relances, qualification, reporting et support avec des agents fiables.",
    intro:
      "La création d'agents IA, c'est construire un exécutant numérique pour un workflow précis. Je prends en charge tout le cycle : cadrage, développement, tests, mise en production et documentation.",
    keywords: [
      "création d'agents IA",
      "créer un assistant IA",
      "développement agent IA",
      "agent IA entreprise",
    ],
    sections: [
      {
        titre: "Cadrage avant code",
        detail:
          "On identifie le process à automatiser et le résultat attendu. Pas de solution pré-emballée : l'agent est dessiné pour votre cas, pas l'inverse.",
      },
      {
        titre: "Mise en production réelle",
        detail:
          "L'agent est déployé, branché sur vos outils, avec suivi et reprises sur erreur. Vous le voyez tourner avant de valider.",
      },
      {
        titre: "Transfert de compétence",
        detail:
          "Vous recevez le code, la documentation et les accès. Vos équipes peuvent reprendre la main à tout moment, l'objectif est l'autonomie, pas la dépendance.",
      },
    ],
    closing:
      "Parlez-moi d'un workflow qui vous épuise. En 20 minutes je vous dis si un agent IA peut le prendre en charge.",
    ctaLabel: "Diagnostic gratuit (20 min)",
  },
  {
    slug: "automatisation-ia",
    h1: "Automatisation IA",
    title: "Automatisation IA des tâches répétitives",
    description:
      "Automatisation IA de vos process métier : relances, saisie, reporting, qualification. Des workflows qui tournent sans vous, livrés et documentés.",
    intro:
      "L'automatisation IA, c'est faire disparaître la saisie manuelle et les allers-retours entre logiciels. Je connecte vos outils entre eux et j'y branche un agent qui exécute à votre place.",
    keywords: [
      "automatisation IA",
      "automatisation des tâches IA",
      "automatiser mon entreprise avec l'IA",
      "workflow IA",
    ],
    sections: [
      {
        titre: "Tâches répétitives = gaspillage",
        detail:
          "Chaque copier-coller, chaque relance oubliée, chaque report mensuel coûte des heures. L'automatisation IA les rend invisibles.",
      },
      {
        titre: "Vos outils, connectés",
        detail:
          "CRM, messagerie, facturation, tableur : l'agent lit et écrit dans chacun. Plus besoin de faire le pont à la main.",
      },
      {
        titre: "Retour sur investissement rapide",
        detail:
          "La plupart des automatisations rentabilisent le développement en quelques semaines. On priorise ce qui vous coûte le plus de temps.",
      },
    ],
    closing:
      "Listez-moi trois tâches que vous refaites chaque semaine. On en automatise au moins une dès le premier mois.",
    ctaLabel: "Diagnostic gratuit (20 min)",
  },
  {
    slug: "expert-n8n",
    h1: "Expert n8n",
    title: "Expert n8n, automatisations et agents IA",
    description:
      "Expert n8n : conception de workflows n8n avancés, agents IA et connexions API sur mesure. Auto-hébergé, open source, sans dépendance éditeur.",
    intro:
      "n8n est l'outil d'automatisation open source que je préconise quand la confidentialité et la souplesse comptent. En tant qu'expert n8n, je construis vos workflows et agents sur votre propre instance.",
    keywords: [
      "expert n8n",
      "freelance n8n",
      "développeur n8n",
      "automatisation n8n",
      "consultant n8n",
    ],
    sections: [
      {
        titre: "n8n auto-hébergé",
        detail:
          "Vos workflows tournent sur votre serveur. Vos données ne quittent pas votre infra, un argument décisif pour les secteurs réglementés.",
      },
      {
        titre: "Workflows complexes",
        detail:
          "Branches conditionnelles, appels API, agents IA intégrés : je vais au-delà des templates pour couvrir votre cas réel.",
      },
      {
        titre: "Open source, pas enfermé",
        detail:
          "Pas d'abonnement au résaut. Vous possédez les workflows et pouvez les faire évoluer avec n'importe quel développeur n8n.",
      },
    ],
    closing:
      "Vous avez une instance n8n ou vous hésitez à la lancer ? 20 minutes pour cadrer vos premiers workflows.",
    ctaLabel: "Diagnostic gratuit (20 min)",
  },
  {
    slug: "consultant-ia",
    h1: "Consultant IA",
    title: "Consultant IA : cadrage et mise en œuvre",
    description:
      "Consultant IA indépendant : audit de vos process, feuille de route IA réaliste et développement sur mesure. Approche pragmatic, résultats mesurables.",
    intro:
      "En tant que consultant IA, je commence par comprendre votre métier avant de proposer la moindre techno. L'objectif n'est pas d'ajouter de l'IA partout, mais d'automatiser ce qui compte.",
    keywords: [
      "consultant IA",
      "expert IA",
      "consultant intelligence artificielle",
      "conseil IA entreprise",
    ],
    sections: [
      {
        titre: "Audit avant promesse",
        detail:
          "On cartographie vos process et on identifie ceux où l'IA crée de la valeur, pas les autres. Pas de solution cherchée pour un problème inventé.",
      },
      {
        titre: "Feuille de route réaliste",
        detail:
          "Priorisation par impact et faisabilité. Vous savez quoi construire en premier et quel retour attendre.",
      },
      {
        titre: "Mise en œuvre incluse",
        detail:
          "Je ne livre pas un slide deck : je développe l'agent ou le workflow, je le teste en conditions réelles, je le documente.",
      },
    ],
    closing:
      "Si vous voulez un avis franc sur ce que l'IA peut faire pour vous, et ce qu'elle ne peut pas, on en parle 20 minutes.",
    ctaLabel: "Diagnostic gratuit (20 min)",
  },
  {
    slug: "agence-ia",
    h1: "Agence IA",
    title: "Agence IA ou développeur indépendant",
    description:
      "Besoin d'une agence IA sans la facture agence ? Développeur IA indépendant : même expertise, contact direct avec le codeur, tarif freelance.",
    intro:
      "Vous cherchez une agence IA mais vous voulez parler à la personne qui code. Je fonctionne comme une agence à une personne : cadrage, développement, déploiement, le tout sans couche commerciale.",
    keywords: [
      "agence IA",
      "agence intelligence artificielle",
      "agence agent IA",
      "prestataire IA",
    ],
    sections: [
      {
        titre: "L'expertise agence, le tarif indépendant",
        detail:
          "Mêmes livrables qu'une agence, agents, automatisations, audit, sans les frais de structure. Vous payez du code, pas du management.",
      },
      {
        titre: "Un interlocuteur unique",
        detail:
          "Du cadrage à la mise en prod, vous gardez le même contact. Pas de relais qui dilue le brief.",
      },
      {
        titre: "Scalable si besoin",
        detail:
          "Si le projet grossit, je coordonne des profils complémentaires. Vous gardez le pilotage, pas la charge.",
      },
    ],
    closing:
      "Avant de signer avec une agence, comparons approche et budget en 20 minutes. Sans engagement.",
    ctaLabel: "Diagnostic gratuit (20 min)",
  },
  {
    slug: "chatbot-ia-entreprise",
    h1: "Chatbot IA pour entreprise",
    title: "Chatbot IA pour entreprise, support et vente",
    description:
      "Chatbot IA pour entreprise sur mesure : répond aux questions clients, qualifie les demandes et branche votre CRM. Auto-hébergeable, documenté.",
    intro:
      "Un chatbot IA pour entreprise, c'est un premier niveau qui répond 24/7, qualifie et oriente, sans saturer votre équipe. Je le construis sur vos documents et vos outils, pas sur un LLM générique."
   ,
    keywords: [
      "chatbot IA pour entreprise",
      "assistant IA personnalisé",
      "chatbot client IA",
      "IA support client",
    ],
    sections: [
      {
        titre: "Branché sur vos données",
        detail:
          "Le chatbot répond à partir de vos FAQ, contrats et historiques, pas d'hallucinations sur des sujets qu'il ne connaît pas.",
      },
      {
        titre: "Qualification automatique",
        detail:
          "Il capture le besoin, le niveau d'urgence et les coordonnées, puis crée le contact dans votre CRM. Vos commerciaux reçoivent du chaud.",
      },
      {
        titre: "Escalade propre",
        detail:
          "Le cas complexe est transmis à un humain avec le contexte complet. Le client ne recommence pas sa demande.",
      },
    ],
    closing:
      "Vous recevez des questions clients récurrentes ? 20 minutes pour voir si un chatbot les absorbe.",
    ctaLabel: "Diagnostic gratuit (20 min)",
  },
  {
    slug: "assistant-ia-personnalise",
    h1: "Assistant IA personnalisé",
    title: "Assistant IA personnalisé pour votre métier",
    description:
      "Assistant IA personnalisé : conçu pour vos outils et vos process. Rédaction, analyse, reporting et exécution, documenté et auto-hébergeable.",
    intro:
      "Un assistant IA personnalisé n'est pas une IA générale. C'est un exécutant configuré pour vos outils, vos raccourcis et vos règles, qui fait le travail, pas la démo.",
    keywords: [
      "assistant IA personnalisé",
      "créer un assistant IA",
      "assistant virtuel entreprise",
      "IA sur mesure",
    ],
    sections: [
      {
        titre: "Vos outils, vos règles",
        detail:
          "L'assistant agit dans votre environnement : il rédige dans votre ton, lit vos fichiers, écrit dans vos logiciels. Pas de copier-coller manuel.",
      },
      {
        titre: "Du simple au complet",
        detail:
          "De la rédaction d'e-mails à l'analyse de contrats, on commence petit et on étend au rythme de vos besoins.",
      },
      {
        titre: "Confidentialité",
        detail:
          "Auto-hébergeable sur votre infra. Vos données ne partent pas chez un éditeur tiers.",
      },
    ],
    closing:
      "Décrivez-moi la tâche que vous aimeriez déléguer à un assistant. 20 minutes pour estimer la faisabilité.",
    ctaLabel: "Diagnostic gratuit (20 min)",
  },
  {
    slug: "ia-pour-pme",
    h1: "IA pour PME",
    title: "IA pour PME : automatiser sans recruter",
    description:
      "IA pour PME : des agents et automatisations accessibles, sans équipe data ni gros budget. Diagnostic gratuit, livraison documentée.",
    intro:
      "L'IA pour PME, ce n'est pas un projet de 6 mois. C'est un agent qui prend une tâche précise et la rend invisible. Je construis pour les structures qui n'ont ni data scientist ni temps à perdre.",
    keywords: [
      "IA pour PME",
      "intelligence artificielle PME",
      "automatisation PME",
      "agent IA petite entreprise",
    ],
    sections: [
      {
        titre: "Pas besoin d'une équipe data",
        detail:
          "Vous n'avez pas à recruter. L'agent est livré prêt à l'emploi, documenté, et vous pouvez le faire évoluer plus tard.",
      },
      {
        titre: "Budget maîtrisé",
        detail:
          "On cible une douleur précise et on la règle. Pas d'initialisation hors de portée pour une PME.",
      },
      {
        titre: "Résultat avant technique",
        detail:
          "L'objectif est le temps rendu à votre équipe, pas la pile technologique. On choisit l'outil le plus simple qui marche.",
      },
    ],
    closing:
      "PME qui hésite sur l'IA par manque de temps ou de budget : 20 minutes pour un cas concret et réaliste.",
    ctaLabel: "Diagnostic gratuit (20 min)",
  },
  {
    slug: "automatisation-crm-ia",
    h1: "Automatisation CRM avec IA",
    title: "Automatisation CRM avec l'IA",
    description:
      "Automatisation CRM avec IA : relances de devis, qualification de leads et mise à jour automatique. Branche sur votre CRM, documenté.",
    intro:
      "Votre CRM est une base morte si personne ne l'alimente. L'automatisation CRM avec IA le garde vivant : relances envoyées, leads qualifiés, fiches à jour, sans saisie manuelle.",
    keywords: [
      "automatisation CRM IA",
      "IA CRM",
      "relance devis automatique",
      "qualification leads IA",
    ],
    sections: [
      {
        titre: "Relances qui partent seules",
        detail:
          "Devis sans réponse, échéance proche, contrat à renouveler : l'agent relance au bon moment et logue tout dans le CRM.",
      },
      {
        titre: "Qualification sans effort",
        detail:
          "Les nouvelles demandes sont triées, notées et attribuées selon vos critères. Vos commerciaux travaillent le chaud.",
      },
      {
        titre: "Zéro saisie à la main",
        detail:
          "L'agent lit les e-mails et les appels, remplit les champs, crée les tâches. Votre base reflète la réalité, en temps réel.",
      },
    ],
    closing:
      "Votre CRM n'est pas à jour ? 20 minutes pour voir ce qu'un agent peut automatiser côté commercial.",
    ctaLabel: "Diagnostic gratuit (20 min)",
  },
  {
    slug: "consultant-openai",
    h1: "Consultant OpenAI",
    title: "Consultant OpenAI, intégration API et agents",
    description:
      "Consultant OpenAI : intégration des API OpenAI dans vos outils, agents et assistants sur mesure. Sécurisé, documenté, mesurable.",
    intro:
      "En tant que consultant OpenAI, j'intègre les modèles OpenAI dans vos outils existants, pas en remplacement mais en couche intelligente qui exécute vos workflows.",
    keywords: [
      "consultant OpenAI",
      "intégration OpenAI",
      "développeur OpenAI",
      "API OpenAI entreprise",
    ],
    sections: [
      {
        titre: "API branchée sur votre métier",
        detail:
          "Les modèles OpenAI sont des briques. Je les assemble dans vos outils pour produire un résultat utile, pas un jouet.",
      },
      {
        titre: "Garde-fous et coûts",
        detail:
          "Limites, validation humaine sur les actions sensibles, suivi de consommation. L'IA reste sous contrôle et prévisible.",
      },
      {
        titre: "Évolutif",
        detail:
          "Si un autre modèle est plus pertinent demain, l'architecture le permet sans tout réécrire.",
      },
    ],
    closing:
      "Vous voulez exploiter OpenAI sans mauvaise surprise ? 20 minutes pour cadrer une première intégration.",
    ctaLabel: "Diagnostic gratuit (20 min)",
  },
];

export function getIntent(slug: string): Intent | undefined {
  return INTENTS.find((i) => i.slug === slug);
}
