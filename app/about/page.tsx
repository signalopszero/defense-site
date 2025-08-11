import { company } from '../../content/company'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission, leadership, locations and partnerships.',
}

export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <h1 className="text-4xl font-bold text-foreground mb-6 text-center">About Us</h1>
      <div className="max-w-3xl mx-auto space-y-4 text-muted text-center">
          <p>{company.mission}</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-4 text-center">Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Leadership bios use placeholders that should be replaced with real data */}
          <div className="p-4 border border-white/10 rounded-lg bg-secondary/60">
            <h3 className="text-lg font-semibold text-foreground mb-1">[[Name 1]]</h3>
            <p className="text-muted text-sm mb-1">Founder &amp; Chief Executive Officer</p>
            <p className="text-muted text-sm">[[Bio placeholder: e.g., 20+ years designing radar and guidance systems for defence clients. Former program manager at [[Institution]]. Holds a Ph.D. in Electrical Engineering.]]</p>
          </div>
          <div className="p-4 border border-white/10 rounded-lg bg-secondary/60">
            <h3 className="text-lg font-semibold text-foreground mb-1">[[Name 2]]</h3>
            <p className="text-muted text-sm mb-1">Chief Technology Officer</p>
            <p className="text-muted text-sm">[[Bio placeholder: e.g., Expert in AI/ML integration for embedded systems. Led development of autonomous navigation algorithms for NASA missions. M.S. in Computer Science.]]</p>
          </div>
          <div className="p-4 border border-white/10 rounded-lg bg-secondary/60">
            <h3 className="text-lg font-semibold text-foreground mb-1">[[Name 3]]</h3>
            <p className="text-muted text-sm mb-1">Chief Engineer / Advisor</p>
            <p className="text-muted text-sm">[[Bio placeholder: e.g., Veteran aerospace engineer with experience in propulsion and spacecraft design. Formerly at [[Company]].]]</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Locations</h3>
          <ul className="list-disc list-inside text-muted space-y-2">
            {company.locations.map((loc, idx) => (
              <li key={idx}>{loc}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Partnerships</h3>
          <ul className="list-disc list-inside text-muted space-y-2">
            {company.partnerships.map((partner, idx) => (
              <li key={idx}>{partner}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}