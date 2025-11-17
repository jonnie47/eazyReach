'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Building2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="pt-20 bg-black min-h-screen relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </motion.div>
          <h1 className="text-6xl md:text-7xl font-bold text-accent mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent to-[#D4A000]">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about AI voice agents? We&apos;re here to help!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Contact Info */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Email Card */}
            <motion.div 
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 border border-gray-800 hover:border-accent/50 transition-all group"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Mail className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">Email Us</h3>
                  <p className="text-gray-400 mb-3">Our team is here to help</p>
                  <a 
                    href="mailto:hello@vocallabs.ai" 
                    className="text-accent hover:text-[#D4A000] transition-colors font-medium text-lg inline-flex items-center gap-2 group/link"
                  >
                    hello@vocallabs.ai
                    <Send className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 border border-gray-800 hover:border-accent/50 transition-all group"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Phone className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">Call Us</h3>
                  <p className="text-gray-400 mb-4">Mon-Fri from 9am to 6pm</p>
                  <div className="space-y-3">
                    <div className="group/phone">
                      <p className="text-gray-400 text-sm mb-1 flex items-center gap-2">
                        <span className="text-xl">🇺🇸</span> United States
                      </p>
                      <a 
                        href="tel:+19842550652" 
                        className="text-accent hover:text-[#D4A000] transition-colors font-medium text-lg inline-flex items-center gap-2"
                      >
                        +1 984 255 0652
                        <Phone className="w-4 h-4 group-hover/phone:rotate-12 transition-transform" />
                      </a>
                    </div>
                    <div className="group/phone">
                      <p className="text-gray-400 text-sm mb-1 flex items-center gap-2">
                        <span className="text-xl">🇮🇳</span> India
                      </p>
                      <a 
                        href="tel:+919019822136" 
                        className="text-accent hover:text-[#D4A000] transition-colors font-medium text-lg inline-flex items-center gap-2"
                      >
                        +91 90198 22136
                        <Phone className="w-4 h-4 group-hover/phone:rotate-12 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Offices Card */}
            <motion.div 
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 border border-gray-800 hover:border-accent/50 transition-all group"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Globe className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">Our Offices</h3>
                  <p className="text-gray-400">Come say hello at our locations</p>
                </div>
              </div>
              
              <div className="grid gap-6">
                <div className="relative pl-6 border-l-2 border-accent/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent rounded-full" />
                  <p className="text-gray-300 font-semibold mb-2 flex items-center gap-2">
                    <span className="text-xl">🇺🇸</span> US Office
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    413 Willingham Rd.<br />
                    Morrisville, NC 27560<br />
                    United States of America
                  </p>
                </div>
                <div className="relative pl-6 border-l-2 border-accent/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent rounded-full" />
                  <p className="text-gray-300 font-semibold mb-2 flex items-center gap-2">
                    <span className="text-xl">🇮🇳</span> India Office
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    No. 39, 8th Main Road<br />
                    Third Floor, Vasanth Nagar,<br />
                    Bangalore, Karnataka,<br />
                    India 560001
                  </p>
                  <p className="text-gray-500 text-xs mt-3 font-mono">CIN: U63121KA2025PTC197380</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 md:p-12 border border-gray-800 hover:border-accent/20 transition-all">
              <h2 className="text-3xl font-bold text-gray-100 mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-black border border-gray-800 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-black border border-gray-800 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-black border border-gray-800 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-black border border-gray-800 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-gray-100 focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-accent to-accent text-black rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-accent/30 transition-all flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        {/* <div className="mt-16 text-center">
          <p className="text-gray-400">
            Looking for support? Check out our{' '}
            <a href="/dashboard" className="text-accent hover:text-[#D4A000] transition-colors font-medium">
              Help Center
            </a>
            {' '}or{' '}
            <a href="/blogs" className="text-accent hover:text-[#D4A000] transition-colors font-medium">
              FAQs
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
}
