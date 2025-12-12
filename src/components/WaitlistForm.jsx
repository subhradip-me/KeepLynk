import React, { useState } from 'react'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Email submitted:', email)
      setIsSubmitted(true)
      setEmail('')
      setIsLoading(false)
      
      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-700/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zinc-600/15 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-size-[80px_80px]"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Header */}
        <div className="fade-in mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-zinc-700 bg-zinc-800/50 backdrop-blur text-zinc-300 text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            <span>Early Access Program</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-white mb-8 tracking-tight leading-[0.9]">
            <span className="block">Join the</span>
            <span className="block font-normal italic text-zinc-300">revolution</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-zinc-300 font-light max-w-3xl mx-auto leading-relaxed">
            Be among the first to experience the future of content organization. Get exclusive early access and help shape KeepLynk.
          </p>
        </div>
        
        {/* Waitlist form */}
        <div className="fade-in mb-16">
          {!isSubmitted ? (
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-6 items-center justify-center">
                <div className="relative flex-1 w-full lg:max-w-lg">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    disabled={isLoading}
                    className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-all duration-300 backdrop-blur text-lg disabled:opacity-50"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative overflow-hidden bg-white text-zinc-900 px-8 py-5 rounded-2xl font-medium text-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/25 disabled:opacity-50 disabled:hover:scale-100 min-w-[200px]"
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
                  <div className="absolute inset-0 bg-linear-to-r from-zinc-100 to-zinc-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </form>
              
              <p className="mt-6 text-sm text-zinc-400 font-light">
                Join <span className="text-white font-medium">12,000+</span> professionals already on the waitlist
              </p>
            </div>
          ) : (
            <div className="max-w-xl mx-auto">
              <div className="p-8 lg:p-12 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur">
                <div className="flex items-center justify-center text-emerald-400 mb-6">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Welcome to the future!</h3>
                <p className="text-zinc-300 leading-relaxed">
                  You're now on the KeepLynk early access list. We'll notify you as soon as we're ready to transform your content organization experience.
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* Features preview */}
        <div className="fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-white font-medium mb-2">Enterprise Security</h4>
              <p className="text-zinc-400 text-sm font-light">End-to-end encryption</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-white font-medium mb-2">Lightning Fast</h4>
              <p className="text-zinc-400 text-sm font-light">Sub-second processing</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-white font-medium mb-2">Made with Love</h4>
              <p className="text-zinc-400 text-sm font-light">Crafted for creators</p>
            </div>
          </div>
        </div>
        
        {/* Bottom disclaimer */}
        <div className="fade-in mt-16 text-center">
          <p className="text-xs text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed">
            By joining our waitlist, you agree to receive updates about KeepLynk. We respect your privacy and will never spam you. 
            Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
