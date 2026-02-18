import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Calling vs Manual SDR Outreach — What Works for Indian Sales Teams | EazyReach',
    description:
        'Should Indian sales teams use AI calling or manual SDR outreach? We break down the costs, conversion rates, and use cases for each approach — with data from Indian B2B sales teams.',
    alternates: { canonical: 'https://eazyreach.app/blog/ai-calling-vs-manual-sdr-outreach' },
    openGraph: {
        title: 'AI Calling vs Manual SDR Outreach — What Works for Indian Sales Teams',
        description: 'AI calling vs manual SDR outreach for Indian B2B teams — costs, conversion rates, and when to use each.',
        url: 'https://eazyreach.app/blog/ai-calling-vs-manual-sdr-outreach',
        type: 'article',
    },
};

const schemas = [
    {
        '@context': 'https://schema.org', '@type': 'Article',
        headline: 'AI Calling vs Manual SDR Outreach — What Works for Indian Sales Teams',
        author: { '@type': 'Organization', name: 'EazyReach' },
        publisher: { '@type': 'Organization', name: 'EazyReach', url: 'https://eazyreach.app' },
        datePublished: '2025-02-01', dateModified: '2025-02-18',
        url: 'https://eazyreach.app/blog/ai-calling-vs-manual-sdr-outreach',
    },
    {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eazyreach.app' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://eazyreach.app/blog' },
            { '@type': 'ListItem', position: 3, name: 'AI Calling vs Manual SDR Outreach', item: 'https://eazyreach.app/blog/ai-calling-vs-manual-sdr-outreach' },
        ],
    },
];

export default function AICallingVsManualSDR() {
    return (
        <>
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
            <main className="bg-slate-950 text-gray-100 min-h-screen">
                <article className="max-w-3xl mx-auto px-4 pt-32 pb-20">
                    <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
                        <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link>
                        <span>/</span>
                        <span className="text-gray-300">AI Calling vs Manual SDR</span>
                    </nav>
                    <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-sm text-yellow-400 mb-6">
                        🤖 AI Strategy · 8 min read
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
                        AI Calling vs Manual SDR Outreach — What Works for Indian Sales Teams
                    </h1>
                    <p className="text-gray-400 mb-10 text-sm">Published February 2025 · By EazyReach Team</p>

                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <p className="text-xl text-gray-200">
                            Indian B2B sales teams are increasingly evaluating AI calling platforms as an alternative or complement to manual SDR outreach. Here's an honest breakdown of when each approach works — and when it doesn't.
                        </p>

                        <h2 className="text-2xl font-bold text-white">The State of SDR Outreach in India</h2>
                        <p>
                            Manual SDR outreach in India faces a unique set of challenges: high SDR turnover, significant time spent on data research, and the difficulty of reaching decision-makers who are inundated with generic outreach. The average Indian SDR spends 40-60% of their time on research and admin — not actual selling.
                        </p>

                        <h2 className="text-2xl font-bold text-white">AI Calling: What It Can and Can't Do</h2>
                        <div className="grid md:grid-cols-2 gap-4 not-prose">
                            <div className="bg-green-400/5 border border-green-400/20 rounded-xl p-5">
                                <h3 className="text-green-400 font-semibold mb-3">AI Calling Works Well For:</h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    {['High-volume top-of-funnel outreach', 'Initial qualification calls', 'Follow-up sequences', 'After-hours outreach', 'Consistent messaging at scale'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-red-400/5 border border-red-400/20 rounded-xl p-5">
                                <h3 className="text-red-400 font-semibold mb-3">AI Calling Struggles With:</h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    {['Complex enterprise deals', 'Relationship-driven sales', 'Highly technical conversations', 'Negotiation and objection handling', 'C-suite relationship building'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-white">The Hybrid Approach: What Indian Teams Are Doing</h2>
                        <p>
                            The most effective Indian sales teams aren't choosing between AI and human outreach — they're using both strategically. AI handles the volume and initial qualification; humans handle the relationship and closing.
                        </p>
                        <p>
                            The key enabler is having the right data. AI calling is only effective when you're calling verified contacts. This is where a <Link href="/sales-prospecting-tool-india" className="text-yellow-400 hover:underline">sales prospecting tool like EazyReach</Link> becomes critical — it provides the verified phone numbers that make AI calling effective.
                        </p>

                        <h2 className="text-2xl font-bold text-white">How EazyReach Bridges Enrichment and Execution</h2>
                        <p>
                            EazyReach is the only platform that combines contact enrichment (finding verified phone numbers from LinkedIn and DIN) with an execution layer (built-in browser calling and AI voice agents). This means your team goes from finding a contact to calling them — without switching tools.
                        </p>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h3 className="text-white font-semibold mb-3">Recommended Workflow for Indian SDR Teams</h3>
                            <ol className="space-y-3 text-sm text-gray-300">
                                {[
                                    'Use EazyReach Chrome extension to find verified contacts from LinkedIn',
                                    'Use DIN lookup for director-level contacts at Indian companies',
                                    'Deploy AI voice agents for initial outreach and qualification',
                                    'Human SDRs take over for qualified leads and relationship building',
                                    'Track all interactions in your CRM',
                                ].map((step, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-yellow-400/20 text-yellow-400 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    <div className="mt-12 p-6 bg-yellow-400/5 border border-yellow-400/20 rounded-2xl text-center">
                        <h3 className="text-white font-bold text-xl mb-2">Combine AI Calling with Verified Contacts</h3>
                        <p className="text-gray-400 text-sm mb-4">EazyReach gives you both — enrichment and execution in one platform.</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi" target="_blank" className="px-6 py-2.5 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors text-sm">Try EazyReach Free</Link>
                            <Link href="/pricing" className="px-6 py-2.5 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors text-sm">View Pricing</Link>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-gray-500 text-sm mb-4">Related pages</p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/sales-prospecting-tool-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Sales Prospecting Tool India</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">EazyReach Home</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/pricing" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Pricing</Link>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}
