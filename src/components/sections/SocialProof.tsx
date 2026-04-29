const stats = [
  { value: '10.000+', label: 'Geschulte Fachkräfte', desc: 'in ganz Deutschland' },
  { value: '98%', label: 'Abschlussquote', desc: 'nahezu jeder schließt ab' },
  { value: 'unter 10 Min', label: 'Ø Kursdauer', desc: 'kompakt und effizient' },
  { value: '47+', label: 'Kurse verfügbar', desc: 'alle Branchen abgedeckt' },
]

export function SocialProof() {
  return (
    <section className="bg-blue-600 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-white">{stat.value}</p>
              <p className="mt-1 text-blue-100 font-semibold text-sm">{stat.label}</p>
              <p className="text-blue-200 text-xs mt-0.5">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
