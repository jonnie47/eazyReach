'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Search, Users, Zap, Chrome,
  Building, TrendingUp, Award, MapPin, Headphones,
  Bot, Linkedin, Database, Target, Check, ArrowRight, Star
} from 'lucide-react';
import { CityConfig } from '@/constants/cityConfigs';

// Re-export cityConfigs for backward compatibility
export { cityConfigs } from '@/constants/cityConfigs';

// Icon mapping for use cases
const iconMap = {
  Building,
  Users,
  Database,
  Zap,
  Headphones,
  TrendingUp,
  Target,
  Award,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 20,
    }
  }
};

export default function CityLandingPageTemplate({ cityData }: { cityData: CityConfig }) {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-60" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <motion.div
          className="max-w-6xl mx-auto text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* City Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{cityData.name}, India</span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">LinkedIn Phone Finder for</span>
            <br />
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              {cityData.name} Businesses
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {cityData.description}
          </motion.p>

          {/* Industries */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-10">
            {cityData.industries.map((industry, i) => (
              <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300">
                {industry}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-accent via-[#D4A000] to-accent bg-size-200 bg-pos-0 hover:bg-pos-100 text-black rounded-xl font-bold text-lg shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Chrome className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Get {cityData.name} Contacts</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {cityData.stats.map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How {cityData.name} Teams Use EazyReach
            </h2>
            <p className="text-xl text-gray-400">
              Find the right contacts for your {cityData.name} business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {cityData.useCases.map((useCase, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  {(() => {
                    const IconComponent = iconMap[useCase.iconName];
                    return IconComponent ? <IconComponent className="w-6 h-6 text-accent" /> : null;
                  })()}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Covers All {cityData.name} Areas
            </h2>
            <p className="text-xl text-gray-400">
              Find contacts across all business districts and neighborhoods
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {cityData.neighborhoods.map((area, i) => (
              <span
                key={i}
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-accent/10 hover:border-accent/30 transition-all duration-300 cursor-default"
              >
                <MapPin className="w-4 h-4 inline-block mr-2 text-accent" />
                {area}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xl text-gray-300 mb-6 italic">
              &quot;{cityData.testimonial.quote}&quot;
            </p>
            <div className="flex items-center justify-center gap-4">
              <div>
                <p className="text-white font-semibold">{cityData.testimonial.company}</p>
                <p className="text-gray-500 text-sm">{cityData.testimonial.role}</p>
              </div>
              <div className="px-4 py-2 rounded-lg bg-green-500/20 text-green-400 text-sm font-medium">
                {cityData.testimonial.metric}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Finding {cityData.name} Contacts Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of {cityData.name} sales teams using EazyReach to close more deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-accent via-[#D4A000] to-accent bg-size-200 bg-pos-0 hover:bg-pos-100 text-black rounded-xl font-bold text-lg shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all duration-500 relative overflow-hidden"
              >
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Chrome className="w-6 h-6 relative z-10" />
                <span className="relative z-10">Add to Chrome</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
