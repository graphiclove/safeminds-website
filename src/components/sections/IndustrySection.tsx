'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const industries = [
  {
    name: 'Handwerk & Bau',
    title: 'Rechtssicher am Bau — Pflicht erfüllt',
    desc: 'Auf Baustellen gelten strenge Vorschriften. Mit SafeMinds unterweisen Sie Ihr Team branchenspezifisch zu Absturzsicherung, Lärm und Maschinensicherheit — in unter 10 Minuten, auf jedem Gerät.',
    points: [
      'Unterweisungen zu Absturz, Lärm, Maschinen',
      'Mehrsprachig für internationale Bauteams',
      'Zertifikat sofort als Nachweis bereit',
      'Automatische Dokumentation für Kontrollen',
    ],
    cta: 'Für Handwerk & Bau',
    photo: '/images/Fotos Landingpage/builder-putting-on-protective-gloves-wearing-safe-2023-11-27-05-26-13-utc.jpg',
  },
  {
    name: 'Pflege & Gesundheit',
    title: 'Sicher pflegen — Haftung ausschließen',
    desc: 'Pflegekräfte sind besonderen Belastungen ausgesetzt. SafeMinds bildet Ihr Personal zu Hygiene, Heben und Schichtarbeit aus — passend für jede Schicht, auch ohne PC.',
    points: [
      'Unterweisungen zu Hygiene, Heben, Infektionsschutz',
      'Nutzbar auf Smartphone — ideal im Schichtbetrieb',
      'DSGVO-konforme Dokumentation',
      'Nachweis bei Betriebsprüfungen sofort verfügbar',
    ],
    cta: 'Für Pflege & Gesundheit',
    photo: '/images/Fotos Landingpage/doctor-filling-form-2023-11-27-05-15-08-utc.jpg',
  },
  {
    name: 'Produktion & Industrie',
    title: 'Maschinensicherheit rechtssicher dokumentiert',
    desc: 'Gefahrstoffe, PSA-Pflicht, Maschinensicherheit — Produktionsbetriebe tragen hohe Verantwortung. SafeMinds stellt sicher, dass jeder Mitarbeiter nachweislich unterwiesen ist.',
    points: [
      'Kurse zu Maschinen, Gefahrstoffen, PSA',
      'Unterweisungen in mehreren Sprachen',
      'Integration in bestehende Onboarding-Prozesse',
      'Revisionssichere Ablage aller Zertifikate',
    ],
    cta: 'Für Produktion & Industrie',
    photo: '/images/Fotos Landingpage/engineer-wearing-safety-uniform-checking-and-inspe-2023-11-27-04-58-08-utc.jpg',
  },
  {
    name: 'Gastronomie & Hotel',
    title: 'Sicher in der Küche — HACCP & Arbeitsschutz',
    desc: 'Schnittverletzungen, Hygiene, Nachtarbeit — Gastronomie-Betriebe brauchen schnelle, praxisnahe Unterweisungen. SafeMinds passt sich Ihrem Schichtbetrieb an.',
    points: [
      'Kurse zu Hygiene, Schnittschutz, Brandschutz',
      'Ideal für saisonales und wechselndes Personal',
      'Mehrsprachig für internationale Teams',
      'Kein Seminar, kein Terminaufwand',
    ],
    cta: 'Für Gastronomie & Hotel',
    photo: '/images/Fotos Landingpage/portrait-of-male-worker-in-bakery-2023-11-27-05-30-31-utc-LR.jpg',
  },
  {
    name: 'Büro & Verwaltung',
    title: 'Bildschirmarbeit und Ergonomie — gesetzeskonform',
    desc: 'Auch Büroarbeitsplätze sind meldepflichtig. SafeMinds erfüllt §12 ArbSchG für Bildschirmarbeit, Stressmanagement und ergonomische Gefährdungen — ohne Ausfallzeiten.',
    points: [
      'Kurse zu Ergonomie, Bildschirm, Stress',
      'Kein Ausfall — Unterweisung in der Mittagspause',
      'Automatische Erinnerungen für Folgeunterweisungen',
      'Zentrale Verwaltung für alle Standorte',
    ],
    cta: 'Für Büro & Verwaltung',
    photo: '/images/Fotos Landingpage/hand-adjustment-ergonomic-electric-desk-or-adjusta-2023-11-27-05-17-14-utc.jpg',
  },
  {
    name: 'Logistik & Transport',
    title: 'Stapler, Ladung, Verkehrssicherheit — alles abgedeckt',
    desc: 'Logistikbetriebe stehen unter besonderem Druck. SafeMinds bildet Fahrer, Lageristen und Disponenten schnell und rechtssicher aus — auch für wechselnde Mitarbeiter.',
    points: [
      'Kurse zu Stapler, Ladungssicherung, Fahrsicherheit',
      'Für Zeitarbeiter und Wechselpersonal geeignet',
      'Sofortzertifikat für tägliche Kontrollen',
      'Mehrsprachig — ideal für internationale Teams',
    ],
    cta: 'Für Logistik & Transport',
    photo: '/images/Fotos Landingpage/engineer-technician-with-safety-uniform-working-at-2023-11-27-05-17-04-utc.jpg',
  },
]

export function IndustrySection() {
  const [active, setActive] = useState(0)
  const current = industries[active]

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-3">Branchenspezifisch</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
            Für jede Branche die passende Lösung
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((ind, i) => (
            <button
              key={ind.name}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                active === i
                  ? 'border-[#3b82f6] text-[#3b82f6] bg-white shadow-sm'
                  : 'border-transparent text-[#64748b] hover:text-[#0f172a]'
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-4 leading-tight">
              {current.title}
            </h3>
            <p className="text-[#64748b] text-base leading-relaxed mb-7">
              {current.desc}
            </p>
            <ul className="space-y-3 mb-8">
              {current.points.map(p => (
                <li key={p} className="flex items-start gap-3 text-sm text-[#334155]">
                  <svg className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href="/kurse"
              className="text-[#3b82f6] font-semibold text-sm hover:text-[#1d4ed8] transition-colors"
            >
              {current.cta} →
            </Link>
          </div>

          {/* Right: photo */}
          <div className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden">
            <Image
              key={current.photo}
              src={current.photo}
              alt={current.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
