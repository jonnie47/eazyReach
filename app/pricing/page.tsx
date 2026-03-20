import type { Metadata } from 'next';
import { PricingSection, CTABanner, FAQSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Pricing & Plans — Find B2B Contacts Starting Free',
  description: 'Simple credit-based pricing for B2B contact enrichment, AI calling & outreach. Free trial available. INR pricing for India. No seat fees.',
  alternates: { canonical: 'https://eazyreach.app/pricing' },
};


export default function PricingPage() {
  return (
    <div className="pt-20">
      <PricingSection />
      <CTABanner />
      <FAQSection />
    </div>
  );
}
