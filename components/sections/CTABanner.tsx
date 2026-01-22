'use client';

import React from 'react';
import { Chrome, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import DotGrid from '@/components/DotGrid';

export const CTABanner: React.FC = () => {
  const handleAddToChrome = () => {
    window.open('https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi', '_blank');
  };

  return (
    <div className="py-32 relative overflow-hidden bg-black">
      {/* Interactive Dot Grid Background */}
      <div className="absolute inset-0 opacity-40">
        <DotGrid
          dotSize={3}
          gap={40}
          baseColor="#FFB800"
          activeColor="#FFFFFF"
          proximity={120}
          speedTrigger={80}
          shockRadius={200}
          shockStrength={8}
          resistance={600}
          returnDuration={1.8}
        />
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-semibold text-accent">Start Finding Contacts Now</span>
        </motion.div>

        {/* Main Heading with Animation */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white"
        >
          Find Verified Phone Numbers
          <br />
          <span className="text-accent">in Seconds.</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed"
        >
          Join <span className="text-accent font-bold">10,000+</span> sales pros and recruiters using{' '}
          <span className="text-white font-semibold">EazyReach</span> for instant, accurate contact data.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={handleAddToChrome}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-accent via-[#D4A000] to-accent bg-size-200 bg-pos-0 hover:bg-pos-100 text-black rounded-xl font-bold text-lg shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all duration-500 group relative overflow-hidden"
          >
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            
            <Chrome className="w-6 h-6 relative z-10" />
            <span className="relative z-10">Add to Chrome</span>
            {/* <Zap className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" /> */}
          </motion.button>
        </motion.div>

        {/* Trust Badge */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-sm text-gray-500"
        ></motion.p>
      </div>
    </div>
  );
};
