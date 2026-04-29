/**
 * Static pricing config — single source of truth for all plan pricing.
 *
 * Renders at build time. No client-side fetching, no API calls, no loading states.
 * If you need to update a price, edit the value here and redeploy.
 */

export interface Plan {
  name: string;
  priceINR: number;
  description: string;
  credits: number;
  features: string[];
  limitations?: string[];
  cta: string;
  popular?: boolean;
  isFreeTrial?: boolean;
  isCustomPricing?: boolean;
}

export const plans: Plan[] = [
  {
    name: 'Free Trial',
    priceINR: 0,
    description: 'Earn free credits to try real contact data',
    credits: 150,
    isFreeTrial: true,
    features: [
      'Up to 150 free credits total',
      'Sign up with work email',
      'Invite 2 professionals',
      'Reveal verified emails & numbers',
      'LinkedIn extension',
    ],
    limitations: [
      'No calling features',
      'No AI capabilities',
      'No CSV exports',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Starter',
    priceINR: 4099,
    description: 'Contact discovery made simple',
    credits: 2000,
    features: [
      '2,000 credits / month',
      'Reveal verified emails & phones',
      'LinkedIn extension',
      'Unlimited segments & groups',
      'Unlimited CSV exports',
    ],
    cta: 'Get Starter',
    popular: false,
  },
  {
    name: 'Growth',
    priceINR: 8249,
    description: 'Contact data + human calling',
    credits: 4000,
    features: [
      '4,000 credits / month',
      'Everything in Starter',
      'Built-in browser calling',
      '1 shared phone number',
      'Live AI transcription',
      'Call recordings & analytics',
    ],
    cta: 'Get Growth',
    popular: true,
  },
  {
    name: 'Pro',
    priceINR: 16599,
    description: 'Full AI-powered outreach',
    credits: 7500,
    features: [
      '7,500 credits / month',
      'Everything in Growth',
      'AI voice outreach',
      'AI calling campaigns',
      'Conversation intelligence',
      'Objection & intent detection',
    ],
    cta: 'Get Pro',
    popular: false,
  },
  {
    name: 'Enterprise',
    priceINR: 0,
    description: 'Advanced teams & custom workflows',
    credits: 0,
    isCustomPricing: true,
    features: [
      'Everything in Pro',
      'Custom credit volumes',
      'Multiple phone numbers',
      'CRM sync & integrations',
      'SLA & priority support',
      'Team management',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export const creditCosts = {
  email: 3,
  phone: 8,
  humanCall: 2,
  aiCall: 5,
} as const;

export const extraCreditsPack = {
  priceINR: 2099,
  credits: 1000,
};

export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function getPaymentLink(priceINR: number): string {
  const amountInPaise = priceINR * 100;
  return `https://studio.eazyreach.app/auth/payment?amount=${amountInPaise}&currency=inr`;
}
