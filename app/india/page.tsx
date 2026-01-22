'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Search, Users, Zap, Chrome,
  Building, TrendingUp, Award, Shield, Globe, Briefcase,
  ArrowRight, Check, Star, Play, MapPin, Headphones,
  Bot, Linkedin, Database, Target, Clock, IndianRupee
} from 'lucide-react';
import { LogoMarquee } from '@/components/ui/LogoMarquee';

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

// India-Specific Features
const indiaFeatures = [
  {
    icon: Phone,
    title: 'Direct Indian Mobile Numbers',
    description: 'Get verified Airtel, Jio & VI numbers directly from LinkedIn profiles. No more missed connections with gatekeepers.',
    highlight: 'Works with all Indian carriers'
  },
  {
    icon: Building,
    title: 'DIN/CIN Director Lookup',
    description: 'Extract director contact details from Zaubacorp pages using DIN numbers. Perfect for B2B sales and investor outreach.',
    highlight: 'Zaubacorp optimized'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Bulk Extraction',
    description: 'Pull phone numbers and emails from LinkedIn search results in bulk. Build your India prospect list in minutes.',
    highlight: 'Search → Extract → Call'
  },
  {
    icon: Headphones,
    title: 'One-Click Browser Calling',
    description: 'Call prospects directly from your browser. No Exotel, no Aircall, no extra subscriptions needed.',
    highlight: 'Call inside Chrome'
  },
  {
    icon: Bot,
    title: 'AI Voice Agents (Hindi/English)',
    description: 'Deploy AI calling agents with custom scripts. Supports Hindi, English, and regional language workflows.',
    highlight: 'Indian language support'
  },
  {
    icon: Database,
    title: 'Smart Data Enrichment',
    description: 'Automatically enrich your leads with company data, social profiles, and verified contact information.',
    highlight: 'Complete lead profiles'
  }
];

// Target Personas in India
const targetPersonas = [
  {
    title: 'IT & Non-IT Recruiters',
    description: 'Find candidate mobile numbers from LinkedIn. Call them directly without email chains.',
    icon: Users
  },
  {
    title: 'SDRs & BDMs',
    description: 'Build Indian B2B pipelines faster. Extract, call, and follow up — all from one tool.',
    icon: Target
  },
  {
    title: 'Startup Founders',
    description: 'Reach investors, partners, and clients using DIN-based director lookups.',
    icon: Zap
  },
  {
    title: 'Agencies & Consultants',
    description: 'Scale client outreach with bulk extraction and AI calling agents.',
    icon: Briefcase
  },
  {
    title: 'Real Estate & Finance',
    description: 'Contact HNI prospects and company directors for investment pitches.',
    icon: Building
  },
  {
    title: 'HR & Talent Teams',
    description: 'Reach passive candidates on their personal mobiles. No more InMail limits.',
    icon: Headphones
  }
];

// Competitor Comparison
const competitorComparison = [
  {
    feature: 'Direct Indian Mobile Numbers',
    eazyreach: true,
    peakai: 'Limited',
    easyleadz: 'Limited',
    mre: true,
    zintlr: 'Limited'
  },
  {
    feature: 'DIN/CIN Director Extraction',
    eazyreach: true,
    peakai: false,
    easyleadz: false,
    mre: false,
    zintlr: false
  },
  {
    feature: 'Zaubacorp Integration',
    eazyreach: true,
    peakai: false,
    easyleadz: false,
    mre: false,
    zintlr: false
  },
  {
    feature: 'One-Click Browser Calling',
    eazyreach: true,
    peakai: false,
    easyleadz: false,
    mre: false,
    zintlr: false
  },
  {
    feature: 'AI Voice Agents',
    eazyreach: true,
    peakai: false,
    easyleadz: false,
    mre: false,
    zintlr: false
  },
  {
    feature: 'Hindi Language Support',
    eazyreach: true,
    peakai: false,
    easyleadz: false,
    mre: false,
    zintlr: false
  },
  {
    feature: 'WhatsApp/Telegram Sync',
    eazyreach: true,
    peakai: false,
    easyleadz: false,
    mre: false,
    zintlr: false
  },
  {
    feature: 'Bulk LinkedIn Extraction',
    eazyreach: true,
    peakai: true,
    easyleadz: true,
    mre: true,
    zintlr: true
  },
  {
    feature: 'CRM & Pipeline Management',
    eazyreach: true,
    peakai: 'Basic',
    easyleadz: false,
    mre: false,
    zintlr: 'Basic'
  },
  {
    feature: 'Call Logs & Recording',
    eazyreach: true,
    peakai: false,
    easyleadz: false,
    mre: false,
    zintlr: false
  }
];

