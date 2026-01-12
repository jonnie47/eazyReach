'use client';

import React from 'react';
import { Shield, Mail, Calendar, Lock, Eye, Database, FileText, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
    const sections = [
        {
            icon: Database,
            title: 'Information We Collect',
            content: [
                'When you use EazyReach, we may collect the following information:',
                '• Personal Information: Name, email address, company name, and phone number when you contact us or sign up for our services',
                '• Usage Data: Information about how you use our platform, including search queries and interactions',
                '• Technical Data: IP address, browser type, device information, and cookies',
                '• Business Contact Data: Professional contact information you access through our platform'
            ]
        },
        {
            icon: Eye,
            title: 'How We Use Your Information',
            content: [
                'We use the collected information for:',
                '• Providing and improving our services',
                '• Processing your requests and communications',
                '• Analyzing usage patterns to enhance user experience',
                '• Sending you updates about our services (with your consent)',
                '• Complying with legal obligations',
                '• Preventing fraud and maintaining security'
            ]
        },
        {
            icon: Lock,
            title: 'Data Security',
            content: [
                'We take the security of your data seriously:',
                '• Industry-standard encryption for data transmission',
                '• Secure storage with access controls',
                '• Regular security audits and updates',
                '• Employee training on data protection',
                '• While we implement robust security measures, no method of transmission over the internet is 100% secure'
            ]
        },
        {
            icon: UserCheck,
            title: 'Your Rights',
            content: [
                'You have the following rights regarding your personal data:',
                '• Access: Request a copy of your personal data',
                '• Correction: Request corrections to inaccurate data',
                '• Deletion: Request deletion of your personal data',
                '• Portability: Request transfer of your data',
                '• Opt-out: Unsubscribe from marketing communications',
                'To exercise these rights, contact us at athuljohney@eazyreach.app'
            ]
        },
        {
            icon: FileText,
            title: 'Data Sharing',
            content: [
                'We do not sell your personal information. We may share data with:',
                '• Service Providers: Third-party vendors who help us operate our platform',
                '• Legal Requirements: When required by law or to protect our rights',
                '• Business Transfers: In case of merger, acquisition, or sale of assets',
                'All third parties are required to maintain confidentiality and security of your data'
            ]
        },
        {
            icon: Calendar,
            title: 'Data Retention',
            content: [
                'We retain your personal data only as long as necessary:',
                '• Active account data is retained while your account is active',
                '• Usage data is retained for analytical purposes for up to 2 years',
                '• Legal requirements may necessitate longer retention periods',
                '• You can request deletion of your data at any time'
            ]
        }
    ];

    return (
        <div className="pt-20 bg-black min-h-screen relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
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
                        <Shield className="w-4 h-4" />
                        Your Privacy Matters
                    </motion.div>
                    <h1 className="text-5xl md:text-6xl font-bold text-accent mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent to-[#D4A000]">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </motion.div>

                {/* Introduction */}
                <motion.div
                    className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 border border-gray-800 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-gray-300 leading-relaxed mb-4">
                        At EazyReach, we are committed to protecting your privacy and ensuring the security of your personal information.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our platform.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        By using EazyReach, you agree to the collection and use of information in accordance with this policy.
                        If you do not agree with our policies and practices, please do not use our services.
                    </p>
                </motion.div>

                {/* Policy Sections */}
                <div className="space-y-6">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 border border-gray-800 hover:border-accent/30 transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * (index + 1) }}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <section.icon className="w-6 h-6 text-accent" />
                                </div>
                                <h2 className="text-2xl font-bold text-white mt-1">{section.title}</h2>
                            </div>
                            <div className="ml-16">
                                {section.content.map((paragraph, pIndex) => (
                                    <p key={pIndex} className="text-gray-300 leading-relaxed mb-2">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Cookies Section */}
                <motion.div
                    className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 border border-gray-800 hover:border-accent/30 transition-all mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <FileText className="w-6 h-6 text-accent" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mt-1">Cookies and Tracking</h2>
                    </div>
                    <div className="ml-16">
                        <p className="text-gray-300 leading-relaxed mb-2">
                            We use cookies and similar tracking technologies to:
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-2">
                            • Maintain your session and preferences
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-2">
                            • Analyze site traffic and usage patterns
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-2">
                            • Improve our services and user experience
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            You can control cookies through your browser settings, though some features may not function properly without them.
                        </p>
                    </div>
                </motion.div>

                {/* Updates Section */}
                <motion.div
                    className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 border border-gray-800 hover:border-accent/30 transition-all mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-accent" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mt-1">Policy Updates</h2>
                    </div>
                    <div className="ml-16">
                        <p className="text-gray-300 leading-relaxed mb-2">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by:
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-2">
                            • Posting the new Privacy Policy on this page
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-2">
                            • Updating the "Last Updated" date at the top of this policy
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            • Sending you an email notification for significant changes
                        </p>
                    </div>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    className="bg-gradient-to-r from-accent/10 to-[#D4A000]/10 rounded-2xl p-8 border border-accent/30 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                            <Mail className="w-6 h-6 text-accent" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Questions About Privacy?</h2>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="mailto:athuljohney@eazyreach.app"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black rounded-lg font-semibold hover:bg-[#D4A000] transition-all"
                        >
                            <Mail className="w-5 h-5" />
                            Email Us
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all"
                        >
                            Contact Page
                        </a>
                    </div>
                </motion.div>

                {/* Company Info */}
                <motion.div
                    className="text-center mt-12 text-gray-400 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                >
                    <p>EazyReach</p>
                    <p>No. 39, 8th Main Road, Third Floor, Vasanth Nagar</p>
                    <p>Bangalore, Karnataka, India 560001</p>
                </motion.div>
            </div>
        </div>
    );
}
