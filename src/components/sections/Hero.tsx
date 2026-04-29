import { TrialForm } from '@/components/forms/TrialForm'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative bg-white pt-16 pb-24 overflow-hidden">
      {/* Hintergrund-Akzent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-50 blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Linke Spalte — Text + CTAs */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              §12 ArbSchG-konform · DGUV V2
            </span>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-gray-900 leading-tight tracking-tight">
              Online-Unterweisung{' '}
              <span className="text-blue-600">Arbeitssicherheit</span>{' '}
              — rechtssicher in unter&nbsp;10&nbsp;Minuten.
            </h1>

            {/* Subline */}
            <p className="text-lg text-gray-600 max-w-lg">
              Video + Wissenstest + Zertifikat in einem Durchlauf.
              Für Betriebe ab 5 Mitarbeitende — automatisch dokumentiert, kein Papierkram.
            </p>

            {/* Trust-Punkte */}
            <ul className="flex flex-col gap-2">
              {[
                'Bestanden-Garantie — jede:r schließt erfolgreich ab',
                'Mehrsprachig — Polnisch, Türkisch, Rumänisch u.v.m.',
                'Zertifikat sofort als PDF — revisionssicher archiviert',
              ].map(point => (
                <li key={point} className="flex items-center gap-2 text-gray-700 text-sm">
                  <svg className="h-4 w-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>

            {/* Trial-Formular */}
            <div className="mt-2">
              <TrialForm formSource="hero-trial" />
            </div>

            {/* Sekundärer CTA */}
            <div className="flex items-center gap-4 mt-1">
              <Link
                href="/kontakt"
                className="text-sm font-medium text-blue-600 hover:text-blue-700 underline underline-offset-2"
              >
                Demo anfragen →
              </Link>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-400">Über 200 Unternehmen vertrauen SafeMinds</span>
            </div>
          </div>

          {/* Rechte Spalte — Foto */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Fotos Landingpage/portrait-of-railway-technician-worker-in-safety-ve-2024-03-25-23-30-26-utc.jpg"
                  alt="Mitarbeiterin mit Sicherheitsausrüstung bei der Online-Unterweisung"
                  width={600}
                  height={700}
                  className="w-full h-[480px] object-cover object-center"
                  priority
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-2.5">
                <p className="text-xs text-gray-500">Abschlussquote</p>
                <p className="text-2xl font-bold text-green-600">98%</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-2.5">
                <p className="text-xs text-gray-500">Zertifikate ausgestellt</p>
                <p className="text-2xl font-bold text-blue-600">10.000+</p>
              </div>

              {/* Zertifikat Badge */}
              <div className="absolute bottom-12 right-0 translate-x-1/4 bg-blue-600 text-white rounded-xl shadow-xl px-4 py-3 text-center">
                <p className="text-xs text-blue-200">Abschluss in</p>
                <p className="text-lg font-bold">unter 10 Min.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
