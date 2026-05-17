'use client'

import Image from 'next/image'

const clients = [
  {
    name: 'Datadiorama',
    logo: '/images/logos/kunden/datadiorama.svg',
    type: 'svg' as const,
  },
  {
    name: 'Ihre Alltagsbegleiter',
    logo: '/images/logos/kunden/alltagsbegleiter.jpg',
    type: 'img' as const,
  },
  {
    name: 'Handwerk & Bau GmbH',
    logo: null,
    type: 'text' as const,
  },
  {
    name: 'Logistik Partner AG',
    logo: null,
    type: 'text' as const,
  },
  {
    name: 'Pflege & Care',
    logo: null,
    type: 'text' as const,
  },
  {
    name: 'Produktion GmbH',
    logo: null,
    type: 'text' as const,
  },
  {
    name: 'Bäckerei Müller',
    logo: null,
    type: 'text' as const,
  },
]

// Duplicate for seamless loop
const allClients = [...clients, ...clients]

export function ClientLogos() {
  return (
    <section className="bg-white border-y border-gray-100 py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest">
          Betriebe die SafeMinds vertrauen
        </p>
      </div>

      {/* Scrolling carousel */}
      <div className="relative">
        <div className="flex animate-marquee gap-12 items-center whitespace-nowrap">
          {allClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="inline-flex items-center justify-center flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
            >
              {client.type === 'svg' && (
                <Image
                  src={client.logo!}
                  alt={client.name}
                  width={130}
                  height={40}
                  className="h-9 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              )}
              {client.type === 'img' && (
                <Image
                  src={client.logo!}
                  alt={client.name}
                  width={150}
                  height={40}
                  className="h-9 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              )}
              {client.type === 'text' && (
                <div className="h-9 px-5 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-400">{client.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
