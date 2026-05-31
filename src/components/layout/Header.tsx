import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/Safeminds_blue_black.png"
            alt="SafeMinds"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Nav Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/kurse" className="hover:text-blue-600 transition-colors">Kurse</Link>
          <Link href="/onboarding" className="hover:text-blue-600 transition-colors">Onboarding</Link>
          <Link href="/#pricing" className="hover:text-blue-600 transition-colors">Preise</Link>
          <Link href="/kontakt" className="hover:text-blue-600 transition-colors">Kontakt</Link>
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="https://app.safeminds.eu/login/"
            className="hidden sm:block text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            Login
          </a>
          <Link
            href="/anfrage"
            className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 transition-colors"
          >
            14 Tage kostenlos testen
          </Link>
        </div>
      </div>
    </header>
  )
}
