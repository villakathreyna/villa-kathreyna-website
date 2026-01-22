"use client"

import { useState } from "react"
import Image from "next/image"
import { Sparkles, TreePine, Waves, Users, X } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Sparkles,
    title: "Majestic Spaces",
    description: "Elegant halls and venues designed for grand celebrations",
  },
  {
    icon: TreePine,
    title: "Lush Gardens",
    description: "Beautiful garden settings perfect for outdoor ceremonies",
  },
  {
    icon: Waves,
    title: "Pool & Terrace",
    description: "Refreshing pool area with scenic terrace views",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated staff to bring your dreams to life",
  },
]

const venueImages = [
  {
    src: "/images/jmp-9698.jpg",
    alt: "Villa Kathreyna RK Hall",
    title: "RK Hall",
  },
  {
    src: "/images/jmp-9704.jpg",
    alt: "Villa Kathreyna Grand Staircase",
    title: "Grand Staircase",
  },
  {
    src: "/images/jmp-9673.jpg",
    alt: "Villa Kathreyna Lounge Area",
    title: "Lounge Area",
  },
  {
    src: "/images/0b1ec43a-2442-41ef-be13-536421bb61c1.jpg",
    alt: "Villa Kathreyna Garden & Pool Aerial View",
    title: "KR Garden & Pool",
  },
  {
    src: "/images/2c12685c-24d0-4195-ad2c-7c1f3797cbd4-20-282-29.jpg",
    alt: "Villa Kathreyna Aerial View Event Setup",
    title: "Garden Event Setup",
  },
  {
    src: "/images/jmp-9694.jpg",
    alt: "Villa Kathreyna Living Area",
    title: "Living Area",
  },
]

export default function ExploreSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="venue" className="py-20 bg-[#FAF8F5] ornament-pattern">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#C5A028] font-medium tracking-widest uppercase mb-4 font-cinzel">Welcome</p>
          <h2 className="font-cinzel-decorative text-4xl md:text-5xl text-[#0D7377] font-bold mb-6">
            Explore Villa <span className="text-[#C5A028]">Kathreyna</span>
          </h2>
          <div className="w-24 h-1 bg-[#C5A028] mx-auto mb-8" />
          <p className="text-lg text-[#1A1A1A]/80 max-w-3xl mx-auto leading-relaxed">
            Villa Kathreyna is an exclusive events place and resort featuring a royal, elegant gold & green
            Mediterranean vibe. Nestled in the heart of San Fernando, Camarines Sur, we deliver royalty within reach—where elegance meets exceptional value for your celebrations and relaxation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow border-b-4 border-[#C5A028]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-[#0D7377] rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-[#C5A028]" />
              </div>
              <h3 className="font-cinzel text-xl text-[#0D7377] font-bold mb-3">{feature.title}</h3>
              <p className="text-[#1A1A1A]/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Venue Gallery */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-cinzel text-2xl text-[#0D7377] font-bold text-center mb-8">Your Royal Venue Awaits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venueImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D7377]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-cinzel font-bold text-lg">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div 
          className="bg-[#0D7377] rounded-2xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl font-light mb-4 italic">
            "Experience the grandeur of royalty at prices that welcome everyone—where dreams become reality."
          </p>
          <p className="text-[#C5A028] font-cinzel text-lg">- Villa Kathreyna</p>
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              className="absolute top-4 right-4 text-white hover:text-[#C5A028] transition-colors"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
            >
              <X className="w-10 h-10" />
            </motion.button>
            <motion.div 
              className="relative w-full max-w-5xl aspect-video"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Villa Kathreyna Venue"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
