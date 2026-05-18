import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Kurs auswählen & starten',
    desc: 'Sofort online. Kein Download, keine Installation. Auf jedem Gerät — in unter 1 Minute einsatzbereit.',
  },
  {
    number: '02',
    title: 'Lektionen & Wissenstest',
    desc: 'Bei falschen Antworten: Hilfestellung und Frage wiederholen. Nahezu jede:r besteht auf Anhieb.',
  },
  {
    number: '03',
    title: 'Zertifikat sofort herunterladen',
    desc: 'PDF-Zertifikat direkt nach Abschluss. Automatisch in der Akte dokumentiert — Pflicht erfüllt.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24" style={{ background: '#eef2f8' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-3">So einfach geht&apos;s</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
            So kommen Sie heute zum Zertifikat
          </h2>
          <p className="text-[#64748b] max-w-xl mx-auto text-[0.95rem]">
            Kein Seminar, kein Termin, kein Papierkram. Einfach starten.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-0 mb-14">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-start md:items-center">

              {/* Number box + connector line */}
              <div className="flex items-center w-full mb-8">
                <div
                  className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#1d4ed8' }}
                >
                  <span className="text-white font-extrabold text-2xl leading-none">{step.number}</span>
                </div>
                {/* Connector line — visible between steps, hidden after last */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block flex-1 h-px mx-4"
                    style={{ background: '#cbd5e1' }}
                  />
                )}
              </div>

              {/* Text */}
              <div className="md:pr-8">
                <h3 className="font-bold text-[#0f172a] text-lg mb-2 leading-snug">{step.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{step.desc}</p>
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/testen"
            className="inline-flex items-center justify-center gap-2 text-white font-bold text-base px-8 py-4 rounded-[10px] transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: '#1d4ed8',
              boxShadow: '0 4px 14px rgba(29,78,216,0.35)',
            }}
          >
            Jetzt kostenlos testen →
          </Link>
        </div>

      </div>
    </section>
  )
}
