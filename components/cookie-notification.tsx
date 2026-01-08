"use client"
import { X } from "lucide-react"

export default function CookieNotification({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 max-w-sm animate-slide-in-left z-40">
      <div className="bg-white border-2 border-amber rounded-2xl shadow-2xl p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream to-transparent opacity-50"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground hover:text-terracotta transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="relative z-10">
          <h3 className="font-black text-lg mb-3" style={{ fontFamily: "Archivo Black, sans-serif" }}>
            🌱 We Use Cookies
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            We use cookies to grow your browsing experience and help you find the perfect urban gardening tools.
          </p>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-terracotta to-amber text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all"
            >
              🪓 Accept All
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-aquamarine text-aquamarine rounded-lg font-semibold text-sm hover:bg-aquamarine/5 transition-all"
            >
              🌾 Customize
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
