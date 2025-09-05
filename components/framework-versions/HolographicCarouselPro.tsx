'use client'

import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

// Iconos profesionales en SVG
const icons = {
  precision: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
  ),
  locations: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  data: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
    </svg>
  ),
  localization: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      <path d="M12 2v20" />
    </svg>
  ),
  impact: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      <path d="M9 21v-6M15 21v-8M12 21v-10" strokeLinecap="round" />
    </svg>
  ),
  experience: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.3"/>
    </svg>
  ),
  yield: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

const frameworkData = [
  { 
    letter: 'P', 
    title: 'Precisión de Audiencia', 
    subtitle: 'No más spray and pray',
    description: 'Tu mensaje llegará exactamente a quien buscas. Nuestro sistema de segmentación A/B/B+ identifica tu audiencia ideal con precisión quirúrgica.',
    color: 'from-blue-500 to-cyan-500', 
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
    color: 'from-purple-500 to-pink-500', 
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
    color: 'from-cyan-500 to-teal-500', 
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
    color: 'from-green-500 to-emerald-500', 
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
    color: 'from-orange-500 to-red-500', 
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
    color: 'from-pink-500 to-rose-500', 
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
    color: 'from-yellow-500 to-amber-500', 
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

export default function HolographicCarouselPro() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [speed, setSpeed] = useState(4000)
  const [expandedCard, setExpandedCard] = useState(false)
  const constraintsRef = useRef<HTMLDivElement>(null)

  // Auto-rotation
  useEffect(() => {
    if (isAutoPlaying && !expandedCard) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % frameworkData.length)
      }, speed)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, speed, expandedCard])

  const handleDrag = (event: any, info: any) => {
    if (info.offset.x > 100) {
      setCurrentIndex((prev) => (prev - 1 + frameworkData.length) % frameworkData.length)
      setIsAutoPlaying(false)
    } else if (info.offset.x < -100) {
      setCurrentIndex((prev) => (prev + 1) % frameworkData.length)
      setIsAutoPlaying(false)
    }
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
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-8">
      {/* Header más compacto */}
      <div className="text-center mb-4">
        <h2 className="text-2xl md:text-3xl font-black mb-1">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Framework P.U.B.L.I.X.Y
          </span>
        </h2>
        <p className="text-xs text-gray-500">Visualización profesional 360°</p>
      </div>

      {/* Controls más compactos */}
      <div className="flex items-center gap-2 mb-3 flex-wrap justify-center">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-all ${
            isAutoPlaying 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : 'bg-white/5 text-gray-400 border border-white/10'
          }`}
        >
          {isAutoPlaying ? '⏸' : '▶'}
        </button>
        
        <div className="flex items-center gap-1">
          {[3000, 4000, 5000].map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={`px-2 py-1 rounded text-xs font-medium ${
                speed === s 
                  ? 'bg-publixy-turquoise/20 text-publixy-turquoise' 
                  : 'bg-white/5 text-gray-500'
              }`}
            >
              {s/1000}s
            </button>
          ))}
        </div>

        <button
          onClick={() => setExpandedCard(!expandedCard)}
          className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg font-medium text-xs text-purple-400"
        >
          {expandedCard ? '◐' : '◉'} Detalles
        </button>
      </div>

      {/* Main carousel - más espacio vertical */}
      <div className="relative w-full max-w-7xl flex-1">
        {/* Carousel container con más altura */}
        <div 
          ref={constraintsRef}
          className="relative h-[calc(100vh-200px)] min-h-[500px] perspective-1000"
        >
          {/* Holographic platform más sutil */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[700px] h-2">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent rounded-full blur-2xl" />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent rounded-full"
              animate={{
                scaleX: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            />
          </div>

          {/* Cards con más espacio */}
          <AnimatePresence mode="sync">
            {frameworkData.map((item, index) => {
              const position = getCardPosition(index)
              const isActive = position === 0
              const scale = expandedCard && isActive ? 1.1 : 1 - Math.abs(position) * 0.15
              const opacity = 1 - Math.abs(position) * 0.3
              const z = -Math.abs(position) * 250
              const rotateYValue = position * 25
              const xOffset = expandedCard && isActive ? 0 : position * 380
              
              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    x: xOffset,
                    z: z,
                    rotateY: expandedCard && isActive ? 0 : rotateYValue,
                    scale: scale,
                    opacity: opacity
                  }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 260, 
                    damping: 26,
                    mass: 1
                  }}
                  drag={isActive && !expandedCard ? "x" : false}
                  dragConstraints={constraintsRef}
                  dragElastic={0.15}
                  onDragEnd={handleDrag}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    zIndex: isActive ? 50 : 50 - Math.abs(position)
                  }}
                  onClick={() => !isActive && !expandedCard && setCurrentIndex(index)}
                >
                  {/* Card con diseño mejorado */}
                  <div className={`relative ${expandedCard && isActive ? 'w-[420px] h-[520px]' : 'w-72 h-[400px]'} transition-all duration-500`}>
                    {/* Glow effects más sutiles */}
                    {isActive && (
                      <>
                        <div className={`absolute -inset-4 bg-gradient-to-br ${item.color} opacity-20 rounded-3xl blur-3xl`} />
                        <div className={`absolute -inset-2 bg-gradient-to-br ${item.color} opacity-10 rounded-3xl blur-xl`} />
                      </>
                    )}
                    
                    {/* Main card con mejor glass effect */}
                    <motion.div
                      className="relative h-full rounded-2xl overflow-hidden"
                      whileHover={isActive ? { scale: 1.01 } : {}}
                      style={{
                        background: isActive 
                          ? 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))' 
                          : 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                        backdropFilter: 'blur(24px) saturate(180%)',
                        border: isActive ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.08)',
                        boxShadow: isActive 
                          ? '0 20px 40px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)' 
                          : 'none'
                      }}
                    >
                      {/* Shimmer effect más sutil */}
                      {isActive && (
                        <div className="absolute inset-0 opacity-20">
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30`} />
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent"
                            animate={{
                              y: ['-200%', '200%']
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: 'linear'
                            }}
                          />
                        </div>
                      )}

                      {/* Content con mejor espaciado */}
                      <div className="relative h-full flex flex-col p-8">
                        {/* Header con icono profesional */}
                        <div className="text-center mb-6">
                          <motion.div 
                            className={`inline-flex mb-4 bg-gradient-to-br ${item.color} bg-clip-text text-transparent`}
                            animate={isActive ? { 
                              rotateZ: [0, 5, -5, 0],
                            } : {}}
                            transition={{ duration: 4, repeat: Infinity }}
                          >
                            {icons[item.icon as keyof typeof icons]}
                          </motion.div>
                          <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-400 font-medium">{item.subtitle}</p>
                        </div>

                        {/* Description */}
                        <p className="text-base text-gray-200 mb-6 text-center leading-relaxed">
                          {item.description}
                        </p>

                        {/* Expanded content con mejor layout */}
                        {expandedCard && isActive ? (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex-1 space-y-5"
                          >
                            {/* Metrics en grid */}
                            <div className="grid grid-cols-3 gap-3">
                              {Object.entries(item.metrics).map(([key, value]) => (
                                <div key={key} className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                                  <div className="text-lg font-bold text-white">{value}</div>
                                  <div className="text-xs text-gray-500 capitalize">{key}</div>
                                </div>
                              ))}
                            </div>

                            {/* Features list */}
                            <div className="space-y-2">
                              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Características</h4>
                              {item.features.map((feature, i) => (
                                <div key={i} className="flex items-center space-x-2">
                                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`} />
                                  <span className="text-xs text-gray-300">{feature}</span>
                                </div>
                              ))}
                            </div>

                            {/* Case Study card */}
                            <div className={`p-4 rounded-xl bg-gradient-to-r ${item.color} bg-opacity-10 border border-white/10`}>
                              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Caso de Éxito</h4>
                              <p className="text-sm text-white">{item.caseStudy}</p>
                            </div>
                          </motion.div>
                        ) : (
                          /* Quick metrics cuando no está expandido */
                          isActive && (
                            <div className="mt-auto">
                              <div className="grid grid-cols-3 gap-2">
                                {Object.entries(item.metrics).slice(0, 3).map(([key, value]) => (
                                  <div key={key} className="text-center p-2 bg-white/5 rounded-lg">
                                    <div className="text-sm font-bold text-white">{value}</div>
                                    <div className="text-xs text-gray-500">{key}</div>
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
        </div>

        {/* Navigation dots integrados */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-2 pb-4">
          {frameworkData.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
              whileHover={{ scale: 1.2 }}
              className={`transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full' 
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40 rounded-full'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}