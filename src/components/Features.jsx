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
    <section ref={sectionRef} className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-violet-100/50 to-purple-100/30 rounded-full blur-3xl opacity-60 animate-float-slow"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-emerald-100/40 to-teal-100/20 rounded-full blur-3xl opacity-50 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-zinc-100/60 to-gray-100/30 rounded-full blur-3xl opacity-40"></div>
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-100/80 backdrop-blur-sm text-zinc-600 text-sm font-medium mb-8 border border-zinc-200/50">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
            <span>Platform Capabilities</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-zinc-900 mb-8 tracking-tight leading-[0.9]">
            <span className="block">Intelligent by</span>
            <span className="block font-normal italic bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-600 bg-clip-text text-transparent">design</span>
          </h2>

          <p className="text-xl sm:text-2xl text-zinc-500 font-light max-w-3xl mx-auto leading-relaxed">
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
              <div className="relative h-full p-8 lg:p-10 rounded-3xl border border-zinc-100 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-900/5 hover:-translate-y-3 hover:border-zinc-200">
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
                <h3 className="text-2xl lg:text-3xl font-light text-zinc-900 mb-6 tracking-tight group-hover:text-zinc-800 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-600 font-light leading-relaxed text-lg mb-6">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-zinc-500 font-medium">{feature.stats}</span>
                </div>

                {/* Arrow indicator on hover */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-zinc-50 to-white border border-zinc-200/80 shadow-sm">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left lg:max-w-md">
                  <h3 className="text-2xl lg:text-3xl font-light text-zinc-900 mb-4 tracking-tight">
                    Built for the future of work
                  </h3>
                  <p className="text-zinc-600 font-light leading-relaxed">
                    Designed to evolve with your needs, powered by continuous learning and improvement.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="text-center px-6 py-4 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                    <div className="text-3xl font-extralight text-zinc-900 mb-1">50M+</div>
                    <div className="text-sm text-zinc-500 font-medium">Items Organized</div>
                  </div>
                  <div className="text-center px-6 py-4 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                    <div className="text-3xl font-extralight text-zinc-900 mb-1">99.9%</div>
                    <div className="text-sm text-zinc-500 font-medium">Uptime SLA</div>
                  </div>
                  <div className="text-center px-6 py-4 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                    <div className="text-3xl font-extralight text-zinc-900 mb-1">SOC 2</div>
                    <div className="text-sm text-zinc-500 font-medium">Certified</div>
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
