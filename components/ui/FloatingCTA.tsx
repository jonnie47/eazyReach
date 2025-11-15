'use client';

import React, { useState, useEffect } from 'react';
import { Chrome } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the CTA after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-8 right-8 bg-transparent border-2 border-accent from-accent to-accent text-white px-5 py-3 rounded-full shadow-md hover:shadow-lg hover:shadow-accent/30 hover:scale-110 transition-all duration-300 flex items-center gap-2 font-bold text-base z-50 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Chrome className="w-5 h-5 group-hover:animate-bounce" />
      <span>Add to Chrome</span>
    </button>
  );
};
