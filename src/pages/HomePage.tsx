import React from 'react';
import {
  HeroSection,
  DemoSection,
  SocialProofSection,
  FeaturesSection,
  PricingSection,
  CTABanner,
  FAQSection
} from '../components/sections';

export const HomePage: React.FC = () => {
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
};
