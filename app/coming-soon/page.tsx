'use client';

import React from 'react';
import { Clock } from 'lucide-react';

export default function ComingSoonPage() {
  return (
    <div className="pt-20 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-6 py-3 rounded-full text-lg font-semibold mb-8">
          <Clock className="w-6 h-6" />
          Coming Soon
        </div>
        <h1 className="text-6xl font-bold text-accent mb-6">
          Exciting Things Are Coming
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          We&apos;re working hard to bring you something amazing. Stay tuned for updates!
        </p>
        <button
          onClick={() => window.history.back()}
          className="px-10 py-4 bg-accent text-black rounded-xl font-bold text-lg hover:bg-accent-hover transition-all"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
