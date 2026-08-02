"use client";

import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState(text);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    // On commence par le texte complet (défini dans useState ci-dessus),
    // donc tout le texte est présent dès le premier render — zéro CLS.
    const timeout = setTimeout(() => {
      // On vide progressivement pour effet machine à écrire rétroactif,
      // ou on peut passer directement à l'effet typewriter si on préfère.
      // Ici : on efface d'abord, puis réécrit caractère par caractère.
      const eraseInterval = setInterval(() => {
        index -= 1;
        if (index <= 0) {
          clearInterval(eraseInterval);
          index = 0;
          // Maintenant on réécrit
          const writeInterval = setInterval(() => {
            index += 1;
            setDisplayed(text.slice(0, index));
            if (index >= text.length) {
              clearInterval(writeInterval);
              setDone(true);
            }
          }, speed);
        } else {
          setDisplayed(text.slice(0, index));
        }
      }, speed / 1.5);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  // Le typewriter est un effet cosmétique : le texte complet est toujours
  // présent dès le premier render (useState initialisé avec le texte).
  // Aucun CLS, le moteur de recherche voit le texte complet.
  return { displayed, done };
}
