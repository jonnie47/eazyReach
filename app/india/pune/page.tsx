import CityLandingPageTemplate from '@/components/sections/CityLandingTemplate';
import { cityConfigs } from '@/constants/cityConfigs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LinkedIn Phone Finder Pune | IT & Manufacturing Leads | EazyReach',
  description: 'Find mobile numbers of Pune IT leaders, manufacturing directors, and automotive executives. Covers Hinjewadi, Magarpatta, PCMC. Chrome extension.',
  keywords: ['linkedin phone finder pune', 'pune it contacts', 'manufacturing leads pune', 'hinjewadi contacts'],
  openGraph: {
    title: 'LinkedIn Phone Finder Pune | EazyReach',
    description: 'Extract phone numbers of Pune IT and manufacturing leaders. Works on LinkedIn & Zaubacorp. One-click calling included.',
    url: 'https://eazyreach.app/india/pune/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://eazyreach.app/india/pune/',
  },
};

export default function PunePage() {
  return <CityLandingPageTemplate cityData={cityConfigs.pune} />;
}
