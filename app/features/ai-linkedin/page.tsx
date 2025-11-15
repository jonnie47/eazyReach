'use client';

import React from 'react';
import { Linkedin, Users, MessageCircle, TrendingUp } from 'lucide-react';

export default function AILinkedInPage() {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Linkedin className="w-4 h-4" />
            AI LinkedIn
          </div>
          <h1 className="text-5xl font-bold text-accent mb-6">
            AI-Driven LinkedIn Outreach
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scale your LinkedIn prospecting with AI that personalizes messages, manages connections, and books meetings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <Users className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Smart Targeting</h3>
            <p className="text-gray-300">AI identifies and connects with your ideal prospects automatically.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <MessageCircle className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Personalized Messages</h3>
            <p className="text-gray-300">AI crafts unique, engaging messages for each prospect.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <TrendingUp className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Higher Response Rates</h3>
            <p className="text-gray-300">Get 5x more responses with AI-optimized outreach.</p>
          </div>
        </div>

        <div className="bg-accent/10 rounded-2xl p-12 border border-accent/30 text-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Scale Your LinkedIn Outreach</h2>
          <p className="text-gray-300 mb-8">Start using AI LinkedIn today</p>
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
