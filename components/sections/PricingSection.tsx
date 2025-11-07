'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PRICING_TIERS } from '../../constants/pricing';
import { Button } from '../ui/Button';

export const PricingSection: React.FC = () => {
  return (
    <div id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Pay only for what you use. No subscriptions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-gray-900">₹{tier.price}</span>
                <span className="text-gray-500 text-sm">/ contact</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-1">{tier.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{tier.description}</p>
              
              <div className="text-xs text-gray-500 mb-4">
                {tier.credits} credit{tier.credits > 1 ? 's' : ''}
              </div>

              <button
                onClick={() => window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank')}
                className="w-full py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

<div className="flex flex-col items-center text-center justify-center">
          <Button 
            variant="outline" 
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
