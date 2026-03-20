import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partners — Grow with EazyReach',
  description: 'Join the EazyReach partner program. Refer, resell, or integrate with India\'s leading B2B contact enrichment and AI outreach platform.',
  alternates: { canonical: 'https://eazyreach.app/partners' },
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
