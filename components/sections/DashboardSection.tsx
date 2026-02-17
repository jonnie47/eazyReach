import React from 'react';
import { Rocket, Clock, Sparkles } from 'lucide-react';

export const DashboardSection: React.FC = () => {
  return (
    <div id="dashboard" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-accent/30">
            <Sparkles className="w-4 h-4" />
            Coming Soon
          </div>
          <h2 className="text-5xl font-bold text-accent mb-6">
            Advanced Dashboard Feature
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            We&apos;re building something amazing! Our new dashboard will give you powerful analytics, bulk operations, and team collaboration features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 my-12">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-yellow-400/50 transition-all">
            <Rocket className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Bulk CSV Upload</h3>
            <p className="text-sm text-gray-300">Upload hundreds of LinkedIn profiles and get results in minutes</p>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-pink-500/50 transition-all">
            <Clock className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Analytics & Reports</h3>
            <p className="text-sm text-gray-300">Track your contact discovery performance with detailed insights</p>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all">
            <Sparkles className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
            <p className="text-sm text-gray-300">Share contacts and credits with your team members</p>
          </div>
        </div>

        <div className="bg-accent/10 rounded-2xl p-8 border border-accent/30">
          <h3 className="text-2xl font-bold text-accent mb-4">Get Early Access</h3>
          <p className="text-gray-300 mb-6">
            Join our waitlist to be the first to try the new dashboard. Plus, get <span className="font-bold text-accent">500 bonus credits</span> when you sign up!
          </p>
          <button 
            onClick={() => window.open('https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi', '_blank')}
            className="px-10 py-4 bg-accent text-black rounded-xl font-bold text-lg hover:bg-accent-hover hover:scale-105 transition-all duration-200"
          >
            Join Waitlist For Free
          </button>
          <p className="text-sm text-gray-400 mt-4">Expected launch: Q1 2026</p>
        </div>
      </div>
    </div>
  );
};
