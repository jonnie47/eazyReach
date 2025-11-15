'use client';

import React from 'react';
import { Video, FileText, Zap, Clock } from 'lucide-react';

export default function AINotetakerPage() {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Video className="w-4 h-4" />
            AI Notetaker
            <span className="ml-2 text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">Coming Soon</span>
          </div>
          <h1 className="text-5xl font-bold text-accent mb-6">
            AI Meeting Notetaker
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Focus on your meetings while AI takes detailed notes, extracts action items, and generates summaries automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <FileText className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Auto Transcription</h3>
            <p className="text-gray-300">AI transcribes meetings in real-time with high accuracy.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <Zap className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Action Items</h3>
            <p className="text-gray-300">Automatically extract and assign action items to team members.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <Clock className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Instant Summaries</h3>
            <p className="text-gray-300">Get meeting summaries sent to your inbox automatically.</p>
          </div>
        </div>

        <div className="bg-accent/10 rounded-2xl p-12 border border-accent/30 text-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Join the Waitlist</h2>
          <p className="text-gray-300 mb-8">Be the first to try AI Notetaker when it launches in Q1 2026</p>
          <button
            onClick={() => window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank')}
            className="px-10 py-4 bg-accent text-black rounded-xl font-bold text-lg hover:bg-accent-hover transition-all"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}
