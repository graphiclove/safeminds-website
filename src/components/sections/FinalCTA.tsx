import { TrialForm } from '@/components/forms/TrialForm'

export function FinalCTA() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          Starten Sie heute — kostenlos & ohne Risiko.
        </h2>
        <p className="text-gray-400 max-w-lg text-lg">
          14 Tage gratis. Keine Kreditkarte. Monatlich kündbar.
          Ihr Team ist in 30 Minuten zertifiziert.
        </p>
        <div className="w-full max-w-md">
          <TrialForm formSource="final-cta" buttonText="Jetzt kostenlos testen" />
        </div>
        <p className="text-gray-500 text-sm">
          Über 200 Unternehmen schulen ihre Mitarbeitenden bereits mit SafeMinds.
        </p>
      </div>
    </section>
  )
}
