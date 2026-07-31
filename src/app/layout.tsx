import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL, jsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Développeur IA freelance — Agents IA sur mesure pour PME",
    template: "%s | Tom Cottu, développeur IA",
  },
  description:
    "Tom Cottu, développeur IA freelance. Je conçois des agents IA sur mesure et j'automatise vos workflows métier. Diagnostic gratuit de vos process en 20 minutes.",
  applicationName: "Tom Cottu",
  authors: [{ name: "Tom Cottu", url: SITE_URL }],
  creator: "Tom Cottu",
  publisher: "Tom Cottu",
  keywords: [
    "développeur IA",
    "développeur IA freelance",
    "agent IA",
    "agent IA sur mesure",
    "agent IA pour entreprise",
    "automatisation IA",
    "automatisation des tâches",
    "intégration IA PME",
    "consultant IA",
    "assistant IA auto-hébergé",
    "IA pour PME",
    "freelance intelligence artificielle",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Tom Cottu",
    title: "Développeur IA freelance — Agents IA sur mesure pour PME",
    description:
      "Des agents IA qui font le travail, pas la démo. Conception sur mesure, automatisation de workflows et assistants auto-hébergés pour PME.",
    images: [
      {
        url: "/hero-image/character.png",
        width: 1672,
        height: 941,
        alt: "Tom Cottu, développeur IA freelance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Développeur IA freelance — Agents IA sur mesure pour PME",
    description:
      "Des agents IA qui font le travail, pas la démo. Conception sur mesure et automatisation pour PME.",
    images: ["/hero-image/character.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="preconnect"
          href="https://db.onlinewebfonts.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/5ac3fe7c6abd2f62067f266d89671492?family=HelveticaNowDisplay-Medium"
        />
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/1aa3377e489837a26d019bba501e779d?family=HelveticaNowDisplayW01-Rg"
        />
        <script
          type="application/ld+json"
          // Données structurées : elles permettent à Google d'afficher le
          // métier, la zone desservie et les prestations dans les résultats.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
