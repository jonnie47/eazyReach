import React from 'react';
import { Phone, Shield, Zap } from 'lucide-react';

export const DirectorPhoneSection: React.FC = () => {
  return (
    <div id="director-phone" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Phone className="w-4 h-4" />
              CXO Phone Feature
            </div>
            <h2 className="text-4xl font-bold text-accent mb-6">
              Get Direct Access to Decision Makers
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Find CXO-level phone numbers instantly from LinkedIn profiles. Skip gatekeepers and connect directly with key decision makers at just ?1 per contact.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100 mb-2">Instant Results</h3>
                  <p className="text-gray-300">Get verified phone numbers in under 10 seconds. No manual searching required.</p>
                </div>
              </div>
              
              {/* <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100 mb-2">100% Refund Guarantee</h3>
                  <p className="text-gray-300">Wrong number? Get automatic credit refund within 24 hours.</p>
                </div>
              </div> */}
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100 mb-2">Direct Lines Only</h3>
                  <p className="text-gray-300">Access personal phone numbers, not company switchboards.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#0a0a0a] rounded-2xl p-8 border-2 border-accent/30">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">Contact Type</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">CXO Level</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Phone Number</span>
                    <span className="font-mono font-bold text-gray-900">+91 98765 43210</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Credits Used</span>
                    <span className="font-bold text-blue-600">1 credit (?1)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Accuracy</span>
                    <span className="font-bold text-green-600">91% Verified</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">Perfect for B2B sales & recruitment</p>
                <button 
                  onClick={() => window.open('https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi', '_blank')}
                  className="w-full px-6 py-3 bg-accent text-black rounded-lg font-semibold hover:bg-accent-hover transition-all duration-200"
                >
                  Try CXO Phone Feature
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
