import React from 'react';
import { FeaturesSection } from '../components/sections';
import { CTABanner, FAQSection } from '../components/sections';

export const FeaturesPage: React.FC = () => {
  return (
    <>
      <FeaturesSection />
      <CTABanner />
      <FAQSection />
    </>
  );
};
