'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'
import ParticlesBackground from './ParticlesBackground'

export default function HeroSectionCorporate() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <ParticlesBackground />
      
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-publixy-cyan/10 via-transparent to-publixy-purple/10 opacity-30" />
        
        {/* Refined grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        {/* Corporate badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block px-5 py-2 text-xs font-semibold tracking-wider text-publixy-cyan uppercase bg-publixy-cyan/10 rounded-full border border-publixy-cyan/20">
            Red Premium de Publicidad • México 2025
          </span>
        </motion.div>

        {/* Main title - Clean and professional */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight"
        >
          <span className="block text-white">La Red de Medios</span>
          <span className="block font-bold bg-gradient-to-r from-publixy-cyan to-publixy-purple bg-clip-text text-transparent">
            Premium más Inteligente
          </span>
          <span className="block text-white">de México</span>
        </motion.h1>

        {/* Propuesta de Valor Central */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto text-gray-300 font-light"
        >
          Conectamos marcas con audiencias premium en los momentos y lugares que importan,
          <span className="text-publixy-cyan font-medium"> optimizando cada peso invertido con datos reales.</span>
        </motion.p>

        {/* Elevator Pitch */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-base md:text-lg mb-12 max-w-3xl mx-auto text-gray-400"
        >
          Red exclusiva en restaurantes premium, sucursales BBVA, aeropuertos y clubes deportivos.
          <span className="text-white font-medium"> 28% más efectivo que medios tradicionales.</span>
        </motion.p>

        {/* Key metrics - Corporate style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
        >
          {[
            { value: '28', label: 'Más efectivo que medios tradicionales', suffix: '%' },
            { value: '1,650', label: 'Ubicaciones exclusivas verificadas', suffix: '+' },
            { value: '87', label: 'De mexicanos ignora publicidad online', suffix: '%' }
          ].map((metric, index) => (
            <div key={index} className="p-6 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/10">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-publixy-cyan to-publixy-purple bg-clip-text text-transparent">
                  {metric.value}{metric.suffix}
                </span>
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-wider">{metric.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons - Corporate style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-publixy-cyan to-publixy-purple text-white font-medium rounded-full overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Calcula el impacto de tu campaña</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-publixy-purple to-publixy-cyan"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          
          <motion.a
            href="#framework"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 backdrop-blur-sm bg-white/[0.02] text-white font-medium rounded-full border border-white/20 hover:bg-white/[0.05] hover:border-white/30 transition-all"
          >
            Agenda tu análisis gratuito
          </motion.a>
        </motion.div>

        {/* Proof Points & Trust */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-16 border-t border-white/10"
        >
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Ubicaciones Premium Verificadas</p>
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <span className="text-white/80 text-sm">Paseo Destino (75K personas/mes)</span>
            <span className="text-white/80 text-sm">Red BBVA Nacional</span>
            <span className="text-white/80 text-sm">Aeropuerto Internacional Puebla</span>
            <span className="text-white/80 text-sm">Restaurantes Premium</span>
          </div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-6">Confían en nosotros</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {['BBVA', 'Santander', 'Liverpool', 'Audi', 'Mercedes-Benz'].map((brand) => (
              <span key={brand} className="text-white/60 font-light text-lg">{brand}</span>
            ))}
          </div>
        </motion.div>

        {/* Elegant scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [2, 12, 2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-0.5 h-2 bg-white/50 rounded-full mt-1.5"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}