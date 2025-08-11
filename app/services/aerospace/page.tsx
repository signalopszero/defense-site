import { services } from '../../../content/services'
import Image from 'next/image'
import { Metadata } from 'next'

const aerospace = services.find((s) => s.id === 'aerospace')!

export const metadata: Metadata = {
  title: aerospace.name,
  description: aerospace.intro,
}

export default function AerospacePage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
      <h1 className="text-4xl font-bold text-foreground mb-4">{aerospace.name}</h1>
      <p className="text-muted mb-8">{aerospace.intro}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-2">What we do</h2>
          <ul className="list-disc list-inside space-y-2 text-muted">
            {aerospace.what.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold text-foreground mt-6 mb-2">How we work</h2>
          <ul className="list-disc list-inside space-y-2 text-muted">
            {aerospace.how.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold text-foreground mt-6 mb-2">Outcomes</h2>
          <ul className="list-disc list-inside space-y-2 text-muted">
            {aerospace.outcomes.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="relative w-full h-64 md:h-auto">
          <Image
            src={aerospace.image}
            alt="Aerospace service illustration"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}