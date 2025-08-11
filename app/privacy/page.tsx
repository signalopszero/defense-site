import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our commitment to protecting your privacy and how we handle data.',
}

export default function PrivacyPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
      <p className="text-muted">
        This privacy policy explains how we collect, use and safeguard your personal information when you use our
        website. By accessing or using the site you agree to the terms of this policy.
      </p>
      <h2 className="text-2xl font-semibold text-foreground mt-6">Information We Collect</h2>
      <p className="text-muted">
        We may collect personal information you voluntarily provide via forms, such as your name, email address,
        organization and message. We also collect certain non‑identifying information automatically through the
        standard operation of our website, such as IP address, browser type and pages visited. This information is used
        to improve our website and services.
      </p>
      <h2 className="text-2xl font-semibold text-foreground mt-6">How We Use Your Information</h2>
      <p className="text-muted">
        We use the information you provide to respond to inquiries, process requests and communicate with you about our
        services. We do not sell or share your personal information with third parties except as required by law or as
        necessary to fulfill your requests.
      </p>
      <h2 className="text-2xl font-semibold text-foreground mt-6">Data Security</h2>
      <p className="text-muted">
        We implement reasonable security measures to protect your information from unauthorized access, disclosure or
        misuse. However, no method of transmission over the Internet or electronic storage is completely secure.
      </p>
      <h2 className="text-2xl font-semibold text-foreground mt-6">Your Rights</h2>
      <p className="text-muted">
        You may request access to, correction or deletion of your personal information by contacting us. We will
        respond to such requests in accordance with applicable law.
      </p>
      <h2 className="text-2xl font-semibold text-foreground mt-6">Changes to This Policy</h2>
      <p className="text-muted">
        We may update this privacy policy from time to time. Any changes will be posted on this page with an updated
        effective date.
      </p>
    </section>
  )
}