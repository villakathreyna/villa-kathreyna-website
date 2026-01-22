import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Cormorant_Garamond, Cinzel_Decorative, Cinzel } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import StarParticles from "@/components/star-particles"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
})

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
})

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
})

export const metadata: Metadata = {
  title: "Villa Kathreyna Events Place & Resort | San Fernando, Camarines Sur",
  description:
    "Experience the grandeur of Villa Kathreyna - a royal elegant events place and resort in San Fernando, Camarines Sur. Perfect for weddings, celebrations, and resort getaways with majestic spaces, lush gardens, and pools.",
  keywords:
    "Villa Kathreyna, events place, resort, wedding venue, San Fernando, Camarines Sur, Philippines, wedding packages, garden wedding, pool, celebration venue, royal wedding",
  authors: [{ name: "Villa Kathreyna" }],
  creator: "Villa Kathreyna",
  publisher: "Villa Kathreyna",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://villakathreyna.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Villa Kathreyna Events Place & Resort",
    description:
      "Where Your Royal Celebrations Reign. Experience the grandeur of Villa Kathreyna with majestic spaces, lush gardens & pool.",
    url: "https://villakathreyna.com",
    siteName: "Villa Kathreyna",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/images/v1.png",
        width: 1200,
        height: 630,
        alt: "Villa Kathreyna Events Place & Resort",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Kathreyna Events Place & Resort",
    description: "Where Your Royal Celebrations Reign. Weddings, Events & Resort in San Fernando, Camarines Sur.",
    images: ["/images/v1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/v1.png",
    apple: "/images/v1.png",
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: "#0D7377",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventVenue",
              name: "Villa Kathreyna Events Place & Resort",
              description:
                "Experience the grandeur of Villa Kathreyna with majestic spaces, lush gardens & pool. Perfect for weddings and celebrations.",
              url: "https://villakathreyna.com",
              telephone: "+63-977-627-1360",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Zone 5, Planza",
                addressLocality: "San Fernando",
                addressRegion: "Camarines Sur",
                addressCountry: "PH",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "13.8611",
                longitude: "123.6894",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "06:00",
                closes: "24:00",
              },
              priceRange: "₱₱₱",
              image: "/images/v1.png",
              sameAs: ["https://www.facebook.com/VillaKathreyna"],
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${cinzelDecorative.variable} ${cinzel.variable} font-serif antialiased`}
      >
        <StarParticles />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
