import type { Metadata } from 'next';
import Link from 'next/link';

const PAGE_URL = 'https://eazyreach.app/clearbit-alternative-india';

export const metadata: Metadata = {
    title: 'Clearbit Alternative India — EazyReach | Sales Enrichment + AI Calling',
    description:
        'The best Clearbit alternative for Indian B2B sales teams. EazyReach adds DIN-based director lookup, AI voice agents, browser calling, and INR pricing — built for sales prospecting, not just marketing enrichment.',
    keywords: [
        'Clearbit alternative',
        'Clearbit alternative India',
        'best Clearbit alternative',
        'Clearbit vs EazyReach',
        'Clearbit competitors India',
        'Clearbit replacement',
        'HubSpot Breeze Intelligence alternative',
        'B2B contact enrichment India',
        'sales enrichment tool India',
    ],
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Clearbit Alternative India — EazyReach',
        description: 'India-first Clearbit alternative for B2B sales teams. AI calling, DIN director lookup, INR pricing, and shared team credits.',
        url: PAGE_URL,
        type: 'website',
        images: [{ url: 'https://eazyreach.app/EazyE.png', width: 1200, height: 630, alt: 'EazyReach vs Clearbit' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Clearbit Alternative India — EazyReach',
        description: 'India-first AI-native Clearbit alternative for B2B sales teams.',
        images: ['https://eazyreach.app/EazyE.png'],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eazyreach.app' },
        { '@type': 'ListItem', position: 2, name: 'Clearbit Alternative India', item: PAGE_URL },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is the best Clearbit alternative for Indian B2B sales teams?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach is the best Clearbit alternative for Indian B2B sales teams. While Clearbit (now part of HubSpot Breeze Intelligence) focuses on marketing enrichment, EazyReach is built for outbound sales — adding DIN-based director phone lookup, AI voice agents, browser-based calling, and INR-native pricing.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is Clearbit better for sales prospecting than EazyReach?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For Indian sales prospecting, EazyReach is purpose-built. Clearbit excels at firmographic enrichment for marketing workflows, but EazyReach offers verified phone numbers, DIN-based director data, AI calling, and outreach sequences — the full sales execution layer Clearbit does not include.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach have a Chrome extension like Clearbit Connect?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach has a Chrome extension that works on LinkedIn, Sales Navigator, Recruiter, and company websites. It surfaces verified phone numbers, work emails, and full LinkedIn enrichment in one click — and includes browser-based calling.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach offer API enrichment like Clearbit?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach exposes an API for programmatic contact enrichment, plus an MCP server so AI agents (Claude, custom GPTs) can query and act on contact data directly. Clearbit\'s API focuses on firmographic enrichment; EazyReach\'s extends to phone numbers, DIN data, and AI-driven outreach.',
            },
        },
    ],
};

const comparisonData = [
    { feature: 'India-first data (MCA DIN, India LinkedIn)', eazyreach: true, cb: false },
    { feature: 'Verified phone number reveal', eazyreach: true, cb: 'partial' },
    { feature: 'DIN-based director lookup', eazyreach: true, cb: false },
    { feature: 'AI voice agents', eazyreach: true, cb: false },
    { feature: 'Browser-based calling', eazyreach: true, cb: false },
    { feature: 'AI outreach sequences', eazyreach: true, cb: false },
    { feature: 'MCP server for AI agents', eazyreach: true, cb: false },
    { feature: 'INR-native pricing', eazyreach: true, cb: false },
    { feature: 'API enrichment', eazyreach: true, cb: true },
    { feature: 'Firmographic data enrichment', eazyreach: true, cb: true },
];

const cell = (v: boolean | string) => {
    if (v === true) return <span className="text-green-400 text-lg">✓</span>;
    if (v === false) return <span className="text-red-400 text-lg">✗</span>;
    if (v === 'partial') return <span className="text-yellow-400 text-xs">Partial</span>;
    return <span className="text-yellow-400 font-semibold text-xs">{v}</span>;
};

export default function ClearbitAlternativeIndia() {
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
                            <span className="text-gray-300">Clearbit Alternative India</span>
                        </nav>
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-sm text-yellow-400 mb-6">
                            🇮🇳 The Sales-First Clearbit Alternative for India
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Clearbit Alternative for India —<br />
                            <span className="text-yellow-400">Built for Sales, Not Just Marketing</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
                            Clearbit (now HubSpot Breeze Intelligence) does great firmographic enrichment for marketing. EazyReach goes further — verified phone numbers, DIN-based director lookup, AI voice agents, and browser-based calling for Indian B2B sales teams.
                        </p>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                            From enrichment to AI-driven outreach in one workflow. INR-native, India-first, AI-native.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/get-started" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">Try EazyReach Free</Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">View Pricing</Link>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">EazyReach vs Clearbit — Feature Comparison</h2>
                        <p className="text-gray-500 text-xs text-center mb-12">Comparison based on publicly listed features. Contact each vendor for current capabilities.</p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="text-left px-6 py-4 text-gray-300 font-semibold">Feature</th>
                                        <th className="text-center px-6 py-4 text-yellow-400 font-semibold">EazyReach</th>
                                        <th className="text-center px-6 py-4 text-gray-400 font-semibold">Clearbit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className={`border-t border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                                            <td className="px-6 py-4 text-gray-300">{row.feature}</td>
                                            <td className="px-6 py-4 text-center">{cell(row.eazyreach)}</td>
                                            <td className="px-6 py-4 text-center">{cell(row.cb)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Why Indian Teams Pick EazyReach Over Clearbit</h2>
                        <div className="space-y-5 text-gray-300 text-base leading-relaxed">
                            <p><strong className="text-white">Sales-first, not marketing-first.</strong> Clearbit shines in firmographic data for marketing automation. EazyReach is built for SDRs and AEs who need verified phone numbers, director contacts, and AI-driven outbound execution.</p>
                            <p><strong className="text-white">India-first data depth.</strong> EazyReach pulls from MCA DIN director records and Indian LinkedIn — Clearbit&apos;s strength is global firmographic data, with thinner India phone-number coverage.</p>
                            <p><strong className="text-white">Execution beyond enrichment.</strong> Clearbit hands data to your tools. EazyReach hands you the call — built-in browser dialer, AI voice agents, and outreach sequences inside the same workflow.</p>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Switch from Clearbit to EazyReach</h2>
                        <p className="text-gray-400 mb-8">Free to install. India-first sales intelligence with an AI execution layer.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/get-started" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">Get Started Free</Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">See Pricing</Link>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Clearbit Alternative — FAQ</h2>
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
