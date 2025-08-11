import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Export & Compliance Notice',
  description: 'Important information regarding ITAR/EAR and handling of sensitive data.',
}

export default function CompliancePage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-4xl font-bold text-foreground mb-4">Export & Compliance Notice</h1>
      <p className="text-muted">
        This website is intended for informational purposes only. Some services offered may involve technologies subject
        to United States export control laws, including the International Traffic in Arms Regulations (ITAR) and the
        Export Administration Regulations (EAR). Do not submit classified, controlled or other sensitive technical
        information through this site.
      </p>
      <p className="text-muted">
        By using this website you acknowledge that you are responsible for compliance with applicable export control
        laws and regulations. If you have questions regarding export compliance or require assistance transmitting
        sensitive data, please contact us directly at <a href="mailto:[[PROCUREMENT_EMAIL]]" className="text-accent underline">[[PROCUREMENT_EMAIL]]</a>.
      </p>
    </section>
  )
}