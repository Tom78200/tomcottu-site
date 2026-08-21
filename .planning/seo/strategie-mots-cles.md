# Stratégie mots-clés cottutom.fr

Analyse du 2 août 2026.

## Méthode et limites, à lire avant le reste

Les données ci-dessous viennent de l'autocomplétion Google (`suggestqueries.google.com`,
paramètres `hl=fr&gl=fr`), interrogée requête par requête. C'est du signal réel :
Google ne suggère que ce que les gens tapent effectivement, et le nombre de
suggestions retournées est proportionnel à la richesse de la demande sur le terme.

Ce que ça ne donne pas : des volumes chiffrés. Sans accès à Keyword Planner ou à un
outil payant, je ne peux pas écrire "170 recherches/mois" et le garantir. Les
priorités ci-dessous reposent donc sur la présence, la richesse et l'intention des
suggestions, pas sur des volumes. C'est suffisant pour trancher entre "personne ne
tape ça" et "cluster actif", ce qui est la vraie question ici.

Non vérifiable en l'état : le positionnement actuel du site et son trafic réel.
Search Console n'est pas accessible. L'accès est gratuit et répondrait en dix
minutes, c'est le premier geste à faire.

---

## 1. Le problème de fond

Le site compte 274 pages : 199 pages villes, 32 cas d'usage, 30 ressources,
12 intentions. L'effort est massivement investi sur les villes. C'est l'inverse de
ce qu'il faudrait.

### Les pages villes visent des requêtes que personne ne tape

Test d'autocomplétion :

