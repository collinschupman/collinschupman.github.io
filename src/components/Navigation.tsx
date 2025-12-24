import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Collin Schupman
        </Link>
        <div className="flex gap-8">
          <Link href="#projects" className="text-gray-300 hover:text-white transition">
            Projects
          </Link>
          <Link href="#experience" className="text-gray-300 hover:text-white transition">
            Experience
          </Link>
          <Link href="#skills" className="text-gray-300 hover:text-white transition">
            Skills
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
