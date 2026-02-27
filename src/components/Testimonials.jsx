import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)

  const testimonials = [
    {
      quote: "KeepLynk has completely transformed how our team manages research. What used to take hours of manual organization now happens automatically. It's like having a personal librarian for our entire company.",
      author: "Sarah Chen",
      role: "Head of Research",
      company: "Notion Labs",
      avatar: "SC",
      metric: "10x faster",
      metricLabel: "Research retrieval"
    },
    {
      quote: "As a content creator, I save hundreds of articles and videos weekly. KeepLynk's AI understands context so well that I can find exactly what I need with natural language searches. Game changer.",
      author: "Marcus Johnson",
      role: "Content Strategist",
      company: "Vercel",
      avatar: "MJ",
      metric: "50+ hrs",
      metricLabel: "Saved monthly"
    },
    {
      quote: "We evaluated dozens of knowledge management tools. KeepLynk is the only one that actually understands the content, not just stores it. The semantic search is mind-blowing.",
      author: "Elena Rodriguez",
      role: "CTO",
      company: "Linear",
      avatar: "ER",
      metric: "99.9%",
      metricLabel: "Search accuracy"
    },
    {
      quote: "The browser extension is seamless. I just hit a shortcut and KeepLynk captures, analyzes, and files everything automatically. My productivity has increased dramatically.",
      author: "David Park",
      role: "Product Manager",
      company: "Figma",
      avatar: "DP",
      metric: "3x",
      metricLabel: "More organized"
    }
  ]

  const logos = [
    { name: 'Notion', width: 'w-24' },
    { name: 'Figma', width: 'w-20' },
    { name: 'Linear', width: 'w-24' },
    { name: 'Vercel', width: 'w-24' },
    { name: 'Stripe', width: 'w-20' },
    { name: 'Slack', width: 'w-24' }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-violet-50 to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-emerald-50 to-transparent rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-100/80 text-zinc-600 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></span>
            <span>Testimonials</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-zinc-900 mb-8 tracking-tight leading-[0.9]">
            <span className="block">Loved by</span>
            <span className="block font-normal italic bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-600 bg-clip-text text-transparent">thousands</span>
          </h2>

          <p className="text-xl sm:text-2xl text-zinc-500 font-light max-w-3xl mx-auto leading-relaxed">
            See what teams around the world are saying about KeepLynk
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="testimonial-card max-w-4xl mx-auto mb-20">
          <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-8 lg:p-12 text-white shadow-2xl shadow-zinc-900/20">
            {/* Quote icon */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <div className="mb-8">
              <p className="text-xl lg:text-2xl font-light leading-relaxed text-zinc-100">
                "{testimonials[activeIndex].quote}"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonials[activeIndex].author}</div>
                  <div className="text-zinc-400 text-sm">{testimonials[activeIndex].role}</div>
                  <div className="text-zinc-500 text-sm">{testimonials[activeIndex].company}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 rounded-2xl px-6 py-3">
                <div>
                  <div className="text-2xl font-light text-emerald-400">{testimonials[activeIndex].metric}</div>
                  <div className="text-xs text-zinc-400">{testimonials[activeIndex].metricLabel}</div>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-emerald-400 w-8' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { value: '50K+', label: 'Active users' },
            { value: '10M+', label: 'Items organized' },
            { value: '4.9/5', label: 'Average rating' },
            { value: '99.9%', label: 'Uptime' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <div className="text-3xl lg:text-4xl font-extralight text-zinc-900 mb-2">{stat.value}</div>
              <div className="text-sm text-zinc-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Logo cloud */}
        <div className="text-center">
          <p className="text-xs text-zinc-400 font-medium tracking-widest uppercase mb-8">
            Trusted by innovative teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-40">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`${logo.width} h-8 flex items-center justify-center text-zinc-600 font-bold text-lg`}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
