import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coming Soon — New Features from EazyReach',
  description: 'Something exciting is coming to EazyReach. Stay tuned for new B2B contact enrichment and AI outreach features tailored for Indian sales teams.',
  alternates: { canonical: 'https://eazyreach.app/coming-soon' },
  robots: { index: false, follow: false },
};

export default function ComingSoonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
