import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [focused, setFocused] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.waitlist-content', {
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log('Email submitted:', email)
      setIsSubmitted(true)
      setEmail('')
      setIsLoading(false)

      // Reset after 8 seconds
      setTimeout(() => setIsSubmitted(false), 8000)
    }, 1500)
  }

  return (
    <section ref={sectionRef} id="waitlist" className="relative py-32 px-6 overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto text-center waitlist-content">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-zinc-700/80 bg-zinc-800/50 backdrop-blur-md text-zinc-300 text-sm font-medium mb-8 shadow-lg">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            <span>Early Access Program</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-white mb-8 tracking-tight leading-[0.9]">
            <span className="block">Join the</span>
            <span className="block font-normal italic bg-gradient-to-r from-zinc-300 via-white to-zinc-300 bg-clip-text text-transparent">revolution</span>
          </h2>

          <p className="text-xl sm:text-2xl text-zinc-300 font-light max-w-3xl mx-auto leading-relaxed">
            Be among the first to experience the future of content organization. Get exclusive early access and help shape KeepLynk.
          </p>
        </div>

        {/* Waitlist form */}
        <div className="mb-16">
          {!isSubmitted ? (
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="relative flex-1 w-full lg:max-w-lg group">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-30 transition duration-500 blur ${focused ? 'opacity-50' : ''}`}></div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder="Enter your email address"
                    required
                    disabled={isLoading}
                    className="relative w-full px-6 py-5 rounded-2xl bg-zinc-800/80 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-all duration-300 backdrop-blur-md text-lg disabled:opacity-50 shadow-inner"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative overflow-hidden bg-white text-zinc-900 px-8 py-5 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/20 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed min-w-[200px] shadow-lg"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Join Waitlist
                        <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-zinc-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-zinc-400 font-light">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Join <span className="text-white font-medium">12,000+</span> professionals already on the waitlist</span>
              </div>
            </div>
          ) : (
            <div className="max-w-xl mx-auto">
              <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 backdrop-blur-lg shadow-2xl shadow-emerald-900/20">
                <div className="flex items-center justify-center text-emerald-400 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/30 to-teal-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-light text-white mb-4">Welcome aboard!</h3>
                <p className="text-zinc-300 leading-relaxed text-lg">
                  You're now on the KeepLynk early access list. We'll notify you as soon as we're ready to transform your content organization experience.
                </p>
                <div className="mt-6 pt-6 border-t border-emerald-500/20">
                  <p className="text-sm text-emerald-400/80">Check your inbox for a confirmation email</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Features preview */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                title: "Enterprise Security",
                desc: "End-to-end encryption"
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Lightning Fast",
                desc: "Sub-second processing"
              },
              {
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                title: "Made with Love",
                desc: "Crafted for creators"
              }
            ].map((item, idx) => (
              <div key={idx} className="group text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">{item.title}</h4>
                <p className="text-zinc-400 text-sm font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom disclaimer */}
        <div className="mt-16 text-center">
          <p className="text-xs text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed">
            By joining our waitlist, you agree to receive updates about KeepLynk. We respect your privacy and will never spam you.
            Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
