const steps = [
  {
    number: '01',
    title: 'Kurs auswählen & starten',
    desc: 'Sofort online. Kein Download, keine Installation. Auf jedem Gerät.',
    time: '< 1 Minute',
  },
  {
    number: '02',
    title: 'Lektionen & Wissenscheck',
    desc: 'Bei falschen Antworten: Hilfestellung, Frage wiederholen. Jede:r besteht.',
    time: '25–45 Minuten',
  },
  {
    number: '03',
    title: 'Zertifikat sofort herunterladen',
    desc: 'PDF-Zertifikat direkt nach Abschluss. Automatisch in der Akte dokumentiert.',
    time: 'Sofort',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            So kommen Sie heute zum Zertifikat
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Kein Seminar, kein Termin, kein Papierkram. Einfach starten.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-3 z-10">
                  <svg className="h-6 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
              <span className="text-5xl font-black text-blue-100 select-none">{step.number}</span>
              <h3 className="mt-2 text-lg font-bold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {step.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
