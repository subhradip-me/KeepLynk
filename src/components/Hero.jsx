import React, { useEffect, useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const trustRef = useRef(null)
  const badgeRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Badge animation
      tl.fromTo(badgeRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 }
      )

      // Title animation
      tl.fromTo(titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2 },
        '-=0.4'
      )

      // Description animation
      tl.fromTo(descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )

      // CTA buttons animation
      tl.fromTo(ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      )

      // Trust indicators animation
      tl.fromTo(trustRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      )

      // Scroll-triggered parallax for hero content
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.set(titleRef.current, { y: progress * 100 })
          gsap.set(descRef.current, { y: progress * 60 })
          gsap.set(ctaRef.current, { opacity: 1 - progress * 1.5 })
        }
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    // Enhanced mouse parallax with multiple layers
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5)
      const y = (clientY / innerHeight - 0.5)

      gsap.to('.hero-blob-1', {
        x: x * 40,
        y: y * 40,
        duration: 1.2,
        ease: 'power2.out'
      })

      gsap.to('.hero-blob-2', {
        x: x * -30,
        y: y * -30,
        duration: 1.5,
        ease: 'power2.out'
      })

      gsap.to('.hero-blob-3', {
        x: x * 20,
        y: y * 20,
        duration: 1,
        ease: 'power2.out'
      })

      gsap.to('.hero-blob-4', {
        x: x * -15,
        y: y * -15,
        duration: 1.3,
        ease: 'power2.out'
      })

      gsap.to('.hero-float', {
        x: x * 15,
        y: y * 15,
        duration: 0.8,
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
    <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Animated gradient orbs - shared with next section, extends beyond bounds */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        <div className="hero-blob-1 absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-br from-violet-600/25 to-purple-600/15 rounded-full blur-3xl"></div>
        <div className="hero-blob-2 absolute top-1/4 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-600/20 to-teal-600/10 rounded-full blur-3xl"></div>
        <div className="hero-blob-3 absolute -bottom-60 left-1/4 w-[900px] h-[900px] bg-gradient-to-tr from-blue-600/15 to-cyan-600/10 rounded-full blur-3xl"></div>
        <div className="hero-blob-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-zinc-700/10 to-slate-700/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating decorative elements with staggered animations */}
      <div className="hero-float absolute top-32 left-[15%] w-3 h-3 bg-emerald-400/50 rounded-full animate-float"></div>
      <div className="hero-float absolute top-48 right-[20%] w-2 h-2 bg-violet-400/50 rounded-full animate-float-delayed"></div>
      <div className="hero-float absolute bottom-40 left-1/4 w-4 h-4 bg-white/15 rounded-full animate-float-slow"></div>
      <div className="hero-float absolute bottom-32 right-1/4 w-2 h-2 bg-teal-400/40 rounded-full animate-float"></div>
      <div className="hero-float absolute top-1/3 left-[10%] w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-float-slow"></div>
      <div className="hero-float absolute bottom-1/3 right-[15%] w-2.5 h-2.5 bg-purple-400/30 rounded-full animate-float-delayed"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Micro badge with enhanced animation */}
        <div ref={badgeRef} className="mb-8">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-zinc-300 text-sm font-medium tracking-wide hover:bg-white/10 transition-all duration-300 cursor-default group">
            <span className="relative flex h-2.5 w-2.5 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="group-hover:text-white transition-colors">AI-POWERED ORGANIZATION</span>
          </div>
        </div>

        {/* Enhanced typography with gradient text */}
        <div ref={titleRef} className="mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white tracking-tight leading-[0.95] mb-6">
            <span className="block">Keep</span>
            <span className="block font-light italic bg-gradient-to-r from-zinc-400 via-white to-zinc-400 bg-clip-text text-transparent">everything</span>
            <span className="block font-normal text-white">organized.</span>
          </h1>
        </div>

        {/* Enhanced description */}
        <div ref={descRef} className="mb-12">
          <p className="text-lg sm:text-xl lg:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Transform chaos into clarity with AI that understands your content and organizes it effortlessly.
          </p>
        </div>

        {/* Enhanced CTA buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
        <div ref={trustRef} className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs text-zinc-500 font-medium tracking-widest uppercase mb-4">Trusted by teams at</p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="text-zinc-400 font-semibold text-sm">Notion</div>
            <div className="text-zinc-400 font-semibold text-sm">Figma</div>
            <div className="text-zinc-400 font-semibold text-sm">Linear</div>
            <div className="text-zinc-400 font-semibold text-sm">Vercel</div>
          </div>
        </div>
      </div>
    </section>
  )
}
