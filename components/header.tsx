"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, MapPin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#venue", label: "Explore" },
  { href: "#events", label: "Events" },
  { href: "#packages", label: "Packages" },
  { href: "#rooms", label: "Rooms" },
  { href: "#walkin", label: "Rates" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0D7377]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="hidden md:block bg-[#0D7377] text-[#C5A028] py-2 border-b border-[#C5A028]/20">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:09776271360" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>0977 627 1360</span>
            </a>
            <a
              href="mailto:villakathreynaevents@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>villakathreynaevents@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Zone 5, Planza, San Fernando, Cam. Sur
            </span>
            <a
              href="https://www.facebook.com/villakathreyna"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
                <svg className="w-5 h-5 text-[#C5A028]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/emblem-transparent.png"
              alt="Villa Kathreyna Emblem"
              width={50}
              height={50}
              className="w-12 h-12 md:w-14 md:h-14"
            />
            <Image
              src="/images/v1-typo-transparent.png"
              alt="Villa Kathreyna"
              width={160}
              height={50}
              className="h-10 md:h-12 w-auto hidden sm:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#C5A028] transition-colors font-medium tracking-wide text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#C5A028] text-[#0D7377] px-6 py-2 rounded font-semibold hover:bg-[#E8D48B] transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0D7377] border-t border-[#C5A028]/20 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-[#C5A028] transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-[#C5A028] text-[#0D7377] px-6 py-3 rounded font-semibold text-center hover:bg-[#E8D48B] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </a>
              <div className="pt-4 border-t border-[#C5A028]/20 text-white/80 text-sm space-y-2">
                <a href="tel:09776271360" className="flex items-center gap-2 py-2">
                  <Phone className="w-4 h-4 text-[#C5A028]" />
                  0977 627 1360
                </a>
                <a href="mailto:villakathreynaevents@gmail.com" className="flex items-center gap-2 py-2">
                  <Mail className="w-4 h-4 text-[#C5A028]" />
                  villakathreynaevents@gmail.com
                </a>
                <span className="flex items-center gap-2 py-2">
                  <MapPin className="w-4 h-4 text-[#C5A028]" />
                  Zone 5, Planza, San Fernando, Cam. Sur
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
