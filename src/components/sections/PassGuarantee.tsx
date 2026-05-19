import Image from 'next/image'
import { Icon, type IconName } from '@/components/ui/Icon'

export function PassGuarantee() {
  return (
    <section id="zertifikat" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Certificate preview */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              <Image
                src="/images/certificates/zertifikat-beispiel-1.png"
                alt="SafeMinds Zertifikat Beispiel"
                width={800}
                height={566}
                className="w-full h-auto"
                priority={false}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              Rechtsgültig & revisionssicher
            </div>
            <div className="absolute -top-4 -left-4 bg-white border border-gray-200 rounded-xl shadow-md px-4 py-2 text-center">
              <div className="text-2xl font-extrabold text-blue-600">98%</div>
              <div className="text-xs text-gray-500">Abschlussquote</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-3">
              Bestanden-Garantie
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Jede Unterweisung endet mit Zertifikat — garantiert.
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Jeder Mitarbeitende erhält nach Abschluss ein rechtsgültiges, revisionssicheres
              Zertifikat — unterzeichnet von unserem Sicherheitsingenieur Eric Ohlers,
              Fachkraft für Arbeitssicherheit. Kein Papierkram, jederzeit abrufbar.
            </p>
            <div className="space-y-5">
              {[
                {
                  icon: 'file-text' as IconName,
                  title: 'PDF-Zertifikat sofort verfügbar',
                  text: 'Nach Kursabschluss automatisch generiert und per E-Mail zugestellt.',
                },
                {
                  icon: 'folder' as IconName,
                  title: 'Digitales Archiv für die Prüfung',
                  text: 'Alle Nachweise zentral gespeichert — revisionssicher nach §12 ArbSchG und DGUV V2.',
                },
                {
                  icon: 'bell' as IconName,
                  title: 'Automatische Erinnerungen',
                  text: 'Rechtzeitige Hinweise, wenn Unterweisungen erneuert werden müssen.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0 text-[#1d4ed8]"><Icon name={item.icon} size={24} /></div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
