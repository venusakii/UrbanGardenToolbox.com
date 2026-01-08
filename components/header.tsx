"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchActive, setIsSearchActive] = useState(false)

  return (
    <header className="gradient-header text-white sticky top-0 z-50 shadow-lg">
      <style>{`
        @keyframes rotateCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateCCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 8px rgba(42, 157, 143, 0.5); }
          50% { box-shadow: 0 0 16px rgba(231, 111, 81, 0.8); }
        }
        @keyframes sprout {
          0% { transform: scaleY(0) translateY(4px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: scaleY(1) translateY(0); }
        }
        .gear-primary {
          animation: rotateCW 8s linear infinite;
        }
        .gear-secondary {
          animation: rotateCCW 12s linear infinite;
        }
        .leaf-float {
          animation: float 3s ease-in-out infinite;
        }
        .logo-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .sprout-stem {
          animation: sprout 1.2s ease-out;
          transform-origin: bottom center;
        }
        .logo-group:hover .gear-primary {
          animation: rotateCW 3s linear infinite;
        }
        .logo-group:hover .gear-secondary {
          animation: rotateCCW 5s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group logo-group">
            <div className="w-12 h-12 bg-gradient-to-br from-aquamarine via-amber to-terracotta rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform relative overflow-hidden logo-glow">
              {/* Pot container base */}
              <div className="absolute bottom-1 w-7 h-4 border-2 border-amber rounded-b-lg"></div>

              {/* Sprout leaves */}
              <div className="absolute sprout-stem text-xs" style={{ left: "35%", bottom: "30%" }}>
                🌿
              </div>
              <div
                className="absolute sprout-stem text-xs"
                style={{ right: "30%", bottom: "25%", animationDelay: "0.2s" }}
              >
                🍃
              </div>
              <div
                className="absolute sprout-stem text-xs"
                style={{ left: "28%", bottom: "20%", animationDelay: "0.4s" }}
              >
                🌱
              </div>

              {/* Rotating gear accent */}
              <div className="absolute gear-primary text-lg opacity-60">⚙️</div>

              {/* Counter gear */}
              <div className="absolute gear-secondary text-sm opacity-40">⚙️</div>
            </div>
            <span className="text-xl font-bold hidden sm:inline">
              Urban<span className="text-golden">Garden</span>
            </span>
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/tools" className="hover:text-golden transition-colors">
                Products
              </Link>
              <Link href="/reviews" className="hover:text-golden transition-colors">
                Reviews
              </Link>
              <Link href="/guides" className="hover:text-golden transition-colors">
                Guides
              </Link>
              <Link href="/about" className="hover:text-golden transition-colors">
                About
              </Link>
            </nav>

            {/* Search */}
            <div className={`relative transition-all ${isSearchActive ? "w-40" : "w-10"}`}></div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 animate-fade-in-up">
            <Link href="/tools" className="block py-2 hover:text-golden">
              Tools
            </Link>
            <Link href="/categories" className="block py-2 hover:text-golden">
              Categories
            </Link>
            <Link href="/reviews" className="block py-2 hover:text-golden">
              Reviews
            </Link>
            <Link href="/guides" className="block py-2 hover:text-golden">
              Guides
            </Link>
            <Link href="/about" className="block py-2 hover:text-golden">
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
