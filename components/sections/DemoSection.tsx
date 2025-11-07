import React from 'react';
import { Play } from 'lucide-react';

export const DemoSection: React.FC = () => {
  return (
    <div id="demo" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Play className="w-4 h-4" />
            Product Demo
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">See EazyReach in Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how our contact intelligence platform helps you find verified LinkedIn contacts in seconds
          </p>
        </div>

        <div className="relative">
          {/* Decorative background blur */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20"></div>
          
          {/* Video container */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-4 border border-gray-200">
            <div className="relative rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/_Z0bMaFcIU8?si=eWTx1b2Dhuv3cb39"
                title="EazyReach Demo - LinkedIn Contact Finder"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Call-to-action below video */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ready to start finding contacts?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Start Free Trial
            </button>
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-gray-400 hover:shadow-lg transition-all duration-200"
            >
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
