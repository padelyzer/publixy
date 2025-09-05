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

export default function HeaderOption3() {
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
      className="fixed top-0 w-full z-50"
    >
      {/* OPCIÓN 3: Header con Barra Vertical */}
      <div className="flex">
        {/* Sidebar Logo */}
        <motion.div
          className={`fixed left-6 top-6 transition-all duration-500 ${
            scrolled ? 'backdrop-blur-xl bg-white/95 border border-gray-200 shadow-2xl' : 'backdrop-blur-md bg-white/80 border border-gray-100'
          } rounded-2xl p-4`}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <motion.a 
            href="/white"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gradient-to-r from-publixy-teal to-publixy-gold p-[1px] rounded-lg">
              <div className="bg-white px-3 py-2 rounded-lg">
                <span className="text-xl font-black bg-gradient-to-r from-publixy-teal to-publixy-gold bg-clip-text text-transparent block">
                  P
                </span>
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* Top Navigation Bar */}
        <motion.div
          className={`fixed top-6 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
            scrolled ? 'backdrop-blur-xl bg-white/95 border border-gray-200 shadow-2xl' : 'backdrop-blur-md bg-white/80 border border-gray-100'
          } rounded-2xl px-8 py-4`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`relative px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-white bg-gradient-to-r from-publixy-teal to-publixy-gold shadow-lg transform -translate-y-1'
                    : item.primary
                    ? 'text-white bg-gradient-to-r from-publixy-gold to-publixy-yellow shadow-md hover:shadow-lg'
                    : 'text-gray-700 hover:text-publixy-teal hover:bg-publixy-teal/10'
                }`}
              >
                {item.label}
                
                {/* Dot indicator for active */}
                {activeSection === item.href.replace('#', '') && !item.primary && (
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-publixy-teal to-publixy-gold rounded-full"
                    layoutId="activeDot"
                  />
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side Theme Toggle */}
        <motion.div
          className={`fixed right-6 top-6 transition-all duration-500 ${
            scrolled ? 'backdrop-blur-xl bg-white/95 border border-gray-200 shadow-2xl' : 'backdrop-blur-md bg-white/80 border border-gray-100'
          } rounded-2xl p-3`}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            onClick={() => window.location.href = '/'}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            title="Cambiar a tema oscuro"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </motion.nav>
  )
}