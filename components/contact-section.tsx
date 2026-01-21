"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Phone, MapPin, Clock, Mail, PhoneCall } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ContactSection() {
  const getTodayDate = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: getTodayDate(),
    guestCount: "",
    message: "",
  })

  useEffect(() => {
    const handlePackageSelect = (e: CustomEvent) => {
      console.log('Package selected:', e.detail)
      setFormData(prev => ({ ...prev, eventType: e.detail }))
    }
    window.addEventListener('selectPackage', handlePackageSelect as EventListener)
    return () => window.removeEventListener('selectPackage', handlePackageSelect as EventListener)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format the date to "Month Day, Year" format
    let formattedDate = formData.eventDate
    if (formData.eventDate) {
      const date = new Date(formData.eventDate + 'T00:00:00')
      formattedDate = date.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      })
    }

    // Create message for Facebook Messenger
    const message = `Hello Villa Kathreyna! I would like to inquire about booking.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Event Date: ${formattedDate}
Guest Count: ${formData.guestCount}
Message: ${formData.message}`

    // Open Facebook Messenger with the message
    const messengerUrl = `https://m.me/villakathreyna?text=${encodeURIComponent(message)}`
    window.open(messengerUrl, "_blank")
  }

  return (
    <section id="contact" className="py-20 bg-[#FAF8F5] ornament-pattern">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#C5A028] font-medium tracking-widest uppercase mb-4 font-cinzel">Contact Us</p>
          <h2 className="font-cinzel-decorative text-4xl md:text-5xl text-[#0D7377] font-bold mb-6">
            Book Your <span className="text-[#C5A028]">Royal Event</span>
          </h2>
          <div className="w-24 h-1 bg-[#C5A028] mx-auto mb-8" />
          <p className="text-lg text-[#1A1A1A]/80 max-w-2xl mx-auto">
            Let our team bring your dreams to life. Reach out to us today!
          </p>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-r from-[#0D7377] to-[#0D7377]/90 rounded-2xl p-6 md:p-8 mb-12 text-center shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-white text-lg md:text-xl mb-4">
            For more info, updates, and latest promos, follow and message us on Facebook!
          </p>
          <motion.a
            href="https://www.facebook.com/villakathreyna"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#C5A028] text-[#0D7377] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#E8D48B] transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Visit Villa Kathreyna on Facebook
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-cinzel text-2xl text-[#0D7377] font-bold mb-6">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A]/80 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] focus:border-[#0D7377] focus:ring-2 focus:ring-[#0D7377]/20 outline-none transition-all bg-white text-[#1A1A1A]"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A]/80 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] focus:border-[#0D7377] focus:ring-2 focus:ring-[#0D7377]/20 outline-none transition-all bg-white text-[#1A1A1A]"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A]/80 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] focus:border-[#0D7377] focus:ring-2 focus:ring-[#0D7377]/20 outline-none transition-all bg-white text-[#1A1A1A]"
                    placeholder="09XX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A]/80 mb-2">Booking Type *</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] focus:border-[#0D7377] focus:ring-2 focus:ring-[#0D7377]/20 outline-none transition-all bg-white text-[#1A1A1A]"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  >
                    <option value="">Select event type</option>
                    <optgroup label="Wedding Packages">
                      <option value="Silver">Silver Package</option>
                      <option value="Gold">Gold Package</option>
                      <option value="Platinum">Platinum Package</option>
                      <option value="Diamond">Diamond Package</option>
                      <option value="All-In Wedding">All-In Wedding Package</option>
                    </optgroup>
                    <optgroup label="Venue Packages">
                      <option value="RK Hall (No Pool Access)">RK Hall (No Pool Access)</option>
                      <option value="RK Hall with Pool Access">RK Hall with Pool Access</option>
                      <option value="Garden and Pool Access">Garden and Pool Access</option>
                      <option value="RK Hall, Garden, Pool Access">RK Hall, Garden, Pool Access</option>
                      <option value="Exclusive Access">Exclusive Access (22hrs)</option>
                    </optgroup>
                    <optgroup label="Room Booking">
                      <option value="Princess Room">Princess Room</option>
                      <option value="Prince Room">Prince Room</option>
                      <option value="Duchess Room">Duchess Room</option>
                      <option value="Queen Suite">Queen Suite</option>
                      <option value="King Suite">King Suite</option>
                    </optgroup>
                    <optgroup label="Event Packages">
                      <option value="Birthday Package">Birthday Package - RKreatioNs</option>
                      <option value="Birthday or Baptism Service Package">Birthday or Baptism - Villa Kathreyna</option>
                      <option value="Debut Package A">Debut Package A (50 pax)</option>
                      <option value="Debut Package B">Debut Package B (100 pax)</option>
                    </optgroup>
                    <optgroup label="Other Events">
                      <option value="Christening">Christening</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Party">Party</option>
                      <option value="Holiday Celebration">Holiday Celebration</option>
                      <option value="Walk-In / Day Use">Walk-In / Day Use</option>
                      <option value="Other">Other</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A]/80 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] focus:border-[#0D7377] focus:ring-2 focus:ring-[#0D7377]/20 outline-none transition-all bg-white text-[#1A1A1A]"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  />
                  {formData.eventDate && (
                    <p className="mt-1 text-sm text-[#0D7377] font-medium">
                      {new Date(formData.eventDate + 'T00:00:00').toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A]/80 mb-2">Estimated Guest Count</label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] focus:border-[#0D7377] focus:ring-2 focus:ring-[#0D7377]/20 outline-none transition-all bg-white text-[#1A1A1A]"
                    placeholder="Number of guests"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A1A1A]/80 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] focus:border-[#0D7377] focus:ring-2 focus:ring-[#0D7377]/20 outline-none transition-all resize-none bg-white text-[#1A1A1A]"
                  placeholder="Tell us about your event... Feel free to mention any add-ons, customizations, or special requests you'd like for your celebration!"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#C5A028] text-[#0D7377] py-4 rounded-lg font-bold text-lg hover:bg-[#E8D48B] transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.438 5.503 3.686 7.2V22l3.302-1.813c.88.246 1.814.38 2.78.38h.232c5.523 0 10-4.145 10-9.24S17.523 2 12 2zm1.038 12.463l-2.545-2.72-4.97 2.72 5.466-5.803 2.608 2.72 4.906-2.72-5.465 5.803z" />
                </svg>
                Send Inquiry via Facebook Messenger
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-4">
              <motion.a
                href="tel:09776271360"
                className="bg-[#0D7377] text-white p-6 rounded-xl flex items-center gap-4 hover:bg-[#0D7377]/90 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-14 h-14 bg-[#C5A028] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#0D7377]" />
                </div>
                <div>
                  <p className="text-[#C5A028] font-medium text-sm">Call Us</p>
                  <p className="text-xl font-bold">0977 627 1360</p>
                  <p className="text-sm text-white/80 flex items-center gap-1 mt-1">
                    <PhoneCall className="w-4 h-4" />
                    054 341 3605 (Landline)
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:villakathreynaevents@gmail.com"
                className="bg-[#0D7377] text-white p-6 rounded-xl flex items-center gap-4 hover:bg-[#0D7377]/90 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-14 h-14 bg-[#C5A028] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#0D7377]" />
                </div>
                <div>
                  <p className="text-[#C5A028] font-medium text-sm">Email Us</p>
                  <p className="text-lg font-bold">villakathreynaevents@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.google.com/maps?q=Villa+Kathreyna+San+Fernando+Camarines+Sur"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0D7377] text-white p-6 rounded-xl flex items-center gap-4 hover:bg-[#0D7377]/90 transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-14 h-14 bg-[#C5A028] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#0D7377]" />
                </div>
                <div>
                  <p className="text-[#C5A028] font-medium text-sm">Location</p>
                  <p className="text-lg font-bold">Zone 5, Planza, San Fernando, Cam. Sur</p>
                </div>
              </motion.a>

              <div className="bg-[#0D7377] text-white p-6 rounded-xl flex items-center gap-4">
                <div className="w-14 h-14 bg-[#C5A028] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#0D7377]" />
                </div>
                <div>
                  <p className="text-[#C5A028] font-medium text-sm">Operating Hours</p>
                  <p className="text-lg font-bold">24/7 - Open Daily</p>
                </div>
              </div>
            </div>

            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64">
                <Image src="/images/vk-20house-202.jpg" alt="Villa Kathreyna Building" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D7377]/70 to-transparent flex items-end justify-center pb-6">
                  <a
                    href="https://maps.google.com/?q=Villa+Kathreyna+San+Fernando+Camarines+Sur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#C5A028] text-[#0D7377] px-6 py-3 rounded-lg font-bold hover:bg-[#E8D48B] transition-colors shadow-lg"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
