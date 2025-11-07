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
      // Proxy all blog routes
      {
        source: '/blogs/:path*',
        destination: 'https://blogs.vocallabs.ai/blogs/:path*',
      },
      {
        source: '/blog/:path*',
        destination: 'https://blogs.vocallabs.ai/blog/:path*',
      },
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
        source: '/index_files/:path*',
        destination: 'https://blogs.vocallabs.ai/index_files/:path*',
      },
    ];
  },
};

export default nextConfig;
