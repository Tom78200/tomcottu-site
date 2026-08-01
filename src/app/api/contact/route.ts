import { NextResponse } from "next/server";
import { Resend } from "resend";

// Envoi de mail via Resend (https://resend.com) — standard Next.js pro.
// Nécessite la variable d'env RESEND_API_KEY (voir .env.example).
//
// Stratégie d'envoi (automatique, aucun redéploiement nécessaire) :
// 1. Tente l'envoi PRO depuis le domaine vérifié (contact@cottutom.fr)
//    vers cottutom@outlook.fr.
// 2. Tant que le domaine n'est pas vérifié chez Resend (scan DNS en cours,
//    "plusieurs heures" selon Resend), Resend refuse le from domaine →
//    la route retombe automatiquement sur onboarding@resend.dev vers
//    FALLBACK_TO_EMAIL (l'email du compte Resend), seul destinataire
//    autorisé en mode test.
// Dès que le domaine passe "Verified", le chemin PRO prend le relais
// tout seul, sans toucher au code ni redéployer.

const TO_EMAIL = "cottutom@outlook.fr";
const PRO_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "contact@cottutom.fr";
const TEST_FROM_EMAIL = "onboarding@resend.dev";
// Adresse autorisée par Resend en mode test = l'email du compte Resend.
// Tant que le compte est sur gmail, seul gmail est autorisé. Dès que Tom
// change l'email du compte vers outlook.fr, outlook.fr devient autorisé
// et le repli bascule tout seul.
const ACCOUNT_EMAIL = process.env.CONTACT_FALLBACK_TO_EMAIL ?? "tomtravail78@gmail.com";

function clean(v: unknown, max = 2000): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function isDomainNotVerified(err: unknown): boolean {
  const msg = String((err as { message?: string })?.message ?? "");
  return /not verified|verify a domain|testing emails/i.test(msg);
}

function buildBody(name: string, company: string, email: string, subject: string, message: string) {
  const companyLine = company ? `\nEntreprise : ${company}` : "";
  return {
    subject: `[Contact site] ${subject} — ${name}`,
    text: `Nouveau message depuis le site cottutom.fr

Nom : ${name}${companyLine}
Email : ${email}
Sujet : ${subject}

Message :
${message}`,
  };
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
    const mailBody = buildBody(name, company, email, subject, message);

    // 1. Chemin PRO : depuis le domaine vérifié vers outlook.fr
    const pro = await resend.emails.send({
      from: PRO_FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      ...mailBody,
    });

    if (!pro.error) {
      console.log("[contact] Envoi PRO OK (domaine vérifié)");
      return NextResponse.json({ ok: true, mode: "pro" });
    }

    // 2. Domaine pas encore vérifié ? Repli mode test.
    //    Resend n'autorise que l'email du compte (ACCOUNT_EMAIL).
    //    On essaie d'abord l'email du compte, qui peut être outlook.fr
    //    dès que Tom change l'email du compte Resend.
    if (isDomainNotVerified(pro.error)) {
      console.warn("[contact] Domaine non vérifié, repli mode test:", pro.error);
      const fallback = await resend.emails.send({
        from: TEST_FROM_EMAIL,
        to: ACCOUNT_EMAIL,
        replyTo: email,
        ...mailBody,
      });
      if (fallback.error) {
        console.error("[contact] Fallback échoué:", fallback.error);
        return NextResponse.json(
          { error: "Envoi impossible. Réessaie ou écris à cottutom@outlook.fr." },
          { status: 500 }
        );
      }
      console.log("[contact] Envoi repli test OK →", ACCOUNT_EMAIL);
      return NextResponse.json({ ok: true, mode: "fallback" });
    }

    // Autre erreur Resend (pas un souci de domaine)
    console.error("[contact] Resend error:", pro.error);
    return NextResponse.json(
      { error: "Envoi impossible. Réessaie ou écris à cottutom@outlook.fr." },
      { status: 500 }
    );
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Erreur serveur. Réessaie ou écris à cottutom@outlook.fr." },
      { status: 500 }
    );
  }
}
