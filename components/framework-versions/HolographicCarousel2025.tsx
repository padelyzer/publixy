'use client'

import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

// Iconos profesionales en SVG con glow
const icons = {
  precision: (
    <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="6" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2" strokeWidth="2" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeWidth="1.5" />
    </svg>
  ),
  locations: (
    <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeWidth="1.5" />
      <circle cx="12" cy="9" r="2.5" strokeWidth="1.5" />
    </svg>
  ),
  data: (
    <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
    </svg>
  ),
  localization: (
    <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeWidth="1.5" />
      <path d="M12 2v20" strokeWidth="1.5" />
    </svg>
  ),
  impact: (
    <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeWidth="1.5" />
    </svg>
  ),
  experience: (
    <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="1.5" />
    </svg>
  ),
  yield: (
    <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="1.5" />
    </svg>
  )
}

const frameworkData = [
  { 
    letter: 'P', 
    title: 'Precisión de Audiencia', 
    subtitle: 'No más spray and pray',
    description: 'Tu mensaje llegará exactamente a quien buscas. Nuestro sistema de segmentación A/B/B+ identifica tu audiencia ideal con precisión quirúrgica.',
    gradient: 'from-cyan-400 via-blue-500 to-purple-500',
    auroraGradient: 'from-cyan-300/20 via-blue-400/30 to-purple-500/20',
    neonColor: '#00D4FF',
    icon: 'precision',
    metrics: {
      precisión: '97%',
      segmentos: 'A/B/B+',
      alcance: '280K/mes'
    },
    features: [
      'Segmentación por nivel socioeconómico',
      'Análisis psicográfico en tiempo real',
      'Targeting predictivo con IA'
    ],
    caseStudy: 'American Express: 45% más conversión con segmentación B+'
  },
  { 
    letter: 'U', 
    title: 'Ubicaciones Estratégicas', 
    subtitle: 'El lugar correcto importa',
    description: 'Donde tu audiencia toma decisiones. 1,650+ puntos premium en México: desde BBVA y Santander hasta aeropuertos internacionales.',
    gradient: 'from-purple-400 via-pink-500 to-red-500',
    auroraGradient: 'from-purple-300/20 via-pink-400/30 to-red-500/20',
    neonColor: '#FF00FF',
    icon: 'locations',
    metrics: {
      ubicaciones: '1,650+',
      bancos: '14 marcas',
      aeropuertos: '8 int.'
    },
    features: [
      'Sucursales bancarias premium',
      'Aeropuertos internacionales',
      'Hospitales y clínicas privadas'
    ],
    caseStudy: 'BBVA: Presente en 90% de sucursales platinum'
  },
  { 
    letter: 'B', 
    title: 'Big Data Intelligence', 
    subtitle: 'Datos que valen oro',
    description: 'Millones de micro-decisiones optimizadas por segundo. Sabemos qué funciona antes de que tu competencia se entere.',
    gradient: 'from-blue-400 via-indigo-500 to-purple-600',
    auroraGradient: 'from-blue-300/20 via-indigo-400/30 to-purple-600/20',
    neonColor: '#4040FF',
    icon: 'data',
    metrics: {
      procesamiento: '10M/día',
      insights: 'Real-time',
      precisión: '99.9%'
    },
    features: [
      'Analytics en tiempo real',
      'Machine learning predictivo',
      'Dashboard ejecutivo 24/7'
    ],
    caseStudy: 'Telcel: Optimización 28% CTR con ML'
  },
  { 
    letter: 'L', 
    title: 'Localización Premium', 
    subtitle: 'Cobertura que importa',
    description: 'México no es un mercado, son 32. Cubrimos las zonas de mayor poder adquisitivo en 14 estados estratégicos.',
    gradient: 'from-green-400 via-emerald-500 to-teal-600',
    auroraGradient: 'from-green-300/20 via-emerald-400/30 to-teal-600/20',
    neonColor: '#00FF88',
    icon: 'localization',
    metrics: {
      estados: '14',
      ciudades: '32',
      cobertura: 'Premium'
    },
    features: [
      'Corredor financiero Polanco-Santa Fe',
      'Zona dorada Monterrey',
      'Puebla-CDMX corredor industrial'
    ],
    caseStudy: 'Liverpool: Cobertura 100% zonas AAA'
  },
  { 
    letter: 'I', 
    title: 'Impacto Medible', 
    subtitle: 'ROI transparente, sin excusas',
    description: 'Cada peso invertido es rastreable. Reportes en tiempo real que demuestran el impacto real en tu bottom line.',
    gradient: 'from-orange-400 via-red-500 to-pink-600',
    auroraGradient: 'from-orange-300/20 via-red-400/30 to-pink-600/20',
    neonColor: '#FF4444',
    icon: 'impact',
    metrics: {
      ROI: '3.5x',
      tracking: '100%',
      reportes: 'Real-time'
    },
    features: [
      'Attribution modeling avanzado',
      'Conversion tracking multicanal',
      'Reportes ejecutivos automatizados'
    ],
    caseStudy: 'Audi México: ROI 3.5x en Q1 2024'
  },
  { 
    letter: 'X', 
    title: 'eXperiencia White-Glove', 
    subtitle: 'Servicio de Fortune 500',
    description: 'Un equipo dedicado que conoce tu negocio como si fuera propio. Account managers con 10+ años en publicidad premium.',
    gradient: 'from-pink-400 via-rose-500 to-purple-600',
    auroraGradient: 'from-pink-300/20 via-rose-400/30 to-purple-600/20',
    neonColor: '#FF00AA',
    icon: 'experience',
    metrics: {
      NPS: '92',
      respuesta: '< 2 hrs',
      dedicado: '24/7'
    },
    features: [
      'Account Manager senior dedicado',
      'Consultoría estratégica mensual',
      'Soporte prioritario 24/7'
    ],
    caseStudy: 'Mercedes-Benz: "El mejor partner de media"'
  },
  { 
    letter: 'Y', 
    title: 'Yield Optimization', 
    subtitle: 'Tu campaña mejora sola',
    description: 'Machine Learning que aprende y optimiza 24/7. Mientras duermes, tu campaña se vuelve 15% más efectiva cada mes.',
    gradient: 'from-yellow-400 via-amber-500 to-orange-600',
    auroraGradient: 'from-yellow-300/20 via-amber-400/30 to-orange-600/20',
    neonColor: '#FFD700',
    icon: 'yield',
    metrics: {
      mejora: '+15%/mes',
      optimización: '24/7',
      automático: '100%'
    },
    features: [
      'A/B testing continuo automático',
      'Optimización de presupuesto con IA',
      'Predicción de tendencias sectoriales'
    ],
    caseStudy: 'Citibanamex: +15% efectividad mensual continua'
  }
]

