import React, { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'

function getPathname() {
  return window.location.pathname.replace(/\/+$/, '') || '/'
}

export default function App() {
  const [pathname, setPathname] = useState(getPathname())

  useEffect(() => {
    const onPopState = () => setPathname(getPathname())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (to) => (event) => {
    event.preventDefault()
    if (window.location.pathname !== to) {
      window.history.pushState({}, '', to)
      setPathname(getPathname())
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (pathname === '/terms') {
    return <TermsPage navigate={navigate} />
  }

  if (pathname === '/privacy-policy') {
    return <PrivacyPage navigate={navigate} />
  }

  return <HomePage navigate={navigate} />
}
