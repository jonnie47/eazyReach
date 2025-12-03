import CityLandingPageTemplate from '@/components/sections/CityLandingTemplate';
import { cityConfigs } from '@/constants/cityConfigs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LinkedIn Phone Finder Mumbai | Business Contacts | EazyReach',
  description: 'Find direct mobile numbers of Mumbai business leaders, directors, and decision-makers. Perfect for BFSI, media, manufacturing, and real estate sales teams. Chrome extension.',
  keywords: ['linkedin phone finder mumbai', 'mumbai business contacts', 'bfsi leads mumbai', 'director mobile number mumbai'],
  openGraph: {
    title: 'LinkedIn Phone Finder Mumbai | EazyReach',
    description: 'Extract phone numbers of Mumbai business leaders. Works on LinkedIn & Zaubacorp. One-click calling included.',
    url: 'https://eazyreach.app/india/mumbai/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://eazyreach.app/india/mumbai/',
  },
};

export default function MumbaiPage() {
  return <CityLandingPageTemplate cityData={cityConfigs.mumbai} />;
}
