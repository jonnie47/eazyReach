import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'LinkedIn Phone Number Finder India | EazyReach',
    template: '%s | EazyReach India'
  },
  description: 'Extract Indian mobile numbers from LinkedIn & Zaubacorp. Call prospects directly from Chrome. No Exotel, no Aircall. Works with Airtel, Jio, VI.',
  keywords: [
    'linkedin phone number finder india',
    'din contact extractor',
    'indian mobile number finder',
    'zaubacorp phone lookup',
    'b2b leads india',
    'indian director phone lookup',
    'linkedin contact finder india',
    'browser calling india'
  ],
  openGraph: {
    title: "India's Fastest LinkedIn + Zaubacorp Contact Finder | EazyReach",
    description: 'Extract Indian mobile numbers from LinkedIn profiles & DIN pages. Call directly from Chrome. Join 500+ Indian companies using EazyReach.',
    url: 'https://eazyreach.app/india/',
    siteName: 'EazyReach',
    images: [
      {
        url: 'https://eazyreach.app/og/india-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'EazyReach India - LinkedIn Phone Finder',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinkedIn Phone Finder India + One-Click Calling | EazyReach',
    description: 'Get Indian mobile numbers from LinkedIn. Call from Chrome. Works with DIN/Zaubacorp. Chrome extension.',
    images: ['https://eazyreach.app/twitter/india-card.jpg'],
  },
  alternates: {
    canonical: 'https://eazyreach.app/india/',
    languages: {
      'en-IN': 'https://eazyreach.app/india/',
      'hi': 'https://eazyreach.app/india/hi/',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function IndiaLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
