import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms and conditions governing use of this website.',
}

export default function TermsPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
      <p className="text-muted">
        By accessing or using this website, you agree to be bound by these terms and conditions. If you do not agree
        with any part of these terms, please do not use our site.
      </p>
      <h2 className="text-2xl font-semibold text-foreground mt-6">Use of Site</h2>
      <p className="text-muted">
        The content provided on this site is for general informational purposes only. You may not reproduce, distribute
        or create derivative works from our content without our express written consent.
      </p>
      <h2 className="text-2xl font-semibold text-foreground mt-6">Disclaimer</h2>
      <p className="text-muted">
        We strive to ensure that the information on our site is accurate and up to date, but we make no warranties or
        representations regarding its completeness or suitability. Your use of the site is at your own risk.
      </p>
      <h2 className="text-2xl font-semibold text-foreground mt-6">Limitation of Liability</h2>
      <p className="text-muted">
        In no event shall [[COMPANY_NAME]] or its affiliates be liable for any indirect, incidental, special,
        consequential or punitive damages arising out of or related to your use of this website.
      </p>
      <h2 className="text-2xl font-semibold text-foreground mt-6">Governing Law</h2>
      <p className="text-muted">
        These terms are governed by and construed in accordance with the laws of the United States and the State in which
        the company is headquartered, without regard to its conflict of law principles.
      </p>
    </section>
  )
}