'use client';

import React from 'react';
import { Chrome, Zap, MousePointer, Globe } from 'lucide-react';

export default function ChromeExtensionPage() {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Chrome className="w-4 h-4" />
            Chrome Extension
          </div>
          <h1 className="text-5xl font-bold text-accent mb-6">
            Find Contacts from Your Browser
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Install our Chrome extension to find and call contacts directly from LinkedIn, company websites, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <MousePointer className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">One-Click Access</h3>
            <p className="text-gray-300">Find contact details with a single click while browsing.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <Zap className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Instant Calling</h3>
            <p className="text-gray-300">Call contacts directly from the extension without switching tools.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <Globe className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-100 mb-3">Works Everywhere</h3>
            <p className="text-gray-300">Use on LinkedIn, company websites, and social profiles.</p>
          </div>
        </div>

        <div className="bg-accent/10 rounded-2xl p-12 border border-accent/30 text-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Install the Extension Now</h2>
          <p className="text-gray-300 mb-8">Free to install, pay only for contacts you find</p>
          <button
            onClick={() => window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank')}
            className="px-10 py-4 bg-accent text-black rounded-xl font-bold text-lg hover:bg-accent-hover transition-all"
          >
            Add to Chrome
          </button>
        </div>
      </div>
    </div>
  );
}
