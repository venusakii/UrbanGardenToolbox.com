import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Customer Reviews | Urban Garden Toolbox",
  description: "Read authentic reviews from our satisfied customers about our urban gardening tools and solutions.",
}

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      author: "Sarah M.",
      rating: 5,
      title: "Game Changer for My Balcony Garden",
      content:
        "These tools have completely transformed my tiny balcony into a thriving garden. The space-saving designs are ingenious!",
      date: "2024-12-15",
    },
    {
      id: 2,
      author: "James L.",
      rating: 5,
      title: "Perfect for Urban Living",
      content:
        "As someone living in a small apartment, I was skeptical. But these tools really deliver on the promise of growing fresh vegetables in tight spaces.",
      date: "2024-12-10",
    },
    {
      id: 3,
      author: "Emma K.",
      rating: 4,
      title: "Great Quality and Affordable",
      content:
        "The tools are well-made and the prices are very reasonable. My only wish is that there were more color options available.",
      date: "2024-12-05",
    },
    {
      id: 4,
      author: "Michael T.",
      rating: 5,
      title: "Excellent Customer Service",
      content:
        "I had a question about which tools to choose, and the support team was incredibly helpful. Plus, the products exceeded my expectations!",
      date: "2024-11-28",
    },
    {
      id: 5,
      author: "Lisa P.",
      rating: 5,
      title: "My Rooftop Garden is Now Beautiful",
      content:
        "Used the rooftop collection and the results are amazing. The modular design means I can expand whenever I want.",
      date: "2024-11-20",
    },
    {
      id: 6,
      author: "David H.",
      rating: 4,
      title: "Solid Investment",
      content:
        "Invested in the complete kit and it's been worth every penny. Started as a hobby and now I'm growing enough to share with neighbors!",
      date: "2024-11-15",
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-aquamarine/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Customer Reviews</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from gardeners just like you about how Urban Garden Toolbox transformed their spaces
            </p>
            <div className="mt-6 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-3xl text-golden">
                  ★
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-2">Average rating: 4.8/5 from 200+ verified customers</p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-aquamarine"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-foreground">{review.author}</h3>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>

                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-golden">
                        ★
                      </span>
                    ))}
                    {[...Array(5 - review.rating)].map((_, i) => (
                      <span key={i} className="text-gray-300">
                        ★
                      </span>
                    ))}
                  </div>

                  <h4 className="font-semibold text-lg mb-2 text-foreground">{review.title}</h4>
                  <p className="text-muted-foreground">{review.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-transparent to-amber/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Transform Your Space?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of happy gardeners who have already discovered the Urban Garden Toolbox difference
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-terracotta to-amber text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
              Shop Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