// Testimonial Placeholders
const testimonials = [
  {
    quote: "Finally, a tool that understands Indian sales workflows. The DIN lookup feature alone saved us hours of manual research.",
    name: "Recruitment Agency",
    role: "Mumbai-based IT Staffing Firm",
    metric: "2x faster candidate outreach"
  },
  {
    quote: "We ditched Exotel and now call directly from Chrome. Our SDRs are making more calls with less context switching.",
    name: "SaaS Startup",
    role: "Bangalore B2B Tech Company",
    metric: "40% more daily calls"
  },
  {
    quote: "The WhatsApp sync is perfect for our follow-up workflows. Indian prospects respond faster on WhatsApp than email.",
    name: "Consulting Firm",
    role: "Delhi NCR Management Consultancy",
    metric: "3x better response rates"
  }
];

// FAQ Section
const faqs = [
  {
    question: 'Does EazyReach work with Indian mobile numbers?',
    answer: 'Yes! EazyReach is optimized for Indian networks including Airtel, Jio, and Vodafone Idea. We have the best accuracy for Indian LinkedIn profiles and director contacts.'
  },
  {
    question: 'Can I extract director contacts from Zaubacorp?',
    answer: 'Absolutely. Our Chrome extension works directly on Zaubacorp pages. Enter a DIN or CIN, and we\'ll pull the director\'s contact information including mobile numbers where available.'
  },
  {
    question: 'How does browser calling work?',
    answer: 'Click on any extracted number and call directly from your Chrome browser. No need for separate tools like Exotel, Aircall, or CloudTalk. Your calls are logged automatically in our CRM.'
  },
  {
    question: 'Do AI voice agents support Hindi?',
    answer: 'Yes. Our AI calling agents support Hindi, English, and Hinglish scripts. You can customize the voice, script, and workflow for Indian audience preferences.'
  },
  {
    question: 'How is EazyReach different from PeakAI or EasyLeadz?',
    answer: 'Most Indian tools only provide data. EazyReach combines data extraction + calling + AI automation in one platform. You don\'t need separate subscriptions for data, calling, and CRM.'
  },
  {
    question: 'Can I sync leads to WhatsApp Business?',
    answer: 'Yes. EazyReach syncs your leads and call outcomes to WhatsApp Business or Telegram bots. This is perfect for Indian sales workflows where WhatsApp follow-ups convert better than email.'
  }
];

// Stats
const stats = [
  { value: '10L+', label: 'Indian Contacts Extracted' },
  { value: '500+', label: 'Indian Companies Trust Us' },
  { value: '95%', label: 'Indian Number Accuracy' },
  { value: '₹0', label: 'Extra Calling Costs' }
];

