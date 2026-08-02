// Données géographiques pour le géo-SEO.
// Chaque ville est une landing page statique générée au build via generateStaticParams.
// Le contenu de chaque page est rendu unique (voir generateCityContent) pour
// éviter toute pénalité "duplicate content" : ville, département, région et
// angle sectoriel varient d'une page à l'autre.
//
// `procheDe` (optionnel) pointe vers le slug d'une métropole voisine pour
// l'angle de contenu des petites communes (« à 15 min de Lyon »).

export type City = {
  slug: string;
  // Slug SEO affiché dans l'URL (/villes/developpeur-ia-marseille).
  // `slug` reste la clé interne stable (procheDe, GeoLinks).
  seoSlug: string;
  nom: string;
  departement: string;
  codeDept: string;
  region: string;
  // "metropole" = grande agglomération (enjeux scale/équipes)
  // "ville" = TPE/artisanat/commune (angle local, proximité)
  taille: "metropole" | "ville";
  procheDe?: string;
};

export const CITIES: City[] = [
  // ── Métropoles ──────────────────────────────────────────────
  { slug: "paris", seoSlug: "developpeur-ia-paris", nom: "Paris", departement: "Paris", codeDept: "75", region: "Île-de-France", taille: "metropole" },
  { slug: "lyon", seoSlug: "developpeur-ia-lyon", nom: "Lyon", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "metropole" },
  { slug: "marseille", seoSlug: "developpeur-ia-marseille", nom: "Marseille", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "metropole" },
  { slug: "toulouse", seoSlug: "developpeur-ia-toulouse", nom: "Toulouse", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "metropole" },
  { slug: "nice", seoSlug: "developpeur-ia-nice", nom: "Nice", departement: "Alpes-Maritimes", codeDept: "06", region: "Provence-Alpes-Côte d'Azur", taille: "ville" },
  { slug: "nantes", seoSlug: "developpeur-ia-nantes", nom: "Nantes", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "metropole" },
  { slug: "montpellier", seoSlug: "developpeur-ia-montpellier", nom: "Montpellier", departement: "Hérault", codeDept: "34", region: "Occitanie", taille: "ville" },
  { slug: "strasbourg", seoSlug: "developpeur-ia-strasbourg", nom: "Strasbourg", departement: "Bas-Rhin", codeDept: "67", region: "Grand Est", taille: "metropole" },
  { slug: "bordeaux", seoSlug: "developpeur-ia-bordeaux", nom: "Bordeaux", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "metropole" },
  { slug: "lille", seoSlug: "developpeur-ia-lille", nom: "Lille", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "metropole" },
  { slug: "rennes", seoSlug: "developpeur-ia-rennes", nom: "Rennes", departement: "Ille-et-Vilaine", codeDept: "35", region: "Bretagne", taille: "ville" },
  { slug: "reims", seoSlug: "developpeur-ia-reims", nom: "Reims", departement: "Marne", codeDept: "51", region: "Grand Est", taille: "ville" },
  { slug: "le-havre", seoSlug: "developpeur-ia-le-havre", nom: "Le Havre", departement: "Seine-Maritime", codeDept: "76", region: "Normandie", taille: "ville" },
  { slug: "toulon", seoSlug: "developpeur-ia-toulon", nom: "Toulon", departement: "Var", codeDept: "83", region: "Provence-Alpes-Côte d'Azur", taille: "ville" },
  { slug: "grenoble", seoSlug: "developpeur-ia-grenoble", nom: "Grenoble", departement: "Isère", codeDept: "38", region: "Auvergne-Rhône-Alpes", taille: "ville" },
  { slug: "dijon", seoSlug: "developpeur-ia-dijon", nom: "Dijon", departement: "Côte-d'Or", codeDept: "21", region: "Bourgogne-Franche-Comté", taille: "ville" },
  { slug: "angers", seoSlug: "developpeur-ia-angers", nom: "Angers", departement: "Maine-et-Loire", codeDept: "49", region: "Pays de la Loire", taille: "ville" },
  { slug: "nimes", seoSlug: "developpeur-ia-nimes", nom: "Nîmes", departement: "Gard", codeDept: "30", region: "Occitanie", taille: "ville" },
  { slug: "saint-etienne", seoSlug: "developpeur-ia-saint-etienne", nom: "Saint-Étienne", departement: "Loire", codeDept: "42", region: "Auvergne-Rhône-Alpes", taille: "ville" },
  { slug: "clermont-ferrand", seoSlug: "developpeur-ia-clermont-ferrand", nom: "Clermont-Ferrand", departement: "Puy-de-Dôme", codeDept: "63", region: "Auvergne-Rhône-Alpes", taille: "ville" },
  { slug: "aix-en-provence", seoSlug: "developpeur-ia-aix-en-provence", nom: "Aix-en-Provence", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville" },
  { slug: "rouen", seoSlug: "developpeur-ia-rouen", nom: "Rouen", departement: "Seine-Maritime", codeDept: "76", region: "Normandie", taille: "ville" },
  { slug: "metz", seoSlug: "developpeur-ia-metz", nom: "Metz", departement: "Moselle", codeDept: "57", region: "Grand Est", taille: "ville" },
  { slug: "amiens", seoSlug: "developpeur-ia-amiens", nom: "Amiens", departement: "Somme", codeDept: "80", region: "Hauts-de-France", taille: "ville" },
  { slug: "tours", seoSlug: "developpeur-ia-tours", nom: "Tours", departement: "Indre-et-Loire", codeDept: "37", region: "Centre-Val de Loire", taille: "ville" },
  { slug: "annecy", seoSlug: "developpeur-ia-annecy", nom: "Annecy", departement: "Haute-Savoie", codeDept: "74", region: "Auvergne-Rhône-Alpes", taille: "ville" },
  { slug: "nancy", seoSlug: "developpeur-ia-nancy", nom: "Nancy", departement: "Meurthe-et-Moselle", codeDept: "54", region: "Grand Est", taille: "ville" },
  { slug: "orleans", seoSlug: "developpeur-ia-orleans", nom: "Orléans", departement: "Loiret", codeDept: "45", region: "Centre-Val de Loire", taille: "ville" },
  { slug: "mulhouse", seoSlug: "developpeur-ia-mulhouse", nom: "Mulhouse", departement: "Haut-Rhin", codeDept: "68", region: "Grand Est", taille: "ville" },
  { slug: "caen", seoSlug: "developpeur-ia-caen", nom: "Caen", departement: "Calvados", codeDept: "14", region: "Normandie", taille: "ville" },

  // ── Petites villes autour de Paris (Île-de-France) ──────────
  { slug: "versailles", seoSlug: "developpeur-ia-versailles", nom: "Versailles", departement: "Yvelines", codeDept: "78", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "boulogne-billancourt", seoSlug: "developpeur-ia-boulogne-billancourt", nom: "Boulogne-Billancourt", departement: "Hauts-de-Seine", codeDept: "92", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "nanterre", seoSlug: "developpeur-ia-nanterre", nom: "Nanterre", departement: "Hauts-de-Seine", codeDept: "92", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "saint-denis", seoSlug: "developpeur-ia-saint-denis", nom: "Saint-Denis", departement: "Seine-Saint-Denis", codeDept: "93", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "argenteuil", seoSlug: "developpeur-ia-argenteuil", nom: "Argenteuil", departement: "Val-d'Oise", codeDept: "95", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "montreuil", seoSlug: "developpeur-ia-montreuil", nom: "Montreuil", departement: "Seine-Saint-Denis", codeDept: "93", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "rueil-malmaison", seoSlug: "developpeur-ia-rueil-malmaison", nom: "Rueil-Malmaison", departement: "Hauts-de-Seine", codeDept: "92", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "saint-maur-des-fosses", seoSlug: "developpeur-ia-saint-maur-des-fosses", nom: "Saint-Maur-des-Fossés", departement: "Val-de-Marne", codeDept: "94", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "cergy", seoSlug: "developpeur-ia-cergy", nom: "Cergy", departement: "Val-d'Oise", codeDept: "95", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "massy", seoSlug: "developpeur-ia-massy", nom: "Massy", departement: "Essonne", codeDept: "91", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "saint-ouen", seoSlug: "developpeur-ia-saint-ouen", nom: "Saint-Ouen", departement: "Seine-Saint-Denis", codeDept: "93", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "fontainebleau", seoSlug: "developpeur-ia-fontainebleau", nom: "Fontainebleau", departement: "Seine-et-Marne", codeDept: "77", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "corbeil-essonnes", seoSlug: "developpeur-ia-corbeil-essonnes", nom: "Corbeil-Essonnes", departement: "Essonne", codeDept: "91", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "vert-le-petit", seoSlug: "developpeur-ia-vert-le-petit", nom: "Vert-le-Petit", departement: "Essonne", codeDept: "91", region: "Île-de-France", taille: "ville", procheDe: "paris" },

  // ── Autour de Lyon ──────────────────────────────────────────
  { slug: "villeurbanne", seoSlug: "developpeur-ia-villeurbanne", nom: "Villeurbanne", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "venissieux", seoSlug: "developpeur-ia-venissieux", nom: "Vénissieux", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "bron", seoSlug: "developpeur-ia-bron", nom: "Bron", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "villefranche-sur-saone", seoSlug: "developpeur-ia-villefranche-sur-saone", nom: "Villefranche-sur-Saône", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "caluire-et-cuire", seoSlug: "developpeur-ia-caluire-et-cuire", nom: "Caluire-et-Cuire", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "saint-priest", seoSlug: "developpeur-ia-saint-priest", nom: "Saint-Priest", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "vaulx-en-velin", seoSlug: "developpeur-ia-vaulx-en-velin", nom: "Vaulx-en-Velin", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "ecully", seoSlug: "developpeur-ia-ecully", nom: "Écully", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "decines-charpieu", seoSlug: "developpeur-ia-decines-charpieu", nom: "Décines-Charpieu", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "meyzieu", seoSlug: "developpeur-ia-meyzieu", nom: "Meyzieu", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "oullins", seoSlug: "developpeur-ia-oullins", nom: "Oullins", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "mions", seoSlug: "developpeur-ia-mions", nom: "Mions", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "tassin-la-demi-lune", seoSlug: "developpeur-ia-tassin-la-demi-lune", nom: "Tassin-la-Demi-Lune", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "genas", seoSlug: "developpeur-ia-genas", nom: "Genas", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "brignais", seoSlug: "developpeur-ia-brignais", nom: "Brignais", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },

  // ── Autour de Marseille / Aix ───────────────────────────────
  { slug: "aubagne", seoSlug: "developpeur-ia-aubagne", nom: "Aubagne", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "istres", seoSlug: "developpeur-ia-istres", nom: "Istres", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "martigues", seoSlug: "developpeur-ia-martigues", nom: "Martigues", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "vitrolles", seoSlug: "developpeur-ia-vitrolles", nom: "Vitrolles", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "marignane", seoSlug: "developpeur-ia-marignane", nom: "Marignane", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "la-ciotat", seoSlug: "developpeur-ia-la-ciotat", nom: "La Ciotat", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "allauch", seoSlug: "developpeur-ia-allauch", nom: "Allauch", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "gardanne", seoSlug: "developpeur-ia-gardanne", nom: "Gardanne", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "carnoux-en-provence", seoSlug: "developpeur-ia-carnoux-en-provence", nom: "Carnoux-en-Provence", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "septemes-les-vallons", seoSlug: "developpeur-ia-septemes-les-vallons", nom: "Septèmes-les-Vallons", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "lambesc", seoSlug: "developpeur-ia-lambesc", nom: "Lambesc", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },

  // ── Autour de Toulouse ──────────────────────────────────────
  { slug: "blagnac", seoSlug: "developpeur-ia-blagnac", nom: "Blagnac", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "colomiers", seoSlug: "developpeur-ia-colomiers", nom: "Colomiers", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "tournefeuille", seoSlug: "developpeur-ia-tournefeuille", nom: "Tournefeuille", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "muret", seoSlug: "developpeur-ia-muret", nom: "Muret", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "saint-orens-de-gameville", seoSlug: "developpeur-ia-saint-orens-de-gameville", nom: "Saint-Orens-de-Gameville", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "cugnaux", seoSlug: "developpeur-ia-cugnaux", nom: "Cugnaux", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "balma", seoSlug: "developpeur-ia-balma", nom: "Balma", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "plaisance-du-touch", seoSlug: "developpeur-ia-plaisance-du-touch", nom: "Plaisance-du-Touch", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "labege", seoSlug: "developpeur-ia-labege", nom: "Labège", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "lunion", seoSlug: "developpeur-ia-lunion", nom: "L'Union", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "castanet-tolosan", seoSlug: "developpeur-ia-castanet-tolosan", nom: "Castanet-Tolosan", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "ramonville-saint-agne", seoSlug: "developpeur-ia-ramonville-saint-agne", nom: "Ramonville-Saint-Agne", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },

  // ── Autour de Nantes ────────────────────────────────────────
  { slug: "saint-nazaire", seoSlug: "developpeur-ia-saint-nazaire", nom: "Saint-Nazaire", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },
  { slug: "reze", seoSlug: "developpeur-ia-reze", nom: "Rezé", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },
  { slug: "saint-herblain", seoSlug: "developpeur-ia-saint-herblain", nom: "Saint-Herblain", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },
  { slug: "orvault", seoSlug: "developpeur-ia-orvault", nom: "Orvault", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },
  { slug: "carquefou", seoSlug: "developpeur-ia-carquefou", nom: "Carquefou", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },
  { slug: "saint-sebastien-sur-loire", seoSlug: "developpeur-ia-saint-sebastien-sur-loire", nom: "Saint-Sébastien-sur-Loire", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },
  { slug: "bouguenais", seoSlug: "developpeur-ia-bouguenais", nom: "Bouguenais", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },
  { slug: "sainte-luce-sur-loire", seoSlug: "developpeur-ia-sainte-luce-sur-loire", nom: "Sainte-Luce-sur-Loire", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },
  { slug: "vertou", seoSlug: "developpeur-ia-vertou", nom: "Vertou", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },
  { slug: "coueron", seoSlug: "developpeur-ia-coueron", nom: "Couëron", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },

  // ── Autour de Bordeaux ──────────────────────────────────────
  { slug: "merignac", seoSlug: "developpeur-ia-merignac", nom: "Mérignac", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "pessac", seoSlug: "developpeur-ia-pessac", nom: "Pessac", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "talence", seoSlug: "developpeur-ia-talence", nom: "Talence", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "villenave-dornon", seoSlug: "developpeur-ia-villenave-dornon", nom: "Villenave-d'Ornon", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "begles", seoSlug: "developpeur-ia-begles", nom: "Bègles", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "gradignan", seoSlug: "developpeur-ia-gradignan", nom: "Gradignan", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "le-bouscat", seoSlug: "developpeur-ia-le-bouscat", nom: "Le Bouscat", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "cenon", seoSlug: "developpeur-ia-cenon", nom: "Cenon", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "lormont", seoSlug: "developpeur-ia-lormont", nom: "Lormont", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "saint-medard-en-jalles", seoSlug: "developpeur-ia-saint-medard-en-jalles", nom: "Saint-Médard-en-Jalles", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "eysines", seoSlug: "developpeur-ia-eysines", nom: "Eysines", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },

  // ── Autour de Lille ─────────────────────────────────────────
  { slug: "roubaix", seoSlug: "developpeur-ia-roubaix", nom: "Roubaix", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "tourcoing", seoSlug: "developpeur-ia-tourcoing", nom: "Tourcoing", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "villeneuve-dascq", seoSlug: "developpeur-ia-villeneuve-dascq", nom: "Villeneuve-d'Ascq", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "wattrelos", seoSlug: "developpeur-ia-wattrelos", nom: "Wattrelos", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "marcq-en-baroeul", seoSlug: "developpeur-ia-marcq-en-baroeul", nom: "Marcq-en-Barœul", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "croix", seoSlug: "developpeur-ia-croix", nom: "Croix", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "lambersart", seoSlug: "developpeur-ia-lambersart", nom: "Lambersart", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "loos", seoSlug: "developpeur-ia-loos", nom: "Loos", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "ronchin", seoSlug: "developpeur-ia-ronchin", nom: "Ronchin", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "hem", seoSlug: "developpeur-ia-hem", nom: "Hem", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "wasquehal", seoSlug: "developpeur-ia-wasquehal", nom: "Wasquehal", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },

  // ── Autour de Strasbourg ────────────────────────────────────
  { slug: "schiltigheim", seoSlug: "developpeur-ia-schiltigheim", nom: "Schiltigheim", departement: "Bas-Rhin", codeDept: "67", region: "Grand Est", taille: "ville", procheDe: "strasbourg" },
  { slug: "illkirch-graffenstaden", seoSlug: "developpeur-ia-illkirch-graffenstaden", nom: "Illkirch-Graffenstaden", departement: "Bas-Rhin", codeDept: "67", region: "Grand Est", taille: "ville", procheDe: "strasbourg" },
  { slug: "haguenau", seoSlug: "developpeur-ia-haguenau", nom: "Haguenau", departement: "Bas-Rhin", codeDept: "67", region: "Grand Est", taille: "ville", procheDe: "strasbourg" },
  { slug: "bischheim", seoSlug: "developpeur-ia-bischheim", nom: "Bischheim", departement: "Bas-Rhin", codeDept: "67", region: "Grand Est", taille: "ville", procheDe: "strasbourg" },
  { slug: "lingolsheim", seoSlug: "developpeur-ia-lingolsheim", nom: "Lingolsheim", departement: "Bas-Rhin", codeDept: "67", region: "Grand Est", taille: "ville", procheDe: "strasbourg" },
  { slug: "ostwald", seoSlug: "developpeur-ia-ostwald", nom: "Ostwald", departement: "Bas-Rhin", codeDept: "67", region: "Grand Est", taille: "ville", procheDe: "strasbourg" },
  { slug: "reichstett", seoSlug: "developpeur-ia-reichstett", nom: "Reichstett", departement: "Bas-Rhin", codeDept: "67", region: "Grand Est", taille: "ville", procheDe: "strasbourg" },
  { slug: "brumath", seoSlug: "developpeur-ia-brumath", nom: "Brumath", departement: "Bas-Rhin", codeDept: "67", region: "Grand Est", taille: "ville", procheDe: "strasbourg" },

  // ── Autour de Montpellier ───────────────────────────────────
  { slug: "sete", seoSlug: "developpeur-ia-sete", nom: "Sète", departement: "Hérault", codeDept: "34", region: "Occitanie", taille: "ville", procheDe: "montpellier" },
  { slug: "lunel", seoSlug: "developpeur-ia-lunel", nom: "Lunel", departement: "Hérault", codeDept: "34", region: "Occitanie", taille: "ville", procheDe: "montpellier" },
  { slug: "agde", seoSlug: "developpeur-ia-agde", nom: "Agde", departement: "Hérault", codeDept: "34", region: "Occitanie", taille: "ville", procheDe: "montpellier" },
  { slug: "castelnau-le-lez", seoSlug: "developpeur-ia-castelnau-le-lez", nom: "Castelnau-le-Lez", departement: "Hérault", codeDept: "34", region: "Occitanie", taille: "ville", procheDe: "montpellier" },
  { slug: "lattes", seoSlug: "developpeur-ia-lattes", nom: "Lattes", departement: "Hérault", codeDept: "34", region: "Occitanie", taille: "ville", procheDe: "montpellier" },
  { slug: "mauguio", seoSlug: "developpeur-ia-mauguio", nom: "Mauguio", departement: "Hérault", codeDept: "34", region: "Occitanie", taille: "ville", procheDe: "montpellier" },
  { slug: "le-cres", seoSlug: "developpeur-ia-le-cres", nom: "Le Crès", departement: "Hérault", codeDept: "34", region: "Occitanie", taille: "ville", procheDe: "montpellier" },

  // ── Autour de Rennes ────────────────────────────────────────
  { slug: "saint-malo", seoSlug: "developpeur-ia-saint-malo", nom: "Saint-Malo", departement: "Ille-et-Vilaine", codeDept: "35", region: "Bretagne", taille: "ville", procheDe: "rennes" },
  { slug: "fougeres", seoSlug: "developpeur-ia-fougeres", nom: "Fougères", departement: "Ille-et-Vilaine", codeDept: "35", region: "Bretagne", taille: "ville", procheDe: "rennes" },
  { slug: "vitre", seoSlug: "developpeur-ia-vitre", nom: "Vitré", departement: "Ille-et-Vilaine", codeDept: "35", region: "Bretagne", taille: "ville", procheDe: "rennes" },
  { slug: "cesson-sevigne", seoSlug: "developpeur-ia-cesson-sevigne", nom: "Cesson-Sévigné", departement: "Ille-et-Vilaine", codeDept: "35", region: "Bretagne", taille: "ville", procheDe: "rennes" },
  { slug: "bruz", seoSlug: "developpeur-ia-bruz", nom: "Bruz", departement: "Ille-et-Vilaine", codeDept: "35", region: "Bretagne", taille: "ville", procheDe: "rennes" },
  { slug: "betton", seoSlug: "developpeur-ia-betton", nom: "Betton", departement: "Ille-et-Vilaine", codeDept: "35", region: "Bretagne", taille: "ville", procheDe: "rennes" },
  { slug: "saint-gregoire", seoSlug: "developpeur-ia-saint-gregoire", nom: "Saint-Grégoire", departement: "Ille-et-Vilaine", codeDept: "35", region: "Bretagne", taille: "ville", procheDe: "rennes" },

  // ── Autour de Nice ──────────────────────────────────────────
  { slug: "cannes", seoSlug: "developpeur-ia-cannes", nom: "Cannes", departement: "Alpes-Maritimes", codeDept: "06", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "nice" },
  { slug: "antibes", seoSlug: "developpeur-ia-antibes", nom: "Antibes", departement: "Alpes-Maritimes", codeDept: "06", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "nice" },
  { slug: "cagnes-sur-mer", seoSlug: "developpeur-ia-cagnes-sur-mer", nom: "Cagnes-sur-Mer", departement: "Alpes-Maritimes", codeDept: "06", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "nice" },
  { slug: "grasse", seoSlug: "developpeur-ia-grasse", nom: "Grasse", departement: "Alpes-Maritimes", codeDept: "06", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "nice" },
  { slug: "saint-laurent-du-var", seoSlug: "developpeur-ia-saint-laurent-du-var", nom: "Saint-Laurent-du-Var", departement: "Alpes-Maritimes", codeDept: "06", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "nice" },
  { slug: "menton", seoSlug: "developpeur-ia-menton", nom: "Menton", departement: "Alpes-Maritimes", codeDept: "06", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "nice" },
  { slug: "vence", seoSlug: "developpeur-ia-vence", nom: "Vence", departement: "Alpes-Maritimes", codeDept: "06", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "nice" },
  { slug: "mougins", seoSlug: "developpeur-ia-mougins", nom: "Mougins", departement: "Alpes-Maritimes", codeDept: "06", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "nice" },

  // ── Autour de Grenoble ──────────────────────────────────────
  { slug: "saint-martin-dheres", seoSlug: "developpeur-ia-saint-martin-dheres", nom: "Saint-Martin-d'Hères", departement: "Isère", codeDept: "38", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "grenoble" },
  { slug: "echirolles", seoSlug: "developpeur-ia-echirolles", nom: "Échirolles", departement: "Isère", codeDept: "38", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "grenoble" },
  { slug: "fontaine", seoSlug: "developpeur-ia-fontaine", nom: "Fontaine", departement: "Isère", codeDept: "38", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "grenoble" },
  { slug: "voiron", seoSlug: "developpeur-ia-voiron", nom: "Voiron", departement: "Isère", codeDept: "38", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "grenoble" },
  { slug: "meylan", seoSlug: "developpeur-ia-meylan", nom: "Meylan", departement: "Isère", codeDept: "38", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "grenoble" },
  { slug: "seyssinet-pariset", seoSlug: "developpeur-ia-seyssinet-pariset", nom: "Seyssinet-Pariset", departement: "Isère", codeDept: "38", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "grenoble" },

  // ── Villes moyennes départementales (souvent oubliées) ──────
  { slug: "troyes", seoSlug: "developpeur-ia-troyes", nom: "Troyes", departement: "Aube", codeDept: "10", region: "Grand Est", taille: "ville" },
  { slug: "besancon", seoSlug: "developpeur-ia-besancon", nom: "Besançon", departement: "Doubs", codeDept: "25", region: "Bourgogne-Franche-Comté", taille: "ville" },
  { slug: "limoges", seoSlug: "developpeur-ia-limoges", nom: "Limoges", departement:'Haute-Vienne', codeDept: "87", region: "Nouvelle-Aquitaine", taille: "ville" },
  { slug: "perpignan", seoSlug: "developpeur-ia-perpignan", nom: "Perpignan", departement: "Pyrénées-Orientales", codeDept: "66", region: "Occitanie", taille: "ville" },
  { slug: "bayonne", seoSlug: "developpeur-ia-bayonne", nom: "Bayonne", departement: "Pyrénées-Atlantiques", codeDept: "64", region: "Nouvelle-Aquitaine", taille: "ville" },
  { slug: "biarritz", seoSlug: "developpeur-ia-biarritz", nom: "Biarritz", departement: "Pyrénées-Atlantiques", codeDept: "64", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bayonne" },
  { slug: "pau", seoSlug: "developpeur-ia-pau", nom: "Pau", departement: "Pyrénées-Atlantiques", codeDept: "64", region: "Nouvelle-Aquitaine", taille: "ville" },
  { slug: "la-rochelle", seoSlug: "developpeur-ia-la-rochelle", nom: "La Rochelle", departement: "Charente-Maritime", codeDept: "17", region: "Nouvelle-Aquitaine", taille: "ville" },
  { slug: "chambery", seoSlug: "developpeur-ia-chambery", nom: "Chambéry", departement: "Savoie", codeDept: "73", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "annecy" },
  { slug: "valence", seoSlug: "developpeur-ia-valence", nom: "Valence", departement: "Drôme", codeDept: "26", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "avignon", seoSlug: "developpeur-ia-avignon", nom: "Avignon", departement: "Vaucluse", codeDept: "84", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "arles", seoSlug: "developpeur-ia-arles", nom: "Arles", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "frejus", seoSlug: "developpeur-ia-frejus", nom: "Fréjus", departement: "Var", codeDept: "83", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "toulon" },
  { slug: "hyeres", seoSlug: "developpeur-ia-hyeres", nom: "Hyères", departement: "Var", codeDept: "83", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "toulon" },
  { slug: "dunkerque", seoSlug: "developpeur-ia-dunkerque", nom: "Dunkerque", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "calais", seoSlug: "developpeur-ia-calais", nom: "Calais", departement: "Pas-de-Calais", codeDept: "62", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "arras", seoSlug: "developpeur-ia-arras", nom: "Arras", departement: "Pas-de-Calais", codeDept: "62", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "charleville-mezieres", seoSlug: "developpeur-ia-charleville-mezieres", nom: "Charleville-Mézières", departement: "Ardennes", codeDept: "08", region: "Grand Est", taille: "ville", procheDe: "reims" },
  { slug: "chalons-en-champagne", seoSlug: "developpeur-ia-chalons-en-champagne", nom: "Châlons-en-Champagne", departement: "Marne", codeDept: "51", region: "Grand Est", taille: "ville", procheDe: "reims" },
  { slug: "nevers", seoSlug: "developpeur-ia-nevers", nom: "Nevers", departement: "Nièvre", codeDept: "58", region: "Bourgogne-Franche-Comté", taille: "ville", procheDe: "dijon" },
  { slug: "bourg", seoSlug: "developpeur-ia-bourg", nom: "Bourg-en-Bresse", departement: "Ain", codeDept: "01", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "chartres", seoSlug: "developpeur-ia-chartres", nom: "Chartres", departement: "Eure-et-Loir", codeDept: "28", region: "Centre-Val de Loire", taille: "ville", procheDe: "orleans" },
  { slug: "blois", seoSlug: "developpeur-ia-blois", nom: "Blois", departement: "Loir-et-Cher", codeDept: "41", region: "Centre-Val de Loire", taille: "ville", procheDe: "tours" },
  { slug: "le-mans", seoSlug: "developpeur-ia-le-mans", nom: "Le Mans", departement: "Sarthe", codeDept: "72", region: "Pays de la Loire", taille: "ville", procheDe: "angers" },
  { slug: "poitiers", seoSlug: "developpeur-ia-poitiers", nom: "Poitiers", departement: "Vienne", codeDept: "86", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "la-rochelle" },
  { slug: "niort", seoSlug: "developpeur-ia-niort", nom: "Niort", departement: "Deux-Sèvres", codeDept: "79", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "la-rochelle" },
  { slug: "angouleme", seoSlug: "developpeur-ia-angouleme", nom: "Angoulême", departement: "Charente", codeDept: "16", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "perigueux", seoSlug: "developpeur-ia-perigueux", nom: "Périgueux", departement: "Dordogne", codeDept: "24", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "agen", seoSlug: "developpeur-ia-agen", nom: "Agen", departement: "Lot-et-Garonne", codeDept: "47", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "montauban", seoSlug: "developpeur-ia-montauban", nom: "Montauban", departement: "Tarn-et-Garonne", codeDept: "82", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "albi", seoSlug: "developpeur-ia-albi", nom: "Albi", departement: "Tarn", codeDept: "81", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "rodez", seoSlug: "developpeur-ia-rodez", nom: "Rodez", departement: "Aveyron", codeDept: "12", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "cahors", seoSlug: "developpeur-ia-cahors", nom: "Cahors", departement: "Lot", codeDept: "46", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "brive-la-gaillarde", seoSlug: "developpeur-ia-brive-la-gaillarde", nom: "Brive-la-Gaillarde", departement: "Corrèze", codeDept: "19", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "limoges" },
  { slug: "aurillac", seoSlug: "developpeur-ia-aurillac", nom: "Aurillac", departement: "Cantal", codeDept: "15", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "clermont-ferrand" },
  { slug: "mende", seoSlug: "developpeur-ia-mende", nom: "Mende", departement: "Lozère", codeDept: "48", region: "Occitanie", taille: "ville", procheDe: "montpellier" },
  { slug: "privas", seoSlug: "developpeur-ia-privas", nom: "Privas", departement: "Ardèche", codeDept: "07", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "thonon-les-bains", seoSlug: "developpeur-ia-thonon-les-bains", nom: "Thonon-les-Bains", departement: "Haute-Savoie", codeDept: "74", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "annecy" },
  { slug: "annemasse", seoSlug: "developpeur-ia-annemasse", nom: "Annemasse", departement: "Haute-Savoie", codeDept: "74", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "annecy" },
  { slug: "evian-les-bains", seoSlug: "developpeur-ia-evian-les-bains", nom: "Évian-les-Bains", departement: "Haute-Savoie", codeDept: "74", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "annecy" },
  { slug: "chamonix", seoSlug: "developpeur-ia-chamonix", nom: "Chamonix-Mont-Blanc", departement: "Haute-Savoie", codeDept: "74", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "annecy" },
  { slug: "saintes", seoSlug: "developpeur-ia-saintes", nom: "Saintes", departement: "Charente-Maritime", codeDept: "17", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "la-rochelle" },
  { slug: "dax", seoSlug: "developpeur-ia-dax", nom: "Dax", departement: "Landes", codeDept: "40", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "araches", seoSlug: "developpeur-ia-araches", nom: "Arcachon", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "libourne", seoSlug: "developpeur-ia-libourne", nom: "Libourne", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "millau", seoSlug: "developpeur-ia-millau", nom: "Millau", departement: "Aveyron", codeDept: "12", region: "Occitanie", taille: "ville", procheDe: "montpellier" },
  { slug: "castres", seoSlug: "developpeur-ia-castres", nom: "Castres", departement: "Tarn", codeDept: "81", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "ales", seoSlug: "developpeur-ia-ales", nom: "Alès", departement: "Gard", codeDept: "30", region: "Occitanie", taille: "ville", procheDe: "nimes" },
  { slug: "beziers", seoSlug: "developpeur-ia-beziers", nom: "Béziers", departement: "Hérault", codeDept: "34", region: "Occitanie", taille: "ville", procheDe: "montpellier" },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

// Retourne les villes classées comme "proches" de la ville donnée
// (même métropole de rattachement), hors la ville elle-même.
export function getCitiesByProcheDe(slug: string): City[] {
  const target = getCity(slug);
  if (!target?.procheDe) return [];
  return CITIES.filter(
    (c) => c.procheDe === target.procheDe && c.slug !== slug
  );
}

import { getSectorInfo } from "./city-sectors";

// Génère un contenu de page unique et lisible pour chaque ville.
// Les variants sont sélectionnés par un index dérivé du slug pour que chaque
// page diffère de façon déterministe (même contenu au re-build).
export type CityContent = {
  h1: string;
  intro: string;
  lead: string;
  useCases: { titre: string; detail: string }[];
  secteurs: string[];
  problemes: string[];
  specificite: string;
  method: string;
  closing: string;
  // --- Nouvelles sections à fort volume (SEO) ---
  faq: { q: string; a: string }[];
  stack: { nom: string; usage: string }[];
  comparison: { label: string; freelance: string; agence: string }[];
  process: { etape: string; titre: string; detail: string }[];
  metrics: { value: string; label: string }[];
  useCasesEtendus: { titre: string; avant: string; apres: string }[];
};

const accrochesMetropole = [
  (c: City) =>
    `À ${c.nom}, les équipes qui grandissent sont souvent freinées par leurs propres outils : trop d'onglets, trop de copier-coller entre des logiciels qui ne se parlent pas. Je construis l'agent IA qui fait le pont.`,
  (c: City) =>
    `${c.nom} concentre une densité d'entreprises où chaque heure de saisie manuelle ou de relance oubliée coûte cher. L'agent IA sur mesure est l'outil qui rend ces heures à l'équipe.`,
  (c: City) =>
    `Dans une métropole comme ${c.nom}, la différence se fait sur l'exécution. Un agent IA branché sur vos outils fait tourner vos process en continu, sans recruter.`,
];

const accrochesVille = [
  (c: City) =>
    `À ${c.nom}, les TPE, indépendants et artisans perdent encore trop de temps sur des tâches qui pourraient tourner toutes seules. C'est exactement ce que je viens automatiser.`,
  (c: City) =>
    `Dans le ${c.departement}, beaucoup de structures n'ont ni l'équipe ni le budget pour une solution éditeur. Un agent IA sur mesure, c'est l'alternative qui s'adapte à vous, pas l'inverse.`,
  (c: City) =>
    `${c.nom} et son bassin : je suis le développeur IA qui installe des agents concrets, pas une démo. Vous décrivez le flux, je le rends automatique.`,
  (c: City) =>
    c.procheDe
      ? `À ${c.nom}, à deux pas de ${getCity(c.procheDe)?.nom ?? "la métropole voisine"}, les structures veulent des résultats rapides, pas un projet informatique. Je livre un agent IA qui tourne, documenté, en quelques semaines.`
      : `À ${c.nom}, la question n'est pas "quelle IA" mais "qu'est-ce qui doit partir tout seul". C'est le point de départ de chaque mission.`,
];

const leadsMetropole = [
  (c: City) =>
    `Intervention à distance sur toute la France, avec des points visio réguliers et des déplacements possibles en ${c.region}. Le diagnostic de 20 minutes est gratuit et se fait en visio.`,
  (c: City) =>
    `Basé en France et en travail à distance, je peux intervenir chez vous en ${c.region} comme ailleurs. On démarre par un cadrage court, puis je développe l'agent sur vos outils.`,
];

const leadsVille = [
  (c: City) =>
    `Je travaille à distance depuis la ${c.region}, ce qui me permet d'intervenir rapidement à ${c.nom} sans les frais d'un prestataire parisien. Le diagnostic initial est gratuit et en visio.`,
  (c: City) =>
    `À distance et disponible pour ${c.nom} : vous parlez à la personne qui code, pas à un commercial. On commence par 20 minutes pour cadrer le périmètre et le budget.`,
];

const useCasesGeneriques = (
  c: City,
  seed: number
): { titre: string; detail: string }[] => {
  // Variantes selon la taille de ville + seed -> chaque page a des exemples
  // légèrement différents (anti-doorway).
  const metro = c.taille === "metropole";
  const pool = [
    {
      titre: "Relance et suivi client automatique",
      detail: `Un agent qui relance les devis en attente et met à jour votre CRM pour vos clients de ${c.nom}, sans que vous y pensiez.`,
    },
    {
      titre: "Saisie et report entre outils",
      detail: `Plus besoin de recopier une commande ou un mail dans trois logiciels. L'agent lit, écrit et range à votre place.`,
    },
    {
      titre: "Assistant IA auto-hébergé",
      detail: `Une instance IA qui tourne chez vous, confidentielle, branchée sur vos documents métier, utile pour les structures de ${c.region} soucieuses de leurs données.`,
    },
    {
      titre: "Tri et qualification d'emails entrants",
      detail: `L'agent classe vos messages, détecte les urgences et prépare les réponses types. ${metro ? "Indispensable aux équipes support denses" : "Un gain immédiat pour une TPE sous l'eau"}.`,
    },
    {
      titre: "Génération de fiches produit / contenus",
      detail: `À ${c.nom}, les équipes commerciales gagnent du temps : l'agent produit des fiches, des résumés et des propositions à partir de vos données existantes.`,
    },
    {
      titre: "Reporting et tableaux de bord automatiques",
      detail: `L'agent agrège vos sources et envoie un résumé hebdomadaire, fini le copier-coller du lundi matin.`,
    },
  ];
  // On prend 3 use cases, décalés selon le seed
  const start = seed % pool.length;
  const out = [];
  for (let i = 0; i < 3; i++) out.push(pool[(start + i) % pool.length]);
  return out;
};

const sectorDetails = (
  c: City,
  info: ReturnType<typeof getSectorInfo>
): { titre: string; detail: string }[] => [
  {
    titre: `Agent IA pour le secteur ${info.secteurs[0]} à ${c.nom}`,
    detail: `Dans le ${c.departement}, le ${info.secteurs[0]} domine. J'adapte l'agent à vos process spécifiques plutôt qu'à une solution générique.`,
  },
  {
    titre: `Réponse au problème : ${info.problemes[0]}`,
    detail: `C'est l'un des points qui revient le plus chez les structures de ${c.region}. L'agent IA le prend en charge en continu.`,
  },
];

const methods = [
  (c: City) =>
    `Le déroulé est le même pour chaque client, qu'il soit à ${c.nom} ou ailleurs : 20 minutes de diagnostic gratuit pour cadrer le périmètre, puis développement de l'agent sur vos outils existants, puis livraison documentée. Vous gardez le code et la main.`,
  (c: City) =>
    `Pas de solution miracle pré-emballée. Pour ${c.nom} comme ailleurs, je commence par comprendre le flux qui vous coûte du temps, je le prototypage vite, et on itère jusqu'à ce que l'agent tourne seul. Tout est livré avec la doc.`,
];

const closings = [
  (c: City) =>
    `Vous êtes à ${c.nom} et vous hésitez ? Le plus simple : 20 minutes en visio. On regarde un de vos process ensemble et je vous dis si un agent IA le rend automatique, sans engagement.`,
  (c: City) =>
    `Que vous soyez à ${c.nom} ou ailleurs en ${c.region}, la première étape est la même : un diagnostic gratuit de 20 minutes pour voir ce qu'un agent IA peut prendre en charge chez vous.`,
];

const faqPool = (c: City): { q: string; a: string }[] => [
  {
    q: `Combien coûte un agent IA sur mesure à ${c.nom} ?`,
    a: `Le budget démarre à 3 500 € HT pour un agent simple (un flux automatisé, une intégration). La plupart des missions pour PME de ${c.departement} se situent entre 5 000 € et 15 000 € selon le nombre d'outils connectés et la complexité des règles métier. Le diagnostic gratuit de 20 minutes permet d'estimer précisément avant tout engagement.`,
  },
  {
    q: `Combien de temps faut-il pour livrer un agent IA ?`,
    a: `Un premier agent fonctionnel est livré en 2 à 4 semaines. Les projets plus ambitieux (multi-outils, IA auto-hébergée) prennent 6 à 10 semaines. Tout est livré avec documentation technique, code source et mode opératoire pour que votre équipe de ${c.nom} reste autonome.`,
  },
  {
    q: `L'agent fonctionne-t-il avec mes outils existants ?`,
    a: `Oui. L'agent se connecte à vos outils via API : CRM (HubSpot, Pipedrive), messagerie (Gmail, Outlook), comptabilité, ERP, notaires, outils métier spécifiques. Aucune obligation de changer de stack. Le principe est précisément de brancher l'IA sur ce que vous utilisez déjà à ${c.nom}.`,
  },
  {
    q: `Mes données sont-elles en sécurité ?`,
    a: `Deux options. Soit l'agent tourne sur une infrastructure cloud chiffrée (sous-traitants européens, RGPD). Soit — pour les structures de ${c.region} qui le exigent — je déploie l'IA en auto-hébergement sur votre propre serveur. Aucune donnée ne sort de votre infrastructure. C'est souvent le critère décisif pour le conseil, la finance et la santé.`,
  },
  {
    q: `Intervenez-vous en présentiel à ${c.nom} ?`,
    a: `Le travail se fait principalement à distance (visio, Slack, points hebdo). Des déplacements en ${c.region} sont possibles pour le cadrage initial ou la formation des équipes. Le diagnostic de 20 minutes se fait toujours en visio, gratuitement.`,
  },
  {
    q: `Que se passe-t-il si l'agent tombe en panne ?`,
    a: `Chaque livraison inclut un monitoring (alertes si l'agent s'arrête), une documentation de dépannage, et 30 jours de support inclus. Ensuite, une maintenance mensuelle (200-500 €/mois selon complexité) assure mises à jour et évolutions. Vous gardez le code et pouvez faire intervenir un autre développeur à ${c.nom} à tout moment.`,
  },
  {
    q: `Comment savoir si mon process est automatisable ?`,
    a: `Si une tâche est répétitive, suit des règles prévisibles, et manipule du texte ou des données structurées → elle est automatisable. Le meilleur moyen d'en avoir le cœur net : le diagnostic gratuit. On regarde ensemble un de vos process et je vous dis, sans engagement, si un agent IA peut le prendre en charge et à quelle hauteur.`,
  },
  {
    q: `Quelle différence entre agent IA et simple script d'automatisation ?`,
    a: `Un script suit des règles figées (si X alors Y). Un agent IA comprend le contexte, gère les cas non prévus, rédige des réponses en langage naturel, et apprend de vos retours. Pour une TPE de ${c.nom}, un script Zapier suffit parfois. Pour qualifier un email client ou rédiger une proposition, il faut un agent. Le diagnostic permet de trancher.`,
  },
];

const stackPool = (c: City): { nom: string; usage: string }[] => [
  { nom: "n8n", usage: `Orchestration visuelle des workflows — branchement entre vos outils sans code, idéal pour visualiser le flux avant de l'industrialiser pour vos équipes à ${c.nom}.` },
  { nom: "OpenAI GPT-4 / Anthropic Claude", usage: "Moteurs de langage pour la lecture, la rédaction et la qualification. Choix du modèle selon le cas (coût vs qualité)." },
  { nom: "LangChain / LangGraph", usage: "Framework Python pour orchestrer plusieurs étapes IA (lire → raisonner → agir → vérifier) en toute fiabilité." },
  { nom: "Pinecone / pgvector", usage: "Base de données vectorielle pour la recherche sémantique sur vos documents métier — l'agent retrouve l'info même sans mot-clé exact." },
  { nom: "Supabase / PostgreSQL", usage: "Stockage structuré des données échangées, historique des actions de l'agent, audit RGPD." },
  { nom: "Vercel / OVH", usage: `Hébergement de l'agent et des interfaces. OVH pour les clients de ${c.region} qui exigent un hébergement 100% français.` },
  { nom: "Ollama / vLLM", usage: `Auto-hébergement de modèles open-source (Llama, Mistral) sur votre serveur, zéro fuite de données, pour les structures sensibles du ${c.departement}.` },
  { nom: "Redis", usage: "File d'attente et cache pour absorber les pics de charge (saison touristique, rentrée scolaire, clôture comptable)." },
];

const comparisonPool = (): { label: string; freelance: string; agence: string }[] => [
  { label: "Interlocuteur unique", freelance: "Vous parlez à la personne qui code — pas de téléphone arabe, pas de commercial", agence: "Chef de projet qui relaie au développeur, délais de réponse plus longs" },
  { label: "Coût", freelance: "3 500 – 15 000 € tout compris, pas de marge agence", agence: "8 000 – 30 000 € minimum, structure et marge intégrées" },
  { label: "Délai de livraison", freelance: "2 à 4 semaines pour un premier agent", agence: "6 à 12 semaines, processus interne plus lourd" },
  { label: "Adaptabilité", freelance: "Changement de cap en direct, itérations rapides", agence: "Avenant contractuel pour chaque évol" },
  { label: "Appartenance du code", freelance: "Code source livré, vous êtes propriétaire", agence: "Souvent en SaaS — vous louez, vous ne possédez pas" },
  { label: "Continuité", freelance: "Dépendance à une personne — mitigation via doc + transfert", agence: "Équipe, mais turnover et rotation sur votre compte" },
  { label: "Expertise technique", freelance: "Spécialiste IA qui suit les avancées en continu", agence: "Généralistes répartis sur plusieurs sujets" },
];

const processPool = (c: City): { etape: string; titre: string; detail: string }[] => [
  { etape: "01", titre: "Diagnostic gratuit (20 min)", detail: `Visio. Vous me montrez un de vos process qui vous coûte du temps. J'analyse sa faisabilité en IA, j'estime le gain et le budget. Zéro engagement. C'est le point d'entrée pour toutes les structures de ${c.nom}.` },
  { etape: "02", titre: "Cadrage et périmètre", detail: `On définit précisément ce que l'agent doit faire (et ne pas faire). Je cartographie vos outils, identifie les API disponibles, et rédige un cahier des charges court. Objectif : pas de surprise sur le périmètre ni le budget pour ${c.nom}.` },
  { etape: "03", titre: "Prototype en 1 semaine", detail: `Je construis une première version fonctionnelle sur un sous-ensemble réel de vos données. Vous voyez l'agent tourner sur vos vraies tâches, pas sur une démo générique. C'est souvent l'étape où les équipes de ${c.departement} décident d'accélérer.` },
  { etape: "04", titre: "Développement et intégration", detail: `L'agent est branché sur l'ensemble de vos outils. Gestion des cas limites, monitoring, logs. Tests en conditions réelles sur 1 à 2 semaines avec votre équipe. Ajustements.` },
  { etape: "05", titre: "Livraison et documentation", detail: `Code source, documentation technique, mode opératoire, procédure de dépannage. Formation de votre équipe (1 à 2 h). Vous êtes autonome sur l'agent et son maintien.` },
  { etape: "06", titre: "Support et évolutions", detail: `30 jours de support inclus. Ensuite, maintenance mensuelle optionnelle : mises à jour, nouvelles intégrations, évolutions selon vos retours terrain à ${c.nom}.` },
];

const metricsPool = (c: City): { value: string; label: string }[] => [
  { value: "2-4 sem.", label: `Délai de livraison d'un premier agent fonctionnel à ${c.nom}` },
  { value: "70-90%", label: "Tâches répétitives absorbées par l'agent une fois en production" },
  { value: "3 500 €", label: "Budget d'entrée pour un agent IA simple, code inclus" },
  { value: "20 min", label: "Diagnostic gratuit, sans engagement, en visio" },
  { value: "100%", label: "Code source livré — vous êtes propriétaire de l'agent" },
  { value: "30 j", label: "Support inclus après livraison" },
];

const useCasesEtendusPool = (
  c: City,
  info: ReturnType<typeof getSectorInfo>
): { titre: string; avant: string; apres: string }[] => {
  const metro = c.taille === "metropole";
  return [
    {
      titre: `Qualification automatique des demandes entrantes`,
      avant: `Chaque email ou message qui arrive doit être lu, trié, catégorisé et assigné à la main. À ${c.nom}, ${metro ? "les équipes support sont sous l'eau" : "la personne en charge cumule déjà 3 rôles"}. Les urgences se noient dans le volume.`,
      apres: `L'agent lit chaque message entrant, détecte l'intention, la priorité, le client concerné, et route vers la bonne file — avec un brouillon de réponse pré-rempli. Votre équipe ne traite plus que les cas qui demandent un humain.`,
    },
    {
      titre: `Reporting hebdomadaire sans copier-coller`,
      avant: `Chaque lundi, quelqu'un exporte de 3 à 5 outils, recopie dans un tableur, met en forme, envoie. À ${c.nom}, ce ritual coûte 2 à 4 heures par semaine à une personne qualifiée.`,
      apres: `L'agent agrège les données de vos sources toutes les nuits, génère le rapport au format voulu, et l'envoie à 8h du matin. Vous arrivez lundi avec le chiffre prêt.`,
    },
    {
      titre: `Relances commerciales qui ne s'oublient pas`,
      avant: `Les devis envoyés à ${c.nom} attendent une relance que personne n'a le temps de faire systématiquement. 20 à 40% des opportunités meurent par inertie.`,
      apres: `L'agent surveille les devis en attente, relance au bon moment selon le canal (email, SMS), adapte le message au stade, et met à jour le CRM. Taux de transformation en hausse mécanique.`,
    },
    {
      titre: `Assistant interne sur vos documents métier`,
      avant: `Vos équipes de ${c.departement} perdent du temps à chercher la bonne info dans vos documents, procédures, contrats types. Chaque nouvel arrivant pose les mêmes questions.`,
      apres: `L'agent indexe l'ensemble de vos documents et répond en langage naturel aux questions internes ("quel est le process pour X ?", "où trouve-je le modèle Y ?"). Onboarding accéléré, autonomie accrue.`,
    },
    {
      titre: `Cas spécifique au secteur ${info.secteurs[0]}`,
      avant: `Dans le ${info.secteurs[0]} à ${c.nom}, ${info.problemes[0].toLowerCase()}.`,
      apres: `Un agent dédié absorbe ce problème en continu, sans recruter ni déléguer. Le secteur ${info.secteurs[0]} de ${c.region} dispose enfin d'un outil taillé pour son rythme.`,
    },
  ];
};

function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length];
}

function seedFrom(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

export function generateCityContent(city: City): CityContent {
  const s = seedFrom(city.slug);
  const accroches = city.taille === "metropole" ? accrochesMetropole : accrochesVille;
  const leads = city.taille === "metropole" ? leadsMetropole : leadsVille;
  const info = getSectorInfo(city.region);

  const useCases = [
    ...useCasesGeneriques(city, s),
    ...sectorDetails(city, info),
  ];

  return {
    h1: `Développeur IA à ${city.nom}`,
    intro: pick(accroches, s)(city),
    lead: pick(leads, s >>> 2)(city),
    useCases,
    secteurs: info.secteurs,
    problemes: info.problemes,
    // Le profil régional décrit un territoire, pas une grande ville : appliqué
    // tel quel, Lyon héritait de « TPE de montagne ». Les métropoles reçoivent
    // donc une formulation qui leur correspond.
    specificite:
      city.taille === "metropole"
        ? `pôle économique majeur de la région, avec un tissu dense de PME et d'ETI en ${info.secteurs.slice(0, 3).join(", ")}`
        : info.specificite,
    method: pick(methods, s >>> 4)(city),
    closing: pick(closings, s >>> 6)(city),
    faq: faqPool(city),
    stack: stackPool(city),
    comparison: comparisonPool(),
    process: processPool(city),
    metrics: metricsPool(city),
    useCasesEtendus: useCasesEtendusPool(city, info),
  };
}
