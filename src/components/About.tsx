"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { CtaButton } from "./CtaButton";

const reperes = [
  {
    titre: "Des agents hébergés chez vous, pas chez un éditeur",
    detail:
      "L'agent et vos données vivent sur votre machine. Reste le modèle : en local il est gratuit et confidentiel mais moins bon, via une API il est meilleur mais vos requêtes sortent. Je vous dis lequel convient à votre cas avant de commencer.",
  },
  {
    titre: "Tech, web et automatisation avec le même interlocuteur",
    detail:
      "Le code, l'interface et les connexions entre vos outils, sans coordonner trois prestataires.",
  },
  {
    titre: "Livraison documentée, pas de boîte noire",
    detail:
      "Vous récupérez le code, la doc et de quoi reprendre la main. Y compris sans moi.",
  },
];

const parcours = [
  {
    groupe: "Expérience",
    lignes: [
      {
        periode: "Depuis janvier 2026",
        role: "Consultant digital, indépendant",
        lieu: "LÉTRANGE",
        detail:
          "SEO technique et éditorial, contenu et campagnes assistés par IA, stratégie digitale orientée résultats.",
      },
      {
        periode: "Nov. 2022 – avril 2023",
        role: "Concepteur d'applications, en alternance",
        lieu: "Prodware",
        detail:
          "Développement d'applications métier sur l'écosystème Microsoft 365.",
      },
    ],
  },
  {
    groupe: "Formation, en autodidacte",
    lignes: [
      {
        periode: "Nov. 2022 – mai 2024",
        role: "Concepteur développeur d'applications web et mobile",
        lieu: "WebForce3",
        detail: null,
      },
      {
        periode: "Oct. 2021 – mai 2022",
        role: "Développeur web fullstack",
        lieu: "OpenClassrooms",
        detail: null,
      },
    ],
  },
];

export function About() {
  const reduce = useReducedMotion();

  return (
    <section
      id="a-propos"
      aria-labelledby="a-propos-heading"
      className="w-full px-5 pb-32 sm:px-10 md:pb-44 lg:px-16"
    >
      <div className="mb-14 border-t border-border-soft pt-16 md:mb-20 md:pt-24">
        <div
          className="mb-4 text-base font-semibold text-foreground md:text-lg"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          À propos
        </div>
        <h2
          id="a-propos-heading"
          className="max-w-3xl font-medium text-foreground"
          style={{
            fontSize: "clamp(34px, 5vw, 60px)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            textWrap: "balance",
          }}
        >
          Je construis avec les outils que je vends.
        </h2>
      </div>

      <motion.div
        className="grid items-start gap-12 md:grid-cols-[1fr_380px] md:gap-16 md:pr-10 lg:grid-cols-[1fr_340px] lg:pr-[6%] xl:grid-cols-[1fr_440px] xl:pr-[8%] min-[1400px]:grid-cols-[1fr_580px]"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-2xl">
          <p className="text-xl text-foreground" style={{ lineHeight: 1.55 }}>
            Tom Cottu, développeur IA indépendant. Je construis des agents et
            des applications qui tournent chez vous, sans vous enfermer chez un
            éditeur.
          </p>
          <p className="mt-5 text-[17px] text-muted" style={{ lineHeight: 1.6 }}>
            Je viens du développement web, et je suis autodidacte. Mes diplômes,
            je les ai obtenus en apprenant seul et en passant les examens, sans
            suivre les cours. Le reste s&apos;est fait sur le terrain :
            l&apos;alternance chez Prodware sur des applications métier
            Microsoft 365, puis le travail en indépendant pour LÉTRANGE, sur du
            SEO, du contenu assisté par IA et de la stratégie orientée
            résultats.
          </p>
          <p className="mt-5 text-[17px] text-muted" style={{ lineHeight: 1.6 }}>
            L&apos;IA agentique aussi, je l&apos;ai apprise en construisant. Elle
            fait partie de mon travail quotidien et pas d&apos;une démonstration
            commerciale : les outils que je vous installe, je les fais tourner
            chez moi tous les jours. C&apos;est pour ça que je sais où ils
            tiennent, et surtout où ils cassent.
          </p>
          <p className="mt-5 text-[17px] text-muted" style={{ lineHeight: 1.6 }}>
            Ce parcours mélange le code, le web et le référencement, et
            c&apos;est ce qui me sert le plus aujourd&apos;hui. Un agent utile
            n&apos;est presque jamais un problème d&apos;IA, c&apos;est un
            problème de plomberie entre des outils qui ne se parlent pas.
          </p>
          <p className="mt-5 text-[17px] text-muted" style={{ lineHeight: 1.6 }}>
            Je travaille seul et je le revendique : vous parlez à la personne
            qui écrit le code, pas à un commercial qui transmettra.
          </p>

          <ul className="mt-10 flex flex-col divide-y divide-border-soft border-y border-border-soft">
            {reperes.map((repere) => (
              <li key={repere.titre} className="py-5">
                <div className="text-[16px] font-medium text-foreground">
                  {repere.titre}
                </div>
                <p
                  className="mt-1.5 text-[15px] text-muted"
                  style={{ lineHeight: 1.55, textWrap: "pretty" }}
                >
                  {repere.detail}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-12">
            {parcours.map((bloc) => (
              <div key={bloc.groupe}>
                <div
                  className="mb-5 text-[11px] tracking-[0.09em] text-muted-soft uppercase"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {bloc.groupe}
                </div>
                <ul className="flex flex-col gap-6">
                  {bloc.lignes.map((ligne) => (
                    <li key={ligne.role + ligne.lieu}>
                      <div className="text-[13px] text-muted-soft tabular-nums">
                        {ligne.periode}
                      </div>
                      <div className="mt-1 text-[15px] font-medium text-foreground">
                        {ligne.role}
                      </div>
                      <div className="text-[15px] text-muted">{ligne.lieu}</div>
                      {ligne.detail && (
                        <p
                          className="mt-1.5 text-[14px] text-muted"
                          style={{ lineHeight: 1.5, textWrap: "pretty" }}
                        >
                          {ligne.detail}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
            <CtaButton href="/contact" size="lg" />
            <a
              href="mailto:cottutom@outlook.fr"
              className="py-2.5 text-[15px] text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              cottutom@outlook.fr
            </a>
            <a
              href="https://www.linkedin.com/in/tom-cottu-881017359"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 text-[15px] text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Cadre "friendly" : halo accent + portrait arrondi + ombre.
            Aucune carte dure : le webp garde son fond, on l'habille autour. */}
        <div className="relative hidden w-full max-w-[380px] sm:block md:max-w-none">
          <div className="absolute -inset-4 -z-10 rounded-[36px] bg-accent-soft" aria-hidden="true" />
          <div className="overflow-hidden rounded-[28px] shadow-soft">
            <Image
              src="/tom-cottu.webp"
              alt="Tom Cottu"
              width={1102}
              height={1427}
              quality={95}
              sizes="(min-width: 1400px) 580px, (min-width: 1280px) 440px, (min-width: 1024px) 340px, (min-width: 768px) 380px, 380px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
