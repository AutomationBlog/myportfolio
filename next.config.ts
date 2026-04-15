import type { NextConfig } from "next";

const prodBasePath = process.env.NODE_ENV === 'production'
  ? process.env.NEXT_PUBLIC_BASE_PATH_PROD
  : process.env.NEXT_PUBLIC_BASE_PATH_LOCAL;

const nextConfig: NextConfig = {
  output: "export",
  // Uncomment the line below if this is a project site (not username.github.io)
  ...(prodBasePath ? { basePath: prodBasePath } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
