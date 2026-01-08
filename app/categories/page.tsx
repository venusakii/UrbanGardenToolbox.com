import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Categories | Urban Garden Toolbox",
  description: "Browse tools by category for your space",
}

export default function CategoriesPage() {
  const categories = [
    {
      name: "Balcony Garden",
      slug: "balcony-garden",
      image: "/images/category-balcony.jpg",
      tools: 8,
      description: "Perfect tools for maximizing your balcony space with vertical gardens and space-saving solutions.",
    },
    {
      name: "Window Gardening",
      slug: "window-gardening",
      image: "/images/category-window.jpg",
      tools: 6,
      description: "Compact tools designed for growing herbs and plants on windowsills and small indoor spaces.",
    },
    {
      name: "Rooftop Garden",
      slug: "rooftop-garden",
      image: "/images/category-rooftop.jpg",
      tools: 10,
      description: "Heavy-duty tools built for rooftop gardening with weather-resistant features and durability.",
    },
    {
      name: "Indoor Microgreens",
      slug: "indoor-microgreens",
      image: "/images/category-microgreens.jpg",
      tools: 7,
      description: "Specialized equipment for growing nutritious microgreens indoors year-round with minimal space.",
    },
    {
      name: "Container Plants",
      slug: "container-plants",
      image: "/images/category-container.jpg",
      tools: 12,
      description: "Versatile containers and tools for planting and cultivating beautiful container gardens.",
    },
    {
      name: "Wall Gardens",
      slug: "wall-gardens",
      image: "/images/category-wall.jpg",
      tools: 9,
      description: "Innovative vertical solutions for transforming walls into vibrant living gardens.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <h1 className="text-4xl font-bold text-center mb-4">Shop by Category</h1>
        <p className="text-center text-gray-600 mb-12">Find the perfect tools for your specific gardening space</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all cursor-pointer border-2 border-transparent hover:border-aquamarine">
                <div className="relative w-full h-48">
                  <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
                </div>
                <div className="p-8 text-center flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm flex-grow">{category.description}</p>
                  <p className="text-gray-500 mb-4 font-semibold">{category.tools} products available</p>
                  <button className="px-6 py-2 bg-gradient-to-r from-terracotta to-amber text-white rounded-lg hover:shadow-lg transition-all font-bold">
                    Read More
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
