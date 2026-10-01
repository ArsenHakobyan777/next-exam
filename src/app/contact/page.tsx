'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800">Contact Us</h1>
          <p className="text-gray-500 text-lg mt-2 max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help. Send us a message and we'll respond shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="text-3xl bg-blue-50 p-4 rounded-xl text-blue-600">📍</div>
              <div>
                <h3 className="font-bold text-gray-800">Our Address</h3>
                <p className="text-sm text-gray-500 mt-1">123 Commerce St, Yerevan, Armenia</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="text-3xl bg-blue-50 p-4 rounded-xl text-blue-600">📞</div>
              <div>
                <h3 className="font-bold text-gray-800">Phone Number</h3>
                <p className="text-sm text-gray-500 mt-1">+374 (33) 00-00-00</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="text-3xl bg-blue-50 p-4 rounded-xl text-blue-600">✉️</div>
              <div>
                <h3 className="font-bold text-gray-800">Email Address</h3>
                <p className="text-sm text-gray-500 mt-1">support@motsshop.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="text-3xl bg-blue-50 p-4 rounded-xl text-blue-600">⏰</div>
              <div>
                <h3 className="font-bold text-gray-800">Working Hours</h3>
                <p className="text-sm text-gray-500 mt-1">Mon - Sat: 09:00 AM - 08:00 PM</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>

            {submitted ? (
              <div className="bg-green-50 text-green-700 p-6 rounded-xl border border-green-200 text-center">
                <div className="text-4xl mb-2">🎉</div>
                <h3 className="text-lg font-bold">Thank You!</h3>
                <p className="text-sm mt-1">Your message has been sent successfully. We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    rows={5} 
                    required 
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="mt-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-md w-full md:w-fit"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}