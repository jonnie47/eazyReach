import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'EasyLeadz Alternative — EazyReach | DIN Director Phone Finder',
    description:
        'The best EasyLeadz alternative for Indian B2B teams. EazyReach offers DIN-based director phone lookup, AI calling, shared credits, and a full outreach execution layer — not just data export.',
    alternates: {
        canonical: 'https://eazyreach.app/easyleadz-alternative',
    },
    openGraph: {
        title: 'EasyLeadz Alternative — EazyReach | DIN Director Phone Finder',
        description:
            'EasyLeadz vs EazyReach credit model: EazyReach wins with shared credits, AI calling, and DIN director intelligence for Indian sales teams.',
        url: 'https://eazyreach.app/easyleadz-alternative',
        type: 'website',
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eazyreach.app' },
        { '@type': 'ListItem', position: 2, name: 'EasyLeadz Alternative', item: 'https://eazyreach.app/easyleadz-alternative' },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Is EazyReach a better EasyLeadz alternative?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach offers everything EasyLeadz does for director contact lookup — plus AI calling, LinkedIn enrichment, shared credit pools, and a full outreach execution layer. It is a more complete platform for Indian B2B sales teams.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the EasyLeadz vs EazyReach credit model difference?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EasyLeadz charges per reveal with individual credit limits. EazyReach uses a shared credit pool across your team, meaning credits are never wasted on inactive users. You pay only for what your team actually uses.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach support DIN-based director phone lookup like EasyLeadz?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach uses DIN (Director Identification Number) to find verified phone numbers of Indian company directors — the same core capability as EasyLeadz, but with added LinkedIn enrichment and AI calling.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach have an AI calling feature that EasyLeadz lacks?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach includes built-in browser calling and AI voice agents, allowing your team to call contacts directly after enrichment — without switching to a separate dialer. EasyLeadz only provides contact data.',
            },
        },
    ],
};

const comparisonData = [
    { feature: 'DIN-based director phone lookup', eazyreach: true, easyleadz: true },
    { feature: 'LinkedIn contact enrichment', eazyreach: true, easyleadz: false },
    { feature: 'Shared credit pool', eazyreach: true, easyleadz: false },
    { feature: 'Built-in browser calling', eazyreach: true, easyleadz: false },
    { feature: 'AI voice agents', eazyreach: true, easyleadz: false },
    { feature: 'Chrome extension', eazyreach: true, easyleadz: false },
    { feature: 'Pay-per-use model', eazyreach: true, easyleadz: false },
    { feature: 'Verified email finder', eazyreach: true, easyleadz: false },
    { feature: 'India-first pricing (INR)', eazyreach: true, easyleadz: true },
    { feature: 'Enrichment + execution in one workflow', eazyreach: true, easyleadz: false },
];

export default function EasyleadzAlternative() {
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
                            <span className="text-gray-300">EasyLeadz Alternative</span>
                        </nav>
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-sm text-yellow-400 mb-6">
                            🏛️ DIN Director Intelligence
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            EasyLeadz Alternative —<br />
                            <span className="text-yellow-400">AI-Powered Director Contact Intelligence</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
                            EasyLeadz vs EazyReach credit model: EazyReach gives your entire team a shared credit pool — no per-seat limits, no wasted credits. Plus, EazyReach adds what EasyLeadz lacks: LinkedIn enrichment, AI calling, and a full outreach execution layer.
                        </p>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                            EasyLeadz alternative with AI calling: find director contacts via DIN, enrich with LinkedIn data, and call directly from your browser — all in one workflow.
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
                        <h2 className="text-3xl font-bold text-white text-center mb-4">EazyReach vs EasyLeadz — Feature Comparison</h2>
                        <p className="text-gray-400 text-center mb-12">See what Indian sales teams get with EazyReach that EasyLeadz doesn't offer.</p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="text-left px-6 py-4 text-gray-300 font-semibold">Feature</th>
                                        <th className="text-center px-6 py-4 text-yellow-400 font-semibold">EazyReach</th>
                                        <th className="text-center px-6 py-4 text-gray-400 font-semibold">EasyLeadz</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className={`border-t border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                                            <td className="px-6 py-4 text-gray-300">{row.feature}</td>
                                            <td className="px-6 py-4 text-center">{row.eazyreach ? <span className="text-green-400 text-lg">✓</span> : <span className="text-red-400 text-lg">✗</span>}</td>
                                            <td className="px-6 py-4 text-center">{row.easyleadz ? <span className="text-green-400 text-lg">✓</span> : <span className="text-red-400 text-lg">✗</span>}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Why EazyReach Goes Beyond EasyLeadz</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: '🏛️', title: 'DIN + LinkedIn Intelligence', desc: 'EazyReach combines DIN-based director lookup with LinkedIn enrichment — giving you both the contact and the full professional context.' },
                                { icon: '📞', title: 'Execution Layer Built In', desc: 'Don\'t just find contacts — call them. EazyReach includes browser calling and AI voice agents so your SDRs can act immediately after enrichment.' },
                                { icon: '🤝', title: 'Shared Credits, No Waste', desc: 'Your team shares one credit pool. No per-seat limits. Credits unused by one rep are available for the rest of the team.' },
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
                        <h2 className="text-3xl font-bold text-white mb-4">Upgrade from EasyLeadz</h2>
                        <p className="text-gray-400 mb-8">From enrichment to execution in one workflow. Built for teams upgrading from legacy prospecting tools.</p>
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
