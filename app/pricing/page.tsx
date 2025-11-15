'use client';

import { PricingSection, CTABanner, FAQSection } from '@/components/sections';

export default function PricingPage() {
  return (
    <div className="pt-20">
      <PricingSection />
      <CTABanner />
      <FAQSection />
    </div>
  );
}
