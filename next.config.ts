import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Headers de sécurité : CSP, X-Frame-Options, Permissions-Policy, etc.
  // Appliqués à toutes les routes (pages statiques + dynamiques).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=(), payment=()",
          },
          {
            key: "X-XSS-Protection",
            value: "0",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' www.googletagmanager.com www.google-analytics.com va.vercel-analytics.com; " +
              "style-src 'self' 'unsafe-inline' fonts.googleapis.com; " +
              "img-src 'self' data: blob: www.googletagmanager.com www.google-analytics.com va.vercel-analytics.com; " +
              "font-src 'self' fonts.gstatic.com; " +
              "connect-src 'self' api.vercel.com va.vercel-analytics.com vwo.in vo.vextel.io; " +
              "frame-src 'self' https://cal.com https://*.cal.com; " +
              "frame-ancestors 'none'; " +
              "base-uri 'self'; " +
              "form-action 'self';",
          },
        ],
      },
    ];
  },
  images: {
    // Next 16 n'autorise plus que [75] par défaut. 95 sert aux personnages
    // des cas d'usage, qui piquent à la recompression en dessous.
    qualities: [75, 95],
  },
};

export default nextConfig;
