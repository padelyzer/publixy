'use client'

import { motion } from 'framer-motion'

interface HeaderVariant1Props {
  scrolled?: boolean
}

export default function HeaderVariant1({ scrolled = false }: HeaderVariant1Props) {
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Left */}
          <motion.div 
            className="text-3xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-[#64B8CF] to-[#F5D757] bg-clip-text text-transparent">
              PUBLIXY
            </span>
          </motion.div>
          
          {/* Center Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#metodologia" className="text-gray-300 hover:text-[#7BD3E2] transition-all">Metodología</a>
            <a href="#medios" className="text-gray-300 hover:text-[#7BD3E2] transition-all">Nuestros Medios</a>
            <a href="#metricas" className="text-gray-300 hover:text-[#7BD3E2] transition-all">Métricas</a>
            <a href="#cobertura" className="text-gray-300 hover:text-[#7BD3E2] transition-all">Cobertura</a>
          </div>

          {/* CTA Right */}
          <motion.a 
            href="#contact"
            className="bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] text-white px-6 py-2.5 rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactar ahora
          </motion.a>
        </div>
      </nav>
    </header>
  )
}