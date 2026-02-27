import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const stepsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepsRef.current.forEach((step, index) => {
        if (step) {
          gsap.from(step, {
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const steps = [
    {
      number: '01',
      title: 'Connect Your Content',
      description: 'Import from anywhere - browsers, apps, cloud storage, or manual uploads. KeepLynk integrates with 50+ platforms seamlessly.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      features: ['Browser extension', 'Mobile app', 'API access', 'Bulk import']
    },
    {
      number: '02',
      title: 'AI Analyzes & Organizes',
      description: 'Our advanced AI automatically categorizes, tags, and creates relationships between your content. No manual sorting needed.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ['Auto-tagging', 'Smart folders', 'Content analysis', 'Entity extraction']
    },
    {
      number: '03',
      title: 'Find Anything Instantly',
      description: 'Powerful semantic search understands natural language. Find content by meaning, not just keywords.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      features: ['Semantic search', 'Natural language', 'Filters & facets', 'Quick actions']
    },
    {
      number: '04',
      title: 'Collaborate & Share',
      description: 'Share collections with your team, set permissions, and collaborate in real-time. Keep everyone on the same page.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: ['Team workspaces', 'Permission controls', 'Real-time sync', 'Comments & notes']
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-zinc-300 text-sm font-medium mb-8 border border-white/10">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
            <span>How It Works</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-white mb-8 tracking-tight leading-[0.9]">
            <span className="block">Simple.</span>
            <span className="block font-normal italic bg-gradient-to-r from-zinc-400 via-white to-zinc-400 bg-clip-text text-transparent">Powerful.</span>
          </h2>

          <p className="text-xl sm:text-2xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed">
            Get organized in minutes, not hours. Our AI does the heavy lifting so you can focus on what matters.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-200 hidden md:block"></div>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => stepsRef.current[index] = el}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Step number - visible on mobile */}
                <div className="lg:hidden absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-zinc-900 to-zinc-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {step.number}
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} pl-20 lg:pl-0`}>
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 mb-6 ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                    <div className="text-zinc-300">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-light text-white mb-4 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-lg text-zinc-400 font-light leading-relaxed mb-6 max-w-lg">
                    {step.description}
                  </p>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                    {step.features.map((feature, fIndex) => (
                      <span
                        key={fIndex}
                        className="px-3 py-1 rounded-full bg-white/10 text-zinc-300 text-sm font-medium border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Step number - desktop */}
                <div className="hidden lg:flex w-20 h-20 bg-gradient-to-br from-zinc-900 to-zinc-700 rounded-3xl items-center justify-center text-white font-bold text-2xl shadow-xl z-10">
                  {step.number}
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <p className="text-zinc-400 font-light mb-6">Ready to get started?</p>
          <button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center bg-white text-zinc-900 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-white/20 hover:-translate-y-0.5"
          >
            Start Your Free Trial
            <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
