import CityLandingPageTemplate from '@/components/sections/CityLandingTemplate';
import { cityConfigs } from '@/constants/cityConfigs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LinkedIn Phone Finder Bangalore | IT & Startup Contacts | EazyReach',
  description: 'Find mobile numbers of Bangalore tech leaders, startup founders, CTOs, and IT decision-makers. Optimized for IT parks, startups, and tech companies. Chrome extension.',
  keywords: ['linkedin phone finder bangalore', 'bangalore tech contacts', 'startup founder database bangalore', 'it recruiter tools bangalore'],
  openGraph: {
    title: 'LinkedIn Phone Finder Bangalore | EazyReach',
    description: 'Extract phone numbers of Bangalore tech leaders and startup founders. Works on LinkedIn & Zaubacorp. One-click calling included.',
    url: 'https://eazyreach.app/india/bangalore/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://eazyreach.app/india/bangalore/',
  },
};

export default function BangalorePage() {
  return <CityLandingPageTemplate cityData={cityConfigs.bangalore} />;
}
