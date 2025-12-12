import React from 'react'

export default function Features() {
  const features = [
    {
      icon: (
        <div className="relative">
          <div className="absolute inset-0 bg-zinc-900 rounded-2xl blur-xl opacity-20 scale-110"></div>
          <div className="relative bg-zinc-900 text-white p-4 rounded-2xl">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>
      ),
      badge: "AI Core",
      title: "Intelligent Organization",
      description: "Advanced machine learning algorithms automatically categorize and tag your content with human-like understanding.",
      stats: "99.9% accuracy"
    },
    {
      icon: (
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500 rounded-2xl blur-xl opacity-20 scale-110"></div>
          <div className="relative bg-emerald-500 text-white p-4 rounded-2xl">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
        </div>
      ),
      badge: "Smart Links",
      title: "Context-Aware URLs",
      description: "Seamlessly capture web content with intelligent metadata extraction and contextual relationship mapping.",
      stats: "< 1s processing"
    },
    {
      icon: (
        <div className="relative">
          <div className="absolute inset-0 bg-violet-500 rounded-2xl blur-xl opacity-20 scale-110"></div>
          <div className="relative bg-violet-500 text-white p-4 rounded-2xl">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
      ),
      badge: "Document AI",
      title: "Deep Content Analysis",
      description: "Sophisticated document processing with automatic summarization, entity extraction, and semantic understanding.",
      stats: "50+ formats"
    }
  ]

  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-zinc-100 rounded-full blur-3xl opacity-60 animate-float-slow"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-80 h-80 bg-zinc-200 rounded-full blur-3xl opacity-40 animate-float-delayed"></div>
      </div>
      
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-24 fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-zinc-400 rounded-full mr-3 animate-pulse"></div>
            <span>Platform Capabilities</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-zinc-900 mb-8 tracking-tight leading-[0.9]">
            <span className="block">Intelligent by</span>
            <span className="block font-normal italic text-zinc-600">design</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-zinc-500 font-light max-w-3xl mx-auto leading-relaxed">
            Cutting-edge AI capabilities that transform how you interact with digital content
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group fade-in">
              <div className="relative p-8 lg:p-10 rounded-3xl border border-zinc-100 bg-white hover:bg-zinc-50/50 transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-900/5 hover:-translate-y-2">
                {/* Feature icon */}
                <div className="mb-8">
                  {feature.icon}
                </div>
                
                {/* Badge */}
                <div className="mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-600 tracking-wide uppercase">
                    {feature.badge}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-light text-zinc-900 mb-6 tracking-tight">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-zinc-600 font-light leading-relaxed text-lg mb-6">
                  {feature.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-zinc-500 font-medium">{feature.stats}</span>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-transparent via-transparent to-zinc-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="mt-24 text-center fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 lg:p-12 rounded-3xl bg-zinc-50 border border-zinc-200">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-left lg:max-w-md">
                  <h3 className="text-2xl lg:text-3xl font-light text-zinc-900 mb-4 tracking-tight">
                    Built for the future of work
                  </h3>
                  <p className="text-zinc-600 font-light leading-relaxed">
                    Designed to evolve with your needs, powered by continuous learning and improvement.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="text-center px-6 py-4">
                    <div className="text-2xl font-light text-zinc-900">50M+</div>
                    <div className="text-sm text-zinc-500 font-medium">Items Organized</div>
                  </div>
                  <div className="hidden sm:block w-px h-16 bg-zinc-200"></div>
                  <div className="text-center px-6 py-4">
                    <div className="text-2xl font-light text-zinc-900">Enterprise</div>
                    <div className="text-sm text-zinc-500 font-medium">Grade Security</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
