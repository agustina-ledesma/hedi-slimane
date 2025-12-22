// next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/fashion/collection/:path*",
        destination: "/maintenance",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
