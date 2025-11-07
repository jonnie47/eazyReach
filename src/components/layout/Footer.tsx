import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/EazyReach-w.png" 
                alt="EazyReach Logo" 
                className="size-28 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400">Find verified LinkedIn contacts instantly.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Platform</a></li>
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
  );
};
