import React, { useEffect, useRef, useState } from 'react'
import screenHome from '../assets/screens/IMG-20260514-WA0000.jpg'
import screenSearch from '../assets/screens/IMG-20260514-WA0003.jpg'
import screenDetail from '../assets/screens/IMG-20260514-WA0001.jpg'
import appApk from '../assets/apk/keeplynk.apk'

const stats = [
  { value: 'Android', label: 'Available now' },
  { value: 'AI-first', label: 'Auto-sort and tags' },
  { value: 'Web', label: 'Coming soon' },
  { value: 'Free', label: 'During beta' },
]

const featuresTimeline = [
  {
    step: '01',
    title: 'Capture anything in seconds',
    text: 'Save a link, document, or note from any app. The capture flow is a single tap that feels native everywhere you work.',
    bullets: ['Share sheet support on Android', 'Zero switching or copy-paste', 'Consistent capture experience'],
  },
  {
    step: '02',
    title: 'AI organizes the context',
    text: 'KeepLynk reads the content you save and turns it into a clean, labeled entry—folder, tags, and summary included.',
    bullets: ['Auto folders based on intent', 'Smart tags for quick filtering', 'Readable summaries at a glance'],
  },
  {
    step: '03',
    title: 'Stay ready to find it later',
    text: 'Search by keyword, tag, source, or time. The structure stays tidy so retrieval stays fast—even as your library grows.',
    bullets: ['Unified search across everything', 'Saved sources stay visible', 'Instant filters that stay predictable'],
  },
  {
    step: '04',
    title: 'Access across devices',
    text: 'Your collection stays synced as KeepLynk expands to web and desktop. The same structure, the same clarity.',
    bullets: ['Web access in progress', 'Consistent layout on every device', 'Designed for long-term clarity'],
  },
]

const steps = [
  {
    number: '01',
    title: 'Save anything',
    text: 'Share a URL, document, or article from any app into KeepLynk in a few taps.',
  },
  {
    number: '02',
    title: 'Auto-organize',
    text: 'The AI groups the item into a folder and creates smart tags with minimal effort.',
  },
  {
    number: '03',
    title: 'Find it fast',
    text: 'Search by folder, keyword, or tag and surface the right item exactly when you need it.',
  },
]

function MockScreen({ title, children }) {
  return (
    <div className="mock-screen">
      <div className="mock-screen-topbar">
        <span />
        <span />
        <span />
      </div>
      <div className="mock-screen-title">{title}</div>
      <div className="mock-screen-body">{children}</div>
    </div>
  )
}

function Tag({ children, tone = 'default' }) {
  return <span className={`tag-pill tag-${tone}`}>{children}</span>
}

