'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logos/Safeminds_white_Horizontal.png"
                alt="SafeMinds"
                width={140}
                height={35}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Rechtssichere Online-Unterweisungen Arbeitssicherheit für Betriebe ab 5 Mitarbeitenden.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Produkt */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produkt</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/kurse" className="hover:text-white transition-colors">Alle Kurse</Link></li>
              <li><Link href="/#pricing" className="hover:text-white transition-colors">Preise</Link></li>
              <li><Link href="/testen" className="hover:text-white transition-colors">Kostenlos testen</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Mein Bereich</Link></li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="text-white font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Demo anfragen</Link></li>
              <li><a href="mailto:kontakt@safeminds.eu" className="hover:text-white transition-colors">kontakt@safeminds.eu</a></li>
            </ul>
          </div>

          {/* Vergleiche */}
          <div>
            <h4 className="text-white font-semibold mb-4">Vergleiche</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/vergleich/unterweisung24" className="hover:text-white transition-colors">vs. Unterweisung24</Link></li>
              <li><Link href="/vergleich/weka" className="hover:text-white transition-colors">vs. WEKA</Link></li>
              <li><Link href="/vergleich/haufe" className="hover:text-white transition-colors">vs. Haufe</Link></li>
              <li><Link href="/vergleich/lms" className="hover:text-white transition-colors">vs. LMS-Plattformen</Link></li>
              <li><Link href="/vergleich/praesenzseminar" className="hover:text-white transition-colors">vs. Präsenzseminar</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Neuigkeiten zu Arbeitssicherheit und neuen Kursen.</p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {year} SafeMinds. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>

            <Link href="/agb" className="hover:text-white transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function NewsletterForm() {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const email = (form.elements.namedItem('email') as HTMLInputElement).value
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, form_source: 'footer-newsletter' }),
        })
        form.reset()
      }}
      className="flex gap-2"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="ihre@email.de"
        className="flex-1 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
      >
        →
      </button>
    </form>
  )
}
