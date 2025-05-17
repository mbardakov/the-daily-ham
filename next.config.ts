import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/the-daily-ham',
  output: 'export',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
