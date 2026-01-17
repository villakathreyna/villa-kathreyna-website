"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Heart, Cake, Users, Crown, PartyPopper, Briefcase, Home, Sparkles } from "lucide-react"

const events = [
  {
    id: "wedding",
    name: "Weddings",
    icon: <Heart className="w-10 h-10" />,
    image: "/images/495122643-1278236790973929-6048740157890245057-n.jpg",
    description:
      "Create your perfect fairytale wedding in our majestic venue with enchanting garden ceremonies and grand receptions.",
  },
  {
    id: "birthday",
    name: "Birthdays",
    icon: <Cake className="w-10 h-10" />,
    image: "/images/birthday.jpg",
    description: "Celebrate another year of life in royal style with our beautiful garden and pool setup.",
  },
  {
    id: "christening",
    name: "Christening",
    icon: <Users className="w-10 h-10" />,
    image: "/images/611765182-122215756148359676-8312360735691230763-n.jpg",
    description: "Welcome your little one with a blessed celebration surrounded by family and friends.",
  },
  {
    id: "debut",
    name: "Debuts",
    icon: <Crown className="w-10 h-10" />,
    image: "/images/544632072-122197939226359676-4999539420457175304-n.jpg",
    description: "Mark her 18th birthday with an unforgettable debut celebration fit for a princess.",
  },
  {
    id: "reunion",
    name: "Reunion",
    icon: <Users className="w-10 h-10" />,
    image: "/images/612223076-122215749734359676-3268340861469196059-n.jpg",
    description: "Reconnect with family and friends in our beautiful venue perfect for memorable gatherings.",
  },
  {
    id: "corporate",
    name: "Corporate Events",
    icon: <Briefcase className="w-10 h-10" />,
    image: "/images/corporate-20events.jpg",
    description: "Professional meetings, seminars, and team building events in an elegant setting.",
  },
  {
    id: "parties",
    name: "Parties",
    icon: <PartyPopper className="w-10 h-10" />,
    image: "/images/611654104-122215757156359676-7302099040816329214-n.jpg",
    description: "Dance the night away under the stars with our amazing outdoor party setup and lighting.",
  },
  {
    id: "holiday",
    name: "Holiday Celebrations",
    icon: <Sparkles className="w-10 h-10" />,
    image: "/images/holiday-20vacation.jpg",
    description: "Make your Christmas parties and holiday gatherings extra special.",
  },
  {
    id: "staycation",
    name: "Staycation",
    icon: <Home className="w-10 h-10" />,
    image: "/images/staycation.jpg",
    description: "Relax and unwind in our luxurious resort with family and friends.",
  },
]

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null)

  const handleInquire = (eventName: string) => {
    setSelectedEvent(null)
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#C5A028] font-medium tracking-widest uppercase mb-4 font-cinzel">Celebrations</p>
          <h2 className="font-cinzel-decorative text-4xl md:text-5xl text-[#0D7377] font-bold mb-6">
            Events We <span className="text-[#C5A028]">Host</span>
          </h2>
          <div className="w-24 h-1 bg-[#C5A028] mx-auto mb-8" />
          <p className="text-lg text-[#1A1A1A]/80 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, Villa Kathreyna is the perfect venue for all your special
            moments.
          </p>
        </div>

        {/* Events Grid - Large cards to showcase grandeur */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedEvent(event)}
            >
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D7377]/95 via-[#0D7377]/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-white">
                <div className="text-[#C5A028] mb-3 transform group-hover:scale-110 transition-transform">
                  {event.icon}
                </div>
                <h3 className="font-cinzel-decorative text-2xl font-bold text-center mb-2">{event.name}</h3>
                <p className="text-white/80 text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to learn more
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Event Modal */}
        {selectedEvent && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72 md:h-96">
                <Image
                  src={selectedEvent.image || "/placeholder.svg"}
                  alt={selectedEvent.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D7377] to-transparent" />
                <button
                  className="absolute top-4 right-4 text-white hover:text-[#C5A028] transition-colors bg-black/30 rounded-full p-2"
                  onClick={() => setSelectedEvent(null)}
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-[#C5A028]">{selectedEvent.icon}</div>
                    <h3 className="font-cinzel-decorative text-3xl font-bold">{selectedEvent.name}</h3>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[#1A1A1A]/80 text-lg mb-6 leading-relaxed">{selectedEvent.description}</p>
                <p className="text-[#1A1A1A]/70 mb-6">
                  Host your {selectedEvent.name.toLowerCase()} at Villa Kathreyna and create unforgettable memories in
                  our majestic venue with lush gardens, sparkling pool, and elegant halls.
                </p>
                <button
                  onClick={() => handleInquire(selectedEvent.name)}
                  className="w-full bg-[#0D7377] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#0D7377]/90 transition-colors"
                >
                  Inquire About {selectedEvent.name}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
