'use client';

import React, { useState, useEffect } from 'react';
import { Chrome } from 'lucide-react';
import  ShinyText  from '@/components/ShinyText';
import Magnet from '@/components/Magnet';

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
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
    }`}>
      <Magnet padding={100} disabled={!isVisible}>
        <button
          onClick={handleClick}
          className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent backdrop-blur-sm border-2 border-accent text-white px-6 py-3.5 rounded-full shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/40 hover:scale-105 transition-all duration-300 flex items-center gap-3 font-bold text-base group relative overflow-hidden"
        >
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl group-hover:bg-accent/30 transition-all duration-300" />
          
          <Chrome className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
          <span className="relative z-10">
            <ShinyText 
              text="Add to Chrome" 
              disabled={false}
              speed={3}
              className="text-white font-bold"
            />
          </span>
        </button>
      </Magnet>
    </div>
  );
};
