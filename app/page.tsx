import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ExploreSection from "@/components/explore-section"
import EventsSection from "@/components/events-section"
import PackagesSection from "@/components/packages-section"
import RoomsSection from "@/components/rooms-section"
import WalkInRatesSection from "@/components/walkin-rates-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ExploreSection />
      <EventsSection />
      <PackagesSection />
      <RoomsSection />
      <WalkInRatesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
