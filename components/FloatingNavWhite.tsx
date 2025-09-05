'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { href: '#framework', label: 'Metodología' },
  { href: '#metrics', label: 'Métricas' },
  { href: '#clients', label: 'Clientes' },
  { href: '#coverage', label: 'Cobertura' },
  { href: '#contact', label: 'Contactar', primary: true }
]

export default function FloatingNavWhite() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = ['framework', 'metrics', 'clients', 'coverage', 'contact']
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
            ? 'backdrop-blur-xl bg-white/95 border border-gray-200 shadow-xl' 
            : 'backdrop-blur-md bg-white/80 border border-gray-100'
        }`}>
          <div className="flex items-center justify-between px-8 py-4">
            {/* Logo */}
            <motion.a 
              href="/white"
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-publixy-teal to-publixy-gold p-[1px] rounded">
                  <div className="bg-white px-3 py-2 rounded">
                    <span className="text-xl font-bold bg-gradient-to-r from-publixy-teal to-publixy-gold bg-clip-text text-transparent">
                      PUBLIXY
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-600 hidden lg:inline-block font-light tracking-wider">PREMIUM NETWORK</span>
            </motion.a>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-publixy-teal bg-gradient-to-r from-publixy-teal/10 to-publixy-gold/5'
                      : item.primary
                      ? 'bg-gradient-to-r from-publixy-gold to-publixy-yellow text-white shadow-lg hover:shadow-xl'
                      : 'text-gray-700 hover:text-publixy-teal hover:bg-gray-100/50'
                  }`}
                >
                  {item.label}
                  
                  {/* Active Indicator */}
                  {activeSection === item.href.replace('#', '') && !item.primary && (
                    <motion.div
                      className="absolute inset-0 rounded-full border border-publixy-teal/30 bg-gradient-to-r from-publixy-teal/10 to-publixy-gold/5"
                      layoutId="activeIndicatorWhite"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle */}
              <motion.button
                onClick={() => window.location.href = '/'}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Cambiar a tema oscuro"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </motion.button>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-xl transition-all duration-300">
                <span className="sr-only">Abrir menú</span>
                <div className="flex flex-col space-y-1">
                  <span className="block w-5 h-0.5 bg-gray-600"></span>
                  <span className="block w-5 h-0.5 bg-gray-600"></span>
                  <span className="block w-5 h-0.5 bg-gray-600"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}