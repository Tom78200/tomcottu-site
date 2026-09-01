"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-muted-soft transition-colors duration-200 focus:border-accent focus:outline-none";

const labelClasses = "mb-2 block text-[13px] font-medium text-foreground";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (!data.name || !data.email || !data.subject || !data.message) {
      setStatus("error");
      setError("Merci de remplir tous les champs obligatoires.");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company ?? "",
          subject: data.subject,
          message: data.message,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Erreur inconnue");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border bg-background px-5 py-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M4 10.5 8 14.5 16 5.5"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-5 text-[20px] font-medium tracking-[-0.02em] text-foreground">
          Message envoyé
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-[15px] text-muted" style={{ lineHeight: 1.55 }}>
          Merci ! Je vous réponds sous 24h ouvrées sur votre adresse email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            Nom *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Jean Dupont"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClasses}>
            Email *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="jean@entreprise.fr"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-company" className={labelClasses}>
          Entreprise{" "}
          <span className="font-normal text-muted-soft">(optionnel)</span>
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          placeholder="Ma société"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="contact-subject" className={labelClasses}>
          Sujet *
        </label>
        <select id="contact-subject" name="subject" required className={inputClasses} defaultValue="">
          <option value="" disabled>
            Choisis un sujet
          </option>
          <option value="Automatisation IA">Automatisation IA</option>
          <option value="Agent IA sur mesure">Agent IA sur mesure</option>
          <option value="Développement d'application">Développement d'application</option>
          <option value="Audit / conseil">Audit / conseil</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClasses}>
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre projet, votre métier, ce que vous voulez automatiser…"
          className={`${inputClasses} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[15px] font-medium text-accent-foreground shadow-accent transition-all duration-200 hover:bg-accent-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Envoi…
          </>
        ) : (
          "Envoyer le message"
        )}
      </button>
    </form>
  );
}
