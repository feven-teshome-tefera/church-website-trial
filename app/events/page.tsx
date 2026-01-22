'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, Clock } from "lucide-react"
import { supabase } from "@/lib/supabase-client"
import { useEffect, useState } from "react"

interface Event {
  id: number
  created_at: string
  title: string
  description: string
  details: string
  date: string
  time: string
  location: string
  category: string
}

export default function EventsPage() {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([])

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from('events')
      .select('*')

    if (error) {
      console.error('Error fetching events:', error)
      return
    }

    setUpcomingEvents(data || [])
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-primary-gradient text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Upcoming Events</h1>
            <p className="text-xl mt-6 opacity-95">Join us for worship, fellowship, and service</p>
          </div>
        </section>

        {/* Events List */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border border-border rounded-lg p-8 hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <span className="inline-block bg-primary-gradient text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold mb-3">
                        {event.category}
                      </span>
                      <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-6">{event.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-primary" />
                      <span>
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {event.details && (
                    <button className="mt-6 text-primary font-semibold hover:text-primary/80 transition">
                      Learn More →
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Visit Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Service Times</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li><strong>Sunday:</strong> 10:00 AM & 5:30 PM</li>
                  <li><strong>Wednesday:</strong> 6:30 PM</li>
                  <li><strong>Friday:</strong> 7:00 PM</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Address</h3>
                <p className="text-foreground/70">
                  Addis Ababa, Ethiopia
                  <br />
                  2Q9F+52V, Addis Ababa
                  <br />
                  (251)1 141 9066
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
