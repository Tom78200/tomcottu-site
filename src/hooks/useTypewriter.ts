"use client";

import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    let interval: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  // On renvoie toujours le texte complet comme "affichage de repli" : le
  // typewriter est un effet cosmétique, le contenu réel est toujours présent
  // pour le SSR et les moteurs de recherche. Rien n'est vidé du DOM, donc
  // aucun Cumulative Layout Shift pendant l'hydratation.
  return { displayed: displayed || text, done };
}
