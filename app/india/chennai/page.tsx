import CityLandingPageTemplate from '@/components/sections/CityLandingTemplate';
import { cityConfigs } from '@/constants/cityConfigs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LinkedIn Phone Finder Chennai | Manufacturing & IT Contacts | EazyReach',
  description: 'Find mobile numbers of Chennai business leaders across automobile, IT, manufacturing, and port logistics. Covers OMR, Guindy, Ambattur. Chrome extension.',
  keywords: ['linkedin phone finder chennai', 'chennai manufacturing contacts', 'omr it contacts', 'chennai automobile leads'],
  openGraph: {
    title: 'LinkedIn Phone Finder Chennai | EazyReach',
    description: 'Extract phone numbers of Chennai manufacturing and IT leaders. Works on LinkedIn & Zaubacorp. One-click calling included.',
    url: 'https://eazyreach.app/india/chennai/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://eazyreach.app/india/chennai/',
  },
};

export default function ChennaiPage() {
  return <CityLandingPageTemplate cityData={cityConfigs.chennai} />;
}
