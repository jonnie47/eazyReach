import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Lusha Alternative India — EazyReach | LinkedIn Phone Finder',
    description:
        'The best Lusha alternative for Indian sales teams. EazyReach offers verified LinkedIn phone numbers, no seat penalties, shared credits, and built-in AI calling — at India-first pricing.',
    alternates: {
        canonical: 'https://eazyreach.app/lusha-alternative-india',
    },
    openGraph: {
        title: 'Lusha Alternative India — EazyReach | LinkedIn Phone Finder',
        description:
            'Switch from Lusha to EazyReach. No seat penalties, shared credit pool, AI calling, and DIN director intelligence for Indian B2B teams.',
        url: 'https://eazyreach.app/lusha-alternative-india',
        type: 'website',
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eazyreach.app' },
        { '@type': 'ListItem', position: 2, name: 'Lusha Alternative India', item: 'https://eazyreach.app/lusha-alternative-india' },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Is EazyReach a good Lusha alternative for Indian companies?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach is designed for Indian B2B teams with INR pricing, a shared credit pool, and built-in calling — making it a superior Lusha alternative without the per-seat cost structure.',
            },
        },
        {
            '@type': 'Question',
            name: 'Why do Indian sales teams switch from Lusha to EazyReach?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The primary reasons Indian sales teams switch from Lusha are: no seat penalties (shared credits), India-specific DIN director lookup, built-in browser calling, and significantly lower pricing in INR.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach find LinkedIn phone numbers like Lusha?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach finds verified direct-dial phone numbers and emails from LinkedIn profiles via its Chrome extension, with 91% accuracy — comparable to Lusha but with an added execution layer.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the Lusha vs EazyReach credit model difference?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Lusha charges per seat with individual credit limits. EazyReach uses a shared credit pool across your entire team — meaning unused credits by one member can be used by another, maximizing ROI.',
            },
        },
    ],
};

const comparisonData = [
    { feature: 'India-first pricing (INR)', eazyreach: true, lusha: false },
    { feature: 'Shared credit pool (no seat penalties)', eazyreach: true, lusha: false },
    { feature: 'Built-in browser calling', eazyreach: true, lusha: false },
    { feature: 'AI voice agents', eazyreach: true, lusha: false },
    { feature: 'DIN-based director intelligence', eazyreach: true, lusha: false },
    { feature: 'LinkedIn phone number finder', eazyreach: true, lusha: true },
    { feature: 'Verified email finder', eazyreach: true, lusha: true },
    { feature: 'Chrome extension', eazyreach: true, lusha: true },
    { feature: 'Pay-per-use model', eazyreach: true, lusha: false },
    { feature: 'Enrichment + execution in one workflow', eazyreach: true, lusha: false },
];

export default function LushaAlternativeIndia() {
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
                            <span className="text-gray-300">Lusha Alternative India</span>
                        </nav>
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-sm text-yellow-400 mb-6">
                            🇮🇳 Built for Indian Sales Teams
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Lusha Alternative for India —<br />
                            <span className="text-yellow-400">Verified B2B Contacts at Indian Pricing</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
                            Why Indian sales teams switch from Lusha: EazyReach offers the same LinkedIn phone number lookup with a shared credit pool, no seat penalties, and a built-in calling layer — all priced for the Indian market.
                        </p>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                            The Lusha vs EazyReach credit model difference is simple: Lusha locks credits per seat. EazyReach shares credits across your team, so you only pay for what you actually use.
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
                            EazyReach vs Lusha — Feature Comparison
                        </h2>
                        <p className="text-gray-400 text-center mb-12">
                            A direct comparison of what Indian B2B teams get with EazyReach versus Lusha.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="text-left px-6 py-4 text-gray-300 font-semibold">Feature</th>
                                        <th className="text-center px-6 py-4 text-yellow-400 font-semibold">EazyReach</th>
                                        <th className="text-center px-6 py-4 text-gray-400 font-semibold">Lusha</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className={`border-t border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                                            <td className="px-6 py-4 text-gray-300">{row.feature}</td>
                                            <td className="px-6 py-4 text-center">
                                                {row.eazyreach ? <span className="text-green-400 text-lg">✓</span> : <span className="text-red-400 text-lg">✗</span>}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {row.lusha ? <span className="text-green-400 text-lg">✓</span> : <span className="text-red-400 text-lg">✗</span>}
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
                            What EazyReach Offers That Lusha Doesn't
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: '🤝',
                                    title: 'Shared Credit Pool',
                                    desc: 'Your entire team shares one credit pool. No wasted credits from inactive seats. Pay only for what your team actually uses.',
                                },
                                {
                                    icon: '📞',
                                    title: 'Built-In AI Calling',
                                    desc: 'EazyReach includes browser-based calling and AI voice agents. Lusha only provides contact data — you still need a separate dialer.',
                                },
                                {
                                    icon: '🏛️',
                                    title: 'DIN Director Lookup',
                                    desc: 'Find verified phone numbers of Indian company directors using Director Identification Numbers — a uniquely Indian data advantage.',
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
                        <h2 className="text-3xl font-bold text-white mb-4">Switch from Lusha Today</h2>
                        <p className="text-gray-400 mb-8">
                            Modern alternative to legacy contact databases. Built for teams upgrading from Lusha to a full enrichment and execution platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi"
                                target="_blank"
                                className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors"
                            >
                                Get Started Free
                            </Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">
                                See Pricing
                            </Link>
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

                {/* Internal Links */}
                <section className="py-12 px-4 border-t border-white/10">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-gray-500 text-sm mb-4">Explore more comparisons</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/apollo-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Apollo Alternative India</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/easyleadz-alternative" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">EasyLeadz Alternative</Link>
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
