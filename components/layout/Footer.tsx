'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-gray-100 py-16 overflow-hidden border-t border-gray-800 shadow-[0_-10px_30px_rgba(244,180,0,0.15)]">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-gradient-to-b from-accent/5 to-transparent blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo - Top Right Corner */}
        <div className="absolute top-0 right-4 sm:right-6 lg:right-8">
          <img 
            src="/EazyReach.png" 
            alt="EazyReach Logo" 
            className="h-16 w-auto opacity-90"
          />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6 font-medium">
                AI Handles the Details. <br />
                <span className="text-accent">You Drive the Revenue.</span>
              </p>
              <motion.button
                onClick={() => window.open('https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj', '_blank')}
                className="px-4 py-2 bg-transparent border border-accent text-white rounded-lg font-medium text-sm hover:bg-accent/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Now
              </motion.button>
            </motion.div>
          </div>

          {/* Product Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Product</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Features', href: '#features' },
                  { label: 'Pricing', href: '/pricing' },
                  { label: 'Platform', href: '/dashboard' },
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-accent transition-colors duration-300 inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Blogs', href: '/blogs' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Dashboard', href: '/dashboard' },
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-accent transition-colors duration-300 inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Legal Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Privacy Policy', href: '#' },
                  { label: 'Terms of Service', href: '#' },
                  { label: 'Cookie Policy', href: '#' },
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-accent transition-colors duration-300 inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            {/* Copyright */}
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} EazyReach. All rights reserved.
            </p>

            {/* Made in India */}
            {/* <p className="text-xs text-gray-500 flex items-center gap-1.5">
              <span>Made with</span>
              <motion.span
                className="text-accent"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                ❤️
              </motion.span>
              <span>in India</span>
            </p> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
