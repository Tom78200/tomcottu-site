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
    `${c.nom} concentre un tissu dense de PME, d'indépendants et de prestataires de services. Pour beaucoup, le site internet est la première chose que voit un client avant d'appeler. Je le prends par ce bout-là : un site sur mesure, construit pour être trouvé par ceux qui vous cherchent, et qui continue de travailler une fois la visite terminée.`,
  (c: City) =>
    `À ${c.nom}, vos clients comparent deux ou trois sites avant de décrocher leur téléphone. Je construis un site qui tient la comparaison : rapide, lisible sur mobile, et structuré pour le référencement local dès la conception plutôt qu'après coup.`,
  (c: City) =>
    `Dans une métropole comme ${c.nom}, un site qui se contente d'exister ne suffit plus. Je construis des sites sur mesure qui ramènent des demandes, et je les branche sur vos outils pour que ces demandes ne dorment pas trois jours dans une boîte mail.`,
];

const accrochesVille = [
  (c: City) =>
    `À ${c.nom}, beaucoup de TPE et d'artisans travaillent avec un site vieillissant, ou sans site du tout. C'est pourtant la première chose que regarde un client avant d'appeler. Je construis des sites sur mesure, pensés pour le référencement local dès la conception.`,
  (c: City) =>
    `Dans le ${c.departement}, un modèle tout fait revient vite plus cher qu'un site sur mesure : un abonnement à vie, des pages lourdes, et presque aucune prise sur le référencement. Je construis un site qui vous appartient vraiment, code source compris.`,
  (c: City) =>
    `${c.nom} et son bassin : je construis des sites qui se trouvent et qui ramènent des demandes, pas des vitrines qui dorment. Et je peux les brancher sur vos outils pour que ces demandes arrivent au bon endroit.`,
  (c: City) =>
    c.procheDe
      ? `À ${c.nom}, à deux pas de ${getCity(c.procheDe)?.nom ?? "la métropole voisine"}, les structures veulent un site qui tourne, pas un projet informatique. Maquette validée avant la première ligne de code, mise en ligne en quelques semaines.`
      : `À ${c.nom}, la question n'est pas "quel outil" mais "qui doit trouver ce site, et pour y faire quoi". C'est le point de départ de chaque projet.`,
];

const leadsMetropole = [
  (c: City) =>
    `Intervention à distance sur toute la France, avec des points visio réguliers et des déplacements possibles en ${c.region}. Le diagnostic de 20 minutes est gratuit et se fait en visio.`,
  (c: City) =>
    `Basé en France et en travail à distance, je peux intervenir chez vous en ${c.region} comme ailleurs. On démarre par un cadrage court, puis vous validez une maquette avant que le site soit construit.`,
];

const leadsVille = [
  (c: City) =>
    `Je travaille à distance, ce qui me permet d'intervenir à ${c.nom} sans les frais de structure d'une agence. Le diagnostic initial est gratuit et se fait en visio.`,
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
    `Le déroulé est le même pour chaque client, qu'il soit à ${c.nom} ou ailleurs : 20 minutes de diagnostic gratuit pour cadrer le périmètre, une maquette validée avant la première ligne de code, puis le développement et la mise en ligne. Vous gardez le code source et la main sur vos contenus.`,
  (c: City) =>
    `Pas de modèle recyclé d'un client à l'autre. Pour ${c.nom} comme ailleurs, je pars de votre activité et de ce que vos clients cherchent réellement, je maquette, et on ajuste à ce stade, où les allers-retours ne coûtent rien. Tout est livré documenté.`,
];

const closings = [
  (c: City) =>
    `Vous êtes à ${c.nom} et vous hésitez ? Le plus simple : 20 minutes en visio. Vous me montrez votre site actuel ou vous me décrivez votre projet, et je vous dis ce qui est faisable, à quel budget et dans quel délai.`,
  (c: City) =>
    `Que vous soyez à ${c.nom} ou ailleurs en ${c.region}, la première étape est la même : un diagnostic gratuit de 20 minutes pour cadrer votre projet de site, sans engagement.`,
];