export default function IndiaLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden bg-slate-950 text-gray-100">
      {/* Hero Section - India Focused */}
      <section className="relative pt-24 pb-20 px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-60" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />

        <motion.div
          className="max-w-6xl mx-auto text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* India Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-green-500/20 border border-orange-500/30">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-300">Made for Indian Sales Teams</span>
              <span className="text-xl">🇮🇳</span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent">
              India&apos;s Fastest LinkedIn +
            </span>
            <br />
            <span className="text-white">Zaubacorp Contact Finder</span>
            <br />
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              With One-Click Calling
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Extract Indian mobile numbers from LinkedIn & DIN pages. Call prospects directly from Chrome.
            No Exotel. No Aircall. No extra subscriptions.
          </motion.p>

          {/* Key Value Props */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-10">
            {['Direct Indian Mobiles', 'DIN Director Lookup', 'Browser Calling', 'AI Voice Agents', 'WhatsApp Sync'].map((item, i) => (
              <span key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">{item}</span>
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
              <span className="relative z-10">Add to Chrome</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-500 mb-8">Trusted by Indian sales teams at</p>
          <LogoMarquee />
        </div>
      </section>

      {/* India-Specific Features */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Built for Indian B2B
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Everything You Need for Indian Lead Generation
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From LinkedIn extraction to DIN lookups to browser calling — one tool does it all.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indiaFeatures.map((feature, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-accent/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <span className="inline-flex items-center gap-2 text-sm text-accent">
                  <Check className="w-4 h-4" />
                  {feature.highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - India Context */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              How Indian Sales Teams Use EazyReach
            </h2>
            <p className="text-xl text-gray-400">
              From prospect discovery to closing — all without leaving your browser
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Install Extension',
                description: 'Add EazyReach to Chrome. Works on LinkedIn, Zaubacorp, and any company page.',
                icon: Chrome
              },
              {
                step: '2',
                title: 'Extract Contacts',
                description: 'Reveal Indian mobile numbers, emails, and director details with one click.',
                icon: Search
              },
              {
                step: '3',
                title: 'Call Instantly',
                description: 'Click any number to call directly from Chrome. No need for Exotel or separate dialers.',
                icon: Phone
              },
              {
                step: '4',
                title: 'Automate Follow-ups',
                description: 'Sync to WhatsApp/Telegram. Deploy AI agents for automated outreach.',
                icon: Bot
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 relative">
                  <step.icon className="w-8 h-8 text-accent" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Personas */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Who Uses EazyReach in India?
            </h2>
            <p className="text-xl text-gray-400">
              Built for anyone who needs to reach Indian prospects faster
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetPersonas.map((persona, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-green-500/20 flex items-center justify-center mb-4">
                  <persona.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{persona.title}</h3>
                <p className="text-gray-400">{persona.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor Comparison Table */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              EazyReach vs Other Indian Tools
            </h2>
            <p className="text-xl text-gray-400">
              See why EazyReach is the complete solution for Indian B2B outreach
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="py-4 px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/20 text-accent font-bold">
                      EazyReach
                    </div>
                  </th>
                  <th className="py-4 px-4 text-center text-gray-400">PeakAI</th>
                  <th className="py-4 px-4 text-center text-gray-400">EasyLeadz</th>
                  <th className="py-4 px-4 text-center text-gray-400">Mr. E</th>
                  <th className="py-4 px-4 text-center text-gray-400">Zintlr</th>
                </tr>
              </thead>
              <tbody>
                {competitorComparison.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="py-4 px-4 text-white font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.eazyreach === true ? (
                        <Check className="w-5 h-5 text-green-400 mx-auto" />
                      ) : row.eazyreach === false ? (
                        <span className="text-red-400">✕</span>
                      ) : (
                        <span className="text-yellow-400 text-sm">{row.eazyreach}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.peakai === true ? (
                        <Check className="w-5 h-5 text-gray-400 mx-auto" />
                      ) : row.peakai === false ? (
                        <span className="text-red-400">✕</span>
                      ) : (
                        <span className="text-yellow-400 text-sm">{row.peakai}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.easyleadz === true ? (
                        <Check className="w-5 h-5 text-gray-400 mx-auto" />
                      ) : row.easyleadz === false ? (
                        <span className="text-red-400">✕</span>
                      ) : (
                        <span className="text-yellow-400 text-sm">{row.easyleadz}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.mre === true ? (
                        <Check className="w-5 h-5 text-gray-400 mx-auto" />
                      ) : row.mre === false ? (
                        <span className="text-red-400">✕</span>
                      ) : (
                        <span className="text-yellow-400 text-sm">{row.mre}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.zintlr === true ? (
                        <Check className="w-5 h-5 text-gray-400 mx-auto" />
                      ) : row.zintlr === false ? (
                        <span className="text-red-400">✕</span>
                      ) : (
                        <span className="text-yellow-400 text-sm">{row.zintlr}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-accent/10 border border-accent/20 text-center">
            <p className="text-lg text-gray-300 mb-4">
              <strong className="text-white">Bottom Line:</strong> Other tools give you data. EazyReach gives you data + calling + automation.
              <br />
              Stop paying for 3 different subscriptions.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
            >
              <Chrome className="w-5 h-5" />
              Try EazyReach Free
            </a>
          </div>
        </div>
      </section>

      {/* India Credibility Signals */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Built for Indian Networks. Optimized for India.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: 'Works on All Indian Carriers',
                description: 'Airtel, Jio, Vodafone Idea — our calling system works seamlessly across all Indian mobile networks.'
              },
              {
                icon: Database,
                title: 'Best Accuracy for Indian Profiles',
                description: 'Our database is optimized for Indian LinkedIn profiles, company registrations, and director information.'
              },
              {
                icon: Building,
                title: 'Zaubacorp DIN Optimized',
                description: 'Directly integrated with Zaubacorp for the most accurate DIN-based director contact extraction.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 via-transparent to-green-500/10 border border-white/10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500/20 to-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Trusted by Indian Sales Teams
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-green-500/20 text-green-400 text-sm">
                    {testimonial.metric}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="rounded-xl border border-white/10 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left bg-white/5 hover:bg-white/[0.08] transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 bg-white/[0.02]">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-orange-500/20 via-accent/20 to-green-500/20 border border-white/10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready to 10x Your Indian Outreach?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 500+ Indian companies using EazyReach to find leads, make calls, and close deals faster.
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
            <p className="mt-6 text-gray-400 text-sm">
              ✓ Free to start &nbsp; ✓ No credit card required &nbsp; ✓ Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
