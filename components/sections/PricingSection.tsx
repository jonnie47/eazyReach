'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Check, Zap, ArrowRight, Users, Phone, Mail, PhoneCall, Bot } from 'lucide-react';
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
  const [detectedCurrency, setDetectedCurrency] = useState<CurrencyInfo>({ code: 'USD', rate: 0.012, countryCode: 'US' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detectCurrencyAndFetchRates = async () => {
      try {
        const countryResponse = await fetch('https://ipinfo.io/country');
        const countryCode = (await countryResponse.text()).trim();

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
          const usdRate = exchangeRates.find((rate) => rate.currency_code === 'USD');
          setDetectedCurrency({
            code: 'USD',
            rate: usdRate?.exchange_rate || 0.012,
            countryCode: 'US'
          });
        }
      } catch (error) {
        console.error('Error detecting currency:', error);
        setDetectedCurrency({ code: 'USD', rate: 0.012, countryCode: 'US' });
      } finally {
        setLoading(false);
      }
    };

    detectCurrencyAndFetchRates();
  }, []);

  // Get price for display based on currency
  const getPrice = (plan: { monthlyINR: number; monthlyUSD: number; name: string }): number => {
    // For India, use hardcoded INR prices
    if (detectedCurrency.code === 'INR') {
      return plan.monthlyINR;
    }

    // For other currencies, convert from base USD price
    const baseUSD = plan.monthlyUSD;
    return Math.round(baseUSD / 0.012); // Convert USD to currency using exchange rate
  };

  const formatPrice = (plan: { monthlyINR: number; monthlyUSD: number; name: string }): string => {
    const price = getPrice(plan);

    // For India, return INR directly
    if (detectedCurrency.code === 'INR') {
      return `${price.toLocaleString()} INR`;
    }

    // For other currencies, convert from USD
    const usdPrice = plan.monthlyUSD;
    const converted = Math.round(usdPrice * (1 / 0.012) * detectedCurrency.rate);
    return `${converted} ${detectedCurrency.code}`;
  };

  const getPaymentLink = (plan: typeof plans[0]): string => {
    const price = getPrice(plan);
    const amountInSmallestUnit = price * 100; // Convert to smallest unit (paise, cents, etc.)
    const currency = detectedCurrency.code.toLowerCase();

    return `https://app.vocallabs.ai/auth/payment?amount=${amountInSmallestUnit}&currency=${currency}`;
  };

  const plans = [
    {
      name: "Free Trial",
      monthlyINR: 0,
      monthlyUSD: 0,
      description: "Earn free credits to try real contact data",
      credits: 150,
      isFreeTrial: true,
      features: [
        "Up to 150 free credits total",
        "Sign up with work email",
        "Invite 2 professionals",
        "Reveal verified emails & numbers",
        "LinkedIn extension"
      ],
      limitations: [
        "No calling features",
        "No AI capabilities",
        "No CSV exports"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Starter",
      monthlyINR: 4099, // Hardcoded for India
      monthlyUSD: 49,   // Base USD price for other countries
      description: "Contact discovery made simple",
      credits: 2000,
      features: [
        "2,000 credits / month",
        "Reveal verified emails & phones",
        "LinkedIn extension",
        "Unlimited segments & groups",
        "Unlimited CSV exports"
      ],
      cta: "Get Starter",
      popular: false
    },
    {
      name: "Growth",
      monthlyINR: 8249, // Hardcoded for India
      monthlyUSD: 99,   // Base USD price for other countries
      description: "Contact data + human calling",
      credits: 4000,
      features: [
        "4,000 credits / month",
        "Everything in Starter",
        "Built-in browser calling",
        "1 shared phone number",
        "Live AI transcription",
        "Call recordings & analytics"
      ],
      cta: "Get Growth",
      popular: true
    },
    {
      name: "Pro",
      monthlyINR: 16599, // Hardcoded for India
      monthlyUSD: 199,   // Base USD price for other countries
      description: "Full AI-powered outreach",
      credits: 7500,
      features: [
        "7,500 credits / month",
        "Everything in Growth",
        "AI voice outreach",
        "AI calling campaigns",
        "Conversation intelligence",
        "Objection & intent detection"
      ],
      cta: "Get Pro",
      popular: false
    },
    {
      name: "Enterprise",
      monthlyINR: 0,
      monthlyUSD: 0,
      description: "Advanced teams & custom workflows",
      credits: 0,
      isCustomPricing: true,
      features: [
        "Everything in Pro",
        "Custom credit volumes",
        "Multiple phone numbers",
        "CRM sync & integrations",
        "SLA & priority support",
        "Team management"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div id="pricing" className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full border border-accent/30 mb-6">
            <Zap className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-semibold text-accent">Pricing & Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Find contacts. Start conversations. Scale with AI.
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            One simple credit system. No seat penalties. No screen switching.
          </p>

          {/* Simplified Credit Costs - Inline */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <span className="text-gray-400">Email:</span>
              <span className="text-white font-semibold">3 credits</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span className="text-gray-400">Phone:</span>
              <span className="text-white font-semibold">5 credits</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-accent" />
              <span className="text-gray-400">Human Call:</span>
              <span className="text-white font-semibold">2 credits</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-accent" />
              <span className="text-gray-400">AI Call:</span>
              <span className="text-white font-semibold">5 credits</span>
            </div>
          </div>
        </motion.div>

        {/* Pricing Grid - Free Trial Separate */}
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Free Trial - Full Width */}
          <motion.div variants={cardVariants} className="max-w-2xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl p-8 border border-accent/30 hover:border-accent/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">?? Free Trial</h3>
                  <p className="text-gray-400 mb-4">{plans[0].description}</p>
                  <div className="flex flex-wrap gap-3 text-sm mb-4">
                    {plans[0].features.map((feature, idx) => (
                      <span key={idx} className="text-gray-300 bg-white/5 px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">
                    Limits: {plans[0].limitations?.join(' â€¢ ')}
                  </div>
                </div>
                <div className="md:text-right flex-shrink-0">
                  <div className="text-4xl font-bold text-accent mb-4">$0</div>
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="bg-white/5 text-white hover:bg-white/10 border border-white/10 px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center gap-2 transition-all duration-300"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Paid Plans - 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.slice(1).map((plan, index) => {
              const isPopular = plan.popular;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="relative group"
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="bg-accent text-black text-xs font-bold px-3 py-1 rounded-full">
                        Popular
                      </div>
                    </div>
                  )}

                  {isPopular ? (
                    <div className="bg-gradient-to-br from-[#1a1a1a]/95 to-[#0a0a0a]/95 backdrop-blur-xl rounded-2xl p-6 border-2 border-accent hover:border-accent/80 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-yellow-500/5 to-accent/5 animate-pulse" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent via-yellow-500 to-accent opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-300" />

                      <div className="absolute -top-16 -right-16 opacity-30 group-hover:opacity-50 transition-opacity">
                        <CircularText
                          text="? POPULAR ? BEST VALUE ? "
                          spinDuration={15}
                          onHover="speedUp"
                          className="text-accent"
                        />
                      </div>

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="mb-2">
                          <GlitchText speed={0.8} enableOnHover className="!text-2xl !font-bold !text-accent !mx-0">
                            {plan.name}
                          </GlitchText>
                        </div>

                        <div className="mb-4">
                          <div className="flex items-baseline gap-1 mb-1">
                            <ShinyText
                              text={loading ? '...' : formatPrice(plan)}
                              speed={3}
                              className="!text-3xl !font-bold !text-white"
                            />
                            <span className="text-sm text-gray-400">/mo</span>
                          </div>
                          <p className="text-xs text-gray-500">
                            {plan.credits.toLocaleString()} credits/month
                          </p>
                        </div>

                        <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

                        <ul className="space-y-2 mb-6 flex-1">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                              <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <button
                          onClick={() => {
                            if (plan.name === 'Enterprise') {
                              window.location.href = '/contact';
                            } else {
                              window.open(getPaymentLink(plan), '_blank');
                            }
                          }}
                          className="w-full bg-gradient-to-r from-accent via-yellow-400 to-accent text-black hover:shadow-lg hover:shadow-accent/50 py-3 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                        >
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
                          <span className="relative z-10">{plan.cta}</span>
                          <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl p-6 border border-accent/30 hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>

                      <div className="mb-4">
                        {plan.isCustomPricing ? (
                          <>
                            <div className="flex items-baseline gap-1 mb-1">
                              <span className="text-3xl font-bold text-white">Custom</span>
                            </div>
                            <p className="text-xs text-gray-500">Tailored for your team</p>
                          </>
                        ) : (
                          <>
                            <div className="flex items-baseline gap-1 mb-1">
                              <span className="text-3xl font-bold text-white">
                                {loading ? '...' : formatPrice(plan)}
                              </span>
                              <span className="text-sm text-gray-400">/mo</span>
                            </div>
                            <p className="text-xs text-gray-500">
                              {plan.credits.toLocaleString()} credits/month
                            </p>
                          </>
                        )}
                      </div>

                      <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

                      <ul className="space-y-2 mb-6 flex-1">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => {
                          if (plan.name === 'Enterprise') {
                            window.location.href = '/contact';
                          } else {
                            window.open(getPaymentLink(plan), '_blank');
                          }
                        }}
                        className="w-full bg-white/5 text-white hover:bg-white/10 border border-white/10 py-3 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all duration-300"
                      >
                        <span>{plan.cta}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Extra Credits - Simplified */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl px-8 py-4 rounded-full border border-accent/30">
            <span className="text-gray-400">Need more credits?</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">
                {loading ? '...' : (detectedCurrency.code === 'INR' ? '2,099 INR' : `${Math.round(25 * (1 / 0.012) * detectedCurrency.rate)} ${detectedCurrency.code}`)}
              </span>
              <span className="text-gray-400">?</span>
              <span className="text-2xl font-bold text-accent">1,000 credits</span>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us - More Compact */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Users, title: "Shared credit pool", description: "No per-rep penalties" },
              { icon: Phone, title: "Built-in calling", description: "Direct from browser" },
              { icon: Zap, title: "No screen switching", description: "Everything in one place" }
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#1a1a1a]/50 to-[#0a0a0a]/50 backdrop-blur-xl rounded-xl p-6 border border-white/10 text-center"
              >
                <benefit.icon className="w-6 h-6 text-accent mx-auto mb-3" />
                <h4 className="text-base font-bold text-white mb-1">{benefit.title}</h4>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-gray-500">
            All plans include pay-as-you-go credits â€¢ Credits charged once per contact â€¢ No hidden fees â€¢ Cancel anytime
          </p>
        </motion.div>
      </div>
    </div>
  );
};