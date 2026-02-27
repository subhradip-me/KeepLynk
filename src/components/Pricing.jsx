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
    <section className="relative py-32 px-6 bg-zinc-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-violet-100/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-emerald-100/40 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-zinc-200 text-zinc-600 text-sm font-medium mb-8 shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></span>
            <span>Pricing</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-zinc-900 mb-8 tracking-tight leading-[0.9]">
            <span className="block">Simple,</span>
            <span className="block font-normal italic bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-600 bg-clip-text text-transparent">transparent</span>
            <span className="block">pricing</span>
          </h2>

          <p className="text-xl sm:text-2xl text-zinc-500 font-light max-w-3xl mx-auto leading-relaxed mb-10">
            Start free, upgrade when you need. No hidden fees, cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 bg-white rounded-full border border-zinc-200 shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                !isAnnual ? 'bg-zinc-900 text-white shadow-md' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                isAnnual ? 'bg-zinc-900 text-white shadow-md' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Annual
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full font-semibold">
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
                  ? 'bg-zinc-900 text-white shadow-2xl shadow-zinc-900/20 scale-105 z-10'
                  : 'bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-xl'
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
                <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? 'text-white' : 'text-zinc-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-zinc-300' : 'text-zinc-500'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {plan.monthlyPrice !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-light ${plan.popular ? 'text-white' : 'text-zinc-900'}`}>
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className={plan.popular ? 'text-zinc-400' : 'text-zinc-500'}>/month</span>
                  </div>
                ) : (
                  <div className={`text-2xl font-light ${plan.popular ? 'text-white' : 'text-zinc-900'}`}>
                    Custom
                  </div>
                )}
                {isAnnual && plan.monthlyPrice > 0 && (
                  <p className={`text-sm mt-1 ${plan.popular ? 'text-zinc-400' : 'text-zinc-500'}`}>
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
                    ? 'border-2 border-zinc-600 text-zinc-300 hover:bg-zinc-800'
                    : plan.popular
                    ? 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700'
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }`}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <div className="flex-1">
                <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${plan.popular ? 'text-zinc-400' : 'text-zinc-400'}`}>
                  Features
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-emerald-400' : 'text-emerald-500'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${plan.popular ? 'text-zinc-300' : 'text-zinc-600'}`}>
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
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-zinc-400">
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
