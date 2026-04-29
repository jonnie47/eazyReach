import type { Metadata } from 'next';
import Link from 'next/link';

const PAGE_URL = 'https://eazyreach.app/rocketreach-alternative-india';

export const metadata: Metadata = {
    title: 'RocketReach Alternative India — EazyReach | AI Calling + Director Lookup',
    description:
        'The best RocketReach alternative for Indian B2B teams. EazyReach adds AI voice agents, DIN-based director phone lookup, INR pricing, and a shared credit pool — features RocketReach doesn\'t offer.',
    keywords: [
        'RocketReach alternative',
        'RocketReach alternative India',
        'best RocketReach alternative',
        'cheaper than RocketReach',
        'RocketReach vs EazyReach',
        'RocketReach competitors',
        'RocketReach chrome extension alternative',
        'B2B contact finder India',
        'LinkedIn email finder India',
    ],
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'RocketReach Alternative India — EazyReach',
        description: 'India-first RocketReach alternative with AI calling, DIN director lookup, and shared team credits.',
        url: PAGE_URL,
        type: 'website',
        images: [{ url: 'https://eazyreach.app/EazyE.png', width: 1200, height: 630, alt: 'EazyReach vs RocketReach' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'RocketReach Alternative India — EazyReach',
        description: 'AI-native RocketReach alternative for Indian B2B sales teams.',
        images: ['https://eazyreach.app/EazyE.png'],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eazyreach.app' },
        { '@type': 'ListItem', position: 2, name: 'RocketReach Alternative India', item: PAGE_URL },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is the best RocketReach alternative for Indian B2B teams?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach is the best RocketReach alternative for Indian B2B teams. It adds India-first features that RocketReach lacks — DIN-based director phone lookup, AI voice agents, browser-based calling, INR-native pricing, and shared team credits.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is EazyReach cheaper than RocketReach?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'RocketReach prices in USD with per-seat plans. EazyReach uses INR-native pricing with a shared credit pool — typically more cost-effective for Indian teams, especially as you add seats.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach find phone numbers from LinkedIn like RocketReach?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach finds verified phone numbers and emails from any LinkedIn profile via its Chrome extension — and adds DIN-based director phone lookup for Indian companies, which RocketReach does not offer.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach have a Chrome extension like RocketReach?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach has a Chrome extension that works on LinkedIn, Sales Navigator, Recruiter, and company websites. It also includes one-click browser calling — a layer RocketReach does not have.',
            },
        },
    ],
};

const comparisonData = [
    { feature: 'India-first data depth', eazyreach: true, rr: false },
    { feature: 'DIN-based director lookup', eazyreach: true, rr: false },
    { feature: 'Built-in browser calling', eazyreach: true, rr: false },
    { feature: 'AI voice agents', eazyreach: true, rr: false },
    { feature: 'AI outreach sequences', eazyreach: true, rr: false },
    { feature: 'Shared credit pool (no seat caps)', eazyreach: true, rr: false },
    { feature: 'INR-native pricing', eazyreach: true, rr: false },
    { feature: 'Chrome extension', eazyreach: true, rr: true },
    { feature: 'LinkedIn phone & email reveal', eazyreach: true, rr: true },
    { feature: 'Large global email database', eazyreach: 'India-focus', rr: true },
];

const cell = (v: boolean | string) => {
    if (v === true) return <span className="text-green-400 text-lg">✓</span>;
    if (v === false) return <span className="text-red-400 text-lg">✗</span>;
    return <span className="text-yellow-400 font-semibold text-xs">{v}</span>;
};

export default function RocketReachAlternativeIndia() {
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
                            <span className="text-gray-300">RocketReach Alternative India</span>
                        </nav>
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-sm text-yellow-400 mb-6">
                            🇮🇳 The India-First RocketReach Alternative
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            RocketReach Alternative for India —<br />
                            <span className="text-yellow-400">AI-Powered B2B Outreach</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
                            RocketReach has a big global email database. EazyReach has India-first depth — DIN-based director phone lookup, AI voice agents, browser calling, and shared team credits in INR.
                        </p>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                            For Indian B2B sales teams, EazyReach replaces the data-only model with a full AI execution layer.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/get-started" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">Try EazyReach Free</Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">View Pricing</Link>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">EazyReach vs RocketReach — Feature Comparison</h2>
                        <p className="text-gray-500 text-xs text-center mb-12">Comparison based on publicly listed features. Contact each vendor for current capabilities.</p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="text-left px-6 py-4 text-gray-300 font-semibold">Feature</th>
                                        <th className="text-center px-6 py-4 text-yellow-400 font-semibold">EazyReach</th>
                                        <th className="text-center px-6 py-4 text-gray-400 font-semibold">RocketReach</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className={`border-t border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                                            <td className="px-6 py-4 text-gray-300">{row.feature}</td>
                                            <td className="px-6 py-4 text-center">{cell(row.eazyreach)}</td>
                                            <td className="px-6 py-4 text-center">{cell(row.rr)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Why Indian Teams Choose EazyReach Over RocketReach</h2>
                        <div className="space-y-5 text-gray-300 text-base leading-relaxed">
                            <p><strong className="text-white">India-first data, not just global breadth.</strong> RocketReach has scale, but EazyReach has depth where it matters for Indian B2B — MCA DIN data, Indian LinkedIn profiles, and India-specific business intelligence.</p>
                            <p><strong className="text-white">Execution, not just contact reveal.</strong> RocketReach gives you the data and stops there. EazyReach takes you from contact to live call inside one tab — built-in dialer, AI voice agents, and outreach sequences.</p>
                            <p><strong className="text-white">Built for Indian unit economics.</strong> No USD-to-INR FX hits. No per-seat penalties. Shared credits scale with team usage, not headcount.</p>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Switch from RocketReach to EazyReach</h2>
                        <p className="text-gray-400 mb-8">Free to install. Free starter credits. India-first AI outreach.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/get-started" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">Get Started Free</Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">See Pricing</Link>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">RocketReach Alternative — FAQ</h2>
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
