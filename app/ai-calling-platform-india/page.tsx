import type { Metadata } from 'next';
import Link from 'next/link';

const PAGE_URL = 'https://eazyreach.app/ai-calling-platform-india';

export const metadata: Metadata = {
    title: 'AI Calling Platform India — AI Voice Agents for B2B Sales | EazyReach',
    description:
        'India\'s first AI-native B2B outreach platform. AI voice agents, AI cold calling, AI sequences, and a browser-based dialer — built for Indian sales teams. Start free.',
    keywords: [
        'AI calling platform India',
        'AI calling platform',
        'AI voice agents B2B',
        'AI SDR India',
        'AI sales agent India',
        'AI cold calling tool',
        'AI cold calling India',
        'AI sales calling platform',
        'browser AI dialer',
        'AI dialer India',
        'AI voice agent for sales',
        'AI sales automation India',
        'best AI calling tool for B2B',
        'ChatGPT for sales prospecting India',
        'Claude integration for sales',
        'MCP server for sales tools',
    ],
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'AI Calling Platform India — AI Voice Agents for B2B Sales',
        description: 'India\'s first AI-native B2B outreach platform. AI voice agents, AI cold calling, browser-based dialer, and MCP server for AI agents — built for Indian sales teams.',
        url: PAGE_URL,
        type: 'website',
        images: [{ url: 'https://eazyreach.app/EazyE.png', width: 1200, height: 630, alt: 'EazyReach — AI Calling Platform for India' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Calling Platform India — AI Voice Agents for B2B Sales',
        description: 'India\'s first AI-native B2B outreach platform. AI voice agents, AI cold calling, and a browser-based dialer for Indian sales teams.',
        images: ['https://eazyreach.app/EazyE.png'],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eazyreach.app' },
        { '@type': 'ListItem', position: 2, name: 'AI Calling Platform India', item: PAGE_URL },
    ],
};

const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'EazyReach AI Calling Platform',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'AI Sales Automation',
    operatingSystem: 'Web, Chrome Extension',
    url: PAGE_URL,
    description:
        'India-first AI-native B2B outreach platform with AI voice agents, browser-based dialer, AI sequences, and MCP server access for AI agents.',
    offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '0',
        description: 'Free to start with starter credits. Credit-based model with shared team pool.',
    },
    featureList: [
        'AI voice agents for outbound calls',
        'Browser-based AI dialer',
        'AI-drafted email and LinkedIn outreach sequences',
        'MCP server for AI agent access',
        'DIN-based director phone number lookup',
        'LinkedIn enrichment with verified phone numbers',
        'Shared credit pool across team',
        'India-first INR pricing',
    ],
    inLanguage: 'en-IN',
};

