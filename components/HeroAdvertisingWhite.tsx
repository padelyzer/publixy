'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function HeroAdvertisingWhite() {
  const [currentAd, setCurrentAd] = useState(0)
  const [metrics, setMetrics] = useState({
    impressions: 0,
    reach: 0,
    locations: 0
  })

  // Simulated ad creatives
  const adCreatives = [
    { brand: 'Nike', format: 'Digital Billboard', location: 'Polanco' },
    { brand: 'Coca-Cola', format: 'LED Screen', location: 'Santa Fe' },
    { brand: 'Apple', format: 'Mobile Display', location: 'Roma Norte' },
    { brand: 'Samsung', format: 'Transit Media', location: 'Reforma' },
  ]

  // Animate metrics on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setMetrics({
        impressions: 12500000,
        reach: 3800000,
        locations: 850
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Rotate ads
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % adCreatives.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(${`#64B8CF`} 1px, transparent 1px), linear-gradient(to right, ${`#64B8CF`} 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating Screens Animation */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${15 + i * 12}%`,
                top: `${15 + i * 8}%`,
              }}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.7
              }}
            >
              <div className="w-24 h-16 bg-gradient-to-br from-publixy-teal/10 to-publixy-gold/10 rounded-xl backdrop-blur-sm border border-gray-200 shadow-lg" />
            </motion.div>
          ))}
        </div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-publixy-teal/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-publixy-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tag */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-6 py-3 text-sm font-black tracking-wider text-white uppercase bg-gradient-to-r from-publixy-teal to-publixy-gold rounded-full mb-6 shadow-lg"
            >
              Publicidad Exterior Premium
            </motion.span>

            {/* Main Title */}
            <h1 className="text-5xl lg:text-7xl font-black mb-6">
              <span className="text-gray-900">Conecta con</span>
              <br />
              <span className="bg-gradient-to-r from-publixy-teal to-publixy-gold bg-clip-text text-transparent">
                Millones
              </span>
              <br />
              <span className="text-gray-900">en Movimiento</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              La red más grande de <span className="text-publixy-gold font-bold">publicidad digital exterior</span> en México. 
              Alcanza audiencias premium en los momentos y lugares que importan.
            </p>

            {/* Live Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-publixy-teal/20 shadow-lg"
              >
                <div className="text-3xl font-black text-publixy-teal">
                  {metrics.impressions > 0 && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      {(metrics.impressions / 1000000).toFixed(1)}M
                    </motion.span>
                  )}
                </div>
                <div className="text-xs text-gray-600 mt-1 font-semibold">Impresiones/mes</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-publixy-gold/20 shadow-lg"
              >
                <div className="text-3xl font-black text-publixy-gold">
                  {metrics.reach > 0 && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      {(metrics.reach / 1000000).toFixed(1)}M
                    </motion.span>
                  )}
                </div>
                <div className="text-xs text-gray-600 mt-1 font-semibold">Alcance único</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, type: "spring" }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-publixy-yellow/30 shadow-lg"
              >
                <div className="text-3xl font-black text-publixy-yellow">
                  {metrics.locations > 0 && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      {metrics.locations}+
                    </motion.span>
                  )}
                </div>
                <div className="text-xs text-gray-600 mt-1 font-semibold">Ubicaciones</div>
              </motion.div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(239,189,74,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-publixy-gold to-publixy-yellow text-white font-black rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                Ver Casos de Éxito
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(123,211,226,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-publixy-teal text-publixy-teal font-black rounded-full hover:bg-publixy-teal/5 transition-colors shadow-lg"
              >
                Solicitar Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Right Visual - Digital Billboard Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Billboard Frame */}
            <div className="relative">
              {/* 3D Billboard Effect */}
              <motion.div
                className="relative"
                animate={{
                  rotateY: [0, 3, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Billboard Screen */}
                <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden border-4 border-gray-300 shadow-2xl">
                  {/* Screen Content */}
                  <div className="absolute inset-0 bg-black">
                    {/* Ad Display */}
                    <motion.div
                      key={currentAd}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.2 }}
                      className="relative w-full h-full flex items-center justify-center"
                    >
                      {/* Creative Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${
                        currentAd % 2 === 0 ? 'from-publixy-teal via-publixy-teal-dark to-gray-900' : 'from-publixy-gold via-publixy-yellow to-gray-900'
                      }`} />
                      
                      {/* Ad Info */}
                      <div className="relative z-10 text-center p-8">
                        <div className="text-6xl font-black text-white mb-4 drop-shadow-lg">
                          {adCreatives[currentAd].brand}
                        </div>
                        <div className="text-sm text-white/90 uppercase tracking-wider mb-2 font-semibold">
                          {adCreatives[currentAd].format}
                        </div>
                        <div className="text-xs text-white/70 font-medium">
                          📍 {adCreatives[currentAd].location}
                        </div>
                      </div>

                      {/* Animated Elements */}
                      <motion.div
                        className="absolute bottom-4 right-4"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      >
                        <div className="px-3 py-1 bg-red-500 text-white text-xs font-black rounded shadow-lg">
                          LIVE
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* LED Effect Overlay */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.2) 2px, rgba(0,0,0,0.2) 4px)`,
                  }} />
                </div>

                {/* Billboard Stand */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gradient-to-b from-gray-400 to-gray-600 rounded-b-lg shadow-lg" />
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-publixy-gold to-publixy-yellow text-white px-6 py-3 rounded-full font-black text-sm shadow-xl border border-white/20"
              >
                ROI +250%
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, type: "spring" }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-publixy-teal to-publixy-teal-dark text-white px-6 py-3 rounded-full font-black text-sm shadow-xl border border-white/20"
              >
                24/7 Display
              </motion.div>
            </div>

            {/* Format Icons */}
            <div className="mt-12 grid grid-cols-4 gap-4">
              {['DOOH', 'Mobile', 'Transit', 'Urban'].map((format, i) => (
                <motion.div
                  key={format}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-200 mb-2 shadow-lg">
                    <div className="w-6 h-6 bg-gradient-to-br from-publixy-teal to-publixy-gold rounded" />
                  </div>
                  <div className="text-xs text-gray-600 font-semibold">{format}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}