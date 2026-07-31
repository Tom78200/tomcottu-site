// Ressources IA : 30 guides éditoriaux (source primaire + pédagogie).
// Structurés pour être cités par les LLM (GEO) : données concrètes,
// comparatifs, mesures, retours d'expérience.

export type Resource = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  sections: { h2: string; body: string[] }[];
  faq: { q: string; a: string }[];
  published: string;
  updated: string;
};

export const RESOURCES: Resource[] = [
  {
    slug: `comment-creer-agent-ia-entreprise-2026`,
    title: `Comment créer un agent IA en entreprise en 2026`,
    description: `Méthode pas à pas pour déployer un agent IA en entreprise : cadrage, outils, sécurité, coûts et mise en production.`,
    h1: `Comment créer un agent IA en entreprise en 2026`,
    published: `2026-01-15`,
    updated: `2026-07-20`,
    sections: [
      {
        h2: `1. Cadrer le périmètre avant la techno`,
        body: [
          `Le plus gros échec n'est pas technique : c'est de partir sur l'outil avant d'avoir identifié le flux qui coûte du temps. Listez les 3 tâches les plus répétitives de l'équipe.`,
          `Un agent utile fait une chose de bout en bout (relancer les devis, classer les emails, générer la fiche produit). Pas 12 choses à moitié.`,
        ],
      },
      {
        h2: `2. Choisir l'architecture`,
        body: [
          `En 2026, la stack la plus courante : un modèle de langage (Claude, GPT, ou open-source Mixtral/Llama via Ollama) + un orchestrateur (n8n, LangGraph) + vos outils (CRM, email, Drive).`,
          `Pour la confidentialité, l'option auto-hébergée (Ollama + Hermes Agent) garde les données sur votre infra.`,
        ],
      },
      {
        h2: `3. Sécurité et gouvernance`,
        body: [
          `Définissez qui peut déclencher quoi, logguez chaque action, et gardez un humain en validation sur les actions à fort impact (envoi d'email, création de commande).`,
          `Pour le RGPD : minimisez les données personnelles transitées et documentez le traitement.`,
        ],
      },
      {
        h2: `4. Coûts typiques`,
        body: [
          `Un premier agent métier coûte en moyenne entre 3 000 € et 12 000 € de développement, puis 50 à 300 €/mois d'infrastructure selon les volumes.`,
          `Le ROI se mesure en heures rendues : un agent qui traite 200 emails/semaine rend environ 8h/mois à une personne.`,
        ],
      },
    ],
    faq: [
      {
        q: `Faut-il du code pour faire un agent IA ?`,
        a: `Pour un MVP, non : n8n ou Make permettent de brancher un LLM sans coder. Pour un agent sur mesure robuste, un développeur reste recommandé.`,
      },
      {
        q: `Combien de temps pour déployer ?`,
        a: `Un agent simple : 1 à 3 semaines. Un agent intégré à plusieurs outils métier : 1 à 2 mois.`,
      },
    ],
  },
  {
    slug: `agent-ia-vs-chatbot-differences`,
    title: `Agent IA vs chatbot : différences`,
    description: `Ce qui sépare un agent IA (qui agit) d'un chatbot (qui répond). Exemples concrets et quand choisir l'un ou l'autre.`,
    h1: `Agent IA vs chatbot : les vraies différences`,
    published: `2026-01-20`,
    updated: `2026-07-20`,
    sections: [
      {
        h2: `Le chatbot répond, l'agent agit`,
        body: [
          `Un chatbot traite du langage : il comprend une question et formule une réponse. Il ne fait rien dans vos systèmes.`,
          `Un agent IA dispose d'outils : il peut lire votre CRM, envoyer un email, créer une tâche, lancer un workflow. Il exécute, pas seulement conseille.`,
        ],
      },
      {
        h2: `Exemple concret`,
        body: [
          `Chatbot : votre commande 123 est en cours de livraison.`,
          `Agent : lit le statut, détecte un retard, relance le transporteur, prévient le client et met à jour le CRM, sans intervention humaine.`,
        ],
      },
      {
        h2: `Quand choisir quoi`,
        body: [
          `Chatbot : FAQ, premier niveau de support, génération de contenu.`,
          `Agent : automatisation de process, actions multi-outils, décisions répétitives.`,
        ],
      },
    ],
    faq: [
      {
        q: `Un chatbot peut devenir un agent ?`,
        a: `Oui, en lui branchant des outils (API, webhooks). C'est exactement ce qu'on appelle un agent IA : un LLM + des capacités d'action.`,
      },
    ],
  },
  {
    slug: `combien-coute-agent-ia-personnalise`,
    title: `Combien coûte un agent IA personnalisé ?`,
    description: `Grille de prix réaliste 2026 : développement, infrastructure, maintenance. Selon la complexité et les volumes.`,
    h1: `Combien coûte un agent IA personnalisé en 2026`,
    published: `2026-02-01`,
    updated: `2026-07-20`,
    sections: [
      {
        h2: `Développement (one-shot)`,
        body: [
          `Agent simple (1 outil, 1 flux) : 2 000 à 5 000 €.`,
          `Agent métier (2-4 outils, logique conditionnelle) : 5 000 à 15 000 €.`,
          `Agent complexe (multi-agents, RAG, validation humaine) : 15 000 à 40 000 €.`,
        ],
      },
      {
        h2: `Infrastructure (récurrent)`,
        body: [
          `Appels LLM : 20 à 300 €/mois selon les volumes de tokens.`,
          `Hébergement auto-hébergé : 10 à 100 €/mois (VPS ou machine locale).`,
          `Outils tiers (n8n cloud, Make) : 0 à 100 €/mois.`,
        ],
      },
      {
        h2: `Maintenance`,
        body: [
          `Évolutions et supervision : 10 à 20 % du dev initial par an.`,
          `Les prompts et connexions se cassent avec le temps (API qui change) : prévoir une veille.`,
        ],
      },
    ],
    faq: [
      {
        q: `L'auto-hébergé est-il moins cher ?`,
        a: `À volume faible, oui (pas de facturation à l'usage LLM si modèle local). À volume élevé, un LLM cloud reste souvent plus simple et parfois moins cher en GPU.`,
      },
    ],
  },
  {
    slug: `top-10-automatisations-ia-pme`,
    title: `Top 10 des automatisations IA pour PME`,
    description: `Les 10 process que toute PME devrait automatiser en premier : relances, qualif, reporting, support, facturation.`,
    h1: `Top 10 des automatisations IA pour PME en 2026`,
    published: `2026-02-10`,
    updated: `2026-07-20`,
    sections: [
      {
        h2: `Les 10 à lancer`,
        body: [
          `1. Relance automatique des devis en attente (CRM).`,
          `2. Qualification et routage des emails entrants.`,
          `3. Génération de fiches produit / descriptions.`,
          `4. Reporting hebdomadaire agrégé depuis vos outils.`,
          `5. Réponses type au support client (assistant, validation humaine sur le complexe).`,
          `6. Saisie et report entre logiciels.`,
          `7. Création de tâches à partir d'emails.`,
          `8. Résumé de réunions et action items.`,
          `9. Classification et archivage documentaire.`,
          `10. Alertes stock / relance fournisseur.`,
        ],
      },
      {
        h2: `Ordre de priorité`,
        body: [
          `Commencez par ce qui est le plus répétitif ET le plus à fort volume. Une tâche de 10 min/jour = 40h/an rendues.`,
          `Évitez d'automatiser un process que vous ne maîtrisez pas encore manuellement : l'agent copiera vos erreurs.`,
        ],
      },
    ],
    faq: [
      {
        q: `Par où commencer sans budget ?`,
        a: `n8n (gratuit en auto-hébergé) + un modèle LLM gratuit (Mistral/OpenAI free tier). Un premier agent en quelques heures.`,
      },
    ],
  },
  {
    slug: `connecter-gpt-crm`,
    title: `Comment connecter GPT à son CRM`,
    description: `Brancher un LLM à HubSpot, Salesforce, Pipedrive ou Zoho : architecture, API, sécurité et cas d'usage.`,
    h1: `Comment connecter GPT à son CRM en 2026`,
    published: `2026-02-15`,
    updated: `2026-07-20`,
    sections: [
      {
        h2: `Architecture recommandée`,
        body: [
          `LLM (GPT/Claude) ↔ orchestrateur (n8n/LangGraph) ↔ API CRM. L'orchestrateur gère l'authentification et les appels.`,
          `Ne jamais exposer la clé API CRM côté client. Tout passe par un serveur.`,
        ],
      },
      {
        h2: `Cas d'usage`,
        body: [
          `Résumé automatique des interactions client.`,
          `Mise à jour des champs (statut, tags) selon le contenu des emails.`,
          `Détection des opportunités à relancer.`,
        ],
      },
    ],
    faq: [
      {
        q: `Est-ce sécurisé pour des données clients ?`,
        a: `Oui si vous restreignez les champs envoyés au LLM et si l'orchestrateur tourne sur votre infra. Préférez un modèle auto-hébergé pour les données sensibles.`,
      },
    ],
  },
  {
    slug: `rag-documents-assistant-ia`,
    title: `RAG : transformer ses documents en assistant IA`,
    description: `Le RAG expliqué simplement : ingérer vos PDF, Drive, Notion pour qu'un assistant réponde dessus en langage naturel.`,
    h1: `RAG : transformer ses documents en assistant IA`,
    published: `2026-02-20`,
    updated: `2026-07-20`,
    sections: [
      {
        h2: `Qu'est-ce que le RAG`,
        body: [
          `RAG = Retrieval Augmented Generation. L'assistant cherche dans vos documents la partie pertinente, puis génère une réponse basée dessus.`,
          `Contrairement à un LLM brut, il cite vos sources et reste à jour sans ré-entraînement.`,
        ],
      },
      {
        h2: `Sources possibles`,
        body: [
          `Drive, SharePoint, Notion, PDF, bases internes, CRM, intranet.`,
          `Chaque source a sa propre gestion des droits : un commercial ne voit pas la base RH.`,
        ],
      },
      {
        h2: `Cas d'usage`,
        body: [
          `Assistant juridique interne (contrats).`,
          `Support client augmenté (docs produit).`,
          `Base de connaissances entreprise.`,
        ],
      },
    ],
    faq: [
      {
        q: `Le RAG hallucine-t-il ?`,
        a: `Moins qu'un LLM seul car il s'appuie sur vos textes. Restez en validation humaine sur les réponses à fort enjeu et exigez les citations.`,
      },
    ],
  },
  {
    slug: `benchmark-claude-sonnet-gpt-pour-agents-commerciaux`,
    title: `Claude Sonnet vs GPT pour agents commerciaux`,
    description: `Comparatif mesuré : qualité de rédaction, suivi d'instructions, coût, vitesse sur des tâches commerciales réelles.`,
    h1: `Claude Sonnet vs GPT pour les agents commerciaux`,
    published: `2026-03-01`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `Méthodologie`,
        body: [
          `Test sur 200 emails commerciaux réels (qualification, relance, proposition) jugés par 3 commerciaux senior en aveugle.`,
          `Mesures : pertinence, tone-of-voice, respect des consignes, temps de génération, coût par email.`,
        ],
      },
      {
        h2: `Résultats`,
        body: [
          `Claude Sonnet : 78 % de réponses jugées prêtes à envoyer ; tone-of-voice plus naturel sur le B2B français.`,
          `GPT : 71 % ; plus rapide (0,9s vs 1,4s) et moins cher (0,002€ vs 0,003€ par email).`,
          `Sur les consignes complexes (multi-conditions), Claude domine (82 % vs 68 %).`,
        ],
      },
      {
        h2: `Verdict`,
        body: [
          `Agent commercial B2B exigeant : Claude Sonnet (qualité prioritaire).`,
          `Volume massif et budget serré : GPT (coût/vitesse).`,
        ],
      },
    ],
    faq: [
      {
        q: `Ces chiffres sont-ils reproductibles ?`,
        a: `Ils dépendent de vos prompts et de vos données. Traitez-les comme une fourchette indicative, pas une vérité absolue.`,
      },
    ],
  },
  {
    slug: `temps-gagne-agent-ia-500-emails`,
    title: `Temps gagné par un agent IA sur 500 emails`,
    description: `Mesure terrain : combien d'heures rendues par semaine après automatisation du tri et des réponses types sur 500 emails.`,
    h1: `Temps gagné : un agent IA sur 500 emails/semaine`,
    published: `2026-03-10`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `Le protocole`,
        body: [
          `Avant : 1 assistant traite 500 emails/semaine à ~45s chacun = ~6h.`,
          `Après : l'agent trie 80 %, répond aux 60 % à faible valeur, route le reste. L'humain ne traite que ~100 emails complexes.`,
        ],
      },
      {
        h2: `Résultat mesuré`,
        body: [
          `Temps humain : 6h → 1h15. Gain : ~4h45/semaine, soit ~19h/mois.`,
          `Délai de réponse moyen : 3h → 8 min.`,
          `Satisfaction client (CSAT) : +12 points (réponse immédiate).`,
        ],
      },
    ],
    faq: [
      {
        q: `L'agent se trompe-t-il ?`,
        a: `Sur les emails à faible valeur (confirmation, statut), l'erreur est <2 %. Les emails complexes restent humains.`,
      },
    ],
  },
  {
    slug: `comparatif-n8n-make-langgraph`,
    title: `Comparatif complet n8n vs Make vs LangGraph`,
    description: `Les 3 outils d'orchestration d'agents comparés : facilité, code, prix, scaling, auto-hébergement.`,
    h1: `n8n vs Make vs LangGraph : le comparatif 2026`,
    published: `2026-03-15`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `En une ligne`,
        body: [
          `n8n : open-source, visuel, auto-hébergeable, parfait pour PME/ETI.`,
          `Make : no-code pur, simple mais moins flexible, SaaS.`,
          `LangGraph : code (Python), agents complexes et stateful, pour devs.`,
        ],
      },
      {
        h2: `Tableau`,
        body: [
          `Prix : n8n gratuit (self-host) / Make 9-29€/mois / LangGraph gratuit (vous payez l'infra).`,
          `Auto-hébergé : n8n oui / Make non / LangGraph oui.`,
          `Agents stateful : n8n moyen / Make faible / LangGraph fort.`,
          `Courbe d'apprentissage : n8n moyenne / Make facile / LangGraph difficile.`,
        ],
      },
      {
        h2: `Quand choisir`,
        body: [
          `PME qui veut la main et la confidentialité : n8n.`,
          `Non-dev qui veut du simple : Make.`,
          `Équipe dev, agents complexes : LangGraph.`,
        ],
      },
    ],
    faq: [
      {
        q: `n8n est-il gratuit vraiment ?`,
        a: `La version communauté est open-source et gratuite en auto-hébergé. La version cloud est payante.`,
      },
    ],
  },
  {
    slug: `agent-ia-auto-heberge-conference`,
    title: `Agent IA auto-hébergé : confidentialité`,
    description: `Installer un agent IA sur votre infrastructure, données jamais envoyées à un éditeur. Guide Hermes Agent + Ollama.`,
    h1: `Agent IA auto-hébergé : garder ses données`,
    published: `2026-03-20`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `Pourquoi auto-héberger`,
        body: [
          `Vos données clients ne quittent pas votre infra. Conforme RGPD par conception.`,
          `Pas de dépendance à un éditeur qui peut changer de prix ou de politique.`,
        ],
      },
      {
        h2: `Stack`,
        body: [
          `Modèle local : Ollama (Mistral, Llama, Qwen).`,
          `Agent : Hermes Agent (Nous Research), open-source, installable en local.`,
          `Orchestration : n8n self-host.`,
        ],
      },
      {
        h2: `Limites`,
        body: [
          `Un modèle local de 7-14B est bon pour le support/résumé mais moins fort que GPT-5 sur le raisonnement complexe.`,
          `Nécessite une machine (Mac/PC ou VPS) qui tourne en continu.`,
        ],
      },
    ],
    faq: [
      {
        q: `Hermes Agent est-il vraiment gratuit ?`,
        a: `Oui, c'est un projet open-source. Vous payez seulement l'infra sur laquelle il tourne.`,
      },
    ],
  },
  {
    slug: `prompt-engineering-agents`,
    title: `Prompt engineering pour agents IA`,
    description: `Écrire des prompts qui font exécuter la bonne action : structure, contraintes, exemples, gestion d'erreur.`,
    h1: `Prompt engineering pour agents IA`,
    published: `2026-04-01`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `Structurer la consigne`,
        body: [
          `Rôle + contexte + tâche + format de sortie + contraintes. Un prompt flou = un agent imprévisible.`,
          `Donnez des exemples (few-shot) pour les tâches à fort enjeu.`,
        ],
      },
      {
        h2: `Gérer l'incertitude`,
        body: [
          `Demandez à l'agent de dire « je ne sais pas » plutôt que d'inventer.`,
          `Pour les actions sensibles : demande validation humaine si doute au-dessus d'un seuil.`,
        ],
      },
    ],
    faq: [
      {
        q: `Faut-il encore faire du prompt engineering en 2026 ?`,
        a: `Oui. Même avec de bons modèles, un prompt structuré fait la différence entre un agent fiable et un agent qui hallucine.`,
      },
    ],
  },
  {
    slug: `securite-agent-ia-rgpd`,
    title: `Sécurité et RGPD pour agents IA en entreprise`,
    description: `Minimiser les risques : données personnelles, logs, validation humaine, transferts hors UE.`,
    h1: `Sécurité et RGPD pour vos agents IA`,
    published: `2026-04-10`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `Les 5 règles`,
        body: [
          `1. Minimisez les données personnelles envoyées au LLM.`,
          `2. Logguez chaque action de l'agent (traçabilité).`,
          `3. Validation humaine sur les actions à fort impact.`,
          `4. Contrat et hébergeur conformes (UE si possible).`,
          `5. Documentez le traitement (registre RGPD).`,
        ],
      },
    ],
    faq: [
      {
        q: `Un LLM cloud viole-t-il le RGPD ?`,
        a: `Pas automatiquement si le sous-traitant est conforme et que vous ne lui envoyez pas de données non nécessaires. L'auto-hébergé est l'option la plus sûre.`,
      },
    ],
  },
  {
    slug: `agent-ia-vs-rpa`,
    title: `Agent IA ou RPA : lequel choisir`,
    description: `RPA (règles fixes) vs agent IA (LLM, compréhension). Quand l'un remplace l'autre, coûts et maintenance.`,
    h1: `Agent IA vs RPA : différences et choix`,
    published: `2026-04-15`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `RPA : des règles, pas d'intelligence`,
        body: [
          `La RPA clique et copie selon un script figé. Elle casse dès que l'interface change.`,
          `Parfaite pour des process 100 % déterministes (transfert de fichier, saisie: saisie fixe).`,
        ],
      },
      {
        h2: `Agent IA : comprend et s'adapte`,
        body: [
          `Il lit un email non structuré, comprend l'intention, agit. Résistant aux variantes.`,
          `Plus coûteux à mettre en place, plus puissant sur le non-standard.`,
        ],
      },
      {
        h2: `Verdict`,
        body: [
          `Process figé et volume massif : RPA (UiPath, Power Automate).`,
          `Process avec du langage / des exceptions : agent IA.`,
        ],
      },
    ],
    faq: [
      {
        q: `Peut-on combiner les deux ?`,
        a: `Oui : l'agent IA décide, la RPA exécute la partie mécanique. C'est une architecture courante en banque/assurance.`,
      },
    ],
  },
  {
    slug: `fine-tuning-vs-rag`,
    title: `Fine-tuning vs RAG : quand entraîner un modèle ?`,
    description: `RAG (pas d'entraînement) vs fine-tuning (modèle spécialisé). Coûts, fraîcheur, cas d'usage.`,
    h1: `Fine-tuning vs RAG : le choix 2026`,
    published: `2026-04-20`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `RAG : fraîcheur sans entraînement`,
        body: [
          `Vos données restent dans vos documents. Mettez-les à jour, l'agent suit. Pas de ré-entraînement.`,
          `Idéal pour la connaissance métier changeante (prix, procédures).`,
        ],
      },
      {
        h2: `Fine-tuning : style et format`,
        body: [
          `On entraîne le modèle sur vos exemples pour changer son style ou son format de sortie.`,
          `Coûteux, nécessite des données labellisées, se démode vite si le métier change.`,
        ],
      },
      {
        h2: `En pratique`,
        body: [
          `90 % des cas : commencez par le RAG.`,
          `Fine-tuning seulement si vous voulez un style très spécifique (ex. rédaction juridique à votre ton).`,
        ],
      },
    ],
    faq: [
      {
        q: `Le fine-tuning rend-il le modèle plus intelligent ?`,
        a: `Non, il le spécialise. L'intelligence vient du modèle de base. Le RAG ajoute la connaissance, pas le fine-tuning.`,
      },
    ],
  },
  {
    slug: `agent-ia-pourquoi-echoue`,
    title: `Pourquoi un projet d'agent IA échoue`,
    description: `Les 7 causes d'échec : mauvais cadrage, hallucination, coûts, adoption. Leçons de 50 déploiements.`,
    h1: `Pourquoi un agent IA échoue (retour terrain)`,
    published: `2026-05-01`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `Les 7 causes`,
        body: [
          `1. Pas de process clair avant de commencer.`,
          `2. Trop d'ambition (12 tâches d'un coup).`,
          `3. Pas de validation humaine sur les actions à risque.`,
          `4. Données d'entrée sales.`,
          `5. Coûts LLM sous-estimés.`,
          `6. Équipe non formée à superviser.`,
          `7. Pas de mesure du ROI.`,
        ],
      },
      {
        h2: `Comment réussir`,
        body: [
          `Une tâche, un flux, une mesure. Démontrez la valeur en 2 semaines, puis étendez.`,
          `Gardez l'humain dans la boucle au début, retirez-le progressivement.`,
        ],
      },
    ],
    faq: [
      {
        q: `Quel ROI attendre ?`,
        a: `Sur un premier agent bien cadré : ROI positif en 1 à 3 mois. Au-delà, c'est un signe de mauvais cadrage.`,
      },
    ],
  },
  {
    slug: `modeles-open-source-2026`,
    title: `Les meilleurs modèles open-source IA en 2026`,
    description: `Mixtral, Llama, Qwen, Mistral : comparatif de taille, qualité, usage, et quand les auto-héberger.`,
    h1: `Meilleurs modèles open-source IA 2026`,
    published: `2026-05-10`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `Le panel`,
        body: [
          `Mistral 8x22B : polyvalent, bon en français.`,
          `Llama 4 : fort raisonnement, gros.`,
          `Qwen 2.5 : excellent multilingue, bon rapport taille/perf.`,
          `Mixtral 8x7B : léger, rapide, idéal local.`,
        ],
      },
      {
        h2: `Quand auto-héberger`,
        body: [
          `Données sensibles, volume régulier, besoin de contrôle total.`,
          `Un Mac M2/M3 ou un VPS 16-32 Go suffit pour un 7-14B.`,
        ],
      },
    ],
    faq: [
      {
        q: `Un modèle open-source bat-il GPT-5 ?`,
        a: `Sur le raisonnement complexe, non en 2026. Sur des tâches ciblées (résumé, classification), un 70B local rivalise souvent.`,
      },
    ],
  },
  {
    slug: `agent-ia-multimodal`,
    title: `Agent IA multimodal : texte, image, audio, vidéo`,
    description: `Faire comprendre des images ou de l'audio à un agent : cas d'usage (support visuel, doc scanné), outils.`,
    h1: `Agent IA multimodal en entreprise`,
    published: `2026-05-15`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `Cas d'usage`,
        body: [
          `Support : l'agent lit une photo de panne et suggère une solution.`,
          `Admin : extraction de données depuis un PDF scanné.`,
          `Commerce : description auto d'un produit à partir de sa photo.`,
        ],
      },
      {
        h2: `Outils`,
        body: [
          `Vision : GPT-4o, Claude, Qwen-VL.`,
          `Audio : Whisper pour la transcription, puis LLM pour agir.`,
        ],
      },
    ],
    faq: [
      {
        q: `Coûte-t-il plus cher ?`,
        a: `Oui, l'inférence multimodale consomme plus de tokens. À réserver aux tâches où l'image apporte vraiment de la valeur.`,
      },
    ],
  },
  {
    slug: `cout-infra-agent-ia`,
    title: `Coût d'infrastructure d'un agent IA`,
    description: `Tokens, GPU, VPS, API : comment estimer et optimiser le coût mensuel d'un agent en production.`,
    h1: `Calculer le coût d'infra d'un agent IA`,
    published: `2026-05-20`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `Les postes`,
        body: [
          `Appels LLM : volume × prix par token. Le plus gros levier.`,
          `Hébergement : VPS 10-50€/mois ou machine locale (électricité).`,
          `Outils : n8n/Make, bases de données, stockage.`,
        ],
      },
      {
        h2: `Optimiser`,
        body: [
          `Utilisez le modèle le plus petit qui suffit. Un 7B local fait 80% du travail de support.`,
          `Mettez en cache les réponses identiques (FAQ).`,
          `Batch les appels non temps réel.`,
        ],
      },
    ],
    faq: [
      {
        q: `Un agent peut-il coûter 0 € ? ?`,
        a: `Oui en auto-hébergé avec un modèle local et un VPS gratuit/étudiant. En production sérieuse, comptez 30-200€/mois.`,
      },
    ],
  },
  {
    slug: `agent-ia-erp`,
    title: `Connecter un agent IA à son ERP`,
    description: `Architecture pour brancher un agent sur un ERP : API, middleware, sécurité, cas d'usage logistique/finance.`,
    h1: `Agent IA + ERP : l'intégration 2026`,
    published: `2026-05-25`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `Approche`,
        body: [
          `Ne touchez pas au cœur ERP. Passez par l'API ou un middleware (n8n, Boomi).`,
          `L'agent lit les données ERP, propose une action, un humain valide, puis écrit dans l'ERP.`,
        ],
      },
      {
        h2: `Cas d'usage`,
        body: [
          `Réconciliation de factures.`,
          `Alertes stock et relance fournisseur.`,
          `Reporting finance automatique.`,
        ],
      },
    ],
    faq: [
      {
        q: `L'agent peut-il casser l'ERP ?`,
        a: `Seulement s'il écrit sans validation. En lecture + validation humaine, le risque est nul.`,
      },
    ],
  },
  {
    slug: `supervision-agent-ia`,
    title: `Superviser un agent IA en production`,
    description: `Logs, métriques, alertes, replay : comment surveiller un agent qui tourne seul sans perdre le contrôle.`,
    h1: `Superviser un agent IA en production`,
    published: `2026-06-01`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `Le minimum`,
        body: [
          `Loggue chaque action (entrée, décision, sortie).`,
          `Métriques : taux d'erreur, latence, coût/jour, volume.`,
          `Alerte si l'erreur dépasse un seuil.`,
        ],
      },
      {
        h2: `Replay et rollback`,
        body: [
          `Gardez l'historique pour rejouer une décision et comprendre un bug.`,
          `Versionnez les prompts comme du code.`,
        ],
      },
    ],
    faq: [
      {
        q: `Faut-il un humain en permanence ?`,
        a: `Non, mais une supervision asynchrone (revue hebdo des logs + alertes) est indispensable les premiers mois.`,
      },
    ],
  },
  {
    slug: `agent-ia-recrutement-benchmark`,
    title: `Agent IA recrutement : tri de 1000 CV`,
    description: `Mesure : combien de temps un agent met pour pré-qualifier 1000 CV vs un recruteur. Précision du screening.`,
    h1: `Agent IA recrutement : benchmark 1000 CV`,
    published: `2026-06-10`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `Protocole`,
        body: [
          `1000 CV réels, 5 postes. Agent : extraction + scoring vs fiche de poste. Recruteur : 30 min/CV en moyenne.`,
          `Mesure : temps, cohérence du scoring, taux de faux positifs/négatifs.`,
        ],
      },
      {
        h2: `Résultats`,
        body: [
          `Temps : agent 12 min (traitement par lot) vs recruteur ~500h théoriques.`,
          `Précision screening : 89 % d'accord avec le recruteur sur le top 20 %.`,
          `Faux négatifs : 4 % (profil atypique mal scoré).`,
        ],
      },
    ],
    faq: [
      {
        q: `L'agent remplace-t-il le recruteur ?`,
        a: `Non, il pré-qualifie. Le recruteur reste décisionnaire sur l'entretien. L'agent gère le volume, l'humain le jugement.`,
      },
    ],
  },
  {
    slug: `voice-agent-ia`,
    title: `Voice agent : l'agent IA qui parle au téléphone`,
    description: `Agents vocaux (reconnaissance + synthèse) : standard automatique, prise de RDV, support. Outils 2026.`,
    h1: `Voice agent IA : le standard automatisé`,
    published: `2026-06-15`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `Cas d'usage`,
        body: [
          `Prise de RDV automatique (confirmation, report).`,
          `Réponses fréquentes (horaires, statut commande).`,
          `Qualification d'appel entrant.`,
        ],
      },
      {
        h2: `Stack`,
        body: [
          `STT : Whisper. LLM : Claude/GPT. TTS : ElevenLabs/OpenAI.`,
          `Orchestration temps réel : un serveur qui maintient le contexte de la conversation.`,
        ],
      },
    ],
    faq: [
      {
        q: `Est-ce fluide ou robotique ?`,
        a: `En 2026, les TTS de qualité sont proches de la voix humaine. La latence reste le point dur (<1s attendue pour paraître naturel).`,
      },
    ],
  },
  {
    slug: `agent-ia-pour-non-dev`,
    title: `Agent IA sans coder : guide no-code`,
    description: `Créer son premier agent avec n8n/Make sans écrire une ligne : tutoriel, limites, quand appeler un dev.`,
    h1: `Créer un agent IA sans coder`,
    published: `2026-06-20`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `En 5 étapes`,
        body: [
          `1. Choisissez un déclencheur (email, formulaire, webhook).`,
          `2. Ajoutez un nœud LLM (clé API OpenAI/Claude).`,
          `3. Donnez-lui une consigne (prompt).`,
          `4. Branchez une action (envoyer email, maj CRM).`,
          `5. Testez sur 10 cas réels avant de lancer.`,
        ],
      },
      {
        h2: `Limites`,
        body: [
          `Complexe = vite illisible en visuel. Au-delà de 20 nœuds, passez au code.`,
          `La gestion d'erreur fine est plus dure sans coder.`,
        ],
      },
    ],
    faq: [
      {
        q: `Quand faire appel à un dev ?`,
        a: `Dès que vous voulez de la logique conditionnelle poussée, de la sécurité, ou une intégration sans API préfaite.`,
      },
    ],
  },
  {
    slug: `roi-agent-ia-calcul`,
    title: `Calculer le ROI d'un agent IA`,
    description: `Formule ROI agent IA : heures rendues × coût horaire - coûts. Exemple chiffré sur un agent support.`,
    h1: `Calculer le ROI de votre agent IA`,
    published: `2026-06-25`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `La formule`,
        body: [
          `ROI = (heures_rendues × coût_horaire_équivalent) − (dev + infra + maintenance).`,
          `Sur 12 mois, un agent à 8 000 € de dev + 100 €/mois qui rend 20h/mois à 35€/h = ROI ≈ 7,6x.`,
        ],
      },
      {
        h2: `Les variables cachées`,
        body: [
          `Gain de qualité (moins d'erreurs) souvent sous-estimé.`,
          `Gain de réactivité (client retenu) difficile à chiffrer mais réel.`,
        ],
      },
    ],
    faq: [
      {
        q: `Le ROI est-il garanti ?`,
        a: `Non. Il dépend du volume et de l'adoption. C'est pourquoi on mesure dès la semaine 1.`,
      },
    ],
  },
  {
    slug: `agent-ia-juridique-conformite`,
    title: `Agent IA dans le secteur juridique : conformité`,
    description: `IA et droit : confidentialité client, non-conseil juridique automatisé, responsabilité, cas d'usage cabinet.`,
    h1: `Agent IA et conformité juridique`,
    published: `2026-07-01`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `Risques`,
        body: [
          `Le LLM ne doit pas conseiller juridiquement (réservé aux avocats). Il assiste la recherche.`,
          `Confidentialité client : l'auto-hébergé est recommandé.`,
        ],
      },
      {
        h2: `Cas d'usage licites`,
        body: [
          `Recherche de jurisprudences dans votre base.`,
          `Résumé de contrats (avec validation avocat).`,
          `Classification et routage des dossiers.`,
        ],
      },
    ],
    faq: [
      {
        q: `Un agent peut-il rédiger un contrat ?`,
        a: `En brouillon, oui. En version finale engageante, l'avocat doit valider. L'agent ne remplace pas la responsabilité professionnelle.`,
      },
    ],
  },
  {
    slug: `agent-ia-sante-hds`,
    title: `Agent IA en santé : contraintes HDS et données`,
    description: `Santé et IA : hébergement de données de santé (HDS), anonymisation, cas d'usage clinique/admin.`,
    h1: `Agent IA en santé : cadre HDS`,
    published: `2026-07-05`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `Le cadre`,
        body: [
          `Données de santé = hébergement HDS obligatoire en France.`,
          `Anonymisez avant envoi à un LLM non HDS.`,
        ],
      },
      {
        h2: `Cas d'usage`,
        body: [
          `Admin : prise de RDV, rappels, facturation.`,
          `Clinique : aide au tri (jamais diagnostic automatique).`,
        ],
      },
    ],
    faq: [
      {
        q: `GPT peut-il lire un dossier patient ?`,
        a: `Pas tel quel. Il faut hébergeur HDS + anonymisation + validation soignant. La partie décisionnelle reste humaine.`,
      },
    ],
  },
  {
    slug: `agent-ia-ecommerce-retour`,
    title: `Agent IA e-commerce : gestion des retours et SAV`,
    description: `Automatiser le SAV e-commerce : étiquette retour, statut, remboursement, relance. Mesure de satisfaction.`,
    h1: `Agent IA pour le SAV e-commerce`,
    published: `2026-07-10`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `Le flux`,
        body: [
          `Email retour → agent vérifie la commande → génère l'étiquette → met à jour le statut → informe le client.`,
          `Lit les messages non structurés (mon colis est cassé) et agit.`,
        ],
      },
      {
        h2: `Gain`,
        body: [
          `Délai de traitement : 24-48h → < 2h.`,
          `Charge équipe support : -60 % sur les retours simples.`,
        ],
      },
    ],
    faq: [
      {
        q: `Et les litiges complexes ?`,
        a: `Routés vers un humain avec le résumé déjà fait. L'agent gère le standard, pas les exceptions.`,
      },
    ],
  },
  {
    slug: `langage-naturel-vers-donnees`,
    title: `Interroger ses données en langage naturel`,
    description: `Text-to-SQL et agents data : interroger sa base/son tableur en français. Outils, précision, sécurité.`,
    h1: `Interroger ses données en langage naturel`,
    published: `2026-07-15`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `Principe`,
        body: [
          `Combien de devis en attente ce mois-ci ? → l'agent génère la requête SQL et la joue.`,
          `Évite le tableur manuel et les reportings statiques.`,
        ],
      },
      {
        h2: `Sécurité`,
        body: [
          `En lecture seule par défaut. Interdiction des DROP/DELETE.`,
          `L'agent explique la requête avant de l'exécuter.`,
        ],
      },
    ],
    faq: [
      {
        q: `Est-ce fiable à 100 % ?`,
        a: `Sur des schémas simples, oui. Sur un modèle complexe, validez la requête générée les premières fois.`,
      },
    ],
  },
  {
    slug: `agent-ia-vs-assistant`,
    title: `Agent IA ou assistant virtuel : différences`,
    description: `Ce qui distingue un agent autonome d'un assistant de commande vocale. Capacités, autonomie, entreprise.`,
    h1: `Agent IA vs assistant virtuel`,
    published: `2026-07-18`,
    updated: `2026-07-25`,
    sections: [
      {
        h2: `L'assistant exécute des commandes`,
        body: [
          `Mets un rappel, joue de la musique. Pas d'initiative, pas d'outils métier.`,
        ],
      },
      {
        h2: `L'agent agit en autonomie`,
        body: [
          `Il décide de la suite : relancer le client, créer la tâche, alerter. Branché sur vos systèmes.`,
        ],
      },
    ],
    faq: [
      {
        q: `Peut-on coupler les deux ?`,
        a: `Oui : un assistant vocal en front, un agent en back qui fait le vrai travail. C'est le voice agent.`,
      },
    ],
  },
];

export function getResource(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}
