import React from 'react';
import { CookieConsent, Footer, Header } from './components/layout';
import {
  HeroSection,
  DemoSection,
  SocialProofSection,
  FeaturesSection,
  PricingSection,
  TestimonialsSection,
  FAQSection,
  CTABanner
} from './components/sections';
import { FloatingCTA } from './components/ui';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <DemoSection />
      <SocialProofSection />
      <FeaturesSection />
      <PricingSection />
      {/* <TestimonialsSection /> */}
      <CTABanner />
      <FAQSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
