import CityLandingPageTemplate from '@/components/sections/CityLandingTemplate';
import { cityConfigs } from '@/constants/cityConfigs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LinkedIn Phone Finder Hyderabad | Tech & Pharma Contacts | EazyReach',
  description: 'Find mobile numbers of Hyderabad tech leaders, pharma executives, and startup founders. Covers HITEC City, Gachibowli, Genome Valley. Chrome extension.',
  keywords: ['linkedin phone finder hyderabad', 'hyderabad tech contacts', 'pharma leads hyderabad', 'hitec city contacts'],
  openGraph: {
    title: 'LinkedIn Phone Finder Hyderabad | EazyReach',
    description: 'Extract phone numbers of Hyderabad tech and pharma leaders. Works on LinkedIn & Zaubacorp. One-click calling included.',
    url: 'https://eazyreach.app/india/hyderabad/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://eazyreach.app/india/hyderabad/',
  },
};

export default function HyderabadPage() {
  return <CityLandingPageTemplate cityData={cityConfigs.hyderabad} />;
}
