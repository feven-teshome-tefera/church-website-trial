import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Emmanuel Baptist</h3>
            <p className="text-sm opacity-90">A community dedicated to faith, fellowship, and service.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="hover:text-accent transition">
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-accent transition">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sermons" className="hover:text-accent transition">
                  Sermons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Service Times</h4>
            <p className="text-sm mb-2">Sunday: 10:00 AM & 5:30 PM</p>
            <p className="text-sm mb-2">Wednesday: 6:30 PM</p>
            <p className="text-sm">Friday: 7:00 PM</p>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-sm opacity-75">&copy; 2025 Emmanuel Baptist Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
