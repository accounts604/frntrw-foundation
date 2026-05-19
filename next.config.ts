import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  generateBuildId: () => Date.now().toString(),
  allowedDevOrigins: ['*.trycloudflare.com'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'Cache-Control', value: 'public, s-maxage=60, stale-while-revalidate=300' },
      ],
    },
  ],
};

export default nextConfig;
