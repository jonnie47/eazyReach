import React from 'react';
import { Chrome } from 'lucide-react';

export const CTABanner: React.FC = () => {
  const handleAddToChrome = () => {
    window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank');
  };

  return (
    <div className="py-20 bg-accent/5 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-accent mb-6">
          Find Verified Phone Numbers in Seconds.
        </h2>
        <p className="text-xl lg:text-2xl text-gray-300 mb-10">
          Join 10,000+ sales pros and recruiters using EazyReach for instant, accurate contact data.
        </p>
        
        <button
          onClick={handleAddToChrome}
          className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-accent text-accent rounded-lg font-semibold text-lg shadow-md hover:shadow-lg hover:shadow-accent/30 hover:scale-105 transition-all duration-300 group"
        >
          <Chrome className="w-6 h-6 text-accent" />
          <span>Add to Chrome</span>
        </button>
      </div>
    </div>
  );
};
