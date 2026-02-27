import React from 'react'

export default function CTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-zinc-700 bg-zinc-800/50 backdrop-blur-md text-zinc-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
          <span>Start your free trial today</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white mb-6 tracking-tight leading-[1.1]">
          Ready to transform your
          <span className="block font-normal italic bg-gradient-to-r from-zinc-300 via-white to-zinc-300 bg-clip-text text-transparent">
            digital organization?
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Join 50,000+ users who have already revolutionized how they manage their content. 
          Start free for 14 days, no credit card required.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden bg-white text-zinc-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 hover:scale-[1.02]"
          >
            <span className="relative z-10 flex items-center">
              Get Started Free
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-zinc-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>

          <a
            href="#"
            className="group inline-flex items-center px-8 py-4 rounded-full font-medium text-zinc-300 transition-all duration-300 hover:text-white border border-zinc-700 hover:border-zinc-500"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Demo
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-zinc-500 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
