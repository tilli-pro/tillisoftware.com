import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {},
  cacheComponents: true,
  cacheMaxMemorySize: 128 * 1024 * 1024, // 128 MB
  poweredByHeader: false,
  images: {
    remotePatterns: [new URL("https://placecats.com/**")],
    // dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
