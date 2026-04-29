import type { Metadata } from 'next';
import Link from 'next/link';

const PAGE_URL = 'https://eazyreach.app/easyleadz-alternative';

export const metadata: Metadata = {
    title: 'Best EasyLeadz Alternative India 2026 — EazyReach | AI Director Finder',
    description:
        'Looking for an EasyLeadz alternative? EazyReach adds AI calling, LinkedIn enrichment & shared credits to DIN director lookup. India-first pricing. Free to start.',
    keywords: [
        'EasyLeadz alternative',
        'EasyLeadz alternative India',
        'best EasyLeadz alternative',
        'EasyLeadz vs EazyReach',
        'EasyLeadz competitors',
        'alternatives to EasyLeadz',
        'Mr E EasyLeadz alternative',
        'EasyLeadz pricing',
        'EasyLeadz reviews',
        'cheaper than EasyLeadz',
        'EasyLeadz free alternative',
        'EasyLeadz chrome extension alternative',
        'DIN director phone lookup',
        'director phone number India',
        'B2B contact finder India',
    ],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Best EasyLeadz Alternative India 2026 — EazyReach',
        description:
            'EasyLeadz alternative with AI calling, LinkedIn enrichment, shared credit pool, and DIN director intelligence — built for Indian B2B sales teams.',
        url: PAGE_URL,
        type: 'website',
        images: [
            {
                url: 'https://eazyreach.app/EazyE.png',
                width: 1200,
                height: 630,
                alt: 'EazyReach vs EasyLeadz — The Better Director Contact Platform',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Best EasyLeadz Alternative India 2026 — EazyReach',
        description:
            'EasyLeadz alternative with AI calling, LinkedIn enrichment & shared credits. Built for Indian B2B sales teams.',
        images: ['https://eazyreach.app/EazyE.png'],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eazyreach.app' },
        { '@type': 'ListItem', position: 2, name: 'EasyLeadz Alternative', item: PAGE_URL },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is the best EasyLeadz alternative in India?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach is the most complete EasyLeadz alternative for Indian B2B sales teams. It matches EasyLeadz on DIN-based director phone lookup and adds LinkedIn enrichment, AI calling, shared credit pools, and a full outreach execution layer — all in one platform.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is EazyReach cheaper than EasyLeadz Mr. E?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EasyLeadz Mr. E starts at ₹2,499/month (billed yearly) for 600 credits a year and up to 2 users. EazyReach uses a shared credit pool with no per-seat caps — so for most growing sales teams, EazyReach is more cost-efficient because credits are not wasted on inactive seats and you do not pay for seats you do not use.',
            },
        },
        {
            '@type': 'Question',
            name: 'How much does EasyLeadz Mr. E cost?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EasyLeadz Mr. E starts at ₹2,499/month, billed yearly (excluding GST), which includes 600 credits per year for up to 2 users. Pricing scales up with more credits and more seats. EazyReach offers a flexible alternative with shared credits across your team and no per-seat caps.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the EasyLeadz vs EazyReach credit model difference?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EasyLeadz charges per reveal with individual credit limits per user. EazyReach uses a shared credit pool across your entire team, meaning credits are never wasted on inactive users. You pay only for what your team actually uses.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach support DIN-based director phone lookup like EasyLeadz?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach uses DIN (Director Identification Number) to find verified phone numbers of Indian company directors — the same core capability as EasyLeadz Mr. E, but with added LinkedIn enrichment and AI calling.',
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
        {
            '@type': 'Question',
            name: 'Can I migrate from EasyLeadz to EazyReach?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Migration is simple — install the EazyReach Chrome extension, import your existing contact lists, and your team can start enriching and calling immediately. There are no long-term contracts to cancel and your existing workflows stay intact.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach have a Chrome extension like EasyLeadz?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach has a Chrome extension that works directly on LinkedIn, company websites, and CRM platforms — similar to EasyLeadz but with richer enrichment data and one-click calling built in.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is EasyLeadz accurate for Indian B2B contacts?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EasyLeadz has good coverage on MCA-registered Indian directors via DIN data. EazyReach matches that coverage and layers LinkedIn enrichment on top — so you get the director contact plus current job title, company context, and recent activity.',
            },
        },
    ],
};

