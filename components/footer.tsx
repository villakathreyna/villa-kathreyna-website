import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Crown, Mail, PhoneCall } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#venue", label: "Our Venues" },
  { href: "#packages", label: "Packages" },
  { href: "#rooms", label: "Rooms" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "Weddings",
  "Debut",
  "Birthday Parties",
  "Christening",
  "Corporate Events",
  "Staycation",
  "Private Events",
]

export default function Footer() {
  return (
    <footer className="bg-[#0D7377] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/images/emblem-transparent.png" alt="Villa Kathreyna" width={60} height={60} />
              <div>
                <h3 className="font-cinzel-decorative text-xl text-[#C5A028] font-bold">Villa Kathreyna</h3>
                <p className="text-white/70 text-sm font-cinzel">Event Place & Resort</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Experience the grandeur of Villa Kathreyna. Where your royal celebrations reign.
            </p>
            <div className="flex items-center gap-2 text-[#C5A028]">
              <Crown className="w-5 h-5" />
              <span className="font-cinzel italic">Fit for Royalty</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-lg text-[#C5A028] font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/80 hover:text-[#C5A028] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-cinzel text-lg text-[#C5A028] font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-white/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-lg text-[#C5A028] font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="tel:09776271360"
                className="flex items-center gap-3 text-white/80 hover:text-[#C5A028] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#C5A028]" />
                0977 627 1360 (Mobile)
              </a>
              <a
                href="tel:0543413605"
                className="flex items-center gap-3 text-white/80 hover:text-[#C5A028] transition-colors"
              >
                <PhoneCall className="w-5 h-5 text-[#C5A028]" />
                054 341 3605 (Landline)
              </a>
              <a
                href="mailto:villakathreynaevents@gmail.com"
                className="flex items-center gap-3 text-white/80 hover:text-[#C5A028] transition-colors"
              >
                <Mail className="w-5 h-5 text-[#C5A028]" />
                villakathreynaevents@gmail.com
              </a>
              <a
                href="https://www.google.com/maps?q=Villa+Kathreyna+San+Fernando+Camarines+Sur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/80 hover:text-[#C5A028] transition-colors"
              >
                <MapPin className="w-5 h-5 text-[#C5A028] mt-0.5" />
                <span>Zone 5, Planza, San Fernando, Camarines Sur</span>
              </a>
              <a
                href="https://www.facebook.com/villakathreyna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-[#C5A028] transition-colors"
              >
                <svg className="w-5 h-5 text-[#C5A028]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Villa Kathreyna
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C5A028]/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© {new Date().getFullYear()} Villa Kathreyna Events Place & Resort. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/sitemap.xml" className="hover:text-[#C5A028] transition-colors">
                Sitemap
              </Link>
              <Link href="/privacy" className="hover:text-[#C5A028] transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
