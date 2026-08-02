import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL, jsonLd } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/react";
import { ChatWidget } from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Développeur IA freelance, agents IA sur mesure pour PME",
    // Suffixe court : Google n'affiche qu'une soixantaine de caractères, un
    // suffixe de 29 signes mangeait la fin des titres de page.
    template: "%s | Tom Cottu",
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
    title: "Développeur IA freelance, agents IA sur mesure pour PME",
    description:
      "Des agents IA qui font le travail, pas la démo. Conception sur mesure, automatisation de workflows et assistants auto-hébergés pour PME.",
    images: [
      {
        url: "/hero-image/character.webp",
        width: 1672,
        height: 941,
        alt: "Tom Cottu, développeur IA freelance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Développeur IA freelance, agents IA sur mesure pour PME",
    description:
      "Des agents IA qui font le travail, pas la démo. Conception sur mesure et automatisation pour PME.",
    images: ["/hero-image/character.webp"],
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
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" content="4cuYhgE6yJGMNSE6u5NYiRH8ErLrjhqGWw0dTymdNmk" />
        <script
          type="application/ld+json"
          // Données structurées : elles permettent à Google d'afficher le
          // métier, la zone desservie et les prestations dans les résultats.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        {children}
        <Analytics />
        <ChatWidget />
      </body>
    </html>
  );
}
