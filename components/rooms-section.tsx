"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Check, Wind, Coffee, Bath, Eye, Sofa, DoorOpen, BedDouble, Users, Plus } from "lucide-react"

const rooms = [
  {
    id: "princess",
    name: "Princess Room",
    altName: "Standard",
    price: "2,500",
    capacity: "2 pax",
    maxCapacity: "Up to 4 pax with extra bed",
    bed: "Double Bed",
    image: "/images/princess-20rom.jpg",
    amenities: ["Private Bathroom", "Hygiene Kit for 2", "Air-Conditioned", "Green & Gold Theme", "Tree Wall Art"],
    features: ["ac", "bath", "breakfast"],
  },
  {
    id: "prince",
    name: "Prince Room",
    altName: "Standard",
    price: "2,500",
    capacity: "2 pax",
    maxCapacity: "Up to 4 pax with extra bed",
    bed: "Bunk Beds",
    image: "/images/prince-20room.jpg",
    amenities: ["Private Bathroom", "Hygiene Kit for 2", "Air-Conditioned", "Bunk Bed Style"],
    features: ["ac", "bath", "breakfast"],
  },
  {
    id: "duchess",
    name: "Duchess Room",
    altName: "Deluxe",
    price: "3,500",
    capacity: "2 pax",
    maxCapacity: "Up to 4 pax with extra bed",
    bed: "Full Size Bed",
    highlight: "Garden & Pool View",
    image: "/images/duchess-20room.jpg",
    amenities: ["Private Bathroom", "Hygiene Kit for 2", "Air-Conditioned", "Peacock Art", "Sofa & Daybed"],
    features: ["ac", "bath", "breakfast", "view", "sofa"],
  },
  {
    id: "queen",
    name: "Queen Suite",
    altName: "Family Suite",
    price: "4,500",
    capacity: "2-4 pax",
    maxCapacity: "Up to 6 pax with extra bed",
    bed: "Queen Size Bed",
    highlight: "Family Suite",
    image: "/images/queen-20room.jpg",
    amenities: [
      "Private Bathroom",
      "Hygiene Kit for 2",
      "Air-Conditioned",
      "Lavender Accent Wall",
      "Ambient Ceiling Lighting",
      "Sofa & Night Stand",
    ],
    features: ["ac", "bath", "breakfast", "sofa", "closet"],
  },
  {
    id: "king",
    name: "King Suite",
    altName: "Premium Suite",
    price: "5,000",
    capacity: "2-4 pax",
    maxCapacity: "Up to 6 pax with extra bed",
    bed: "King Size Bed",
    highlight: "Premium Suite",
    image: "/images/jmp-9633.jpg",
    amenities: [
      "Private Bathroom",
      "Hygiene Kit for 2",
      "Air-Conditioned",
      "Direct Terrace Access",
      "Garden & Pool View",
      "Sofa Set & Table",
      "Wall Art Decor",
    ],
    features: ["ac", "bath", "breakfast", "view", "sofa", "terrace"],
  },
]

const featureIcons: Record<string, { icon: React.ReactNode; label: string }> = {
  ac: { icon: <Wind className="w-4 h-4" />, label: "Air-Conditioned" },
  bath: { icon: <Bath className="w-4 h-4" />, label: "Private Bathroom" },
  breakfast: { icon: <Coffee className="w-4 h-4" />, label: "Free Breakfast" },
  view: { icon: <Eye className="w-4 h-4" />, label: "Scenic View" },
  sofa: { icon: <Sofa className="w-4 h-4" />, label: "Sofa" },
  closet: { icon: <DoorOpen className="w-4 h-4" />, label: "Walk-in Closet" },
  terrace: { icon: <Eye className="w-4 h-4" />, label: "Terrace Access" },
}

