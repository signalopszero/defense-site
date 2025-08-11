import { caseStudies } from '../../content/caseStudies'
import CaseCard from '../../components/CaseCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Explore representative case studies demonstrating our impact across radar, AI and aerospace engineering projects.',
}

export default function CaseStudiesPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <h1 className="text-4xl font-bold text-foreground mb-4 text-center">Case Studies</h1>
      <p className="text-muted text-center max-w-3xl mx-auto mb-8">
        A selection of projects that highlight how we solve complex engineering challenges for government and industry clients.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((cs) => (
          <CaseCard
            key={cs.id}
            title={cs.title}
            problem={cs.problem}
            approach={cs.approach}
            impact={cs.impact}
          />
        ))}
      </div>
      <div className="text-center">
        <a
          href="/contact"
          className="inline-block mt-8 px-6 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
        >
          Discuss your project
        </a>
      </div>
    </section>
  )
}