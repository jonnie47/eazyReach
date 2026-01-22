import React from 'react';
import { Handshake, TrendingUp, Users, Award } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  const partners = [
    { name: 'Sales Teams', count: '500+', description: 'Active B2B sales teams using EazyReach daily' },
    { name: 'Recruiters', count: '300+', description: 'Professional recruiters finding top talent' },
    { name: 'Agencies', count: '150+', description: 'Marketing agencies running campaigns' },
    { name: 'Enterprises', count: '50+', description: 'Large companies with dedicated teams' },
  ];

  return (
    <div id="partners" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Handshake className="w-4 h-4" />
            Our Partners
          </div>
          <h2 className="text-4xl font-bold text-accent mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join 1,000+ companies already using EazyReach to accelerate their sales and recruitment processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
              <div className="text-4xl font-bold text-accent mb-2">{partner.count}</div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-300">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-accent/5 rounded-2xl p-12 border border-accent/30">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10,000+</div>
              <p className="text-gray-600">Contacts Found Daily</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1,000+</div>
              <p className="text-gray-600">Happy Users</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">91%</div>
              <p className="text-gray-600">Accuracy Rate</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-100 mb-4">Become a Partner</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Interested in partnership opportunities? Contact us to learn about our partner program and exclusive benefits.
          </p>
          <button 
            onClick={() => window.open('https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi', '_blank')}
            className="px-8 py-3 bg-accent text-black rounded-lg font-semibold hover:bg-accent-hover transition-all duration-200"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};
