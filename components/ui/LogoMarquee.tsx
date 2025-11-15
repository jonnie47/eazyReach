import React from 'react';
import { CLIENT_LOGOS } from '../../constants/logos';

export const LogoMarquee: React.FC = () => {
  return (
    <div className="mt-12">
      <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wide">
        Trusted by many
      </p>
      <div className="relative overflow-hidden bg-transparent rounded-2xl py-8">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-transparent from-gray-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-transparent from-gray-900 to-transparent z-10"></div>
        
        {/* Marquee container */}
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Render logos 3 times for seamless loop */}
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-12 lg:gap-16 px-8 shrink-0">
              {CLIENT_LOGOS.map((logo, index) => (
                <img
                  key={`${setIndex}-${index}`}
                  src={logo}
                  alt="Client"
                  className="h-14 w-auto object-contain hover:scale-110 transition-transform duration-300 opacity-90 hover:opacity-100"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
