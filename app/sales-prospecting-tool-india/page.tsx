import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Sales Prospecting Tool India — EazyReach | B2B Lead Generation',
    description:
        'The most powerful sales prospecting tool built for Indian B2B teams. Find verified contacts, enrich leads with LinkedIn and DIN data, and execute outreach — all in one platform at India-first pricing.',
    alternates: {
        canonical: 'https://eazyreach.app/sales-prospecting-tool-india',
    },
    openGraph: {
        title: 'Sales Prospecting Tool India — EazyReach | B2B Lead Generation',
        description:
            'Best sales prospecting tool for Indian teams. Verified contacts, DIN director intelligence, AI calling, and shared credits — all in one platform.',
        url: 'https://eazyreach.app/sales-prospecting-tool-india',
        type: 'website',
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eazyreach.app' },
        { '@type': 'ListItem', position: 2, name: 'Sales Prospecting Tool India', item: 'https://eazyreach.app/sales-prospecting-tool-india' },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is the best sales prospecting tool for Indian teams?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach is the leading sales prospecting tool built specifically for Indian B2B teams. It combines LinkedIn contact enrichment, DIN-based director intelligence, AI calling, and a shared credit model — all priced in INR for the Indian market.',
            },
        },
        {
            '@type': 'Question',
            name: 'How does EazyReach help Indian sales teams prospect faster?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach reduces prospecting time by combining enrichment and execution in one workflow. Find verified contacts from LinkedIn or DIN, then call them directly from your browser — without switching between multiple tools.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach work for B2B sales prospecting in India?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach is purpose-built for Indian B2B sales prospecting with India-specific data sources (DIN director lookup), INR pricing, and a Chrome extension that works on LinkedIn to find verified phone numbers and emails.',
            },
        },
        {
            '@type': 'Question',
            name: 'What makes EazyReach different from other sales prospecting tools?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach is the only sales prospecting tool that combines LinkedIn enrichment, DIN-based director intelligence, built-in browser calling, AI voice agents, and a shared credit pool — all in one platform at India-first pricing. Most tools only provide data export.',
            },
        },
    ],
};

const useCases = [
    { icon: '🎯', title: 'SDR Teams', desc: 'Find and call decision-makers faster. Reduce time from lead identification to first conversation from days to minutes.' },
    { icon: '🏢', title: 'Enterprise Sales', desc: 'Map entire buying committees. Find CXOs, VPs, and Directors at target accounts with verified contact details.' },
    { icon: '🔍', title: 'Recruiters', desc: 'Find candidate phone numbers and emails from LinkedIn profiles. Reach passive candidates directly.' },
    { icon: '🚀', title: 'Startups', desc: 'Pay only for what you use. No seat fees, no annual contracts. Scale your prospecting as your team grows.' },
    { icon: '🏛️', title: 'Director Outreach', desc: 'Use DIN-based lookup to find verified phone numbers of Indian company directors and founders.' },
    { icon: '🤖', title: 'AI-Powered Teams', desc: 'Use AI voice agents for automated outbound calling. Scale your outreach without scaling your headcount.' },
];

export default function SalesProspectingToolIndia() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <main className="bg-slate-950 text-gray-100 min-h-screen">
                <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 via-transparent to-transparent pointer-events-none" />
                    <div className="max-w-4xl mx-auto relative z-10">
                        <nav className="text-sm text-gray-500 mb-6 flex items-center justify-center gap-2">
                            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-gray-300">Sales Prospecting Tool India</span>
                        </nav>
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-sm text-yellow-400 mb-6">
                            🇮🇳 Built for Indian B2B Sales Teams
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Best Sales Prospecting Tool<br />
                            <span className="text-yellow-400">for Indian Teams</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
                            EazyReach is the only sales prospecting tool that combines LinkedIn contact enrichment, DIN-based director intelligence, built-in AI calling, and a shared credit pool — all in one platform at India-first pricing.
                        </p>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                            From enrichment to execution in one workflow. Modern alternative to traditional contact databases — built for teams upgrading from legacy prospecting tools.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi" target="_blank" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">
                                Try EazyReach Free
                            </Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </section>

                {/* What is Sales Prospecting */}
                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-6">What is Sales Prospecting?</h2>
                        <p className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8">
                            Sales prospecting is the process of identifying and reaching out to potential customers who match your ideal customer profile (ICP). For Indian B2B teams, this means finding the right decision-makers — CXOs, VPs, Directors — at target companies, with verified contact details.
                        </p>
                        <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-2xl p-6 text-center">
                            <p className="text-yellow-400 font-semibold mb-2">Why India-specific tools matter</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Global prospecting tools like Apollo and Lusha have limited India coverage and charge in USD. EazyReach is built from the ground up for Indian B2B teams — with DIN director lookup, INR pricing, and data accuracy optimized for the Indian market.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-20 px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">Who Uses EazyReach for Prospecting?</h2>
                        <p className="text-gray-400 text-center mb-12">Indian sales teams across industries use EazyReach to find and reach decision-makers faster.</p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {useCases.map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-colors">
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Everything Your Team Needs to Prospect in India</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: 'LinkedIn Contact Enrichment', desc: 'Find verified phone numbers and emails from any LinkedIn profile via Chrome extension.' },
                                { title: 'DIN Director Intelligence', desc: 'Unique to EazyReach: find Indian company director contacts using Director Identification Numbers.' },
                                { title: 'Shared Credit Pool', desc: 'Your team shares one credit pool. No per-seat limits. Pay only for what you actually use.' },
                                { title: 'Built-In Browser Calling', desc: 'Call prospects directly from your browser after enrichment — no separate dialer needed.' },
                                { title: 'AI Voice Agents', desc: 'Scale outbound calling with AI voice agents that handle initial outreach automatically.' },
                                { title: 'INR Pricing', desc: 'Pay in Indian Rupees. No USD conversion surprises. Transparent, usage-based pricing.' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:border-yellow-400/20 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Start Prospecting Smarter</h2>
                        <p className="text-gray-400 mb-8">Join Indian sales teams who have moved from manual prospecting to AI-powered enrichment and execution.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi" target="_blank" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">Get Started Free</Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">See Pricing</Link>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
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

                <section className="py-12 px-4 border-t border-white/10">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-gray-500 text-sm mb-4">Explore comparisons</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/apollo-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Apollo Alternative India</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/lusha-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Lusha Alternative India</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/linkedin-phone-number-finder" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">LinkedIn Phone Finder</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/b2b-contact-database-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">B2B Contact Database India</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/pricing" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Pricing</Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
