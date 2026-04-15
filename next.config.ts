import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Uncomment the line below if this is a project site (not username.github.io)
  ...(process.env.NODE_ENV === 'production' && { basePath: "/myportfolio" }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
