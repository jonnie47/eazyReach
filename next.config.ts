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
      {
        source: '/wp-admin/:path*',
        destination: 'https://blogs.vocallabs.ai/wp-admin/:path*',
      },
      // Handle any other assets that might be needed
      {
        source: '/index_files/:path*',
        destination: 'https://blogs.vocallabs.ai/index_files/:path*',
      },
      {
        source: '/:file.css',
        destination: 'https://blogs.vocallabs.ai/:file.css',
      },
      {
        source: '/:file.js',
        destination: 'https://blogs.vocallabs.ai/:file.js',
      },
    ];
  },
};

export default nextConfig;
