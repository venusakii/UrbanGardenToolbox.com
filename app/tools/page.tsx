import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Tools | Urban Garden Toolbox",
  description: "Explore our collection of smart urban garden tools",
}

export default function ToolsPage() {
  const tools = [
    {
      id: 1,
      slug: "compact-spade",
      name: "Compact Spade",
      image: "/images/tool-spade.jpg",
      description: "Perfect for small spaces and container gardening",
      price: "$24.99",
    },
    {
      id: 2,
      slug: "vertical-planter",
      name: "Vertical Planter",
      image: "/images/tool-planter.jpg",
      description: "Maximize your growing space vertically",
      price: "$49.99",
    },
    {
      id: 3,
      slug: "smart-irrigation",
      name: "Smart Irrigation",
      image: "/images/tool-irrigation.jpg",
      description: "Automated watering system for balconies",
      price: "$89.99",
    },
    {
      id: 4,
      slug: "modular-shelving",
      name: "Modular Shelving",
      image: "/images/tool-shelving.jpg",
      description: "Stackable units for organization",
      price: "$79.99",
    },
    {
      id: 5,
      slug: "led-grow-light",
      name: "LED Grow Light",
      image: "/images/tool-light.jpg",
      description: "Energy-efficient plant lighting",
      price: "$59.99",
    },
    {
      id: 6,
      slug: "soil-tester",
      name: "Soil Tester",
      image: "/images/tool-tester.jpg",
      description: "Check pH and moisture levels instantly",
      price: "$19.99",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <h1 className="text-4xl font-bold text-center mb-4">Urban Garden Tools</h1>
        <p className="text-center text-gray-600 mb-12">
          Discover our carefully curated collection of space-saving tools designed for urban gardening
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <a
              key={tool.id}
              href={`/product/${tool.slug}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
            >
              <div className="relative w-full h-48 bg-gray-200">
                <Image src={tool.image || "/placeholder.svg"} alt={tool.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>

                <button className="w-full px-4 py-2 bg-neon-green text-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
                  Read More
                </button>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
