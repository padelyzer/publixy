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

export default function HeaderOption2() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
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
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        {/* OPCIÓN 2: Header con Separación Clara */}
        <div className={`flex items-center justify-between transition-all duration-500`}>
          
          {/* Logo Side Panel */}
          <motion.div 
            className={`rounded-2xl transition-all duration-500 ${
              scrolled 
                ? 'backdrop-blur-xl bg-white/95 border border-gray-200 shadow-xl px-6 py-3' 
                : 'backdrop-blur-md bg-white/80 border border-gray-100 shadow-lg px-6 py-4'
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <a href="/white" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-publixy-teal to-publixy-gold p-[1px] rounded-lg">
                <div className="bg-white px-4 py-2 rounded-lg">
                  <span className="text-xl font-black bg-gradient-to-r from-publixy-teal to-publixy-gold bg-clip-text text-transparent">
                    PUBLIXY
                  </span>
                </div>
              </div>
              <span className="text-xs text-gray-600 font-light tracking-wider hidden lg:block">PREMIUM</span>
            </a>
          </motion.div>

          {/* Navigation Panel */}
          <motion.div 
            className={`hidden md:flex items-center space-x-1 rounded-2xl transition-all duration-500 ${
              scrolled 
                ? 'backdrop-blur-xl bg-white/95 border border-gray-200 shadow-xl px-6 py-3' 
                : 'backdrop-blur-md bg-white/80 border border-gray-100 shadow-lg px-6 py-4'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            {navItems.slice(0, -1).map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-white bg-gradient-to-r from-publixy-teal to-publixy-gold shadow-lg'
                    : 'text-gray-700 hover:text-publixy-teal hover:bg-publixy-teal/10'
                }`}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA + Theme Toggle Panel */}
          <motion.div 
            className={`flex items-center space-x-3 rounded-2xl transition-all duration-500 ${
              scrolled 
                ? 'backdrop-blur-xl bg-white/95 border border-gray-200 shadow-xl px-6 py-3' 
                : 'backdrop-blur-md bg-white/80 border border-gray-100 shadow-lg px-6 py-4'
            }`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-white bg-gradient-to-r from-publixy-gold to-publixy-yellow rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contactar
            </motion.a>

            {/* Theme Toggle */}
            <motion.button
              onClick={() => window.location.href = '/'}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              title="Cambiar a tema oscuro"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}