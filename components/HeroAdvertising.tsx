'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function HeroAdvertising() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-publixy-charcoal via-publixy-dark to-publixy-charcoal">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(${`#64B8CF`} 1px, transparent 1px), linear-gradient(to right, ${`#64B8CF`} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating Screens Animation */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 10}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            >
              <div className="w-32 h-20 bg-gradient-to-br from-publixy-teal/20 to-publixy-gold/20 rounded-lg backdrop-blur-sm border border-white/10" />
            </motion.div>
          ))}
        </div>
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
              className="inline-block px-4 py-2 text-xs font-bold tracking-wider text-publixy-charcoal uppercase bg-publixy-yellow rounded-full mb-6"
            >
              Publicidad Exterior Premium
            </motion.span>

            {/* Main Title */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Conecta con</span>
              <br />
              <span className="bg-gradient-to-r from-publixy-teal to-publixy-gold bg-clip-text text-transparent">
                Millones
              </span>
              <br />
              <span className="text-white">en Movimiento</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              La red más grande de <span className="text-publixy-gold font-semibold">publicidad digital exterior</span> en México. 
              Alcanza audiencias premium en los momentos y lugares que importan.
            </p>

            {/* Live Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-publixy-teal/30"
              >
                <div className="text-3xl font-bold text-publixy-teal">
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
                <div className="text-xs text-gray-400 mt-1">Impresiones/mes</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-publixy-gold/30"
              >
                <div className="text-3xl font-bold text-publixy-gold">
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
                <div className="text-xs text-gray-400 mt-1">Alcance único</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, type: "spring" }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-publixy-yellow/30"
              >
                <div className="text-3xl font-bold text-publixy-yellow">
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
                <div className="text-xs text-gray-400 mt-1">Ubicaciones</div>
              </motion.div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-publixy-gold to-publixy-yellow text-publixy-charcoal font-bold rounded-full hover:shadow-lg hover:shadow-publixy-gold/25 transition-shadow"
              >
                Ver Casos de Éxito
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-publixy-teal text-publixy-teal font-bold rounded-full hover:bg-publixy-teal/10 transition-colors"
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
                  rotateY: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Billboard Screen */}
                <div className="relative w-full h-[400px] bg-gradient-to-br from-publixy-charcoal to-publixy-dark rounded-2xl overflow-hidden border-4 border-gray-700 shadow-2xl">
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
                        currentAd % 2 === 0 ? 'from-publixy-teal via-publixy-teal-dark to-publixy-charcoal' : 'from-publixy-gold via-publixy-yellow to-publixy-charcoal'
                      }`} />
                      
                      {/* Ad Info */}
                      <div className="relative z-10 text-center p-8">
                        <div className="text-6xl font-black text-white mb-4">
                          {adCreatives[currentAd].brand}
                        </div>
                        <div className="text-sm text-white/80 uppercase tracking-wider mb-2">
                          {adCreatives[currentAd].format}
                        </div>
                        <div className="text-xs text-white/60">
                          📍 {adCreatives[currentAd].location}
                        </div>
                      </div>

                      {/* Animated Elements */}
                      <motion.div
                        className="absolute bottom-4 right-4"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      >
                        <div className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded">
                          LIVE
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* LED Effect Overlay */}
                  <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)`,
                  }} />
                </div>

                {/* Billboard Stand */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg" />
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -top-4 -right-4 bg-publixy-yellow text-publixy-charcoal px-4 py-2 rounded-full font-bold text-sm shadow-lg"
              >
                ROI +250%
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, type: "spring" }}
                className="absolute -bottom-4 -left-4 bg-publixy-teal text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"
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
                  <div className="w-12 h-12 mx-auto bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-publixy-teal to-publixy-gold rounded" />
                  </div>
                  <div className="text-xs text-gray-400">{format}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}