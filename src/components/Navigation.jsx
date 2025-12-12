import React, { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-2xl border-b border-zinc-100' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`text-xl lg:text-2xl font-extralight tracking-wide transition-all duration-500 hover:tracking-wider ${
                  isScrolled ? 'text-zinc-900' : 'text-zinc-900'
                }`}
              >
                Keep<span className="font-light text-zinc-600 italic ml-px">Lynk</span>
              </button>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1">
                {['Home', 'Features', 'Access'].map((item, index) => {
                  const sectionId = item === 'Home' ? 'hero' : item === 'Access' ? 'waitlist' : item.toLowerCase()
                  return (
                    <button
                      key={item}
                      onClick={() => scrollToSection(sectionId)}
                      className={`relative px-4 py-2 text-sm font-light transition-all duration-300 group ${
                        isScrolled ? 'text-zinc-600 hover:text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'
                      }`}
                    >
                      <span className="relative z-10">{item}</span>
                      <div className="absolute inset-0 rounded-lg bg-zinc-100 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                    </button>
                  )
                })}
              </div>
              
              <div className="ml-8">
                <button 
                  onClick={() => scrollToSection('waitlist')}
                  className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-900/20"
                >
                  Join Waitlist
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-8 h-8 flex flex-col justify-center items-center group"
                aria-label="Toggle menu"
              >
                <span 
                  className={`block h-0.5 w-6 bg-zinc-700 transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''
                  }`}
                />
                <span 
                  className={`block h-0.5 w-6 bg-zinc-700 transition-all duration-300 ease-out mt-1 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span 
                  className={`block h-0.5 w-6 bg-zinc-700 transition-all duration-300 ease-out mt-1 ${
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
          className={`absolute inset-0 bg-white/95 backdrop-blur-2xl transition-all duration-500 ease-out ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`relative h-full flex flex-col justify-center items-center transition-all duration-700 ease-out ${
          isMobileMenuOpen ? 'translate-y-0' : 'translate-y-8'
        }`}>
          <div className="text-center space-y-8">
            {/* Mobile Menu Items */}
            {[
              { name: 'Home', id: 'hero' },
              { name: 'Features', id: 'features' },
              { name: 'Early Access', id: 'waitlist' }
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
                  className="block text-2xl font-extralight text-zinc-700 hover:text-zinc-900 transition-colors duration-300 tracking-wide hover:tracking-wider"
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
                className="bg-zinc-900 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:bg-zinc-800 hover:scale-105"
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
              <div className="w-12 h-px bg-zinc-300 mx-auto"></div>
              <p className="text-sm text-zinc-500 font-light mt-4 tracking-widest">
                AI-POWERED ORGANIZATION
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
