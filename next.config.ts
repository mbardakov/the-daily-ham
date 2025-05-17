import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath: '/the-daily-ham',
  output: 'export',
  reactStrictMode: true,
  assetPrefix: "/",
  // images: {
  //   loader: 'custom',
  //   loaderFile: 'src/app/util/loader.ts',
  // },
  images: {
    unoptimized: true,
  }
  /* config options here */
};

export default nextConfig;
