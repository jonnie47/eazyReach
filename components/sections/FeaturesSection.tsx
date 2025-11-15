'use client';

import React, { useState } from 'react';
import { Zap, Database, Globe, Lock, ChevronRight, Check, ArrowUpRight } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const [activeToggle, setActiveToggle] = useState<number | null>(null);

  return (
    <div id="features" className="py-24 bg-black relative overflow-hidden">
      {/* Soft ambient glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Everything you need
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Powerful features built for sales teams and recruiters. Access director contacts, enrich data, and scale your outreach.
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          
          {/* Feature 1: Director Finder - Tall featured panel */}
          <div className="lg:row-span-2 group">
            <div className="relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/5 shadow-2xl shadow-black/50 hover:shadow-accent/20 transition-all duration-500 hover:border-accent/30">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-3xl font-bold text-white mb-3">
                  Director Finder
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                  Director-level phone numbers from LinkedIn & company sources. Perfect for B2B sales and decision-maker outreach.
                </p>

                {/* Interactive Element - Action Button */}
                <button className="flex items-center gap-2 text-accent hover:text-white font-medium group/btn transition-colors">
                  <span>Start finding directors</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                {/* Stats widget */}
                <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-white">91%</div>
                    <div className="text-xs text-gray-500">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">10M+</div>
                    <div className="text-xs text-gray-500">Contacts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: LinkedIn Contact - Medium panel with toggle */}
          <div className="group">
            <div className="relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/5 shadow-2xl shadow-black/50 hover:shadow-accent/20 transition-all duration-500 hover:border-accent/30">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-7 h-7 text-accent" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  LinkedIn Contact
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Email, phone, job title, and company information. Complete contact profiles for comprehensive outreach.
                </p>

                {/* Interactive Element - Toggle List */}
                <div className="space-y-2">
                  {['Email', 'Phone', 'Job Title', 'Company'].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-black/30 rounded-xl hover:bg-black/50 transition-colors cursor-pointer"
                      onClick={() => setActiveToggle(activeToggle === idx ? null : idx)}
                    >
                      <span className="text-sm text-gray-300">{item}</span>
                      <div className={`w-10 h-5 rounded-full transition-colors ${activeToggle === idx ? 'bg-accent' : 'bg-gray-700'} relative`}>
                        <div className={`absolute top-0.5 ${activeToggle === idx ? 'right-0.5' : 'left-0.5'} w-4 h-4 bg-white rounded-full transition-all`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Multi-Platform - Wide short panel */}
          <div className="md:col-span-2 lg:col-span-1 group">
            <div className="relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/5 shadow-2xl shadow-black/50 hover:shadow-accent/20 transition-all duration-500 hover:border-accent/30">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-7 h-7 text-accent" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Multi-Platform Access
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Access through web dashboard, Chrome extension, or API. Seamlessly integrate into your existing sales workflow.
                </p>

                {/* Interactive Element - Platform Pills */}
                <div className="flex flex-wrap gap-2">
                  {['Web', 'Chrome', 'API'].map((platform) => (
                    <button
                      key={platform}
                      className="px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-full text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      <Check className="w-3 h-3" />
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Bulk CSV - Medium panel with badge */}
          <div className="group">
            <div className="relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/5 shadow-2xl shadow-black/50 hover:shadow-accent/20 transition-all duration-500 hover:border-accent/30">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Badge */}
                <div className="absolute -top-4 -right-4 bg-accent text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  Coming Soon
                </div>

                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-7 h-7 text-accent" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Bulk CSV Export
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Waitlist for dashboard bulk features. Upload CSV files and enrich hundreds of contacts at once.
                </p>

                {/* Interactive Element - Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Development Progress</span>
                    <span>65%</span>
                  </div>
                  <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-gradient-to-r from-accent to-accent rounded-full" />
                  </div>
                </div>

                <button className="mt-6 w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                  Join Waitlist
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Feature 5: Secure & Private - Tall panel with checklist */}
          <div className="lg:row-span-2 group">
            <div className="relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/5 shadow-2xl shadow-black/50 hover:shadow-accent/20 transition-all duration-500 hover:border-accent/30">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-8 h-8 text-accent" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-3">
                  Secure & Private
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  Encrypted transport, no selling of data. GDPR and India privacy compliant. Your searches stay private.
                </p>

                {/* Interactive Element - Security Checklist */}
                <div className="space-y-4 flex-grow">
                  {[
                    'End-to-end encryption',
                    'GDPR compliant',
                    'Zero data selling',
                    'SOC 2 certified',
                    'Private searches'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-black/20 rounded-xl hover:bg-black/30 transition-colors">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Trust Badge */}
                <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Lock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Enterprise Ready</div>
                      <div className="text-xs text-gray-500">Trusted by 500+ companies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
