"use client";

import { useEffect, useLayoutEffect, useState } from "react";

// useLayoutEffect n'existe pas au rendu serveur : on bascule sur useEffect
// pour éviter l'avertissement React.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useTypewriter(text: string, speed = 38, startDelay = 600) {
  // L'état initial contient la phrase entière, donc le HTML renvoyé par le
  // serveur porte le texte du h1 : sans ça les moteurs voient un titre vide.
  // À l'hydratation on le vide avant le premier affichage, donc sans flash.
  const [displayed, setDisplayed] = useState(text);
  const [done, setDone] = useState(false);

  useIsomorphicLayoutEffect(() => {
    setDisplayed("");
    setDone(false);
  }, [text]);

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

  return { displayed, done };
}
