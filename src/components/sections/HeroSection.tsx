import React from 'react';
import { Globe, Play, Award, Users, TrendingUp, Zap, Database } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white pt-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              <Globe className="w-4 h-4" />
              Contact Intelligence Platform
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Turn LinkedIn Profiles Into 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300"> Verified Contacts</span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed">
              The most accurate contact finder for B2B sales teams. Get director phone numbers, verified emails, and complete contact profiles in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="lg" className="group">
                <Play className="w-5 h-5" />
                Start Finding Contacts
                <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button variant="secondary" size="lg">
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                91% accuracy rate
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                10,000+ contacts found daily
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Trusted by 500+ companies
              </div>
            </div>
          </div>

          {/* Right Visual - Platform Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">EazyReach Platform</h3>
                  <p className="text-xs text-gray-500">Contact Intelligence</p>
                </div>
                <div className="ml-auto flex items-center gap-1 text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Live Demo
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">LinkedIn Profile URL</label>
                  <input
                    type="text"
                    placeholder="https://linkedin.com/in/johndoe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent animate-pulse"
                    value="https://linkedin.com/in/sarah-director"
                    readOnly
                  />
                </div>

                <button 
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-default"
                >
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Analyzing profile...
                </button>

                {/* Animated Mock Result */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4 space-y-3 border-2 border-green-200 animate-pulse">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Director Phone</span>
                    <span className="text-sm font-mono text-gray-900 bg-white px-2 py-1 rounded">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Email</span>
                    <span className="text-sm font-mono text-gray-900 bg-white px-2 py-1 rounded">sarah@techcorp.com</span>
                  </div>
                  <div className="pt-2 border-t border-green-200">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Database className="w-3 h-3" />
                      <span>Found in 0.5 seconds</span>
                    </div>
                  </div>
                </div>

                {/* Success Badge */}
                <div className="bg-green-100 border border-green-300 rounded-lg p-3 flex items-center gap-2 animate-bounce">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                  <span className="text-sm font-medium text-green-800">Contact verified & ready!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
