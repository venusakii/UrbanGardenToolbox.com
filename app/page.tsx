"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CategoriesGears from "@/components/categories-gears"
import SpaceSavingSection from "@/components/space-saving-section"
import TransformerGallery from "@/components/transformer-gallery"
import UrbanCalendar from "@/components/urban-calendar"
import BeforeAfterSlider from "@/components/before-after-slider"
import CookieNotification from "@/components/cookie-notification"
import Footer from "@/components/footer"

export default function Page() {
  const [showCookie, setShowCookie] = useState(true)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <CategoriesGears />
      <SpaceSavingSection />
      <TransformerGallery />
      <UrbanCalendar />
      <BeforeAfterSlider />
      {showCookie && <CookieNotification onClose={() => setShowCookie(false)} />}
      <Footer />
    </div>
  )
}
