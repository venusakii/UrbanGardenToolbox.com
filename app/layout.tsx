import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Archivo_Black, Montserrat_Alternates, Karla, Special_Elite } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _archivoBlack = Archivo_Black({ subsets: ["latin"], weight: "400" })
const _montserratAlt = Montserrat_Alternates({ subsets: ["latin"], weight: ["400", "700"] })
const _karla = Karla({ subsets: ["latin"], weight: ["400", "500", "700"] })
const _specialElite = Special_Elite({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Urban Garden Toolbox | Outdoor & Garden Tools for Urban Living",
  description:
    "Smart, space-saving garden tools designed for urban living. Transform your balcony, rooftop, and micro-spaces into thriving gardens.",
  generator: "v0.app",
  icons: {
    icon: "/icon-dark-32x32.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
