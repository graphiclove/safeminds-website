const badges = [
  {
    icon: '⚖️',
    label: '§12 ArbSchG',
    sub: 'Rechtskonform',
  },
  {
    icon: '🛡️',
    label: 'DGUV V2',
    sub: 'Zertifiziert',
  },
  {
    icon: '🔒',
    label: 'DSGVO',
    sub: 'Server in Deutschland',
  },
  {
    icon: '🇩🇪',
    label: 'Made in Germany',
    sub: 'Entwickelt & gehostet',
  },
  {
    icon: '✅',
    label: 'GDA-konform',
    sub: 'Gemeinsame Deutsche Arbeitsschutzstrategie',
  },
]

export function TrustBadges() {
  return (
    <section className="bg-white border-b border-gray-100 py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {badges.map(b => (
            <div key={b.label} className="flex items-center gap-2">
              <span className="text-xl">{b.icon}</span>
              <div>
                <span className="text-xs font-bold text-gray-800">{b.label}</span>
                <span className="text-xs text-gray-400 ml-1">{b.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
