"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" })
      setIsSubmitted(false)
    }, 2000)
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-primary-gradient text-primary-foreground py-16 md:py-24">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Get In Touch</h1>
            <p className="text-xl mt-6 opacity-95">We'd love to hear from you. Reach out anytime.</p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: MapPin,
                  title: "Visit Us",
                  details: ["123 Faith Street", "Community City, ST 12345"],
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  details: ["(555) 123-4567", "Monday - Friday, 9am - 5pm"],
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  details: ["info@emmanuelbc.org", "We'll respond within 24 hours"],
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="text-center">
                    <Icon size={48} className="text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <div className="space-y-1">
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-foreground/70 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-foreground">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none transition"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none transition resize-none"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    {isSubmitted ? "Message Sent!" : "Send Message"}
                  </button>
                </form>
              </div>

              {/* Service Times & Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Service Times</h2>
                <div className="space-y-6">
                  {[
                    {
                      day: "Sunday",
                      times: ["10:00 AM - Worship Service", "5:30 PM - Evening Service"],
                      location: "Main Sanctuary",
                    },
                    {
                      day: "Wednesday",
                      times: ["6:30 PM - Prayer Meeting"],
                      location: "Prayer Room",
                    },
                    {
                      day: "Friday",
                      times: ["7:00 PM - Youth Group"],
                      location: "Youth Center",
                    },
                  ].map((service) => (
                    <div key={service.day} className="border border-border rounded-lg p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <Clock size={20} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-lg">{service.day}</h3>
                          <p className="text-foreground/70 text-sm">{service.location}</p>
                        </div>
                      </div>
                      <ul className="space-y-1 ml-8">
                        {service.times.map((time, idx) => (
                          <li key={idx} className="text-foreground/70 text-sm">
                            {time}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* <div className="bg-secondary/30 rounded-lg p-6 mt-6">
                    <h3 className="font-bold mb-3">New to Our Church?</h3>
                    <p className="text-foreground/70 text-sm mb-4">
                      We'd love to welcome you! First-time guests receive a special welcome gift. Come as you are and
                      experience our warm, inclusive community.
                    </p>
                    <button className="w-full text-primary font-semibold hover:text-primary/80 transition">
                      Learn What to Expect →
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Find Us On The Map</h2>
            <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-secondary flex items-center justify-center">
              <div className="text-center text-foreground/70">
                <MapPin size={48} className="mx-auto mb-4 opacity-50" />
                <p>123 Faith Street, Community City, ST 12345</p>
                <p className="text-sm mt-2">
                  <a
                    href="https://maps.app.goo.gl/5TCsPB1ya9QzexeSA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
