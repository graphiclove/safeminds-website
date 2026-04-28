'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Ist SafeMinds rechtlich anerkannt?',
    a: 'Ja. Alle Unterweisungen erfüllen die Anforderungen des §12 ArbSchG und der DGUV Vorschrift 2. Die Zertifikate sind revisionssicher und werden bei Betriebsprüfungen anerkannt. Wir aktualisieren die Inhalte laufend, wenn sich Vorschriften ändern.',
  },
  {
    q: 'Was passiert nach dem kostenlosen Test?',
    a: 'Sie erhalten sofort Zugang zu einem vollständigen Demo-Kurs. Nach 14 Tagen können Sie entscheiden, ob Sie ein Paket buchen möchten. Es gibt keine automatische Verlängerung und keine Kreditkarte wird benötigt.',
  },
  {
    q: 'Wie funktioniert die Unterweisung konkret?',
    a: 'Sie laden Ihre Mitarbeitenden per E-Mail ein. Diese klicken den Link, schauen das Video, beantworten Verständnisfragen und erhalten sofort ihr Zertifikat — alles in unter 30 Minuten, vom Handy oder Computer.',
  },
  {
    q: 'Kann ich die Kurse individualisieren?',
    a: 'Ja, ab dem Business-Paket. Wir produzieren auf Wunsch Kurse mit Ihrem Logo, Ihren Prozessen und in Ihrer Sprache. Die Lieferzeit beträgt 5–10 Werktage. Sprechen Sie uns auf individuellen Bedarf an.',
  },
  {
    q: 'Wie viele Mitarbeiter können gleichzeitig teilnehmen?',
    a: 'Unbegrenzt. Sie laden so viele Mitarbeitende ein wie Sie möchten. Abgerechnet wird nach abgeschlossenen Kursen — Sie zahlen nur, was wirklich genutzt wurde.',
  },
  {
    q: 'Was kostet SafeMinds pro Mitarbeiter?',
    a: 'Ab € 4,90 pro Kurs und Mitarbeiter. Beim Business-Paket (€ 79/Monat) fallen keine Kosten pro Teilnehmer an — unbegrenzte Nutzung für Ihr gesamtes Team. Details finden Sie in unserer Preisübersicht.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Häufige Fragen
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span className="text-gray-400 shrink-0 text-xl leading-none">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
