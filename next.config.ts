import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/truth-vs-perception',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