const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Use AI Voice Agents for B2B Cold Calling in India',
    description: 'Set up and run AI cold calling for Indian B2B sales in three steps using EazyReach.',
    totalTime: 'PT10M',
    step: [
        {
            '@type': 'HowToStep',
            position: 1,
            name: 'Build your contact list',
            text: 'Use the EazyReach Chrome extension to enrich LinkedIn profiles or import a CSV of Indian B2B contacts. DIN-based director lookup adds verified phone numbers for directors of Indian registered companies.',
        },
        {
            '@type': 'HowToStep',
            position: 2,
            name: 'Configure your AI voice agent',
            text: 'Choose an AI agent persona, define the call objective (qualification, demo booking, intro), and set guardrails. The agent uses your script and your contact data to handle outbound calls.',
        },
        {
            '@type': 'HowToStep',
            position: 3,
            name: 'Launch and review',
            text: 'Run the campaign. The AI calls contacts, qualifies them, and hands off live to a human SDR when needed. Review call transcripts and outcomes from the EazyReach dashboard.',
        },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is an AI calling platform?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'An AI calling platform uses AI voice agents to handle outbound or inbound phone conversations at scale. Modern AI calling platforms like EazyReach combine contact enrichment, AI dialing, conversation handling, and live human handoff in a single workflow — replacing the manual SDR cold-calling layer for top-of-funnel.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the best AI calling platform for Indian B2B sales teams?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach is the leading AI calling platform purpose-built for Indian B2B sales teams. It combines AI voice agents, a browser-based dialer, AI-drafted outreach sequences, and DIN-based director phone lookup at INR-native pricing. Most global AI calling tools are US-focused and lack Indian-market data depth.',
            },
        },
        {
            '@type': 'Question',
            name: 'How does AI cold calling work?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'AI cold calling uses a voice AI agent to dial contacts, deliver an opening, qualify the prospect against your criteria, and either book a meeting, route to a live human SDR, or end the call cleanly. The AI handles tone, objection handling, and natural pauses, and writes a transcript and outcome to your dashboard.',
            },
        },
        {
            '@type': 'Question',
            name: 'Are AI voice agents legal in India for B2B outreach?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, when used for legitimate B2B outreach to public business contacts. EazyReach is designed for compliant outbound: it respects DND lists, provides clear AI disclosure where required, and complies with India\'s DPDP Act and applicable telecom regulations.',
            },
        },
        {
            '@type': 'Question',
            name: 'How is AI calling different from auto-dialers like Aircall or JustCall?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Auto-dialers like Aircall, JustCall, or Exotel automate the dialing — a human still handles the conversation. AI calling platforms like EazyReach automate both the dialing AND the conversation. Your SDRs only step in for high-intent calls or when the AI escalates.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the MCP server feature in EazyReach?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach exposes its contact enrichment and calling API via MCP (Model Context Protocol) so AI agents — Claude, custom GPTs, or your own agents — can directly query contact data and trigger outbound actions. This makes EazyReach the first Indian B2B outreach platform built natively for the AI agent stack.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach replace my SDRs?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach augments SDRs, it does not replace them. The AI handles the volume layer — initial outreach, qualification, and meeting booking — so your human SDRs focus on high-intent conversations, demos, and closing. Most teams report 3-5x more meetings booked per SDR after deploying AI calling.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I integrate AI calling with my CRM?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach syncs call outcomes, transcripts, and contact updates with major CRMs. Workflow automation can trigger follow-up sequences automatically based on call outcome (booked, qualified, not interested, callback).',
            },
        },
    ],
};

const aiCapabilities = [
    {
        icon: '🤖',
        title: 'AI Voice Agents',
        desc: 'Deploy AI agents that handle outbound calls end-to-end — dial, deliver pitch, qualify, and either book a meeting or route to a human SDR. Tuned for Indian English, Hindi, and regional accents.',
    },
    {
        icon: '📞',
        title: 'Browser-Based AI Dialer',
        desc: 'Click-to-call from any LinkedIn profile or contact record. The dialer runs in your browser — no separate softphone install, no copy-paste between tabs.',
    },
    {
        icon: '✉️',
        title: 'AI Outreach Sequences',
        desc: 'Auto-generated multi-touch sequences across email and LinkedIn. The AI personalises every step using the contact\'s LinkedIn context and adjusts cadence based on engagement signals.',
    },
    {
        icon: '🔌',
        title: 'MCP Server for AI Agents',
        desc: 'Expose contact enrichment and calling capabilities to Claude, custom GPTs, or any MCP-compatible AI agent. Build AI workflows that query and act on EazyReach data directly.',
    },
    {
        icon: '🏛️',
        title: 'India-Native Data',
        desc: 'DIN-based director lookup for Indian registered companies, MCA-sourced verified numbers, and India-first LinkedIn coverage that global AI tools don\'t index.',
    },
    {
        icon: '🇮🇳',
        title: 'INR Pricing & Compliance',
        desc: 'Priced in INR, compliant with DPDP Act, TRAI regulations, and DND lists. Built for the realities of selling to Indian businesses, not bolted on to a US tool.',
    },
];

