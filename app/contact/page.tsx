'use client';

import React, { useState } from 'react';
import { Mail, Phone, Send, MessageSquare, User, Building2, Globe } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://arc.vocallabs.ai/v1/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation InsertWebsiteLead($company_email_id: String!, $name: String!, $phone_number: String!, $referral: String!, $type: String!) {
              insert_vocallabs_website_leads_one(object: {
                company_email_id: $company_email_id, 
                name: $name, 
                phone_number: $phone_number, 
                referral: $referral, 
                type: $type
              }) {
                id
              }
            }
          `,
          variables: {
            company_email_id: formData.email,
            name: formData.name,
            phone_number: formData.phone,
            referral: 'website_contact_form',
            type: 'eazyreach'
          }
        })
      });

      const data = await response.json();

      if (data.data?.insert_vocallabs_website_leads_one?.id) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', phone: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
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
            Have questions about EazyReach? We&apos;re here to help!
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
                    href="mailto:athuljohney@eazyreach.app"
                    className="text-accent hover:text-[#D4A000] transition-colors font-medium text-lg inline-flex items-center gap-2 group/link"
                  >
                    athuljohney@eazyreach.app
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
                        <span className="text-xl">????</span> India
                      </p>
                      <a
                        href="tel:+919353447253"
                        className="text-accent hover:text-[#D4A000] transition-colors font-medium text-lg inline-flex items-center gap-2"
                      >
                        +91 9353447253
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
                    <span className="text-xl">????</span> India Office
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                   WolfPack, No. 39, 8th Main Road<br />
                    Third Floor, Vasanth Nagar,<br />
                    Bangalore, Karnataka,<br />
                    India 560001
                  </p>
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
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 md:p-12 border border-gray-800 hover:border-accent/20 transition-all shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-3">Get Started Today</h2>
                <p className="text-gray-400">Fill out the form below and we&apos;ll get back to you shortly</p>
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center"
                >
                  ? Message sent successfully! We&apos;ll be in touch soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center"
                >
                  ? Something went wrong. Please try again.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-accent transition-colors" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-black/50 border-2 border-gray-800 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-accent focus:bg-black transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-accent transition-colors" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-black/50 border-2 border-gray-800 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-accent focus:bg-black transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-3">
                      Company Name
                    </label>
                    <div className="relative group">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-accent transition-colors" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-black/50 border-2 border-gray-800 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-accent focus:bg-black transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-3">
                      Phone Number <span className="text-accent">*</span>
                    </label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-accent transition-colors" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-black/50 border-2 border-gray-800 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-accent focus:bg-black transition-all"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-5 bg-gradient-to-r from-accent via-[#D4A000] to-accent bg-size-200 bg-pos-0 hover:bg-pos-100 text-black rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-accent/40 transition-all duration-500 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none mt-8"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send Message
                    </>
                  )}
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
