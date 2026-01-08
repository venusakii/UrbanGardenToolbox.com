"use client"

import { useState } from "react"

const categories = [
  { id: 1, name: "Vertical Garden Tools", icon: "🌿", desc: "Wall-mounted systems" },
  { id: 2, name: "Balcony Essentials", icon: "🏠", desc: "For small spaces" },
  { id: 3, name: "Compact Power Tools", icon: "⚡", desc: "Smart technology" },
  { id: 4, name: "Smart Irrigation", icon: "💧", desc: "Auto watering" },
  { id: 5, name: "Fold & Store", icon: "📦", desc: "Space-saving" },
  { id: 6, name: "Urban Composting", icon: "🪱", desc: "Eco-friendly" },
]

export default function CategoriesGears() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="tools-section" className="py-20 bg-light-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-center mb-4" style={{ fontFamily: "Archivo Black, sans-serif" }}>
          Tool Categories
        </h2>
        <p className="text-center text-steel-blue mb-16 max-w-2xl mx-auto">
          Explore our rotating selection of innovative tools designed for urban gardening
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative"
            >
              <div
                className={`bg-white rounded-2xl p-8 text-center cursor-pointer transition-all transform ${
                  hoveredId === cat.id ? "scale-110 shadow-2xl" : "shadow-lg hover:shadow-xl"
                } ${hoveredId === cat.id ? "animate-gear-spin" : ""}`}
              >
                <div className="text-5xl mb-4 inline-block">{cat.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{cat.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{cat.desc}</p>
                
              </div>

              {hoveredId === cat.id && (
                <div className="absolute inset-0 rounded-2xl border-2 border-aquamarine animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
