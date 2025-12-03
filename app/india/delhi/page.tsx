import CityLandingPageTemplate from '@/components/sections/CityLandingTemplate';
import { cityConfigs } from '@/constants/cityConfigs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LinkedIn Phone Finder Delhi NCR | Business Leads Delhi | EazyReach',
  description: 'Find mobile numbers of Delhi, Gurgaon, and Noida business professionals. Covers corporate offices, consulting firms, and NCR businesses. Chrome extension.',
  keywords: ['linkedin phone finder delhi', 'delhi ncr business contacts', 'gurgaon leads', 'noida it contacts'],
  openGraph: {
    title: 'LinkedIn Phone Finder Delhi NCR | EazyReach',
    description: 'Extract phone numbers of Delhi NCR business leaders. Works on LinkedIn & Zaubacorp. One-click calling included.',
    url: 'https://eazyreach.app/india/delhi/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://eazyreach.app/india/delhi/',
  },
};

export default function DelhiPage() {
  return <CityLandingPageTemplate cityData={cityConfigs.delhi} />;
}
