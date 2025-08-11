
interface Step {
  title: string
  description: string
  icon: React.ReactNode
}

interface ProcessStepsProps {
  steps: Step[]
}

/**
 * Display a horizontal or vertical list of process steps.
 */
export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {steps.map((step, idx) => (
        <div key={idx} className="flex-1 p-4 rounded-lg border border-white/10 bg-secondary/60">
          <div className="mb-3">{step.icon}</div>
          <h4 className="text-lg font-semibold text-foreground mb-1">{step.title}</h4>
          <p className="text-sm text-muted">{step.description}</p>
        </div>
      ))}
    </div>
  )
}