import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "About Us | Urban Garden Toolbox",
  description: "Learn about Urban Garden Toolbox mission and team",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Urban Garden Toolbox</h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-aquamarine">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Urban Garden Toolbox, we believe that everyone deserves access to fresh, home-grown produce and
              beautiful green spaces, regardless of their living situation. Our mission is to empower urban dwellers to
              create thriving gardens in apartments, balconies, rooftops, and micro-spaces.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-terracotta">Why Choose Us?</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-4">
                <span className="text-2xl">🎯</span>
                <div>
                  <strong>Curated Selection:</strong> Every tool is carefully selected for quality and functionality
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">🌱</span>
                <div>
                  <strong>Expert Guides:</strong> Learn from gardening experts with years of urban gardening experience
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">💚</span>
                <div>
                  <strong>Eco-Friendly:</strong> Sustainable products that minimize environmental impact
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">🤝</span>
                <div>
                  <strong>Community:</strong> Join thousands of urban gardeners sharing tips and success stories
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-golden">Get in Touch</h2>
            <p className="text-gray-700 mb-6">
              Have questions or suggestions? We'd love to hear from you! Contact our team anytime.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-terracotta to-amber text-white rounded-lg font-semibold hover:shadow-lg transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
