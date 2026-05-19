import { Icon, type IconName } from '@/components/ui/Icon'

const badges: { icon: IconName; label: string; sub: string }[] = [
  {
    icon: 'file-text',
    label: '§12 ArbSchG',
    sub: 'Rechtskonform',
  },
  {
    icon: 'shield',
    label: 'DGUV V2',
    sub: 'Zertifiziert',
  },
  {
    icon: 'lock',
    label: 'DSGVO',
    sub: 'Server in Deutschland',
  },
  {
    icon: 'map-pin',
    label: 'Made in Germany',
    sub: 'Entwickelt & gehostet',
  },
  {
    icon: 'check-circle',
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
              <Icon name={b.icon} size={20} className="text-[#1d4ed8]" />
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
