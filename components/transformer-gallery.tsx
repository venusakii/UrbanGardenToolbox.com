"use client"

import { useState } from "react"

const transformers = [
  { name: "Folding Trowel Kit", desc: "Compact 5-in-1 tool", expanded: "🪓 Expands to full toolkit" },
  { name: "Compact Pruner", desc: "Pocket-sized powerhouse", expanded: "✂️ Professional reach" },
  { name: "Modular Rake", desc: "Adjustable handle system", expanded: "🌾 Multiple configurations" },
]

export default function TransformerGallery() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="transformer-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-center mb-4" style={{ fontFamily: "Archivo Black, sans-serif" }}>
          Tool Transformers Gallery
        </h2>
        <p className="text-center text-steel-blue mb-16 max-w-2xl mx-auto">
          Click any tool to see its transformation from compact to full-power
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {transformers.map((tool, idx) => (
            <div key={idx} onClick={() => setExpanded(expanded === idx ? null : idx)} className="cursor-pointer group">
              <div
                className={`bg-gradient-card rounded-xl p-8 text-center transition-all transform ${expanded === idx ? "scale-105 shadow-2xl" : "shadow-lg hover:shadow-xl"}`}
              >
                <div className="text-5xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{tool.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{tool.desc}</p>

                <div
                  className={`overflow-hidden transition-all ${expanded === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="bg-aquamarine/10 rounded-lg p-4 text-aquamarine font-semibold">{tool.expanded}</div>
                </div>

                <button className="mt-4 px-4 py-2 bg-aquamarine text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                  {expanded === idx ? "Close" : "View Transformation"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
