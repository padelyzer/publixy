'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { href: '#framework', label: 'Metodología' },
  { href: '#locations', label: 'Ubicaciones' },
  { href: '#metrics', label: 'Métricas' },
  { href: '#contact', label: 'Contactar', primary: true }
]

export default function FloatingNavCorporate() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = ['framework', 'locations', 'metrics', 'contact']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`relative rounded-full transition-all duration-500 ${
          scrolled 
            ? 'backdrop-blur-xl bg-black/80 border border-white/10 shadow-lg' 
            : 'backdrop-blur-md bg-black/40'
        }`}>
          <div className="flex items-center justify-between px-8 py-4">
            {/* Logo */}
            <motion.a 
              href="/"
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-publixy-cyan to-publixy-purple p-[1px] rounded">
                  <div className="bg-black px-3 py-2 rounded">
                    <span className="text-xl font-bold bg-gradient-to-r from-publixy-cyan to-publixy-purple bg-clip-text text-transparent">
                      PUBLIXY
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-400 hidden lg:inline-block font-light tracking-wider">PREMIUM NETWORK</span>
            </motion.a>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-5 py-2.5 rounded-full transition-all duration-300 ${
                    item.primary 
                      ? 'bg-gradient-to-r from-publixy-cyan to-publixy-purple text-white font-medium'
                      : activeSection === item.href.slice(1)
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {!item.primary && activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-publixy-cyan/10 to-publixy-purple/10 rounded-full"
                      transition={{ type: 'spring', stiffness: 300 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden relative w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl flex items-center justify-center border border-white/10">
              <div className="space-y-1">
                <span className="block w-5 h-0.5 bg-white"></span>
                <span className="block w-5 h-0.5 bg-white"></span>
                <span className="block w-5 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Theme Toggle */}
        <motion.button
          onClick={() => window.location.href = '/white'}
          className="ml-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Cambiar a tema claro"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </motion.button>
      </div>
    </motion.nav>
  )
}