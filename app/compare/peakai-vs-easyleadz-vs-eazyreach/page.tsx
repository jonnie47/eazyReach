'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Check, X, Chrome, ArrowRight,
  Phone, Bot, Database, Linkedin, Building, Zap
} from 'lucide-react';

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

const comparisonData = [
  { feature: 'Direct Indian Mobile Numbers', eazyreach: true, peakai: 'Limited', easyleadz: 'Limited' },
  { feature: 'DIN/CIN Director Extraction', eazyreach: true, peakai: false, easyleadz: false },
  { feature: 'Zaubacorp Integration', eazyreach: true, peakai: false, easyleadz: false },
  { feature: 'One-Click Browser Calling', eazyreach: true, peakai: false, easyleadz: false },
  { feature: 'AI Voice Agents', eazyreach: true, peakai: false, easyleadz: false },
  { feature: 'Hindi Language Support', eazyreach: true, peakai: false, easyleadz: false },
  { feature: 'Bulk LinkedIn Extraction', eazyreach: true, peakai: true, easyleadz: true },
  { feature: 'Email Finder', eazyreach: true, peakai: true, easyleadz: true },
  { feature: 'CRM Integration', eazyreach: true, peakai: 'Basic', easyleadz: false },
  { feature: 'Call Recording', eazyreach: true, peakai: false, easyleadz: false },
  { feature: 'Chrome Extension', eazyreach: true, peakai: true, easyleadz: true },
];

const detailedComparison = {
  peakai: {
    name: 'PeakAI',
    strengths: [
      'Good LinkedIn data extraction',
      'Email finding capabilities',
      'Chrome extension available'
    ],
    weaknesses: [
      'No calling feature - you need separate tools',
      'No DIN/Zaubacorp support for director contacts',
      'No AI agents or automation',
      'Indian number accuracy can be inconsistent'
    ]
  },
  easyleadz: {
    name: 'EasyLeadz',
    strengths: [
      'Indian market focus',
      'Mobile number extraction',
      'Affordable pricing'
    ],
    weaknesses: [
      'Data only - no calling capabilities',
      'No DIN director lookup',
      'No automation features',
      'No AI voice agents',
      'Limited CRM integration'
    ]
  }
};

export default function ComparisonPage() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-60" />

        <motion.div
          className="max-w-5xl mx-auto text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
          >
            Honest Comparison for Indian Teams
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-white">PeakAI vs EasyLeadz vs</span>
            <br />
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              EazyReach
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Which B2B contact finder works best for Indian sales teams?
            See the complete feature comparison below.
          </motion.p>
        </motion.div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="p-6 rounded-2xl bg-accent/10 border border-accent/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">TL;DR Summary</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-white/5">
                <h3 className="font-semibold text-gray-300 mb-2">PeakAI</h3>
                <p className="text-sm text-gray-400">Good for data extraction, but no calling or automation. You&apos;ll need additional tools.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <h3 className="font-semibold text-gray-300 mb-2">EasyLeadz</h3>
                <p className="text-sm text-gray-400">India-focused data provider, but limited to data only. No calling, no DIN lookup.</p>
              </div>
              <div className="p-4 rounded-xl bg-accent/20 border border-accent/30">
                <h3 className="font-semibold text-accent mb-2">EazyReach ✓</h3>
                <p className="text-sm text-gray-300">Data + Calling + AI Automation in one tool. DIN support. WhatsApp sync. Complete solution.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Feature-by-Feature Comparison
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
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
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <motion.tr
                    key={i}
                    className="border-b border-white/5 hover:bg-white/[0.02]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <td className="py-4 px-4 text-white font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.eazyreach === true ? (
                        <Check className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        <span className="text-yellow-400 text-sm">{row.eazyreach}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.peakai === true ? (
                        <Check className="w-5 h-5 text-gray-400 mx-auto" />
                      ) : row.peakai === false ? (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      ) : (
                        <span className="text-yellow-400 text-sm">{row.peakai}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.easyleadz === true ? (
                        <Check className="w-5 h-5 text-gray-400 mx-auto" />
                      ) : row.easyleadz === false ? (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      ) : (
                        <span className="text-yellow-400 text-sm">{row.easyleadz}</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Analysis */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Detailed Analysis
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {Object.entries(detailedComparison).map(([key, data]) => (
              <motion.div
                key={key}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">{data.name}</h3>

                <div className="mb-6">
                  <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                    <Check className="w-5 h-5" /> Strengths
                  </h4>
                  <ul className="space-y-2">
                    {data.strengths.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                    <X className="w-5 h-5" /> Limitations for Indian Teams
                  </h4>
                  <ul className="space-y-2">
                    {data.weaknesses.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* EazyReach Advantages */}
          <motion.div
            className="p-8 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Why EazyReach Wins for Indian Teams
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Database,
                  title: 'Data + Calling',
                  description: 'Other tools give you data. EazyReach gives you data AND lets you call directly from browser.'
                },
                {
                  icon: Building,
                  title: 'DIN Director Lookup',
                  description: 'Only EazyReach extracts director contacts from Zaubacorp and MCA using DIN/CIN numbers.'
                },
                {
                  icon: Bot,
                  title: 'AI Voice Agents',
                  description: 'Deploy Hindi/English AI calling agents for automated outreach. Competitors don\'t offer this.'
                },
                {
                  icon: Phone,
                  title: 'No Extra Tools',
                  description: 'Stop paying for Exotel, Aircall, and CRM separately. EazyReach includes calling and logging.'
                },
                {
                  icon: Linkedin,
                  title: 'Indian Accuracy',
                  description: 'Optimized for Airtel, Jio, VI numbers. Best accuracy for Indian LinkedIn profiles.'
                }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Should Use What */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Which Tool Should You Choose?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-300 mb-4">Choose PeakAI if:</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• You only need LinkedIn data extraction</li>
                <li>• You already have a calling solution</li>
                <li>• You don&apos;t need DIN director lookup</li>
                <li>• Automation isn&apos;t a priority</li>
              </ul>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-300 mb-4">Choose EasyLeadz if:</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• You only need basic Indian contacts</li>
                <li>• Budget is extremely limited</li>
                <li>• You have separate calling tools</li>
                <li>• You don&apos;t need director contacts</li>
              </ul>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-accent/10 border border-accent/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-accent mb-4">Choose EazyReach if:</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• You want data + calling in one tool</li>
                <li>• You need DIN director extraction</li>
                <li>• You want AI voice agent automation</li>
                <li>• You want to save on multiple tools</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Try EazyReach
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              See why 500+ Indian companies switched to EazyReach for their B2B outreach.
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
                <ArrowRight className="w-5 h-5 relative z-10" />
              </a>
            </div>
            <p className="mt-6 text-gray-400 text-sm">
              ✓ No credit card required &nbsp; ✓ Browser calling included
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
