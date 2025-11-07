import React from 'react';
import { LogoMarquee } from '../ui/LogoMarquee';

export const SocialProofSection: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
            <p className="text-gray-600 font-medium">Contacts Found Daily</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">91%</div>
            <p className="text-gray-600 font-medium">Data Accuracy Rate</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <p className="text-gray-600 font-medium">Enterprise Customers</p>
          </div>
        </div>
        
        <LogoMarquee />
      </div>
    </div>
  );
};
