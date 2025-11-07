import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components/layout';
import { FloatingCTA } from './components/ui';
import {
  HomePage,
  DirectorPhonePage,
  UnlimitedEmailPage,
  PartnersPage,
  DashboardPage,
  FeaturesPage,
  PricingPage
} from './pages';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/director-phone" element={<DirectorPhonePage />} />
          <Route path="/unlimited-email" element={<UnlimitedEmailPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;
