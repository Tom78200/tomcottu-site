"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTypewriter } from "@/hooks/useTypewriter";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatWidgetProps {
  cityContent?: string;
}

export function ChatWidget({ cityContent }: ChatWidgetProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { displayed, done } = useTypewriter(
    messages.length === 0
      ? "Bonjour ! Je suis l'assistant de Tom. Comment puis-je vous aider ?"
      : "",
    30,
    100
  );

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  // Message de bienvenue quand la conversation démarre
  useEffect(() => {
    if (open && messages.length === 0 && !done) {
      const timer = setTimeout(() => {
        setMessages([
          {
            role: "assistant",
            content:
              "Bonjour ! Je suis l'assistant de Tom Cottu, développeur IA freelance. Posez-moi une question sur les agents IA, l'automatisation ou mes interventions.",
          },
        ]);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [open, messages.length, done]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { role: "user" as const, content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg],
          cityContent,
        }),
      });

      const data = await res.json();
      if (data.response) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
      } else if (data.error) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Désolé, une erreur est survenue. Contactez-moi directement à cottutom@outlook.fr.",
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Erreur de connexion. Réessayez ou contactez-moi à cottutom@outlook.fr.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fermer le chat" : "Ouvrir le chat"}
        className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-lg shadow-black/20 transition-colors hover:bg-black/80"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
            <line x1="5" y1="5" x2="15" y2="15" />
            <line x1="15" y1="5" x2="5" y2="15" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 9l6 3 6-3" />
            <rect x="2" y="5" width="16" height="10" rx="2" />
          </svg>
        )}
      </motion.button>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-[60] flex h-[500px] w-80 flex-col gap-4 rounded-2xl border border-border-soft bg-white p-4 shadow-2xl shadow-black/10"
          >
            {/* En-tête */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-xs">TC</div>
                <span className="text-sm font-medium">Assistant IA</span>
              </div>
              <motion.button
                onClick={() => setOpen(false)}
                aria-label="Fermer le chat"
                className="rounded-full p-1 text-muted hover:text-foreground"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <line x1="4" y1="4" x2="12" y2="12" />
                  <line x1="12" y1="4" x2="4" y2="12" />
                </svg>
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto">
              {messages.length === 0 ? (
                <div className="flex h-full items-center justify-center text-center">
                  <p className="max-w-[220px] text-sm text-muted">
                    Bonjour ! Je suis l'assistant de Tom. Comment puis-je vous aider ?
                  </p>
                </div>
              ) : (
                messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                      msg.role === "user"
                        ? "ml-auto bg-black text-white"
                        : "bg-[#f5f5f5] text-foreground"
                    }`}
                  >
                    {msg.content}
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tapez votre question..."
                className="flex-1 rounded-full border border-border-soft px-3 py-2 text-sm outline-none ring-black focus-within:ring-2"
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                disabled={loading}
              />
              <motion.button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white disabled:opacity-50"
                whileTap={{ scale: 0.95 }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <line x1="2" y1="8" x2="14" y2="8" />
                  <path d="M6 4l6 4-6 4z" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
