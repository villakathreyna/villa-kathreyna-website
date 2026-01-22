"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import HeroStarParticles from "./hero-star-particles"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/FINAL-HERO-SECTION.png"
          alt="Villa Kathreyna Wedding Venue at Night"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/70 via-[#2D2A20]/60 to-[#1A1A1A]/80" />
        <HeroStarParticles />
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#D4AF37]">
          <path fill="currentColor" d="M0,100 Q50,50 100,0 Q150,50 200,100 Q150,150 100,200 Q50,150 0,100" />
        </svg>
      </motion.div>
      <motion.div 
        className="absolute bottom-0 right-0 w-64 h-64 opacity-20 rotate-180"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#D4AF37]">
          <path fill="currentColor" d="M0,100 Q50,50 100,0 Q150,50 200,100 Q150,150 100,200 Q50,150 0,100" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-24">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/v1-transparent.png"
              alt="Villa Kathreyna Logo"
              width={120}
              height={120}
              className="mx-auto drop-shadow-2xl"
            />
          </motion.div>

          <motion.p 
            className="text-white/90 text-lg md:text-xl font-light mb-4 tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Welcome to
          </motion.p>

          <motion.h1 
            className="font-cinzel-decorative text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-white drop-shadow-lg">Villa </span>
            <span className="text-[#D4AF37] drop-shadow-lg" style={{ textShadow: "0 0 40px rgba(212,175,55,0.5)" }}>
              Kathreyna
            </span>
          </motion.h1>

          <motion.p 
            className="text-[#D4AF37] text-lg md:text-xl font-medium mb-4 tracking-[0.3em] uppercase font-cinzel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Event Place & Resort
          </motion.p>

          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          />

          <motion.p 
            className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            Experience the grandeur of Villa Kathreyna!<br/>With majestic spaces & lush garden & pool, we create enchanting
            celebrations. Let our team bring your dreams to life in a place fit for royalty.
          </motion.p>

          <motion.p 
            className="text-2xl md:text-3xl font-cinzel-decorative text-[#D4AF37] mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Where Your Royal Celebrations Reign
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.a
              href="#packages"
              className="bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-[#1A1A1A] px-8 py-4 rounded font-semibold text-lg hover:from-[#E8D48B] hover:to-[#D4AF37] transition-all transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Packages
            </motion.a>
            <motion.a
              href="#contact"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded font-semibold text-lg hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Event
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-12 border-2 border-[#D4AF37] rounded-full flex items-start justify-center pt-2">
            <motion.div 
              className="w-2 h-2 bg-[#D4AF37] rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
