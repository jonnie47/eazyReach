import type { Metadata } from 'next';
import Link from 'next/link';

const PAGE_URL = 'https://eazyreach.app/signalhire-alternative-india';

export const metadata: Metadata = {
    title: 'Signalhire Alternative India — EazyReach | AI-Powered B2B Outreach',
    description:
        'Looking for a Signalhire alternative for the Indian market? EazyReach offers DIN-based director lookup, AI calling, INR pricing, and a shared credit pool — built for Indian B2B sales teams.',
    keywords: [
        'Signalhire alternative',
        'Signalhire alternative India',
        'best Signalhire alternative',
        'cheaper than Signalhire',
        'Signalhire vs EazyReach',
        'Signalhire competitors India',
        'alternatives to Signalhire',
        'Signalhire chrome extension alternative',
        'B2B contact finder India',
        'LinkedIn phone number finder India',
    ],
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Signalhire Alternative India — EazyReach',
        description: 'Signalhire alternative for the Indian B2B market. AI calling, DIN director lookup, shared credits, INR pricing.',
        url: PAGE_URL,
        type: 'website',
        images: [{ url: 'https://eazyreach.app/EazyE.png', width: 1200, height: 630, alt: 'EazyReach vs Signalhire' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Signalhire Alternative India — EazyReach',
        description: 'AI-native Signalhire alternative for Indian B2B sales teams.',
        images: ['https://eazyreach.app/EazyE.png'],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eazyreach.app' },
        { '@type': 'ListItem', position: 2, name: 'Signalhire Alternative India', item: PAGE_URL },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is the best Signalhire alternative for Indian B2B teams?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach is the leading Signalhire alternative for Indian B2B sales teams. It adds DIN-based director phone lookup, AI voice agents, browser-based calling, and shared team credits at INR-native pricing — features that Signalhire, being US-focused, does not optimise for the Indian market.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is EazyReach cheaper than Signalhire?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Signalhire prices in USD with per-seat plans. EazyReach is INR-native with a shared credit pool and no per-seat caps, which typically works out cheaper for Indian B2B teams — especially as your team scales.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach have a Chrome extension like Signalhire?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach has a Chrome extension that works on LinkedIn, Sales Navigator, Recruiter, and company websites — surfacing verified phone numbers and emails in one click, with built-in calling.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach support DIN-based director phone lookup?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach uses DIN (Director Identification Number) data from MCA records to find verified phone numbers of Indian company directors. This is a unique India-first capability that Signalhire does not offer.',
            },
        },
    ],
};

const comparisonData = [
    { feature: 'India-first data depth', eazyreach: true, signalhire: false },
    { feature: 'DIN-based director lookup', eazyreach: true, signalhire: false },
    { feature: 'Shared credit pool (no seat caps)', eazyreach: true, signalhire: false },
    { feature: 'INR-native pricing', eazyreach: true, signalhire: false },
    { feature: 'Built-in browser calling', eazyreach: true, signalhire: false },
    { feature: 'AI voice agents', eazyreach: true, signalhire: false },
    { feature: 'AI outreach sequences', eazyreach: true, signalhire: false },
    { feature: 'Chrome extension', eazyreach: true, signalhire: true },
    { feature: 'LinkedIn phone & email reveal', eazyreach: true, signalhire: true },
    { feature: 'CRM integrations', eazyreach: true, signalhire: true },
];

export default function SignalhireAlternativeIndia() {
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
                            <span className="text-gray-300">Signalhire Alternative India</span>
                        </nav>
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-sm text-yellow-400 mb-6">
                            🇮🇳 The India-First Signalhire Alternative
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Signalhire Alternative for India —<br />
                            <span className="text-yellow-400">AI-Native B2B Outreach</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
                            Signalhire is built for the global market. EazyReach is built for India — DIN-based director lookup, AI voice agents, browser-based calling, and shared team credits at INR-native pricing.
                        </p>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                            Stop paying USD for global data. Get India-first contact intelligence with an AI execution layer built in.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/get-started" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">Try EazyReach Free</Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">View Pricing</Link>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">EazyReach vs Signalhire — Feature Comparison</h2>
                        <p className="text-gray-500 text-xs text-center mb-12">Comparison based on publicly listed features. Contact each vendor for current capabilities.</p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="text-left px-6 py-4 text-gray-300 font-semibold">Feature</th>
                                        <th className="text-center px-6 py-4 text-yellow-400 font-semibold">EazyReach</th>
                                        <th className="text-center px-6 py-4 text-gray-400 font-semibold">Signalhire</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className={`border-t border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                                            <td className="px-6 py-4 text-gray-300">{row.feature}</td>
                                            <td className="px-6 py-4 text-center">{row.eazyreach ? <span className="text-green-400 text-lg">✓</span> : <span className="text-red-400 text-lg">✗</span>}</td>
                                            <td className="px-6 py-4 text-center">{row.signalhire ? <span className="text-green-400 text-lg">✓</span> : <span className="text-red-400 text-lg">✗</span>}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Why Indian Teams Pick EazyReach Over Signalhire</h2>
                        <div className="space-y-5 text-gray-300 text-base leading-relaxed">
                            <p><strong className="text-white">India-first data sources.</strong> EazyReach indexes MCA DIN records, Indian LinkedIn profiles, and India-specific business databases. Signalhire is global — strong in the US/EU, lighter on Indian B2B coverage.</p>
                            <p><strong className="text-white">AI execution layer included.</strong> Signalhire stops at contact data export. EazyReach goes from enrichment to AI-driven outreach inside one tab — voice agents, sequences, calling.</p>
                            <p><strong className="text-white">INR pricing, shared credits.</strong> No FX exposure. No per-seat penalties. Your team shares one credit pool that scales with usage, not headcount.</p>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Switch from Signalhire to EazyReach</h2>
                        <p className="text-gray-400 mb-8">Free to start. Free starter credits. Built for Indian B2B sales teams.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/get-started" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">Get Started Free</Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">See Pricing</Link>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Signalhire Alternative — FAQ</h2>
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
                            <Link href="/rocketreach-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">RocketReach Alternative</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/zoominfo-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">ZoomInfo Alternative</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/pricing" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Pricing</Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
