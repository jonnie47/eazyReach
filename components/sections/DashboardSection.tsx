import React from 'react';
import { Rocket, Clock, Sparkles } from 'lucide-react';

export const DashboardSection: React.FC = () => {
  return (
    <div id="dashboard" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-yellow-500/30">
            <Sparkles className="w-4 h-4" />
            Coming Soon
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Advanced Dashboard Feature
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            We&apos;re building something amazing! Our new dashboard will give you powerful analytics, bulk operations, and team collaboration features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 my-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Rocket className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Bulk CSV Upload</h3>
            <p className="text-sm text-blue-200">Upload hundreds of LinkedIn profiles and get results in minutes</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Analytics & Reports</h3>
            <p className="text-sm text-blue-200">Track your contact discovery performance with detailed insights</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
            <p className="text-sm text-blue-200">Share contacts and credits with your team members</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Get Early Access</h3>
          <p className="text-blue-100 mb-6">
            Join our waitlist to be the first to try the new dashboard. Plus, get <span className="font-bold text-white">500 bonus credits</span> when you sign up!
          </p>
          <button 
            onClick={() => window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank')}
            className="px-10 py-4 bg-white text-blue-700 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
          >
            Join Waitlist — Free
          </button>
          <p className="text-sm text-blue-200 mt-4">Expected launch: Q1 2026</p>
        </div>
      </div>
    </div>
  );
};
