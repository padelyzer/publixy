'use client'

import { motion } from 'framer-motion'

interface HeaderVariant2Props {
  scrolled?: boolean
}

export default function HeaderVariant2({ scrolled = false }: HeaderVariant2Props) {
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-gradient-to-r from-[#0a0014]/95 via-[#0d1f2d]/95 to-[#0a0014]/95 backdrop-blur-xl' : 'bg-transparent'
    }`}>
      {/* Top Bar with Contact Info */}
      <div className="bg-black/30 backdrop-blur-sm py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4 text-gray-400">
            <span>📞 222 358 9271</span>
            <span>✉️ contacto@publixy.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-cyan-300">🟢 2.1M impactos activos</span>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#64B8CF] to-[#F5D757] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-bold text-white">PUBLIXY</span>
          </motion.div>
          
          {/* Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#metodologia" className="text-gray-300 hover:text-[#7BD3E2] transition-all font-medium">
              Metodología
            </a>
            <a href="#medios" className="text-gray-300 hover:text-[#7BD3E2] transition-all font-medium">
              Nuestros Medios
            </a>
            <a href="#metricas" className="text-gray-300 hover:text-[#7BD3E2] transition-all font-medium">
              Métricas
            </a>
            <a href="#cobertura" className="text-gray-300 hover:text-[#7BD3E2] transition-all font-medium">
              Cobertura
            </a>
            <motion.a 
              href="#contact"
              className="bg-gradient-to-r from-[#EFBD4A] to-[#F5D757] text-gray-900 px-6 py-2.5 rounded-full font-bold"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(245, 215, 87, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Cotiza Ahora →
            </motion.a>
          </div>
        </div>
      </nav>
    </header>
  )
}