export default function HolographicCarousel2025() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [expandedCard, setExpandedCard] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    if (isAutoPlaying && !expandedCard) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % frameworkData.length)
      }, 4500)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, expandedCard])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

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
    <div 
      className="relative py-20 lg:py-32 flex flex-col items-center justify-center bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Aurora gradient background - Trend 2025 */}
      <div className="absolute inset-0">
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${currentItem.auroraGradient}`}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Aurora waves effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mouseX.get()}px ${mouseY.get()}px, ${currentItem.neonColor}20, transparent 50%)`,
          }}
        />

        {/* Floating orbs - AI Aesthetic */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full"
            style={{
              background: `radial-gradient(circle, ${currentItem.neonColor}15, transparent)`,
              filter: 'blur(40px)',
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -30, 30, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(${currentItem.neonColor}40 1px, transparent 1px), linear-gradient(90deg, ${currentItem.neonColor}40 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Header with glow effect */}
      <div className="relative z-10 text-center mb-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-black mb-2"
          animate={{
            textShadow: [
              `0 0 20px ${currentItem.neonColor}`,
              `0 0 40px ${currentItem.neonColor}`,
              `0 0 20px ${currentItem.neonColor}`,
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className={`bg-gradient-to-r ${currentItem.gradient} bg-clip-text text-transparent`}>
            Framework P.U.B.L.I.X.Y
          </span>
        </motion.h2>
        <p className="text-sm text-gray-400">2025 Edition • Aurora Glassmorphism</p>
      </div>

      {/* Main carousel container */}
      <div className="relative w-full max-w-7xl">
        <div className="relative h-[600px] perspective-1000">
          
          {/* Holographic platform with neon glow */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[800px] h-4">
            <motion.div 
              className="w-full h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${currentItem.neonColor}40, transparent)`,
                filter: 'blur(20px)',
                boxShadow: `0 0 80px ${currentItem.neonColor}40`,
              }}
              animate={{
                scaleX: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            />
          </div>

          {/* Cards */}
          <AnimatePresence mode="sync">
            {frameworkData.map((item, index) => {
              const position = getCardPosition(index)
              const isActive = position === 0
              const scale = expandedCard && isActive ? 1.1 : 1 - Math.abs(position) * 0.15
              const opacity = 1 - Math.abs(position) * 0.3
              const z = -Math.abs(position) * 250
              const rotateY = expandedCard && isActive ? 0 : position * 25
              const xOffset = expandedCard && isActive ? 0 : position * 380
              
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
                  style={{ 
                    transformStyle: 'preserve-3d',
                    zIndex: isActive ? 50 : 50 - Math.abs(position)
                  }}
                  onClick={() => !isActive && !expandedCard && setCurrentIndex(index)}
                >
                  <div className={`relative ${expandedCard && isActive ? 'w-[500px] h-[600px]' : 'w-[340px] h-[480px]'} transition-all duration-500`}>
                    {/* Neon glow effect for active card */}
                    {isActive && (
                      <>
                        <motion.div 
                          className="absolute -inset-8 rounded-3xl"
                          style={{
                            background: `radial-gradient(circle, ${item.neonColor}30, transparent)`,
                            filter: 'blur(30px)',
                          }}
                          animate={{
                            opacity: [0.5, 0.8, 0.5],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <div 
                          className="absolute -inset-1 rounded-2xl"
                          style={{
                            background: `linear-gradient(135deg, ${item.neonColor}40, transparent)`,
                            filter: 'blur(10px)',
                          }}
                        />
                      </>
                    )}
                    
                    {/* Glass card with aurora gradient */}
                    <motion.div
                      className="relative h-full rounded-2xl overflow-hidden"
                      style={{
                        background: isActive 
                          ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))' 
                          : 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                        backdropFilter: 'blur(20px) saturate(180%)',
                        border: `1px solid ${isActive ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)'}`,
                        boxShadow: isActive 
                          ? `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 50px ${item.neonColor}20, inset 0 1px 0 rgba(255,255,255,0.2)` 
                          : 'none'
                      }}
                      whileHover={isActive ? { scale: 1.02 } : {}}
                    >
                      {/* Aurora gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.auroraGradient} opacity-30`} />
                      
                      {/* Animated shimmer effect */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(105deg, transparent 40%, ${item.neonColor}10 50%, transparent 60%)`,
                          }}
                          animate={{
                            x: ['-200%', '200%']
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'linear'
                          }}
                        />
                      )}

                      {/* Content */}
                      <div className="relative h-full flex flex-col p-8">
                        {/* Header with neon icon */}
                        <div className="text-center mb-6">
                          <motion.div 
                            className="inline-flex mb-4"
                            style={{
                              color: item.neonColor,
                              filter: `drop-shadow(0 0 10px ${item.neonColor})`,
                            }}
                            animate={isActive ? { 
                              rotateZ: [0, 5, -5, 0],
                              scale: [1, 1.05, 1]
                            } : {}}
                            transition={{ duration: 4, repeat: Infinity }}
                          >
                            {icons[item.icon as keyof typeof icons]}
                          </motion.div>
                          
                          <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-sm font-medium" style={{ color: item.neonColor }}>{item.subtitle}</p>
                        </div>

                        {/* Description */}
                        <p className="text-base text-gray-200 mb-6 text-center leading-relaxed">
                          {item.description}
                        </p>

                        {/* Expanded content */}
                        {expandedCard && isActive ? (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex-1 space-y-5"
                          >
                            {/* Metrics with neon accent */}
                            <div className="grid grid-cols-3 gap-3">
                              {Object.entries(item.metrics).map(([key, value]) => (
                                <div 
                                  key={key} 
                                  className="text-center p-3 rounded-xl border"
                                  style={{
                                    background: `linear-gradient(135deg, ${item.neonColor}10, transparent)`,
                                    borderColor: `${item.neonColor}30`,
                                  }}
                                >
                                  <div className="text-lg font-bold text-white">{value}</div>
                                  <div className="text-xs text-gray-400 capitalize">{key}</div>
                                </div>
                              ))}
                            </div>

                            {/* Features */}
                            <div className="space-y-2">
                              <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: item.neonColor }}>
                                Características
                              </h4>
                              {item.features.map((feature, i) => (
                                <div key={i} className="flex items-center space-x-2">
                                  <div 
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{ 
                                      background: item.neonColor,
                                      boxShadow: `0 0 5px ${item.neonColor}`
                                    }}
                                  />
                                  <span className="text-xs text-gray-300">{feature}</span>
                                </div>
                              ))}
                            </div>

                            {/* Case Study with gradient border */}
                            <div 
                              className="p-4 rounded-xl relative overflow-hidden"
                              style={{
                                background: `linear-gradient(135deg, ${item.neonColor}05, transparent)`,
                              }}
                            >
                              <div 
                                className="absolute inset-0 rounded-xl"
                                style={{
                                  background: `linear-gradient(135deg, ${item.neonColor}20, transparent)`,
                                  padding: '1px',
                                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                  WebkitMaskComposite: 'xor',
                                  maskComposite: 'exclude',
                                }}
                              />
                              <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: item.neonColor }}>
                                Caso de Éxito
                              </h4>
                              <p className="text-sm text-white">{item.caseStudy}</p>
                            </div>
                          </motion.div>
                        ) : (
                          isActive && (
                            <div className="mt-auto">
                              <div className="grid grid-cols-3 gap-2">
                                {Object.entries(item.metrics).slice(0, 3).map(([key, value]) => (
                                  <div 
                                    key={key} 
                                    className="text-center p-2 rounded-lg"
                                    style={{
                                      background: `linear-gradient(135deg, ${item.neonColor}10, transparent)`,
                                    }}
                                  >
                                    <div className="text-sm font-bold text-white">{value}</div>
                                    <div className="text-xs text-gray-400">{key}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {/* Navigation dots with neon glow */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-3 pb-4">
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
                    ? 'w-10 h-2' 
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
                style={{
                  background: index === currentIndex ? `linear-gradient(90deg, ${item.neonColor}, ${item.gradient.split(' ')[3]})` : undefined,
                  boxShadow: index === currentIndex ? `0 0 15px ${item.neonColor}` : 'none'
                }}
              />
            ))}
          </div>
        </div>

        {/* Controls with glassmorphism */}
        <div className="absolute top-1/2 -translate-y-1/2 right-8 space-y-3">
          <motion.button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-xl backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))',
              boxShadow: `0 0 20px ${currentItem.neonColor}20`
            }}
          >
            {isAutoPlaying ? '⏸' : '▶'}
          </motion.button>
          
          <motion.button
            onClick={() => setExpandedCard(!expandedCard)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-xl backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))',
              boxShadow: `0 0 20px ${currentItem.neonColor}20`
            }}
          >
            {expandedCard ? '−' : '+'}
          </motion.button>
        </div>
      </div>
    </div>
  )
}