"use client"

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle: string
  cta1: { label: string; href: string }
  cta2?: { label: string; href: string }
  background?: string
}

/**
 * Reusable hero section with background image, heading, subheading and up to two CTAs.
 */
export default function Hero({ title, subtitle, cta1, cta2, background }: HeroProps) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <section className="relative overflow-hidden min-h-[60vh] flex items-center justify-center bg-primary text-foreground">
      {background && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={background}
            alt="Background graphic"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
            priority
          />
        </div>
      )}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center px-4 max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{title}</h1>
        <p className="text-lg sm:text-xl text-muted mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={cta1.href}
            className="inline-block px-6 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
          >
            {cta1.label}
          </Link>
          {cta2 && (
            <Link
              href={cta2.href}
              className="inline-block px-6 py-3 rounded-md border border-accent text-accent font-medium hover:bg-secondary/40 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
            >
              {cta2.label}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  )
}