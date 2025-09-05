'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface HeaderVariant4Props {
  scrolled?: boolean
}

export default function HeaderVariant4({ scrolled = false }: HeaderVariant4Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/80 backdrop-blur-xl' : 'bg-gradient-to-b from-black/50 to-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo with animation */}
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="relative"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#64B8CF] to-[#F5D757] rounded-xl" />
              <div className="absolute inset-2 bg-black/50 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">PX</span>
              </div>
            </motion.div>
            <div>
              <div className="text-white font-bold text-xl">PUBLIXY</div>
              <div className="text-cyan-400 text-xs">Smart Media Solutions</div>
            </div>
          </motion.div>
          
          {/* Desktop Menu with underline animation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Metodología', 'Medios', 'Métricas', 'Cobertura'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white/90 hover:text-white transition-all group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#64B8CF] to-[#F5D757] transition-all group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="ml-4 px-6 py-3 bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] text-white font-bold rounded-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Agenda Demo</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#F5D757] to-[#EFBD4A]"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 space-y-1.5">
              <motion.span 
                className="block h-0.5 bg-white"
                animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 6 : 0 }}
              />
              <motion.span 
                className="block h-0.5 bg-white"
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              />
              <motion.span 
                className="block h-0.5 bg-white"
                animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -6 : 0 }}
              />
            </div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-6 py-4 space-y-3">
              {['Metodología', 'Medios', 'Métricas', 'Cobertura'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-white/80 hover:text-white transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="block py-3 text-center bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] text-white font-bold rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contactar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}