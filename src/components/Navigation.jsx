import React, { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = ['hero', 'features', 'waitlist']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element && window.lenis) {
      window.lenis.scrollTo(element, {
        offset: -60,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      })
    } else if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Features', id: 'features' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'FAQ', id: 'faq' }
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-zinc-200/50 shadow-sm'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-xl lg:text-2xl font-extralight tracking-wide transition-all duration-500 hover:tracking-wider text-zinc-900 group"
              >
                Keep<span className="font-light text-zinc-600 italic ml-px group-hover:text-zinc-800 transition-colors">Lynk</span>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1 bg-zinc-100/50 backdrop-blur-sm rounded-full p-1 border border-zinc-200/50">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                      activeSection === item.id
                        ? 'text-zinc-900 bg-white shadow-sm'
                        : 'text-zinc-500 hover:text-zinc-700'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <div className="ml-6">
                <button
                  onClick={() => scrollToSection('waitlist')}
                  className="group relative overflow-hidden bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/20"
                >
                  <span className="relative z-10 flex items-center">
                    Join Waitlist
                    <svg className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-10 h-10 flex flex-col justify-center items-center rounded-full bg-zinc-100/80 backdrop-blur-sm border border-zinc-200/50 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <span
                  className={`block h-0.5 w-5 bg-zinc-700 transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-zinc-700 transition-all duration-300 ease-out mt-1 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-zinc-700 transition-all duration-300 ease-out mt-1 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out ${
        isMobileMenuOpen
          ? 'opacity-100 visible'
          : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-white/98 backdrop-blur-2xl transition-all duration-500 ease-out ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className={`relative h-full flex flex-col justify-center items-center transition-all duration-700 ease-out ${
          isMobileMenuOpen ? 'translate-y-0' : 'translate-y-8'
        }`}>
          <div className="text-center space-y-6">
            {/* Mobile Menu Items */}
            {[
              { name: 'Home', id: 'hero' },
              { name: 'Features', id: 'features' },
              { name: 'How It Works', id: 'how-it-works' },
              { name: 'Pricing', id: 'pricing' },
              { name: 'FAQ', id: 'faq' }
            ].map((item, index) => (
              <div
                key={item.name}
                className={`transition-all duration-500 ease-out ${
                  isMobileMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <button
                  onClick={() => {
                    scrollToSection(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`block text-3xl font-extralight transition-colors duration-300 tracking-wide hover:tracking-wider ${
                    activeSection === item.id ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-700'
                  }`}
                >
                  {item.name}
                </button>
              </div>
            ))}

            {/* Mobile CTA */}
            <div className={`pt-8 transition-all duration-500 ease-out ${
              isMobileMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '500ms' }}
            >
              <button
                onClick={() => {
                  scrollToSection('waitlist')
                  setIsMobileMenuOpen(false)
                }}
                className="bg-zinc-900 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-zinc-800 hover:scale-105 shadow-lg shadow-zinc-900/20"
              >
                Join Waitlist
              </button>
            </div>

            {/* Decorative Element */}
            <div className={`pt-12 transition-all duration-700 ease-out ${
              isMobileMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent mx-auto"></div>
              <p className="text-sm text-zinc-400 font-light mt-4 tracking-widest">
                AI-POWERED ORGANIZATION
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
