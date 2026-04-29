import type { Metadata } from 'next';
import Link from 'next/link';

const PAGE_URL = 'https://eazyreach.app/cognism-alternative-india';

export const metadata: Metadata = {
    title: 'Cognism Alternative India — EazyReach | India-First B2B Outreach',
    description:
        'The best Cognism alternative for Indian B2B sales teams. EazyReach offers DIN-based director lookup, AI calling, and shared team credits in INR — built for India, not retrofitted for it.',
    keywords: [
        'Cognism alternative',
        'Cognism alternative India',
        'best Cognism alternative',
        'Cognism vs EazyReach',
        'Cognism competitors India',
        'cheaper than Cognism',
        'Cognism for India',
        'B2B contact data India',
        'DPDP-compliant B2B prospecting',
    ],
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Cognism Alternative India — EazyReach',
        description: 'India-first Cognism alternative. AI calling, DIN director lookup, INR pricing, and shared team credits.',
        url: PAGE_URL,
        type: 'website',
        images: [{ url: 'https://eazyreach.app/EazyE.png', width: 1200, height: 630, alt: 'EazyReach vs Cognism' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cognism Alternative India — EazyReach',
        description: 'India-first AI-native Cognism alternative for B2B sales teams.',
        images: ['https://eazyreach.app/EazyE.png'],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eazyreach.app' },
        { '@type': 'ListItem', position: 2, name: 'Cognism Alternative India', item: PAGE_URL },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is the best Cognism alternative for Indian B2B teams?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach is the leading Cognism alternative for Indian B2B sales teams. While Cognism is strong in the UK and EU with GDPR-grade compliance, EazyReach is built India-first — DIN-based director phone lookup, AI voice agents, browser-based calling, INR-native pricing, and DPDP Act compliance.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is Cognism good for the Indian market?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Cognism\'s strongest data depth is in Europe and the UK. For Indian B2B contacts — directors of Indian registered companies, CXOs of Indian SMBs, regional decision-makers — EazyReach offers more accurate India-specific coverage thanks to its MCA DIN integration.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is EazyReach cheaper than Cognism?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Cognism is positioned at the premium end of B2B sales intelligence with USD/EUR/GBP pricing. EazyReach uses INR-native pricing with a shared credit pool — substantially more cost-effective for Indian sales teams without sacrificing data accuracy on Indian contacts.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach have AI features Cognism lacks?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach is AI-native. It includes AI voice agents for outbound calling, AI-drafted outreach sequences, and an MCP server for AI agent access — features Cognism does not natively offer at this depth.',
            },
        },
    ],
};

const comparisonData = [
    { feature: 'India-first data depth', eazyreach: true, cog: false },
    { feature: 'DIN-based director lookup', eazyreach: true, cog: false },
    { feature: 'DPDP Act compliance (India)', eazyreach: true, cog: 'partial' },
    { feature: 'AI voice agents', eazyreach: true, cog: false },
    { feature: 'AI outreach sequences', eazyreach: true, cog: 'partial' },
    { feature: 'Browser-based calling', eazyreach: true, cog: false },
    { feature: 'INR-native pricing', eazyreach: true, cog: false },
    { feature: 'Shared credit pool (no seat caps)', eazyreach: true, cog: false },
    { feature: 'GDPR compliance', eazyreach: true, cog: true },
    { feature: 'Strong Europe/UK data', eazyreach: 'India-focus', cog: true },
];

const cell = (v: boolean | string) => {
    if (v === true) return <span className="text-green-400 text-lg">✓</span>;
    if (v === false) return <span className="text-red-400 text-lg">✗</span>;
    if (v === 'partial') return <span className="text-yellow-400 text-xs">Partial</span>;
    return <span className="text-yellow-400 font-semibold text-xs">{v}</span>;
};

export default function CognismAlternativeIndia() {
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
                            <span className="text-gray-300">Cognism Alternative India</span>
                        </nav>
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-sm text-yellow-400 mb-6">
                            🇮🇳 The India-First Cognism Alternative
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Cognism Alternative for India —<br />
                            <span className="text-yellow-400">Built for India, Not Retrofitted</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
                            Cognism is strong in the UK and EU. EazyReach is strong where it matters for Indian B2B — DIN-based director lookup, MCA-sourced phone numbers, AI voice agents, and INR pricing.
                        </p>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                            DPDP Act-compliant. AI-native. Shared team credits. Built for the way Indian sales teams sell.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/get-started" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">Try EazyReach Free</Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">View Pricing</Link>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">EazyReach vs Cognism — Feature Comparison</h2>
                        <p className="text-gray-500 text-xs text-center mb-12">Comparison based on publicly listed features. Contact each vendor for current capabilities.</p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="text-left px-6 py-4 text-gray-300 font-semibold">Feature</th>
                                        <th className="text-center px-6 py-4 text-yellow-400 font-semibold">EazyReach</th>
                                        <th className="text-center px-6 py-4 text-gray-400 font-semibold">Cognism</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className={`border-t border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                                            <td className="px-6 py-4 text-gray-300">{row.feature}</td>
                                            <td className="px-6 py-4 text-center">{cell(row.eazyreach)}</td>
                                            <td className="px-6 py-4 text-center">{cell(row.cog)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Why Indian Teams Choose EazyReach Over Cognism</h2>
                        <div className="space-y-5 text-gray-300 text-base leading-relaxed">
                            <p><strong className="text-white">India-first, not Europe-first.</strong> Cognism&apos;s diamond-verified phone numbers are strongest for the UK and EU. EazyReach&apos;s data depth on Indian directors, CXOs, and SMB decision-makers is built specifically for the Indian market.</p>
                            <p><strong className="text-white">DPDP-compliant from day one.</strong> Cognism is GDPR-strong. EazyReach is also GDPR-compliant AND DPDP Act-compliant — built around Indian data protection regulations rather than retrofitted to them.</p>
                            <p><strong className="text-white">AI execution layer included.</strong> EazyReach gives you AI voice agents, browser calling, and AI-drafted sequences inside the same tool. Cognism is a sales intelligence platform; EazyReach is the AI-native execution layer Indian teams need on top.</p>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Switch from Cognism to EazyReach</h2>
                        <p className="text-gray-400 mb-8">India-first AI sales intelligence. Free starter credits. INR-native pricing.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/get-started" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">Get Started Free</Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">See Pricing</Link>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Cognism Alternative — FAQ</h2>
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
                            <Link href="/zoominfo-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">ZoomInfo Alternative</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/clearbit-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Clearbit Alternative</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/pricing" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Pricing</Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
