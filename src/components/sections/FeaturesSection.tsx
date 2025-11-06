import React from 'react';
import { Zap, Database, Globe, RefreshCw, Lock } from 'lucide-react';
import { FeatureCard } from '../ui/FeatureCard';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Zap,
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
      title: 'Director Finder',
      description: 'Director-level phone numbers from LinkedIn & company sources. Perfect for B2B sales and decision-maker outreach.'
    },
    {
      icon: Database,
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-600',
      title: 'LinkedIn Contact',
      description: 'Email, phone, job title, and company information. Complete contact profiles for comprehensive outreach.'
    },
    {
      icon: Globe,
      gradient: 'bg-gradient-to-br from-blue-500 to-purple-600',
      title: 'Multi-Platform Access',
      description: 'Access through web dashboard, Chrome extension, or API. Seamlessly integrate into your existing sales workflow.'
    },
    {
      icon: Database,
      gradient: 'bg-gradient-to-br from-gray-500 to-gray-600',
      title: 'Bulk CSV',
      description: 'Waitlist for dashboard bulk features. Upload CSV files and enrich hundreds of contacts at once.',
      badge: '(coming soon)'
    },
    {
      icon: RefreshCw,
      gradient: 'bg-gradient-to-br from-green-500 to-green-600',
      title: 'Accuracy Guarantee',
      description: '100% credit refund for wrong phone numbers. We stand behind our data quality with automatic refunds.'
    },
    {
      icon: Lock,
      gradient: 'bg-gradient-to-br from-gray-700 to-gray-800',
      title: 'Secure & Private',
      description: 'Encrypted transport, no selling of data. GDPR and India privacy compliant. Your searches stay private.'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need to find contacts</h2>
          <p className="text-xl text-gray-600">Powerful features built for sales teams and recruiters</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};
