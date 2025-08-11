import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Explore career opportunities and learn about our values and culture.',
}

export default function CareersPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <h1 className="text-4xl font-bold text-foreground mb-6 text-center">Careers</h1>
      <div className="max-w-3xl mx-auto space-y-4 text-muted">
        <p>
          We are mission‑driven, collaborative and committed to excellence. We foster diversity and
          continuous learning, ensuring that every team member has the tools to make an impact.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-4 text-center">Typical Roles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 border border-white/10 rounded-lg bg-secondary/60">
            <h3 className="text-lg font-semibold text-foreground mb-1">Radar Systems Engineer</h3>
            <p className="text-muted text-sm">Design and prototype radar hardware, simulate waveforms and integrate sensors.</p>
          </div>
          <div className="p-4 border border-white/10 rounded-lg bg-secondary/60">
            <h3 className="text-lg font-semibold text-foreground mb-1">Machine Learning Engineer</h3>
            <p className="text-muted text-sm">Develop ML models for detection, classification and control in resource‑constrained environments.</p>
          </div>
          <div className="p-4 border border-white/10 rounded-lg bg-secondary/60">
            <h3 className="text-lg font-semibold text-foreground mb-1">Aerospace Engineer</h3>
            <p className="text-muted text-sm">Perform structural and thermal analyses, design propulsion systems and support integration.</p>
          </div>
          <div className="p-4 border border-white/10 rounded-lg bg-secondary/60">
            <h3 className="text-lg font-semibold text-foreground mb-1">Program Manager</h3>
            <p className="text-muted text-sm">Coordinate projects, manage schedules and budgets, and serve as the client interface.</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-muted mb-4">If you’re passionate about advancing defence and space technology, send your resume and a brief cover letter to <a href="mailto:[[PLACEHOLDER_EMAIL]]" className="text-accent underline">[[PLACEHOLDER_EMAIL]]</a>.</p>
      </div>
    </section>
  )
}