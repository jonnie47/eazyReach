import React from 'react';

export const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <iframe 
          src="https://blogs.vocallabs.ai/blogs" 
          className="w-full border-0"
          style={{ height: 'calc(100vh - 80px)' }}
          title="VocalLabs Blog"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      </div>
    </div>
  );
};
