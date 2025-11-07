import React from 'react';
import { UnlimitedEmailSection } from '../components/sections';
import { CTABanner, FAQSection } from '../components/sections';

export const UnlimitedEmailPage: React.FC = () => {
  return (
    <>
      <UnlimitedEmailSection />
      <CTABanner />
      <FAQSection />
    </>
  );
};
