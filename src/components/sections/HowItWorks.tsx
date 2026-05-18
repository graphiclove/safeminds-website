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

        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex items-stretch">
              {/* Card */}
              <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0] w-full flex flex-col">
                <span
                  className="font-black select-none leading-none mb-4"
                  style={{ fontSize: '4rem', color: '#bfdbfe' }}
                >
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">{step.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed flex-1">{step.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-green-700">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {step.time}
                </div>
              </div>

              {/* Arrow separator */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <svg className="h-5 w-5 text-[#cbd5e1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
