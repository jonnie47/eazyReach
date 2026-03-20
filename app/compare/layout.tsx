import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare B2B Tools — EazyReach vs PeakAI vs EazyLeadz',
  description: 'See how EazyReach stacks up against the competition. Compare features, pricing, and India-specific capabilities across leading B2B contact enrichment tools.',
  alternates: { canonical: 'https://eazyreach.app/compare' },
};

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
