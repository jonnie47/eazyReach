import React from 'react';
import { Chrome } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  const handleClick = () => {
    window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center gap-2 font-semibold text-base z-50 group"
    >
      <Chrome className="w-5 h-5 group-hover:animate-bounce" />
      <span>Get Extension</span>
    </button>
  );
};
