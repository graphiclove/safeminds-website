import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mein Dashboard — SafeMinds',
}

export default function DashboardPage() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Willkommen zurück!</h1>
          <p className="text-gray-500">Ihr Testzeitraum läuft noch 14 Tage.</p>
        </div>

        {/* Trial banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="font-semibold text-gray-900 mb-1">Sie testen SafeMinds kostenlos</h2>
            <p className="text-sm text-gray-600">
              Im Testzugang ist 1 Demo-Kurs freigeschaltet. Upgrade für unbegrenzten Zugang.
            </p>
          </div>
          <Link
            href="/#pricing"
            className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Jetzt upgraden →
          </Link>
        </div>

        {/* Demo course */}
        <h2 className="text-lg font-bold text-gray-900 mb-4">Meine Kurse</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-full">Demo</span>
              <span className="text-sm text-gray-500">⏱ 25 Min.</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Brandschutzunterweisung</h3>
            <p className="text-sm text-gray-500 mb-5">Brandverhütung · Verhalten im Brandfall · Feuerlöscher</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-blue-600 h-2 rounded-full w-0" />
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
              Kurs starten →
            </button>
          </div>

          {/* Locked placeholder */}
          {[2, 3].map((i) => (
            <div key={i} className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-6 opacity-60">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-gray-200 text-gray-500 text-xs font-bold px-2 py-1 rounded-full">🔒 Gesperrt</span>
              </div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-200 rounded w-1/2 mb-5" />
              <Link
                href="/#pricing"
                className="block w-full text-center border border-gray-300 text-gray-500 font-semibold py-3 rounded-xl text-sm hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                Upgrade zum Freischalten
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
