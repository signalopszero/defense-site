"use client"

import Hero from '../components/Hero'
import PillarCard from '../components/PillarCard'
import ProcessSteps from '../components/ProcessSteps'
import { services } from '../content/services'
import { ClipboardList, Wrench, Rocket as RocketIcon } from 'lucide-react'

export default function HomePage() {
  // Define process steps with icons
  const steps = [
    {
      title: 'Consult',
      description: 'We begin with a deep understanding of your mission, requirements and constraints.',
      icon: <ClipboardList className="h-8 w-8 text-accent" />,
    },
    {
      title: 'Engineer',
      description: 'Our cross‑disciplinary team designs and prototypes solutions using proven methodologies.',
      icon: <Wrench className="h-8 w-8 text-accent" />,
    },
    {
      title: 'Deliver',
      description: 'We integrate, test and support deployment to ensure mission success.',
      icon: <RocketIcon className="h-8 w-8 text-accent" />,
    },
  ]
  return (
    <>
      <Hero
        title="Precision Radar, Intelligent AI, and Aerospace Engineering"
        subtitle="We design, integrate and deploy advanced sensing and autonomy solutions for defence and space. Trusted by government agencies and industry partners."
        cta1={{ label: 'Explore Services', href: '/services' }}
        cta2={{ label: 'Request Information', href: '/contact' }}
        background="/assets/thumb-1.jpg"
      />
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Expertise</h2>
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
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Us?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-accent">20+</span>
              <p className="text-muted">Years combined experience</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-accent">50+</span>
              <p className="text-muted">Delivered systems</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-accent">100%</span>
              <p className="text-muted">On‑time delivery</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">How We Work</h2>
          <ProcessSteps steps={steps} />
        </div>
        <div className="text-center">
          <a
            href="/case-studies"
            className="inline-block px-6 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
          >
            View Case Studies
          </a>
        </div>
      </section>
    </>
  )
}