const comparisonData = [
    { feature: 'DIN-based director phone lookup', eazyreach: true, easyleadz: true },
    { feature: 'LinkedIn contact enrichment', eazyreach: true, easyleadz: false },
    { feature: 'Shared credit pool (no per-seat limits)', eazyreach: true, easyleadz: false },
    { feature: 'Built-in browser calling', eazyreach: true, easyleadz: false },
    { feature: 'AI voice agents & auto-dialer', eazyreach: true, easyleadz: false },
    { feature: 'Chrome extension', eazyreach: true, easyleadz: true },
    { feature: 'No annual lock-in required', eazyreach: true, easyleadz: false },
    { feature: 'Verified email finder', eazyreach: true, easyleadz: false },
    { feature: 'India-first pricing (INR)', eazyreach: true, easyleadz: true },
    { feature: 'Enrichment + execution in one workflow', eazyreach: true, easyleadz: false },
    { feature: 'AI outreach sequences', eazyreach: true, easyleadz: false },
    { feature: 'MCP server / API access', eazyreach: true, easyleadz: false },
];

export default function EasyleadzAlternative() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <main className="bg-slate-950 text-gray-100 min-h-screen">
                {/* ── HERO ── */}
                <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 via-transparent to-transparent pointer-events-none" />
                    <div className="max-w-4xl mx-auto relative z-10">
                        <nav className="text-sm text-gray-500 mb-6 flex items-center justify-center gap-2">
                            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-gray-300">EasyLeadz Alternative</span>
                        </nav>
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-sm text-yellow-400 mb-6">
                            🏛️ #1 EasyLeadz Alternative for Indian B2B Teams
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            The Best EasyLeadz Alternative in India —<br />
                            <span className="text-yellow-400">AI-Powered Director Contact Intelligence</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
                            EasyLeadz <strong className="text-white">Mr. E</strong> gives you director phone numbers. EazyReach gives you director phone numbers <strong className="text-white">plus</strong> LinkedIn enrichment, built-in browser calling, AI voice agents, AI outreach sequences, and a shared credit pool — all in one workflow, priced for Indian sales teams.
                        </p>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                            Switching from Mr. E by EasyLeadz? Find director contacts via DIN, enrich with LinkedIn, and call directly from your browser — without juggling three tools or burning credits on inactive seats.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/get-started" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">
                                Try EazyReach Free
                            </Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">
                                Compare Pricing
                            </Link>
                        </div>
                        <p className="text-gray-500 text-xs mt-6">No credit card · Free credits to test · Works with LinkedIn, Sales Navigator & your CRM</p>
                    </div>
                </section>

                {/* ── COMPARISON TABLE ── */}
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">EazyReach vs EasyLeadz Mr. E — Feature Comparison</h2>
                        <p className="text-gray-400 text-center mb-3">Side-by-side: what Indian sales teams get with EazyReach that EasyLeadz Mr. E doesn&apos;t offer.</p>
                        <p className="text-gray-500 text-xs text-center mb-12">Based on publicly listed features on easyleadz.com. Contact each vendor for current capabilities.</p>
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

                {/* ── PRICING COMPARISON ── */}
                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">EasyLeadz Pricing vs EazyReach Pricing</h2>
                        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">EasyLeadz charges per-seat annual plans with hard credit caps. EazyReach uses a single shared pool with no seat penalties — pay only for what your team reveals.</p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                <h3 className="text-gray-300 font-semibold text-lg mb-1">EasyLeadz Mr. E</h3>
                                <p className="text-gray-500 text-xs mb-4">Per-seat · Annual billing · Hard credit cap</p>
                                <div className="mb-5">
                                    <span className="text-3xl font-bold text-white">₹2,499</span>
                                    <span className="text-gray-500 text-sm">/month</span>
                                    <p className="text-gray-500 text-xs mt-1">Billed yearly · Excl. GST · 600 credits/year · Up to 2 users</p>
                                </div>
                                <ul className="space-y-3 text-sm text-gray-400">
                                    <li className="flex gap-2"><span className="text-red-400">✗</span> 600 credits locked per year — runs out fast</li>
                                    <li className="flex gap-2"><span className="text-red-400">✗</span> 2-user cap — extra seats cost more</li>
                                    <li className="flex gap-2"><span className="text-red-400">✗</span> Annual contract — no flexibility</li>
                                    <li className="flex gap-2"><span className="text-red-400">✗</span> No browser calling or AI voice agents</li>
                                    <li className="flex gap-2"><span className="text-red-400">✗</span> No AI outreach sequences</li>
                                    <li className="flex gap-2"><span className="text-red-400">✗</span> Data only — no execution layer</li>
                                </ul>
                                <p className="text-gray-600 text-xs mt-4">Pricing as listed on easyleadz.com at time of writing.</p>
                            </div>

                            <div className="bg-yellow-400/5 border border-yellow-400/30 rounded-2xl p-8 relative">
                                <div className="absolute -top-3 left-8 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">Recommended</div>
                                <h3 className="text-yellow-400 font-semibold text-lg mb-1">EazyReach</h3>
                                <p className="text-gray-400 text-xs mb-4">Shared credit pool · No seat caps · India-first</p>
                                <div className="mb-5">
                                    <span className="text-3xl font-bold text-white">Shared Pool</span>
                                    <p className="text-gray-400 text-xs mt-1">No annual lock-in · Unlimited team seats · Credits flex with usage</p>
                                </div>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    <li className="flex gap-2"><span className="text-green-400">✓</span> One shared pool — no per-user credit walls</li>
                                    <li className="flex gap-2"><span className="text-green-400">✓</span> Unlimited seats — inactive reps cost nothing</li>
                                    <li className="flex gap-2"><span className="text-green-400">✓</span> No annual lock-in — top up when you need it</li>
                                    <li className="flex gap-2"><span className="text-green-400">✓</span> Browser calling + AI voice agents included</li>
                                    <li className="flex gap-2"><span className="text-green-400">✓</span> AI outreach sequences built in</li>
                                    <li className="flex gap-2"><span className="text-green-400">✓</span> Enrichment + execution in one tool</li>
                                </ul>
                                <Link href="/pricing" className="inline-block mt-6 text-sm text-yellow-400 hover:text-yellow-300 font-semibold">See full pricing →</Link>
                            </div>
                        </div>

                        <div className="mt-10 p-5 bg-white/[0.02] border border-white/5 rounded-xl text-center">
                            <p className="text-gray-300 text-sm">
                                <strong className="text-white">The math:</strong> 600 EasyLeadz credits at ₹2,499/month = ₹4.99 per credit, locked into a 2-seat annual contract. EazyReach&apos;s shared pool has no seat ceiling and no expiring annual quota — you scale credits when your team scales, not because a calendar said so.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── WHY SWITCH ── */}
                <section className="py-20 px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Why Teams Switch from EasyLeadz to EazyReach</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: '🏛️', title: 'DIN + LinkedIn in One Lookup', desc: 'EazyReach combines DIN-based director data with live LinkedIn enrichment — giving you the phone number plus current role, company context, and recent activity in a single call.' },
                                { icon: '📞', title: 'Call Without Leaving the Tab', desc: 'EasyLeadz exports contacts. EazyReach calls them. Browser-based calling and AI voice agents let your SDRs act on enrichment in seconds — not after a copy-paste to a separate dialer.' },
                                { icon: '🤝', title: 'Shared Credits, No Waste', desc: 'Your whole team draws from one credit pool. Credits not used by inactive reps are available for your top performers — meaning you pay for revealed contacts, not idle seats.' },
                                { icon: '🧠', title: 'AI Outreach Sequences', desc: 'Enrichment is only half the battle. EazyReach ships with AI-drafted email + LinkedIn sequences that trigger automatically after a contact is revealed.' },
                                { icon: '🇮🇳', title: 'India-First, INR-Native', desc: 'Priced in INR, optimised for Indian B2B data (MCA, DIN, GST-linked lookups), and tuned for Indian SDR workflows — not a Western tool bolted onto Indian data.' },
                                { icon: '🔌', title: 'API & MCP Access', desc: 'Plug EazyReach into your CRM, sequencer, or custom workflow via API. MCP server support means Claude and other AI agents can query your contact database directly.' },
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

                {/* ── MIGRATION ── */}
                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">Migrating from EasyLeadz — 3 Steps</h2>
                        <p className="text-gray-400 text-center mb-12">No long contracts to unwind. Most teams switch over in under an hour.</p>
                        <div className="space-y-6">
                            {[
                                { n: '1', title: 'Install the EazyReach Chrome extension', desc: 'Drop-in replacement for the EasyLeadz extension on LinkedIn, Sales Navigator, and company websites.' },
                                { n: '2', title: 'Import your existing lists', desc: 'Bring over exported EasyLeadz contact lists or start fresh with LinkedIn searches. Your enrichment history stays searchable.' },
                                { n: '3', title: 'Start calling and enriching', desc: 'Your team shares a single credit pool from day one. Browser calling, AI voice agents, and outreach sequences are live immediately.' },
                            ].map((step, i) => (
                                <div key={i} className="flex gap-5 bg-white/5 border border-white/10 rounded-xl p-6">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">{step.n}</div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="py-20 px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Upgrade from EasyLeadz Today</h2>
                        <p className="text-gray-400 mb-8">From enrichment to execution in one workflow. Built for teams upgrading from legacy prospecting tools.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/get-started" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">Get Started Free</Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">See Pricing</Link>
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">EasyLeadz Alternative — Frequently Asked Questions</h2>
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

                {/* ── CROSS-LINKS ── */}
                <section className="py-12 px-4 border-t border-white/10">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-gray-500 text-sm mb-4">Explore more comparisons</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/apollo-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Apollo Alternative India</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/lusha-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Lusha Alternative India</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/thepeakai-alternative" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">ThePeakAI Alternative</Link>
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
