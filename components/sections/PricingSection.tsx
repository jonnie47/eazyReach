'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Check, Zap, ArrowRight, Sparkles, Gift, TrendingUp } from 'lucide-react';
import CircularText from '@/components/CircularText';
import GlitchText from '@/components/GlitchText';
import ShinyText from '@/components/ShinyText';

interface ExchangeRate {
  exchange_rate: number;
  country_code: string;
  country_name: string;
  currency_code: string;
}

interface CurrencyInfo {
  code: string;
  rate: number;
  countryCode: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [detectedCurrency, setDetectedCurrency] = useState<CurrencyInfo>({ code: 'USD', rate: 0.012, countryCode: 'US' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detectCurrencyAndFetchRates = async () => {
      try {
        // Step 1: Detect country from IP
        const countryResponse = await fetch('https://ipinfo.io/country');
        const countryCode = (await countryResponse.text()).trim();

        // Step 2: Fetch exchange rates
        const ratesResponse = await fetch('https://arc.vocallabs.ai/v1/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query GetExchangeRate {
                vocallabs_exchange_rate {
                  exchange_rate
                  country_code
                  country_name
                  currency_code
                }
              }
            `
          })
        });

        const ratesData = await ratesResponse.json();
        const exchangeRates: ExchangeRate[] = ratesData.data.vocallabs_exchange_rate;

        // Step 3: Find matching currency
        const matchedRate = exchangeRates.find(
          (rate) => rate.country_code === countryCode
        );

        if (matchedRate) {
          setDetectedCurrency({
            code: matchedRate.currency_code,
            rate: matchedRate.exchange_rate,
            countryCode: matchedRate.country_code
          });
        } else {
          // Fallback to USD
          const usdRate = exchangeRates.find((rate) => rate.currency_code === 'USD');
          setDetectedCurrency({
            code: 'USD',
            rate: usdRate?.exchange_rate || 0.012,
            countryCode: 'US'
          });
        }
      } catch (error) {
        console.error('Error detecting currency:', error);
        // Fallback to USD on error
        setDetectedCurrency({ code: 'USD', rate: 0.012, countryCode: 'US' });
      } finally {
        setLoading(false);
      }
    };

    detectCurrencyAndFetchRates();
  }, []);

  const convertPrice = (priceINR: number): number => {
    return Math.round(priceINR * detectedCurrency.rate);
  };

  const formatPrice = (priceINR: number): string => {
    const converted = convertPrice(priceINR);
    return `${converted} ${detectedCurrency.code}`;
  };

  const getPaymentLink = (plan: typeof plans[0]): string => {
    const amountINR = isAnnual ? plan.annualINR : plan.monthlyINR;
    const amountInCurrency = convertPrice(amountINR);
    const amountInPaise = amountInCurrency * 100; // Convert to smallest unit (like paise for INR)
    const currency = detectedCurrency.code.toLowerCase();
    
    // Redirect to backend endpoint which handles authentication and client_id
    return `https://app.vocallabs.ai/auth/payment?amount=${amountInPaise}&currency=${currency}`;
  };

  const plans = [
    {
      name: "Pro",
      monthlyINR: 1499,
      monthlyUSD: 18,
      annualINR: 16151,
      annualUSD: 193,
      description: "Ideal for individual users focused on LinkedIn contact reveals",
      credits: 150,
      features: [
        "150 free credits/month",
        "LinkedIn contact reveal",
        "Email & phone extraction",
        // "Smart local caching",
        "Organized contact groups",
        // "Bulk enrichment",
        "Duplicate detection",
        // "Export to CSV"
      ],
      cta: "Get Pro",
      popular: false
    },
    {
      name: "Power",
      monthlyINR: 2399,
      monthlyUSD: 29,
      annualINR: 25911,
      annualUSD: 310,
      description: "Best for sales and recruiting professionals who need calling features",
      credits: 300,
      features: [
        "300 free credits/month",
        "Everything in Pro, plus:",
        "Click-to-call from browser",
        "In-browser audio calling",
        // "Multi-token caller IDs",
        // "Real-time call status",
        "CXO lookup",
        // "Call logging & history",
        // "Infinite scroll enrichment"
      ],
      cta: "Get Power",
      popular: true
    },
    {
      name: "Enterprise",
      monthlyINR: 4999,
      monthlyUSD: 60,
      annualINR: 53991,
      annualUSD: 646,
      description: "Designed for teams requiring automation, AI calling, and collaboration",
      credits: 750,
      features: [
        "750 free credits/month",
        "Everything in Power, plus:",
        "AI-assisted calling agents",
        // "Background call automation",
        "Team contact management",
        // "Role-based access control",
        // "Bulk credit discounts",
        // "Full API access",
        // "Custom integrations",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div id="pricing" className="py-20 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full border border-accent/30 mb-4">
            <Zap className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-semibold text-accent">Flexible Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Choose Your Plan
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto mb-6">
            Pay monthly or save 10% with annual billing.
          </p>

          {/* Billing Period Toggle */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-white/10 rounded-full border border-white/20 transition-all duration-300 hover:border-accent/50"
            >
              <motion.div
                className="absolute top-0.5 w-6 h-6 bg-accent rounded-full"
                animate={{ left: isAnnual ? '28px' : '2px' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full"
              >
                Save 10%
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => {
            const cardContent = (
              <div className="flex-1">
                {/* Plan Name */}
                {plan.popular ? (
                  <div className="mb-2">
                    <GlitchText speed={0.8} enableOnHover className="!text-3xl !font-bold !text-accent !mx-0">
                      {plan.name}
                    </GlitchText>
                  </div>
                ) : (
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                )}
                
                {/* Black Friday Sale Badge - Only for Power Plan */}
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-4 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 blur-xl" />
                    <div className="relative bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 border-2 border-red-500/50 rounded-xl p-4 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                        >
                          <Gift className="w-5 h-5 text-red-400" />
                        </motion.div>
                        <span className="text-sm font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                          🔥 BLACK FRIDAY EXCLUSIVE
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-baseline gap-2">
                          <Sparkles className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <p className="text-xs text-gray-300">
                            <span className="font-bold text-white">LinkedIn Premium Account</span> worth{' '}
                            <span className="text-red-400 font-bold line-through">₹18,000</span>
                          </p>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <p className="text-xs text-gray-300">
                            Get it for just <span className="text-green-400 font-bold text-base">₹200</span>
                          </p>
                        </div>
                      </div>
                      <motion.div
                        className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-red-500/30 to-orange-500/30 rounded-full blur-2xl"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                )}
                
                {/* Price */}
                <div className="mb-4">
                  {isAnnual ? (
                    <>
                      <div className="flex items-baseline gap-1">
                        {plan.popular ? (
                          <ShinyText 
                            text={loading ? '...' : formatPrice(Math.round(plan.annualINR / 12))}
                            speed={3}
                            className="!text-5xl !font-bold !text-white"
                          />
                        ) : (
                          <span className="text-4xl font-bold text-white">
                            {loading ? '...' : formatPrice(Math.round(plan.annualINR / 12))}
                          </span>
                        )}
                        <span className="text-sm text-gray-400">/month</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {loading ? '...' : formatPrice(plan.annualINR)} billed annually · Save 10%
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        {plan.popular ? (
                          <ShinyText 
                            text={loading ? '...' : formatPrice(plan.monthlyINR)}
                            speed={3}
                            className="!text-5xl !font-bold !text-white"
                          />
                        ) : (
                          <span className="text-4xl font-bold text-white">
                            {loading ? '...' : formatPrice(plan.monthlyINR)}
                          </span>
                        )}
                        <span className="text-sm text-gray-400">/month</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Billed monthly
                      </p>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-2">{plan.description}</p>
                <p className="text-xs text-gray-500 mb-6">
                  Includes {plan.credits} free credits/month. Additional credits purchased separately.
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );

            const ctaButton = (
              <button
                onClick={() => {
                  if (plan.name === 'Enterprise') {
                    window.location.href = '/contact';
                  } else {
                    window.open(getPaymentLink(plan), '_blank');
                  }
                }}
                className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-accent via-yellow-400 to-accent text-black hover:shadow-lg hover:shadow-accent/50 relative overflow-hidden group hover:scale-105'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {plan.popular && (
                  <>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent/50 to-yellow-400/50 blur-xl"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </>
                )}
                <span className="relative z-10">{plan.cta}</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            );

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative group"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-accent text-black text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}

                {plan.popular ? (
                  <div className="bg-gradient-to-br from-[#1a1a1a]/95 to-[#0a0a0a]/95 backdrop-blur-xl rounded-2xl p-6 border-2 border-accent hover:border-accent/80 transition-all duration-300 h-full flex flex-col relative overflow-hidden group">
                    {/* Animated background effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-yellow-500/5 to-accent/5 animate-pulse" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent via-yellow-500 to-accent opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-300" />
                    
                    {/* Circular rotating text decoration */}
                    <div className="absolute -top-16 -right-16 opacity-30 group-hover:opacity-50 transition-opacity">
                      <CircularText 
                        text="⚡ MOST POPULAR ⚡ BEST VALUE ⚡ "
                        spinDuration={15}
                        onHover="speedUp"
                        className="text-accent"
                      />
                    </div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      {cardContent}
                      {ctaButton}
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl p-6 border border-accent/30 hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
                    {cardContent}
                    {ctaButton}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Global Note */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm text-gray-400 bg-white/5 border border-white/10 rounded-xl px-6 py-4 inline-block">
            <span className="text-accent font-semibold">Note:</span> Credits are required for all reveals. You can buy credits anytime.
          </p>
        </motion.div>

        {/* Credit Pricing Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Pay-As-You-Go Credits
            </h3>
            <p className="text-sm text-gray-400">
              Same pricing across all plans. Buy credits and use them as needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              {
                credits: 10,
                priceINR: 10,
                priceUSD: 0.12,
                title: "CXO Direct Dial (India)",
                description: "Decision-maker contact numbers"
              },
              {
                credits: 10,
                priceINR: 10,
                priceUSD: 0.12,
                title: "Full Contact Enrichment (LinkedIn)",
                description: "Email + phone + profile data"
              },
              {
                credits: 7,
                priceINR: 7,
                priceUSD: 0.08,
                title: "Phone Number Lookup",
                description: "General phone lookup"
              },
              {
                credits: 3,
                priceINR: 3,
                priceUSD: 0.04,
                title: "Verified Email",
                description: "Email address only"
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1a1a1a]/50 to-[#0a0a0a]/50 backdrop-blur-xl rounded-xl p-5 border border-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold text-accent">
                    {tier.credits} Credit{tier.credits > 1 ? 's' : ''}
                  </span>
                </div>
                
                <div className="mb-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">
                      {loading ? '...' : `${convertPrice(tier.priceINR)} ${detectedCurrency.code}`}
                    </span>
                    <span className="text-xs text-gray-500">/ contact</span>
                  </div>
                </div>

                <h4 className="text-sm font-bold text-white mb-1">{tier.title}</h4>
                <p className="text-xs text-gray-400">{tier.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-gray-500">
            All plans include pay-as-you-go credits. No hidden fees. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </div>
  );
};