import React from 'react';
import { DirectorPhoneSection } from '../components/sections';
import { CTABanner, FAQSection } from '../components/sections';

export const DirectorPhonePage: React.FC = () => {
  return (
    <>
      <DirectorPhoneSection />
      <CTABanner />
      <FAQSection />
    </>
  );
};
