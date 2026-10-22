import type { NextConfig } from "next";

/** Must match the GitHub repo name exactly when deployed on Pages. */
const repoBase = process.env.NODE_ENV === "production" ? "/LongTok" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBase || undefined,
  assetPrefix: repoBase || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
