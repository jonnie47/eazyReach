import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-100 text-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/EazyReach.png" 
                alt="EazyReach Logo" 
                className="size-28 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400">Find verified LinkedIn contacts instantly.</p>
          </div>
          <div>
            <h4 className="text-black font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Platform</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-black font-semibold mb-4">Integrations</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Zapier (Soon)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CRM (Soon)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API (Soon)</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-black font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
