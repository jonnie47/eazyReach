import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Apollo Alternative India — EazyReach | B2B Contact Finder',
    description:
        'Looking for an Apollo alternative in India? EazyReach offers verified B2B contacts, shared credit pools, DIN-based director intelligence, and built-in AI calling — at India-first pricing.',
    alternates: {
        canonical: 'https://eazyreach.app/apollo-alternative-india',
    },
    openGraph: {
        title: 'Apollo Alternative India — EazyReach | B2B Contact Finder',
        description:
            'The best Apollo alternative for Indian sales teams. Shared credits, no seat penalties, AI calling, and DIN-based director intelligence.',
        url: 'https://eazyreach.app/apollo-alternative-india',
        type: 'website',
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eazyreach.app' },
        { '@type': 'ListItem', position: 2, name: 'Apollo Alternative India', item: 'https://eazyreach.app/apollo-alternative-india' },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Is EazyReach a good Apollo alternative for Indian teams?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach is purpose-built for Indian B2B sales teams with India-first pricing in INR, a shared credit pool (no per-seat penalties), DIN-based director intelligence, and built-in browser calling — features Apollo does not offer for the Indian market.',
            },
        },
        {
            '@type': 'Question',
            name: 'How does EazyReach pricing compare to Apollo in India?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Apollo charges per seat and exports data without an execution layer. EazyReach uses a pay-per-use credit model with a shared pool across your team, making it significantly more cost-effective for Indian startups and SMBs.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach have a Chrome extension like Apollo?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach offers a Chrome extension that works directly on LinkedIn profiles to find verified phone numbers and emails — with 91% accuracy.',
            },
        },
        {
            '@type': 'Question',
            name: 'What makes EazyReach different from Apollo for Indian sales teams?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach goes beyond data export. It includes built-in browser calling, AI voice agents, DIN-based director phone lookup, and a full outreach execution layer — all in one platform at Indian pricing.',
            },
        },
    ],
};

const comparisonData = [
    { feature: 'India-first pricing (INR)', eazyreach: true, apollo: false },
    { feature: 'Shared credit pool (no seat penalties)', eazyreach: true, apollo: false },
    { feature: 'Built-in browser calling', eazyreach: true, apollo: false },
    { feature: 'AI voice agents', eazyreach: true, apollo: false },
    { feature: 'DIN-based director intelligence', eazyreach: true, apollo: false },
    { feature: 'LinkedIn phone number finder', eazyreach: true, apollo: true },
    { feature: 'Verified email finder', eazyreach: true, apollo: true },
    { feature: 'Chrome extension', eazyreach: true, apollo: true },
    { feature: 'Pay-per-use model', eazyreach: true, apollo: false },
    { feature: 'Enrichment + execution in one workflow', eazyreach: true, apollo: false },
];

export default function ApolloAlternativeIndia() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <main className="bg-slate-950 text-gray-100 min-h-screen">
                {/* Hero */}
                <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 via-transparent to-transparent pointer-events-none" />
                    <div className="max-w-4xl mx-auto relative z-10">
                        <nav className="text-sm text-gray-500 mb-6 flex items-center justify-center gap-2">
                            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-gray-300">Apollo Alternative India</span>
                        </nav>
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-sm text-yellow-400 mb-6">
                            🇮🇳 Built for Indian Sales Teams
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Best Apollo Alternative for<br />
                            <span className="text-yellow-400">Indian Sales Teams</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
                            EazyReach vs Apollo pricing in India is no contest. While Apollo charges per seat and locks you into annual contracts, EazyReach gives Indian sales teams a shared credit pool, built-in calling, and DIN-based director intelligence — at a fraction of the cost.
                        </p>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                            Why Indian sales teams switch from Apollo: no seat penalties, pay-per-use credits, and an execution layer that goes beyond data export.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi"
                                target="_blank"
                                className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors"
                            >
                                Try EazyReach Free
                            </Link>
                            <Link
                                href="/pricing"
                                className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors"
                            >
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">
                            EazyReach vs Apollo — Feature Comparison
                        </h2>
                        <p className="text-gray-400 text-center mb-12">
                            See why Indian B2B teams are choosing EazyReach over Apollo for their outreach stack.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="text-left px-6 py-4 text-gray-300 font-semibold">Feature</th>
                                        <th className="text-center px-6 py-4 text-yellow-400 font-semibold">EazyReach</th>
                                        <th className="text-center px-6 py-4 text-gray-400 font-semibold">Apollo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className={`border-t border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                                            <td className="px-6 py-4 text-gray-300">{row.feature}</td>
                                            <td className="px-6 py-4 text-center">
                                                {row.eazyreach ? (
                                                    <span className="text-green-400 text-lg">✓</span>
                                                ) : (
                                                    <span className="text-red-400 text-lg">✗</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {row.apollo ? (
                                                    <span className="text-green-400 text-lg">✓</span>
                                                ) : (
                                                    <span className="text-red-400 text-lg">✗</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Key Differentiators */}
                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">
                            Why EazyReach Wins for Indian Teams
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: '💰',
                                    title: 'India-First Pricing',
                                    desc: 'Pay in INR. No USD conversion surprises. Credits shared across your entire team — not locked per seat.',
                                },
                                {
                                    icon: '📞',
                                    title: 'Built-In Browser Calling',
                                    desc: 'Call directly from your browser without switching tools. Apollo exports data; EazyReach executes outreach.',
                                },
                                {
                                    icon: '🏛️',
                                    title: 'DIN Director Intelligence',
                                    desc: 'Find verified phone numbers of Indian company directors using DIN (Director Identification Number) — a capability unique to EazyReach.',
                                },
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

                {/* CTA */}
                <section className="py-20 px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Switch from Apollo?
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Join Indian sales teams who have upgraded from legacy prospecting tools to EazyReach's all-in-one enrichment and execution platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi"
                                target="_blank"
                                className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors"
                            >
                                Get Started Free
                            </Link>
                            <Link
                                href="/pricing"
                                className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors"
                            >
                                See Pricing
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">
                            Frequently Asked Questions
                        </h2>
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

                {/* Internal Links */}
                <section className="py-12 px-4 border-t border-white/10">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-gray-500 text-sm mb-4">Explore more comparisons</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/lusha-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Lusha Alternative India</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/easyleadz-alternative" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">EasyLeadz Alternative</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/linkedin-phone-number-finder" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">LinkedIn Phone Finder</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/b2b-contact-database-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">B2B Contact Database India</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/sales-prospecting-tool-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Sales Prospecting Tool India</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/pricing" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Pricing</Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
