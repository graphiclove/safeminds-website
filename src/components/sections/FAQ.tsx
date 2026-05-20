'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Ist SafeMinds rechtlich anerkannt?',
    a: 'Ja. Alle Kurse erfüllen §12 ArbSchG und DGUV Vorschrift 2. Die Zertifikate sind revisionssicher — bei Betriebsprüfungen anerkannt. Inhaltliche Änderungen durch neue Vorschriften nehmen wir laufend vor.',
  },
  {
    q: 'Was passiert nach dem kostenlosen Test?',
    a: 'Nach dem Anmelden bekommen Sie sofort Zugang zu einem vollständigen Kurs. Nach 14 Tagen entscheiden Sie — buchen oder nicht. Keine automatische Verlängerung, keine Kreditkarte nötig.',
  },
  {
    q: 'Wie funktioniert die Unterweisung konkret?',
    a: 'Sie laden Mitarbeiter per E-Mail ein. Die klicken den Link, schauen das Video, beantworten die Fragen und laden ihr Zertifikat herunter — alles in unter 20 Minuten, egal ob vom Handy oder PC.',
  },
  {
    q: 'Kann ich die Kurse individualisieren?',
    a: 'Ab dem Business-Paket produzieren wir Kurse mit Ihrem Logo, Ihren Prozessen und in jeder Sprache. Lieferzeit: 7–14 Werktage. Sprechen Sie uns direkt an.',
  },
  {
    q: 'Wie viele Mitarbeiter können gleichzeitig teilnehmen?',
    a: 'Je nach Paket zwischen 10 und 250+ Nutzern gleichzeitig. Enterprise-Kunden skalieren weiter. Sprechen Sie uns an, wenn Sie mehr brauchen.',
  },
  {
    q: 'Was kostet SafeMinds pro Mitarbeiter?',
    a: 'Zwischen € 2,99 und € 4,99 pro Mitarbeiter und Monat, je nach Paketgröße — jährlich abgerechnet. Details stehen in der Preisübersicht weiter oben auf dieser Seite.',
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
