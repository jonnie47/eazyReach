'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRICING_TIERS } from '../../constants/pricing';
import { Sparkles, Zap, CreditCard, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    }
  }
};

export const PricingSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div id="pricing" className="py-24 bg-black relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-accent/20">
              <CreditCard className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Billing Console</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-center tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto leading-relaxed">
            Pay only for what you use. No hidden fees, no subscriptions. Scale effortlessly with credit-based pricing.
          </p>
        </motion.div>

        {/* Pricing Grid - Masonry Style */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PRICING_TIERS.map((tier, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group"
              >
                {/* Pricing Card */}
                <div
                  className="relative h-full bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl p-8 border border-accent/40 shadow-xl shadow-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-accent/50"
                >
                  {/* Inner glow effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-100 transition-opacity duration-500"
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Credit Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 rounded-full border border-white/10">
                        <Zap className="w-3 h-3 text-accent" />
                        <span className="text-xs font-medium text-gray-300">
                          {tier.credits} Credit{tier.credits > 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>

                    {/* Pricing */}
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    >
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-5xl font-bold text-white">₹{tier.price}</span>
                        <span className="text-gray-500 text-sm font-medium">/ contact</span>
                      </div>
                      
                      {/* Divider */}
                      <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-transparent mt-4" />
                    </motion.div>

                    {/* Title & Description */}
                    <div className="mb-6 flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                        {tier.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {tier.description}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      onClick={() => window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank')}
                      className="w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden bg-transparent-to-r from-accent to-accent text-accent border border-accent "
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Get Started</span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                      
                      {/* Button shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '200%' }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        {/* <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="inline-flex flex-col items-center gap-6 bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl p-10 border border-white/5">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-gray-400">Need more credits?</span>
            </div>
            
            <motion.button
              onClick={() => window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank')}
              className="px-8 py-4 bg-transparent text-accent border border-accent font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 shadow-xl shadow-white/10"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <CreditCard className="w-5 h-5" />
              <span>Buy Credits Now</span>
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </motion.button>

            <p className="text-xs text-gray-500">
              Enterprise plans available • Volume discounts • Custom integrations
            </p>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};
