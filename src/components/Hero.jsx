import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    // Subtle parallax on mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20

      gsap.to('.hero-blob', {
        x: x,
        y: y,
        duration: 1,
        ease: 'power2.out'
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToWaitlist = () => {
    if (window.lenis) {
      window.lenis.scrollTo(document.getElementById('waitlist'), {
        offset: -80,
        duration: 1.5
      })
    } else {
      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToFeatures = () => {
    if (window.lenis) {
      window.lenis.scrollTo(document.getElementById('features'), {
        offset: -80,
        duration: 1.5
      })
    } else {
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-32 left-20 w-3 h-3 bg-emerald-400/40 rounded-full animate-float"></div>
      <div className="absolute top-48 right-32 w-2 h-2 bg-violet-400/40 rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-white/10 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-teal-400/30 rounded-full animate-float"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Micro badge with animation */}
        <div className="fade-in mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-zinc-300 text-xs font-medium tracking-wide">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
            <span>AI-POWERED ORGANIZATION</span>
          </div>
        </div>

        {/* Enhanced typography with gradient text */}
        <div ref={titleRef} className="fade-in mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white tracking-tight leading-[0.95] mb-6">
            <span className="block">Keep</span>
            <span className="block font-light italic bg-gradient-to-r from-zinc-400 via-white to-zinc-400 bg-clip-text text-transparent">everything</span>
            <span className="block font-normal text-white">organized.</span>
          </h1>
        </div>

        {/* Enhanced description */}
        <div className="fade-in mb-12">
          <p className="text-lg sm:text-xl lg:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Transform chaos into clarity with AI that understands your content and organizes it effortlessly.
          </p>
        </div>

        {/* Enhanced CTA buttons */}
        <div className="fade-in flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToWaitlist}
            className="group relative overflow-hidden bg-white text-zinc-900 px-8 py-4 rounded-full font-medium transition-all duration-500 hover:shadow-2xl hover:shadow-white/25 hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center">
              Join Waitlist
              <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-zinc-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>

          <button
            onClick={scrollToFeatures}
            className="group px-8 py-4 rounded-full font-medium text-zinc-400 transition-all duration-300 hover:text-white flex items-center border border-white/20 hover:border-white/40"
          >
            <span>Explore Features</span>
            <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Trust indicators */}
        <div className="fade-in mt-16 pt-8 border-t border-white/10">
          <p className="text-xs text-zinc-500 font-medium tracking-widest uppercase mb-4">Trusted by teams at</p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="text-zinc-400 font-semibold text-sm">Notion</div>
            <div className="text-zinc-400 font-semibold text-sm">Figma</div>
            <div className="text-zinc-400 font-semibold text-sm">Linear</div>
            <div className="text-zinc-400 font-semibold text-sm">Vercel</div>
          </div>
        </div>
      </div>
    </div>
  )
}
