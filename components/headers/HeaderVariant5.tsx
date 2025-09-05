'use client'

import { motion } from 'framer-motion'

interface HeaderVariant5Props {
  scrolled?: boolean
}

export default function HeaderVariant5({ scrolled = false }: HeaderVariant5Props) {
  return (
    <header className="fixed top-0 w-full z-50">
      {/* Glass morphism effect */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/10 backdrop-blur-2xl border-b border-white/20' 
          : 'bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm'
      }`} />
      
      <nav className="relative max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo Minimal */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-3xl font-thin text-white tracking-widest">
              PUBLI<span className="font-bold bg-gradient-to-r from-[#64B8CF] to-[#F5D757] bg-clip-text text-transparent">XY</span>
            </span>
          </motion.div>
          
          {/* Minimal Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#metodologia" className="text-white/70 hover:text-white transition-all text-sm font-light">
              Metodología
            </a>
            <a href="#medios" className="text-white/70 hover:text-white transition-all text-sm font-light">
              Medios
            </a>
            <a href="#metricas" className="text-white/70 hover:text-white transition-all text-sm font-light">
              Métricas
            </a>
            <div className="h-8 w-px bg-white/20" />
            <motion.a 
              href="#contact"
              className="text-white text-sm font-medium relative group"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10">Comenzar</span>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#64B8CF] to-[#F5D757]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>

          {/* Mobile Menu Icon - Minimal */}
          <button className="md:hidden">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}