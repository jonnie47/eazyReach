import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EazyReach — AI-First B2B Contact Enrichment & Outreach',
    short_name: 'EazyReach',
    description:
      'Find verified phone numbers, emails & LinkedIn contacts for Indian decision-makers. AI-powered enrichment, browser calling & outreach automation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#F4B400',
    lang: 'en-IN',
    orientation: 'portrait',
    icons: [
      {
        src: '/EazyE.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/EazyE.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/EazyE.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
