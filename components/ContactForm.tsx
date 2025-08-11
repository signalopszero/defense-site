"use client"

import { useState } from 'react'

interface FormData {
  name: string
  organization: string
  email: string
  phone: string
  subject: string
  message: string
}

/**
 * Accessible contact/request for information form. No real submission is
 * performed; integrate with an email/API handler as needed.
 */
export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    organization: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Basic validation
    if (!form.email || !form.message) {
      setError('Please fill in the required fields (email and message).')
      return
    }
    setError(null)
    // In a real application you would send the data to a backend API here.
    console.log('Form submitted', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p className="text-center text-accent font-medium">
        Thank you for your message. We will get back to you shortly.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1 text-muted">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-md border border-white/20 bg-secondary/40 px-3 py-2 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="organization" className="block text-sm font-medium mb-1 text-muted">
          Organization
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={form.organization}
          onChange={handleChange}
          className="w-full rounded-md border border-white/20 bg-secondary/40 px-3 py-2 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1 text-muted">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-white/20 bg-secondary/40 px-3 py-2 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1 text-muted">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-md border border-white/20 bg-secondary/40 px-3 py-2 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1 text-muted">
          Subject / Area of interest
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full rounded-md border border-white/20 bg-secondary/40 px-3 py-2 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1 text-muted">
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-white/20 bg-secondary/40 px-3 py-2 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
        ></textarea>
      </div>
      <p className="text-xs text-muted">
        Do not transmit classified or ITAR/EAR‑restricted information via this form.
      </p>
      <button
        type="submit"
        className="px-5 py-2 rounded-md bg-accent text-white font-medium hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
      >
        Send
      </button>
    </form>
  )
}