import Image from 'next/image'

const clients = [
  {
    name: 'Datadiorama',
    logo: '/images/logos/kunden/datadiorama.svg',
    type: 'svg',
    url: 'https://datadiorama.com',
  },
  {
    name: 'Ihre Alltagsbegleiter',
    logo: '/images/logos/kunden/alltagsbegleiter.jpg',
    type: 'img',
    url: 'https://ihre-alltagsbegleiter.de',
  },
  {
    name: 'Handwerk & Bau GmbH',
    logo: null,
    type: 'placeholder',
    sector: 'Handwerk',
  },
  {
    name: 'Logistik Partner AG',
    logo: null,
    type: 'placeholder',
    sector: 'Logistik',
  },
  {
    name: 'Pflege & Care',
    logo: null,
    type: 'placeholder',
    sector: 'Pflege',
  },
  {
    name: 'Produktion GmbH',
    logo: null,
    type: 'placeholder',
    sector: 'Produktion',
  },
]

export function ClientLogos() {
  return (
    <section className="bg-gray-50 py-12 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Betriebe die SafeMinds vertrauen
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clients.map(client => (
            <div key={client.name} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              {client.type === 'svg' && (
                <Image
                  src={client.logo!}
                  alt={client.name}
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              )}
              {client.type === 'img' && (
                <Image
                  src={client.logo!}
                  alt={client.name}
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              )}
              {client.type === 'placeholder' && (
                <div className="h-10 px-5 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-sm font-semibold text-gray-400">{client.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">
          + weitere Betriebe aus Bau, Logistik, Pflege und Produktion
        </p>
      </div>
    </section>
  )
}
