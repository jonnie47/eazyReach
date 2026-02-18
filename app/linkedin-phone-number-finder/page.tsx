import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'LinkedIn Phone Number Finder India — EazyReach Chrome Extension',
    description:
        'Find verified LinkedIn phone numbers instantly. EazyReach\'s Chrome extension reveals direct-dial numbers and emails from any LinkedIn profile — with 91% accuracy. Built for Indian B2B teams.',
    alternates: {
        canonical: 'https://eazyreach.app/linkedin-phone-number-finder',
    },
    openGraph: {
        title: 'LinkedIn Phone Number Finder India — EazyReach Chrome Extension',
        description:
            'Find LinkedIn phone numbers in India legally and accurately. EazyReach Chrome extension reveals direct dials from LinkedIn profiles with 91% accuracy.',
        url: 'https://eazyreach.app/linkedin-phone-number-finder',
        type: 'website',
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eazyreach.app' },
        { '@type': 'ListItem', position: 2, name: 'LinkedIn Phone Number Finder', item: 'https://eazyreach.app/linkedin-phone-number-finder' },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How do I find phone numbers from LinkedIn profiles in India?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach\'s Chrome extension lets you find verified phone numbers directly from any LinkedIn profile. Install the extension, visit a LinkedIn profile, and EazyReach reveals the contact\'s direct-dial number and work email — with 91% accuracy.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is finding LinkedIn phone numbers in India legal?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach sources contact data from publicly available professional databases and complies with applicable data protection regulations. The platform is designed for legitimate B2B outreach purposes.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the accuracy of EazyReach\'s LinkedIn phone number finder?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'EazyReach achieves 91% accuracy for LinkedIn contact enrichment, including phone numbers and work emails. The platform cross-references multiple data sources to verify contact information before delivering results.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does EazyReach find CXO-level phone numbers from LinkedIn?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. EazyReach is specifically designed to find decision-maker contacts including CXOs, VPs, Directors, and Managers. For Indian companies, it also uses DIN (Director Identification Number) to find verified director phone numbers.',
            },
        },
    ],
};

const features = [
    { icon: '⚡', title: 'Instant Reveal', desc: 'Find phone numbers and emails from any LinkedIn profile in seconds — no manual research required.' },
    { icon: '✅', title: '91% Accuracy', desc: 'Cross-referenced from multiple verified data sources. Higher accuracy than most LinkedIn contact finders.' },
    { icon: '🏛️', title: 'DIN Director Lookup', desc: 'For Indian companies, also find director phone numbers using DIN — a unique capability for the Indian market.' },
    { icon: '📞', title: 'Call Directly', desc: 'Found a number? Call directly from your browser with EazyReach\'s built-in calling — no dialer switching.' },
    { icon: '💰', title: 'Pay Per Use', desc: 'No monthly seat fees. Pay only for the contacts you actually reveal. Shared credits across your team.' },
    { icon: '🔌', title: 'Chrome Extension', desc: 'Works directly on LinkedIn.com. No copy-pasting URLs or manual data entry.' },
];

export default function LinkedInPhoneNumberFinder() {
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
                            <span className="text-gray-300">LinkedIn Phone Number Finder</span>
                        </nav>
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-sm text-yellow-400 mb-6">
                            🔌 Chrome Extension · 91% Accuracy
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            LinkedIn Phone Number Finder —<br />
                            <span className="text-yellow-400">Find Direct Dials Instantly</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
                            Find LinkedIn phone numbers in India legally and accurately. EazyReach's LinkedIn contact finder Chrome extension reveals verified direct-dial numbers and work emails from any LinkedIn profile — in seconds.
                        </p>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                            The most accurate LinkedIn contact finder Chrome extension for Indian B2B teams. CXO-level contacts, DIN director lookup, and built-in calling — all in one tool.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi" target="_blank" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">
                                Add to Chrome — Free
                            </Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">How EazyReach Finds LinkedIn Phone Numbers</h2>
                        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                            A three-step process that goes from LinkedIn profile to verified contact — and straight to a call.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            {[
                                { step: '01', title: 'Install Extension', desc: 'Add EazyReach to Chrome from the Chrome Web Store. Takes 30 seconds.' },
                                { step: '02', title: 'Visit LinkedIn Profile', desc: 'Navigate to any LinkedIn profile. EazyReach\'s panel appears automatically.' },
                                { step: '03', title: 'Reveal & Call', desc: 'Click to reveal the verified phone number and email. Call directly from your browser.' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                                    <div className="text-4xl font-bold text-yellow-400/30 mb-3">{item.step}</div>
                                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {features.map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-colors">
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 text-center bg-white/[0.02]">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Start Finding LinkedIn Phone Numbers</h2>
                        <p className="text-gray-400 mb-8">Install the Chrome extension and find your first contact in under 2 minutes. No credit card required.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="https://chromewebstore.google.com/detail/eazyreach/fffgeopnkmehonbljgdgejmpfnfbgooi" target="_blank" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors">Add to Chrome — Free</Link>
                            <Link href="/pricing" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors">See Pricing</Link>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4">
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
