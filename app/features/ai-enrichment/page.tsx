'use client';

import React from 'react';
import { Sparkles, Database, Zap, CheckCircle } from 'lucide-react';

export default function AIEnrichmentPage() {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            AI Enrichment
          </div>
          <h1 className="text-5xl font-bold text-accent mb-6">
            Auto-Fill Lead Data
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let AI automatically enrich your leads with accurate contact information, company details, and social profiles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <Database className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Complete Profiles</h3>
            <p className="text-gray-300">AI fills in missing data from 50+ sources automatically.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <Zap className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Real-Time Updates</h3>
            <p className="text-gray-300">Data is refreshed in real-time to ensure accuracy.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <CheckCircle className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">91% Accuracy</h3>
            <p className="text-gray-300">Industry-leading data accuracy backed by our guarantee.</p>
          </div>
        </div>

        <div className="bg-accent/10 rounded-2xl p-12 border border-accent/30 text-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Enrich Your Leads Today</h2>
          <p className="text-gray-300 mb-8">Start with AI Enrichment</p>
          <button
            onClick={() => window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank')}
            className="px-10 py-4 bg-accent text-black rounded-xl font-bold text-lg hover:bg-accent-hover transition-all"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
