import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fast geschafft! — SafeMinds',
}

export default function DankePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">✉️</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Bitte check deine E-Mails!
        </h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Wir haben dir einen Magic Link geschickt. Klick ihn an — du bist sofort eingeloggt, ohne Passwort.
          Der Link ist 15 Minuten gültig.
        </p>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 text-left mb-8 space-y-4">
          <h2 className="font-semibold text-gray-900">Was passiert als nächstes?</h2>
          {[
            { step: '1', text: 'E-Mail öffnen und auf den Link klicken' },
            { step: '2', text: 'Du bist sofort in deinem SafeMinds-Dashboard' },
            { step: '3', text: 'Demo-Kurs starten und Zertifikat erhalten' },
          ].map((item) => (
            <div key={item.step} className="flex gap-3 items-start">
              <span className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                {item.step}
              </span>
              <span className="text-gray-600 pt-0.5">{item.text}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Keine E-Mail erhalten? Überprüfe deinen Spam-Ordner oder{' '}
          <Link href="/testen" className="text-blue-600 underline">versuche es erneut</Link>.
        </p>

        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          ← Zurück zur Startseite
        </Link>
      </div>
    </main>
  )
}
