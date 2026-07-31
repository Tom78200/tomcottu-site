# Spec — Site vitrine "Tom Cottu — Agents IA"

## Contexte
Site freelance de Tom, positionnement : agents IA pour PME, angle "on vend la preuve, pas la démo". Point d'entrée commercial : diagnostic personnalisé (skill `ai-gap-audit`) avant construction d'agent sur mesure. Zéro client à ce jour, donc aucun témoignage ni chiffre inventé.

## Design read
Portfolio développeur pour dirigeants de PME (acheteurs non-tech), langage technique-premium, prouve la compétence sans jargon. Esthétique "dark tech" sobre.

## Dials
`DESIGN_VARIANCE: 6` / `MOTION_INTENSITY: 5` / `VISUAL_DENSITY: 4`

## Stack
Next.js + Tailwind v4 + Motion (`motion/react`) + Phosphor Icons. Thème sombre par défaut, mode clair respecté (`prefers-color-scheme`). Un seul système de design (pas de mélange).

## CTA unique (répété partout, jamais de synonyme)
**"Cadrer mon diagnostic"**

---

## 1. Navbar
Une seule ligne, hauteur ≤ 80px.
- Gauche : liens "Cas d'usage" / "Comment ça marche"
- Centre : logo/wordmark "Tom Cottu"
- Droite : lien "À propos" + bouton CTA "Cadrer mon diagnostic"

## 2. Hero
Layout asymétrique (texte gauche, visuel droite), pas centré.
- Headline (2 lignes max) : **"Des agents IA qui font le travail, pas la démo."**
- Sous-texte (≤20 mots) : **"Diagnostic gratuit de vos process en 20 minutes, puis un agent IA construit sur mesure pour votre activité."**
- CTA : "Cadrer mon diagnostic"
- Visuel : animation décorative en boucle représentant le mécanisme réel (pas un faux dashboard, pas de fausses données) : **Scan → Analyse → Diagnostic**, tracé qui se dessine progressivement entre les étapes, retour au début en boucle lente.
- Top padding max `pt-24` desktop.

## 3. Cas d'usage
3 frictions/solutions, format friction → solution, PAS 3 cartes identiques. Alternance de composition (max 2 fois le même layout zigzag d'affilée, 3e en pleine largeur pour casser le rythme). Générique/conditionnel, aucune attribution à un client réel.

1. **"Vous ratez des demandes parce que vous répondez trop tard"** → Agent qui qualifie et répond aux prospects dès leur premier message.
2. **"Vos équipes répondent aux mêmes questions 50 fois par semaine"** → Agent support connecté à la doc/FAQ, escalade seulement les cas complexes.
3. **"Vos relances de devis, vous les oubliez ou les faites à la main"** → Agent qui relance automatiquement selon un calendrier, au bon moment.

## 4. Comment ça marche
Flux vertical (famille de layout différente des cas d'usage), tracé qui se dessine au scroll (motion motivée : révèle la séquence dans l'ordre). Titres nominaux directs, pas de "On" (Tom est solo), pas de "Étape 1/2/3".

1. **"Analyse de votre activité"** — Diagnostic basé sur le site, les outils et les process réels du prospect, pas un questionnaire générique.
2. **"Construction de l'agent"** — Développement sur mesure connecté aux outils existants, pas un chatbot prêt-à-l'emploi.
3. **"Affinage en conditions réelles"** — Ajustements après mise en service, tant que l'agent ne colle pas parfaitement à l'usage réel.

CTA "Cadrer mon diagnostic" en bas de section.

## 5. À propos
Minimaliste, factuel, pas de storytelling, pas de chiffres inventés (pas de faux "10 ans").

> **Tom Cottu**
> Développeur indépendant, spécialisé en agents IA et automatisation pour entreprises.
> Je construis avec les mêmes outils que je vends : l'IA agentique fait partie de mon usage quotidien, pas d'une démo.
> Contact : [email] · [LinkedIn]

Section courte, sobre, pas de padding généreux comme les autres sections (secondaire dans la hiérarchie visuelle). Photo facultative.

## 6. Footer
Minimal : logo + 3 liens (Cas d'usage / Comment ça marche / Contact) + copyright + email/LinkedIn. Pas de version stamp, pas de strip décoratif, pas de locale/heure.

---

## Contraintes transverses (rappel design gate)
- Zéro em-dash n'importe où sur la page
- Un seul thème par page (pas d'inversion clair/sombre en cours de scroll)
- Un seul accent couleur, cohérent partout
- Un seul système de corner-radius
- Contraste WCAG AA sur tous les CTA et formulaires
- Pas de témoignages ni de logos clients inventés (zéro client à ce jour)
- Motion réduite respectée (`prefers-reduced-motion`)
- Images réelles ou génération d'assets, jamais de faux screenshots en divs

## Prochaine étape
À utiliser dans une session de développement séparée : scaffold via `/spartan:next-app` ou build direct section par section à partir de ce spec.
