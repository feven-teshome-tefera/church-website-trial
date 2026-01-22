
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
     {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-blue-800/80" /> */}
<section
  id="home"
  className="rounded-b-[3rem] relative h-[90vh] flex items-center justify-center overflow-hidden text-foreground"
>


      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1528828085966-aff4e01c5f2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcnNoaXB8ZW58MHx8MHx8fDA%3D')",
        }}
      />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold text-balance leading-tight text-white drop-shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Welcome to Emmanuel Baptist Church
          </h2>

          <p className="text-lg md:text-2xl text-white/95 text-balance max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 drop-shadow-lg">
                Join us for worship, fellowship, and spiritual growth in a warm and welcoming community.
              </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            <Link
                  href="/contact"
                  className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition text-center"
                >
                  Get in Touch
            </Link>
            <Link
                  href="#about"
                  className="inline-block bg-primary-gradient text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition text-center"
                >
                  Learn More
                </Link>
          </div>
        </div>
      </div>
    </section>
           <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </a>

          
        {/* About Preview */}
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-balance">About Our Church</h2>
                <p className="text-lg text-foreground/80 mb-4">
                  Emmanuel Baptist Church stands as a beacon of faith and community in our neighborhood. We believe in
                  the transformative power of God's love and the importance of living out our faith through service and
                  compassion.
                </p>
                <p className="text-lg text-foreground/80 mb-8">
                  Our congregation is diverse, vibrant, and passionate about making a difference in the world around us.
                </p>
                <Link
                  href="/about"
                  className="inline-block text-primary font-semibold hover:text-primary/80 transition"
                >
                  Read Our Full Story →
                </Link>
              </div>
              <div className="bg-secondary rounded-lg h-64 md:h-80 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1547382002-b908c9367d83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Church Interior"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ministries Preview */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center text-balance">Our Ministries</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Worship", "Community Outreach", "Youth Ministry"].map((ministry) => (
                <div key={ministry} className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition">
                  <h3 className="text-xl font-semibold mb-3">{ministry}</h3>
                  <p className="text-foreground/70 mb-6">
                    Discover how we serve and grow together through meaningful programs and spiritual development.
                  </p>
                  <Link href="/ministries" className="text-primary font-semibold hover:text-primary/80">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Preview */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center text-balance">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Sunday Worship Service", date: "Every Sunday, 10:00 AM" },
                { title: "Wednesday Prayer Meeting", date: "Every Wednesday, 6:30 PM" },
              ].map((event) => (
                <div key={event.title} className="border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-foreground/70 mb-6">{event.date}</p>
                  <Link href="/events" className="text-primary font-semibold hover:text-primary/80">
                    View All Events →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sermons Preview */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center text-balance">Latest Sermons</h2>
            <div className="text-center">
              <p className="text-lg text-foreground/70 mb-8">
                Listen to our inspiring sermons from recent services and grow in your faith.
              </p>
              <Link
                href="/sermons"
                className="inline-block bg-primary-gradient text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Explore Sermons
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary-gradient text-primary-foreground">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-balance">Join Our Community</h2>
            <p className="text-xl mb-8 opacity-95">
              Whether you're new to faith or a lifelong believer, there's a place for you here.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-gradient text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Get In Touch Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
