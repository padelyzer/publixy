'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// Iconos profesionales SVG minimalistas
const icons = {
  precision: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  locations: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  data: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  ),
  localization: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <ellipse cx="12" cy="12" rx="3" ry="10" />
      <path d="M2 12h20" />
    </svg>
  ),
  impact: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 13h2l3-3 4 4 5-5 4 4h2" />
      <path d="M7 21V16M12 21V13M17 21V9" />
    </svg>
  ),
  experience: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  yield: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v9l4-4M12 11l-4-4M12 22V11" />
      <circle cx="12" cy="17" r="3" />
    </svg>
  )
}

const frameworkData = [
  { 
    letter: 'P', 
    title: 'Precisión de Audiencia', 
    subtitle: 'Targeting Inteligente',
    description: 'Sistema de segmentación A/B/B+ con precisión láser para identificar tu audiencia ideal.',
    gradient: 'from-publixy-cyan to-publixy-blue',
    icon: 'precision',
    metrics: {
      'Precisión': '97%',
      'Segmentos': 'A/B/B+',
      'Alcance': '280K/mes'
    },
    features: [
      'Segmentación socioeconómica avanzada',
      'Análisis psicográfico en tiempo real',
      'Machine Learning predictivo'
    ]
  },
  { 
    letter: 'U', 
    title: 'Ubicaciones Premium', 
    subtitle: 'Espacios Estratégicos',
    description: '1,650+ puntos exclusivos en México donde tu audiencia toma decisiones importantes.',
    gradient: 'from-publixy-purple to-publixy-cyan',
    icon: 'locations',
    metrics: {
      'Ubicaciones': '1,650+',
      'Bancos': '14',
      'Cobertura': 'Nacional'
    },
    features: [
      'Sucursales bancarias premium',
      'Aeropuertos internacionales',
      'Centros corporativos AAA'
    ]
  },
  { 
    letter: 'B', 
    title: 'Big Data Intelligence', 
    subtitle: 'Analytics Avanzado',
    description: 'Procesamiento de millones de datos para optimización continua de campañas.',
    gradient: 'from-publixy-blue to-publixy-cyan',
    icon: 'data',
    metrics: {
      'Procesamiento': '10M/día',
      'Latencia': '<100ms',
      'Precisión': '99.9%'
    },
    features: [
      'Dashboard ejecutivo en tiempo real',
      'Predictive Analytics con IA',
      'Reportes automatizados'
    ]
  },
  { 
    letter: 'L', 
    title: 'Localización Estratégica', 
    subtitle: 'Cobertura Nacional',
    description: 'Presencia en las zonas de mayor poder adquisitivo de México.',
    gradient: 'from-publixy-turquoise to-publixy-cyan',
    icon: 'localization',
    metrics: {
      'Estados': '14',
      'Ciudades': '32',
      'Zonas AAA': '100%'
    },
    features: [
      'Corredor Polanco-Santa Fe',
      'Zona metropolitana premium',
      'Centros financieros principales'
    ]
  },
  { 
    letter: 'I', 
    title: 'Impacto Medible', 
    subtitle: 'ROI Transparente',
    description: 'Métricas claras y verificables del retorno de inversión en tiempo real.',
    gradient: 'from-publixy-gold to-publixy-cyan',
    icon: 'impact',
    metrics: {
      'ROI Promedio': '3.5x',
      'Tracking': '100%',
      'Reportes': '24/7'
    },
    features: [
      'Attribution modeling avanzado',
      'Conversion tracking multicanal',
      'KPIs personalizados'
    ]
  },
  { 
    letter: 'X', 
    title: 'Experiencia Premium', 
    subtitle: 'Servicio White-Glove',
    description: 'Equipo dedicado con más de 10 años de experiencia en publicidad premium.',
    gradient: 'from-publixy-purple to-publixy-blue',
    icon: 'experience',
    metrics: {
      'NPS': '92',
      'Respuesta': '<2hrs',
      'Soporte': '24/7'
    },
    features: [
      'Account Manager dedicado',
      'Consultoría estratégica',
      'Soporte prioritario'
    ]
  },
  { 
    letter: 'Y', 
    title: 'Yield Optimization', 
    subtitle: 'Mejora Continua',
    description: 'Machine Learning que optimiza tu campaña 24/7 para máximo rendimiento.',
    gradient: 'from-publixy-cyan to-publixy-turquoise',
    icon: 'yield',
    metrics: {
      'Optimización': '24/7',
      'Mejora': '+15%/mes',
      'Automático': '100%'
    },
    features: [
      'A/B testing automático',
      'Optimización presupuestaria',
      'Predicción de tendencias'
    ]
  }
]

