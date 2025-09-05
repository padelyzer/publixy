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

export default function HeaderOption5() {
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
    <>
      {/* OPCIÓN 5: Header Minimalista con Barra Inferior */}
      
      {/* Top Logo */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-6 left-6 z-50"
      >
        <motion.a 
          href="/white"
          className="block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="bg-gradient-to-r from-publixy-teal to-publixy-gold p-[1px] rounded-2xl">
            <div className="bg-white px-4 py-3 rounded-2xl">
              <span className="text-2xl font-black bg-gradient-to-r from-publixy-teal to-publixy-gold bg-clip-text text-transparent">
                PUBLIXY
              </span>
            </div>
          </div>
        </motion.a>
      </motion.div>

      {/* Theme Toggle Top Right */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="fixed top-6 right-6 z-50"
      >
        <motion.button
          onClick={() => window.location.href = '/'}
          className="p-4 backdrop-blur-xl bg-white/95 border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-2xl transition-all duration-300 shadow-xl"
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          title="Cambiar a tema oscuro"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </motion.button>
      </motion.div>

      {/* Bottom Navigation Bar */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className={`flex items-center space-x-2 transition-all duration-500 ${
          scrolled 
            ? 'backdrop-blur-xl bg-white/95 border border-gray-200 shadow-2xl' 
            : 'backdrop-blur-md bg-white/90 border border-gray-100 shadow-xl'
        } rounded-2xl px-6 py-4`}>
          
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeSection === item.href.replace('#', '')
                  ? 'text-white bg-gradient-to-r from-publixy-teal to-publixy-gold shadow-lg transform -translate-y-1'
                  : item.primary
                  ? 'text-white bg-gradient-to-r from-publixy-gold to-publixy-yellow shadow-md hover:shadow-lg'
                  : 'text-gray-700 hover:text-publixy-teal hover:bg-publixy-teal/10'
              }`}
            >
              {item.label}
              
              {/* Active pulse effect */}
              {activeSection === item.href.replace('#', '') && !item.primary && (
                <motion.div
                  className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-publixy-teal to-publixy-gold rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
              )}
            </motion.a>
          ))}

          {/* Decorative Elements */}
          <motion.div
            className="flex space-x-1 ml-4"
            animate={{
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            <div className="w-1 h-1 bg-publixy-teal rounded-full"></div>
            <div className="w-1 h-1 bg-publixy-gold rounded-full"></div>
            <div className="w-1 h-1 bg-publixy-yellow rounded-full"></div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  )
}