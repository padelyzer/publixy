'use client'

import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
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
    icon: icons.precision,
    gradient: 'from-cyan-500 to-blue-600',
    features: ['Segmentación A/B/B+', 'Datos de tráfico verificables', 'Audiencia premium garantizada']
  },
  {
    letter: 'U',
    title: 'Ubicaciones Premium',
    subtitle: 'Espacios Estratégicos',
    description: '1,650+ puntos exclusivos en México donde tu audiencia toma decisiones importantes.',
    icon: icons.locations,
    gradient: 'from-purple-500 to-pink-600',
    features: ['Bancos y aeropuertos', 'Restaurantes premium', 'Clubes deportivos exclusivos']
  },
  {
    letter: 'B',
    title: 'Big Data Intelligence',
    subtitle: 'Analytics Avanzado',
    description: 'Procesamiento de millones de datos para optimización continua de campañas.',
    icon: icons.data,
    gradient: 'from-blue-500 to-cyan-600',
    features: ['Dashboard en tiempo real', 'Métricas verificables', 'Optimización continua']
  },
  {
    letter: 'L',
    title: 'Localización Estratégica',
    subtitle: 'Cobertura Nacional',
    description: 'Presencia en las zonas de mayor poder adquisitivo de México.',
    icon: icons.localization,
    gradient: 'from-green-500 to-teal-600',
    features: ['Cobertura Puebla-CDMX', 'Expansión controlada', 'Zonas AAA']
  },
  {
    letter: 'I',
    title: 'Impacto Medible',
    subtitle: 'ROI Transparente',
    description: 'Métricas claras y verificables del retorno de inversión en tiempo real.',
    icon: icons.impact,
    gradient: 'from-orange-500 to-red-600',
    features: ['28% más efectivo', 'ROI comprobable', 'Reportes detallados']
  },
  {
    letter: 'X',
    title: 'Experiencia Premium',
    subtitle: 'Servicio White-Glove',
    description: 'Equipo dedicado con más de 10 años de experiencia en publicidad.',
    icon: icons.experience,
    gradient: 'from-purple-600 to-blue-600',
    features: ['Account management', 'Soporte 24/7', 'Consultoría estratégica']
  },
  {
    letter: 'Y',
    title: 'Yield Optimization',
    subtitle: 'Mejora Continua',
    description: 'Machine Learning que optimiza tu campaña 24/7 para máximo rendimiento.',
    icon: icons.yield,
    gradient: 'from-cyan-600 to-purple-600',
    features: ['Optimización automática', 'A/B testing continuo', 'Mejora incremental']
  }
]

