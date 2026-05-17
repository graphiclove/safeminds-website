const feedbacks = [
  {
    quote: 'Endlich auf Polnisch erklärt. Ich habe alles verstanden und bin sicher.',
    role: 'Bauhelfer',
    lang: '🇵🇱 Auf Polnisch absolviert',
  },
  {
    quote: 'War viel schneller als erwartet. 8 Minuten und fertig — sogar im Pausenraum möglich.',
    role: 'Lagerarbeiter',
    lang: '🇩🇪 Auf Deutsch absolviert',
  },
  {
    quote: 'Die Videos zeigen genau unsere Maschinen. Das ist nicht irgendein allgemeiner Kurs.',
    role: 'Produktionsmitarbeiterin',
    lang: '🇹🇷 Auf Türkisch absolviert',
  },
  {
    quote: 'Ich habe das Zertifikat sofort auf mein Handy bekommen. Das fand ich sehr gut.',
    role: 'Pflegefachkraft',
    lang: '🇩🇪 Auf Deutsch absolviert',
  },
  {
    quote: 'Endlich muss ich nicht mehr in eine Gruppenunterweisung. Das passt zu meinem Schichtplan.',
    role: 'Schichtarbeiter Produktion',
    lang: '🇷🇴 Auf Rumänisch absolviert',
  },
  {
    quote: 'Die Fragen waren fair. Wenn man falsch antwortet, wird es nochmal erklärt — kein Stress.',
    role: 'Reinigungskraft',
    lang: '🇩🇪 Auf Deutsch absolviert',
  },
]

export function EmployeeFeedback() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Mitarbeiterstimmen</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Was Mitarbeitende wirklich sagen
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm">
            Anonym — aus echten Abschlussbefragungen. Denn eine Unterweisung nützt nur, wenn sie auch verstanden wird.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {feedbacks.map((f, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-1">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className="text-yellow-400 text-base">★</span>
                ))}
              </div>
              {/* Quote */}
              <p className="text-gray-700 leading-relaxed flex-1 italic text-sm">
                &ldquo;{f.quote}&rdquo;
              </p>
              {/* Footer */}
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500">{f.role}</span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{f.lang}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Alle Zitate wurden anonym gesammelt und zur Veröffentlichung freigegeben.
        </p>
      </div>
    </section>
  )
}
