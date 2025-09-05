'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { href: '#framework', label: 'Metodología', icon: '🎯' },
  { href: '#metrics', label: 'Métricas', icon: '📊' },
  { href: '#clients', label: 'Clientes', icon: '🏢' },
  { href: '#coverage', label: 'Cobertura', icon: '🌍' },
  { href: '#contact', label: 'Contactar', icon: '📞', primary: true }
]

export default function HeaderOption4() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isHovered, setIsHovered] = useState(false)

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
      className="fixed top-6 right-6 z-50"
    >
      {/* OPCIÓN 4: Header Flotante Circular (Sidebar) */}
      <motion.div
        className={`transition-all duration-500 ${
          scrolled || isHovered 
            ? 'backdrop-blur-xl bg-white/95 border border-gray-200 shadow-2xl' 
            : 'backdrop-blur-md bg-white/80 border border-gray-100 shadow-lg'
        } rounded-3xl p-4`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex flex-col space-y-3">
          {/* Logo */}
          <motion.a 
            href="/white"
            className="mx-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="bg-gradient-to-r from-publixy-teal to-publixy-gold p-[1px] rounded-2xl">
              <div className="bg-white px-3 py-3 rounded-2xl">
                <span className="text-lg font-black bg-gradient-to-r from-publixy-teal to-publixy-gold bg-clip-text text-transparent">
                  P
                </span>
              </div>
            </div>
          </motion.a>

          {/* Navigation Items */}
          <div className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className={`group relative flex items-center justify-center w-12 h-12 rounded-2xl text-lg transition-all duration-300 ${
                  activeSection === item.href.replace('#', '')
                    ? 'bg-gradient-to-r from-publixy-teal to-publixy-gold text-white shadow-lg'
                    : item.primary
                    ? 'bg-gradient-to-r from-publixy-gold to-publixy-yellow text-white shadow-md hover:shadow-lg'
                    : 'text-gray-600 hover:text-publixy-teal hover:bg-publixy-teal/10'
                }`}
              >
                <span>{item.icon}</span>
                
                {/* Tooltip */}
                <motion.div
                  className="absolute right-16 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity duration-300"
                  initial={{ x: 10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                >
                  {item.label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                </motion.div>
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 my-2"></div>

          {/* Theme Toggle */}
          <motion.button
            onClick={() => window.location.href = '/'}
            className="group relative flex items-center justify-center w-12 h-12 rounded-2xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.1, x: -5, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            title="Cambiar a tema oscuro"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            
            {/* Tooltip */}
            <motion.div
              className="absolute right-16 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity duration-300"
            >
              Tema Oscuro
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
            </motion.div>
          </motion.button>

          {/* Expand Indicator */}
          <motion.div
            className="mx-auto"
            animate={{
              rotate: isHovered ? 180 : 0,
              scale: isHovered ? 1.1 : 1
            }}
          >
            <div className="w-1 h-1 bg-publixy-teal rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  )
}