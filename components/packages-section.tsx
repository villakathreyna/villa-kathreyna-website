"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Crown, ChevronDown, ChevronUp, Clock, Users, Home, Waves, Building, Gem } from "lucide-react"
import { motion } from "framer-motion"

const FourPointStar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" />
  </svg>
)

const GoldStar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
)

const weddingPackages = [
  {
    id: "silver",
    name: "Silver",
    price: "80,000",
    pax: "100 pax",
    tier: "silver",
    color: "#A0AEC0",
    bgGradient: "from-[#C0C0C0] to-[#A0AEC0]",
    icon: <FourPointStar className="w-5 h-5" />,
    accommodation: "Free 22 Hrs stay at 1 Queen Room",
    roomDiscount: "10% Discount on Additional Room",
    inclusions: [
      "100 pax food catering services",
      "Free Use of RK Hall, Garden, Pool, Terrace & Roof Deck Access",
      "Free 22 Hrs stay at 1 Queen Room",
      "10% Discount on Additional Room",
      "Tables and Chair Set-up",
      "Presidential Set-up",
      "Simple Decoration",
      "Free 1 Tier Cake with Cake Stand",
      "Simple Grazing Table",
      "Basic Sound and Lights",
      "Couch for the Couple",
      "Something sweet for the couple",
      "1 Bottle of Sparkling wine for the couple",
      "Free Use of Videoke",
      "Free Entrance Signage (Mirror or Easel)",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    price: "90,000",
    pax: "100 pax",
    tier: "gold",
    color: "#D4AF37",
    bgGradient: "from-[#D4AF37] to-[#C5A028]",
    icon: <GoldStar className="w-5 h-5" />,
    accommodation: "Free 22 Hrs stay at 2 Rooms (King Room and Queen Room)",
    roomDiscount: "10% Discount on Additional Room",
    inclusions: [
      "100 pax food catering services",
      "Free Use of RK Hall, garden, Pool, Terrace & Roof Deck Access",
      "Free 22 Hrs stay at 2 Rooms (King Room and Queen Room)",
      "10% Discount on Additional Room",
      "Tables and Chair Set-up",
      "Presidential Set-up",
      "Simple Decoration",
      "Free 1 Tier Cake with Cake Stand",
      "Simple Grazing Table",
      "Basic Sound and Lights",
      "Couch for the Couple",
      "Something sweet for the couple",
      "1 Bottle of Sparkling wine for the couple",
      "Free Use of Videoke",
      "Free Entrance Signage (Mirror or Easel)",
    ],
  },
  {
    id: "platinum-100",
    name: "Platinum",
    price: "120,000",
    pax: "100 pax",
    tier: "platinum",
    color: "#E5E4E2",
    bgGradient: "from-[#E5E4E2] to-[#B8B8B8]",
    icon: <Crown className="w-5 h-5" />,
    accommodation: "22 Hrs Reserved Access to All 5 Rooms",
    roomDiscount: null,
    inclusions: [
      "100 pax food catering services",
      "Free Use of RK Hall, garden, Pool, Terrace & Roof Deck Access",
      "22 Hrs Reserved Access to All Rooms (King Room, Duchess Room, Queen Room, Princess Room, and Prince Room)",
      "Tables and Chair Setup",
      "Presidential Setup",
      "Simple Decoration",
      "Free 1 Tier Cake with Cake Stand",
      "Simple Grazing Table",
      "Basic Sound and Lights",
      "Couch for the Couple",
      "Something sweet for the couple",
      "1 Bottle of Sparkling wine for the couple",
      "Free Use of Videoke",
      "Free Entrance Signage (Mirror or Easel)",
    ],
  },
  {
    id: "diamond",
    name: "Diamond",
    price: "200,000",
    pax: "200 pax",
    tier: "diamond",
    color: "#B9F2FF",
    bgGradient: "from-[#B9F2FF] to-[#7DD3FC]",
    icon: <Gem className="w-5 h-5" />,
    accommodation: "22 Hrs Reserved Access to All 5 Rooms",
    roomDiscount: null,
    inclusions: [
      "200 pax food catering services",
      "Free Use of RK Hall, garden, Pool, Terrace & Roof Deck Access",
      "22 Hrs Reserved Access to All Rooms (King Room, Duchess Room, Queen Room, Princess Room, and Prince Room)",
      "Tables and Chair Setup",
      "Presidential Setup",
      "Simple Decoration",
      "Free 1 Tier Cake with Cake Stand",
      "Simple Grazing Table",
      "Basic Sound and Lights",
      "Couch for the Couple",
      "Something sweet for the couple",
      "1 Bottle of Sparkling wine for the couple",
      "Free Use of Videoke",
      "Free Entrance Signage (Mirror or Easel)",
    ],
  },
]

const allInWeddingInclusions = [
  "All Access to the Venue",
  "All 5 Rooms for 22 Hours",
  "Food Catering Services",
  "Simple Motif Venue Decoration",
  "Photo & Video Coverage",
  "Emcee/Host",
  "Sounds & Lights",
  "1 Tier Cake",
  "Wine & Couch for Couple",
  "Grazing Table",
  "Photobooth",
  "Free Entrance Signage (Mirror or Easel)",
]

const allInWeddingAddOns = [
  "Bride's Bouquet & Groom's Boutonniere",
  "Entourage Bouquets & Boutonnieres",
  "Invitation for Guests",
  "Bridal Car w/ Flower Decoration",
  "HMUA for Bride",
  "HMUA for Parents & Entourage",
  "Same Day Edit (SDE)",
]

const allInWeddingPackages = [
  { pax: "100 pax", price: "150,000" },
  { pax: "150 pax", price: "200,000" },
  { pax: "200 pax", price: "250,000" },
]

const commonVenueInclusions = [
  "Tables and chairs setup according to numbers of pax",
  "Water dispenser with 2 containers of water",
  "2 buffet tables with cover",
  "Celebrator's chair",
  "Videoke, speakers with wireless microphones",
  "Parking spaces",
]

const venuePackages = [
  {
    id: "hall-only",
    name: "RK Hall",
    icon: <Home className="w-8 h-8" />,
    description: "Premium elegance and sophistication without the premium price",
    rates: [
      { pax: "20-50 pax", hours6: "5,000", hours8: "7,000" },
      { pax: "50-100 pax", hours6: "8,000", hours8: "10,000" },
    ],
    inclusions: [
      "RK Hall access",
      "Tables and chairs setup according to numbers of pax",
      "Water dispenser with 2 containers of water",
      "2 buffet tables with cover",
      "Celebrator's chair",
      "Videoke, speakers with wireless microphones",
      "Parking spaces",
    ],
  },
  {
    id: "hall-pool",
    name: "RK Hall (with Pool Access)",
    icon: <Building className="w-8 h-8" />,
    description: "Elegant indoor-outdoor experience combining hall sophistication with poolside refreshment",
    rates: [
      { pax: "20-50 pax", hours6: "10,000", hours8: "12,000" },
      { pax: "50-100 pax", hours6: "13,000", hours8: "15,000" },
    ],
    inclusions: [
      "RK Hall access",
      "Swimming pool access",
      "Tables and chairs setup according to numbers of pax",
      "Water dispenser with 2 containers of water",
      "2 buffet tables with cover",
      "Celebrator's chair",
      "Videoke, speakers with wireless microphones",
      "Parking spaces",
    ],
  },
  {
    id: "garden-pool",
    name: "KR Garden & Pool Access",
    icon: <Waves className="w-8 h-8" />,
    description: "Outdoor paradise with sophisticated amenities, affordable elegance",
    rates: [
      { pax: "20-50 pax", hours6: "8,000", hours8: "10,000" },
      { pax: "50-100 pax", hours6: "11,000", hours8: "13,000" },
      { pax: "100-150 pax", hours6: "15,000", hours8: "17,000" },
      { pax: "150-200 pax", hours6: "18,000", hours8: "20,000" },
      { pax: "200-250 pax", hours6: "21,000", hours8: "23,000" },
    ],
    inclusions: [
      "Garden area access",
      "Swimming pool access",
      "Tables and chairs setup according to numbers of pax",
      "Water dispenser with 2 containers of water",
      "2 buffet tables with cover",
      "Celebrator's chair",
      "Videoke, speakers with wireless microphones",
      "Parking spaces",
    ],
  },
  {
    id: "hall-garden-pool",
    name: "RK Hall and KR Garden & Pool Access",
    icon: <Building className="w-8 h-8" />,
    description: "The ultimate celebration experience: luxury meets accessibility",
    rates: [
      { pax: "20-50 pax", hours6: "12,000", hours8: "14,000" },
      { pax: "50-100 pax", hours6: "15,000", hours8: "17,000" },
      { pax: "100-150 pax", hours6: "18,000", hours8: "20,000" },
      { pax: "150-200 pax", hours6: "21,000", hours8: "23,000" },
      { pax: "200-250 pax", hours6: "24,000", hours8: "26,000" },
    ],
    inclusions: [
      "RK Hall access",
      "Garden area access",
      "Swimming pool access",
      "Tables and chairs setup according to numbers of pax",
      "Water dispenser with 2 containers of water",
      "2 buffet tables with cover",
      "Celebrator's chair",
      "Videoke, speakers with wireless microphones",
      "Parking spaces",
    ],
  },
]

const exclusiveAccessPackage = {
  name: "Exclusive Access",
  price: "25,000",
  duration: "22 Hours (2pm to 12nn next day)",
  spiel: "Your private sanctuary: unwind in 5 luxurious rooms with premium amenities and full venue access—all-inclusive elegance",
  inclusions: [
    "5 Rooms (King, Queen, Duchess, Prince, Princess)",
    "Overnight sleeping capacity: 20 pax (based on standard beds)",
    "Full access to swimming pool & garden",
    "Tables & chairs for 50 pax",
    "1 buffet table",
    "Water dispenser with free 2 gallons of water",
    "Full kitchen access (Corkage fee: ₱500)",
  ],
  eventBonus: [
    "Hall use included with free table & chair setup for 50 pax",
    "All Access Package good for 50 guests total (day + overnight combined, including 20 overnight guests)",
  ],
  additionalCharges: [
    { item: "Extra bed (single)", price: "P300/night" },
    { item: "Extra bed (double)", price: "P500/night" },
    { item: "Additional overnight guest (no bed)", price: "P300/head/night" },
    { item: "Extra tables & chairs for hall", price: "P300/set" },
    { item: "Additional entrance fee (beyond 50 pax)", price: "P150/head" },
  ],
}

const addOns = [
  { item: "Catering Service (Food, Utensils & Waiters)", price: "starts at ₱500/head" },
  { item: "Backdrop Decor", price: "starts at ₱5,000" },
  { item: "All-In Customized Decor", price: "starts at ₱10,000" },
  { item: "Host/Clown/Magician/Game Facilitator", price: "starts at ₱5,000" },
  { item: "Photographer", price: "starts at ₱5,000" },
  { item: "Photobooth", price: "starts at ₱4,000" },
  { item: "Grazing Table", price: "starts at ₱10,000" },
  { item: "Lechon", price: "starts at ₱9,000" },
  { item: "Cake", price: "starts at ₱3,000" },
  { item: "Bubble Show", price: "starts at ₱3,000" },
  { item: "Inflatables", price: "starts at ₱4,000" },
  { item: "On-The-Day Coordinators", price: "starts at ₱10,000" },
  { item: "Party Food Carts", price: "starts at ₱3,000" },
  { item: "Other Party Needs & Services", price: "Contact RkreatioNs Catering Services" },
]

const eventPackages = [
  {
    id: "birthday-catering",
    name: "Birthday Package",
    provider: "RKreatioNs Catering Services",
    price: "60,000",
    pax: "100 pax",
    tagline: "Make your birthday celebration stress-free and extra special with our all-in birthday catering package 💖",
    inclusions: [
      "Food catering services for 100 pax",
      "Simple grazing table / dessert corner",
      "Tables & chairs setup for 100 pax",
      "Buffet table with skirting",
      "Cake table with skirting",
      "Gift table with skirting",
      "Customized decorations according to your chosen theme",
    ],
    freebies: [
      "Celebrant's chair",
      "Ladder souvenir stand",
      "Entrance signage (Mirror or Easel)",
    ],
    addOns: [
      { item: "Event host", price: "5,000" },
      { item: "Photographer", price: "5,000" },
      { item: "Clown / Magician / Host / Game Facilitator", price: "5,000" },
      { item: "Face painting", price: "3,000" },
      { item: "Bubble show", price: "3,000" },
      { item: "Inflatables", price: "starts at 4,000" },
      { item: "Cake", price: "starts at 2,850" },
      { item: "Party food carts (fries, hotdog, ice cream, cotton candy)", price: "Contact for pricing" },
    ],
    contact: {
      phone: "0977 627 1360",
      facebook: "https://www.facebook.com/profile.php?id=100064225560986",
    },
  },
  {
    id: "birthday-baptism-villa",
    name: "Birthday or Baptism Service Package",
    provider: "Villa Kathreyna",
    price: "60,000",
    pax: "70 pax",
    tagline: "Celebrate life's precious milestones with an all-inclusive package combining elegant venue, delicious catering, and complimentary accommodations",
    inclusions: [
      "Food catering services for 70 pax",
      "6 hours free use of: RK Hall, Garden, Pool access",
      "Free 22-hour stay in 1 Queen Room (2 pax)",
      "10% discount on additional rooms",
      "Customized birthday decorations",
      "Tables and chair setup",
      "Table centerpieces",
      "Simple grazing table / dessert corner",
      "Basic sound and lights",
      "Free use of videoke",
      "Free entrance signage (Mirror or Easel)",
      "Free 1-tier cake",
      "Cake table",
      "Souvenir stand",
    ],
    contact: {
      phone: "0977 627 1360",
      facebook: "Villa Kathreyna",
    },
  },
  {
    id: "debut-55k",
    name: "Debut Package A",
    provider: "Villa Kathreyna",
    price: "55,000",
    pax: "50 pax",
    tagline: "Good for 50 pax",
    inclusions: [
      "Food catering services for 50 pax",
      "3 hours access to villa (Pre-Debut Photoshoot)",
      "6 hours free use of: RK Hall, Garden, Pool, Terrace & Roof Deck",
      "Free 22-hour stay in 2 rooms (King Room, Queen Room)",
      "10% discount on additional rooms",
      "Simple grazing table",
      "Customized backdrop decorations",
      "Tables and chair setup",
      "Basic sound and lights",
      "Free use of videoke",
      "Free entrance signage (Selfie Mirror or Easel)",
    ],
    contact: {
      phone: "0977 627 1360",
      facebook: "Villa Kathreyna",
    },
  },
  {
    id: "debut-80k",
    name: "Debut Package B",
    provider: "Villa Kathreyna",
    price: "80,000",
    pax: "100 pax",
    tagline: "Good for 100 pax",
    inclusions: [
      "Food catering services for 100 pax",
      "3 hours access to villa (Pre-Debut Photoshoot)",
      "6 hours free use of: RK Hall, Garden, Pool, Terrace & Roof Deck",
      "22-hour access to 3 rooms (King Room, Queen Room, Duchess Room)",
      "10% discount on additional rooms",
      "Simple grazing table",
      "Customized backdrop decorations",
      "Tables and chair setup",
      "Basic sound and lights",
      "Free use of videoke",
      "Free entrance signage (Selfie Mirror or Easel)",
    ],
    contact: {
      phone: "0977 627 1360",
      facebook: "Villa Kathreyna",
    },
  },
]

const corkageRates = [
  { item: "Electric Food Cart", price: "₱1,000" },
  { item: "Lechon", price: "₱1,500" },
  { item: "Mobile Bar/Coffee Bar", price: "₱2,000" },
  { item: "Sound/Band", price: "₱2,000" },
  { item: "Lights", price: "₱1,000" },
  { item: "LED Wall", price: "₱2,500" },
]

export default function PackagesSection() {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null)

  const handleSelectPackage = (packageName: string) => {
    // Dispatch custom event with package name
    window.dispatchEvent(new CustomEvent('selectPackage', { detail: packageName }))
    // Scroll to contact form
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const getTierStyles = (tier: string) => {
    switch (tier) {
      case "silver":
        return {
          headerBg: "bg-gradient-to-r from-[#C0C0C0] to-[#A0AEC0]",
          textColor: "text-[#4A5568]",
          borderColor: "border-[#A0AEC0]",
          iconBg: "bg-[#A0AEC0]",
        }
      case "gold":
        return {
          headerBg: "bg-gradient-to-r from-[#D4AF37] to-[#C5A028]",
          textColor: "text-[#8B6914]",
          borderColor: "border-[#D4AF37]",
          iconBg: "bg-[#D4AF37]",
        }
      case "platinum":
        return {
          headerBg: "bg-gradient-to-r from-[#E5E4E2] to-[#B8B8B8]",
          textColor: "text-[#4A5568]",
          borderColor: "border-[#B8B8B8]",
          iconBg: "bg-[#B8B8B8]",
        }
      case "diamond":
        return {
          headerBg: "bg-gradient-to-r from-[#B9F2FF] to-[#7DD3FC]",
          textColor: "text-[#0369A1]",
          borderColor: "border-[#7DD3FC]",
          iconBg: "bg-[#7DD3FC]",
        }
      default:
        return {
          headerBg: "bg-[#0D7377]",
          textColor: "text-[#0D7377]",
          borderColor: "border-[#0D7377]",
          iconBg: "bg-[#0D7377]",
        }
    }
  }

  return (
    <section id="packages" className="py-20 bg-[#FAF8F5] ornament-pattern">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#C5A028] font-medium tracking-widest uppercase mb-4 font-cinzel">Our Packages</p>
          <h2 className="font-cinzel-decorative text-4xl md:text-5xl text-[#0D7377] font-bold mb-6">
            Celebrate in <span className="text-[#C5A028]">Style</span>
          </h2>
          <div className="w-24 h-1 bg-[#C5A028] mx-auto mb-8" />
          <p className="text-lg text-[#1A1A1A]/80 max-w-2xl mx-auto">
            Choose from our carefully curated packages designed to make your special day unforgettable.
          </p>
        </motion.div>

        <Tabs defaultValue="venue" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TabsList className="flex justify-center mb-8 md:mb-12 bg-transparent gap-1.5 md:gap-3 lg:gap-4 flex-wrap">
              <TabsTrigger
                value="venue"
                className="px-2.5 sm:px-4 md:px-5 lg:px-7 py-2 md:py-3 rounded-full bg-white border-2 border-[#0D7377] text-[#0D7377] font-bold shadow-md hover:shadow-lg hover:bg-[#FAF8F5] data-[state=active]:bg-[#0D7377] data-[state=active]:text-white data-[state=active]:border-[#0D7377] data-[state=active]:shadow-lg transition-all text-xs sm:text-xs md:text-sm lg:text-base"
              >
                Venue Packages
              </TabsTrigger>
              <TabsTrigger
                value="exclusive"
                className="px-2.5 sm:px-4 md:px-5 lg:px-7 py-2 md:py-3 rounded-full bg-white border-2 border-[#0D7377] text-[#0D7377] font-bold shadow-md hover:shadow-lg hover:bg-[#FAF8F5] data-[state=active]:bg-[#0D7377] data-[state=active]:text-white data-[state=active]:border-[#0D7377] data-[state=active]:shadow-lg transition-all text-xs sm:text-xs md:text-sm lg:text-base"
              >
                Exclusive Access
              </TabsTrigger>
              <TabsTrigger
                value="wedding"
                className="px-2.5 sm:px-4 md:px-5 lg:px-7 py-2 md:py-3 rounded-full bg-white border-2 border-[#0D7377] text-[#0D7377] font-bold shadow-md hover:shadow-lg hover:bg-[#FAF8F5] data-[state=active]:bg-[#0D7377] data-[state=active]:text-white data-[state=active]:border-[#0D7377] data-[state=active]:shadow-lg transition-all text-xs sm:text-xs md:text-sm lg:text-base"
              >
                Weddings
              </TabsTrigger>
              <TabsTrigger
                value="allin"
                className="px-2.5 sm:px-4 md:px-5 lg:px-7 py-2 md:py-3 rounded-full bg-white border-2 border-[#0D7377] text-[#0D7377] font-bold shadow-md hover:shadow-lg hover:bg-[#FAF8F5] data-[state=active]:bg-[#0D7377] data-[state=active]:text-white data-[state=active]:border-[#0D7377] data-[state=active]:shadow-lg transition-all text-xs sm:text-xs md:text-sm lg:text-base"
              >
                All-In Wedding
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="px-2.5 sm:px-4 md:px-5 lg:px-7 py-2 md:py-3 rounded-full bg-white border-2 border-[#0D7377] text-[#0D7377] font-bold shadow-md hover:shadow-lg hover:bg-[#FAF8F5] data-[state=active]:bg-[#0D7377] data-[state=active]:text-white data-[state=active]:border-[#0D7377] data-[state=active]:shadow-lg transition-all text-xs sm:text-xs md:text-sm lg:text-base"
              >
                Event Packages
              </TabsTrigger>
              <TabsTrigger
                value="addons"
                className="px-2.5 sm:px-4 md:px-5 lg:px-7 py-2 md:py-3 rounded-full bg-white border-2 border-[#0D7377] text-[#0D7377] font-bold shadow-md hover:shadow-lg hover:bg-[#FAF8F5] data-[state=active]:bg-[#0D7377] data-[state=active]:text-white data-[state=active]:border-[#0D7377] data-[state=active]:shadow-lg transition-all text-xs sm:text-xs md:text-sm lg:text-base"
              >
                Add-Ons
              </TabsTrigger>
            </TabsList>
          </motion.div>

          {/* Venue Packages Tab (Hall & Pool) */}
          <TabsContent value="venue">
            <motion.div
              className="bg-gradient-to-br from-[#0D7377] to-[#0D7377]/90 rounded-2xl p-4 md:p-6 lg:p-8 mb-6 md:mb-8 shadow-lg max-w-5xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
                <Gem className="w-4 md:w-5 h-4 md:h-5 text-[#C5A028]" />
                <h3 className="font-cinzel text-base md:text-lg lg:text-xl text-white font-bold text-center">All Hall & Pool Packages Include</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 text-xs md:text-sm text-white/90">
                {commonVenueInclusions.map((item, idx) => (
                  <span key={idx} className="flex items-center gap-2 justify-center md:justify-start">
                    <Check className="w-3 md:w-4 h-3 md:h-4 text-[#C5A028] flex-shrink-0" /> <span>{item}</span>
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {venuePackages.map((pkg, index) => (
                <motion.div 
                  key={pkg.id} 
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-[#0D7377] p-5 md:p-6 text-white text-center">
                    <div className="text-[#C5A028] mb-3 flex justify-center text-2xl md:text-3xl">{pkg.icon}</div>
                    <h3 className="font-cinzel-decorative text-lg md:text-xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-white/80 text-sm md:text-base">{pkg.description}</p>
                  </div>
                  <div className="p-5 md:p-6">
                    <h4 className="font-cinzel text-base md:text-lg text-[#0D7377] font-bold mb-3">Rates</h4>
                    <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-5">
                      {pkg.rates.map((rate, idx) => (
                        <div key={idx} className="bg-[#FAF8F5] p-3 md:p-4 rounded-lg">
                          <p className="font-bold text-[#0D7377] text-sm md:text-base mb-1">{rate.pax}</p>
                          {"day" in rate ? (
                            <div className="space-y-1 text-sm md:text-base">
                              <div className="flex items-center gap-2">
                                <span className="text-[#1A1A1A]/60">Day:</span>
                                <span className="font-bold text-[#C5A028]">₱{rate.day}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[#1A1A1A]/60">Night:</span>
                                <span className="font-bold text-[#C5A028]">₱{rate.night}</span>
                              </div>
                            </div>
                          ) : "hours6" in rate ? (
                            <div className="space-y-1 text-sm md:text-base">
                              <div className="flex items-center gap-2">
                                <span className="text-[#1A1A1A]/60 whitespace-nowrap">6 hrs:</span>
                                <span className="font-bold text-[#C5A028]">₱{rate.hours6}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[#1A1A1A]/60 whitespace-nowrap">8 hrs:</span>
                                <span className="font-bold text-[#C5A028]">₱{rate.hours8}</span>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-1 text-sm md:text-base">
                              <div className="flex items-center gap-2">
                                <span className="text-[#1A1A1A]/60 whitespace-nowrap">4 hrs:</span>
                                <span className="font-bold text-[#C5A028]">₱{rate.hours4}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[#1A1A1A]/60 whitespace-nowrap">6 hrs:</span>
                                <span className="font-bold text-[#C5A028]">₱{rate.hours6}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => handleSelectPackage(pkg.name)}
                      className="w-full bg-[#C5A028] text-[#0D7377] py-3 md:py-4 rounded-lg font-bold text-sm md:text-base hover:bg-[#E8D48B] transition-colors active:scale-95"
                    >
                      Book This Package
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Exclusive Access Tab */}
          <TabsContent value="exclusive">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0D7377] to-[#0D7377]/90 rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="p-4 md:p-8 lg:p-12 text-white text-center border-b border-[#C5A028]/30">
                  <div className="inline-flex items-center gap-2 bg-[#C5A028] text-[#0D7377] px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6">
                    <Crown className="w-3 md:w-4 h-3 md:h-4" />
                    BEST VALUE
                  </div>
                  <h3 className="font-cinzel-decorative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                    {exclusiveAccessPackage.name}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
                    {exclusiveAccessPackage.spiel}
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
                    <Clock className="w-4 md:w-5 h-4 md:h-5 text-[#C5A028]" />
                    <span className="text-[#C5A028] text-xs md:text-base">{exclusiveAccessPackage.duration}</span>
                  </div>
                  <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-cinzel text-[#C5A028] mb-2">
                    ₱{exclusiveAccessPackage.price}
                  </p>
                </div>

                <div className="p-4 md:p-8 lg:p-12 bg-white text-[#1A1A1A]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <h4 className="font-cinzel text-base md:text-lg lg:text-xl text-[#0D7377] font-bold mb-3 md:mb-4 flex items-center gap-2">
                        <Home className="w-4 md:w-5 h-4 md:h-5 text-[#C5A028]" />
                        Package Inclusions
                      </h4>
                      <ul className="space-y-2 md:space-y-3">
                        {exclusiveAccessPackage.inclusions.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 md:gap-3">
                            <Check className="w-4 md:w-5 h-4 md:h-5 text-[#0D7377] flex-shrink-0 mt-0.5" />
                            <span className="text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-cinzel text-base md:text-lg lg:text-xl text-[#0D7377] font-bold mb-3 md:mb-4 flex items-center gap-2">
                        <Users className="w-4 md:w-5 h-4 md:h-5 text-[#C5A028]" />
                        Event Booking Bonus
                      </h4>
                      <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                        {exclusiveAccessPackage.eventBonus.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 md:gap-3">
                            <GoldStar className="w-4 md:w-5 h-4 md:h-5 text-[#C5A028] flex-shrink-0 mt-0.5" />
                            <span className="text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-cinzel text-base md:text-lg lg:text-xl text-[#0D7377] font-bold mb-3 md:mb-4">Additional Charges</h4>
                      <div className="bg-[#FAF8F5] rounded-xl p-3 md:p-4">
                        <ul className="space-y-1 md:space-y-2">
                          {exclusiveAccessPackage.additionalCharges.map((charge, idx) => (
                            <li key={idx} className="flex justify-between text-xs md:text-sm">
                              <span className="text-[#1A1A1A]/70">{charge.item}</span>
                              <span className="font-bold text-[#0D7377]">{charge.price}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleSelectPackage("Exclusive Access")}
                    className="w-full bg-[#C5A028] text-[#0D7377] py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-[#E8D48B] transition-colors active:scale-95 mt-6 md:mt-8"
                  >
                    Book Exclusive Access
                  </button>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          {/* Wedding Packages Tab - Full comparison table with all inclusions */}
          <TabsContent value="wedding">
            {/* Title and Spiel Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0D7377] to-[#0D7377]/90 rounded-2xl p-6 md:p-8 mb-8 md:mb-12 max-w-5xl mx-auto text-center shadow-lg"
            >
              <h2 className="font-cinzel-decorative text-2xl sm:text-3xl md:text-4xl text-white mb-3 md:mb-4">
                Your Dream Wedding Awaits
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Where elegance meets affordability—complete venue access, exquisite catering, and luxurious accommodations for your unforgettable day.
              </p>
            </motion.div>

            {/* Package Comparison Table - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}              viewport={{ once: true }}
              className="hidden lg:block mb-12 overflow-x-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <table className="w-full table-fixed">
                  <colgroup>
                    <col className="w-[20%]" />
                    <col className="w-[20%]" />
                    <col className="w-[20%]" />
                    <col className="w-[20%]" />
                    <col className="w-[20%]" />
                  </colgroup>
                  <thead>
                    <tr className="bg-[#0D7377] text-white">
                      <th className="p-4 text-left font-cinzel text-sm">Package Feature</th>
                      {weddingPackages.map((pkg) => {
                        const styles = getTierStyles(pkg.tier)
                        return (
                          <th key={pkg.id} className="p-4 text-center">
                            <div className="flex flex-col items-center">
                              <div className={`p-2 rounded-full ${styles.iconBg} text-white mb-2`}>{pkg.icon}</div>
                              <span className="font-cinzel-decorative text-lg">{pkg.name}</span>
                              <span className="text-sm opacity-80">{pkg.pax}</span>
                            </div>
                          </th>
                        )
                      })}
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-[#E5E0D8] bg-[#FAF8F5]">
                      <td className="p-4 font-bold text-[#0D7377]">Price</td>
                      {weddingPackages.map((pkg) => (
                        <td key={pkg.id} className="p-4 text-center">
                          <span className="text-2xl font-bold text-[#C5A028] font-cinzel">₱{pkg.price}</span>
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-[#E5E0D8]">
                      <td className="p-4 font-bold text-[#0D7377]">Food Catering</td>
                      {weddingPackages.map((pkg) => (
                        <td key={pkg.id} className="p-4 text-center text-[#1A1A1A]/80">
                          {pkg.pax}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-[#E5E0D8] bg-[#FAF8F5]">
                      <td className="p-4 font-bold text-[#0D7377]">Venue Access</td>
                      {weddingPackages.map((pkg) => (
                        <td key={pkg.id} className="p-4 text-center text-[#1A1A1A]/80">
                          Hall, Garden, Pool, Terrace, Roof Deck
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-[#E5E0D8]">
                      <td className="p-4 font-bold text-[#0D7377]">Room Accommodation</td>
                      {weddingPackages.map((pkg) => (
                        <td key={pkg.id} className="p-4 text-center text-[#1A1A1A]/80">
                          {pkg.accommodation}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-[#E5E0D8] bg-[#FAF8F5]">
                      <td className="p-4 font-bold text-[#0D7377]">Additional Room Discount</td>
                      {weddingPackages.map((pkg) => (
                        <td key={pkg.id} className="p-4 text-center text-[#1A1A1A]/80">
                          {pkg.roomDiscount || "All Rooms Included"}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-[#E5E0D8]">
                      <td className="p-4 font-bold text-[#0D7377]">Setup & Decoration</td>
                      {weddingPackages.map((pkg) => (
                        <td key={pkg.id} className="p-4 text-center text-[#1A1A1A]/80">
                          Tables, Chairs, Presidential Setup
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-[#E5E0D8] bg-[#FAF8F5]">
                      <td className="p-4 font-bold text-[#0D7377]">Cake & Grazing Table</td>
                      {weddingPackages.map((pkg) => (
                        <td key={pkg.id} className="p-4 text-center text-[#1A1A1A]/80">
                          1 Tier Cake + Simple Grazing
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-[#E5E0D8]">
                      <td className="p-4 font-bold text-[#0D7377]">Sound, Lights, Videoke</td>
                      {weddingPackages.map((pkg) => (
                        <td key={pkg.id} className="p-4 text-center">
                          <Check className="w-5 h-5 text-[#0D7377] mx-auto" />
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-[#E5E0D8] bg-[#FAF8F5]">
                      <td className="p-4 font-bold text-[#0D7377]">Couple Extras</td>
                      {weddingPackages.map((pkg) => (
                        <td key={pkg.id} className="p-4 text-center text-[#1A1A1A]/80">
                          Couch, Wine, Sweets
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-[#E5E0D8]">
                      <td className="p-4 font-bold text-[#0D7377]">Entrance Signage</td>
                      {weddingPackages.map((pkg) => (
                        <td key={pkg.id} className="p-4 text-center text-[#1A1A1A]/80">
                          Free Entrance Signage (Mirror or Easel)
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4"></td>
                      {weddingPackages.map((pkg) => {
                        const styles = getTierStyles(pkg.tier)
                        return (
                          <td key={pkg.id} className="p-4 text-center">
                            <button
                              onClick={() => handleSelectPackage(pkg.name)}
                              className={`w-full ${styles.headerBg} ${pkg.tier === "gold" || pkg.tier === "silver" ? "text-[#1A1A1A]" : "text-[#1A1A1A]"} py-3 rounded-lg font-bold hover:opacity-90 transition-opacity`}
                            >
                              Book {pkg.name}
                            </button>
                          </td>
                        )
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Mobile View - Cards with tier colors */}
            <div className="lg:hidden space-y-6">
              {weddingPackages.map((pkg, index) => {
                const styles = getTierStyles(pkg.tier)
                const isExpanded = expandedPackage === pkg.id

                return (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${styles.borderColor}`}
                  >
                    <div className={`${styles.headerBg} p-6 text-center`}>
                      <div className="flex justify-center mb-3">{pkg.icon}</div>
                      <h3 className="font-cinzel-decorative text-2xl font-bold text-[#1A1A1A] mb-1">{pkg.name}</h3>
                      <p className="text-[#1A1A1A]/70 text-sm mb-3">{pkg.pax}</p>
                      <p className="text-4xl font-bold font-cinzel text-[#1A1A1A]">₱{pkg.price}</p>
                    </div>

                    <div className="p-6">
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between py-2 border-b border-[#E5E0D8]">
                          <span className="text-[#1A1A1A]/60 text-sm">Accommodation</span>
                          <span className="text-[#0D7377] font-medium text-sm text-right max-w-[60%]">
                            {pkg.accommodation}
                          </span>
                        </div>
                        {pkg.roomDiscount && (
                          <div className="flex justify-between py-2 border-b border-[#E5E0D8]">
                            <span className="text-[#1A1A1A]/60 text-sm">Room Discount</span>
                            <span className="text-[#0D7377] font-medium text-sm">{pkg.roomDiscount}</span>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => setExpandedPackage(isExpanded ? null : pkg.id)}
                        className="flex items-center justify-center gap-2 text-[#0D7377] font-medium mb-4 w-full"
                      >
                        {isExpanded ? "Hide" : "Show"} All Inclusions
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      {isExpanded && (
                        <ul className="space-y-2 mb-4 text-sm">
                          {pkg.inclusions.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[#1A1A1A]/80">
                              <Check className="w-4 h-4 text-[#0D7377] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <button
                        onClick={() => handleSelectPackage(pkg.name)}
                        className={`w-full ${styles.headerBg} text-[#1A1A1A] py-3 rounded-lg font-bold hover:opacity-90 transition-opacity`}
                      >
                        Book {pkg.name} Package
                      </button>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </TabsContent>

          {/* All-In Wedding Tab */}
          <TabsContent value="allin">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#0D7377] to-[#0D7377]/90 p-8 text-white text-center">
                  <div className="inline-flex items-center gap-2 bg-[#C5A028] text-[#0D7377] px-4 py-2 rounded-full text-sm font-bold mb-4">
                    <Crown className="w-4 h-4" />
                    COMPLETE PACKAGE
                  </div>
                  <h3 className="font-cinzel-decorative text-3xl md:text-4xl font-bold mb-2">All-In Wedding Package</h3>
                  <p className="text-white/80">Everything you need for your perfect wedding day</p>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {allInWeddingPackages.map((pkg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-[#FAF8F5] rounded-xl p-6 text-center border-2 border-transparent hover:border-[#C5A028] transition-colors"
                      >
                        <p className="text-[#0D7377] font-bold mb-2">{pkg.pax}</p>
                        <p className="text-3xl font-bold text-[#C5A028] font-cinzel">₱{pkg.price}</p>
                      </motion.div>
                    ))}
                  </div>

                  <h4 className="font-cinzel text-xl text-[#0D7377] font-bold mb-4 text-center">Package Inclusions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {allInWeddingInclusions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-[#FAF8F5] p-3 rounded-lg">
                        <Check className="w-5 h-5 text-[#0D7377] flex-shrink-0 mt-0.5" />
                        <span className="text-[#1A1A1A]/80">{item}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="font-cinzel text-xl text-[#0D7377] font-bold mb-4 text-center">Optional Add-Ons</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {allInWeddingAddOns.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-[#FAF8F5] p-3 rounded-lg">
                        <Check className="w-5 h-5 text-[#0D7377] flex-shrink-0 mt-0.5" />
                        <span className="text-[#1A1A1A]/80">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleSelectPackage("All-In Wedding")}
                    className="w-full bg-[#C5A028] text-[#0D7377] py-4 rounded-lg font-bold text-lg hover:bg-[#E8D48B] transition-colors"
                  >
                    Book All-In Wedding Package
                  </button>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          {/* Add-Ons Tab */}
          <TabsContent value="addons">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="bg-[#0D7377] p-6 text-white">
                  <h3 className="font-cinzel-decorative text-2xl font-bold">Available Add-Ons</h3>
                  <p className="text-white/80 text-sm mt-2">Enhance your event with these additional services</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {addOns.map((addon, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between items-center py-3 border-b border-[#E5E0D8] last:border-0"
                      >
                        <span className="text-[#1A1A1A]/80">{addon.item}</span>
                        {addon.item === "Other Party Needs & Services" ? (
                          <a 
                            href="https://www.facebook.com/profile.php?id=100064225560986" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-bold text-[#C5A028] hover:text-[#0D7377] transition-colors underline"
                          >
                            {addon.price}
                          </a>
                        ) : (
                          <span className="font-bold text-[#C5A028]">{addon.price}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="bg-[#C5A028] p-6 text-[#0D7377]">
                  <h3 className="font-cinzel-decorative text-2xl font-bold">Corkage Rates</h3>
                  <p className="text-[#0D7377]/80 text-sm mt-2">Fees for bringing your own suppliers</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {corkageRates.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between items-center py-3 border-b border-[#E5E0D8] last:border-0"
                      >
                        <span className="text-[#1A1A1A]/80">{item.item}</span>
                        <span className="font-bold text-[#0D7377]">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          {/* Event Packages Tab */}
          <TabsContent value="events">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {eventPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[#0D7377] to-[#0D7377]/90 p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-cinzel-decorative text-2xl font-bold">{pkg.name}</h3>
                      <span className="text-xs bg-[#C5A028] text-[#0D7377] px-3 py-1 rounded-full font-semibold">
                        {pkg.provider}
                      </span>
                    </div>
                    {pkg.tagline && (
                      <p className="text-white/90 text-sm italic">{pkg.tagline}</p>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Price and Pax */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-3xl font-bold text-[#C5A028]">₱{pkg.price}</p>
                        <p className="text-[#1A1A1A]/60">{pkg.pax}</p>
                      </div>
                    </div>

                    {/* Inclusions */}
                    <h4 className="font-cinzel text-lg font-bold text-[#0D7377] mb-3">Package Inclusions</h4>
                    <ul className="space-y-2 mb-6">
                      {pkg.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#1A1A1A]/80">
                          <Check className="w-4 h-4 text-[#0D7377] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                        {/* Freebies */}
                        {pkg.freebies && (
                          <>
                            <h4 className="font-cinzel text-lg font-bold text-[#0D7377] mb-3">Freebies</h4>
                            <ul className="space-y-2 mb-6">
                              {pkg.freebies.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-[#1A1A1A]/80">
                                  <Check className="w-4 h-4 text-[#0D7377] flex-shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {/* Add-Ons */}
                        {pkg.addOns && (
                          <>
                            <h4 className="font-cinzel text-lg font-bold text-[#0D7377] mb-3">Add-Ons (Optional)</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                              {pkg.addOns.map((addon, idx) => (
                                <div key={idx} className="flex justify-between items-center py-2 px-3 bg-[#FAF8F5] rounded-lg">
                                  <span className="text-sm text-[#1A1A1A]/80">{addon.item}</span>
                                  <span className="text-sm font-bold text-[#C5A028]">₱{addon.price}</span>
                                </div>
                              ))}
                            </div>
                          </>
                        )}


                    {/* Contact Info for RKreatioNs packages only */}
                    {pkg.contact && pkg.provider === "RKreatioNs Catering Services" && (
                      <div className="mb-4 p-4 bg-[#FAF8F5] rounded-lg">
                        <p className="text-sm text-[#1A1A1A]/60 mb-2">Contact {pkg.provider}:</p>
                        <div className="flex flex-col gap-2">
                          <a
                            href={`tel:${pkg.contact.phone.replace(/\s/g, '')}`}
                            className="text-sm text-[#0D7377] hover:text-[#C5A028] font-medium"
                          >
                            📞 {pkg.contact.phone}
                          </a>
                          {pkg.contact.facebook && (
                            <a
                              href={pkg.contact.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-[#0D7377] hover:text-[#C5A028] font-medium"
                            >
                              📘 Message on Facebook
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <button
                      onClick={() => handleSelectPackage(pkg.name)}
                      className="w-full bg-[#C5A028] text-[#0D7377] py-3 rounded-lg font-bold hover:bg-[#E8D48B] transition-colors"
                    >
                      Book This Package
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
