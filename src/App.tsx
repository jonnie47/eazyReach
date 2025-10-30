import React, { useState } from 'react';
import { Chrome, Shield, Zap, Database, RefreshCw, Lock, ChevronDown, Check, Play } from 'lucide-react';

function App() {
  const [demoUrl, setDemoUrl] = useState('');
  const [demoLoading, setDemoLoading] = useState(false);
  const [showDemoResult, setShowDemoResult] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistCompany, setWaitlistCompany] = useState('');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const handleDemoTry = () => {
    if (!demoUrl) return;
    setDemoLoading(true);
    setTimeout(() => {
      setDemoLoading(false);
      setShowDemoResult(true);
    }, 2000);
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for joining! We\'ll notify you when the dashboard launches.');
    setWaitlistEmail('');
    setWaitlistCompany('');
  };

  const faqs = [
    {
      q: 'How do credits work?',
      a: 'Credits map directly to INR pricing: Director numbers = 1 credit (₹1), Email = 3 credits (₹3), Phone = 7 credits (₹7), Full LinkedIn contact = 10 credits (₹10). You only pay for successful lookups.'
    },
    {
      q: 'What is your refund guarantee?',
      a: '100% credit refund for any wrong phone numbers. If we provide an incorrect number, credits are automatically refunded to your account within 24 hours.'
    },
    {
      q: 'How accurate is the data?',
      a: 'We maintain ~91% accuracy across all contact types. Our data comes from verified LinkedIn sources, company databases, and public records. Wrong numbers receive automatic refunds.'
    },
    {
      q: 'Can I do bulk lookups?',
      a: 'Bulk CSV upload and dashboard features are coming soon. Join our waitlist to get early access and bonus 500 credits.'
    },
    {
      q: 'Is my data secure?',
      a: 'Yes. All data is encrypted in transit and at rest. We comply with GDPR and Indian privacy regulations. We never sell or share your lookup history.'
    },
    {
      q: 'Which countries are supported?',
      a: 'Currently optimized for India, USA, UK, and EU regions. More countries being added based on demand.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">We use cookies to improve your experience. By continuing, you accept our cookie policy.</p>
          <button className="px-6 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
            Accept
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                <Chrome className="w-4 h-4" />
                Chrome Extension
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Find Director Numbers & Verified LinkedIn Contacts — Instantly
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed">
                Chrome extension for sales & recruiting. Director numbers ₹1 | Phone ₹7 | Email ₹3 | Full LinkedIn contact ₹10. 100% refund on wrong numbers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                  <Chrome className="w-5 h-5" />
                  Add to Chrome — Free
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-200">
                  Try 10 Free Credits
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  100% credit refund guarantee on wrong numbers
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  GDPR & India privacy compliant
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Trusted by 1,000+ users
                </div>
              </div>
            </div>

            {/* Right Visual - Extension Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">EazyReach</h3>
                    <p className="text-xs text-gray-500">Contact Finder</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1 text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    ~91% accuracy
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">LinkedIn Profile URL</label>
                    <input
                      type="text"
                      placeholder="https://linkedin.com/in/johndoe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                    {demoLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Finding contact...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        Find Contact
                      </>
                    )}
                  </button>

                  {/* Mock Result */}
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Director Phone</span>
                      <span className="text-sm font-mono text-gray-900">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Email</span>
                      <span className="text-sm font-mono text-gray-900">john@company.com</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Time taken</span>
                      <span className="text-sm text-green-600 font-medium">~10 seconds</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Try it now — See the magic</h2>
            <p className="text-gray-600">Paste a LinkedIn URL below to see a demo lookup</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={demoUrl}
                onChange={(e) => setDemoUrl(e.target.value)}
                placeholder="https://linkedin.com/in/example"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleDemoTry}
                disabled={!demoUrl || demoLoading}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {demoLoading ? 'Finding...' : 'Find →'}
              </button>
            </div>

            {showDemoResult && (
              <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-900 mb-3 font-medium">Install the Chrome extension to run real lookups!</p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                  <Chrome className="w-4 h-4 inline mr-2" />
                  Install Extension
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Trust Logos */}
      <div className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wide">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
            <div className="text-2xl font-bold text-gray-400">BharatX</div>
            <div className="text-2xl font-bold text-gray-400">Local Narratives</div>
            <div className="text-2xl font-bold text-gray-400">Growth Agency</div>
            <div className="text-2xl font-bold text-gray-400">Tophire</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need to find contacts</h2>
            <p className="text-xl text-gray-600">Powerful features built for sales teams and recruiters</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Director Finder</h3>
              <p className="text-gray-600 leading-relaxed">Director-level phone numbers from LinkedIn & company sources. Perfect for B2B sales and decision-maker outreach.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">LinkedIn Contact</h3>
              <p className="text-gray-600 leading-relaxed">Email, phone, job title, and company information. Complete contact profiles for comprehensive outreach.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Chrome className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chrome Extension</h3>
              <p className="text-gray-600 leading-relaxed">Instant lookup inside LinkedIn pages. No switching tabs or copy-pasting. Works seamlessly in your workflow.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bulk CSV <span className="text-sm text-purple-600 font-normal">(coming soon)</span></h3>
              <p className="text-gray-600 leading-relaxed">Waitlist for dashboard bulk features. Upload CSV files and enrich hundreds of contacts at once.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accuracy Guarantee</h3>
              <p className="text-gray-600 leading-relaxed">100% credit refund for wrong phone numbers. We stand behind our data quality with automatic refunds.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Private</h3>
              <p className="text-gray-600 leading-relaxed">Encrypted transport, no selling of data. GDPR and India privacy compliant. Your searches stay private.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple per-contact pricing — pay only for what you use</h2>
            <p className="text-xl text-gray-600">Transparent INR pricing. No hidden fees. No subscriptions.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-purple-400 transition-colors duration-300">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">₹1</span>
                <span className="text-gray-600">/ contact</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Director Phone Number</h3>
              <p className="text-gray-600 mb-4">Decision-maker direct numbers</p>
              <div className="text-sm text-gray-500">= 1 credit</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-blue-400 transition-colors duration-300">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">₹10</span>
                <span className="text-gray-600">/ contact</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full LinkedIn Contact</h3>
              <p className="text-gray-600 mb-4">Email + phone + profile data</p>
              <div className="text-sm text-gray-500">= 10 credits</div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-400 transition-colors duration-300">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">₹7</span>
                <span className="text-gray-600">/ contact</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Number</h3>
              <p className="text-gray-600 mb-4">General phone lookup</p>
              <div className="text-sm text-gray-500">= 7 credits</div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-400 transition-colors duration-300">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">₹3</span>
                <span className="text-gray-600">/ contact</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Email address only</p>
              <div className="text-sm text-gray-500">= 3 credits</div>
            </div>
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
              Buy Credits
            </button>
            <p className="mt-4 text-sm text-gray-600">Example: 100 credits for bulk purchases available</p>
          </div>
        </div>
      </div>

      {/* Extension Trust Section */}
      <div className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Chrome className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Get Started in 3 Simple Steps</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="font-semibold mb-2">Install Extension</h3>
              <p className="text-blue-100 text-sm">Add EazyReach to Chrome in one click</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="font-semibold mb-2">Open LinkedIn Profile</h3>
              <p className="text-blue-100 text-sm">Navigate to any LinkedIn profile page</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="font-semibold mb-2">Click EazyReach Icon</h3>
              <p className="text-blue-100 text-sm">Find contact data instantly</p>
            </div>
          </div>

          <button className="px-10 py-4 bg-white text-blue-700 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-3">
            <Chrome className="w-6 h-6" />
            Add to Chrome — Free
          </button>
          <p className="mt-4 text-blue-100">Try free 10 credits after install • 100% credit refund for wrong numbers</p>
        </div>
      </div>

      {/* Waitlist Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Coming Soon
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Dashboard Coming Soon — Join Waitlist</h2>
              <p className="text-gray-600">Early access + bonus 500 credits for first 500 signups</p>
            </div>

            <form onSubmit={handleWaitlistSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  required
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                <select
                  value={waitlistCompany}
                  onChange={(e) => setWaitlistCompany(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Get Early Access & Bonus Credits
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about EazyReach</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${faqOpen === index ? 'rotate-180' : ''}`} />
                </button>
                {faqOpen === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold text-lg">EazyReach</span>
              </div>
              <p className="text-sm text-gray-400">Find verified LinkedIn contacts instantly.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chrome Extension</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Integrations</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Zapier (Soon)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CRM (Soon)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API (Soon)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2025 EazyReach. All rights reserved. INR pricing. Data compliant with Indian privacy regulations.</p>
            <div className="flex items-center gap-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
