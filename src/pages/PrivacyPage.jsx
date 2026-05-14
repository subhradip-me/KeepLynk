import React from 'react'

const sections = [
  {
    title: 'Information we collect',
    body: 'We may collect the information you submit, saved content metadata, and basic device or usage data needed to operate the beta product.',
  },
  {
    title: 'How we use data',
    body: 'Data is used to organize saved content, improve search, support product quality, and maintain the app experience.',
  },
  {
    title: 'Sharing',
    body: 'We do not sell your personal information. We only share data when needed to provide the service, comply with law, or protect our rights.',
  },
  {
    title: 'Retention',
    body: 'We keep information only as long as needed for the service, legal obligations, or legitimate operational purposes.',
  },
  {
    title: 'Security',
    body: 'We use reasonable safeguards to protect information, but no online system is completely secure.',
  },
  {
    title: 'Contact',
    body: 'For privacy questions, contact privacy@keeplynk.app.',
  },
]

export default function PrivacyPage({ navigate }) {
  return (
    <div className="legal-page">
      <header className="site-header legal-header">
        <a href="/" className="brand" onClick={navigate('/')}>Keep<span>Lynk</span></a>
        <div className="header-actions">
          <a href="/terms" className="text-link" onClick={navigate('/terms')}>Terms & Conditions</a>
          <a href="/" className="nav-button nav-button-ghost" onClick={navigate('/')}>Back home</a>
        </div>
      </header>

      <main className="legal-layout">
        <aside className="legal-sidebar">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p>Last updated: May 14, 2026</p>
          <div className="legal-card">
            <strong>Privacy first</strong>
            <span>We aim to keep the beta experience clear and respectful of user data.</span>
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
