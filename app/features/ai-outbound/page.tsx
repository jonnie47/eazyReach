'use client';

import React from 'react';
import { PhoneCall, Zap, TrendingUp, CheckCircle } from 'lucide-react';

export default function AIOutboundPage() {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <PhoneCall className="w-4 h-4" />
            AI Outbound
          </div>
          <h1 className="text-5xl font-bold text-accent mb-6">
            AI-Powered Outreach Calls
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Automate your outbound calling with AI that sounds human, handles objections, and books meetings automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <Zap className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Smart Dialing</h3>
            <p className="text-gray-300">AI automatically calls leads at optimal times with personalized scripts.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <TrendingUp className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Higher Conversion</h3>
            <p className="text-gray-300">Increase meeting bookings by 3x with AI-driven conversations.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <CheckCircle className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Full Automation</h3>
            <p className="text-gray-300">From dial to follow-up, AI handles the entire outreach process.</p>
          </div>
        </div>

        <div className="bg-accent/10 rounded-2xl p-12 border border-accent/30 text-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Ready to Scale Your Outreach?</h2>
          <p className="text-gray-300 mb-8">Get started with AI Outbound today</p>
          <button
            onClick={() => window.open('https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi', '_blank')}
            className="px-10 py-4 bg-accent text-black rounded-xl font-bold text-lg hover:bg-accent-hover transition-all"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
