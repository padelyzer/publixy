'use client'

import { motion } from 'framer-motion'

export default function HeroVariant1() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1698807390276-725f3a7e41cf?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-white">La Red de Medios</span>
            <span className="block bg-gradient-to-r from-[#64B8CF] to-[#F5D757] bg-clip-text text-transparent">
              Más Inteligente
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Conectamos marcas con audiencias A/B/B+ en los momentos que importan
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] text-white font-bold rounded-lg shadow-lg"
            >
              Calcula tu ROI →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-lg backdrop-blur-sm"
            >
              Ver Demo
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-3 gap-8 mt-16"
        >
          <div>
            <div className="text-4xl font-bold text-[#F5D757]">2.1M</div>
            <div className="text-gray-300">Impactos mensuales</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#64B8CF]">850+</div>
            <div className="text-gray-300">Ubicaciones</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#7BD3E2]">95%</div>
            <div className="text-gray-300">Satisfacción</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}