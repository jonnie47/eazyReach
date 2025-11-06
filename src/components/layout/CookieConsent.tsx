import React from 'react';

export const CookieConsent: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies to improve your experience. By continuing, you accept our cookie policy.
        </p>
        <button className="px-6 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
          Accept
        </button>
      </div>
    </div>
  );
};
