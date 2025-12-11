'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  Search,
  Phone,
  Bot,
  Users,
  Database,
  Linkedin,
  Building2,
  Check,
  Zap,
  Sparkles,
  MessageSquare
} from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Linkedin,
      title: 'LinkedIn Profile Intelligence',
      description: 'Extract verified contact information from any LinkedIn profile instantly.',
      badge: 'Popular',
      badgeColor: 'bg-accent',
      gridClass: 'md:col-span-6',
      features: [
        'Reveal phone and email instantly',
        'Smart caching - never pay twice',
        'Save to CRM with one click',
        'One-click overlay UI'
      ]
    },
    {
      icon: Phone,
      title: 'Direct Calling',
      description: 'Browser-native calling with no downloads required.',
      badge: 'Live',
      badgeColor: 'bg-accent',
      gridClass: 'md:col-span-6',
      features: [
        'Browser-native calling',
        'Multi-token caller IDs',
        'Click-to-call anywhere',
        'Real-time status updates',
      ]
    },
    {
      icon: Search,
      title: 'Search Results Enrichment',
      description: 'Enrich multiple profiles at once from search results.',
      badge: 'Bulk',
      badgeColor: 'bg-accent',
      gridClass: 'md:col-span-3',
      features: [
        'Bulk select profiles',
        'Select all instantly',
        'Bulk import to CRM',
        'Infinite scroll detection'
      ]
    },
    {
      icon: Bot,
      title: 'AI Agent Calling',
      description: 'Let AI handle outbound calls with custom scripts.',
      badge: 'New',
      badgeColor: 'bg-accent',
      gridClass: 'md:col-span-6',
      features: [
        'Custom scripts per campaign',
        'Async with notifications',
        'Natural conversations',
        'CRM integration required'
      ]
    },
    {
      icon: Building2,
      title: 'CXO Intel',
      description: 'Extract CXO info from DIN-based profiles.',
      badge: 'India',
      badgeColor: 'bg-accent',
      gridClass: 'md:col-span-3',
      features: [
        'DIN-based profiles',
        'Perfect for Indian B2B',
        'INR pricing',
        'Local compliance'
      ]
    },
    {
      icon: MessageSquare,
      title: 'MCP Server for AI Agents',
      description: 'Connect Claude Desktop to live B2B data via natural language.',
      badge: 'New',
      badgeColor: 'bg-accent',
      gridClass: 'md:col-span-6',
      features: [
        'Natural language lookup',
        'LinkedIn & DIN enrichment',
        'AI agent-powered calling',
        'Real-time call monitoring'
      ]
    },
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Organize and track all contacts in one place.',
      badge: 'Core',
      badgeColor: 'bg-accent',
      gridClass: 'md:col-span-6',
      features: [
        'Multiple contact groups',
        'Duplicate detection',
        'Fast search & filter',
        'Multi-group support'
      ]
    }
  ];

  return (
    <div id="features" className="py-20 bg-black relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full border border-accent/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-semibold text-accent">Complete Suite</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Everything You Need
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Powerful features for sales teams and recruiters. Access contacts, enrich data, and scale outreach.
          </p>
        </motion.div>

        {/* Bento Grid - Hourglass Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`${feature.gridClass} relative group`}
            >
              <div className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl p-6 border border-accent/30 shadow-xl shadow-accent/10 hover:shadow-accent/30 transition-all duration-500 h-full flex flex-col">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-100" />

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Icon, Title & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {feature.title}
                      </h3>
                    </div>
                    <div className={`${feature.badgeColor} text-black text-[10px] font-bold px-2 py-1 rounded-full flex-shrink-0`}>
                      {feature.badge}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-shrink-0">
                    {feature.description}
                  </p>

                  {/* Feature List */}
                  <div className="space-y-2 flex-1">
                    {feature.features.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2"
                      >
                        <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-accent" />
                        </div>
                        <span className="text-xs text-gray-300 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <button
            onClick={() => window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank')}
            className="px-6 py-3 bg-transparent border-2 border-accent text-accent font-bold rounded-xl shadow-lg shadow-accent/50 hover:shadow-accent/70 transition-all duration-300 inline-flex items-center gap-2 group text-sm"
          >
            <span>Get Started Free</span>
            <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};
