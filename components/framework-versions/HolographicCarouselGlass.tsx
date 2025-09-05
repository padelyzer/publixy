'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const frameworkData = [
  { 
    letter: 'P', 
    title: 'Precisión de Audiencia', 
    subtitle: 'No más spray and pray',
    description: 'Tu mensaje llegará exactamente a quien buscas. Nuestro sistema de segmentación A/B/B+ identifica tu audiencia ideal con precisión quirúrgica.',
    gradient: 'from-blue-400/20 via-cyan-400/20 to-purple-400/20',
    accent: 'cyan',
    metrics: ['97% precisión', 'A/B/B+', '280K/mes']
  },
  { 
    letter: 'U', 
    title: 'Ubicaciones Estratégicas', 
    subtitle: 'El lugar correcto importa',
    description: 'Donde tu audiencia toma decisiones. 1,650+ puntos premium en México: desde BBVA y Santander hasta aeropuertos internacionales.',
    gradient: 'from-purple-400/20 via-pink-400/20 to-red-400/20',
    accent: 'purple',
    metrics: ['1,650+ ubicaciones', '14 bancos', '8 aeropuertos']
  },
  { 
    letter: 'B', 
    title: 'Big Data Intelligence', 
    subtitle: 'Datos que valen oro',
    description: 'Millones de micro-decisiones optimizadas por segundo. Sabemos qué funciona antes de que tu competencia se entere.',
    gradient: 'from-cyan-400/20 via-blue-400/20 to-indigo-400/20',
    accent: 'blue',
    metrics: ['10M/día', 'Real-time', '99.9% precisión']
  },
  { 
    letter: 'L', 
    title: 'Localización Premium', 
    subtitle: 'Cobertura que importa',
    description: 'México no es un mercado, son 32. Cubrimos las zonas de mayor poder adquisitivo en 14 estados estratégicos.',
    gradient: 'from-green-400/20 via-emerald-400/20 to-teal-400/20',
    accent: 'green',
    metrics: ['14 estados', '32 ciudades', 'Cobertura Premium']
  },
  { 
    letter: 'I', 
    title: 'Impacto Medible', 
    subtitle: 'ROI transparente, sin excusas',
    description: 'Cada peso invertido es rastreable. Reportes en tiempo real que demuestran el impacto real en tu bottom line.',
    gradient: 'from-orange-400/20 via-red-400/20 to-pink-400/20',
    accent: 'orange',
    metrics: ['ROI 3.5x', '100% tracking', 'Real-time']
  },
  { 
    letter: 'X', 
    title: 'eXperiencia White-Glove', 
    subtitle: 'Servicio de Fortune 500',
    description: 'Un equipo dedicado que conoce tu negocio como si fuera propio. Account managers con 10+ años en publicidad premium.',
    gradient: 'from-pink-400/20 via-rose-400/20 to-purple-400/20',
    accent: 'pink',
    metrics: ['NPS 92', '< 2 hrs respuesta', '24/7']
  },
  { 
    letter: 'Y', 
    title: 'Yield Optimization', 
    subtitle: 'Tu campaña mejora sola',
    description: 'Machine Learning que aprende y optimiza 24/7. Mientras duermes, tu campaña se vuelve 15% más efectiva cada mes.',
    gradient: 'from-yellow-400/20 via-amber-400/20 to-orange-400/20',
    accent: 'yellow',
    metrics: ['+15%/mes', '24/7', '100% automático']
  }
]

export default function HolographicCarouselGlass() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % frameworkData.length)
      }, 4500)
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Glass morphism header */}
      <div className="relative z-10 text-center mb-8 p-8 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10">
        <h2 className="text-5xl font-black text-white mb-2">
          Framework <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">P.U.B.L.I.X.Y</span>
        </h2>
        <p className="text-sm text-gray-300">Glassmorphism Edition</p>
      </div>

      <div className="relative w-full max-w-7xl h-[650px] z-10">
        <AnimatePresence mode="sync">
          {frameworkData.map((item, index) => {
            const position = getCardPosition(index)
            const isActive = position === 0
            const scale = 1 - Math.abs(position) * 0.13
            const opacity = 1 - Math.abs(position) * 0.3
            const xOffset = position * 360
            const z = -Math.abs(position) * 250
            const rotateY = position * 20
            
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
                  stiffness: 260, 
                  damping: 26
                }}
                onClick={() => !isActive && setCurrentIndex(index)}
                style={{ 
                  transformStyle: 'preserve-3d',
                  zIndex: isActive ? 50 : 50 - Math.abs(position),
                  perspective: '1200px'
                }}
              >
                <div className={`relative w-[340px] h-[480px] ${isActive ? 'cursor-default' : 'cursor-pointer'}`}>
                  {/* Glassmorphism card */}
                  <motion.div
                    className="h-full relative"
                    whileHover={isActive ? { scale: 1.03, rotateX: 5 } : {}}
                    style={{
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Glass background */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-2xl`} />
                    
                    {/* Glass card */}
                    <div className={`relative h-full rounded-2xl overflow-hidden border ${
                      isActive ? 'border-white/30' : 'border-white/10'
                    } bg-white/5 backdrop-blur-xl`}>
                      
                      {/* Shimmer effect */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"
                          animate={{
                            y: ['-200%', '200%']
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'linear'
                          }}
                        />
                      )}
                      
                      <div className="p-8 h-full flex flex-col relative z-10">
                        {/* Floating letter */}
                        <motion.div 
                          className="text-8xl font-black text-white/10 absolute top-4 right-4"
                          animate={isActive ? {
                            y: [0, -10, 0],
                          } : {}}
                          transition={{
                            duration: 3,
                            repeat: Infinity
                          }}
                        >
                          {item.letter}
                        </motion.div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-300 mb-6 font-medium">{item.subtitle}</p>
                        </div>
                        
                        <p className="text-gray-200 flex-1 mb-6 leading-relaxed backdrop-blur-sm">
                          {item.description}
                        </p>
                        
                        {/* Glass metrics */}
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="grid grid-cols-3 gap-2"
                          >
                            {item.metrics.map((metric, i) => (
                              <div key={i} className="text-center p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                                <div className="text-xs font-bold text-white">{metric}</div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                        
                        {/* Bottom accent line */}
                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-60`} />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>

        {/* Glass navigation */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 p-2 flex items-center space-x-2">
            {frameworkData.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                whileHover={{ scale: 1.2 }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-8 h-2 bg-gradient-to-r from-cyan-400 to-purple-400' 
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Glass control button */}
      <motion.button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 px-8 py-3 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full text-sm font-medium text-white hover:bg-white/20 transition-all relative overflow-hidden"
      >
        <span className="relative z-10">{isAutoPlaying ? '⏸ Pausar' : '▶ Reproducir'}</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        />
      </motion.button>
    </div>
  )
}