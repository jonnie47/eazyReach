import type { Metadata } from 'next';
import { FeaturesSection, CTABanner, FAQSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Features — LinkedIn Enrichment, AI Calling & B2B Outreach',
  description: 'Discover EazyReach features: LinkedIn phone & email finder, DIN director lookup, built-in browser calling, AI voice agents, and shared credits for Indian sales teams.',
  alternates: { canonical: 'https://eazyreach.app/features' },
};


export default function FeaturesPage() {
  return (
    <div className="pt-20">
      <FeaturesSection />
      <CTABanner />
      <FAQSection />
    </div>
  );
}
