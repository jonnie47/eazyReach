'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { ChevronDown, CodeXml, Zap, Database, Globe, Phone, Mail, BookOpen, LayoutDashboard, PhoneCall, Calendar, Inbox, Linkedin, Chrome, UserCheck, Sparkles, MessageSquare, Video, TrendingUp, Target, Settings, Rocket, Code, DollarSign, ShoppingCart, Heart, Building, Building2 } from 'lucide-react';

export const Header: React.FC = () => {
    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md shadow-lg">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 max-w-full">
                    {/* Logo - Far Left */}
                    <div className="flex items-center flex-shrink-0 min-w-0">
                        <Link href="/" className="flex items-center">
                            <img
                                src="/EazyReach.png"
                                alt="EazyReach"
                                className="size-[230px] object-contain"
                            />
                        </Link>
                    </div>

                    {/* Navigation - Center */}
                    <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {/* Features Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setFeaturesOpen(!featuresOpen);
                                    setSolutionsOpen(false);
                                    setResourcesOpen(false);
                                }}
                                className="flex items-center gap-1 text-gray-100 hover:text-accent transition-colors font-medium"
                            >
                                Features
                                <ChevronDown className={`w-4 h-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {featuresOpen && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] bg-[#1a1a1a] border border-gray-800 rounded-xl shadow-xl shadow-accent/10 p-4 z-50 max-h-[80vh] overflow-y-auto">
                                    <div className="grid grid-cols-2 gap-4">
                                        <Link href="/features/ai-outbound" onClick={() => setFeaturesOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors group">
                                            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                                <PhoneCall className="w-5 h-5 text-accent" />
                                            </div>
                                            <div>
                                                <div className="text-gray-100 font-medium">AI Outbound</div>
                                                <div className="text-xs text-gray-400">Outreach calls</div>
                                            </div>
                                        </Link>
                                        <Link href="/features/ai-calendar" onClick={() => setFeaturesOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors group">
                                            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                                <Calendar className="w-5 h-5 text-accent" />
                                            </div>
                                            <div>
                                                <div className="text-gray-100 font-medium">AI Calendar Assist</div>
                                                <div className="text-xs text-gray-400">Smart meeting scheduling</div>
                                            </div>
                                        </Link>
                                        <Link href="/coming-soon" onClick={() => setFeaturesOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors group">
                                            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                                <Inbox className="w-5 h-5 text-accent" />
                                            </div>
                                            <div>
                                                <div className="text-gray-100 font-medium">AI Inbox</div>
                                                <div className="text-xs text-gray-400">Coming Soon</div>
                                            </div>
                                            <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">Soon</span>

                                        </Link>
                                        <Link href="/features/ai-linkedin" onClick={() => setFeaturesOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors group">
                                            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                                <Linkedin className="w-5 h-5 text-accent" />
                                            </div>
                                            <div>
                                                <div className="text-gray-100 font-medium">AI LinkedIn</div>
                                                <div className="text-xs text-gray-400">AI-driven LinkedIn outreach</div>
                                            </div>
                                        </Link>
                                        <Link href="/features/chrome-extension" onClick={() => setFeaturesOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors group">
                                            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                                <Chrome className="w-5 h-5 text-accent" />
                                            </div>
                                            <div>
                                                <div className="text-gray-100 font-medium">Chrome Extension</div>
                                                <div className="text-xs text-gray-400">Find contacts from browser</div>
                                            </div>
                                        </Link>
                                        <Link href="/coming-soond" onClick={() => setFeaturesOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors group">
                                            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                                <UserCheck className="w-5 h-5 text-accent" />
                                            </div>
                                            <div>
                                                <div className="text-gray-100 font-medium">AI Inbound</div>
                                                <div className="text-xs text-gray-400">Coming Soon</div>
                                            </div>
                                            <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">Soon</span>

                                        </Link>
                                        <Link href="/features/ai-enrichment" onClick={() => setFeaturesOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors group">
                                            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                                <Sparkles className="w-5 h-5 text-accent" />
                                            </div>
                                            <div>
                                                <div className="text-gray-100 font-medium">AI Enrichment</div>
                                                <div className="text-xs text-gray-400">Auto-fill lead data</div>
                                            </div>
                                        </Link>
                                        <Link href="/features/mcp-server" onClick={() => setFeaturesOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors group">
                                            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                                <MessageSquare className="w-5 h-5 text-accent" />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div>
                                                    <div className="text-gray-100 font-medium">MCP Server</div>
                                                    <div className="text-xs text-gray-400">B2B data for AI agents</div>
                                                </div>
                                                <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">New</span>
                                            </div>
                                        </Link>
                                        <Link href="/coming-soon" onClick={() => setFeaturesOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors group">
                                            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                                <Video className="w-5 h-5 text-accent" />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div>
                                                    <div className="text-gray-100 font-medium">AI Notetaker</div>
                                                    <div className="text-xs text-gray-400">Coming soon</div>
                                                </div>
                                                <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">Soon</span>
                                            </div>
                                        </Link>
                                        {/* <Link href="/features/ai-chat" onClick={() => setFeaturesOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors group">
                                        <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                            <MessageSquare className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <div className="text-gray-100 font-medium">AI Chat</div>
                                            <div className="text-xs text-gray-400">Respond with AI agents</div>
                                        </div>
                                    </Link> */}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Solutions Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setSolutionsOpen(!solutionsOpen);
                                    setFeaturesOpen(false);
                                    setResourcesOpen(false);
                                }}
                                className="flex items-center gap-1 text-gray-100 hover:text-accent transition-colors font-medium"
                            >
                                Solutions
                                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {solutionsOpen && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-[#1a1a1a] border border-gray-800 rounded-xl shadow-xl shadow-accent/10 p-4 z-50 max-h-[80vh] overflow-y-auto">
                                    <div className="grid grid-cols-3 gap-4">
                                        {/* Column 1: By Role */}
                                        <div>
                                            <h3 className="text-xs font-bold text-gray-500 uppercase mb-3 px-2">By Role</h3>
                                            <Link href="/coming-soon" onClick={() => setSolutionsOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent/10 transition-colors group mb-1">
                                                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors flex-shrink-0">
                                                    <TrendingUp className="w-4 h-4 text-accent" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-gray-100 font-medium text-sm">Sales</div>
                                                        <span className="text-xs bg-accent/20 text-accent px-1.5 py-0.5 rounded-full">Soon</span>
                                                    </div>
                                                    <div className="text-xs text-gray-400">Faster deal cycles</div>
                                                </div>
                                            </Link>
                                            <Link href="/coming-soon" onClick={() => setSolutionsOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent/10 transition-colors group mb-1">
                                                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors flex-shrink-0">
                                                    <Target className="w-4 h-4 text-accent" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-gray-100 font-medium text-sm">Marketing</div>
                                                        <span className="text-xs bg-accent/20 text-accent px-1.5 py-0.5 rounded-full">Soon</span>
                                                    </div>
                                                    <div className="text-xs text-gray-400">Smarter campaigns</div>
                                                </div>
                                            </Link>
                                            <Link href="/coming-soon" onClick={() => setSolutionsOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent/10 transition-colors group mb-1">
                                                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors flex-shrink-0">
                                                    <Settings className="w-4 h-4 text-accent" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-gray-100 font-medium text-sm">Revops</div>
                                                        <span className="text-xs bg-accent/20 text-accent px-1.5 py-0.5 rounded-full">Soon</span>
                                                    </div>
                                                    <div className="text-xs text-gray-400">Cleaner funnels</div>
                                                </div>
                                            </Link>
                                            <Link href="/coming-soon" onClick={() => setSolutionsOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent/10 transition-colors group mb-3">
                                                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors flex-shrink-0">
                                                    <Rocket className="w-4 h-4 text-accent" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-gray-100 font-medium text-sm">Founders</div>
                                                        <span className="text-xs bg-accent/20 text-accent px-1.5 py-0.5 rounded-full">Soon</span>
                                                    </div>
                                                    <div className="text-xs text-gray-400">Scale with ease</div>
                                                </div>
                                            </Link>
                                        </div>

                                        {/* Column 2: By Company Type */}
                                        <div>
                                            <h3 className="text-xs font-bold text-gray-500 uppercase mb-3 px-2">By Company Type</h3>
                                            <Link href="/coming-soon" onClick={() => setSolutionsOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent/10 transition-colors group mb-1">
                                                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors flex-shrink-0">
                                                    <Zap className="w-4 h-4 text-accent" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-gray-100 font-medium text-sm">Startup</div>
                                                        <span className="text-xs bg-accent/20 text-accent px-1.5 py-0.5 rounded-full">Soon</span>
                                                    </div>
                                                    <div className="text-xs text-gray-400">Accelerate Sales Growth</div>
                                                </div>
                                            </Link>
                                            <Link href="/coming-soon" onClick={() => setSolutionsOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent/10 transition-colors group mb-1">
                                                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors flex-shrink-0">
                                                    <Building className="w-4 h-4 text-accent" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-gray-100 font-medium text-sm">Mid-Market</div>
                                                        <span className="text-xs bg-accent/20 text-accent px-1.5 py-0.5 rounded-full">Soon</span>
                                                    </div>
                                                    <div className="text-xs text-gray-400">Driving Sales Success</div>
                                                </div>
                                            </Link>
                                            <Link href="/coming-soon" onClick={() => setSolutionsOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent/10 transition-colors group mb-1">
                                                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors flex-shrink-0">
                                                    <Building2 className="w-4 h-4 text-accent" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-gray-100 font-medium text-sm">Enterprise</div>
                                                        <span className="text-xs bg-accent/20 text-accent px-1.5 py-0.5 rounded-full">Soon</span>
                                                    </div>
                                                    <div className="text-xs text-gray-400">Master Complex Operation</div>
                                                </div>
                                            </Link>
                                            {/* <div className="mt-4 pt-4 border-t border-gray-800">
                                                <h3 className="text-xs font-bold text-gray-500 uppercase mb-3 px-2">Pricing</h3>
                                                <Link href="/unlimited-email" onClick={() => setSolutionsOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent/10 transition-colors group mb-1">
                                                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors flex-shrink-0">
                                                        <Mail className="w-4 h-4 text-accent" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2">
                                                            <div className="text-gray-100 font-medium text-sm">Unlimited Emails</div>
                                                            <span className="text-xs text-accent font-bold">?3</span>
                                                        </div>
                                                        <div className="text-xs text-gray-400">Send unlimited emails</div>
                                                    </div>
                                                </Link>
                                                <Link href="/director-phone" onClick={() => setSolutionsOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent/10 transition-colors group">
                                                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors flex-shrink-0">
                                                        <Phone className="w-4 h-4 text-accent" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2">
                                                            <div className="text-gray-100 font-medium text-sm">Director Phone</div>
                                                            <span className="text-xs text-accent font-bold">?1</span>
                                                        </div>
                                                        <div className="text-xs text-gray-400">Get director contacts</div>
                                                    </div>
                                                </Link>
                                            </div> */}
                                        </div>

                                        {/* Column 3: By Industry */}
                                        <div>
                                            <h3 className="text-xs font-bold text-gray-500 uppercase mb-3 px-2">By Industry</h3>
                                            <Link href="/coming-soon" onClick={() => setSolutionsOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent/10 transition-colors group mb-1">
                                                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors flex-shrink-0">
                                                    <Code className="w-4 h-4 text-accent" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-gray-100 font-medium text-sm">Technology Services</div>
                                                        <span className="text-xs bg-accent/20 text-accent px-1.5 py-0.5 rounded-full">Soon</span>
                                                    </div>
                                                    <div className="text-xs text-gray-400">Built for SaaS teams</div>
                                                </div>
                                            </Link>
                                            <Link href="/coming-soon" onClick={() => setSolutionsOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent/10 transition-colors group mb-1">
                                                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors flex-shrink-0">
                                                    <DollarSign className="w-4 h-4 text-accent" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-gray-100 font-medium text-sm">Financial Services</div>
                                                        <span className="text-xs bg-accent/20 text-accent px-1.5 py-0.5 rounded-full">Soon</span>
                                                    </div>
                                                    <div className="text-xs text-gray-400">Compliant outreach</div>
                                                </div>
                                            </Link>
                                            <Link href="/coming-soon" onClick={() => setSolutionsOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent/10 transition-colors group mb-1">
                                                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors flex-shrink-0">
                                                    <ShoppingCart className="w-4 h-4 text-accent" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-gray-100 font-medium text-sm">Retail & Goods</div>
                                                        <span className="text-xs bg-accent/20 text-accent px-1.5 py-0.5 rounded-full">Soon</span>
                                                    </div>
                                                    <div className="text-xs text-gray-400">For B2C & wholesale</div>
                                                </div>
                                            </Link>
                                            <Link href="/coming-soon" onClick={() => setSolutionsOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent/10 transition-colors group">
                                                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors flex-shrink-0">
                                                    <Heart className="w-4 h-4 text-accent" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-gray-100 font-medium text-sm">Healthcare</div>
                                                        <span className="text-xs bg-accent/20 text-accent px-1.5 py-0.5 rounded-full">Soon</span>
                                                    </div>
                                                    <div className="text-xs text-gray-400">HIPAA-ready</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Resources Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setResourcesOpen(!resourcesOpen);
                                    setFeaturesOpen(false);
                                    setSolutionsOpen(false);
                                }}
                                className="flex items-center gap-1 text-gray-100 hover:text-accent transition-colors font-medium"
                            >
                                Resources
                                <ChevronDown className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {resourcesOpen && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-[#1a1a1a] border border-gray-800 rounded-xl shadow-xl shadow-accent/10 py-2 z-50">
                                    <Link href="/blogs" target="_blank" rel="noopener noreferrer" onClick={() => setResourcesOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors group">
                                        <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                            <BookOpen className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <div className="text-gray-100 font-medium">Blogs</div>
                                            <div className="text-xs text-gray-400">Latest insights</div>
                                        </div>
                                    </Link>
                                    <Link href="https://docs.eazyreach.app" target="_blank" rel="noopener noreferrer" onClick={() => setResourcesOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors group">
                                        <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                            <CodeXml className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <div className="text-gray-100 font-medium">Docs</div>
                                            <div className="text-xs text-gray-400">API Documentation</div>
                                        </div>
                                    </Link>
                                    <Link href="/dashboard" onClick={() => setResourcesOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors group">
                                        <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                            <LayoutDashboard className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <div className="text-gray-100 font-medium">Dashboard</div>
                                            <div className="text-xs text-gray-400">Coming Q1 2026</div>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/pricing"
                            className="text-gray-100 hover:text-accent transition-colors font-medium"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-100 hover:text-accent transition-colors font-medium"
                        >
                            Talk to Sales
                        </Link>
                    </nav>

                    {/* CTA Button - Far Right */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => {
                                window.location.href = "/contact";
                            }}
                        >
                            Get a Demo
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                                window.open("https://chromewebstore.google.com/detail/vocallabs/njkifaijmekkinldkmklijhdhbddjhdj", "_blank");
                            }}
                            className=" "
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
