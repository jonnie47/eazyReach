import { PricingTier } from '../types';

export const PRICING_TIERS: PricingTier[] = [
  {
    price: 3,
    title: 'Verified Email',
    description: 'Reveal verified email address',
    credits: 3
  },
  {
    price: 5,
    title: 'Verified Phone Number',
    description: 'Reveal verified mobile number',
    credits: 5
  },
  {
    price: 2,
    title: 'Human Call Attempt',
    description: 'Make a human call from browser',
    credits: 2
  },
  {
    price: 5,
    title: 'AI Call Attempt',
    description: 'Automated AI-powered call',
    credits: 5
  }
];