const faqPool = (c: City): { q: string; a: string }[] => [
  {
    q: `Combien coûte un site internet à ${c.nom} ?`,
    a: `Le budget dépend de trois choses : le nombre de pages, les fonctionnalités attendues, et le fait que vous fournissiez ou non les textes et les photos. Un site vitrine de quelques pages se situe dans le bas de la fourchette. Un site e-commerce monte selon le nombre de références et les règles de livraison. Une refonte se chiffre après avoir regardé l'existant, parce que le travail varie énormément selon ce qui peut être conservé. Le diagnostic gratuit de 20 minutes sert précisément à donner un chiffre avant tout engagement, plutôt qu'une fourchette large qui ne vous avance à rien.`,
  },
  {
    q: `Combien de temps faut-il pour créer un site ?`,
    a: `Comptez deux à quatre semaines pour un site vitrine, davantage pour un e-commerce ou une refonte avec reprise de contenus existants. Le délai dépend surtout de la vitesse à laquelle les textes et les photos sont fournis. C'est le point qui décale le plus souvent les projets, à ${c.nom} comme ailleurs.`,
  },
  {
    q: `Qui rédige les contenus ?`,
    a: `Vous, si vous le souhaitez, et je vous donne la structure à remplir page par page. Ou moi, en supplément, après un entretien pour capter votre façon de parler de votre métier. Les textes écrits par le dirigeant sonnent souvent plus juste que ceux d'un rédacteur extérieur, à condition d'avoir un cadre.`,
  },
  {
    q: `Le site m'appartient-il vraiment ?`,
    a: `Oui. Vous recevez le code source, la documentation technique et les accès. Vous pouvez faire intervenir un autre développeur à ${c.nom} à tout moment, sans rien renégocier. C'est la différence avec une plateforme en abonnement, où l'arrêt du paiement met le site hors ligne.`,
  },
  {
    q: `Puis-je modifier mes contenus moi-même ?`,
    a: `Oui. Vous recevez un mode opératoire et une formation d'une à deux heures. Les modifications courantes, textes, photos, horaires, tarifs, se font sans développeur et sans surcoût.`,
  },
  {
    q: `Travaillez-vous à distance ou sur place à ${c.nom} ?`,
    a: `Principalement à distance, en visio et par messagerie, avec des points réguliers. Des déplacements en ${c.region} sont possibles pour le cadrage initial ou la formation. Le diagnostic de 20 minutes se fait toujours en visio, gratuitement.`,
  },
  {
    q: `Que se passe-t-il après la mise en ligne ?`,
    a: `Trente jours de support sont inclus. Ensuite, une maintenance mensuelle optionnelle couvre les mises à jour de sécurité, les sauvegardes et les évolutions selon vos retours terrain. Sans elle, le site continue de fonctionner, mais vous prenez en charge son entretien.`,
  },
  {
    q: `Mon site actuel est ancien, faut-il tout refaire ?`,
    a: `Pas nécessairement. On regarde d'abord ce qui peut être conservé : les contenus qui se positionnent déjà, les adresses de pages qui reçoivent des visites. Une refonte mal préparée fait perdre des positions acquises, et c'est le principal risque du chantier.`,
  },
];

const stackPool = (c: City): { nom: string; usage: string }[] => [
  { nom: "Next.js / React", usage: `Le socle du site. Des pages légères, qui s'affichent vite et que les moteurs lisent sans difficulté, sans la surcharge des constructeurs visuels génériques.` },
  { nom: "Tailwind CSS", usage: "Mise en page sur mesure, adaptée à votre activité plutôt qu'à un modèle partagé par mille autres entreprises. Rendu tenu sur mobile, tablette et ordinateur." },
  { nom: "Vercel / OVH", usage: `Hébergement du site. OVH pour les structures de ${c.region} qui exigent un hébergement 100% français.` },
  { nom: "Supabase / PostgreSQL", usage: "Stockage structuré des demandes reçues via le site, historique des échanges et traçabilité pour le RGPD." },
  { nom: "Stripe", usage: "Paiement en ligne pour les sites e-commerce : encaissement, remboursements et abonnements, sans stocker de données bancaires chez vous." },
  { nom: "n8n", usage: `Orchestration visuelle des flux entre le site et vos logiciels métier. Vous voyez comment circule l'information avant de l'industrialiser pour vos équipes à ${c.nom}.` },
  { nom: "OpenAI / Anthropic Claude", usage: "Traitements automatiques de texte quand le site en a besoin : tri des demandes entrantes, brouillons de réponse. Moteur choisi au cas par cas selon le rapport coût-qualité." },
  { nom: "Ollama / vLLM", usage: `Auto-hébergement de modèles open source sur votre propre serveur, sans qu'aucune donnée ne sorte de chez vous. Pour les structures sensibles du ${c.departement}.` },
];

const comparisonPool = (): { label: string; freelance: string; agence: string }[] => [
  { label: "Propriété du site", freelance: "Code source livré, vous êtes propriétaire", agence: "Vous louez une plateforme : l'abonnement s'arrête, le site disparaît" },
  { label: "Coût récurrent", freelance: "L'hébergement seul, la maintenance reste optionnelle", agence: "Un abonnement mensuel à vie, indispensable au fonctionnement" },
  { label: "Vitesse d'affichage", freelance: "Seul ce dont votre site a besoin est chargé", agence: "Des fonctionnalités jamais utilisées chargées à chaque visite" },
  { label: "Référencement", freelance: "Titres, adresses de pages et données structurées pensés dès la conception", agence: "Réglages limités à ce que la plateforme accepte d'exposer" },
  { label: "Mise en page", freelance: "Chaque page construite pour un besoin réel de votre activité", agence: "Contrainte par le modèle choisi et ses blocs disponibles" },
  { label: "Changer de prestataire", freelance: "Possible à tout moment, le code est à vous", agence: "Migration lourde, contenus à ressortir page par page" },
  { label: "Interlocuteur", freelance: "Vous parlez à la personne qui code", agence: "Support générique par formulaire, sans connaître votre projet" },
];

