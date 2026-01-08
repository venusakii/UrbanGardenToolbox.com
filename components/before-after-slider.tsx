"use client"

import { useState } from "react"
import Image from "next/image"

const examples = [
  {
    before: "/images/before-balcony.jpg",
    after: "/images/after-balcony.jpg",
    title: "Balcony Transformation",
  },
  {
    before: "/images/before-yard.jpg",
    after: "/images/after-yard.jpg",
    title: "Yard Garden",
  },
  {
    before: "/images/before-wall.jpg",
    after: "/images/after-wall.jpg",
    title: "Vertical Garden",
  },
]

export default function BeforeAfterSlider() {
  const [currentExample, setCurrentExample] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-center mb-4" style={{ fontFamily: "Archivo Black, sans-serif" }}>
          Before & After Transformations
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-xl shadow-2xl h-96 mb-6">
            {/* Before Image */}
            <div className="absolute inset-0">
              <Image
                src={examples[currentExample].before || "/placeholder.svg"}
                alt="Before"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg font-bold">Before</div>
            </div>

            {/* After Image */}
            <div className="absolute inset-0" style={{ right: `${100 - sliderPosition}%`, overflow: "hidden" }}>
              <Image
                src={examples[currentExample].after || "/placeholder.svg"}
                alt="After"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-aquamarine/90 text-white px-4 py-2 rounded-lg font-bold">
                After
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full cursor-col-resize opacity-0 z-10"
            />

            <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg" style={{ left: `${sliderPosition}%` }}>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center text-foreground font-bold">
                ⟨ ⟩
              </div>
            </div>
          </div>

          <div className="flex gap-2 justify-center mb-6">
            {examples.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentExample(idx)
                  setSliderPosition(50)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentExample === idx ? "bg-aquamarine w-8" : "bg-muted"
                }`}
              />
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-foreground font-semibold">Slide to reveal: {examples[currentExample].title}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