// Quantum Field Card Component
function QuantumFieldCard({ item, isActive, position, index, onClick }: any) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useTransform(mouseY, [-150, 150], [5, -5])
  const rotateY = useTransform(mouseX, [-150, 150], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) return
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const scale = 1 - Math.abs(position) * 0.1
  const opacity = 1 - Math.abs(position) * 0.3
  const z = -Math.abs(position) * 150
  const xOffset = position * 320

  return (
    <motion.div
      className="absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2"
      animate={{
        x: xOffset,
        z: z,
        scale: scale,
        opacity: opacity
      }}
      transition={{ 
        type: 'spring',
        stiffness: 100,
        damping: 20
      }}
      style={{
        zIndex: isActive ? 50 : 50 - Math.abs(position),
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      onClick={() => !isActive && onClick(index)}
    >
      <motion.div
        className={`relative w-[320px] h-[400px] ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isActive ? rotateX : 0,
          rotateY: isActive ? rotateY : 0,
          transformStyle: 'preserve-3d'
        }}
      >
        <motion.div
          className="relative w-full h-full rounded-xl overflow-hidden"
          whileHover={isActive ? { scale: 1.02 } : {}}
        >
          {/* Quantum Field Background */}
          <div className="absolute inset-0">
            {/* Base gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10`} />
            
            {/* Quantum particles - only animate when active */}
            {isActive && (
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => {
                  // Use deterministic values based on index
                  const size = ((i * 7) % 3) + 1
                  const duration = ((i * 13) % 20) + 10
                  const delay = (i * 3) % 5
                  const startX = ((i * 37) % 100)
                  const startY = ((i * 53) % 100)
                  const moveX = ((i * 29) % 200) - 100
                  const moveY = ((i * 31) % 200) - 100
                  const scaleValue = ((i * 11) % 10) / 10 + 0.5
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${startX}%`,
                        top: `${startY}%`,
                        background: `radial-gradient(circle, rgba(6,147,227,${0.8 - i * 0.03}), transparent)`,
                        boxShadow: `0 0 ${size * 2}px rgba(6,147,227,0.5)`
                      }}
                      animate={{
                        x: [0, moveX, 0],
                        y: [0, moveY, 0],
                        scale: [1, scaleValue, 1],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration,
                        delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )
                })}
              </div>
            )}

            {/* Energy waves - only for active card */}
            {isActive && [...Array(2)].map((_, i) => (
              <motion.div
                key={`wave-${i}`}
                className="absolute inset-0 rounded-full"
                style={{
                  border: '1px solid',
                  borderColor: 'rgba(6,147,227,0.3)',
                }}
                animate={{
                  scale: [0.8, 1.5, 0.8],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 4,
                  delay: i * 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            ))}

            {/* 3D depth layers */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at center, transparent, rgba(0,0,0,0.3))',
                transform: 'translateZ(10px)'
              }}
            />
            
            {isActive && (
              <motion.div
                className="absolute inset-0"
                style={{
                  background: isHovered 
                    ? 'radial-gradient(circle at center, rgba(6,147,227,0.1), transparent)'
                    : 'transparent',
                  transform: 'translateZ(20px)',
                  transition: 'background 0.3s'
                }}
              />
            )}
          </div>

          {/* Card Content */}
          <motion.div 
            className={`h-full rounded-xl overflow-hidden transition-all duration-500 ${
              isActive
                ? 'bg-black/60 backdrop-blur-xl border-2'
                : 'bg-black/40 backdrop-blur-md border'
            } border-white/20`}
            style={{
              transform: isActive ? 'translateZ(30px)' : 'translateZ(0)'
            }}
          >
            <div className="p-6 h-full flex flex-col justify-between">
              {/* Letter Badge */}
              <div className="text-6xl font-bold text-white/10 absolute top-4 right-4">
                {item.letter}
              </div>

              {/* Icon with quantum glow */}
              <motion.div 
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-publixy-cyan/20 to-publixy-purple/20 backdrop-blur-xl flex items-center justify-center mb-4 border border-white/10 relative"
                animate={isActive ? {
                  boxShadow: [
                    '0 0 20px rgba(6,147,227,0.5)',
                    '0 0 40px rgba(155,81,224,0.5)',
                    '0 0 20px rgba(6,147,227,0.5)'
                  ]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                style={{
                  transform: isActive ? 'translateZ(40px)' : 'translateZ(0)'
                }}
              >
                <div className="text-white">
                  {item.icon}
                </div>
                
                {/* Quantum field around icon */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className="absolute top-0 left-1/2 w-1 h-1 bg-publixy-cyan rounded-full -translate-x-1/2 -translate-y-2" />
                    <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-publixy-purple rounded-full -translate-x-1/2 translate-y-2" />
                    <div className="absolute left-0 top-1/2 w-1 h-1 bg-publixy-cyan rounded-full -translate-y-1/2 -translate-x-2" />
                    <div className="absolute right-0 top-1/2 w-1 h-1 bg-publixy-purple rounded-full -translate-y-1/2 translate-x-2" />
                  </motion.div>
                )}
              </motion.div>

              {/* Content */}
              <div className="flex-1 space-y-3" style={{ transform: isActive ? 'translateZ(35px)' : 'translateZ(0)' }}>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-publixy-cyan text-sm font-medium">{item.subtitle}</p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>

              {/* Quantum energy bar */}
              {isActive && (
                <div className="h-[2px] bg-white/10 rounded-full overflow-hidden mt-4">
                  <motion.div
                    className="h-full bg-gradient-to-r from-publixy-cyan to-publixy-purple"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      width: '50%',
                      filter: 'blur(2px)',
                      boxShadow: '0 0 10px rgba(6,147,227,0.8)'
                    }}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function HolographicCarouselQuantum() {
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
        <div className="text-center mb-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-1"
          >
            <span className="inline-block px-4 py-2 text-xs font-semibold tracking-wider text-publixy-cyan uppercase bg-publixy-cyan/10 rounded-full border border-publixy-cyan/20">
              Metodología Probada
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light text-white mb-1"
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

        {/* Carousel with Quantum Field */}
        <div className="relative h-[360px] max-w-7xl mx-auto">
          <AnimatePresence mode="sync">
            {frameworkData.map((item, index) => {
              const position = getCardPosition(index)
              const isActive = position === 0
              
              return (
                <QuantumFieldCard
                  key={index}
                  item={item}
                  isActive={isActive}
                  position={position}
                  index={index}
                  onClick={(idx: number) => {
                    setCurrentIndex(idx)
                    setIsAutoPlaying(false)
                  }}
                />
              )
            })}
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="absolute -bottom-16 left-0 right-0 flex justify-center items-center space-x-2">
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