import React from 'react'

export default function Hero() {
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
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Ultra minimal background */}
      <div className="absolute inset-0 bg-white"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Micro badge */}
        <div className="fade-in mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-600 text-xs font-medium tracking-wide">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
            <span>AI-POWERED</span>
          </div>
        </div>
        
        {/* Minimal typography */}
        <div className="fade-in mb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight text-zinc-900 tracking-tight leading-[0.9] mb-8">
            <span className="block">Keep</span>
            <span className="block font-light italic text-zinc-500">everything</span>
            <span className="block font-normal text-zinc-800">organized.</span>
          </h1>
        </div>
        
        {/* Clean description */}
        <div className="fade-in mb-16">
          <p className="text-lg sm:text-xl lg:text-2xl text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed">
            AI-powered organization for your digital life.
          </p>
        </div>
        
        {/* Minimal CTA */}
        <div className="fade-in">
          <button 
            onClick={scrollToWaitlist}
            className="bg-zinc-900 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-zinc-800"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  )
}
