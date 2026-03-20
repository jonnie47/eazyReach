import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Talk to the EazyReach Team',
  description: 'Get in touch with EazyReach. Reach us via email, phone, or our contact form for sales, support, or partnership enquiries.',
  alternates: { canonical: 'https://eazyreach.app/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
