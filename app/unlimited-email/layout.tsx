import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unlimited Business Email Finder India — Verified B2B Emails',
  description: 'Find unlimited verified business email addresses for Indian professionals and decision-makers. Credit-based, no seat fees. Export to CSV instantly with EazyReach.',
  alternates: { canonical: 'https://eazyreach.app/unlimited-email' },
};

export default function UnlimitedEmailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
