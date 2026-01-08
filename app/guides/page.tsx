import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Guides | Urban Garden Toolbox",
  description: "Learn how to maximize your urban garden",
}

export default function GuidesPage() {
  const guides = [
    {
      title: "Getting Started with Balcony Gardening",
      icon: "🌻",
      date: "Jan 15, 2025",
      excerpt: "Learn the basics of starting your first balcony garden",
    },
    {
      title: "Space-Saving Vertical Gardening Techniques",
      icon: "📐",
      date: "Jan 12, 2025",
      excerpt: "Maximize your growing space with vertical strategies",
    },
    {
      title: "Urban Composting for Small Spaces",
      icon: "♻️",
      date: "Jan 10, 2025",
      excerpt: "Create nutrient-rich soil without a large yard",
    },
    {
      title: "Indoor Microgreens: Quick Greens Anytime",
      icon: "🌿",
      date: "Jan 8, 2025",
      excerpt: "Grow fresh microgreens on your windowsill",
    },
    {
      title: "Watering Strategies for Busy Urbanites",
      icon: "💧",
      date: "Jan 5, 2025",
      excerpt: "Keep your plants healthy with minimal effort",
    },
    {
      title: "Best Plants for Low-Light Apartments",
      icon: "🪴",
      date: "Jan 1, 2025",
      excerpt: "Discover hardy plants that thrive indoors",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <h1 className="text-4xl font-bold text-center mb-4">Gardening Guides</h1>
        <p className="text-center text-gray-600 mb-12">Expert tips and tricks for successful urban gardening</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide, idx) => (
            <article
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="text-4xl mb-4">{guide.icon}</div>
              <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
              <p className="text-gray-600 mb-4">{guide.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{guide.date}</span>
                <button className="px-4 py-2 bg-golden text-white rounded-lg hover:shadow-lg transition-all">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
