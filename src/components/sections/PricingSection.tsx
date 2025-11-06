import React from 'react';
import { PRICING_TIERS } from '../../constants/pricing';
import { Button } from '../ui/Button';

export const PricingSection: React.FC = () => {
  return (
    <div id="pricing" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple per-contact pricing — pay only for what you use</h2>
          <p className="text-xl text-gray-600">Transparent INR pricing. No hidden fees. No subscriptions.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {PRICING_TIERS.map((tier, index) => {
            const isHighlighted = index < 2;
            const gradientClass = isHighlighted
              ? index === 0
                ? 'from-blue-50 to-purple-50 border-blue-200 hover:border-purple-400'
                : 'from-purple-50 to-blue-50 border-purple-200 hover:border-blue-400'
              : 'from-gray-50 to-gray-50 border-gray-200 hover:border-gray-400';

            return (
              <div key={index} className={`bg-gradient-to-br ${gradientClass} rounded-2xl p-8 border-2 transition-colors duration-300`}>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-gray-900">₹{tier.price}</span>
                  <span className="text-gray-600">/ contact</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.title}</h3>
                <p className="text-gray-600 mb-4">{tier.description}</p>
                <div className="text-sm text-gray-500">= {tier.credits} credit{tier.credits > 1 ? 's' : ''}</div>
              </div>
            );
          })}
        </div>

        <div className="text-center flex items-center justify-center">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank')}
          >
            Buy Credits
          </Button>
        </div>
      </div>
    </div>
  );
};
