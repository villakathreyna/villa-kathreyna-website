"use client"

import { motion } from "framer-motion"

export default function VideoShowcaseSection() {

  return (
    <section id="video" className="py-20 bg-gradient-to-b from-[#FAF8F5] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#C5A028] font-medium tracking-widest uppercase mb-4 font-cinzel">Experience the Magic</p>
          <h2 className="font-cinzel-decorative text-4xl md:text-5xl text-[#0D7377] font-bold mb-6">
            Villa <span className="text-[#C5A028]">Kathreyna</span>
          </h2>
          <div className="w-24 h-1 bg-[#C5A028] mx-auto mb-8" />
          <p className="text-lg text-[#1A1A1A]/80 max-w-2xl mx-auto">
            Discover the elegance and beauty of Villa Kathreyna, where every story is luxuriously told. Your perfect celebration awaits—where your forever starts and the stars align.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black" style={{ aspectRatio: "16 / 9" }}>
            {/* Vimeo Embed - autoplay with sound when visible */}
            <iframe
              src="https://player.vimeo.com/video/1156815617?autoplay=1&muted=0&title=0&byline=0&portrait=0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              style={{ border: "none", display: "block" }}
              loading="lazy"
            />

            {/* Gold Border Accent */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#C5A028] pointer-events-none shadow-lg" />
          </div>

          {/* Video Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center border-t-2 border-[#C5A028]"
            >
              <h4 className="font-cinzel text-lg text-[#0D7377] font-bold mb-2">Premium Venue</h4>
              <p className="text-[#1A1A1A]/70 text-sm">Royalty within reach—indulge in world-class elegance without the premium price tag.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center border-t-2 border-[#C5A028]"
            >
              <h4 className="font-cinzel text-lg text-[#0D7377] font-bold mb-2">Perfect Setting</h4>
              <p className="text-[#1A1A1A]/70 text-sm">Sophisticated venues and lush gardens—affordable luxury for every celebration.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center border-t-2 border-[#C5A028]"
            >
              <h4 className="font-cinzel text-lg text-[#0D7377] font-bold mb-2">Book Your Event</h4>
              <p className="text-[#1A1A1A]/70 text-sm">Celebrate in style without breaking the bank—your dream venue awaits.</p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <a
              href="#events"
              className="inline-block bg-[#0D7377] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0D7377]/90 transition-colors shadow-lg"
            >
              Start Planning Your Event
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
