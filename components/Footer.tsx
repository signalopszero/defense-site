import Link from 'next/link'

/**
 * Site footer with copyright and legal links.
 */
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 mt-12 py-6 text-sm bg-primary/90 text-foreground/60">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <span>&copy; {year} [[COMPANY_NAME]]. All rights reserved.</span>
        <div className="flex space-x-4">
          <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
          <span>|</span>
          <Link href="/terms" className="hover:text-foreground">Terms</Link>
          <span>|</span>
          <Link href="/compliance" className="hover:text-foreground">Compliance</Link>
        </div>
      </div>
    </footer>
  )
}