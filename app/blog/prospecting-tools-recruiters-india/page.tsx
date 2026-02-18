import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Top Prospecting Tools for Recruiters in India (2025 Guide) | EazyReach',
    description:
        'The best prospecting tools for recruiters in India in 2025. Find candidate phone numbers and emails from LinkedIn, reach passive candidates directly, and reduce time-to-hire.',
    alternates: { canonical: 'https://eazyreach.app/blog/prospecting-tools-recruiters-india' },
    openGraph: {
        title: 'Top Prospecting Tools for Recruiters in India (2025 Guide)',
        description: 'Best prospecting tools for Indian recruiters — find candidate contacts from LinkedIn and reach passive candidates directly.',
        url: 'https://eazyreach.app/blog/prospecting-tools-recruiters-india',
        type: 'article',
    },
};

const schemas = [
    {
        '@context': 'https://schema.org', '@type': 'Article',
        headline: 'Top Prospecting Tools for Recruiters in India (2025 Guide)',
        author: { '@type': 'Organization', name: 'EazyReach' },
        publisher: { '@type': 'Organization', name: 'EazyReach', url: 'https://eazyreach.app' },
        datePublished: '2025-02-05', dateModified: '2025-02-18',
        url: 'https://eazyreach.app/blog/prospecting-tools-recruiters-india',
    },
    {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eazyreach.app' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://eazyreach.app/blog' },
            { '@type': 'ListItem', position: 3, name: 'Prospecting Tools Recruiters India', item: 'https://eazyreach.app/blog/prospecting-tools-recruiters-india' },
        ],
    },
];

export default function ProspectingToolsRecruitersIndia() {
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
                        <span className="text-gray-300">Prospecting Tools for Recruiters India</span>
                    </nav>
                    <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-sm text-yellow-400 mb-6">
                        👥 Recruiter Guide · 6 min read
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
                        Top Prospecting Tools for Recruiters in India (2025 Guide)
                    </h1>
                    <p className="text-gray-400 mb-10 text-sm">Published February 2025 · By EazyReach Team</p>

                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <p className="text-xl text-gray-200">
                            Indian recruiters face a unique challenge: LinkedIn InMail has low response rates, and most candidates don't respond to cold messages. The solution? Find their direct phone number or personal email and reach out directly. Here are the best tools to do it.
                        </p>

                        <h2 className="text-2xl font-bold text-white">Why Recruiters Need Contact Enrichment Tools</h2>
                        <p>
                            The average LinkedIn InMail response rate is 10-25%. Direct outreach via phone or personal email consistently outperforms this — often 3-5x higher response rates. For Indian recruiters competing for top talent, direct contact is a significant competitive advantage.
                        </p>

                        <h2 className="text-2xl font-bold text-white">Best Prospecting Tools for Indian Recruiters</h2>

                        <div className="space-y-6 not-prose">
                            {[
                                {
                                    rank: 1, name: 'EazyReach', badge: '🏆 Best for India',
                                    desc: 'Chrome extension that reveals phone numbers and emails from LinkedIn profiles. Works for both active and passive candidates. Shared credits across your recruiting team — pay only for what you use.',
                                    features: ['LinkedIn phone & email finder', 'DIN director lookup (for C-suite hiring)', 'Shared team credits', 'INR pricing', 'Built-in calling'],
                                    link: '/linkedin-phone-number-finder',
                                },
                                {
                                    rank: 2, name: 'Lusha', badge: 'Good for LinkedIn',
                                    desc: 'Well-known LinkedIn contact finder with good accuracy. USD pricing and per-seat credits make it expensive for Indian recruiting teams.',
                                    features: ['LinkedIn enrichment', 'Chrome extension', 'Good accuracy'],
                                    link: '/lusha-alternative-india',
                                },
                                {
                                    rank: 3, name: 'Apollo', badge: 'Enterprise Option',
                                    desc: 'Large database with email sequencing. Better suited for sales teams than recruiters. Expensive for India-focused use cases.',
                                    features: ['Large database', 'Email sequences', 'CRM integrations'],
                                    link: '/apollo-alternative-india',
                                },
                            ].map((tool) => (
                                <div key={tool.rank} className={`p-6 rounded-xl border ${tool.rank === 1 ? 'bg-yellow-400/5 border-yellow-400/30' : 'bg-white/5 border-white/10'}`}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-gray-500 text-sm">#{tool.rank}</span>
                                        <span className={`font-bold text-lg ${tool.rank === 1 ? 'text-yellow-400' : 'text-white'}`}>{tool.name}</span>
                                        <span className="text-xs bg-white/10 text-gray-300 px-2 py-0.5 rounded-full">{tool.badge}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-3">{tool.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {tool.features.map((f, i) => (
                                            <span key={i} className="text-xs bg-white/5 border border-white/10 text-gray-300 px-2 py-1 rounded-full">{f}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-2xl font-bold text-white">How Recruiters Use EazyReach</h2>
                        <p>
                            The typical workflow for Indian recruiters using EazyReach:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Find a candidate on LinkedIn who matches the role requirements</li>
                            <li>Open EazyReach Chrome extension on their profile</li>
                            <li>Reveal their verified phone number and/or work email</li>
                            <li>Call directly from the browser or send a personalized email</li>
                            <li>Credits are shared across the recruiting team — no per-seat waste</li>
                        </ol>
                        <p>
                            This workflow reduces time-to-first-contact from days (waiting for InMail responses) to minutes. For competitive roles, this speed advantage is significant.
                        </p>

                        <h2 className="text-2xl font-bold text-white">Pricing Comparison for Indian Recruiting Teams</h2>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-5 not-prose">
                            <div className="grid grid-cols-3 gap-4 text-sm text-center">
                                <div>
                                    <div className="text-yellow-400 font-semibold mb-1">EazyReach</div>
                                    <div className="text-gray-300">INR · Pay per use</div>
                                    <div className="text-gray-400 text-xs mt-1">Shared team credits</div>
                                </div>
                                <div>
                                    <div className="text-gray-300 font-semibold mb-1">Lusha</div>
                                    <div className="text-gray-400">USD · Per seat</div>
                                    <div className="text-gray-500 text-xs mt-1">Individual credits</div>
                                </div>
                                <div>
                                    <div className="text-gray-300 font-semibold mb-1">Apollo</div>
                                    <div className="text-gray-400">USD · Per seat</div>
                                    <div className="text-gray-500 text-xs mt-1">Annual contracts</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 p-6 bg-yellow-400/5 border border-yellow-400/20 rounded-2xl text-center">
                        <h3 className="text-white font-bold text-xl mb-2">Start Finding Candidate Contacts</h3>
                        <p className="text-gray-400 text-sm mb-4">EazyReach Chrome extension — find phone numbers from LinkedIn profiles in seconds.</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi" target="_blank" className="px-6 py-2.5 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors text-sm">Add to Chrome — Free</Link>
                            <Link href="/pricing" className="px-6 py-2.5 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors text-sm">View Pricing</Link>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-gray-500 text-sm mb-4">Related pages</p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/b2b-contact-database-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">B2B Contact Database India</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/easyleadz-alternative" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">EasyLeadz Alternative</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/linkedin-phone-number-finder" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">LinkedIn Phone Finder</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/pricing" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Pricing</Link>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}
