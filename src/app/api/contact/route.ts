import { NextResponse } from "next/server";
import { Resend } from "resend";

// Envoi de mail via Resend (https://resend.com) — standard Next.js pro.
// Nécessite la variable d'env RESEND_API_KEY (voir .env.example).
// Le domaine doit être vérifié dans Resend, ou utiliser onbording@resend.dev
// en mode test (limité au propriétaire du compte).

const TO_EMAIL = "cottutom@outlook.fr";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

function clean(v: unknown, max = 2000): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
    }

    const name = clean(body.name, 80);
    const email = clean(body.email, 120);
    const company = clean(body.company, 80);
    const subject = clean(body.subject, 120);
    const message = clean(body.message, 3000);

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact] RESEND_API_KEY manquante — config à faire");
      return NextResponse.json(
        { error: "Service d'envoi non configuré. Contacte cottutom@outlook.com directement." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const companyLine = company ? `\nEntreprise : ${company}` : "";
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Contact site] ${subject} — ${name}`,
      text: `Nouveau message depuis le site cottutom.fr

Nom : ${name}${companyLine}
Email : ${email}
Sujet : ${subject}

Message :
${message}`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Envoi impossible. Réessaie ou écris à cottutom@outlook.com." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Erreur serveur. Réessaie ou écris à cottutom@outlook.com." },
      { status: 500 }
    );
  }
}
