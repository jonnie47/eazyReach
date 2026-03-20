import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Director Phone Number Finder India — DIN-Based Lookup',
  description: 'Find verified phone numbers of Indian company directors using DIN (Director Identification Number). Unique to EazyReach — no other tool offers DIN-based contact lookup.',
  alternates: { canonical: 'https://eazyreach.app/director-phone' },
};

export default function DirectorPhoneLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
