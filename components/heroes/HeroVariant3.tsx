'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function HeroVariant3() {
  const [activeWord, setActiveWord] = useState(0)
  const words = ['Inteligente', 'Efectiva', 'Medible', 'Premium']

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Video Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Animated Badge */}
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <div className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-full border border-cyan-500/50">
              <span className="text-cyan-300 font-semibold">🚀 #1 Red de Medios Premium en México</span>
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="text-white">Publicidad</span>
            <div className="h-24 relative overflow-hidden">
              <motion.span
                key={activeWord}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="block absolute w-full bg-gradient-to-r from-[#64B8CF] via-[#7BD3E2] to-[#F5D757] bg-clip-text text-transparent"
              >
                {words[activeWord]}
              </motion.span>
            </div>
          </h1>

          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            850+ ubicaciones estratégicas • 2.1M impactos mensuales • ROI garantizado
          </p>

          {/* CTA with hover effect */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#64B8CF] to-[#F5D757] rounded-xl blur-lg group-hover:blur-xl transition-all opacity-70" />
              <button className="relative px-10 py-5 bg-gradient-to-r from-[#64B8CF] to-[#F5D757] text-white font-bold text-lg rounded-xl">
                Empieza Ahora → <span className="text-sm block">30% descuento este mes</span>
              </button>
            </motion.div>
          </div>

          {/* Live Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center space-x-8 px-8 py-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-gray-300">En vivo:</span>
            </div>
            <div className="text-white font-bold">
              <span className="text-2xl text-cyan-400">2,847</span>
              <span className="text-sm ml-2">personas viendo ahora</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}