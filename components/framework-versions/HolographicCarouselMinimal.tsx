'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const frameworkData = [
  { 
    letter: 'P', 
    title: 'Precisión de Audiencia', 
    subtitle: 'No más spray and pray',
    description: 'Tu mensaje llegará exactamente a quien buscas. Nuestro sistema de segmentación A/B/B+ identifica tu audiencia ideal con precisión quirúrgica.',
    color: 'from-white to-gray-200',
    metrics: ['97% precisión', 'A/B/B+', '280K/mes']
  },
  { 
    letter: 'U', 
    title: 'Ubicaciones Estratégicas', 
    subtitle: 'El lugar correcto importa',
    description: 'Donde tu audiencia toma decisiones. 1,650+ puntos premium en México: desde BBVA y Santander hasta aeropuertos internacionales.',
    color: 'from-white to-gray-200',
    metrics: ['1,650+ ubicaciones', '14 bancos', '8 aeropuertos']
  },
  { 
    letter: 'B', 
    title: 'Big Data Intelligence', 
    subtitle: 'Datos que valen oro',
    description: 'Millones de micro-decisiones optimizadas por segundo. Sabemos qué funciona antes de que tu competencia se entere.',
    color: 'from-white to-gray-200',
    metrics: ['10M/día', 'Real-time', '99.9% precisión']
  },
  { 
    letter: 'L', 
    title: 'Localización Premium', 
    subtitle: 'Cobertura que importa',
    description: 'México no es un mercado, son 32. Cubrimos las zonas de mayor poder adquisitivo en 14 estados estratégicos.',
    color: 'from-white to-gray-200',
    metrics: ['14 estados', '32 ciudades', 'Cobertura Premium']
  },
  { 
    letter: 'I', 
    title: 'Impacto Medible', 
    subtitle: 'ROI transparente, sin excusas',
    description: 'Cada peso invertido es rastreable. Reportes en tiempo real que demuestran el impacto real en tu bottom line.',
    color: 'from-white to-gray-200',
    metrics: ['ROI 3.5x', '100% tracking', 'Real-time']
  },
  { 
    letter: 'X', 
    title: 'eXperiencia White-Glove', 
    subtitle: 'Servicio de Fortune 500',
    description: 'Un equipo dedicado que conoce tu negocio como si fuera propio. Account managers con 10+ años en publicidad premium.',
    color: 'from-white to-gray-200',
    metrics: ['NPS 92', '< 2 hrs respuesta', '24/7']
  },
  { 
    letter: 'Y', 
    title: 'Yield Optimization', 
    subtitle: 'Tu campaña mejora sola',
    description: 'Machine Learning que aprende y optimiza 24/7. Mientras duermes, tu campaña se vuelve 15% más efectiva cada mes.',
    color: 'from-white to-gray-200',
    metrics: ['+15%/mes', '24/7', '100% automático']
  }
]

export default function HolographicCarouselMinimal() {
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-light text-gray-900 mb-2">
          Framework <span className="font-bold">P.U.B.L.I.X.Y</span>
        </h2>
        <p className="text-sm text-gray-500">Versión Minimalista</p>
      </div>

      <div className="relative w-full max-w-6xl h-[600px]">
        <AnimatePresence mode="sync">
          {frameworkData.map((item, index) => {
            const position = getCardPosition(index)
            const isActive = position === 0
            const scale = 1 - Math.abs(position) * 0.15
            const opacity = 1 - Math.abs(position) * 0.4
            const xOffset = position * 320
            const z = -Math.abs(position) * 200
            
            return (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  x: xOffset,
                  z: z,
                  scale: scale,
                  opacity: opacity
                }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 30
                }}
                onClick={() => !isActive && setCurrentIndex(index)}
                style={{ 
                  transformStyle: 'preserve-3d',
                  zIndex: isActive ? 50 : 50 - Math.abs(position)
                }}
              >
                <div className={`relative w-80 h-[420px] ${isActive ? 'cursor-default' : 'cursor-pointer'}`}>
                  <motion.div
                    className="h-full bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
                    whileHover={isActive ? { y: -5 } : {}}
                  >
                    <div className="p-8 h-full flex flex-col">
                      {/* Letter minimal */}
                      <div className="text-6xl font-thin text-gray-200 mb-4">{item.letter}</div>
                      
                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-500 mb-4">{item.subtitle}</p>
                      <p className="text-gray-700 flex-1 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Metrics */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100"
                        >
                          {item.metrics.map((metric, i) => (
                            <div key={i} className="text-center">
                              <div className="text-xs font-bold text-gray-900">{metric}</div>
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

        {/* Navigation dots */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-2 pb-8">
          {frameworkData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
              className={`transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 h-1 bg-gray-900' 
                  : 'w-1 h-1 bg-gray-300 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="mt-8 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
      >
        {isAutoPlaying ? 'Pausar' : 'Reproducir'}
      </button>
    </div>
  )
}