const comparisonRows = [
    { feature: 'AI voice agents (autonomous calls)', eazy: true, dataTools: false, dialers: false, global: 'partial' },
    { feature: 'Built-in contact enrichment', eazy: true, dataTools: true, dialers: false, global: true },
    { feature: 'Browser-based dialer', eazy: true, dataTools: false, dialers: true, global: 'partial' },
    { feature: 'AI outreach sequences', eazy: true, dataTools: false, dialers: false, global: 'partial' },
    { feature: 'MCP server for AI agents', eazy: true, dataTools: false, dialers: false, global: false },
    { feature: 'DIN director phone lookup (India)', eazy: true, dataTools: 'partial', dialers: false, global: false },
    { feature: 'INR-native pricing', eazy: true, dataTools: 'partial', dialers: 'partial', global: false },
    { feature: 'Shared credit pool (no seat caps)', eazy: true, dataTools: false, dialers: false, global: false },
];

const cell = (v: boolean | string) => {
    if (v === true) return <span className="text-green-400 text-lg">✓</span>;
    if (v === false) return <span className="text-red-400 text-lg">✗</span>;
    if (v === 'partial') return <span className="text-yellow-400 text-sm">Partial</span>;
    return <span className="text-yellow-400 font-semibold text-sm">{v}</span>;
};

