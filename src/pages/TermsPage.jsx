import React from 'react'

const sections = [
  {
    title: 'Use of the service',
    body: 'KeepLynk is provided as a beta product. You agree to use it responsibly and in accordance with applicable laws.',
  },
  {
    title: 'Beta availability',
    body: 'Features may change, pause, or be removed while the product is in beta. We may introduce or revise limits at any time.',
  },
  {
    title: 'User content',
    body: 'You are responsible for the content you save. Do not upload content that is illegal, harmful, or violates another party’s rights.',
  },
  {
    title: 'Intellectual property',
    body: 'The app, branding, and related materials remain the property of KeepLynk unless stated otherwise.',
  },
  {
    title: 'Limitation of liability',
    body: 'KeepLynk is offered on an as-is basis during beta. We do not guarantee uninterrupted service or complete accuracy.',
  },
  {
    title: 'Contact',
    body: 'Questions about these terms can be sent to support@keeplynk.app.',
  },
]

export default function TermsPage({ navigate }) {
  return (
    <div className="legal-page">
      <header className="site-header legal-header">
        <a href="/" className="brand" onClick={navigate('/')}>Keep<span>Lynk</span></a>
        <div className="header-actions">
          <a href="/privacy-policy" className="text-link" onClick={navigate('/privacy-policy')}>Privacy Policy</a>
          <a href="/" className="nav-button nav-button-ghost" onClick={navigate('/')}>Back home</a>
        </div>
      </header>

      <main className="legal-layout">
        <aside className="legal-sidebar">
          <span className="eyebrow">Legal</span>
          <h1>Terms & Conditions</h1>
          <p>Last updated: May 14, 2026</p>
          <div className="legal-card">
            <strong>KeepLynk beta</strong>
            <span>These terms explain how the beta app may be used.</span>
          </div>
        </aside>

        <article className="legal-content">
          {sections.map((section) => (
            <section className="legal-section" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </article>
      </main>
    </div>
  )
}
