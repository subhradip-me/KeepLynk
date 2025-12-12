import React from 'react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import logoSrc from '../assets/logo1.svg'

export default function Loader({ onLoadingComplete }) {
  const loaderRef = useRef(null)
  const logoRef = useRef(null)
  const textRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Hide loader and call completion callback
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => {
            if (onLoadingComplete) {
              onLoadingComplete()
            }
          }
        })
      }
    })

    // Initial state
    gsap.set([logoRef.current, textRef.current], {
      opacity: 0,
      scale: 0.5
    })

    gsap.set(progressRef.current, {
      width: '0%'
    })

    // Animation sequence
    tl
      .to(logoRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)'
      })
      .to(textRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'power3.out'
      }, '-=0.2')
      .to(progressRef.current, {
        width: '100%',
        duration: 1.5,
        ease: 'power2.inOut'
      }, '-=0.2')
      .to(logoRef.current, {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      }, '-=0.3')

    return () => {
      tl.kill()
    }
  }, [onLoadingComplete])

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-linear-to-r from-zinc-900 via-transparent to-zinc-900"></div>
      </div>
      
      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Animated logo */}
        <div ref={logoRef} className="mb-8 relative">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-white blur-xl opacity-30 animate-pulse"></div>

          {/* Logo container with your logo.svg file */}
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <div className="w-full h-full animate-spin-slow">
              <img 
                src={logoSrc} 
                alt="KeepLynk Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  console.log('Logo failed to load, using fallback');
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
              {/* Fallback SVG if image fails to load */}
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                style={{display: 'none'}}
                className="w-full h-full"
              >
                <circle cx="50" cy="50" r="40" fill="none" stroke="#71717a" strokeWidth="2"/>
                <text x="50" y="50" textAnchor="middle" dominantBaseline="central" fontSize="20" fill="#18181b" fontWeight="bold">K</text>
                <circle cx="50" cy="50" r="15" fill="none" stroke="#18181b" strokeWidth="3">
                  <animate attributeName="r" values="10;20;10" dur="2s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Brand text */}
        <div ref={textRef} className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light text-zinc-900 mb-2 tracking-tight">
            Keep<span className="font-medium text-zinc-700">Lynk</span>
          </h1>
          <p className="text-zinc-600 font-light text-lg">
            AI-Powered Organization
          </p>
        </div>
        
        {/* Progress bar */}
        <div className="w-64 h-1 bg-zinc-200 rounded-full overflow-hidden">
          <div 
            ref={progressRef}
            className="h-full bg-linear-to-r from-zinc-600 to-zinc-800 rounded-full relative"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
          </div>
        </div>
        
        {/* Loading text */}
        <p className="mt-4 text-sm text-zinc-500 font-light animate-pulse">
          Preparing your experience...
        </p>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-zinc-400 rounded-full opacity-40 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-zinc-500 rounded-full opacity-30 animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-zinc-300 rounded-full opacity-50 animate-float-slow"></div>
      </div>
    </div>
  )
}
