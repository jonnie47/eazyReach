import React from 'react';
import { PricingSection } from '../components/sections';
import { CTABanner, FAQSection } from '../components/sections';

export const PricingPage: React.FC = () => {
  return (
    <>
      <PricingSection />
      <CTABanner />
      <FAQSection />
    </>
  );
};
