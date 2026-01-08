import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Category Products | Urban Garden Toolbox",
  description: "Browse products in this category",
}

const categoryProducts = {
  "balcony-garden": {
    name: "Balcony Garden",
    description: "Perfect tools for creating a thriving garden on your balcony",
    products: [
      {
        id: 1,
        name: "Compact Spade",
        image: "/images/tool-spade.jpg",
        price: "$24.99",
        description: "Perfect for small spaces and container gardening",
      },
      {
        id: 2,
        name: "Vertical Planter",
        image: "/images/tool-planter.jpg",
        price: "$49.99",
        description: "Maximize your growing space vertically",
      },
      {
        id: 3,
        name: "Smart Irrigation",
        image: "/images/tool-irrigation.jpg",
        price: "$89.99",
        description: "Automated watering system for balconies",
      },
      {
        id: 4,
        name: "Modular Shelving",
        image: "/images/tool-shelving.jpg",
        price: "$79.99",
        description: "Stackable units for organization",
      },
      {
        id: 5,
        name: "LED Grow Light",
        image: "/images/tool-light.jpg",
        price: "$59.99",
        description: "Energy-efficient plant lighting",
      },
      {
        id: 6,
        name: "Soil Tester",
        image: "/images/tool-tester.jpg",
        price: "$19.99",
        description: "Check pH and moisture levels instantly",
      },
      {
        id: 7,
        name: "Compact Rake",
        image: "/images/tool-spade.jpg",
        price: "$14.99",
        description: "Small rake for precise work",
      },
      {
        id: 8,
        name: "Plant Clips",
        image: "/images/tool-planter.jpg",
        price: "$9.99",
        description: "Secure plants to railings safely",
      },
    ],
  },
  "window-gardening": {
    name: "Window Gardening",
    description: "Maximize natural light and space with window garden solutions",
    products: [
      {
        id: 1,
        name: "Window Box Planter",
        image: "/images/category-window.jpg",
        price: "$34.99",
        description: "Professional-grade window planter",
      },
      {
        id: 2,
        name: "LED Grow Light",
        image: "/images/tool-light.jpg",
        price: "$59.99",
        description: "Perfect for indoor window gardens",
      },
      {
        id: 3,
        name: "Soil Tester",
        image: "/images/tool-tester.jpg",
        price: "$19.99",
        description: "Monitor plant health",
      },
      {
        id: 4,
        name: "Small Pruning Shears",
        image: "/images/tool-spade.jpg",
        price: "$16.99",
        description: "Precision cutting tool",
      },
      {
        id: 5,
        name: "Plant Mister",
        image: "/images/tool-planter.jpg",
        price: "$12.99",
        description: "Fine mist spray bottle",
      },
      {
        id: 6,
        name: "Windowsill Shelf",
        image: "/images/tool-shelving.jpg",
        price: "$39.99",
        description: "Expandable shelving system",
      },
    ],
  },
  "rooftop-garden": {
    name: "Rooftop Garden",
    description: "Heavy-duty tools for rooftop farming and gardening",
    products: [
      {
        id: 1,
        name: "Heavy Duty Spade",
        image: "/images/tool-spade.jpg",
        price: "$34.99",
        description: "Reinforced for tough soil",
      },
      {
        id: 2,
        name: "Raised Bed Frame",
        image: "/images/tool-shelving.jpg",
        price: "$129.99",
        description: "Durable rooftop planting system",
      },
      {
        id: 3,
        name: "Smart Irrigation",
        image: "/images/tool-irrigation.jpg",
        price: "$89.99",
        description: "Automated watering system",
      },
      {
        id: 4,
        name: "Weather Station",
        image: "/images/tool-tester.jpg",
        price: "$79.99",
        description: "Monitor rooftop climate",
      },
      {
        id: 5,
        name: "UV Protective Netting",
        image: "/images/category-rooftop.jpg",
        price: "$44.99",
        description: "Shield plants from intense sun",
      },
      {
        id: 6,
        name: "Wind-Resistant Planters",
        image: "/images/tool-planter.jpg",
        price: "$59.99",
        description: "Stable containers for exposed areas",
      },
      {
        id: 7,
        name: "Heavy Duty Rake",
        image: "/images/tool-spade.jpg",
        price: "$24.99",
        description: "Professional rooftop maintenance",
      },
      {
        id: 8,
        name: "Soil Mix Bulk",
        image: "/images/category-rooftop.jpg",
        price: "$69.99",
        description: "Premium growing medium",
      },
      {
        id: 9,
        name: "Drainage System",
        image: "/images/tool-irrigation.jpg",
        price: "$99.99",
        description: "Prevents water pooling",
      },
      {
        id: 10,
        name: "Safety Guardrails",
        image: "/images/tool-shelving.jpg",
        price: "$149.99",
        description: "Protective edging",
      },
    ],
  },
  "indoor-microgreens": {
    name: "Indoor Microgreens",
    description: "Complete setup for growing nutritious microgreens indoors",
    products: [
      {
        id: 1,
        name: "Microgreen Growing Tray",
        image: "/images/tool-planter.jpg",
        price: "$24.99",
        description: "Stackable growing system",
      },
      {
        id: 2,
        name: "LED Grow Light",
        image: "/images/tool-light.jpg",
        price: "$59.99",
        description: "Spectrum optimized for microgreens",
      },
      {
        id: 3,
        name: "Humidity Meter",
        image: "/images/tool-tester.jpg",
        price: "$22.99",
        description: "Monitor moisture levels",
      },
      {
        id: 4,
        name: "Organic Seed Mix",
        image: "/images/category-microgreens.jpg",
        price: "$14.99",
        description: "Premium microgreen seeds",
      },
      {
        id: 5,
        name: "Growing Medium",
        image: "/images/category-microgreens.jpg",
        price: "$12.99",
        description: "Coconut coir substrate",
      },
      {
        id: 6,
        name: "Spray Bottle",
        image: "/images/tool-irrigation.jpg",
        price: "$8.99",
        description: "Fine mist for seedlings",
      },
      {
        id: 7,
        name: "Harvesting Scissors",
        image: "/images/tool-spade.jpg",
        price: "$11.99",
        description: "Precise cutting tool",
      },
    ],
  },
  "container-plants": {
    name: "Container Plants",
    description: "Everything you need for growing plants in containers",
    products: [
      {
        id: 1,
        name: "Premium Container Set",
        image: "/images/tool-planter.jpg",
        price: "$49.99",
        description: "5-piece container collection",
      },
      {
        id: 2,
        name: "Quality Potting Soil",
        image: "/images/category-container.jpg",
        price: "$18.99",
        description: "Nutrient-rich growing medium",
      },
      {
        id: 3,
        name: "Drainage Inserts",
        image: "/images/tool-irrigation.jpg",
        price: "$12.99",
        description: "Prevent root rot",
      },
      {
        id: 4,
        name: "Compact Transplanter",
        image: "/images/tool-spade.jpg",
        price: "$9.99",
        description: "Perfect for repotting",
      },
      {
        id: 5,
        name: "Plant Fertilizer",
        image: "/images/category-container.jpg",
        price: "$15.99",
        description: "Balanced nutrient formula",
      },
      {
        id: 6,
        name: "Soil Tester",
        image: "/images/tool-tester.jpg",
        price: "$19.99",
        description: "Monitor pH and nutrients",
      },
      {
        id: 7,
        name: "Decorative Pot Covers",
        image: "/images/tool-planter.jpg",
        price: "$29.99",
        description: "Stylish container wraps",
      },
      {
        id: 8,
        name: "Container Rack",
        image: "/images/tool-shelving.jpg",
        price: "$69.99",
        description: "Organize multiple plants",
      },
      {
        id: 9,
        name: "Self-Watering Insert",
        image: "/images/tool-irrigation.jpg",
        price: "$24.99",
        description: "Automatic watering system",
      },
      {
        id: 10,
        name: "Humidity Tray",
        image: "/images/tool-planter.jpg",
        price: "$19.99",
        description: "Increase moisture retention",
      },
      {
        id: 11,
        name: "Pot Feet Risers",
        image: "/images/tool-shelving.jpg",
        price: "$14.99",
        description: "Elevate containers for drainage",
      },
      {
        id: 12,
        name: "Container Labels",
        image: "/images/category-container.jpg",
        price: "$8.99",
        description: "Waterproof plant markers",
      },
    ],
  },
  "wall-gardens": {
    name: "Wall Gardens",
    description: "Innovative vertical gardening solutions for walls",
    products: [
      {
        id: 1,
        name: "Wall Planter Module",
        image: "/images/category-wall.jpg",
        price: "$39.99",
        description: "Modular wall mounting system",
      },
      {
        id: 2,
        name: "Vertical Growing Frame",
        image: "/images/tool-shelving.jpg",
        price: "$89.99",
        description: "Professional wall garden system",
      },
      {
        id: 3,
        name: "LED Strip Lights",
        image: "/images/tool-light.jpg",
        price: "$49.99",
        description: "Integrated lighting for wall gardens",
      },
      {
        id: 4,
        name: "Drip Irrigation Kit",
        image: "/images/tool-irrigation.jpg",
        price: "$79.99",
        description: "Automated watering for walls",
      },
      {
        id: 5,
        name: "Moss Backing",
        image: "/images/category-wall.jpg",
        price: "$24.99",
        description: "Growth medium for wall plants",
      },
      {
        id: 6,
        name: "Wall Anchor Hardware",
        image: "/images/tool-shelving.jpg",
        price: "$34.99",
        description: "Heavy-duty mounting brackets",
      },
      {
        id: 7,
        name: "Plant Felt Pockets",
        image: "/images/category-wall.jpg",
        price: "$19.99",
        description: "Modular planting pockets",
      },
      {
        id: 8,
        name: "Nutrient Spray",
        image: "/images/tool-irrigation.jpg",
        price: "$16.99",
        description: "Foliar feeding solution",
      },
      {
        id: 9,
        name: "Humidity Controller",
        image: "/images/tool-tester.jpg",
        price: "$69.99",
        description: "Maintain optimal moisture",
      },
    ],
  },
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryProducts[params.slug as keyof typeof categoryProducts]

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
        <p className="text-gray-600 mb-12">{category.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-48 bg-gray-200">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-xl font-bold text-aquamarine mb-4">{product.price}</p>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-terracotta to-amber text-white rounded-lg hover:shadow-lg transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
