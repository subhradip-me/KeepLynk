import React, { useState } from 'react'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals getting started',
      monthlyPrice: 0,
      annualPrice: 0,
      popular: false,
      features: [
        'Up to 1,000 items',
        'Basic AI tagging',
        'Web clipper',
        'Mobile app access',
        '5GB storage',
        'Email support'
      ],
      cta: 'Get Started Free',
      ctaStyle: 'secondary'
    },
    {
      name: 'Pro',
      description: 'For power users who need more',
      monthlyPrice: 12,
      annualPrice: 9,
      popular: true,
      features: [
        'Unlimited items',
        'Advanced AI organization',
        'Semantic search',
        'Browser extension',
        '100GB storage',
        'Priority support',
        'API access',
        'Custom tags & filters'
      ],
      cta: 'Start Free Trial',
      ctaStyle: 'primary'
    },
    {
      name: 'Team',
      description: 'For teams that collaborate',
      monthlyPrice: 29,
      annualPrice: 24,
      popular: false,
      features: [
        'Everything in Pro',
        'Up to 10 team members',
        'Shared workspaces',
        'Team analytics',
        '1TB storage',
        'SSO & SAML',
        'Admin controls',
        'Dedicated support'
      ],
      cta: 'Contact Sales',
      ctaStyle: 'secondary'
    },
    {
      name: 'Enterprise',
      description: 'For organizations at scale',
      monthlyPrice: null,
      annualPrice: null,
      popular: false,
      features: [
        'Unlimited team members',
        'Custom AI training',
        'Advanced security',
        'Unlimited storage',
        'Custom integrations',
        'SLA guarantee',
        'Dedicated success manager',
        'On-premise option'
      ],
      cta: 'Contact Sales',
      ctaStyle: 'outline'
    }
  ]

  return (
    <section id="pricing" className="relative py-32 px-6 overflow-hidden">

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/10 text-zinc-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
            <span>Pricing</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-white mb-8 tracking-tight leading-[0.9]">
            <span className="block">Simple,</span>
            <span className="block font-normal italic bg-gradient-to-r from-zinc-400 via-white to-zinc-400 bg-clip-text text-transparent">transparent</span>
            <span className="block">pricing</span>
          </h2>

          <p className="text-xl sm:text-2xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed mb-10">
            Start free, upgrade when you need. No hidden fees, cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 bg-white/10 rounded-full border border-white/10">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                !isAnnual ? 'bg-white text-zinc-900 shadow-md' : 'text-zinc-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                isAnnual ? 'bg-white text-zinc-900 shadow-md' : 'text-zinc-300 hover:text-white'
              }`}
            >
              Annual
              <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded-full font-semibold">
                Save 25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-3xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? 'bg-white/10 text-white border border-white/20 shadow-2xl scale-105 z-10'
                  : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {plan.name}
                </h3>
                <p className="text-sm text-zinc-400">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {plan.monthlyPrice !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-light text-white">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-zinc-400">/month</span>
                  </div>
                ) : (
                  <div className="text-2xl font-light text-white">
                    Custom
                  </div>
                )}
                {isAnnual && plan.monthlyPrice > 0 && (
                  <p className="text-sm mt-1 text-zinc-400">
                    Billed annually (${plan.annualPrice * 12}/year)
                  </p>
                )}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-xl font-medium transition-all duration-300 mb-8 ${
                  plan.ctaStyle === 'primary'
                    ? 'bg-white text-zinc-900 hover:bg-zinc-100 shadow-lg'
                    : plan.ctaStyle === 'outline'
                    ? 'border-2 border-white/30 text-white hover:bg-white/10'
                    : plan.popular
                    ? 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider mb-4 text-zinc-400">
                  Features
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-zinc-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-zinc-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm">SOC 2 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm">End-to-end encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span className="text-sm">Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
