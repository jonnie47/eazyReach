'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
    MessageSquare,
    Zap,
    Linkedin,
    Phone,
    Mail,
    Bot,
    Users,
    BarChart3,
    ArrowRight,
    Check,
    Building2,
    Search,
    PhoneCall,
    FileText,
    Shield,
    Globe
} from 'lucide-react';
import type { Metadata } from 'next';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export default function MCPServerPage() {
    const useCases = [
        {
            icon: Search,
            title: 'Prospecting Agents',
            description: 'Find verified contacts using natural language queries. Ask Claude to find emails and phones from any LinkedIn profile.',
        },
        {
            icon: Building2,
            title: 'Account Research Agents',
            description: 'Enrich LinkedIn profiles and Indian DIN records. Get comprehensive contact data for decision-makers.',
        },
        {
            icon: PhoneCall,
            title: 'Outbound Calling Agents',
            description: 'Initiate AI-powered calls through conversation. Let AI agents handle outbound calls with custom scripts.',
        },
        {
            icon: FileText,
            title: 'Call Monitoring',
            description: 'Track call status and view real-time transcripts. Monitor AI conversations as they happen.',
        },
    ];

    const endpoints = [
        { icon: Linkedin, title: 'LinkedIn Emails', description: 'Fetch verified emails from LinkedIn profiles' },
        { icon: Phone, title: 'LinkedIn Phones', description: 'Get direct phone numbers from LinkedIn' },
        { icon: Building2, title: 'DIN Emails', description: 'Fetch emails from Indian Director ID' },
        { icon: Phone, title: 'DIN Phones', description: 'Get phones from Director ID records' },
        { icon: Bot, title: 'Agent Management', description: 'List and configure AI calling agents' },
        { icon: Users, title: 'Prospect Management', description: 'Create and organize call prospects' },
        { icon: PhoneCall, title: 'Call Initiation', description: 'Start AI-powered phone calls' },
        { icon: BarChart3, title: 'Call Monitoring', description: 'Track status and transcripts' },
    ];

    const features = [
        'Natural language contact lookup',
        'LinkedIn & DIN enrichment',
        'AI agent-powered calling',
        'Real-time call monitoring',
        'Prospect group management',
        'JWT authentication with OTP',
    ];

    return (
        <div className="pt-20 bg-black min-h-screen">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[180px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[180px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                {/* Hero Section */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <MessageSquare className="w-4 h-4" />
                        MCP Server
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Connect Claude & AI Agents to{' '}
                        <span className="text-accent">Live B2B Data</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Our MCP server enables Claude Desktop and AI agents to access verified emails, phones, and initiate AI-powered calls through natural conversation.
                    </p>
                </motion.div>

                {/* Architecture Diagram */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl p-8 border border-accent/30">
                        <h2 className="text-2xl font-bold text-white mb-8 text-center">How It Works</h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                            {/* Claude Desktop */}
                            <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 text-center min-w-[180px]">
                                <MessageSquare className="w-10 h-10 text-accent mx-auto mb-3" />
                                <p className="text-white font-semibold">Claude Desktop</p>
                                <p className="text-xs text-gray-400">Natural Language</p>
                            </div>

                            {/* Arrow */}
                            <div className="hidden md:block">
                                <ArrowRight className="w-8 h-8 text-accent/50" />
                            </div>
                            <div className="md:hidden">
                                <ArrowRight className="w-8 h-8 text-accent/50 rotate-90" />
                            </div>

                            {/* MCP Server */}
                            <div className="bg-accent/20 border-2 border-accent rounded-xl p-6 text-center min-w-[180px]">
                                <Zap className="w-10 h-10 text-accent mx-auto mb-3" />
                                <p className="text-white font-bold">MCP Server</p>
                                <p className="text-xs text-gray-400">stdio Protocol</p>
                            </div>

                            {/* Arrow */}
                            <div className="hidden md:block">
                                <ArrowRight className="w-8 h-8 text-accent/50" />
                            </div>
                            <div className="md:hidden">
                                <ArrowRight className="w-8 h-8 text-accent/50 rotate-90" />
                            </div>

                            {/* Superflow APIs */}
                            <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 text-center min-w-[180px]">
                                <Globe className="w-10 h-10 text-accent mx-auto mb-3" />
                                <p className="text-white font-semibold">Superflow APIs</p>
                                <p className="text-xs text-gray-400">B2B Data & Calling</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Use Cases Grid */}
                <motion.div
                    className="mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                        Build Powerful GTM Agents
                    </h2>
                    <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                        Transform Claude into your intelligent sales assistant with access to live B2B data.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {useCases.map((useCase, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl p-8 border border-accent/30 hover:border-accent/50 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <useCase.icon className="w-7 h-7 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Available Endpoints */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                        Available Endpoints
                    </h2>
                    <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                        Access comprehensive B2B data and AI calling capabilities through natural conversation.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {endpoints.map((endpoint, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-gradient-to-br from-[#1a1a1a]/50 to-[#0a0a0a]/50 backdrop-blur-xl rounded-xl p-5 border border-white/10 hover:border-accent/30 transition-all duration-300"
                            >
                                <endpoint.icon className="w-6 h-6 text-accent mb-3" />
                                <h4 className="text-sm font-bold text-white mb-1">{endpoint.title}</h4>
                                <p className="text-xs text-gray-400">{endpoint.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Features List */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-accent/30">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    Everything You Need for AI-Powered Prospecting
                                </h2>
                                <ul className="space-y-4">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-4 h-4 text-accent" />
                                            </div>
                                            <span className="text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-black/50 rounded-xl p-6 border border-white/10 font-mono text-sm">
                                <p className="text-gray-500 mb-2"># Example conversation</p>
                                <p className="text-gray-300"><span className="text-accent">User:</span> Find the email for linkedin.com/in/johndoe</p>
                                <p className="text-gray-300 mt-2"><span className="text-green-400">Claude:</span> Found: john@company.com ✓</p>
                                <p className="text-gray-300 mt-4"><span className="text-accent">User:</span> Add them to Hot Leads and call with Sales Agent</p>
                                <p className="text-gray-300 mt-2"><span className="text-green-400">Claude:</span> 📞 Call initiated. Monitoring...</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-accent/10 rounded-2xl p-12 border border-accent/30">
                        <Shield className="w-12 h-12 text-accent mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Get Started with MCP Server
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Connect Claude Desktop to EazyReach's B2B data in minutes. Secure authentication with phone OTP verification.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => window.open('https://github.com/joeydash/accomox/tree/main/services/mcp-server', '_blank')}
                                className="px-10 py-4 bg-accent text-black rounded-xl font-bold text-lg hover:bg-accent-hover hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
                            >
                                View on GitHub
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => window.open('https://docs.eazyreach.app', '_blank')}
                                className="px-10 py-4 bg-transparent text-accent border-2 border-accent rounded-xl font-bold text-lg hover:bg-accent/10 transition-all"
                            >
                                Read Documentation
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
