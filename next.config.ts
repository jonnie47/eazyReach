import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      { source: '/blog/:path*',        destination: 'https://blogs.eazyreach.app/blog/:path*' },
      { source: '/blogs/:path*',       destination: 'https://blogs.eazyreach.app/blogs/:path*' },
      { source: '/index_files/:path*', destination: 'https://blogs.eazyreach.app/index_files/:path*' },
      { source: '/css/:path*',         destination: 'https://blogs.eazyreach.app/css/:path*' },
      { source: '/js/:path*',          destination: 'https://blogs.eazyreach.app/js/:path*' },
      { source: '/images/:path*',      destination: 'https://blogs.eazyreach.app/images/:path*' },
      { source: '/fonts/:path*',       destination: 'https://blogs.eazyreach.app/fonts/:path*' },
      { source: '/assets/:path*',      destination: 'https://blogs.eazyreach.app/assets/:path*' },
      { source: '/static/:path*',      destination: 'https://blogs.eazyreach.app/static/:path*' },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'blogs.eazyreach.app' },
      { protocol: 'https', hostname: 'cdn.vocallabs.ai' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
};

export default nextConfig;
