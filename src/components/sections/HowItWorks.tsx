const steps = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
      </svg>
    ),
    title: 'Kurs auswählen & starten',
    desc: 'Sofort online. Kein Download, keine Installation. Auf jedem Gerät.',
    time: '< 1 Minute',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    title: 'Lektionen & Wissenscheck',
    desc: 'Bei falschen Antworten: Hilfestellung, Frage wiederholen. Jede:r besteht.',
    time: '25–45 Minuten',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
    title: 'Zertifikat sofort herunterladen',
    desc: 'PDF-Zertifikat direkt nach Abschluss. Automatisch in der Akte dokumentiert.',
    time: 'Sofort',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24" style={{ background: '#f8fafc' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
            So kommen Sie heute zum Zertifikat
          </h2>
          <p className="mt-3 text-[#64748b] max-w-xl mx-auto text-base">
            Kein Seminar, kein Termin, kein Papierkram. Einfach starten.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map(step => (
            <div
              key={step.title}
              className="bg-white rounded-2xl p-7 border border-[#e2e8f0] flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-[#eff6ff] flex items-center justify-center mb-5">
                {step.icon}
              </div>
              <h3 className="text-sm font-bold text-[#0f172a] mb-2">{step.title}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed flex-1">{step.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-green-700">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
