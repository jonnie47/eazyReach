import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'The Peak AI Alternative — EazyReach | AI Outreach Execution',
    description:
        'Looking for a The Peak AI alternative? EazyReach offers a full-stack B2B outreach platform with enrichment, AI calling, shared credits, and DIN director intelligence — built for Indian sales teams.',
    alternates: {
        canonical: 'https://eazyreach.app/thepeakai-alternative',
    },
    openGraph: {
        title: 'The Peak AI Alternative — EazyReach | AI Outreach Execution',
        description:
            'The Peak AI vs EazyReach for Indian teams: EazyReach wins with shared credits, DIN intelligence, and a full enrichment-to-execution workflow.',
        url: 'https://eazyreach.app/thepeakai-alternative',
        type: 'website',
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eazyreach.app' },
        { '@type': 'ListItem', position: 2, name: 'The Peak AI Alternative', item: 'https://eazyreach.app/thepeakai-alternative' },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Is EazyReach a good The Peak AI alternative for Indian teams?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach offers a more complete outreach stack than The Peak AI for Indian teams — with DIN-based director intelligence, shared credit pools, built-in browser calling, and AI voice agents, all at India-first pricing.',
            },
        },
        {
            '@type': 'Question',
            name: 'How does The Peak AI compare to EazyReach for Indian sales teams?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Peak AI vs EazyReach for Indian teams: EazyReach provides a unified enrichment and execution platform with DIN director lookup — a capability specific to the Indian market that The Peak AI does not offer.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach have AI calling like The Peak AI?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach includes built-in browser calling and AI voice agents for outbound calling — plus contact enrichment from LinkedIn and DIN sources, creating a complete enrichment-to-execution workflow.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the Peak AI alternative with execution layer?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach is the Peak AI alternative with a full execution layer. It combines B2B contact enrichment (LinkedIn + DIN) with browser calling, AI voice agents, and shared team credits — so your team goes from data to conversation without switching tools.',
            },
        },
    ],
};

const comparisonData = [
    { feature: 'India-first pricing (INR)', eazyreach: true, peakai: false },
    { feature: 'Shared credit pool (no seat penalties)', eazyreach: true, peakai: false },
    { feature: 'DIN-based director intelligence', eazyreach: true, peakai: false },
    { feature: 'LinkedIn contact enrichment', eazyreach: true, peakai: true },
    { feature: 'Built-in browser calling', eazyreach: true, peakai: true },
    { feature: 'AI voice agents', eazyreach: true, peakai: true },
    { feature: 'Chrome extension', eazyreach: true, peakai: false },
    { feature: 'Pay-per-use model', eazyreach: true, peakai: false },
    { feature: 'Verified email finder', eazyreach: true, peakai: true },
    { feature: 'Enrichment + execution in one workflow', eazyreach: true, peakai: false },
];

export default function ThePeakAIAlternative() {
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
                            <span className="text-gray-300">The Peak AI Alternative</span>
                        </nav>
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-sm text-yellow-400 mb-6">
                            🤖 AI-First Outreach Execution
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            The Peak AI Alternative —<br />
                            <span className="text-yellow-400">Full-Stack B2B Outreach Platform</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
                            The Peak AI vs EazyReach for Indian teams: EazyReach adds what Peak AI lacks — DIN-based director intelligence, a shared credit pool, and a Chrome extension that works directly on LinkedIn. Peak AI alternative with execution layer built in.
                        </p>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                            From enrichment to execution in one workflow. Find contacts, enrich profiles, and call — without switching between tools or paying per seat.
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

                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">EazyReach vs The Peak AI — Feature Comparison</h2>
                        <p className="text-gray-400 text-center mb-12">A direct comparison for Indian B2B sales teams evaluating AI outreach platforms.</p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="text-left px-6 py-4 text-gray-300 font-semibold">Feature</th>
                                        <th className="text-center px-6 py-4 text-yellow-400 font-semibold">EazyReach</th>
                                        <th className="text-center px-6 py-4 text-gray-400 font-semibold">The Peak AI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className={`border-t border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                                            <td className="px-6 py-4 text-gray-300">{row.feature}</td>
                                            <td className="px-6 py-4 text-center">{row.eazyreach ? <span className="text-green-400 text-lg">✓</span> : <span className="text-red-400 text-lg">✗</span>}</td>
                                            <td className="px-6 py-4 text-center">{row.peakai ? <span className="text-green-400 text-lg">✓</span> : <span className="text-red-400 text-lg">✗</span>}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">What EazyReach Adds Over The Peak AI</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: '🏛️', title: 'DIN Director Intelligence', desc: 'EazyReach uniquely finds Indian company director contacts via DIN — a data source The Peak AI doesn\'t tap into.' },
                                { icon: '🤝', title: 'Shared Team Credits', desc: 'No per-seat credit limits. Your entire team shares one pool — maximizing ROI and eliminating wasted credits.' },
                                { icon: '🔌', title: 'Chrome Extension on LinkedIn', desc: 'EazyReach\'s Chrome extension works directly on LinkedIn profiles to reveal phone numbers and emails in real time.' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-colors">
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Switch to a Complete Outreach Platform</h2>
                        <p className="text-gray-400 mb-8">Modern alternative to traditional AI outreach tools. Built for teams that need enrichment and execution in one place.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi" target="_blank" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">Get Started Free</Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">See Pricing</Link>
                        </div>
                    </div>
                </section>

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
                        <p className="text-gray-500 text-sm mb-4">Explore more comparisons</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/apollo-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Apollo Alternative India</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/lusha-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Lusha Alternative India</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/easyleadz-alternative" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">EasyLeadz Alternative</Link>
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