| Requête | Suggestions Google |
|---|---|
| `automatisation ia marseille` | **0** |
| `developpeur ia marseille` | 2, dont une est `ingénieur ia marseille` (offre d'emploi) |
| `agence ia marseille` | 4, dont 3 sont `agence immobilière à marseille` |

Zéro suggestion signifie que Google n'a pas assez de requêtes distinctes pour en
proposer. 199 pages sont construites sur ce modèle.

### Pire : le métier lui-même est une requête de candidats

C'est le constat le plus important de l'analyse. Toutes les requêtes construites sur
le nom du métier ramènent des chercheurs d'emploi, pas des acheteurs :

| Requête | Ce que Google suggère derrière |
|---|---|
| `developpeur ia` | emploi, métier, salaire, formation, alternance, junior |
| `consultant ia` | salaire, emploi, freelance, formation, junior, linkedin |
| `integrateur ia` | formation, salaire, emploi |
| `freelance ia` | c'est quoi, mission freelance ia |

Le site est positionné de bout en bout sur "Développeur IA freelance" : title, H1,
JSON-LD, footer, balise keywords, et les 199 pages villes. Même en sortant premier
sur ces termes, le trafic serait composé d'étudiants, de candidats et de freelances
qui cherchent des missions. Aucun d'eux n'achète.

Une entreprise qui a un problème ne cherche pas un intitulé de poste. Elle cherche
son problème, ou son métier.

---

## 2. Les requêtes qui ramènent des acheteurs

### Priorité 1 : le cluster PME

`ia pour pme` retourne 10 suggestions, et **toutes sont commerciales** :

```
agent ia pour pme
agence ia pour pme
audit ia pour pme
automatisation ia pour pme
```

C'est le meilleur signal de tout le relevé : pas une seule suggestion
informationnelle, pas de pollution emploi. Chaque personne qui tape ça cherche un
prestataire.

Voisins confirmés :

| Requête | Suggestions |
|---|---|
| `automatisation ia` | 10, dont `entreprise`, `pour pme`, `n8n` |
| `agent ia entreprise` | 10, dont `agent ia pour mon entreprise`, `agent ia gestion entreprise` |
| `mettre en place l ia` | 8, dont `mettre en place agent ia`, `mettre en place une ia locale` |
| `agence ia` | 10, dont `agence ia automatisation`, `agence ia paris` |

À noter : `agence ia` est pollué par IAD (réseau immobilier), qui capte une partie
des suggestions. Ça ne disqualifie pas le terme mais ça complique la mesure.

### Priorité 2 : les métiers du client

C'est là que se trouve la demande la plus qualifiée, et Tom a déjà les pages.

| Secteur | Requête testée | Suggestions | Verdict |
|---|---|---|---|
| Avocat | `ia pour avocat` | **10** | `meilleur ia pour avocat`, `intelligence artificielle pour avocat` |
| PME | `ia pour pme` | **10** | 100% commercial |
| BTP | `ia pour btp` | 7 | `ia pour entreprise btp`, `meilleur ia pour btp` |
| Expert-comptable | `ia pour cabinet comptable` | 6 | `agent ia pour expert comptable` |
| Immobilier | `ia pour agence immobiliere` | 6 | `agent ia pour agence immobilière` |
| Artisan | `ia pour artisan` | 3 | `agent ia pour artisan`, `assistant ia pour artisan` |

Secteurs à écarter, la requête est captée par autre chose :

- `ia pour restaurant` → suggestions sur la cuisine et les iPad
- `ia pour garage` → GarageBand
- `ia pour transport` → voyages
- `ia pour recrutement` → travail scolaire et universitaire
- `ia pour notaire`, `ia pour cabinet de recrutement` → 1 et 0 suggestion

### Priorité 3 : les requêtes de problème

Formulées par des gens qui ont mal, avant même de savoir que l'IA est la réponse.
Volume individuel plus faible, mais intention d'achat très haute et concurrence
quasi nulle.

```
automatisation des taches administratives
automatisation des taches repetitives
automatisation des taches comptables
comment automatiser les relances clients
automatiser la prospection avec l ia
automatisation support client
```

`automatisation des taches` retourne 9 suggestions, presque toutes de ce type.

### Priorité 4 : l'angle Bpifrance, le plus sous-exploité

Le plan **"Osez l'IA"** (lancé juillet 2025, 200 M€) fait cofinancer par Bpifrance
50% d'un diagnostic IA pour les PME de 10 à 2 000 salariés.

Les requêtes existent et sont actives :

| Requête | Suggestions |
|---|---|
| `osez l ia` | **10** : `subvention`, `bpifrance`, `ambassadeur`, `pdf` |
| `diagnostic ia` | **9** : `diagnostic ia bpi`, `diagnostic ia bpi france` |
| `diagnostic ia bpifrance` | 3 |
| `aide ia entreprise` | 6 : `aide etat entreprise ia` |

Pourquoi c'est le meilleur angle disponible :

1. La personne qui tape ça a un budget, parfois déjà fléché.
2. Elle cherche un prestataire capable d'exécuter, pas une définition.
3. Tom propose déjà un diagnostic gratuit de 20 min, l'offre existe.
4. Concurrence faible sur le terme, les gros acteurs communiquent sur "IA" en
   général, pas sur le dispositif.

Note : certains concurrents (Skuria) sont référencés comme prestataires accrédités
du plan. Vérifier les conditions d'accréditation est une action à part entière, et
probablement plus rentable que 50 pages villes de plus.

---

## 3. Ce qu'il faut faire des pages existantes

### Les 32 pages cas-usage sont le vrai actif du site

Elles visent déjà les bonnes requêtes, et leurs titres collent presque mot pour mot
à ce que les gens tapent :

| Page | Title actuel | Requête réelle |
|---|---|---|
| `agent-ia-comptabilite-expert` | Agent IA pour l'expert-comptable | `agent ia pour expert comptable` |
| `agent-ia-immobilier` | Agent IA pour l'immobilier | `agent ia pour agence immobilière` |
| `agent-ia-btp` | Agent IA pour le BTP | `ia pour entreprise btp` |
| `agent-ia-juridique` | Agent IA pour le juridique | `ia pour avocat` |

Deux ajustements de vocabulaire, à faire en priorité :

- **juridique → avocat.** `ia pour avocat` retourne 10 suggestions. Personne ne tape
  "juridique", tout le monde tape "avocat". C'est le plus gros gain immédiat du site.
- **immobilier → agent immobilier.** Les suggestions sont sur
  `ia pour agent immobilier` et `agent ia pour agence immobilière`.

C'est du renommage de title et de H1, pas de refonte.

### Les 199 pages villes

Elles ciblent une demande inexistante, et une masse de pages quasi identiques
générées depuis un même gabarit correspond à ce que Google appelle des pages
satellites. Le risque n'est pas seulement qu'elles ne rapportent rien : c'est
qu'elles diluent le budget de crawl et pèsent sur la perception de qualité de
l'ensemble du domaine. Le site compte 274 pages et ne ressort sur rien.

Trois options, par ordre de prudence :

1. **Réduire.** Garder 10 à 15 villes où Tom veut réellement travailler, avec du
   contenu spécifique, supprimer le reste en 410. Recommandé.
2. **Désindexer.** `noindex` sur les 199, les garder pour le maillage interne.
   Réversible, moins brutal.
3. **Ne rien faire.** Elles ne rapporteront rien mais ne sont pas la cause unique du
   problème.

À ne pas faire tant que Search Console n'est pas branchée : supprimer en masse sans
savoir si certaines pages reçoivent du trafic.

---

## 4. Apparaître aux yeux des IA

### État actuel, vérifié

- `robots.txt` : `User-Agent: * / Allow: /`. Aucun crawler IA n'est bloqué. Bon point,
  beaucoup de sites bloquent GPTBot sans le savoir.
- `llms.txt` : présent, bien structuré, avec la liste des cas d'usage. C'est déjà
  au-dessus de la moyenne du marché.

### Ce qui compte vraiment

Deux familles de moteurs, deux logiques :

**Perplexity et Google AI Overviews** vont chercher les pages au moment de la
question. La logique reste celle du SEO classique : être indexé, être pertinent,
faire autorité. Si le site ne ranke pas, il n'est pas cité.

**ChatGPT, Claude, Gemini** répondent en grande partie depuis leurs données
d'entraînement. Être cité suppose d'avoir été publié, indexé et reconnu comme source
avant la coupure d'entraînement. C'est lent et ça ne se force pas.

Conséquence directe : **il n'y a pas de raccourci GEO qui contourne le SEO.** Un
`llms.txt` sur un site que personne ne cite ne produit rien. Travailler les requêtes
ci-dessus est le prérequis, pas une alternative.

### Les leviers qui ont un effet mesuré

D'après les travaux publiés sur le sujet, trois techniques ressortent au-dessus des
autres pour être repris dans une réponse générée :

1. **Citer des sources.** Un contenu qui référence des sources est repris plus
   souvent qu'un contenu affirmatif sans appui.
2. **Ajouter des statistiques.** Les chiffres datés et sourcés sont ce qu'un modèle
   extrait le plus volontiers.
3. **Insérer des citations.** Verbatims attribués.

En pratique, sur ce site :

- Des phrases courtes, autonomes, citables telles quelles. Une réponse à une question
  doit tenir en une phrase compréhensible hors contexte.
- Un format question → réponse. Les FAQ existantes servent déjà à ça.
- Des chiffres datés et sourcés plutôt que des affirmations générales. "34% des PME
  françaises utilisent au moins un outil IA en 2025, 5% automatisent réellement"
  vaut mieux que "l'IA transforme les entreprises".
- Une date de mise à jour visible et un auteur identifié.

Point à garder en tête : seulement 11% des domaines cités par ChatGPT le sont aussi
par Perplexity. Être repris par l'un ne garantit rien sur l'autre.

---

## 5. Plan d'action, par ordre de rentabilité

| # | Action | Effort | Retour attendu |
|---|---|---|---|
| 1 | Brancher Search Console | 10 min | Débloque toute mesure. Rien de sérieux n'est possible avant |
| 2 | Renommer juridique → avocat, immobilier → agent immobilier | 1 h | Le meilleur ratio du lot |
| 3 | Créer la page "Agent IA pour PME" en page pilier | 1 j | Le seul cluster 100% commercial du relevé |
| 4 | Créer la page diagnostic IA / Osez l'IA / Bpifrance | 1 j | Audience avec budget déjà fléché |
| 5 | Écrire 5 à 10 pages "automatisation des tâches X" | 3 j | Faible concurrence, intention haute |
| 6 | Trancher le sort des 199 pages villes | 0,5 j | Assainit le domaine |
| 7 | Sortir "développeur IA freelance" des titres principaux | 0,5 j | Arrête d'attirer des candidats |

Le point 7 mérite une décision de ta part, pas une exécution automatique : c'est
l'identité du site. Le terme reste juste pour dire qui tu es sur la page À propos et
sur LinkedIn. Il est mauvais comme requête cible.

---

## Sources

- Autocomplétion Google FR, relevée le 02/08/2026, ~45 requêtes testées
- `robots.txt` et `llms.txt` de cottutom.fr, vérifiés en production
- Titles et H1 des pages cas-usage, vérifiés en production
- Plan "Osez l'IA" et cofinancement Bpifrance : sources presse et prestataires
  accrédités, juillet 2025
- Travaux publiés sur la Generative Engine Optimization, 2026
