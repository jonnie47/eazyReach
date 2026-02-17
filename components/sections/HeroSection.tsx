'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, Users, TrendingUp, Chrome, Send, Sparkles, MessageSquare } from 'lucide-react';
import VariableProximity from '@/components/VariableProximity';
import { LogoMarquee } from '../ui/LogoMarquee';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 20,
    }
  }
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    }
  }
};

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [currentPlaceholder, setCurrentPlaceholder] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const placeholders = [
    "List the top people I should contact from this company based on my ICP criteria.",
    "Show me the stakeholders who influence buying decisions for my product within this company.",
    "Map the leadership roles in this company that align with my target persona.",
    "Who are the most relevant prospects in this organization for my outreach campaign?",
    "Identify the executives or managers in this team who handle responsibilities related to my solution."
  ];

  const quickActions = [
    {
      label: "Find Leads",
      text: "Find VPs of Sales and CROs at US B2B finance companies (>$1B revenue) in SF/LA using Salesforce."
    },
    {
      label: "Enrich Leads",
      text: "Enrich 500 contacts with work email, direct dials, LinkedIn, and employment history."
    },
    {
      label: "Automate Reach",
      text: "Summarize my last call with Jane and draft a follow-up email with key points and two meeting slots."
    },
    {
      label: "Call Autopilot",
      text: "Create a 6-step, 10-day email + LinkedIn sequence. Send 9:30â€“11:30am. Stop if they reply."
    },
    {
      label: "Connect Claude AI",
      text: "Find emails and phones from LinkedIn profiles using natural language with Claude Desktop."
    }
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseDuration = 2000;

    const timeout = setTimeout(() => {
      const currentText = placeholders[placeholderIndex];

      if (!isDeleting && charIndex < currentText.length) {
        setCurrentPlaceholder(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentPlaceholder(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPlaceholderIndex((placeholderIndex + 1) % placeholders.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, placeholderIndex]);

  return (
    <div className="relative overflow-hidden bg-slate-950 text-gray-100 pt-20 pb-32">
      {/* Multi-layer Background Effects */}

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-60" />

      {/* Directional Spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-accent/10 via-transparent to-transparent blur-3xl opacity-60" />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => {
        // Use deterministic positions based on index instead of Math.random()
        const positions = [
          { top: 15, left: 25 },
          { top: 45, left: 75 },
          { top: 70, left: 40 },
          { top: 25, left: 85 },
          { top: 60, left: 15 },
          { top: 35, left: 55 },
          { top: 80, left: 70 },
          { top: 10, left: 50 },
        ];
        const durations = [4, 5.5, 6, 4.5, 5, 6.5, 4.8, 5.3];
        const delays = [0, 1, 2, 0.5, 1.5, 2.5, 0.8, 1.8];

        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              top: `${positions[i].top}%`,
              left: `${positions[i].left}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: durations[i],
              repeat: Infinity,
              delay: delays[i],
              ease: "easeInOut"
            }}
          />
        );
      })}

      {/* Data Streams */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Upgraded Animated Orbs with Gradients */}
      <motion.div
        className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(244, 180, 0, 0.25) 0%, rgba(244, 180, 0, 0.05) 50%, transparent 100%)'
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.15, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(244, 180, 0, 0.2) 0%, rgba(244, 180, 0, 0.05) 50%, transparent 100%)'
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-[450px] h-[450px] rounded-full blur-[110px]"
        style={{
          background: 'radial-gradient(circle, rgba(244, 180, 0, 0.22) 0%, rgba(244, 180, 0, 0.05) 50%, transparent 100%)'
        }}
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [1, 1.18, 1],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Horizontal Glow Beams */}
      <motion.div
        className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          className="text-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge with Breathing Animation */}

          {/* Headline with Glass Container */}
          <motion.div variants={itemVariants} className="relative">
            {/* Glass Background */}

            <div className="relative z-10 py-8" ref={containerRef}>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.15] text-white tracking-tight">
                <VariableProximity
                  label="Supercharge Sales With"
                  fromFontVariationSettings="'wght' 400, 'wdth' 100"
                  toFontVariationSettings="'wght' 900, 'wdth' 125"
                  containerRef={containerRef}
                  radius={120}
                  falloff="exponential"
                  className="inline-block"
                />
                <br />
                <span className="relative inline-block">
                  <VariableProximity
                    label="Conversational AI"
                    fromFontVariationSettings="'wght' 400, 'wdth' 100"
                    toFontVariationSettings="'wght' 900, 'wdth' 125"
                    containerRef={containerRef}
                    radius={120}
                    falloff="exponential"
                  />
                  {/* Elegant Animated Underline */}
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent/40 via-accent to-accent/40"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ backgroundSize: "200% 100%" }}
                    />
                  </motion.div>
                  {/* Glow effect */}
                  <motion.div
                    className="absolute -bottom-3 left-0 right-0 h-2 bg-accent/20 blur-md rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </span>
              </h1>
            </div>
          </motion.div>

          {/* Subheading */}
          <motion.div variants={itemVariants}>
            <p className="text-l md:text-l lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
              Close more deals with the most accurate AI contact finder for B2B teams. Instantly uncover CXO-level phone numbers, verified emails, and complete buyer profiles.
            </p>
          </motion.div>

          {/* AI Input Field */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition duration-300" />
              <div className="relative bg-gradient-to-br from-[#1a1a1a]/95 to-[#0a0a0a]/95 backdrop-blur-xl rounded-2xl border border-accent/30 shadow-lg shadow-accent/10 overflow-hidden">
                <div className="px-5 py-4">
                  <div className="flex items-start gap-3 mb-3">
                    <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={currentPlaceholder}
                      rows={4}
                      className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-base resize-none"
                    />
                  </div>
                  <div className="flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => window.open('https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi', '_blank')}
                      className="p-2 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors"
                    >
                      <Send className="size-5 text-accent" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Bubbles */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              {quickActions.map((action, index) => (
                <motion.button
                  key={index}
                  onClick={() => setInputValue(action.text)}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 hover:border-accent/30 rounded-full text-sm text-gray-300 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {action.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* CTAs with Enhanced Depth */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.button
              onClick={() => window.open('https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi', '_blank')}
              className="group relative px-4 py-2 bg-black text-accent rounded-xl text-l shadow-2xl shadow-accent/40 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
              whileHover={{
                scale: 1.05,
                rotateY: 2,
                boxShadow: '0 25px 50px rgba(244, 180, 0, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shine Effect */}


              <Chrome className="size-5 relative z-10" />
              <span className="relative z-10">Add to Chrome</span>
              <span className="inline-block group-hover:translate-x-2 transition-transform relative z-10"></span>
            </motion.button>

            {/* <motion.button
              onClick={() => window.location.href = '/features/mcp-server'}
              className="group relative px-4 py-2 bg-white/5 backdrop-blur-xl border-2 border-accent text-white rounded-xl text-l hover:bg-accent/10 transition-all duration-300 shadow-xl shadow-accent/20 flex items-center justify-center gap-3"
              whileHover={{
                scale: 1.05,
                rotateY: -2,
                borderColor: 'rgb(244, 180, 0)',
                boxShadow: '0 20px 40px rgba(244, 180, 0, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="size-5" />
              <span>Try MCP Server</span>
              <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full font-bold">New</span>
            </motion.button> */}
          </motion.div>

          {/* Stats Row - Elevated Mini Panels */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-16"
          >
            <motion.div
              variants={statVariants}
              className="group relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl px-4 py-2.5 rounded-xl border border-accent/20 shadow-lg shadow-accent/10 hover:shadow-accent/30 transition-all duration-300"
              whileHover={{ y: -4, scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="w-4 h-4 text-accent" />
                </motion.div>
                <span className="text-sm font-semibold text-gray-100">91% accuracy rate</span>
              </div>
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            <motion.div
              variants={statVariants}
              className="group relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl px-4 py-2.5 rounded-xl border border-accent/20 shadow-lg shadow-accent/10 hover:shadow-accent/30 transition-all duration-300"
              whileHover={{ y: -4, scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Users className="w-4 h-4 text-accent" />
                </motion.div>
                <span className="text-sm font-semibold text-gray-100">10,000+ contacts found daily</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            <motion.div
              variants={statVariants}
              className="group relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl px-4 py-2.5 rounded-xl border border-accent/20 shadow-lg shadow-accent/10 hover:shadow-accent/30 transition-all duration-300"
              whileHover={{ y: -4, scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <TrendingUp className="w-4 h-4 text-accent" />
                </motion.div>
                <span className="text-sm font-semibold text-gray-100">Trusted by multiple industry leaders</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </motion.div>

          {/* Logo Marquee */}
          <motion.div
            variants={itemVariants}
            className="pt-12"
          >
            <LogoMarquee />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
