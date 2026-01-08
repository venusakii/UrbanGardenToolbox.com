"use client"

export default function SpaceSavingSection() {
  const rooms = [
    { name: "Balcony", icon: "🏠", color: "from-aquamarine" },
    { name: "Living Room", icon: "🪴", color: "from-golden" },
    { name: "Kitchen Garden", icon: "🍅", color: "from-terracotta" },
    { name: "Bathroom Green", icon: "🌿", color: "from-neon-green" },
  ]

  return (
    <section
      className="py-20 overflow-hidden relative"
      style={{
        backgroundImage: "url(/images/space-saving-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className="text-4xl font-black text-center mb-4 text-white drop-shadow-lg"
          style={{ fontFamily: "Archivo Black, sans-serif" }}
        >
          Space-Saving Innovations
        </h2>
        <p className="text-center text-white mb-16 max-w-2xl mx-auto drop-shadow-md text-lg">
          Transform every corner of your home with our curated tool collections for each space
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${room.color} to-amber p-6 rounded-xl text-white hover:shadow-2xl transition-all cursor-pointer group overflow-hidden relative h-40 flex flex-col justify-end border-2 border-white/30 hover:border-white/60`}
            >
              <div className="relative z-10">
                <div className="text-4xl mb-2 drop-shadow-md">{room.icon}</div>
                <h3 className="font-bold text-lg drop-shadow-md">{room.name}</h3>
                <p className="text-sm opacity-95 drop-shadow-sm">Explore tools</p>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
