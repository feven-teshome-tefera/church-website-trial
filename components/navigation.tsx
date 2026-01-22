"use client"

import Link from "next/link"
import { useState } from "react"
import { Import, Menu, X } from "lucide-react"
import Image from "next/image"
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/ministries", label: "Ministries" },
    { href: "/events", label: "Events" },
    { href: "/sermons", label: "Sermons" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className=" fixed top-0 left-0 w-full z-50 bg-background/50 backdrop-blur-md">
      <div className=" max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex justify-between items-center h-16">
          <div className=" flex items-center gap-3">
          <div className=" ">
               <Image
                  src="cropped_circle_image.png"
                  alt="Emmanuel Baptist Church"
                  width={44}
                  height={44}
                  className="object-cover pointer hover:scale-105 transition-transform duration-300"
                  />
              </div>

            <div>
              <h1 className="text-primary-gradient font-bold text-xl ">
                Emmanuel Baptist Church
              </h1>
              {/* <p className="mb-0.5 text-xs text-muted-foreground">Foundation in Christ</p> */}
              {/* <p className="text-xs text-muted-foreground mt-1 hidden sm:block">
                Foundation in Christ
              </p> */}

                  </div>
            </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