export default function RoomsSection() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#C5A028] font-medium tracking-widest uppercase mb-4 font-cinzel">Accommodations</p>
          <h2 className="font-cinzel-decorative text-4xl md:text-5xl text-[#0D7377] font-bold mb-6">
            Luxurious <span className="text-[#C5A028]">Rooms</span>
          </h2>
          <div className="w-24 h-1 bg-[#C5A028] mx-auto mb-8" />
          <p className="text-lg text-[#1A1A1A]/80 max-w-2xl mx-auto">
            Rest and rejuvenate in our elegantly appointed rooms with premium amenities.
          </p>
        </div>

        <div className="bg-[#FAF8F5] rounded-2xl p-6 mb-12">
          <h3 className="font-cinzel text-xl text-[#0D7377] font-bold mb-4 text-center">All Rooms Include</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-[#1A1A1A]/80">
            <span className="flex items-center gap-2 justify-center md:justify-start">
              <Check className="w-4 h-4 text-[#C5A028]" /> Private Bathroom & Hygiene Kit for 2
            </span>
            <span className="flex items-center gap-2 justify-center md:justify-start">
              <Check className="w-4 h-4 text-[#C5A028]" /> Air-Conditioned Rooms
            </span>
            <span className="flex items-center gap-2 justify-center md:justify-start">
              <Check className="w-4 h-4 text-[#C5A028]" /> Free Breakfast for 2
            </span>
            <span className="flex items-center gap-2 justify-center md:justify-start">
              <Check className="w-4 h-4 text-[#C5A028]" /> Garden, Pool, Terrace & Roof Deck Access
            </span>
            <span className="flex items-center gap-2 justify-center md:justify-start">
              <Check className="w-4 h-4 text-[#C5A028]" /> WiFi Access
            </span>
            <span className="flex items-center gap-2 justify-center md:justify-start">
              <Check className="w-4 h-4 text-[#C5A028]" /> 22 Hours Stay (2pm to 12nn next day)
            </span>
          </div>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-xl ${
                selectedRoom === room.id ? "ring-4 ring-[#C5A028]" : ""
              }`}
            >
              <div className="relative h-48">
                <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                {room.highlight && (
                  <span className="absolute top-3 right-3 bg-[#C5A028] text-[#0D7377] px-2 py-1 rounded-full text-xs font-bold">
                    {room.highlight}
                  </span>
                )}
              </div>

              <div className="p-5">
                <h3 className="font-cinzel text-lg text-[#0D7377] font-bold mb-1">{room.name}</h3>
                <p className="text-[#C5A028] text-xs font-medium mb-2">{room.altName}</p>

                <div className="flex items-center gap-2 text-[#1A1A1A]/70 text-xs mb-2">
                  <Users className="w-3 h-3" />
                  <span>{room.capacity}</span>
                  <span className="mx-1">|</span>
                  <BedDouble className="w-3 h-3" />
                  <span>{room.bed}</span>
                </div>

                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-[#C5A028] text-2xl font-bold font-cinzel">₱{room.price}</span>
                  <span className="text-[#1A1A1A]/60 text-xs">/night</span>
                </div>

                {/* Feature Icons */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {room.features.slice(0, 4).map((feature) => (
                    <span
                      key={feature}
                      className="text-[#0D7377] bg-[#0D7377]/10 p-1.5 rounded-full"
                      title={featureIcons[feature]?.label}
                    >
                      {featureIcons[feature]?.icon}
                    </span>
                  ))}
                </div>

                {/* Unique Amenities */}
                <div className="space-y-1 mb-3 text-xs text-[#1A1A1A]/70">
                  {room.amenities
                    .filter(
                      (a) =>
                        !a.includes("Private Bathroom") && !a.includes("Air-Conditioned") && !a.includes("Hygiene Kit"),
                    )
                    .slice(0, 2)
                    .map((amenity, idx) => (
                      <p key={idx} className="flex items-start gap-1">
                        <Check className="w-3 h-3 text-[#C5A028] mt-0.5 flex-shrink-0" />
                        {amenity}
                      </p>
                    ))}
                </div>

                <div className="bg-[#0D7377]/5 rounded-lg p-2 mb-3">
                  <p className="text-xs text-[#0D7377] flex items-center gap-1">
                    <Plus className="w-3 h-3" />
                    {room.maxCapacity}
                  </p>
                </div>

                <button
                  className="w-full bg-[#0D7377] text-white py-2.5 rounded-lg font-medium text-sm hover:bg-[#0D7377]/90 transition-colors"
                  onClick={() => {
                    setSelectedRoom(room.id)
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Book This Room
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0D7377] rounded-2xl p-8 text-white">
          <h3 className="font-cinzel-decorative text-2xl text-[#C5A028] font-bold mb-6 text-center">
            Room Booking Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 rounded-xl p-5">
              <p className="text-[#C5A028] font-bold mb-2 font-cinzel text-sm">Reservation Fee</p>
              <p className="text-xl font-bold">₱500</p>
              <p className="text-xs opacity-70">Non-refundable</p>
            </div>
            <div className="bg-white/10 rounded-xl p-5">
              <p className="text-[#C5A028] font-bold mb-2 font-cinzel text-sm">Extra Bed (Single)</p>
              <p className="text-xl font-bold">₱300</p>
              <p className="text-xs opacity-70">per night</p>
            </div>
            <div className="bg-white/10 rounded-xl p-5">
              <p className="text-[#C5A028] font-bold mb-2 font-cinzel text-sm">Extra Bed (Double)</p>
              <p className="text-xl font-bold">₱500</p>
              <p className="text-xs opacity-70">per night</p>
            </div>
            <div className="bg-white/10 rounded-xl p-5">
              <p className="text-[#C5A028] font-bold mb-2 font-cinzel text-sm">Check-in / Check-out</p>
              <p className="text-xl font-bold">2PM - 12NN</p>
              <p className="text-xs opacity-70">22 hours stay</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