export default function HomePage({ navigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY || 0
      
      // Always show at the top
      if (currentY <= 50) {
        setIsHeaderHidden(false)
      } else if (currentY > lastScrollY.current + 6) {
        // Hide when scrolling down
        setIsHeaderHidden(true)
        setIsMenuOpen(false)
      } else if (currentY < lastScrollY.current - 6) {
        // Show when scrolling up
        setIsHeaderHidden(false)
      }
      
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchor = (href) => (event) => {
    event.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      window.scrollTo({ top: target.offsetTop - 84, behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleNavigate = (path) => (event) => {
    setIsMenuOpen(false)
    return navigate(path)(event)
  }

  return (
    <div className="page-shell">
      <header className={`site-header ${isHeaderHidden ? 'is-hidden' : ''}`}>
        <a href="/" className="brand" onClick={handleNavigate('/')}>Keep<span>Lynk</span></a>
        <nav className="site-nav">
          <a href="#features" onClick={handleAnchor('#features')}>Features</a>
          <a href="#how-it-works" onClick={handleAnchor('#how-it-works')}>How it works</a>
          <a href="/privacy-policy" onClick={handleNavigate('/privacy-policy')}>Privacy</a>
          <a href="/terms" onClick={handleNavigate('/terms')}>Terms</a>
        </nav>
        <a href={appApk} download="keeplynk.apk" className="nav-button">Download beta</a>
        <button
          type="button"
          className={`hamburger ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
          <div className="mobile-menu-links">
            <a href="#features" onClick={handleAnchor('#features')}>Features</a>
            <a href="#how-it-works" onClick={handleAnchor('#how-it-works')}>How it works</a>
            <a href="/privacy-policy" onClick={handleNavigate('/privacy-policy')}>Privacy</a>
            <a href="/terms" onClick={handleNavigate('/terms')}>Terms</a>
            <a href={appApk} download="keeplynk.apk" className="nav-button">Download beta</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy reveal">
            <div className="eyebrow">Android beta · Available now</div>
            <h1>Save it. Sort it. Find it.</h1>
            <p className="hero-text">
              KeepLynk is an AI-powered content organizer that turns every saved URL or document into a neatly sorted,
              searchable library.
            </p>
            <div className="hero-actions">
              <a href={appApk} download="keeplynk.apk" className="primary-button">Download APK</a>
              <a href="#how-it-works" className="secondary-button" onClick={handleAnchor('#how-it-works')}>See how it works</a>
            </div>
            <div className="stat-row">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.value}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-visual-card hero-visual-card-main">
              <div className="visual-chip">AI sorting enabled</div>
              <h2>One capture flow for everything you save.</h2>
              <p>
                KeepLynk gives you a clear, modern space to manage links, notes, and reference material without manual cleanup.
              </p>
              <div className="mini-metrics">
                <div>
                  <strong>Smart tags</strong>
                  <span>Auto-generated by context</span>
                </div>
                <div>
                  <strong>Folders</strong>
                  <span>Organized by topic</span>
                </div>
              </div>
            </div>
            <div className="hero-visual-grid">
              <div className="hero-visual-card tiny-card accent-card">
                <span>📎</span>
                <strong>Share sheet</strong>
                <p>Save from any app</p>
              </div>
              <div className="hero-visual-card tiny-card">
                <span>🔎</span>
                <strong>Instant search</strong>
                <p>Find saved items fast</p>
              </div>
              <div className="hero-visual-card tiny-card">
                <span>🧠</span>
                <strong>AI tagging</strong>
                <p>Label content automatically</p>
              </div>
              <div className="hero-visual-card tiny-card">
                <span>🌍</span>
                <strong>Cross-device</strong>
                <p>Web access coming soon</p>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip reveal">
          <div>
            <strong>Private by design</strong>
            <span>Simple policy pages, clear data handling, and transparent product communication.</span>
          </div>
          <div>
            <strong>Built for speed</strong>
            <span>Modern interface, quick save flow, and focused navigation for daily use.</span>
          </div>
          <div>
            <strong>Made for the beta phase</strong>
            <span>Download today and help shape the product before the web release.</span>
          </div>
        </section>

        <section className="content-section" id="how-it-works">
          <div className="section-heading reveal">
            <span className="eyebrow">How it works</span>
            <h2>Three simple steps with no extra friction.</h2>
          </div>
          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card reveal" key={step.number}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section alt-surface" id="features">
          <div className="section-heading reveal">
            <span className="eyebrow">Features</span>
            <h2>A clear product story, from capture to recall.</h2>
          </div>
          <div className="features-timeline">
            {featuresTimeline.map((item, index) => (
              <article className="timeline-item reveal" key={item.step}>
                <div className="timeline-marker">
                  <div className="timeline-dot">{item.step}</div>
                  {index !== featuresTimeline.length - 1 && <div className="timeline-line" />}
                </div>
                <div className="timeline-content">
                  <span className="timeline-kicker">Chapter {item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ul className="timeline-points">
                    {item.bullets.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="timeline-cta reveal">
            <div className="timeline-cta-copy">
              <span className="eyebrow">Sign up</span>
              <h3>Get access to the beta and updates.</h3>
              <p>Join the list to receive the Android beta and early access to the web experience.</p>
            </div>
            <form className="timeline-signup">
              <input
                className="timeline-input"
                type="email"
                name="email"
                placeholder="Work email"
                aria-label="Email address"
                required
              />
              <button className="primary-button" type="submit">Sign up</button>
            </form>
            <p className="timeline-caption">By signing up, you agree to receive product updates. No spam.</p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading reveal">
            <span className="eyebrow">Product preview</span>
            <h2>Designed to feel modern, calm, and polished.</h2>
          </div>
          <div className="preview-grid">
            <MockScreen title="Home">
              <img className="mock-screen-image" src={screenHome} alt="KeepLynk home screen" loading="lazy" />
            </MockScreen>
            <MockScreen title="Search">
              <img className="mock-screen-image" src={screenSearch} alt="KeepLynk search screen" loading="lazy" />
            </MockScreen>
            <MockScreen title="Detail">
              <img className="mock-screen-image" src={screenDetail} alt="KeepLynk detail screen" loading="lazy" />
            </MockScreen>
          </div>
        </section>

        <section className="content-section beta-panel reveal" id="beta">
          <div>
            <span className="eyebrow">Beta · Android</span>
            <h2>Try the app now. Free during the beta period.</h2>
            <p>
              Download the APK, install it, and start saving. No paywall and no credit card.
            </p>
          </div>
          <div className="beta-actions">
            <a href={appApk} download="keeplynk.apk" className="primary-button">Download APK</a>
            <div className="apk-meta">
              <strong>v1.0.0-beta</strong>
              <span>Android 7.0+ · approximately 15 MB</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <a href="/" className="brand footer-brand" onClick={navigate('/')}>Keep<span>Lynk</span></a>
          <p>AI-powered content organization for the modern browser and mobile workflow.</p>
        </div>
        <div className="footer-links">
          <a href="/privacy-policy" onClick={navigate('/privacy-policy')}>Privacy Policy</a>
          <a href="/terms" onClick={navigate('/terms')}>Terms & Conditions</a>
        </div>
      </footer>
    </div>
  )
}
