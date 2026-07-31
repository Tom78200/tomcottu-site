// Secteurs économiques dominants + problématiques spécifiques par région.
// Sert à rendre chaque page ville unique (anti-doorway) : on injecte
// des secteurs réels et des problèmes locaux concrets dans le contenu.

export type SectorInfo = {
  // 3-4 secteurs économiques dominants de la région
  secteurs: string[];
  // 2-3 problèmes métier typiques de la région
  problemes: string[];
  // Une spécificité locale court (ex. "bourgade touristique", "pôle aéro")
  specificite: string;
};

// Clé = région telle que dans cities.ts
export const REGION_SECTORS: Record<string, SectorInfo> = {
  "Île-de-France": {
    secteurs: ["finance", "tech", "luxe", "conseil"],
    problemes: [
      "Volumes de tickets support énormes malgré des équipes déjà chargées",
      "Besoin de confidentialité fort (données clients sensibles)",
      "Process métier fragmented entre trop d'outils internes",
    ],
    specificite: "bassin le plus dense et concurrentiel de France",
  },
  "Auvergne-Rhône-Alpes": {
    secteurs: ["industrie", "tech", "agroalimentaire", "tourisme montagne"],
    problemes: [
      "Usines et ETI avec saisie qualité / production encore manuelle",
      "Saisonnalité forte (stations) qui crée des pics d'activité",
      "Artisanat et TPE peu outillés numériquement",
    ],
    specificite: "mix industrie lourde et TPE de montagne",
  },
  "Provence-Alpes-Côte d'Azur": {
    secteurs: ["tourisme", "luxury", "immobilier", "services"],
    problemes: [
      "Saison touristique courte et intense (gestion demandes pic)",
      "Agences immobilières submergées de demandes été",
      "Prestataires luxe exigeant un service personnalisé à l'échelle",
    ],
    specificite: "économie très saisonnière tourisme + immobilier",
  },
  Occitanie: {
    secteurs: ["aéronautique", "agroalimentaire", "tech", "tourisme"],
    problemes: [
      "Pôle aéro (Toulouse) avec grands groupes et sous-traitants",
      "TPE viticoles / agro peu digitalisées",
      "Talents tech partis de Paris mais besoin de proximité",
    ],
    specificite: "pôle aéronautique de Toulouse + vignobles",
  },
  "Pays de la Loire": {
    secteurs: ["industrie", "agroalimentaire", "logistique", "nautisme"],
    problemes: [
      "Industrie agro et logistique avec reporting encore papier",
      "PME familiales peu habituées à l'IA",
      "Saisonnalité nautisme / tourisme littoral",
    ],
    specificite: "bassin industriel agro + littoral atlantique",
  },
  Bretagne: {
    secteurs: ["agroalimentaire", "marine", "tech", "tourisme"],
    problemes: [
      "Coopératives agro avec process saisonniers lourds",
      "TPE artisanales peu outillées",
      "Éloignement perçu des grands pôles tech",
    ],
    specificite: "agroalimentaire coopératif très présent",
  },
  "Nouvelle-Aquitaine": {
    secteurs: ["vin", "aéronautique", "tourisme", "bois"],
    problemes: [
      "Vignobles et châteaux avec relation client à haute valeur",
      "Industrie aéro (Bordeaux) en sous-traitance",
      "TPE du bois / artisanat peu digitalisées",
    ],
    specificite: "vignobles + industrie aéro bordelaise",
  },
  "Hauts-de-France": {
    secteurs: ["industrie", "logistique", "retail", "transport"],
    problemes: [
      "Logistique et retail avec gros volumes répétitifs",
      "Industrie textile / métallurgie en reconversion",
      "Taux de digitalisation encore faible dans l'artisanat",
    ],
    specificite: "bassin industriel et logistique nordique",
  },
  "Grand Est": {
    secteurs: ["industrie", "viticulture", "agroalimentaire", "frontière"],
    problemes: [
      "Industrie frontalière (Allemagne/Suisse) multilingue",
      "Vignobles (Alsace, Champagne) à forte valeur",
      "ETI manufacturières avec process qualité lourds",
    ],
    specificite: "industrie frontalière + vignobles alsaciens/champenois",
  },
  "Normandie": {
    secteurs: ["agroalimentaire", "ports", "énergie", "tourisme"],
    problemes: [
      "Ports et logistique avec planning complexe",
      "Agro laitière avec traçabilité réglementée",
      "TPE littorales saisonnières",
    ],
    specificite: "porte océane (Le Havre) + agro laitière",
  },
  "Bourgogne-Franche-Comté": {
    secteurs: ["viticulture", "industrie", "bois", "tourisme"],
    problemes: [
      "Grands crus avec relation client d'exception",
      "Sous-traitance automobile/métallurgie",
      "TPE peu outillées malgré fort potentiel",
    ],
    specificite: "vignobles bourguignons + sous-traitance auto",
  },
  "Centre-Val de Loire": {
    secteurs: ["industrie", "agroalimentaire", "tourisme", "logistique"],
    problemes: [
      "Industrie de la défense et aéro (région Orléans/Tours)",
      "TPE artisanales peu digitalisées",
      "Tourisme châteaux à fort enjeu relationnel",
    ],
    specificite: "entre-deux métropoles parisienne et atlantique",
  },
  "Corse": {
    secteurs: ["tourisme", "services", "artisanat"],
    problemes: [
      "Saison ultra-courte et intense (été)",
      "TPE isolées peu outillées",
      "Relation client directe très personnalisée attendue",
    ],
    specificite: "île à très forte saisonnalité",
  },
};

// Fallback pour région non listée
export const DEFAULT_SECTOR: SectorInfo = {
  secteurs: ["PME", "services", "artisanat", "commerce"],
  problemes: [
    "Saisie manuelle répétitive entre plusieurs logiciels",
    "Relances commerciales oubliées faute de temps",
    "Peu de ressources dédiées à la digitalisation",
  ],
  specificite: "tissu de PME et TPE diversifié",
};

export function getSectorInfo(region: string): SectorInfo {
  return REGION_SECTORS[region] ?? DEFAULT_SECTOR;
}