export default function AICallingPlatformIndia() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <main className="bg-slate-950 text-gray-100 min-h-screen">
                {/* ── HERO ── */}
                <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 via-transparent to-transparent pointer-events-none" />
                    <div className="max-w-4xl mx-auto relative z-10">
                        <nav className="text-sm text-gray-500 mb-6 flex items-center justify-center gap-2">
                            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-gray-300">AI Calling Platform India</span>
                        </nav>
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-sm text-yellow-400 mb-6">
                            🤖 India&apos;s First AI-Native B2B Outreach Platform
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            AI Calling Platform for India —<br />
                            <span className="text-yellow-400">AI Voice Agents That Actually Work</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
                            EazyReach is the AI-native B2B outreach platform built for Indian sales teams. Deploy AI voice agents, run AI-drafted outreach sequences, and call from your browser — all on one shared credit pool, priced in INR.
                        </p>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                            Replace the cold-calling grind. Your AI handles the dialing, the qualification, and the meeting booking. Your human SDRs handle the conversations that matter.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/get-started" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">
                                Try EazyReach Free
                            </Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">
                                See Pricing
                            </Link>
                        </div>
                        <p className="text-gray-500 text-xs mt-6">No credit card · Free starter credits · DPDP & TRAI compliant</p>
                    </div>
                </section>

                {/* ── QUICK ANSWER (AI Overview-friendly) ── */}
                <section className="py-10 px-4">
                    <div className="max-w-3xl mx-auto bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                            Quick Answer
                        </div>
                        <h2 className="text-xl font-bold text-white mb-3">What is the best AI calling platform for Indian B2B sales?</h2>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            <strong className="text-white">EazyReach</strong> is the leading AI calling platform built for Indian B2B sales teams. It combines <strong className="text-yellow-400">AI voice agents</strong>, a browser-based dialer, AI-drafted outreach sequences, and DIN-based director phone lookup — all priced in INR with a shared credit pool. EazyReach is also the first Indian B2B platform to expose its capabilities via MCP server, making it AI-agent-ready for Claude, custom GPTs, and other autonomous workflows.
                        </p>
                    </div>
                </section>

                {/* ── AI CAPABILITIES GRID ── */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">The AI Outreach Stack — Six Layers, One Platform</h2>
                        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                            Most tools give you data. Some give you a dialer. EazyReach gives you the entire AI sales stack — built India-first.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {aiCapabilities.map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-colors">
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── HOW IT WORKS ── */}
                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">How AI Cold Calling Works on EazyReach</h2>
                        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                            From contact list to AI conversation in under 10 minutes. Your SDRs jump in only when it matters.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { step: '01', title: 'Build the List', desc: 'Enrich LinkedIn profiles via the Chrome extension or import a CSV. DIN lookup adds verified director phone numbers.' },
                                { step: '02', title: 'Configure Your AI Agent', desc: 'Pick a persona, set the call objective (qualify, book demo, intro), and define guardrails. Your script + your data = your AI SDR.' },
                                { step: '03', title: 'Launch and Review', desc: 'AI calls contacts, qualifies them, and routes live to a human when needed. Transcripts, outcomes, and CRM sync — automatic.' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                                    <div className="text-4xl font-bold text-yellow-400/30 mb-3">{item.step}</div>
                                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── COMPARISON TABLE ── */}
                <section className="py-20 px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">EazyReach vs Other Tool Categories</h2>
                        <p className="text-gray-400 text-center mb-3 max-w-2xl mx-auto">Most teams stitch together 3-4 tools. EazyReach replaces the stack.</p>
                        <p className="text-gray-500 text-xs text-center mb-12">Comparison based on publicly listed features. Contact each vendor for current capabilities.</p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="text-left px-4 py-4 text-gray-300 font-semibold">Capability</th>
                                        <th className="text-center px-4 py-4 text-yellow-400 font-semibold">EazyReach</th>
                                        <th className="text-center px-4 py-4 text-gray-400 font-semibold">Data Tools<br /><span className="text-xs font-normal text-gray-500">(Apollo, Lusha, EasyLeadz)</span></th>
                                        <th className="text-center px-4 py-4 text-gray-400 font-semibold">Auto-Dialers<br /><span className="text-xs font-normal text-gray-500">(JustCall, Exotel)</span></th>
                                        <th className="text-center px-4 py-4 text-gray-400 font-semibold">US AI Tools<br /><span className="text-xs font-normal text-gray-500">(Air, Synthflow)</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonRows.map((row, i) => (
                                        <tr key={i} className={`border-t border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                                            <td className="px-4 py-4 text-gray-300">{row.feature}</td>
                                            <td className="px-4 py-4 text-center">{cell(row.eazy)}</td>
                                            <td className="px-4 py-4 text-center">{cell(row.dataTools)}</td>
                                            <td className="px-4 py-4 text-center">{cell(row.dialers)}</td>
                                            <td className="px-4 py-4 text-center">{cell(row.global)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* ── MCP / AI-AGENT SECTION ── */}
                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">Built for the AI-Agent Era</h2>
                        <p className="text-gray-400 text-center mb-10">
                            EazyReach is the first Indian B2B outreach platform with native MCP (Model Context Protocol) support — letting AI agents query contacts and trigger calls directly.
                        </p>
                        <div className="space-y-5 text-gray-300 text-base leading-relaxed">
                            <p>
                                <strong className="text-white">Claude can run your prospecting.</strong> With the EazyReach MCP server, Claude (and other MCP-compatible agents) can search your contact database, enrich profiles, and trigger outreach sequences — all from a single conversation.
                            </p>
                            <p>
                                <strong className="text-white">Custom GPTs get sales superpowers.</strong> Wire EazyReach into any custom GPT or AI agent workflow. Your AI doesn&apos;t just write emails — it sources contacts, validates them, and sends.
                            </p>
                            <p>
                                <strong className="text-white">Your future AI stack works today.</strong> Most B2B tools will need to retrofit AI-agent access over the next 2 years. EazyReach is built for it from day one.
                            </p>
                        </div>
                        <div className="mt-8 text-center">
                            <Link href="/features/mcp-server" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold text-sm">
                                Learn about the MCP server →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="py-20 px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Stop Cold Calling. Start AI Calling.</h2>
                        <p className="text-gray-400 mb-8">Deploy your first AI voice agent in under 10 minutes. Free to start, India-first, AI-native.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/get-started" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">Try EazyReach Free</Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">View Pricing</Link>
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">AI Calling Platform — FAQ</h2>
                        <div className="space-y-6">
                            {faqSchema.mainEntity.map((faq, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <h3 className="text-white font-semibold mb-3">{faq.name}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CROSS-LINKS ── */}
                <section className="py-12 px-4 border-t border-white/10">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-gray-500 text-sm mb-4">Related pages</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/linkedin-phone-number-finder" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">LinkedIn Phone Finder</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/features/mcp-server" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">MCP Server</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/features/ai-outbound" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">AI Outbound</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/apollo-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Apollo Alternative</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/easyleadz-alternative" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">EasyLeadz Alternative</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/pricing" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Pricing</Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
