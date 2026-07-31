import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 n'autorise plus que [75] par défaut. 95 sert aux personnages
    // des cas d'usage, qui piquent à la recompression en dessous.
    qualities: [75, 95],
  },
};

export default nextConfig;
