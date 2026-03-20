import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — How EazyReach Handles Your Data',
  description: 'Read EazyReach\'s privacy policy to understand how we collect, use, and protect your personal and business contact data.',
  alternates: { canonical: 'https://eazyreach.app/privacy-policy' },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
