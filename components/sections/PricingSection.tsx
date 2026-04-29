'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Check, Zap, ArrowRight, Users, Phone, Mail, PhoneCall, Bot } from 'lucide-react';
import CircularText from '@/components/CircularText';
import GlitchText from '@/components/GlitchText';
import ShinyText from '@/components/ShinyText';
import { plans, creditCosts, extraCreditsPack, formatINR, getPaymentLink, type Plan } from '@/lib/pricing';

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

const handleCta = (plan: Plan) => {
  if (plan.name === 'Enterprise') {
    window.location.href = '/contact';
  } else if (plan.isFreeTrial) {
    window.location.href = '/get-started';
  } else {
    window.open(getPaymentLink(plan.priceINR), '_blank');
  }
};

export const PricingSection: React.FC = () => {
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

          {/* Credit Costs - Inline */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <span className="text-gray-400">Email:</span>
              <span className="text-white font-semibold">{creditCosts.email} credits</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span className="text-gray-400">Phone:</span>
              <span className="text-white font-semibold">{creditCosts.phone} credits</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-accent" />
              <span className="text-gray-400">Human Call:</span>
              <span className="text-white font-semibold">{creditCosts.humanCall} credits</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-accent" />
              <span className="text-gray-400">AI Call:</span>
              <span className="text-white font-semibold">{creditCosts.aiCall} credits</span>
            </div>
          </div>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Paid Plans - 4 column grid (skip Free Trial which is plans[0]) */}
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
                          text="x POPULAR x BEST VALUE "
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
                              text={formatINR(plan.priceINR)}
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
                          onClick={() => handleCta(plan)}
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
                                {formatINR(plan.priceINR)}
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
                        onClick={() => handleCta(plan)}
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

        {/* Extra Credits */}
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
                {formatINR(extraCreditsPack.priceINR)}
              </span>
              <span className="text-gray-400">for</span>
              <span className="text-2xl font-bold text-accent">
                {extraCreditsPack.credits.toLocaleString()} credits
              </span>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Users, title: 'Shared credit pool', description: 'No per-rep penalties' },
              { icon: Phone, title: 'Built-in calling', description: 'Direct from browser' },
              { icon: Zap, title: 'No screen switching', description: 'Everything in one place' }
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
      </div>
    </div>
  );
};
