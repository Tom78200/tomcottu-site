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
  { slug: "paris", nom: "Paris", departement: "Paris", codeDept: "75", region: "Île-de-France", taille: "metropole" },
  { slug: "lyon", nom: "Lyon", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "metropole" },
  { slug: "marseille", nom: "Marseille", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "metropole" },
  { slug: "toulouse", nom: "Toulouse", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "metropole" },
  { slug: "nice", nom: "Nice", departement: "Alpes-Maritimes", codeDept: "06", region: "Provence-Alpes-Côte d'Azur", taille: "ville" },
  { slug: "nantes", nom: "Nantes", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "metropole" },
  { slug: "montpellier", nom: "Montpellier", departement: "Hérault", codeDept: "34", region: "Occitanie", taille: "ville" },
  { slug: "strasbourg", nom: "Strasbourg", departement: "Bas-Rhin", codeDept: "67", region: "Grand Est", taille: "metropole" },
  { slug: "bordeaux", nom: "Bordeaux", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "metropole" },
  { slug: "lille", nom: "Lille", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "metropole" },
  { slug: "rennes", nom: "Rennes", departement: "Ille-et-Vilaine", codeDept: "35", region: "Bretagne", taille: "ville" },
  { slug: "reims", nom: "Reims", departement: "Marne", codeDept: "51", region: "Grand Est", taille: "ville" },
  { slug: "le-havre", nom: "Le Havre", departement: "Seine-Maritime", codeDept: "76", region: "Normandie", taille: "ville" },
  { slug: "toulon", nom: "Toulon", departement: "Var", codeDept: "83", region: "Provence-Alpes-Côte d'Azur", taille: "ville" },
  { slug: "grenoble", nom: "Grenoble", departement: "Isère", codeDept: "38", region: "Auvergne-Rhône-Alpes", taille: "ville" },
  { slug: "dijon", nom: "Dijon", departement: "Côte-d'Or", codeDept: "21", region: "Bourgogne-Franche-Comté", taille: "ville" },
  { slug: "angers", nom: "Angers", departement: "Maine-et-Loire", codeDept: "49", region: "Pays de la Loire", taille: "ville" },
  { slug: "nimes", nom: "Nîmes", departement: "Gard", codeDept: "30", region: "Occitanie", taille: "ville" },
  { slug: "saint-etienne", nom: "Saint-Étienne", departement: "Loire", codeDept: "42", region: "Auvergne-Rhône-Alpes", taille: "ville" },
  { slug: "clermont-ferrand", nom: "Clermont-Ferrand", departement: "Puy-de-Dôme", codeDept: "63", region: "Auvergne-Rhône-Alpes", taille: "ville" },
  { slug: "aix-en-provence", nom: "Aix-en-Provence", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville" },
  { slug: "rouen", nom: "Rouen", departement: "Seine-Maritime", codeDept: "76", region: "Normandie", taille: "ville" },
  { slug: "metz", nom: "Metz", departement: "Moselle", codeDept: "57", region: "Grand Est", taille: "ville" },
  { slug: "amiens", nom: "Amiens", departement: "Somme", codeDept: "80", region: "Hauts-de-France", taille: "ville" },
  { slug: "tours", nom: "Tours", departement: "Indre-et-Loire", codeDept: "37", region: "Centre-Val de Loire", taille: "ville" },
  { slug: "annecy", nom: "Annecy", departement: "Haute-Savoie", codeDept: "74", region: "Auvergne-Rhône-Alpes", taille: "ville" },
  { slug: "nancy", nom: "Nancy", departement: "Meurthe-et-Moselle", codeDept: "54", region: "Grand Est", taille: "ville" },
  { slug: "orleans", nom: "Orléans", departement: "Loiret", codeDept: "45", region: "Centre-Val de Loire", taille: "ville" },
  { slug: "mulhouse", nom: "Mulhouse", departement: "Haut-Rhin", codeDept: "68", region: "Grand Est", taille: "ville" },
  { slug: "caen", nom: "Caen", departement: "Calvados", codeDept: "14", region: "Normandie", taille: "ville" },

  // ── Petites villes autour de Paris (Île-de-France) ──────────
  { slug: "versailles", nom: "Versailles", departement: "Yvelines", codeDept: "78", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "boulogne-billancourt", nom: "Boulogne-Billancourt", departement: "Hauts-de-Seine", codeDept: "92", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "nanterre", nom: "Nanterre", departement: "Hauts-de-Seine", codeDept: "92", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "saint-denis", nom: "Saint-Denis", departement: "Seine-Saint-Denis", codeDept: "93", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "argenteuil", nom: "Argenteuil", departement: "Val-d'Oise", codeDept: "95", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "montreuil", nom: "Montreuil", departement: "Seine-Saint-Denis", codeDept: "93", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "rueil-malmaison", nom: "Rueil-Malmaison", departement: "Hauts-de-Seine", codeDept: "92", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "saint-maur-des-fosses", nom: "Saint-Maur-des-Fossés", departement: "Val-de-Marne", codeDept: "94", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "cergy", nom: "Cergy", departement: "Val-d'Oise", codeDept: "95", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "massy", nom: "Massy", departement: "Essonne", codeDept: "91", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "saint-ouen", nom: "Saint-Ouen", departement: "Seine-Saint-Denis", codeDept: "93", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "fontainebleau", nom: "Fontainebleau", departement: "Seine-et-Marne", codeDept: "77", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "corbeil-essonnes", nom: "Corbeil-Essonnes", departement: "Essonne", codeDept: "91", region: "Île-de-France", taille: "ville", procheDe: "paris" },
  { slug: "vert-le-petit", nom: "Vert-le-Petit", departement: "Essonne", codeDept: "91", region: "Île-de-France", taille: "ville", procheDe: "paris" },

  // ── Autour de Lyon ──────────────────────────────────────────
  { slug: "villeurbanne", nom: "Villeurbanne", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "venissieux", nom: "Vénissieux", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "bron", nom: "Bron", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "villefranche-sur-saone", nom: "Villefranche-sur-Saône", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "caluire-et-cuire", nom: "Caluire-et-Cuire", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "saint-priest", nom: "Saint-Priest", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "vaulx-en-velin", nom: "Vaulx-en-Velin", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "ecully", nom: "Écully", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "decines-charpieu", nom: "Décines-Charpieu", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "meyzieu", nom: "Meyzieu", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "oullins", nom: "Oullins", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "mions", nom: "Mions", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "tassin-la-demi-lune", nom: "Tassin-la-Demi-Lune", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "genas", nom: "Genas", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "brignais", nom: "Brignais", departement: "Rhône", codeDept: "69", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },

  // ── Autour de Marseille / Aix ───────────────────────────────
  { slug: "aubagne", nom: "Aubagne", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "istres", nom: "Istres", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "martigues", nom: "Martigues", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "vitrolles", nom: "Vitrolles", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "marignane", nom: "Marignane", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "la-ciotat", nom: "La Ciotat", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "allauch", nom: "Allauch", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "gardanne", nom: "Gardanne", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "carnoux-en-provence", nom: "Carnoux-en-Provence", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "septemes-les-vallons", nom: "Septèmes-les-Vallons", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "lambesc", nom: "Lambesc", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },

  // ── Autour de Toulouse ──────────────────────────────────────
  { slug: "blagnac", nom: "Blagnac", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "colomiers", nom: "Colomiers", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "tournefeuille", nom: "Tournefeuille", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "muret", nom: "Muret", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "saint-orens-de-gameville", nom: "Saint-Orens-de-Gameville", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "cugnaux", nom: "Cugnaux", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "balma", nom: "Balma", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "plaisance-du-touch", nom: "Plaisance-du-Touch", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "labege", nom: "Labège", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "lunion", nom: "L'Union", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "castanet-tolosan", nom: "Castanet-Tolosan", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "ramonville-saint-agne", nom: "Ramonville-Saint-Agne", departement: "Haute-Garonne", codeDept: "31", region: "Occitanie", taille: "ville", procheDe: "toulouse" },

  // ── Autour de Nantes ────────────────────────────────────────
  { slug: "saint-nazaire", nom: "Saint-Nazaire", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },
  { slug: "reze", nom: "Rezé", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },
  { slug: "saint-herblain", nom: "Saint-Herblain", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },
  { slug: "orvault", nom: "Orvault", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },
  { slug: "carquefou", nom: "Carquefou", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },
  { slug: "saint-sebastien-sur-loire", nom: "Saint-Sébastien-sur-Loire", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },
  { slug: "bouguenais", nom: "Bouguenais", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },
  { slug: "sainte-luce-sur-loire", nom: "Sainte-Luce-sur-Loire", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },
  { slug: "vertou", nom: "Vertou", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },
  { slug: "coueron", nom: "Couëron", departement: "Loire-Atlantique", codeDept: "44", region: "Pays de la Loire", taille: "ville", procheDe: "nantes" },

  // ── Autour de Bordeaux ──────────────────────────────────────
  { slug: "merignac", nom: "Mérignac", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "pessac", nom: "Pessac", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "talence", nom: "Talence", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "villenave-dornon", nom: "Villenave-d'Ornon", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "begles", nom: "Bègles", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "gradignan", nom: "Gradignan", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "le-bouscat", nom: "Le Bouscat", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "cenon", nom: "Cenon", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "lormont", nom: "Lormont", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "saint-medard-en-jalles", nom: "Saint-Médard-en-Jalles", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "eysines", nom: "Eysines", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },

  // ── Autour de Lille ─────────────────────────────────────────
  { slug: "roubaix", nom: "Roubaix", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "tourcoing", nom: "Tourcoing", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "villeneuve-dascq", nom: "Villeneuve-d'Ascq", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "wattrelos", nom: "Wattrelos", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "marcq-en-baroeul", nom: "Marcq-en-Barœul", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "croix", nom: "Croix", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "lambersart", nom: "Lambersart", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "loos", nom: "Loos", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "ronchin", nom: "Ronchin", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "hem", nom: "Hem", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "wasquehal", nom: "Wasquehal", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },

  // ── Autour de Strasbourg ────────────────────────────────────
  { slug: "schiltigheim", nom: "Schiltigheim", departement: "Bas-Rhin", codeDept: "67", region: "Grand Est", taille: "ville", procheDe: "strasbourg" },
  { slug: "illkirch-graffenstaden", nom: "Illkirch-Graffenstaden", departement: "Bas-Rhin", codeDept: "67", region: "Grand Est", taille: "ville", procheDe: "strasbourg" },
  { slug: "haguenau", nom: "Haguenau", departement: "Bas-Rhin", codeDept: "67", region: "Grand Est", taille: "ville", procheDe: "strasbourg" },
  { slug: "bischheim", nom: "Bischheim", departement: "Bas-Rhin", codeDept: "67", region: "Grand Est", taille: "ville", procheDe: "strasbourg" },
  { slug: "lingolsheim", nom: "Lingolsheim", departement: "Bas-Rhin", codeDept: "67", region: "Grand Est", taille: "ville", procheDe: "strasbourg" },
  { slug: "ostwald", nom: "Ostwald", departement: "Bas-Rhin", codeDept: "67", region: "Grand Est", taille: "ville", procheDe: "strasbourg" },
  { slug: "reichstett", nom: "Reichstett", departement: "Bas-Rhin", codeDept: "67", region: "Grand Est", taille: "ville", procheDe: "strasbourg" },
  { slug: "brumath", nom: "Brumath", departement: "Bas-Rhin", codeDept: "67", region: "Grand Est", taille: "ville", procheDe: "strasbourg" },

  // ── Autour de Montpellier ───────────────────────────────────
  { slug: "sete", nom: "Sète", departement: "Hérault", codeDept: "34", region: "Occitanie", taille: "ville", procheDe: "montpellier" },
  { slug: "lunel", nom: "Lunel", departement: "Hérault", codeDept: "34", region: "Occitanie", taille: "ville", procheDe: "montpellier" },
  { slug: "agde", nom: "Agde", departement: "Hérault", codeDept: "34", region: "Occitanie", taille: "ville", procheDe: "montpellier" },
  { slug: "castelnau-le-lez", nom: "Castelnau-le-Lez", departement: "Hérault", codeDept: "34", region: "Occitanie", taille: "ville", procheDe: "montpellier" },
  { slug: "lattes", nom: "Lattes", departement: "Hérault", codeDept: "34", region: "Occitanie", taille: "ville", procheDe: "montpellier" },
  { slug: "mauguio", nom: "Mauguio", departement: "Hérault", codeDept: "34", region: "Occitanie", taille: "ville", procheDe: "montpellier" },
  { slug: "le-cres", nom: "Le Crès", departement: "Hérault", codeDept: "34", region: "Occitanie", taille: "ville", procheDe: "montpellier" },

  // ── Autour de Rennes ────────────────────────────────────────
  { slug: "saint-malo", nom: "Saint-Malo", departement: "Ille-et-Vilaine", codeDept: "35", region: "Bretagne", taille: "ville", procheDe: "rennes" },
  { slug: "fougeres", nom: "Fougères", departement: "Ille-et-Vilaine", codeDept: "35", region: "Bretagne", taille: "ville", procheDe: "rennes" },
  { slug: "vitre", nom: "Vitré", departement: "Ille-et-Vilaine", codeDept: "35", region: "Bretagne", taille: "ville", procheDe: "rennes" },
  { slug: "cesson-sevigne", nom: "Cesson-Sévigné", departement: "Ille-et-Vilaine", codeDept: "35", region: "Bretagne", taille: "ville", procheDe: "rennes" },
  { slug: "bruz", nom: "Bruz", departement: "Ille-et-Vilaine", codeDept: "35", region: "Bretagne", taille: "ville", procheDe: "rennes" },
  { slug: "betton", nom: "Betton", departement: "Ille-et-Vilaine", codeDept: "35", region: "Bretagne", taille: "ville", procheDe: "rennes" },
  { slug: "saint-gregoire", nom: "Saint-Grégoire", departement: "Ille-et-Vilaine", codeDept: "35", region: "Bretagne", taille: "ville", procheDe: "rennes" },

  // ── Autour de Nice ──────────────────────────────────────────
  { slug: "cannes", nom: "Cannes", departement: "Alpes-Maritimes", codeDept: "06", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "nice" },
  { slug: "antibes", nom: "Antibes", departement: "Alpes-Maritimes", codeDept: "06", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "nice" },
  { slug: "cagnes-sur-mer", nom: "Cagnes-sur-Mer", departement: "Alpes-Maritimes", codeDept: "06", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "nice" },
  { slug: "grasse", nom: "Grasse", departement: "Alpes-Maritimes", codeDept: "06", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "nice" },
  { slug: "saint-laurent-du-var", nom: "Saint-Laurent-du-Var", departement: "Alpes-Maritimes", codeDept: "06", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "nice" },
  { slug: "menton", nom: "Menton", departement: "Alpes-Maritimes", codeDept: "06", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "nice" },
  { slug: "vence", nom: "Vence", departement: "Alpes-Maritimes", codeDept: "06", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "nice" },
  { slug: "mougins", nom: "Mougins", departement: "Alpes-Maritimes", codeDept: "06", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "nice" },

  // ── Autour de Grenoble ──────────────────────────────────────
  { slug: "saint-martin-dheres", nom: "Saint-Martin-d'Hères", departement: "Isère", codeDept: "38", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "grenoble" },
  { slug: "echirolles", nom: "Échirolles", departement: "Isère", codeDept: "38", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "grenoble" },
  { slug: "fontaine", nom: "Fontaine", departement: "Isère", codeDept: "38", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "grenoble" },
  { slug: "voiron", nom: "Voiron", departement: "Isère", codeDept: "38", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "grenoble" },
  { slug: "meylan", nom: "Meylan", departement: "Isère", codeDept: "38", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "grenoble" },
  { slug: "seyssinet-pariset", nom: "Seyssinet-Pariset", departement: "Isère", codeDept: "38", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "grenoble" },

  // ── Villes moyennes départementales (souvent oubliées) ──────
  { slug: "troyes", nom: "Troyes", departement: "Aube", codeDept: "10", region: "Grand Est", taille: "ville" },
  { slug: "besancon", nom: "Besançon", departement: "Doubs", codeDept: "25", region: "Bourgogne-Franche-Comté", taille: "ville" },
  { slug: "limoges", nom: "Limoges", departement:'Haute-Vienne', codeDept: "87", region: "Nouvelle-Aquitaine", taille: "ville" },
  { slug: "perpignan", nom: "Perpignan", departement: "Pyrénées-Orientales", codeDept: "66", region: "Occitanie", taille: "ville" },
  { slug: "bayonne", nom: "Bayonne", departement: "Pyrénées-Atlantiques", codeDept: "64", region: "Nouvelle-Aquitaine", taille: "ville" },
  { slug: "biarritz", nom: "Biarritz", departement: "Pyrénées-Atlantiques", codeDept: "64", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bayonne" },
  { slug: "pau", nom: "Pau", departement: "Pyrénées-Atlantiques", codeDept: "64", region: "Nouvelle-Aquitaine", taille: "ville" },
  { slug: "la-rochelle", nom: "La Rochelle", departement: "Charente-Maritime", codeDept: "17", region: "Nouvelle-Aquitaine", taille: "ville" },
  { slug: "chambery", nom: "Chambéry", departement: "Savoie", codeDept: "73", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "annecy" },
  { slug: "valence", nom: "Valence", departement: "Drôme", codeDept: "26", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "avignon", nom: "Avignon", departement: "Vaucluse", codeDept: "84", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "arles", nom: "Arles", departement: "Bouches-du-Rhône", codeDept: "13", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "marseille" },
  { slug: "frejus", nom: "Fréjus", departement: "Var", codeDept: "83", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "toulon" },
  { slug: "hyeres", nom: "Hyères", departement: "Var", codeDept: "83", region: "Provence-Alpes-Côte d'Azur", taille: "ville", procheDe: "toulon" },
  { slug: "dunkerque", nom: "Dunkerque", departement: "Nord", codeDept: "59", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "calais", nom: "Calais", departement: "Pas-de-Calais", codeDept: "62", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "arras", nom: "Arras", departement: "Pas-de-Calais", codeDept: "62", region: "Hauts-de-France", taille: "ville", procheDe: "lille" },
  { slug: "charleville-mezieres", nom: "Charleville-Mézières", departement: "Ardennes", codeDept: "08", region: "Grand Est", taille: "ville", procheDe: "reims" },
  { slug: "chalons-en-champagne", nom: "Châlons-en-Champagne", departement: "Marne", codeDept: "51", region: "Grand Est", taille: "ville", procheDe: "reims" },
  { slug: "nevers", nom: "Nevers", departement: "Nièvre", codeDept: "58", region: "Bourgogne-Franche-Comté", taille: "ville", procheDe: "dijon" },
  { slug: "bourg", nom: "Bourg-en-Bresse", departement: "Ain", codeDept: "01", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "chartres", nom: "Chartres", departement: "Eure-et-Loir", codeDept: "28", region: "Centre-Val de Loire", taille: "ville", procheDe: "orleans" },
  { slug: "blois", nom: "Blois", departement: "Loir-et-Cher", codeDept: "41", region: "Centre-Val de Loire", taille: "ville", procheDe: "tours" },
  { slug: "le-mans", nom: "Le Mans", departement: "Sarthe", codeDept: "72", region: "Pays de la Loire", taille: "ville", procheDe: "angers" },
  { slug: "poitiers", nom: "Poitiers", departement: "Vienne", codeDept: "86", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "la-rochelle" },
  { slug: "niort", nom: "Niort", departement: "Deux-Sèvres", codeDept: "79", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "la-rochelle" },
  { slug: "angouleme", nom: "Angoulême", departement: "Charente", codeDept: "16", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "perigueux", nom: "Périgueux", departement: "Dordogne", codeDept: "24", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "agen", nom: "Agen", departement: "Lot-et-Garonne", codeDept: "47", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "montauban", nom: "Montauban", departement: "Tarn-et-Garonne", codeDept: "82", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "albi", nom: "Albi", departement: "Tarn", codeDept: "81", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "rodez", nom: "Rodez", departement: "Aveyron", codeDept: "12", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "cahors", nom: "Cahors", departement: "Lot", codeDept: "46", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "brive-la-gaillarde", nom: "Brive-la-Gaillarde", departement: "Corrèze", codeDept: "19", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "limoges" },
  { slug: "aurillac", nom: "Aurillac", departement: "Cantal", codeDept: "15", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "clermont-ferrand" },
  { slug: "mende", nom: "Mende", departement: "Lozère", codeDept: "48", region: "Occitanie", taille: "ville", procheDe: "montpellier" },
  { slug: "privas", nom: "Privas", departement: "Ardèche", codeDept: "07", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "lyon" },
  { slug: "thonon-les-bains", nom: "Thonon-les-Bains", departement: "Haute-Savoie", codeDept: "74", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "annecy" },
  { slug: "annemasse", nom: "Annemasse", departement: "Haute-Savoie", codeDept: "74", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "annecy" },
  { slug: "evian-les-bains", nom: "Évian-les-Bains", departement: "Haute-Savoie", codeDept: "74", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "annecy" },
  { slug: "chamonix", nom: "Chamonix-Mont-Blanc", departement: "Haute-Savoie", codeDept: "74", region: "Auvergne-Rhône-Alpes", taille: "ville", procheDe: "annecy" },
  { slug: "saintes", nom: "Saintes", departement: "Charente-Maritime", codeDept: "17", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "la-rochelle" },
  { slug: "dax", nom: "Dax", departement: "Landes", codeDept: "40", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "araches", nom: "Arcachon", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "libourne", nom: "Libourne", departement: "Gironde", codeDept: "33", region: "Nouvelle-Aquitaine", taille: "ville", procheDe: "bordeaux" },
  { slug: "millau", nom: "Millau", departement: "Aveyron", codeDept: "12", region: "Occitanie", taille: "ville", procheDe: "montpellier" },
  { slug: "castres", nom: "Castres", departement: "Tarn", codeDept: "81", region: "Occitanie", taille: "ville", procheDe: "toulouse" },
  { slug: "ales", nom: "Alès", departement: "Gard", codeDept: "30", region: "Occitanie", taille: "ville", procheDe: "nimes" },
  { slug: "beziers", nom: "Béziers", departement: "Hérault", codeDept: "34", region: "Occitanie", taille: "ville", procheDe: "montpellier" },
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
  };
}
