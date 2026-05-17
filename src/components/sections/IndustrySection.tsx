import Image from 'next/image'
import Link from 'next/link'

const industries = [
  {
    name: 'Handwerk & Bau',
    tags: 'Lärm, Absturz, Maschinen',
    photo: '/images/Fotos Landingpage/builder-putting-on-protective-gloves-wearing-safe-2023-11-27-05-26-13-utc.jpg',
  },
  {
    name: 'Pflege & Gesundheit',
    tags: 'Hygiene, Heben, Schichtarbeit',
    photo: '/images/Fotos Landingpage/doctor-filling-form-2023-11-27-05-15-08-utc.jpg',
  },
  {
    name: 'Produktion & Industrie',
    tags: 'Maschinen, Gefahrstoffe, PSA',
    photo: '/images/Fotos Landingpage/engineer-wearing-safety-uniform-checking-and-inspe-2023-11-27-04-58-08-utc.jpg',
  },
  {
    name: 'Gastronomie & Hotel',
    tags: 'Hygiene, Nachtarbeit, Schnitt',
    photo: '/images/Fotos Landingpage/portrait-of-male-worker-in-bakery-2023-11-27-05-30-31-utc-LR.jpg',
  },
  {
    name: 'Büro & Verwaltung',
    tags: 'Ergonomie, Bildschirm, Stress',
    photo: '/images/Fotos Landingpage/hand-adjustment-ergonomic-electric-desk-or-adjusta-2023-11-27-05-17-14-utc.jpg',
  },
  {
    name: 'Logistik & Transport',
    tags: 'Stapler, Ladung, Fahrzeuge',
    photo: '/images/Fotos Landingpage/engineer-technician-with-safety-uniform-working-at-2023-11-27-05-17-04-utc.jpg',
  },
]

export function IndustrySection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Branchenspezifisch</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Für jede Branche die passende Lösung
            </h2>
            <p className="mt-3 text-gray-500 max-w-lg">
              Jede Branche hat eigene Gefährdungen — SafeMinds berücksichtigt sie alle.
            </p>
          </div>
          <Link href="/kurse" className="shrink-0 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors whitespace-nowrap">
            Alle Kurse ansehen →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map(ind => (
            <div key={ind.name} className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={ind.photo}
                  alt={ind.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-1">{ind.name}</h3>
                <p className="text-sm text-gray-400">{ind.tags}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
