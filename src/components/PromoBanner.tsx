'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function PromoBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('promoBannerClosed') !== '1') {
      setVisible(true)
    }
  }, [])

  function close() {
    sessionStorage.setItem('promoBannerClosed', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="relative flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-6 py-3 text-white text-sm font-medium"
      style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)' }}
    >
      <div className="flex items-center gap-2">
        <span>🎁</span>
        <span>14 Tage kostenlos — ohne Kreditkarte, ohne Vertragsbindung</span>
      </div>
      <Link
        href="/testen"
        className="bg-white text-[#1d4ed8] font-semibold text-xs px-4 py-1.5 rounded-md hover:-translate-y-px transition-transform whitespace-nowrap focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-800"
      >
        Jetzt starten →
      </Link>
      <button
        onClick={close}
        aria-label="Schließen"
        className="absolute right-4 top-2 sm:top-1/2 sm:-translate-y-1/2 text-white/70 hover:text-white text-xl leading-none focus-visible:ring-2 focus-visible:ring-white rounded"
      >
        ×
      </button>
    </div>
  )
}
