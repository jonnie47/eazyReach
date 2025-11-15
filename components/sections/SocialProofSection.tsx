import React from 'react';
import { LogoMarquee } from '../ui/LogoMarquee';

export const SocialProofSection: React.FC = () => {
  return (
    <div className="py-16 bg-black border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-accent mb-2">10,000+</div>
            <p className="text-gray-300 font-medium">Contacts Found Daily</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">91%</div>
            <p className="text-gray-300 font-medium">Data Accuracy Rate</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <p className="text-gray-300 font-medium">Enterprise Customers</p>
          </div>
        </div>
        
        <LogoMarquee />
      </div>
    </div>
  );
};
