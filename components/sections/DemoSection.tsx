import React from 'react';
import { Play } from 'lucide-react';

export const DemoSection: React.FC = () => {
  return (
    <div id="demo" className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Play className="w-4 h-4" />
            Product Demo
          </div> */}
          <h2 className="text-4xl font-bold text-accent mb-4">See EazyReach in Action</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Watch how our contact intelligence platform helps you find verified LinkedIn contacts in seconds
          </p>
        </div>

        <div className="relative">
          {/* Decorative background blur */}
          <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl"></div>
          
          {/* Video container */}
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-yellow-400/10 p-4 border border-gray-800">
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
          <p className="text-gray-300 mb-6">Ready to start finding contacts?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi', '_blank')}
              className="px-8 py-4 bg-transparent  text-accent border border-accent rounded-xl font-bold text-lg hover:bg-accent-hover hover:scale-105 transition-all duration-200"
            >
              Start Free Trial
            </button>
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4bg-transparent  text-accent border border-accent rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-yellow-400/50 hover:shadow-lg transition-all duration-200"
            >
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
