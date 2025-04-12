const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for development performance
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // Only include performance optimizations that are stable
    optimizePackageImports: ['lucide-react'],
  },
  // Development optimizations
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Optimization for faster development
      config.optimization.minimize = false;
      config.optimization.minimizer = [];
    }
    return config;
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Reduce the watcher to monitor only needed directories
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 15 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  }
};

module.exports = withBundleAnalyzer(nextConfig); 