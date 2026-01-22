"use client"

import Image from "next/image"
import { Sun, Moon, Umbrella, Table, Building, Info, Percent } from "lucide-react"

export default function WalkInRatesSection() {
  return (
    <section id="walkin" className="py-20 bg-[#FAF8F5] ornament-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#C5A028] font-medium tracking-widest uppercase mb-4 font-cinzel">Summer Fun</p>
          <h2 className="font-cinzel-decorative text-4xl md:text-5xl text-[#0D7377] font-bold mb-6">
            Walk-In <span className="text-[#C5A028]">Rates</span>
          </h2>
          <div className="w-24 h-1 bg-[#C5A028] mx-auto mb-8" />
          <p className="text-lg text-[#1A1A1A]/80 max-w-2xl mx-auto">
            Royalty within reach. Enjoy our resort-quality pool and amenities without reservation—affordable luxury for spontaneous escapes and unforgettable summer memories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Walk-In Rates Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/484806958-122168179910359676-5343259390297575346-n.jpg"
                alt="Villa Kathreyna Walk-In Rates"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D7377] to-transparent" />
              <div className="absolute bottom-4 left-6">
                <h3 className="font-cinzel-decorative text-2xl text-white font-bold">Per Head Rates</h3>
              </div>
            </div>

            <div className="p-6">
              {/* Day Rates */}
              <div className="flex items-center gap-3 mb-4">
                <Sun className="w-6 h-6 text-[#C5A028]" />
                <span className="font-cinzel text-lg text-[#0D7377] font-bold">Day (7:00 AM - 3:00 PM)</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#FAF8F5] rounded-xl p-4 text-center">
                  <p className="text-[#1A1A1A]/60 text-sm mb-1">Adults</p>
                  <p className="text-[#C5A028] text-2xl font-bold">₱120</p>
                  <p className="text-xs text-[#1A1A1A]/60">per head</p>
                </div>
                <div className="bg-[#FAF8F5] rounded-xl p-4 text-center">
                  <p className="text-[#1A1A1A]/60 text-sm mb-1">Kids (6-12 yrs)</p>
                  <p className="text-[#C5A028] text-2xl font-bold">₱80</p>
                  <p className="text-xs text-[#1A1A1A]/60">per head</p>
                </div>
              </div>

              {/* Night Rates */}
              <div className="flex items-center gap-3 mb-4">
                <Moon className="w-6 h-6 text-[#C5A028]" />
                <span className="font-cinzel text-lg text-[#0D7377] font-bold">Night (4:00 PM - 12:00 MN)</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#FAF8F5] rounded-xl p-4 text-center">
                  <p className="text-[#1A1A1A]/60 text-sm mb-1">Adults</p>
                  <p className="text-[#C5A028] text-2xl font-bold">₱150</p>
                  <p className="text-xs text-[#1A1A1A]/60">per head</p>
                </div>
                <div className="bg-[#FAF8F5] rounded-xl p-4 text-center">
                  <p className="text-[#1A1A1A]/60 text-sm mb-1">Kids (6-12 yrs)</p>
                  <p className="text-[#C5A028] text-2xl font-bold">₱100</p>
                  <p className="text-xs text-[#1A1A1A]/60">per head</p>
                </div>
              </div>

              {/* Discounts */}
              <div className="bg-[#0D7377]/10 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Percent className="w-5 h-5 text-[#0D7377]" />
                  <span className="font-bold text-[#0D7377]">Special Discounts</span>
                </div>
                <ul className="text-sm text-[#1A1A1A]/80 space-y-1">
                  <li>• Free: Kids aged 5 and below</li>
                  <li>• 20% discount for Students, Senior Citizens, and PWD</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Accommodation Options */}
          <div className="space-y-6">
            {/* Umbrella */}
            <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-6">
              <div className="bg-[#0D7377] rounded-xl p-4 flex-shrink-0">
                <Umbrella className="w-8 h-8 text-[#C5A028]" />
              </div>
              <div className="flex-grow">
                <h4 className="font-cinzel text-xl text-[#0D7377] font-bold">Umbrella</h4>
                <p className="text-[#1A1A1A]/70 text-sm mb-2">Good for 4 pax</p>
                <p className="text-[#C5A028] text-2xl font-bold">₱250</p>
              </div>
            </div>

            {/* Poolside Table */}
            <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-6">
              <div className="bg-[#0D7377] rounded-xl p-4 flex-shrink-0">
                <Table className="w-8 h-8 text-[#C5A028]" />
              </div>
              <div className="flex-grow">
                <h4 className="font-cinzel text-xl text-[#0D7377] font-bold">Poolside Table</h4>
                <p className="text-[#1A1A1A]/70 text-sm mb-2">Good for 8 pax</p>
                <p className="text-[#C5A028] text-2xl font-bold">₱400</p>
              </div>
            </div>

            {/* Hall */}
            <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-6">
              <div className="bg-[#C5A028] rounded-xl p-4 flex-shrink-0">
                <Building className="w-8 h-8 text-[#0D7377]" />
              </div>
              <div className="flex-grow">
                <h4 className="font-cinzel text-xl text-[#0D7377] font-bold">Hall</h4>
                <p className="text-[#1A1A1A]/70 text-sm mb-2">Minimum of 20 pax</p>
                <p className="text-[#C5A028] text-2xl font-bold">₱2,000</p>
                <p className="text-xs text-[#0D7377]">*with free access to videoke</p>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-[#0D7377] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-[#C5A028]" />
                <span className="font-cinzel font-bold text-[#C5A028]">Important Notes</span>
              </div>
              <ul className="text-sm space-y-2 text-white/90">
                <li>• All amenities are subject to availability, provided there are no ongoing exclusive events</li>
                <li>• Guests using Umbrella and Poolside setups are not permitted to access the Hall</li>
                <li>
                  • Walk-in guests are required to select a specific accommodation option: Umbrella, Poolside, or Hall
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
