import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Features() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out'
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl blur-xl opacity-20 scale-110 group-hover:scale-125 group-hover:opacity-30 transition-all duration-500"></div>
          <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 text-white p-4 rounded-2xl transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>
      ),
      badge: "AI Core",
      title: "Intelligent Organization",
      description: "Advanced machine learning algorithms automatically categorize and tag your content with human-like understanding.",
      stats: "99.9% accuracy",
      color: "from-zinc-500 to-zinc-600"
    },
    {
      icon: (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl blur-xl opacity-20 scale-110 group-hover:scale-125 group-hover:opacity-30 transition-all duration-500"></div>
          <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-4 rounded-2xl transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
        </div>
      ),
      badge: "Smart Links",
      title: "Context-Aware URLs",
      description: "Seamlessly capture web content with intelligent metadata extraction and contextual relationship mapping.",
      stats: "< 1s processing",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl blur-xl opacity-20 scale-110 group-hover:scale-125 group-hover:opacity-30 transition-all duration-500"></div>
          <div className="relative bg-gradient-to-br from-violet-500 to-purple-600 text-white p-4 rounded-2xl transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
      ),
      badge: "Document AI",
      title: "Deep Content Analysis",
      description: "Sophisticated document processing with automatic summarization, entity extraction, and semantic understanding.",
      stats: "50+ formats",
      color: "from-violet-500 to-purple-600"
    }
  ]

  return (
    <section ref={sectionRef} id="features" className="relative py-32 px-6 overflow-hidden">

      <div className="relative max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-zinc-300 text-sm font-medium mb-8 border border-white/10">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            <span>Platform Capabilities</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-white mb-8 tracking-tight leading-[0.9]">
            <span className="block">Intelligent by</span>
            <span className="block font-normal italic bg-gradient-to-r from-zinc-400 via-white to-zinc-400 bg-clip-text text-transparent">design</span>
          </h2>

          <p className="text-xl sm:text-2xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed">
            Cutting-edge AI capabilities that transform how you interact with digital content
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group"
            >
              <div className="relative h-full p-8 lg:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 hover:border-white/20">
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Feature icon */}
                <div className="mb-8">
                  {feature.icon}
                </div>

                {/* Badge */}
                <div className="mb-6">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${feature.color} text-white tracking-wide uppercase shadow-sm`}>
                    {feature.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-light text-white mb-6 tracking-tight transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 font-light leading-relaxed text-lg mb-6">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-zinc-400 font-medium">{feature.stats}</span>
                </div>

                {/* Arrow indicator on hover */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-24 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 lg:p-12 rounded-3xl bg-white/5 border border-white/10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left lg:max-w-md">
                  <h3 className="text-2xl lg:text-3xl font-light text-white mb-4 tracking-tight">
                    Built for the future of work
                  </h3>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    Designed to evolve with your needs, powered by continuous learning and improvement.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="text-center px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-3xl font-extralight text-white mb-1">50M+</div>
                    <div className="text-sm text-zinc-400 font-medium">Items Organized</div>
                  </div>
                  <div className="text-center px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-3xl font-extralight text-white mb-1">99.9%</div>
                    <div className="text-sm text-zinc-400 font-medium">Uptime SLA</div>
                  </div>
                  <div className="text-center px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-3xl font-extralight text-white mb-1">SOC 2</div>
                    <div className="text-sm text-zinc-400 font-medium">Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
