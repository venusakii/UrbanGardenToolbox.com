"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black mb-4 text-aquamarine" style={{ fontFamily: "Archivo Black, sans-serif" }}>
            Contact Us
          </h1>
          <p className="text-lg text-gray-700">
            Have questions about Urban Garden Toolbox? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-aquamarine mb-2">Email</h3>
              <p className="text-gray-700">support@urbangardentoolbox.com</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-aquamarine mb-2">Phone</h3>
              <p className="text-gray-700">+1 (910) 584-1957</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-aquamarine mb-2">Office Hours</h3>
              <p className="text-gray-700">Monday - Friday: 9 AM - 6 PM EST</p>
              <p className="text-gray-700">Saturday: 10 AM - 4 PM EST</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-aquamarine mb-2">Address</h3>
              <p className="text-gray-700">
                1783 Happy Hollow Road
                <br />
                Fayetteville, NC 28306
                <br />
                United States
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-aquamarine mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-aquamarine rounded-lg focus:outline-none focus:ring-2 focus:ring-aquamarine"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-aquamarine mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-aquamarine rounded-lg focus:outline-none focus:ring-2 focus:ring-aquamarine"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-aquamarine mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-aquamarine rounded-lg focus:outline-none focus:ring-2 focus:ring-aquamarine"
                  placeholder="Message subject"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-aquamarine mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 border border-aquamarine rounded-lg focus:outline-none focus:ring-2 focus:ring-aquamarine"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-aquamarine to-neon-green text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Send Message
              </button>
              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
