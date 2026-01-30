'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Collin Schupman
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link href="#projects" className="text-gray-300 hover:text-white transition">
            Projects
          </Link>
          <Link href="#activities" className="text-gray-300 hover:text-white transition">
            Activities
          </Link>
          <Link href="#music" className="text-gray-300 hover:text-white transition">
            Music
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-white transition">
            Blog
          </Link>
          <Link href="#press" className="text-gray-300 hover:text-white transition">
            Press
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white transition p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-slate-800">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link 
              href="#projects" 
              className="text-gray-300 hover:text-white transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="#activities" 
              className="text-gray-300 hover:text-white transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Activities
            </Link>
            <Link 
              href="#music" 
              className="text-gray-300 hover:text-white transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Music
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-300 hover:text-white transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="#press" 
              className="text-gray-300 hover:text-white transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Press
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
