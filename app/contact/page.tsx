import { Metadata } from 'next'
import ContactForm from '../../components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with our team for business and procurement inquiries.',
}

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold text-foreground mb-4 text-center">Contact Us</h1>
      <p className="text-muted text-center mb-8">
        We welcome inquiries from government agencies, industry partners and prospective team members. Please provide
        your contact information and a brief message—our team will respond promptly.
      </p>
      <ContactForm />
      <div className="text-muted text-sm mt-8">
        <p>
          Alternatively, you may reach us at <a href="mailto:[[PROCUREMENT_EMAIL]]" className="text-accent underline">[[PROCUREMENT_EMAIL]]</a> or call
          <a href="tel:[[PHONE_NUMBER]]" className="text-accent underline">[[PHONE_NUMBER]]</a>.
        </p>
      </div>
    </section>
  )
}