import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://github.com/mank-423/orderLLM/assets/**')],
  }
};

export default nextConfig;
