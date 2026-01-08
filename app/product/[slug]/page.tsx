import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Product | Urban Garden Toolbox",
  description: "Product details",
}

const products = {
  "compact-spade": {
    id: 1,
    name: "Compact Spade",
    image: "/images/tool-spade.jpg",
    price: "$24.99",
    description: "Perfect for small spaces and container gardening",
    fullDescription:
      "Our Compact Spade is specifically designed for urban gardeners who need a reliable tool for small-space gardening. With its ergonomic handle and sharp stainless steel blade, it's perfect for container gardening, window boxes, and balcony planters.",
    features: [
      "Stainless steel blade for durability",
      "Ergonomic handle design",
      "Perfect for container gardening",
      "Lightweight and portable",
      "Easy to store and transport",
    ],
    specifications: {
      weight: "450g",
      length: "25cm",
      material: "Stainless steel & wood",
      warranty: "2 years",
    },
  },
  "vertical-planter": {
    id: 2,
    name: "Vertical Planter",
    image: "/images/tool-planter.jpg",
    price: "$49.99",
    description: "Maximize your growing space vertically",
    fullDescription:
      "Transform your walls into a lush garden with our innovative Vertical Planter system. Perfect for apartments and small outdoor spaces, this modular system allows you to grow multiple plants in a compact footprint.",
    features: [
      "Modular design - stack up to 5 units",
      "Water drainage system included",
      "Suitable for herbs, flowers, and small vegetables",
      "Wall-mountable with included hardware",
      "Weather-resistant material",
    ],
    specifications: {
      width: "60cm",
      height: "120cm",
      depth: "15cm",
      capacity: "6-8 plants per unit",
      warranty: "3 years",
    },
  },
  "smart-irrigation": {
    id: 3,
    name: "Smart Irrigation",
    image: "/images/tool-irrigation.jpg",
    price: "$89.99",
    description: "Automated watering system for balconies",
    fullDescription:
      "Never worry about watering your plants again. Our Smart Irrigation system automates the watering process with customizable schedules, ensuring your plants receive the perfect amount of water.",
    features: [
      "Smartphone app control",
      "Customizable watering schedules",
      "Moisture sensors included",
      "Works with up to 20 plant zones",
      "Weather-aware technology",
      "Energy-efficient battery operation",
    ],
    specifications: {
      capacity: "10L water tank",
      coverage: "Up to 20 zones",
      battery: "Rechargeable lithium",
      connectivity: "WiFi & Bluetooth",
      warranty: "2 years",
    },
  },
  "modular-shelving": {
    id: 4,
    name: "Modular Shelving",
    image: "/images/tool-shelving.jpg",
    price: "$79.99",
    description: "Stackable units for organization",
    fullDescription:
      "Keep your plants organized and accessible with our modular shelving system. Designed for both indoor and outdoor use, these stackable shelves maximize your gardening space efficiently.",
    features: [
      "Stackable design - build your own configuration",
      "Weather-resistant powder coat finish",
      "Supports up to 50kg per shelf",
      "Easy assembly without tools",
      "Fits standard pots and containers",
    ],
    specifications: {
      width: "60cm",
      depth: "40cm",
      shelfHeight: "25cm",
      material: "Steel with powder coating",
      maxShelves: "5 units",
      warranty: "5 years",
    },
  },
  "led-grow-light": {
    id: 5,
    name: "LED Grow Light",
    image: "/images/tool-light.jpg",
    price: "$59.99",
    description: "Energy-efficient plant lighting",
    fullDescription:
      "Our full-spectrum LED grow light provides the perfect lighting conditions for indoor plants and seedlings. With adjustable intensity and timer functions, you have complete control over your plant growth.",
    features: [
      "Full spectrum (380-800nm)",
      "Dimmable intensity control",
      "24-hour timer function",
      "Adjustable mounting arm",
      "Ultra-low power consumption",
      "Quiet operation",
    ],
    specifications: {
      power: "30W",
      coverage: "0.5-1.5m²",
      colorTemp: "3000-6500K adjustable",
      lifespan: "50,000 hours",
      warranty: "3 years",
    },
  },
  "soil-tester": {
    id: 6,
    name: "Soil Tester",
    image: "/images/tool-tester.jpg",
    price: "$19.99",
    description: "Check pH and moisture levels instantly",
    fullDescription:
      "Make informed decisions about your plant care with our digital soil tester. Measure pH, moisture, and light levels to optimize growing conditions for any plant.",
    features: [
      "3-in-1 testing: pH, moisture, light",
      "Digital display",
      "Accurate readings in 1 second",
      "Waterproof probe",
      "Auto-calibration",
      "Long battery life",
    ],
    specifications: {
      phRange: "3.5-9.0",
      moistureRange: "0-100%",
      probeLength: "23cm",
      battery: "AAA x 2",
      accuracy: "±0.1 pH",
      warranty: "2 years",
    },
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>

            <p className="text-gray-600 mb-6">{product.description}</p>

            <p className="text-gray-700 mb-8">{product.fullDescription}</p>

            {/* Price and Buy Button */}
            <div className="mb-8 pb-8 border-b">
              <a
                href="https://www.amazon.com/s?k=urban+garden+tools"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block px-6 py-3 bg-neon-green text-black rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all text-center"
              >
                Buy on Amazon
              </a>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-aquamarine">Features</h2>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-terracotta font-bold">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold mb-4 text-aquamarine">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="bg-white p-3 rounded-lg">
                    <p className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                    <p className="font-bold text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
