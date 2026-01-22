'use client';

import React from 'react';
import { UserCheck, Bell, Zap, MessageSquare } from 'lucide-react';

export default function AIInboundPage() {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <UserCheck className="w-4 h-4" />
            AI Inbound
          </div>
          <h1 className="text-5xl font-bold text-accent mb-6">
            Handle Inbound Interest Instantly
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Never miss an opportunity. AI handles inbound leads 24/7, qualifies them, and books meetings automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <Bell className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Instant Response</h3>
            <p className="text-gray-300">AI responds to inbound leads within seconds, 24/7.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <MessageSquare className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Smart Qualification</h3>
            <p className="text-gray-300">AI asks the right questions to qualify leads automatically.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <Zap className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Auto Booking</h3>
            <p className="text-gray-300">Books meetings with qualified leads without human intervention.</p>
          </div>
        </div>

        <div className="bg-accent/10 rounded-2xl p-12 border border-accent/30 text-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Never Miss a Lead Again</h2>
          <p className="text-gray-300 mb-8">Start using AI Inbound today</p>
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
