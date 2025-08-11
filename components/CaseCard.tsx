interface CaseCardProps {
  title: string
  problem: string
  approach: string
  impact: string
}

export default function CaseCard({ title, problem, approach, impact }: CaseCardProps) {
  return (
    <article className="p-6 rounded-lg border border-white/10 bg-secondary/60 flex flex-col">
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <div className="text-sm text-muted mb-2">
        <strong className="text-foreground">Problem:</strong> {problem}
      </div>
      <div className="text-sm text-muted mb-2">
        <strong className="text-foreground">Approach:</strong> {approach}
      </div>
      <div className="text-sm text-muted">
        <strong className="text-foreground">Impact:</strong> {impact}
      </div>
    </article>
  )
}