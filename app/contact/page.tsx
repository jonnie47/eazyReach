'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Building2 } from 'lucide-react';

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

  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </div>
          <h1 className="text-5xl font-bold text-accent mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800 hover:border-accent/50 transition-all">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-2">Email Us</h3>
            <p className="text-gray-400 mb-4">Our team is here to help</p>
            <a href="mailto:support@eazyreach.com" className="text-accent hover:text-[#D4A000] transition-colors font-medium">
              support@eazyreach.com
            </a>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800 hover:border-accent/50 transition-all">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-2">Call Us</h3>
            <p className="text-gray-400 mb-4">Mon-Fri from 9am to 6pm</p>
            <a href="tel:+1234567890" className="text-accent hover:text-[#D4A000] transition-colors font-medium">
              +1 (234) 567-890
            </a>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800 hover:border-accent/50 transition-all">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-2">Visit Us</h3>
            <p className="text-gray-400 mb-4">Come say hello</p>
            <p className="text-accent font-medium">
              123 Business Street<br />
              San Francisco, CA 94102
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-gray-800">
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
                className="w-full px-8 py-4 bg-gradient-to-r from-accent to-accent text-black rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-accent/30 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
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
