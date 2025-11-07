import React from 'react';
import { Mail, Infinity, CheckCircle } from 'lucide-react';

export const UnlimitedEmailSection: React.FC = () => {
  return (
    <div id="unlimited-email" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Mail className="w-4 h-4" />
            Unlimited Email Access
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unlimited Verified Email Addresses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get unlimited access to professional email addresses at just ₹3 per contact. No limits, no restrictions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Infinity className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Unlimited Lookups</h3>
            <p className="text-gray-600 leading-relaxed">
              No daily limits or monthly caps. Look up as many emails as you need for your campaigns.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Emails</h3>
            <p className="text-gray-600 leading-relaxed">
              All emails are verified and up-to-date. Reduce bounce rates and improve deliverability.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Format</h3>
            <p className="text-gray-600 leading-relaxed">
              Get work emails in standard business format. Perfect for cold outreach and networking.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Special Offer: Just ₹3 per Email</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Build unlimited contact lists for your sales and marketing campaigns. Pay only for what you use.
          </p>
          <button 
            onClick={() => window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank')}
            className="px-10 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
          >
            Start Finding Emails Now
          </button>
        </div>
      </div>
    </div>
  );
};
