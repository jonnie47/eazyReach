import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../../constants/faqs';

export const FAQSection: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <div className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-accent mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">Everything you need to know about EazyReach</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-gray-800 rounded-xl overflow-hidden">
              <button
                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-gray-900/50 hover:bg-gray-800/50 transition-colors text-left"
              >
                <span className="font-semibold text-gray-100">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${faqOpen === index ? 'rotate-180' : ''}`} />
              </button>
              {faqOpen === index && (
                <div className="px-6 py-4 bg-gray-900/30 border-t border-gray-800">
                  <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
