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
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <CTA />
        <section id="waitlist">
          <WaitlistForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}
