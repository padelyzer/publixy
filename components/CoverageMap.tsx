'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// Ciudades con presencia de Publixy
const cities = [
  { name: 'Ciudad de México', x: 45, y: 60, screens: 280, population: '9.2M', growth: '+15%' },
  { name: 'Guadalajara', x: 32, y: 45, screens: 120, population: '5.3M', growth: '+12%' },
  { name: 'Monterrey', x: 38, y: 28, screens: 95, population: '4.9M', growth: '+18%' },
  { name: 'Puebla', x: 48, y: 55, screens: 65, population: '3.2M', growth: '+8%' },
  { name: 'Tijuana', x: 8, y: 18, screens: 45, population: '2.1M', growth: '+22%' },
  { name: 'León', x: 35, y: 42, screens: 38, population: '1.8M', growth: '+10%' },
  { name: 'Cancún', x: 75, y: 45, screens: 55, population: '967K', growth: '+25%' },
  { name: 'Mérida', x: 65, y: 55, screens: 32, population: '1.2M', growth: '+14%' }
]

const CityInfo = ({ city, onClose }: { city: typeof cities[0], onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.8, y: 20 }}
    className="absolute z-50 bg-gradient-to-br from-publixy-dark to-black backdrop-blur-xl border border-publixy-gold/30 rounded-2xl p-6 min-w-[280px]"
    style={{
      left: `${city.x}%`,
      top: `${city.y - 15}%`,
      transform: 'translate(-50%, -100%)'
    }}
  >
    <button
      onClick={onClose}
      className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
    >
      ✕
    </button>
    
    <h3 className="text-xl font-bold text-white mb-3">{city.name}</h3>
    
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <div className="text-2xl font-black text-publixy-teal">{city.screens}</div>
        <div className="text-xs text-gray-400">Pantallas</div>
      </div>
      <div>
        <div className="text-2xl font-black text-publixy-gold">{city.population}</div>
        <div className="text-xs text-gray-400">Población</div>
      </div>
    </div>
    
    <div className="bg-white/5 rounded-lg p-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-300">Crecimiento</span>
        <span className="text-sm font-bold text-green-400">{city.growth}</span>
      </div>
      <div className="mt-2 bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-publixy-teal to-publixy-gold h-2 rounded-full"
          style={{ width: `${parseInt(city.growth)}%` }}
        />
      </div>
    </div>
  </motion.div>
)

export default function CoverageMap() {
  const [activeCity, setActiveCity] = useState<number | null>(null)
  const [pulseAnimation, setPulseAnimation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(prev => prev + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-publixy-charcoal via-black to-publixy-dark relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-publixy-teal/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-publixy-gold/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-3 text-sm font-black tracking-wider text-publixy-charcoal uppercase bg-gradient-to-r from-publixy-teal to-publixy-gold rounded-full mb-6">
            Cobertura Nacional
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Presencia en{' '}
            <span className="bg-gradient-to-r from-publixy-gold to-publixy-yellow bg-clip-text text-transparent">
              México
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Red estratégicamente ubicada en las principales ciudades y corredores comerciales
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Mexico Map SVG */}
          <div className="relative w-full h-[600px] bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
            {/* Simplified Mexico Shape */}
            <svg viewBox="0 0 100 80" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="mexicoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7BD3E2" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#EFBD4A" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              
              {/* Mexico outline (simplified) */}
              <path
                d="M15 25 L25 15 L35 20 L45 15 L55 20 L65 15 L75 20 L85 25 L90 35 L85 45 L80 55 L75 65 L65 70 L55 65 L45 70 L35 65 L25 60 L15 50 L10 35 Z"
                fill="url(#mexicoGradient)"
                stroke="#7BD3E2"
                strokeWidth="0.5"
                strokeOpacity="0.3"
              />
            </svg>

            {/* Cities */}
            {cities.map((city, index) => (
              <div key={city.name}>
                {/* City Marker */}
                <motion.button
                  className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${city.x}%`, top: `${city.y}%` }}
                  onClick={() => setActiveCity(activeCity === index ? null : index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Pulse Animation */}
                  <motion.div
                    className="absolute inset-0 bg-publixy-gold rounded-full opacity-30"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                  
                  {/* Main Dot */}
                  <div className={`relative w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
                    activeCity === index 
                      ? 'bg-publixy-gold scale-150' 
                      : 'bg-publixy-teal hover:bg-publixy-gold'
                  }`} />
                  
                  {/* Screen Count Badge */}
                  <motion.div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-publixy-dark text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {city.screens} pantallas
                  </motion.div>
                </motion.button>

                {/* Connection Lines */}
                {index < cities.length - 1 && (
                  <motion.div
                    className="absolute pointer-events-none"
                    style={{
                      left: `${city.x}%`,
                      top: `${city.y}%`,
                      width: `${Math.abs(cities[index + 1].x - city.x)}%`,
                      height: '1px',
                      transformOrigin: '0 0',
                      transform: `rotate(${Math.atan2(cities[index + 1].y - city.y, cities[index + 1].x - city.x) * 180 / Math.PI}deg)`
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: index * 0.3, duration: 1 }}
                  >
                    <div className="h-full bg-gradient-to-r from-publixy-teal/30 to-publixy-gold/30" />
                  </motion.div>
                )}
              </div>
            ))}

            {/* City Info Panel */}
            <AnimatePresence>
              {activeCity !== null && (
                <CityInfo
                  city={cities[activeCity]}
                  onClose={() => setActiveCity(null)}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-8 gap-8 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-publixy-teal rounded-full" />
              <span className="text-sm text-gray-400">Ciudad Activa</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-publixy-gold rounded-full" />
              <span className="text-sm text-gray-400">Ciudad Seleccionada</span>
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                className="w-4 h-4 bg-publixy-gold/30 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
              <span className="text-sm text-gray-400">Transmisión en Vivo</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
          >
            <div className="text-4xl font-black text-publixy-teal mb-2">
              {cities.reduce((sum, city) => sum + city.screens, 0)}
            </div>
            <div className="text-gray-400">Total Pantallas</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
          >
            <div className="text-4xl font-black text-publixy-gold mb-2">{cities.length}</div>
            <div className="text-gray-400">Ciudades</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
          >
            <div className="text-4xl font-black text-publixy-yellow mb-2">32M+</div>
            <div className="text-gray-400">Población Total</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
          >
            <div className="text-4xl font-black text-publixy-teal mb-2">95%</div>
            <div className="text-gray-400">Cobertura Nacional</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}