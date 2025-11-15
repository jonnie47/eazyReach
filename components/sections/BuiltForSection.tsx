'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Search, 
  Phone, 
  TrendingUp, 
  Clock,
  Users,
  BarChart3,
  Shield,
  Boxes,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const columnVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
      duration: 0.8
    }
  }
};

const screenshotVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const BuiltForSection: React.FC = () => {
  const individualFeatures = [
    {
      icon: Search,
      text: 'Find verified contacts from LinkedIn and company sources'
    },
    {
      icon: Boxes,
      text: 'Multi-source enrichment with email, phone, and job data'
    },
    {
      icon: Phone,
      text: 'Direct call from Chrome extension with one click'
    },
    {
      icon: Sparkles,
      text: 'Higher response rates using AI-powered personalization'
    },
    {
      icon: Clock,
      text: 'Save hours by skipping manual research and data entry'
    }
  ];

  const teamFeatures = [
    {
      icon: TrendingUp,
      text: 'Scale enrichment and calling workflows across entire team'
    },
    {
      icon: BarChart3,
      text: 'Usage visibility and reporting with real-time analytics'
    },
    {
      icon: Shield,
      text: 'Role-based access controls and permission management'
    },
    {
      icon: Boxes,
      text: 'API and dashboard integrations with your existing stack'
    },
    {
      icon: Users,
      text: 'Team-wide productivity boost with shared contact database'
    }
  ];

  return (
    <div className="py-24 bg-black relative overflow-hidden">
      {/* Ambient background */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[180px]" />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Built for All.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re an individual seller or managing a sales team, our platform scales with your needs—from instant contact discovery to enterprise-grade workflow automation.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column: Individual Sellers */}
          <motion.div
            variants={columnVariants}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-accent/30 shadow-accent/20 hover:shadow-accent/40 transition-all duration-500">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-100" />
              
              <div className="relative z-10">
                {/* Category Label */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/30 mb-6">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">For Individual Sellers</span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                  Supercharge Your Sales
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  Find, enrich, and connect with decision-makers in seconds. Turn cold prospects into warm conversations with AI-powered insights and instant contact data.
                </p>

                {/* Screenshot Container */}
                <motion.div
                  variants={screenshotVariants}
                  className="relative mb-8 rounded-2xl overflow-hidden border border-accent/20 shadow-xl shadow-accent/10 group-hover:shadow-accent/30 transition-all duration-500"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  {/* Screenshot Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] relative">
                    {/* Mockup UI Elements */}
                    <div className="absolute inset-0 p-6 flex flex-col gap-3">
                      {/* Top bar - Search/Filter */}
                      <div className="h-10 bg-accent/5 rounded-lg border border-accent/20 flex items-center px-4 gap-3">
                        <Search className="w-4 h-4 text-accent/60" />
                        <div className="h-2 w-32 bg-accent/20 rounded" />
                        <div className="ml-auto flex gap-2">
                          <div className="h-6 w-6 bg-accent/30 rounded" />
                          <div className="h-6 w-6 bg-accent/30 rounded" />
                        </div>
                      </div>
                      {/* Content rows - Contact Cards */}
                      <div className="flex-1 grid grid-cols-2 gap-3">
                        <div className="bg-accent/5 rounded-lg border border-accent/20 p-4 flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-accent/30" />
                            <div className="flex-1">
                              <div className="h-2 w-20 bg-accent/40 rounded mb-1" />
                              <div className="h-1.5 w-16 bg-accent/20 rounded" />
                            </div>
                          </div>
                          <div className="space-y-1.5 mt-2">
                            <div className="h-1.5 w-full bg-accent/15 rounded" />
                            <div className="h-1.5 w-3/4 bg-accent/15 rounded" />
                          </div>
                          <div className="mt-auto flex gap-1">
                            <div className="h-5 w-12 bg-accent/25 rounded" />
                            <div className="h-5 w-12 bg-accent/25 rounded" />
                          </div>
                        </div>
                        <div className="bg-accent/5 rounded-lg border border-accent/20 p-4 flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-accent/30" />
                            <div className="flex-1">
                              <div className="h-2 w-20 bg-accent/40 rounded mb-1" />
                              <div className="h-1.5 w-16 bg-accent/20 rounded" />
                            </div>
                          </div>
                          <div className="space-y-1.5 mt-2">
                            <div className="h-1.5 w-full bg-accent/15 rounded" />
                            <div className="h-1.5 w-2/3 bg-accent/15 rounded" />
                          </div>
                          <div className="mt-auto flex gap-1">
                            <div className="h-5 w-12 bg-accent/25 rounded" />
                            <div className="h-5 w-12 bg-accent/25 rounded" />
                          </div>
                        </div>
                      </div>
                      {/* Bottom section - Action Bar */}
                      <div className="h-20 bg-gradient-to-r from-accent/10 to-accent/10 rounded-lg border border-accent/30 flex items-center px-6 gap-4">
                        <Phone className="w-5 h-5 text-accent" />
                        <div className="flex-1 space-y-1">
                          <div className="h-2 w-24 bg-accent/40 rounded" />
                          <div className="h-1.5 w-32 bg-accent/20 rounded" />
                        </div>
                        <div className="h-10 w-24 bg-accent/40 rounded-lg" />
                      </div>
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>

                {/* Feature List */}
                <div className="space-y-4 mb-8">
                  {individualFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <feature.icon className="w-3.5 h-3.5 text-accent" />
                      </div>
                      <span className="text-sm text-gray-300 leading-relaxed">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={() => window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank')}
                  className="w-full py-4 px-6 bg-transparent text-white font-bold rounded-xl border-2 border-accent hover:bg-accent/10 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Start Now</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  
                  {/* Shine effect */}
                  {/* <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  /> */}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sales Teams */}
          <motion.div
            variants={columnVariants}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-accent/30  shadow-accent/20 hover:shadow-accent/40 transition-all duration-500">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-100" />
              
              <div className="relative z-10">
                {/* Category Label */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/30 mb-6">
                  <Users className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">For Sales Teams</span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                  Scale Your Revenue Engine
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  Empower your entire team with centralized contact intelligence, unified workflows, and enterprise-grade controls. Drive consistent results across every rep.
                </p>

                {/* Screenshot Container */}
                <motion.div
                  variants={screenshotVariants}
                  className="relative mb-8 rounded-2xl overflow-hidden border border-accent/20 shadow-xl shadow-accent/10 group-hover:shadow-accent/30 transition-all duration-500"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  {/* Screenshot Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] relative">
                    {/* Mockup UI Elements - Dashboard Style */}
                    <div className="absolute inset-0 p-6 flex flex-col gap-3">
                      {/* Header with stats */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-12 bg-accent/5 rounded-lg border border-accent/20 flex flex-col justify-center px-3">
                          <div className="h-1.5 w-12 bg-accent/30 rounded mb-1" />
                          <div className="h-2.5 w-16 bg-accent/50 rounded" />
                        </div>
                        <div className="h-12 bg-accent/5 rounded-lg border border-accent/20 flex flex-col justify-center px-3">
                          <div className="h-1.5 w-12 bg-accent/30 rounded mb-1" />
                          <div className="h-2.5 w-16 bg-accent/50 rounded" />
                        </div>
                        <div className="h-12 bg-accent/5 rounded-lg border border-accent/20 flex flex-col justify-center px-3">
                          <div className="h-1.5 w-12 bg-accent/30 rounded mb-1" />
                          <div className="h-2.5 w-16 bg-accent/50 rounded" />
                        </div>
                      </div>
                      {/* Chart area */}
                      <div className="flex-1 bg-gradient-to-br from-accent/10 to-accent/10 rounded-lg border border-accent/30 relative overflow-hidden p-4">
                        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-accent/20 to-transparent" />
                        {/* Chart bars */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                          <div className="w-full h-12 bg-accent/40 rounded-t" />
                          <div className="w-full h-20 bg-accent/50 rounded-t" />
                          <div className="w-full h-16 bg-accent/40 rounded-t" />
                          <div className="w-full h-24 bg-accent/60 rounded-t" />
                          <div className="w-full h-14 bg-accent/40 rounded-t" />
                          <div className="w-full h-28 bg-accent/70 rounded-t" />
                        </div>
                        {/* Y-axis labels */}
                        <div className="absolute top-4 left-4 space-y-2">
                          <div className="h-1 w-6 bg-accent/20 rounded" />
                          <div className="h-1 w-6 bg-accent/20 rounded" />
                          <div className="h-1 w-6 bg-accent/20 rounded" />
                        </div>
                      </div>
                      {/* Team list */}
                      <div className="h-16 bg-accent/5 rounded-lg border border-accent/20 flex items-center px-4 gap-3">
                        <Users className="w-4 h-4 text-accent/60" />
                        <div className="flex gap-2">
                          <div className="w-6 h-6 rounded-full bg-accent/40" />
                          <div className="w-6 h-6 rounded-full bg-accent/40" />
                          <div className="w-6 h-6 rounded-full bg-accent/40" />
                          <div className="w-6 h-6 rounded-full bg-accent/30 flex items-center justify-center text-[8px] text-accent">+5</div>
                        </div>
                        <div className="ml-auto flex gap-2">
                          <BarChart3 className="w-4 h-4 text-accent/60" />
                          <div className="h-2 w-16 bg-accent/30 rounded self-center" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>

                {/* Feature List */}
                <div className="space-y-4 mb-8">
                  {teamFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <feature.icon className="w-3.5 h-3.5 text-accent" />
                      </div>
                      <span className="text-sm text-gray-300 leading-relaxed">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={() => window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank')}
                  className="w-full py-4 px-6 bg-transparent text-white font-bold rounded-xl border-2 border-accent hover:bg-accent/10 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Get a Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
