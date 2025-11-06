import React from 'react';
import { CookieConsent, Footer, Header } from './components/layout';
import {
  HeroSection,
  DemoSection,
  SocialProofSection,
  FeaturesSection,
  PricingSection,
  TestimonialsSection,
  FAQSection
} from './components/sections';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <DemoSection />
      <SocialProofSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
