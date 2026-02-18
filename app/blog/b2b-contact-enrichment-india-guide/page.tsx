import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'B2B Contact Enrichment India: Complete Guide for Sales Teams | EazyReach',
    description:
        'A complete guide to B2B contact enrichment for Indian sales teams. Learn how to find verified phone numbers, emails, and LinkedIn contacts — and how to act on them without switching tools.',
    alternates: { canonical: 'https://eazyreach.app/blog/b2b-contact-enrichment-india-guide' },
    openGraph: {
        title: 'B2B Contact Enrichment India: Complete Guide for Sales Teams',
        description: 'Complete guide to B2B contact enrichment for Indian sales teams — find verified contacts and execute outreach in one workflow.',
        url: 'https://eazyreach.app/blog/b2b-contact-enrichment-india-guide',
        type: 'article',
    },
};

const schemas = [
    {
        '@context': 'https://schema.org', '@type': 'Article',
        headline: 'B2B Contact Enrichment India: Complete Guide for Sales Teams',
        author: { '@type': 'Organization', name: 'EazyReach' },
        publisher: { '@type': 'Organization', name: 'EazyReach', url: 'https://eazyreach.app' },
        datePublished: '2025-02-10', dateModified: '2025-02-18',
        url: 'https://eazyreach.app/blog/b2b-contact-enrichment-india-guide',
    },
    {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eazyreach.app' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://eazyreach.app/blog' },
            { '@type': 'ListItem', position: 3, name: 'B2B Contact Enrichment India Guide', item: 'https://eazyreach.app/blog/b2b-contact-enrichment-india-guide' },
        ],
    },
];

export default function B2BContactEnrichmentGuide() {
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
                        <span className="text-gray-300">B2B Contact Enrichment India Guide</span>
                    </nav>
                    <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-sm text-yellow-400 mb-6">
                        📚 Complete Guide · 10 min read
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
                        B2B Contact Enrichment India: Complete Guide for Sales Teams
                    </h1>
                    <p className="text-gray-400 mb-10 text-sm">Published February 2025 · By EazyReach Team</p>

                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <p className="text-xl text-gray-200">
                            B2B contact enrichment is the process of adding verified contact information — phone numbers, emails, LinkedIn profiles — to your prospect records. For Indian sales teams, it's the foundation of effective outreach. Here's everything you need to know.
                        </p>

                        <h2 className="text-2xl font-bold text-white">What is B2B Contact Enrichment?</h2>
                        <p>
                            Contact enrichment takes a basic lead record (name + company) and adds verified contact details: direct phone number, work email, LinkedIn profile, job title, and company information. The goal is to give your sales team everything they need to reach the right person through the right channel.
                        </p>
                        <p>
                            For Indian B2B teams, enrichment is particularly important because:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Indian professionals often have multiple phone numbers (personal vs. work)</li>
                            <li>Work email formats vary significantly across Indian companies</li>
                            <li>LinkedIn profiles may not have contact information visible</li>
                            <li>Director-level contacts often require DIN-based lookup for accurate data</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white">Data Sources for Indian B2B Enrichment</h2>
                        <div className="space-y-4 not-prose">
                            {[
                                { source: 'LinkedIn', desc: 'The most comprehensive source of Indian professional data. Chrome extensions like EazyReach can reveal phone numbers and emails from profiles.', accuracy: 'High', coverage: 'Very High' },
                                { source: 'DIN (Director Identification Number)', desc: 'Government-issued identifier for Indian company directors. Enables lookup of verified director contacts from MCA records.', accuracy: 'Very High', coverage: 'Directors only' },
                                { source: 'Company Websites', desc: 'Contact pages, team pages, and press releases often contain verified contact information.', accuracy: 'High', coverage: 'Low' },
                                { source: 'Global Databases (Apollo, Lusha)', desc: 'Large databases with global coverage. India data quality is inconsistent and pricing is in USD.', accuracy: 'Medium', coverage: 'Medium' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-white font-semibold">{item.source}</h3>
                                        <div className="flex gap-3 text-xs">
                                            <span className="text-gray-400">Accuracy: <span className="text-gray-200">{item.accuracy}</span></span>
                                            <span className="text-gray-400">Coverage: <span className="text-gray-200">{item.coverage}</span></span>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-2xl font-bold text-white">The Enrichment-to-Execution Gap</h2>
                        <p>
                            Most B2B contact enrichment tools stop at data export. You get a CSV of phone numbers and emails — and then you need to manually import them into a dialer, CRM, or email tool to actually use them.
                        </p>
                        <p>
                            This creates what we call the "enrichment-to-execution gap" — the friction between finding a contact and actually reaching them. For Indian sales teams, this gap costs significant time and leads to data going stale before it's used.
                        </p>
                        <p>
                            EazyReach closes this gap by combining enrichment and execution in one platform. Find a contact from LinkedIn or DIN, then call them directly from your browser — no export, no import, no switching tools.
                        </p>

                        <h2 className="text-2xl font-bold text-white">Best Practices for Indian B2B Enrichment</h2>
                        <ol className="list-decimal pl-6 space-y-3">
                            <li><strong className="text-white">Prioritize phone over email</strong> — Indian decision-makers respond better to direct calls than cold emails. Always try to enrich phone numbers first.</li>
                            <li><strong className="text-white">Use DIN for director-level targets</strong> — For C-suite and director outreach at registered Indian companies, DIN-based lookup gives the most accurate results.</li>
                            <li><strong className="text-white">Verify before calling</strong> — Use a tool that cross-references multiple sources. A 91%+ accuracy rate means fewer wasted calls.</li>
                            <li><strong className="text-white">Enrich at the point of use</strong> — Don't batch-enrich and export. Enrich contacts as you're about to reach out, so data is fresh.</li>
                            <li><strong className="text-white">Share credits across your team</strong> — Per-seat credit models waste money. Choose a tool with shared credits so your entire team benefits.</li>
                        </ol>

                        <h2 className="text-2xl font-bold text-white">Choosing the Right Enrichment Tool for India</h2>
                        <p>
                            When evaluating <Link href="/b2b-contact-database-india" className="text-yellow-400 hover:underline">B2B contact enrichment tools for India</Link>, look for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>India-specific data sources (DIN, Indian company databases)</li>
                            <li>INR pricing to avoid USD conversion costs</li>
                            <li>Shared credit model (not per-seat)</li>
                            <li>Built-in execution layer (calling, not just data export)</li>
                            <li>Chrome extension for LinkedIn enrichment</li>
                            <li>91%+ accuracy for Indian contacts</li>
                        </ul>
                        <p>
                            EazyReach meets all of these criteria — making it the leading B2B contact enrichment platform for Indian sales teams.
                        </p>
                    </div>

                    <div className="mt-12 p-6 bg-yellow-400/5 border border-yellow-400/20 rounded-2xl text-center">
                        <h3 className="text-white font-bold text-xl mb-2">Start Enriching Indian B2B Contacts</h3>
                        <p className="text-gray-400 text-sm mb-4">LinkedIn enrichment + DIN director intelligence + built-in calling — all in one platform.</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi" target="_blank" className="px-6 py-2.5 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors text-sm">Try EazyReach Free</Link>
                            <Link href="/pricing" className="px-6 py-2.5 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors text-sm">View Pricing</Link>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-gray-500 text-sm mb-4">Related pages</p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/b2b-contact-database-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">B2B Contact Database India</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/sales-prospecting-tool-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Sales Prospecting Tool India</Link>
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
