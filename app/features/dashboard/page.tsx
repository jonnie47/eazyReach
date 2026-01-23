'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    MessageSquare,
    Target,
    BarChart3,
    Store,
    CreditCard,
    Zap,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';

const modules = [
    {
        id: 'agents',
        title: 'Agents',
        icon: MessageSquare,
        color: 'from-purple-500 to-pink-500',
        tagline: 'AI-Powered Voice Outreach',
        description: 'Deploy automated voice outreach agents that handle conversations, qualify leads, and gather responses without manual dial time.',
        capabilities: [
            'Agent Configuration & Scripting',
            'Call Orchestration & Automation',
            'Performance Monitoring',
            'Agent Library Management'
        ],
        connections: ['Campaigns', 'Contacts', 'Analytics']
    },
    {
        id: 'contacts',
        title: 'Contacts',
        icon: Users,
        color: 'from-blue-500 to-cyan-500',
        tagline: 'Centralized Contact Repository',
        description: 'Your central hub for all prospect and customer records with powerful enrichment, segmentation, and organization capabilities.',
        capabilities: [
            'Contact Import & Bulk Upload',
            'Data Enrichment & Verification',
            'Segmentation & Tagging',
            'Contact History & Duplicate Management'
        ],
        connections: ['EazyReach', 'Campaigns', 'Agents', 'Transactions']
    },
    {
        id: 'campaign',
        title: 'Campaigns',
        icon: Target,
        color: 'from-orange-500 to-red-500',
        tagline: 'Multi-Step Outreach Orchestration',
        description: 'Design, launch, and manage targeted outreach sequences that guide prospects through defined engagement workflows.',
        capabilities: [
            'Campaign Builder & Templates',
            'Multi-Channel Sequencing',
            'Scheduling & Pacing Control',
            'Status Tracking & Monitoring'
        ],
        connections: ['Contacts', 'Agents', 'Analytics', 'Transactions']
    },
    {
        id: 'analytics',
        title: 'Analytics',
        icon: BarChart3,
        color: 'from-green-500 to-emerald-500',
        tagline: 'Performance Intelligence',
        description: 'Measure outreach effectiveness, understand ROI, and identify optimization opportunities with comprehensive analytics.',
        capabilities: [
            'Campaign Performance Metrics',
            'Contact Intelligence Insights',
            'Credit Usage Reporting',
            'Trend Analysis & Source Breakdown'
        ],
        connections: ['Campaigns', 'Contacts', 'Transactions', 'EazyReach', 'Agents']
    },
    {
        id: 'marketplace',
        title: 'Marketplace',
        icon: Store,
        color: 'from-indigo-500 to-purple-500',
        tagline: 'Platform Extensions',
        description: 'Discover and activate integrations, templates, and third-party services to extend your platform capabilities.',
        capabilities: [
            'Integration Discovery',
            'One-Click Activation',
            'Template Library Access',
            'Service Management'
        ],
        connections: ['Campaigns', 'Agents', 'EazyReach', 'Transactions']
    },
    {
        id: 'transactions',
        title: 'Transactions',
        icon: CreditCard,
        color: 'from-yellow-500 to-orange-500',
        tagline: 'Credit Economy Management',
        description: 'Track consumption, manage purchases, and monitor account balances with complete transparency into credit usage.',
        capabilities: [
            'Credit Balance Monitoring',
            'Transaction History',
            'Usage Attribution',
            'Purchase Flow & Pricing Transparency'
        ],
        connections: ['EazyReach', 'Campaigns', 'Agents', 'Analytics']
    },
    {
        id: 'eazyreach',
        title: 'EazyReach',
        icon: Zap,
        color: 'from-accent to-yellow-500',
        tagline: 'Contact Discovery Engine',
        description: 'Find B2B prospects from LinkedIn and company databases, then enrich profiles with verified contact details.',
        capabilities: [
            'Profile Discovery & Search',
            'Real-Time Enrichment',
            'Browser Extension Integration',
            'Bulk Operations & XLSX Export'
        ],
        connections: ['Contacts', 'Transactions', 'Analytics', 'Campaigns']
    }
];

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-purple-500/10" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-accent">Studio Platform</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-accent to-purple-400 bg-clip-text text-transparent">
                            EazyReach Dashboard
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                            Unified platform for B2B contact intelligence, outreach automation, and relationship management
                        </p>

                        <motion.a
                            href="https://studio.eazyreach.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Access Dashboard
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Positioning Statement */}
            <section className="py-16 px-4 bg-gradient-to-b from-transparent to-accent/5">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-accent/30"
                    >
                        <h2 className="text-3xl font-bold mb-6 text-center">The All-in-One Solution</h2>
                        <p className="text-lg text-gray-300 text-center leading-relaxed">
                            EazyReach Dashboard consolidates <span className="text-accent font-semibold">B2B contact intelligence</span>,
                            <span className="text-accent font-semibold"> outreach orchestration</span>, and
                            <span className="text-accent font-semibold"> performance measurement</span> into a single cohesive workspace.
                            It eliminates tool sprawl by combining discovery, enrichment, campaign execution, and analytics—enabling
                            teams to move from prospect identification to engagement without switching platforms or losing context.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Modules Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16"
                    >
                        Platform Modules
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {modules.map((module, index) => (
                            <motion.div
                                key={module.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 hover:border-accent/50 transition-all duration-300"
                            >
                                {/* Icon with gradient background */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <module.icon className="w-full h-full text-white" />
                                </div>

                                {/* Title & Tagline */}
                                <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                                <p className="text-sm text-accent mb-4">{module.tagline}</p>

                                {/* Description */}
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    {module.description}
                                </p>

                                {/* Capabilities */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                        Core Capabilities
                                    </h4>
                                    <ul className="space-y-2">
                                        {module.capabilities.map((capability, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                                <span>{capability}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Connections */}
                                <div className="pt-6 border-t border-gray-800">
                                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                        Connects With
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {module.connections.map((connection, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-2 py-1 bg-accent/10 border border-accent/30 rounded-md text-accent"
                                            >
                                                {connection}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Data Flow Diagram */}
            <section className="py-20 px-4 bg-gradient-to-b from-accent/5 to-transparent">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-12"
                    >
                        Module Interaction Flow
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-accent/30"
                    >
                        <div className="font-mono text-center space-y-4">
                            <div className="text-lg md:text-xl text-accent">
                                EazyReach → Contacts → Campaigns → Agents
                            </div>
                            <div className="text-gray-500 text-sm md:text-base">
                                ↓ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓
                            </div>
                            <div className="text-lg md:text-xl text-accent">
                                Transactions ← Analytics (observes all)
                            </div>
                            <div className="text-gray-500 text-sm md:text-base mt-4">
                                ↑
                            </div>
                            <div className="text-lg md:text-xl text-purple-400">
                                Marketplace (extends all)
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-800">
                            <h3 className="text-xl font-semibold mb-4 text-center">Data Flow Summary</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Prospects are discovered in <span className="text-accent font-semibold">EazyReach</span>,
                                enriched with contact details, then added to <span className="text-blue-400 font-semibold">Contacts</span>.
                                From there, they are organized into <span className="text-orange-400 font-semibold">Campaigns</span>,
                                which deploy <span className="text-purple-400 font-semibold">Agents</span> for automated outreach.
                                All credit-consuming actions are logged in <span className="text-yellow-400 font-semibold">Transactions</span>,
                                while <span className="text-green-400 font-semibold">Analytics</span> provides performance visibility
                                across the entire workflow. <span className="text-indigo-400 font-semibold">Marketplace</span> expands
                                capabilities at every stage.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            Ready to Transform Your Outreach?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Access the full EazyReach Dashboard and start building smarter campaigns today.
                        </p>
                        <motion.a
                            href="https://studio.eazyreach.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-accent to-yellow-500 text-black text-lg font-bold rounded-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Launch Dashboard
                            <ArrowRight className="w-6 h-6" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
