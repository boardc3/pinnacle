import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Interiors', href: '#interiors' },
    { name: 'Map', href: '#map' },
    { name: 'Timeline', href: '#timeline' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className={cn(
            "text-2xl font-serif font-bold tracking-tighter transition-colors",
            isScrolled ? "text-gray-900" : "text-white"
          )}>THE PINNACLE</span>
          <span className={cn(
            "text-[10px] uppercase tracking-[0.2em] mt-1 transition-colors",
            isScrolled ? "text-gray-500" : "text-gray-300"
          )}>By MyNestLife</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-widest transition-colors",
                isScrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-200 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#investment"
            className={cn(
              "px-6 py-2 text-sm uppercase tracking-widest transition-all",
              isScrolled 
                ? "bg-gray-900 text-white hover:bg-gray-800" 
                : "bg-white text-gray-900 hover:bg-gray-100"
            )}
          >
            Inquire
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden transition-colors",
            isScrolled ? "text-gray-900" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-serif text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#investment"
              className="bg-gray-900 text-white px-6 py-3 text-sm uppercase tracking-widest w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inquire
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

