import React from 'react';
import { Chrome } from 'lucide-react';

export const CTABanner: React.FC = () => {
  const handleAddToChrome = () => {
    window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank');
  };

  return (
    <div className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Find Verified Phone Numbers in Seconds.
        </h2>
        <p className="text-xl lg:text-2xl text-blue-100 mb-10">
          Join 10,000+ sales pros and recruiters using EazyReach for instant, accurate contact data.
        </p>
        
        <button
          onClick={handleAddToChrome}
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group"
        >
          <Chrome className="w-6 h-6 text-blue-600 group-hover:text-purple-600 transition-colors" />
          <span>Add to Chrome — Free</span>
        </button>
      </div>
    </div>
  );
};
