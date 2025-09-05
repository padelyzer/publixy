'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const frameworkData = [
  { 
    letter: 'P', 
    title: 'Precisión de Audiencia', 
    subtitle: 'No más spray and pray',
    description: 'Tu mensaje llegará exactamente a quien buscas. Nuestro sistema de segmentación A/B/B+ identifica tu audiencia ideal con precisión quirúrgica.',
    color: 'from-blue-600 to-blue-400',
    glow: 'shadow-blue-500/50',
    metrics: ['97% precisión', 'A/B/B+', '280K/mes']
  },
  { 
    letter: 'U', 
    title: 'Ubicaciones Estratégicas', 
    subtitle: 'El lugar correcto importa',
    description: 'Donde tu audiencia toma decisiones. 1,650+ puntos premium en México: desde BBVA y Santander hasta aeropuertos internacionales.',
    color: 'from-purple-600 to-purple-400',
    glow: 'shadow-purple-500/50',
    metrics: ['1,650+ ubicaciones', '14 bancos', '8 aeropuertos']
  },
  { 
    letter: 'B', 
    title: 'Big Data Intelligence', 
    subtitle: 'Datos que valen oro',
    description: 'Millones de micro-decisiones optimizadas por segundo. Sabemos qué funciona antes de que tu competencia se entere.',
    color: 'from-cyan-600 to-cyan-400',
    glow: 'shadow-cyan-500/50',
    metrics: ['10M/día', 'Real-time', '99.9% precisión']
  },
  { 
    letter: 'L', 
    title: 'Localización Premium', 
    subtitle: 'Cobertura que importa',
    description: 'México no es un mercado, son 32. Cubrimos las zonas de mayor poder adquisitivo en 14 estados estratégicos.',
    color: 'from-green-600 to-green-400',
    glow: 'shadow-green-500/50',
    metrics: ['14 estados', '32 ciudades', 'Cobertura Premium']
  },
  { 
    letter: 'I', 
    title: 'Impacto Medible', 
    subtitle: 'ROI transparente, sin excusas',
    description: 'Cada peso invertido es rastreable. Reportes en tiempo real que demuestran el impacto real en tu bottom line.',
    color: 'from-orange-600 to-orange-400',
    glow: 'shadow-orange-500/50',
    metrics: ['ROI 3.5x', '100% tracking', 'Real-time']
  },
  { 
    letter: 'X', 
    title: 'eXperiencia White-Glove', 
    subtitle: 'Servicio de Fortune 500',
    description: 'Un equipo dedicado que conoce tu negocio como si fuera propio. Account managers con 10+ años en publicidad premium.',
    color: 'from-pink-600 to-pink-400',
    glow: 'shadow-pink-500/50',
    metrics: ['NPS 92', '< 2 hrs respuesta', '24/7']
  },
  { 
    letter: 'Y', 
    title: 'Yield Optimization', 
    subtitle: 'Tu campaña mejora sola',
    description: 'Machine Learning que aprende y optimiza 24/7. Mientras duermes, tu campaña se vuelve 15% más efectiva cada mes.',
    color: 'from-yellow-600 to-yellow-400',
    glow: 'shadow-yellow-500/50',
    metrics: ['+15%/mes', '24/7', '100% automático']
  }
]

export default function HolographicCarouselDark() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % frameworkData.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  const getCardPosition = (index: number) => {
    const diff = index - currentIndex
    const totalItems = frameworkData.length
    
    let position = diff
    if (diff > totalItems / 2) position -= totalItems
    if (diff < -totalItems / 2) position += totalItems
    
    return position
  }

  const currentItem = frameworkData[currentIndex]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center mb-8">
        <h2 className="text-5xl font-black text-white mb-2">
          Framework <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">P.U.B.L.I.X.Y</span>
        </h2>
        <p className="text-sm text-gray-400">Dark Mode Edition</p>
      </div>

      <div className="relative w-full max-w-7xl h-[650px] z-10">
        {/* Glow effect for active card */}
        <motion.div
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r ${currentItem.color} opacity-20 rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
        />

        <AnimatePresence mode="sync">
          {frameworkData.map((item, index) => {
            const position = getCardPosition(index)
            const isActive = position === 0
            const scale = 1 - Math.abs(position) * 0.12
            const opacity = 1 - Math.abs(position) * 0.35
            const xOffset = position * 350
            const z = -Math.abs(position) * 220
            const rotateY = position * 15
            
            return (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  x: xOffset,
                  z: z,
                  rotateY: rotateY,
                  scale: scale,
                  opacity: opacity
                }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 280, 
                  damping: 28
                }}
                onClick={() => !isActive && setCurrentIndex(index)}
                style={{ 
                  transformStyle: 'preserve-3d',
                  zIndex: isActive ? 50 : 50 - Math.abs(position),
                  perspective: '1000px'
                }}
              >
                <div className={`relative w-80 h-[450px] ${isActive ? 'cursor-default' : 'cursor-pointer'}`}>
                  {/* Card glow */}
                  {isActive && (
                    <div className={`absolute -inset-4 bg-gradient-to-r ${item.color} opacity-30 rounded-2xl blur-2xl ${item.glow} shadow-2xl`} />
                  )}
                  
                  <motion.div
                    className={`h-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border ${
                      isActive ? 'border-white/20' : 'border-white/5'
                    }`}
                    whileHover={isActive ? { scale: 1.02 } : {}}
                  >
                    {/* Top gradient accent */}
                    <div className={`h-1 bg-gradient-to-r ${item.color}`} />
                    
                    <div className="p-8 h-full flex flex-col">
                      {/* Letter with gradient */}
                      <div className={`text-7xl font-black bg-gradient-to-br ${item.color} bg-clip-text text-transparent mb-4`}>
                        {item.letter}
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400 mb-4">{item.subtitle}</p>
                      <p className="text-gray-300 flex-1 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Metrics with neon effect */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10"
                        >
                          {item.metrics.map((metric, i) => (
                            <div key={i} className={`text-center p-2 rounded-lg bg-gradient-to-r ${item.color} bg-opacity-10`}>
                              <div className="text-xs font-bold text-white">{metric}</div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>

        {/* Navigation dots with glow */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-3 pb-8">
          {frameworkData.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
              whileHover={{ scale: 1.2 }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? `w-10 h-2 bg-gradient-to-r ${item.color}` 
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
              style={{
                boxShadow: index === currentIndex ? `0 0 20px ${item.glow}` : ''
              }}
            />
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="mt-8 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-medium text-white hover:bg-white/20 transition-all"
      >
        {isAutoPlaying ? '⏸ Pausar' : '▶ Reproducir'}
      </button>
    </div>
  )
}