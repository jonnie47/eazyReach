'use client';

import { FeaturesSection, CTABanner, FAQSection } from '@/components/sections';

export default function FeaturesPage() {
  return (
    <div className="pt-20">
      <FeaturesSection />
      <CTABanner />
      <FAQSection />
    </div>
  );
}
