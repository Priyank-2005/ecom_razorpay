import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['via.placeholder.com'], // 👈 add allowed image host
  },
};

export default nextConfig;
