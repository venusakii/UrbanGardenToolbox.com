export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-dark-teal to-foreground text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-12 border-b border-black/20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3
                className="text-xl font-black mb-2 text-black drop-shadow-md"
                style={{ fontFamily: "Archivo Black, sans-serif" }}
              >
                Urban<span className="text-black">Garden</span>Toolbox
              </h3>
              <p className="text-sm text-black drop-shadow-md">100+ tools for urban farming excellence</p>
            </div>
            <div className="hidden md:flex gap-4">
              <input
                type="email"
                placeholder="Get Urban Tips"
                className="px-4 py-2 rounded-lg text-foreground placeholder-muted-foreground bg-white/20 border border-black/30"
              />
              <button className="px-6 py-2 bg-neon-green text-black font-bold rounded-lg hover:bg-neon-green/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="text-black font-bold">🛠️ Space-Savers</span>
            <span className="text-black font-bold">💡 Smart Tech</span>
            <span className="text-black font-bold">🌿 Balcony Kits</span>
            <span className="text-black font-bold">📱 App-Enabled</span>
          </div>
        </div>

        {/* Middle Section */}
        <div className="py-12 border-b border-black/20">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h4 className="font-bold text-black mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/about" className="text-black hover:text-aquamarine transition-colors">
                    About Us
                  </a>
                </li>
                <li></li>
                <li>
                  <a href="/contact" className="text-black hover:text-aquamarine transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Products */}

            {/* Support */}

            {/* Legal */}
            <div>
              <h4 className="font-bold text-black mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/privacy-policy" className="text-black hover:text-aquamarine transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="text-black hover:text-aquamarine transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-black/20 space-y-6">
          {/* Social & Partnerships */}
          <div className="grid md:grid-cols-2 gap-8"></div>

          {/* Legal */}
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-xs text-black drop-shadow-md mb-2">
              🛒 As an Amazon Associate, we earn from qualifying purchases.
            </p>
            <p className="text-xs text-black drop-shadow-md">Also available at independent urban gardening stores.</p>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-black drop-shadow-md border-t border-black/10 pt-4">
            <p>© 2026 Urban Garden Toolbox - Cultivating City Life</p>
            <p>📍 Designed for apartments, balconies, rooftops & micro-spaces</p>
            <p>🌆 Proudly serving urban gardeners in London, NYC, Tokyo, Berlin & beyond</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
