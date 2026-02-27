import React, { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What is KeepLynk and how does it work?",
      answer: "KeepLynk is an AI-powered content organization platform that automatically categorizes, tags, and creates relationships between your digital content. Simply connect your content sources (browser, apps, cloud storage), and our AI analyzes and organizes everything for you. You can then find anything instantly using natural language search."
    },
    {
      question: "How is KeepLynk different from other bookmarking tools?",
      answer: "Unlike traditional bookmarking tools that just save URLs, KeepLynk uses advanced AI to understand the actual content. We automatically extract metadata, generate summaries, identify entities, and create semantic relationships. This means you can search by meaning, not just keywords, and discover connections you didn't know existed."
    },
    {
      question: "What types of content can I organize with KeepLynk?",
      answer: "KeepLynk supports virtually any digital content: web pages, articles, PDFs, images, videos, audio files, notes, and more. We integrate with 50+ platforms including browsers, cloud storage (Google Drive, Dropbox), note-taking apps (Notion, Evernote), and social media. Our AI processes 50+ file formats."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. Security is our top priority. We use end-to-end encryption for all your data, both in transit and at rest. We're SOC 2 Type II certified and GDPR compliant. Your data is never used to train our AI models without explicit consent, and you can export or delete your data at any time."
    },
    {
      question: "Can I use KeepLynk with my team?",
      answer: "Yes! KeepLynk is built for both individuals and teams. Our Team and Enterprise plans include shared workspaces, permission controls, real-time collaboration, team analytics, and admin controls. You can share collections, collaborate on projects, and keep everyone aligned."
    },
    {
      question: "How does the AI tagging and organization work?",
      answer: "Our AI uses a combination of natural language processing, computer vision, and machine learning to analyze your content. It automatically identifies topics, extracts key entities, generates summaries, and suggests relevant tags. The system learns from your behavior over time to provide increasingly accurate organization."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you when you're approaching your limits. You can either upgrade to a higher tier or archive older content to free up space. We never delete your data without warning. If you're on the free plan, you can always export your data before upgrading."
    },
    {
      question: "Do you offer refunds or a money-back guarantee?",
      answer: "Yes! We offer a 14-day free trial on all paid plans, so you can fully evaluate KeepLynk before committing. If you're not satisfied, we offer a 30-day money-back guarantee on all annual subscriptions. Monthly plans can be cancelled anytime."
    },
    {
      question: "Can I import my existing bookmarks and content?",
      answer: "Absolutely. We support bulk import from all major browsers (Chrome, Firefox, Safari, Edge), bookmark managers (Pocket, Raindrop, Pinboard), and note-taking apps. Our import tool preserves your existing organization and enhances it with AI-powered tags and relationships."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes! KeepLynk is available on iOS and Android. The mobile app includes our browser extension for saving content on the go, offline access to your library, and full search capabilities. Your content syncs seamlessly across all your devices."
    }
  ]

  return (
    <section className="relative py-32 px-6 bg-zinc-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-violet-100/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-100/40 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-zinc-200 text-zinc-600 text-sm font-medium mb-8 shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></span>
            <span>FAQ</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-zinc-900 mb-8 tracking-tight leading-[0.9]">
            <span className="block">Questions?</span>
            <span className="block font-normal italic bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-600 bg-clip-text text-transparent">Answered.</span>
          </h2>

          <p className="text-xl sm:text-2xl text-zinc-500 font-light max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about KeepLynk
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? 'border-zinc-300 shadow-lg shadow-zinc-900/5'
                  : 'border-zinc-200 hover:border-zinc-300'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`text-lg font-medium pr-8 transition-colors duration-300 ${
                  openIndex === index ? 'text-zinc-900' : 'text-zinc-700'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-zinc-900 text-white rotate-180'
                    : 'bg-zinc-100 text-zinc-600'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-zinc-600 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-white rounded-3xl border border-zinc-200 shadow-sm">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-medium text-zinc-900 mb-2">Still have questions?</h3>
              <p className="text-zinc-500 font-light">
                Can't find the answer you're looking for? Our team is here to help.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:support@keeplink.io"
                className="inline-flex items-center px-6 py-3 bg-zinc-900 text-white rounded-xl font-medium transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg"
              >
                Contact Support
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-zinc-300 text-zinc-700 rounded-xl font-medium transition-all duration-300 hover:bg-zinc-50"
              >
                View Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
