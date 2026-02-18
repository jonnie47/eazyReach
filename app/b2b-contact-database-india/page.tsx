import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'B2B Contact Database India — EazyReach | Verified Emails & Phones',
    description:
        'Access India\'s most accurate B2B contact database. Find verified phone numbers, emails, and LinkedIn profiles for Indian decision-makers — with DIN director intelligence and pay-per-use pricing.',
    alternates: {
        canonical: 'https://eazyreach.app/b2b-contact-database-india',
    },
    openGraph: {
        title: 'B2B Contact Database India — EazyReach | Verified Emails & Phones',
        description:
            'B2B contact database India pricing: pay only for what you use. Verified emails, phone numbers, and DIN director intelligence for Indian sales teams.',
        url: 'https://eazyreach.app/b2b-contact-database-india',
        type: 'website',
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eazyreach.app' },
        { '@type': 'ListItem', position: 2, name: 'B2B Contact Database India', item: 'https://eazyreach.app/b2b-contact-database-india' },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is the best B2B contact database for India?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach is India\'s most accurate B2B contact database, offering verified phone numbers, work emails, and LinkedIn profiles for Indian decision-makers — with unique DIN-based director intelligence not available in global databases like Apollo or Lusha.',
            },
        },
        {
            '@type': 'Question',
            name: 'How does B2B contact database India pricing work with EazyReach?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach uses a pay-per-use credit model with shared team credits. You pay only for the contacts you actually reveal — no monthly seat fees, no unused credit waste. Pricing is in INR, making it significantly more affordable than USD-priced global alternatives.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is EazyReach an Apollo alternative for B2B database India?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach is a leading Apollo alternative B2B database India option, with India-specific data advantages: DIN director lookup, INR pricing, shared credits, and built-in calling — features Apollo doesn\'t offer for the Indian market.',
            },
        },
        {
            '@type': 'Question',
            name: 'What types of contacts can I find in EazyReach\'s Indian B2B database?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach covers CXOs, VPs, Directors, Managers, and other decision-makers across Indian companies. For registered Indian companies, DIN-based lookup provides verified director phone numbers. LinkedIn enrichment covers professionals across all industries.',
            },
        },
    ],
};

const stats = [
    { value: '91%', label: 'Contact accuracy rate' },
    { value: '10K+', label: 'Contacts found daily' },
    { value: 'INR', label: 'India-first pricing' },
    { value: '0', label: 'Seat penalties' },
];

const comparisonData = [
    { feature: 'India-first data coverage', eazyreach: true, others: false },
    { feature: 'DIN-based director lookup', eazyreach: true, others: false },
    { feature: 'Shared credit pool', eazyreach: true, others: false },
    { feature: 'Pay-per-use model (INR)', eazyreach: true, others: false },
    { feature: 'LinkedIn enrichment', eazyreach: true, others: true },
    { feature: 'Verified email finder', eazyreach: true, others: true },
    { feature: 'Direct-dial phone numbers', eazyreach: true, others: true },
    { feature: 'Built-in calling layer', eazyreach: true, others: false },
    { feature: 'Chrome extension', eazyreach: true, others: false },
    { feature: 'AI voice agents', eazyreach: true, others: false },
];

export default function B2BContactDatabaseIndia() {
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
                            <span className="text-gray-300">B2B Contact Database India</span>
                        </nav>
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-sm text-yellow-400 mb-6">
                            🇮🇳 India-First B2B Data
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            India's Most Accurate<br />
                            <span className="text-yellow-400">B2B Contact Database</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
                            B2B contact database India pricing that makes sense: pay per use in INR, share credits across your team, and access verified phone numbers and emails for Indian decision-makers — including DIN-based director contacts.
                        </p>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                            Apollo alternative B2B database India: EazyReach combines India-specific data intelligence with a full outreach execution layer — not just a data export tool.
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

                {/* Stats */}
                <section className="py-12 px-4 border-y border-white/10">
                    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl font-bold text-yellow-400 mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">EazyReach vs Other B2B Databases</h2>
                        <p className="text-gray-400 text-center mb-12">How EazyReach compares to global B2B contact databases for the Indian market.</p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="text-left px-6 py-4 text-gray-300 font-semibold">Feature</th>
                                        <th className="text-center px-6 py-4 text-yellow-400 font-semibold">EazyReach</th>
                                        <th className="text-center px-6 py-4 text-gray-400 font-semibold">Global Alternatives</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className={`border-t border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                                            <td className="px-6 py-4 text-gray-300">{row.feature}</td>
                                            <td className="px-6 py-4 text-center">{row.eazyreach ? <span className="text-green-400 text-lg">✓</span> : <span className="text-red-400 text-lg">✗</span>}</td>
                                            <td className="px-6 py-4 text-center">{row.others ? <span className="text-green-400 text-lg">✓</span> : <span className="text-red-400 text-lg">✗</span>}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-white/[0.02]">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">India-Specific Data Advantages</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: '🏛️', title: 'DIN Director Intelligence', desc: 'Find verified phone numbers of Indian company directors using Director Identification Numbers — a uniquely Indian data source.' },
                                { icon: '💰', title: 'INR Pay-Per-Use', desc: 'No USD conversion. No seat fees. Pay in INR only for the contacts you reveal. Shared credits across your entire team.' },
                                { icon: '📞', title: 'Enrichment to Execution', desc: 'Don\'t just export data. Call contacts directly from your browser using EazyReach\'s built-in calling layer.' },
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
                        <h2 className="text-3xl font-bold text-white mb-4">Access India's B2B Contact Database</h2>
                        <p className="text-gray-400 mb-8">Start finding verified Indian B2B contacts today. No credit card required to get started.</p>
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
                        <p className="text-gray-500 text-sm mb-4">Related pages</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/apollo-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Apollo Alternative India</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/lusha-alternative-india" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">Lusha Alternative India</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/linkedin-phone-number-finder" className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors">LinkedIn Phone Finder</Link>
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
