import React, { useState } from 'react';
import { Globe, Play, Award, Users, TrendingUp, Shell, Database, UserSearch } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFindContact = () => {
    if (showResults) {
      setShowResults(false);
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 1500);
  };

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
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank')}
              >
                <Play className="w-5 h-5" />
                Start Finding Contacts
                <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
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
                  <Shell className="w-6 h-6 text-white" />
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
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value="https://linkedin.com/in/sarah-director"
                    readOnly
                  />
                </div>

                <button 
                  onClick={handleFindContact}
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Finding contact...</span>
                    </>
                  ) : (
                    <>
                      <UserSearch className="w-5 h-5" />
                      <span>{showResults ? 'Hide Results' : 'Find Contact'}</span>
                    </>
                  )}
                </button>

                {/* Results - Show on click */}
                {showResults && (
                  <>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-5 space-y-3 border-2 border-green-300 shadow-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Director Phone</span>
                        <span className="text-sm font-mono text-gray-900 bg-white px-3 py-1.5 rounded shadow-sm">
                          +91 98765 43210
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Email</span>
                        <span className="text-sm font-mono text-gray-900 bg-white px-3 py-1.5 rounded shadow-sm">
                          sarah@techcorp.com
                        </span>
                      </div>
                      <div className="pt-2 border-t border-green-200">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Database className="w-4 h-4 text-green-600" />
                          <span className="font-medium">Found in 0.5 seconds</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-400 rounded-xl p-4 flex items-center gap-3 shadow-lg">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                        ✓
                      </div>
                      <div>
                        <span className="text-sm font-bold text-green-900">Contact verified & ready!</span>
                        <p className="text-xs text-green-700 mt-0.5">100% accuracy guaranteed</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
