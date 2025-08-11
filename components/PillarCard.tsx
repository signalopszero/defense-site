import Link from 'next/link'
import { Satellite, Brain, Rocket } from 'lucide-react'

interface PillarProps {
  name: string
  description: string
  href: string
  icon: 'radar' | 'ai' | 'aerospace'
}

/**
 * Card representing a key pillar/service on the homepage.
 */
export default function PillarCard({ name, description, href, icon }: PillarProps) {
  const IconComponent = () => {
    switch (icon) {
      case 'radar':
        return <Satellite className="h-8 w-8 text-accent" />
      case 'ai':
        return <Brain className="h-8 w-8 text-accent" />
      case 'aerospace':
      default:
        return <Rocket className="h-8 w-8 text-accent" />
    }
  }
  return (
    <Link
      href={href}
      className="flex flex-col h-full p-6 rounded-lg border border-white/10 bg-secondary/60 hover:bg-secondary/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div className="mb-4">
        <IconComponent />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{name}</h3>
      <p className="text-sm text-muted flex-1">{description}</p>
      <span className="mt-4 text-accent text-sm font-medium">Learn more →</span>
    </Link>
  )
}