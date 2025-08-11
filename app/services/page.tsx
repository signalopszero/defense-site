import { services } from '../../content/services'
import PillarCard from '../../components/PillarCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our radar systems, AI integration and aerospace/space engineering services.',
}

export default function ServicesPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Our Services</h1>
      <p className="text-muted text-center max-w-2xl mx-auto mb-12">
        We offer a comprehensive suite of engineering services spanning radar system design, AI integration and aerospace/space engineering.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {services.map((svc) => (
          <PillarCard
            key={svc.id}
            name={svc.name}
            description={svc.intro.split('.')[0] + '.'}
            href={`/services/${svc.slug}`}
            icon={svc.id === 'radar' ? 'radar' : svc.id === 'ai' ? 'ai' : 'aerospace'}
          />
        ))}
      </div>
    </section>
  )
}