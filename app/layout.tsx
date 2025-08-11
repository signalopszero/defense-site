import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: {
    default: '[[COMPANY_NAME]] | Precision Radar, AI & Aerospace Engineering',
    template: '%s | [[COMPANY_NAME]]',
  },
  description:
    '[[COMPANY_NAME]] designs, integrates and deploys advanced radar, AI and aerospace engineering solutions for defence and space missions.',
  openGraph: {
    title: '[[COMPANY_NAME]]',
    description:
      'Precision radar, intelligent AI and aerospace engineering for mission‑critical applications.',
    images: [
      {
        url: '/assets/og.png',
        width: 1200,
        height: 630,
        alt: '[[COMPANY_NAME]]',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '[[COMPANY_NAME]]',
    description:
      'Precision radar, intelligent AI and aerospace engineering for mission‑critical applications.',
    images: ['/assets/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-primary text-foreground">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}