export default function HolographicCarouselCorporate() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % frameworkData.length)
      }, 5000)
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
    <section className="relative py-12 lg:py-16 bg-gradient-to-b from-black via-publixy-charcoal to-black overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-publixy-cyan/5 via-transparent to-publixy-purple/5" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3"
          >
            <span className="inline-block px-4 py-2 text-xs font-semibold tracking-wider text-publixy-cyan uppercase bg-publixy-cyan/10 rounded-full border border-publixy-cyan/20">
              Metodología Probada
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light text-white mb-3"
          >
            Framework <span className="font-bold bg-gradient-to-r from-publixy-cyan to-publixy-purple bg-clip-text text-transparent">P.U.B.L.I.X.Y</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Siete pilares estratégicos que garantizan el éxito de tu inversión publicitaria
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative h-[280px] max-w-7xl mx-auto">
          <AnimatePresence mode="sync">
            {frameworkData.map((item, index) => {
              const position = getCardPosition(index)
              const isActive = position === 0
              const scale = 1 - Math.abs(position) * 0.1
              const opacity = 1 - Math.abs(position) * 0.3
              const z = -Math.abs(position) * 150
              const xOffset = position * 320
              
              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2"
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
                  style={{ 
                    transformStyle: 'preserve-3d',
                    zIndex: isActive ? 50 : 50 - Math.abs(position)
                  }}
                  onClick={() => !isActive && setCurrentIndex(index)}
                >
                  <div className={`relative w-[300px] h-[340px] ${isActive ? 'cursor-default' : 'cursor-pointer'}`}>
                    {/* Card */}
                    <motion.div
                      className={`h-full rounded-xl overflow-hidden transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/20 shadow-2xl' 
                          : 'bg-white/[0.03] backdrop-blur-md border border-white/10'
                      }`}
                      whileHover={isActive ? { y: -5 } : {}}
                    >
                      {/* Gradient accent top */}
                      <div className={`h-1 bg-gradient-to-r ${item.gradient}`} />
                      
                      {/* Content */}
                      <div className="p-8 h-full flex flex-col">
                        {/* Icon and Letter */}
                        <div className="flex items-start justify-between mb-6">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${item.gradient} bg-opacity-10`}>
                            <div className="text-white opacity-90">
                              {icons[item.icon as keyof typeof icons]}
                            </div>
                          </div>
                          <span className={`text-5xl font-thin bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent opacity-20`}>
                            {item.letter}
                          </span>
                        </div>

                        {/* Title and subtitle */}
                        <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                        <p className={`text-sm bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent font-medium mb-4`}>
                          {item.subtitle}
                        </p>
                        
                        {/* Description */}
                        <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Metrics - Only for active card */}
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10"
                          >
                            {Object.entries(item.metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-sm font-bold text-white">{value}</div>
                                <div className="text-xs text-gray-500">{key}</div>
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
          <div className="absolute -bottom-20 left-0 right-0 flex justify-center items-center space-x-2">
            {frameworkData.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`transition-all duration-300 ${
                  index === currentIndex 
                    ? `w-8 h-1 bg-gradient-to-r ${item.gradient}` 
                    : 'w-1 h-1 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}