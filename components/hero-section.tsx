"use client"

import { useRouter } from "next/navigation"

export default function HeroSection() {
  const router = useRouter()

  const handleExploreTools = () => {
    const element = document.getElementById("tools-section")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleLearnMore = () => {
    const element = document.getElementById("transformer-section")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="relative overflow-hidden py-20 md:py-32"
      style={{
        backgroundImage: "url(/images/urban-garden-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 bg-aquamarine rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 left-10 w-32 h-32 bg-terracotta rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left space-y-6">
            <h1
              className="text-4xl md:text-5xl font-black leading-tight text-white"
              style={{ fontFamily: "Archivo Black, sans-serif" }}
            >
              Small Space,
              <br />
              <span className="text-aquamarine">Big Harvest</span>
            </h1>
            <p className="text-lg text-white max-w-xl">
              Transform your urban jungle with space-saving tools designed for apartments, balconies, rooftops, and
              micro-spaces.
            </p>
            <div className="flex gap-4 pt-6">
              <button
                onClick={handleExploreTools}
                className="px-8 py-3 bg-gradient-to-r from-terracotta to-amber text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all shadow-xl shadow-terracotta/50 cursor-pointer"
              >
                Explore Smart Tools
              </button>
              <button
                onClick={handleLearnMore}
                className="px-8 py-3 bg-gradient-to-r from-aquamarine to-steelBlue text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all shadow-xl shadow-aquamarine/50 cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right: 3D Tool Visualization */}
        </div>
      </div>
    </section>
  )
}
