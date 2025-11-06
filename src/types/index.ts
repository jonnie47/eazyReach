export interface FAQ {
  q: string;
  a: string;
}

export interface PricingTier {
  price: number;
  title: string;
  description: string;
  credits: number;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  initial: string;
}
