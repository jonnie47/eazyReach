import type { Metadata } from 'next';
import Link from 'next/link';

const PAGE_URL = 'https://eazyreach.app/zoominfo-alternative-india';

export const metadata: Metadata = {
    title: 'ZoomInfo Alternative India — EazyReach | Affordable AI Sales Platform',
    description:
        'The affordable ZoomInfo alternative for Indian B2B teams. EazyReach offers DIN-based director lookup, AI calling, and shared team credits at INR pricing — without ZoomInfo\'s enterprise-tier cost.',
    keywords: [
        'ZoomInfo alternative',
        'ZoomInfo alternative India',
        'best ZoomInfo alternative',
        'cheaper than ZoomInfo',
        'ZoomInfo vs EazyReach',
        'ZoomInfo competitors India',
        'affordable ZoomInfo alternative',
        'ZoomInfo for SMB',
        'B2B sales intelligence India',
    ],
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'ZoomInfo Alternative India — EazyReach',
        description: 'Affordable ZoomInfo alternative for Indian B2B sales teams. AI calling, DIN director lookup, INR pricing.',
        url: PAGE_URL,
        type: 'website',
        images: [{ url: 'https://eazyreach.app/EazyE.png', width: 1200, height: 630, alt: 'EazyReach vs ZoomInfo' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ZoomInfo Alternative India — EazyReach',
        description: 'Affordable AI-native ZoomInfo alternative for Indian B2B sales teams.',
        images: ['https://eazyreach.app/EazyE.png'],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eazyreach.app' },
        { '@type': 'ListItem', position: 2, name: 'ZoomInfo Alternative India', item: PAGE_URL },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is the best affordable ZoomInfo alternative for Indian B2B teams?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach is the most affordable ZoomInfo alternative for Indian B2B sales teams. It offers DIN-based director phone lookup, AI voice agents, browser-based calling, and shared team credits at INR-native pricing — without ZoomInfo\'s enterprise-tier annual contracts.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is EazyReach cheaper than ZoomInfo?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. ZoomInfo is priced for enterprise budgets with annual contracts. EazyReach uses an INR-native shared credit pool with no annual lock-in — making it dramatically more affordable for Indian startups, SMBs, and growing sales teams.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach have data quality comparable to ZoomInfo for India?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For Indian B2B contacts, EazyReach often has better depth than ZoomInfo because it indexes MCA DIN director records — an authoritative India-specific data source US-focused tools do not cover. ZoomInfo remains stronger for global enterprise data.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach have AI features ZoomInfo lacks?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach is AI-native — it includes AI voice agents for outbound cold calling, AI-drafted outreach sequences, and an MCP server for AI agent access. ZoomInfo is a B2B intelligence database with sales engagement layered on; EazyReach is built around the AI execution layer from day one.',
            },
        },
    ],
};

const comparisonData = [
    { feature: 'India-first data depth', eazyreach: true, zi: false },
    { feature: 'DIN-based director lookup', eazyreach: true, zi: false },
    { feature: 'AI voice agents', eazyreach: true, zi: false },
    { feature: 'AI outreach sequences (native)', eazyreach: true, zi: 'partial' },
    { feature: 'Built-in browser calling', eazyreach: true, zi: false },
    { feature: 'Shared credit pool (no seat caps)', eazyreach: true, zi: false },
    { feature: 'INR-native pricing', eazyreach: true, zi: false },
    { feature: 'No annual lock-in required', eazyreach: true, zi: false },
    { feature: 'Affordable for SMBs and startups', eazyreach: true, zi: false },
    { feature: 'Large global enterprise database', eazyreach: 'India-focus', zi: true },
];

const cell = (v: boolean | string) => {
    if (v === true) return <span className="text-green-400 text-lg">✓</span>;
    if (v === false) return <span className="text-red-400 text-lg">✗</span>;
    if (v === 'partial') return <span className="text-yellow-400 text-xs">Partial</span>;
    return <span className="text-yellow-400 font-semibold text-xs">{v}</span>;
};

export default function ZoomInfoAlternativeIndia() {
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
                            <span className="text-gray-300">ZoomInfo Alternative India</span>
                        </nav>
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-sm text-yellow-400 mb-6">
                            🇮🇳 The Affordable ZoomInfo Alternative for India
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            ZoomInfo Alternative for India —<br />
                            <span className="text-yellow-400">Without the Enterprise Price Tag</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
                            ZoomInfo is built for global enterprise. EazyReach is built for Indian B2B teams that need accurate director and CXO contacts without an enterprise-tier annual contract.
                        </p>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                            DIN-based director lookup, AI voice agents, and shared team credits in INR — at a fraction of the cost.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/get-started" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">Try EazyReach Free</Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">View Pricing</Link>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">EazyReach vs ZoomInfo — Feature Comparison</h2>
                        <p className="text-gray-500 text-xs text-center mb-12">Comparison based on publicly listed features. Contact each vendor for current capabilities.</p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="text-left px-6 py-4 text-gray-300 font-semibold">Feature</th>
                                        <th className="text-center px-6 py-4 text-yellow-400 font-semibold">EazyReach</th>
                                        <th className="text-center px-6 py-4 text-gray-400 font-semibold">ZoomInfo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className={`border-t border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                                            <td className="px-6 py-4 text-gray-300">{row.feature}</td>
                                            <td className="px-6 py-4 text-center">{cell(row.eazyreach)}</td>
                                            <td className="px-6 py-4 text-center">{cell(row.zi)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Why Indian Teams Pick EazyReach Over ZoomInfo</h2>
                        <div className="space-y-5 text-gray-300 text-base leading-relaxed">
                            <p><strong className="text-white">Built for Indian budgets.</strong> ZoomInfo&apos;s entry-level enterprise pricing locks Indian SMBs out. EazyReach&apos;s shared credit pool with INR-native pricing is built for the way Indian B2B teams actually buy.</p>
                            <p><strong className="text-white">India-first data depth.</strong> EazyReach indexes MCA DIN director records and Indian LinkedIn profiles. ZoomInfo is global-first — its India coverage is an afterthought to its US enterprise dataset.</p>
                            <p><strong className="text-white">AI execution included.</strong> Beyond data, EazyReach gives you AI voice agents, AI sequences, and a browser-based dialer — turning enrichment into actual revenue conversations.</p>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Switch from ZoomInfo to EazyReach</h2>
                        <p className="text-gray-400 mb-8">No annual contract required. INR pricing. Free starter credits.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/get-started" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">Get Started Free</Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">See Pricing</Link>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">ZoomInfo Alternative — FAQ</h2>
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
                            <Link href="/apollo-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Apollo Alternative</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/lusha-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Lusha Alternative</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/easyleadz-alternative" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">EasyLeadz Alternative</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/signalhire-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Signalhire Alternative</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/cognism-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Cognism Alternative</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/pricing" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Pricing</Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