const processPool = (c: City): { etape: string; titre: string; detail: string }[] => [
  { etape: "01", titre: "Diagnostic gratuit (20 min)", detail: `En visio. Vous me montrez votre site actuel ou vous me décrivez votre projet. J'analyse ce qui est faisable, j'estime le budget et le délai. Aucun engagement. C'est le point d'entrée pour toutes les structures de ${c.nom}.` },
  { etape: "02", titre: "Cadrage et périmètre", detail: `On définit précisément ce que le site doit faire, et ce qu'il ne fera pas. Je cartographie vos outils existants, j'identifie ce qu'il faut connecter, et je rédige un cahier des charges court. Objectif : pas de surprise sur le périmètre ni sur le budget pour ${c.nom}.` },
  { etape: "03", titre: "Maquette et validation", detail: `Vous voyez à quoi ressemblera le site avant qu'une ligne de code soit écrite. Les allers-retours se font à ce stade, où ils ne coûtent rien, plutôt qu'en fin de projet.` },
  { etape: "04", titre: "Développement et intégration", detail: `Le site est construit, vos contenus sont intégrés, les connexions à vos outils sont mises en place. Tests sur mobile, sur tablette et sur ordinateur, et vérification des temps de chargement en conditions réelles.` },
  { etape: "05", titre: "Mise en ligne et documentation", detail: `Code source, documentation technique, mode opératoire pour modifier vos contenus vous-même. Formation de votre équipe, une à deux heures. Vous êtes autonome sur votre site.` },
  { etape: "06", titre: "Support et évolutions", detail: `Trente jours de support inclus après la mise en ligne. Ensuite, une maintenance mensuelle optionnelle couvre les mises à jour, les correctifs de sécurité et les évolutions selon vos retours terrain à ${c.nom}.` },
];

const metricsPool = (c: City): { value: string; label: string }[] => [
  { value: "2-4 sem.", label: `Délai indicatif pour un site vitrine à ${c.nom}` },
  { value: "3", label: "Supports vérifiés avant la mise en ligne : mobile, tablette, ordinateur" },
  { value: "1-2 h", label: "Formation pour gérer vos contenus vous-même, sans développeur" },
  { value: "20 min", label: "Diagnostic gratuit, sans engagement, en visio" },
  { value: "100%", label: "Code source livré, vous êtes propriétaire du site" },
  { value: "30 j", label: "Support inclus après la mise en ligne" },
];

const useCasesEtendusPool = (
  c: City,
  info: ReturnType<typeof getSectorInfo>
): { titre: string; avant: string; apres: string }[] => {
  const metro = c.taille === "metropole";
  return [
    {
      titre: `Qualification automatique des demandes du site`,
      avant: `Chaque message reçu via le formulaire doit être lu, trié et assigné à la main. À ${c.nom}, ${metro ? "les équipes support sont souvent sous l'eau en pleine saison" : "la personne en charge cumule déjà trois rôles"}. Les urgences se noient dans le volume.`,
      apres: `Chaque message est lu, son intention et sa priorité sont détectées, il est dirigé vers la bonne personne avec un brouillon de réponse déjà préparé. Votre équipe ne traite plus que ce qui demande vraiment un humain.`,
    },
    {
      titre: `Relances qui ne s'oublient pas`,
      avant: `Les devis envoyés à ${c.nom} attendent une relance que personne n'a le temps de faire systématiquement. Une part des opportunités meurt par inertie, sans qu'on sache laquelle.`,
      apres: `La relance part au bon moment, sur le bon canal, avec un message adapté au stade de la discussion. Rien ne repose plus sur le fait d'y penser un mardi soir.`,
    },
    {
      titre: `Reporting sans copier-coller`,
      avant: `Chaque lundi, quelqu'un exporte depuis trois ou quatre outils, recopie dans un tableur, met en forme, envoie. À ${c.nom}, ce rituel occupe une personne qualifiée plusieurs heures par semaine.`,
      apres: `Les données de vos outils sont agrégées chaque nuit et le rapport arrive le matin, prêt. Vous démarrez la semaine avec le chiffre sous les yeux.`,
    },
    {
      titre: `Assistant sur vos documents internes`,
      avant: `Vos équipes du ${c.departement} cherchent la bonne information dans les procédures, les contrats types et les modes opératoires. Chaque nouvel arrivant pose dix fois les mêmes questions.`,
      apres: `Vos documents deviennent interrogeables en langage naturel : "quelle est la procédure pour X ?", "où se trouve le modèle Y ?". Les arrivées se passent sans monopoliser quelqu'un.`,
    },
    {
      titre: `Cas spécifique au secteur ${info.secteurs[0]}`,
      avant: `Dans le ${info.secteurs[0]} à ${c.nom}, ${info.problemes[0].toLowerCase()}.`,
      apres: `Le site est branché sur vos outils pour absorber ce point en continu, sans recruter ni déléguer. Le secteur ${info.secteurs[0]} de ${c.region} dispose d'un outil taillé pour son rythme.`,
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
    h1: `Création de site internet à ${city.nom}`,
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
