import { TrialForm } from '@/components/forms/TrialForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kostenlos testen — SafeMinds',
  description: 'Jetzt 14 Tage kostenlos testen. Kein Kreditkarte, keine automatische Verlängerung.',
}

export default function TestenPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
      <div className="max-w-lg w-full">
        <div className="text-center mb-10">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            14 Tage kostenlos
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Jetzt kostenlos starten
          </h1>
          <p className="text-gray-600 text-lg">
            Geben Sie Ihre E-Mail-Adresse ein — Sie erhalten sofort einen Magic Link zum Einloggen.
            Keine Kreditkarte, keine automatische Verlängerung.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <TrialForm
            formSource="page-trial"
            buttonText="Testzugang erhalten →"
            placeholder="ihre@firma.de"
          />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          {['Kein Kreditkarte nötig', 'Sofortiger Zugang', '§12 ArbSchG-konform'].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="text-green-500">✓</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </main>
  )
}
