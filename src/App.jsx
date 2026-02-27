import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import Loader from './components/Loader'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import WaitlistForm from './components/WaitlistForm'
import Footer from './components/Footer'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Failsafe: automatically hide loader after maximum time
    const failsafe = setTimeout(() => {
      console.log('Failsafe triggered - hiding loader')
      setIsLoading(false)
    }, 4000) // 4 seconds maximum

    return () => clearTimeout(failsafe)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      // Initialize Lenis after loading is complete
      const lenis = new Lenis({
        smooth: true,
        duration: 1.2
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      // Make Lenis available globally for navigation
      window.lenis = lenis

      // GSAP animations for page content - trigger after a short delay
      setTimeout(() => {
        gsap.from('.fade-in', {
          duration: 1,
          y: 30,
          opacity: 0,
          stagger: 0.2,
          ease: 'power3.out'
        })
      }, 100)

      return () => {
        lenis.destroy()
        window.lenis = null
      }
    }
  }, [isLoading])

  const handleLoadingComplete = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 100) // Reduced delay for quicker transition
  }

  if (isLoading) {
    return <Loader onLoadingComplete={handleLoadingComplete} />
  }

  console.log('Main content should be visible now')

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-slate-900 text-white">
      {/* Global background effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-violet-600/20 to-purple-600/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-600/15 to-teal-600/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-gradient-to-tr from-zinc-700/20 to-slate-700/10 rounded-full blur-3xl animate-float"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
      </div>

      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  )
}
