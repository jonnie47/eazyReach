'use client';

import {
  HeroSection,
  DemoSection,
  SocialProofSection,
  FeaturesSection,
  PricingSection,
  CTABanner,
  FAQSection
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DemoSection />
      <SocialProofSection />
      <FeaturesSection />
      <PricingSection />
      <CTABanner />
      <FAQSection />
    </>
  );
}
