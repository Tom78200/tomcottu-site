"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-muted-soft outline-none transition-colors focus:border-foreground/40 focus:bg-white";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data?.error ?? "Envoi impossible, réessaie ou écris à cottutom@outlook.com.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Erreur réseau. Réessaie ou écris à cottutom@outlook.com.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-border bg-background p-8 sm:p-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M4 10.5 8 14.5 16 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-[20px] font-medium tracking-[-0.02em] text-foreground">
          Message envoyé
        </h3>
        <p className="mt-2 text-[15px] text-muted">
          Merci — je reviens vers toi sous 24h ouvrées. Une copie vient de partir vers ta boîte mail.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center rounded-full border border-border px-5 py-2.5 text-[14px] font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-[13px] font-medium text-foreground">
            Nom
          </label>
          <input
            id="contact-name"
            name="name"
            required
            maxLength={80}
            autoComplete="name"
            placeholder="Jean Dupont"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-[13px] font-medium text-foreground">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={120}
            autoComplete="email"
            placeholder="jean@entreprise.fr"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-company" className="mb-1.5 block text-[13px] font-medium text-foreground">
            Entreprise <span className="text-muted-soft">(optionnel)</span>
          </label>
          <input
            id="contact-company"
            name="company"
            maxLength={80}
            autoComplete="organization"
            placeholder="Nom de la boîte"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className="mb-1.5 block text-[13px] font-medium text-foreground">
            Sujet
          </label>
          <select
            id="contact-subject"
            name="subject"
            required
            defaultValue="Agent IA sur mesure"
            className={inputClasses}
          >
            <option>Agent IA sur mesure</option>
            <option>Automatisation de workflows</option>
            <option>Assistant IA auto-hébergé</option>
            <option>Diagnostic / audit IA</option>
            <option>Autre demande</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-[13px] font-medium text-foreground">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          maxLength={3000}
          placeholder="Parle-moi de ton projet : contexte, outil à automatiser, objectif…"
          className={`${inputClasses} resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700">
          {errorMsg}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        <p className="text-[13px] text-muted-soft">
          Réponse sous 24h ouvrées. Pas de spam, promis.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-[15px] font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.25" />
                <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Envoi…
            </>
          ) : (
            "Envoyer le message"
          )}
        </button>
      </div>
    </form>
  );
}
