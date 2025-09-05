'use client'

import { motion } from 'framer-motion'

interface HeaderVariant3Props {
  scrolled?: boolean
}

export default function HeaderVariant3({ scrolled = false }: HeaderVariant3Props) {
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/10 backdrop-blur-2xl' : 'bg-transparent'
    }`}>
      <nav className="px-6 py-5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center justify-center relative">
            {/* Left Menu */}
            <div className="absolute left-0 hidden lg:flex items-center space-x-8">
              <a href="#metodologia" className="text-white/80 hover:text-white transition-all text-sm uppercase tracking-wider">
                Metodología
              </a>
              <a href="#medios" className="text-white/80 hover:text-white transition-all text-sm uppercase tracking-wider">
                Medios
              </a>
            </div>
            
            {/* Center Logo */}
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-[#64B8CF] via-[#7BD3E2] to-[#F5D757] bg-clip-text text-transparent">
                PUBLIXY
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                Premium Media Network
              </div>
            </motion.div>
            
            {/* Right Menu */}
            <div className="absolute right-0 hidden lg:flex items-center space-x-8">
              <a href="#metricas" className="text-white/80 hover:text-white transition-all text-sm uppercase tracking-wider">
                Métricas
              </a>
              <motion.a 
                href="#contact"
                className="relative overflow-hidden px-6 py-2.5 rounded-full border border-[#64B8CF] group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 text-white font-semibold text-sm uppercase tracking-wider">
                  Contacto
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}