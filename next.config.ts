import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-481c073fb7994d50ab97163e55cad4d5.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
