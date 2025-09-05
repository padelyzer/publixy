'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function HeroVariant5() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const locations = [
    { id: 1, name: 'BBVA Angelópolis', viewers: '12,450', type: 'Bancario' },
    { id: 2, name: 'Aeropuerto PBC', viewers: '45,200', type: 'Terminal' },
    { id: 3, name: 'Paseo Destino', viewers: '28,300', type: 'Comercial' },
    { id: 4, name: 'Liverpool Puebla', viewers: '18,750', type: 'Retail' },
  ]

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(100, 184, 207, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(245, 215, 87, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(123, 211, 226, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(100, 184, 207, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-block mb-6"
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(100, 184, 207, 0.5)',
                    '0 0 40px rgba(245, 215, 87, 0.5)',
                    '0 0 20px rgba(100, 184, 207, 0.5)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="px-6 py-3 bg-black/50 backdrop-blur-xl rounded-full border border-cyan-500/50">
                  <span className="text-cyan-300 font-bold">⚡ Resultados en 30 días</span>
                </div>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-white">El futuro de la</span>
                <span className="block">
                  <span className="inline-block hover:scale-110 transition-transform cursor-pointer bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] bg-clip-text text-transparent">
                    publicidad
                  </span>
                </span>
                <span className="block text-white">es ahora</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Sistema inteligente de publicidad exterior con IA predictiva y optimización automática de campañas.
              </p>

              {/* Interactive ROI Calculator Preview */}
              <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Tu inversión</span>
                  <span className="text-2xl font-bold text-white">$50,000 MXN</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                  <motion.div 
                    className="h-2 bg-gradient-to-r from-[#64B8CF] to-[#F5D757] rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '75%' }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">ROI Estimado</span>
                  <motion.span 
                    className="text-3xl font-bold text-[#F5D757]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    +$175,000 MXN
                  </motion.span>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] text-white font-bold rounded-xl"
                >
                  Calcular mi ROI
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 text-white font-bold rounded-xl"
                >
                  Ver casos de éxito
                </motion.button>
              </div>
            </motion.div>

            {/* Right - Live Locations Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-4 text-center lg:text-left">
                <span className="text-gray-400 text-sm">Ubicaciones en vivo</span>
                <div className="flex items-center justify-center lg:justify-start gap-2 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-white font-semibold">2,847 personas viendo ahora</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {locations.map((location, index) => (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    onHoverStart={() => setHoveredCard(location.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="relative"
                  >
                    <div className={`p-6 bg-white/5 backdrop-blur-xl rounded-xl border transition-all cursor-pointer ${
                      hoveredCard === location.id 
                        ? 'border-cyan-500/50 bg-white/10 scale-105' 
                        : 'border-white/10'
                    }`}>
                      <div className="text-xs text-cyan-400 mb-2">{location.type}</div>
                      <div className="text-white font-semibold mb-3">{location.name}</div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-sm font-bold">{location.viewers}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">vistas hoy</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Preview */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-6 p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-cyan-300 text-sm font-semibold">📍 850+ ubicaciones activas</span>
                  <button className="text-xs text-white/70 hover:text-white transition-colors">
                    Ver mapa completo →
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}