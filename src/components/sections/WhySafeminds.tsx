const features = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Rechtskonform & aktuell',
    desc: '§12 ArbSchG, DGUV V2 — alle Schulungen entsprechen den aktuellen gesetzlichen Anforderungen.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Bestanden-Garantie',
    desc: 'Bei falschen Antworten: Hilfestellung und Wiederholung. Nahezu 100 % Abschlussquote.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Mehrsprachig — kein Dolmetscher',
    desc: 'Unterweisungen auf Deutsch, Polnisch, Türkisch, Rumänisch u.v.m. — jeder Mitarbeiter versteht, was zu tun ist.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'Zertifikat sofort',
    desc: 'PDF-Download direkt nach Abschluss — rechtssicher, mit Datum und Kurs-Details.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Auf jedem Gerät',
    desc: 'Smartphone, Tablet, PC — Fortschritt wird automatisch gespeichert.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'In 3 Minuten startklar',
    desc: 'Kein IT-Projekt, keine Installation. Konto erstellen, Mitarbeiter einladen — fertig.',
  },
]

export function WhySafeminds() {
  return (
    <section className="py-24" style={{ background: '#f8fafc' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-3">Warum SafeMinds</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
            Gebaut für den deutschen Arbeitsschutz
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(f => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-7 border border-[#e8edf2] flex flex-col"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                style={{ background: '#eef2f7' }}
              >
                {f.icon}
              </div>
              <h3 className="font-semibold text-[#0f172a] text-[0.9rem] mb-2 leading-snug">{f.title}</h3>
              <p className="text-[0.85rem] text-[#64748b] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
