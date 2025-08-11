"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sun, Moon } from 'lucide-react'

/**
 * Primary site header with navigation and theme toggle.
 */
export default function Header() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'dark'
    const stored = window.localStorage.getItem('theme') as 'light' | 'dark' | null
    return stored ?? 'dark'
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme, mounted])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/contracting', label: 'Contracting' },
    { href: '/about', label: 'About' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact', cta: true },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-primary/80 dark:bg-primary/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/" className="text-foreground font-semibold text-lg">
          {/* Company name placeholder; update when real name is provided */}
          [[COMPANY_NAME]]
        </Link>
        <nav className="flex items-center space-x-4">
          {navLinks.map(({ href, label, cta }) => (
            <Link
              key={href}
              href={href}
              className={`hidden sm:inline-block px-3 py-1 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
                pathname === href ? 'bg-secondary text-foreground' : 'text-foreground/80 hover:text-foreground'
              } ${cta ? 'bg-accent text-white hover:bg-accent/90' : ''}`}
            >
              {label}
            </Link>
          ))}
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className="p-2 rounded-md hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-foreground" />
            ) : (
              <Moon className="h-5 w-5 text-foreground" />
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}