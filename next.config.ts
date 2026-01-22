import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {},
  cacheComponents: true,
  cacheMaxMemorySize: 128 * 1024 * 1024, // 128 MB
  poweredByHeader: false,
  // typedRoutes: true,
  allowedDevOrigins: ["tillisoftware.local"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placecats.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
    // dangerouslyAllowSVG: true,
  },
  experimental: {
    typedEnv: true,
    browserDebugInfoInTerminal: true,
    viewTransition: true,
  },
  generateBuildId() {
    return process.env.GIT_HASH ?? "development-build";
  },
};

export default nextConfig;
