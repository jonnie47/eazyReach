import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blogs.vocallabs.ai',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      // WordPress assets
      {
        source: '/wp-content/:path*',
        destination: 'https://blogs.vocallabs.ai/wp-content/:path*',
      },
      {
        source: '/wp-includes/:path*',
        destination: 'https://blogs.vocallabs.ai/wp-includes/:path*',
      },
    ];
  },
};

export default nextConfig;
