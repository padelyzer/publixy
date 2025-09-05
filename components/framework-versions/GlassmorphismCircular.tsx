'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const frameworkData = [
  { 
    letter: 'P', 
    title: 'Precisión de Audiencia', 
    subtitle: 'No más spray and pray',
    description: 'Tu mensaje llegará exactamente a quien buscas. Nuestro sistema de segmentación A/B/B+ identifica tu audiencia ideal con precisión quirúrgica.',
    gradient: 'from-blue-400 to-cyan-400',
    color: '#06B6D4',
    stats: { value: '97%', label: 'Precisión' }
  },
  { 
    letter: 'U', 
    title: 'Ubicaciones Estratégicas', 
    subtitle: 'El lugar correcto importa',
    description: 'Donde tu audiencia toma decisiones. 1,650+ puntos premium en México: desde BBVA y Santander hasta aeropuertos internacionales.',
    gradient: 'from-purple-400 to-pink-400',
    color: '#EC4899',
    stats: { value: '1,650+', label: 'Ubicaciones' }
  },
  { 
    letter: 'B', 
    title: 'Big Data Intelligence', 
    subtitle: 'Datos que valen oro',
    description: 'Millones de micro-decisiones optimizadas por segundo. Sabemos qué funciona antes de que tu competencia se entere.',
    gradient: 'from-cyan-400 to-blue-400',
    color: '#3B82F6',
    stats: { value: '10M', label: 'Datos/día' }
  },
  { 
    letter: 'L', 
    title: 'Localización Premium', 
    subtitle: 'Cobertura que importa',
    description: 'México no es un mercado, son 32. Cubrimos las zonas de mayor poder adquisitivo en 14 estados estratégicos.',
    gradient: 'from-green-400 to-emerald-400',
    color: '#10B981',
    stats: { value: '32', label: 'Ciudades' }
  },
  { 
    letter: 'I', 
    title: 'Impacto Medible', 
    subtitle: 'ROI transparente, sin excusas',
    description: 'Cada peso invertido es rastreable. Reportes en tiempo real que demuestran el impacto real en tu bottom line.',
    gradient: 'from-orange-400 to-red-400',
    color: '#F97316',
    stats: { value: '3.5x', label: 'ROI' }
  },
  { 
    letter: 'X', 
    title: 'eXperiencia White-Glove', 
    subtitle: 'Servicio de Fortune 500',
    description: 'Un equipo dedicado que conoce tu negocio como si fuera propio. Account managers con 10+ años en publicidad premium.',
    gradient: 'from-pink-400 to-rose-400',
    color: '#F43F5E',
    stats: { value: '92', label: 'NPS' }
  },
  { 
    letter: 'Y', 
    title: 'Yield Optimization', 
    subtitle: 'Tu campaña mejora sola',
    description: 'Machine Learning que aprende y optimiza 24/7. Mientras duermes, tu campaña se vuelve 15% más efectiva cada mes.',
    gradient: 'from-yellow-400 to-amber-400',
    color: '#F59E0B',
    stats: { value: '+15%', label: 'Mejora/mes' }
  }
]

export default function GlassmorphismCircular() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(true)

  useEffect(() => {
    if (isAutoRotating) {
      const interval = setInterval(() => {
        setRotation(prev => prev - 0.5)
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isAutoRotating])

  const handleSelect = (index: number) => {
    setSelectedIndex(index)
    setIsAutoRotating(false)
    const angle = (360 / frameworkData.length) * index
    setRotation(-angle)
  }

  const currentItem = frameworkData[selectedIndex]
  const radius = 280

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(120,119,198,0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(255,119,198,0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(120,119,198,0.3) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center">
        {/* Title */}
        <motion.div 
          className="absolute top-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-5xl font-black text-white mb-2">
            Framework <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">P.U.B.L.I.X.Y</span>
          </h2>
          <p className="text-gray-300 text-sm">Circular Navigation • Glassmorphism</p>
        </motion.div>

        {/* Circular layout container */}
        <div className="relative w-[600px] h-[600px]">
          {/* Center glass orb */}
          <motion.div 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center"
            animate={{
              scale: [1, 1.05, 1],
              rotate: rotation * -0.5
            }}
            transition={{
              scale: { duration: 4, repeat: Infinity },
              rotate: { duration: 0.5 }
            }}
          >
            <div className="text-center">
              <motion.div 
                className={`text-8xl font-black bg-gradient-to-r ${currentItem.gradient} bg-clip-text text-transparent`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {currentItem.letter}
              </motion.div>
              <div className="text-white mt-2">
                <div className="text-2xl font-bold">{currentItem.stats.value}</div>
                <div className="text-xs text-gray-300">{currentItem.stats.label}</div>
              </div>
            </div>
          </motion.div>

          {/* Orbital items */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: rotation }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          >
            {frameworkData.map((item, index) => {
              const angle = (360 / frameworkData.length) * index
              const radian = (angle * Math.PI) / 180
              const x = Math.cos(radian) * radius
              const y = Math.sin(radian) * radius
              const isActive = index === selectedIndex

              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                >
                  <motion.div
                    className="relative cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleSelect(index)}
                    animate={{ rotate: -rotation }}
                    transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                  >
                    {/* Glow effect */}
                    {isActive && (
                      <motion.div
                        className="absolute -inset-4 rounded-full blur-xl"
                        style={{ backgroundColor: item.color }}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                    
                    {/* Glass node */}
                    <div className={`relative w-20 h-20 rounded-full backdrop-blur-xl border-2 flex items-center justify-center transition-all ${
                      isActive 
                        ? 'bg-white/25 border-white/40 scale-125' 
                        : 'bg-white/10 border-white/20'
                    }`}>
                      <span className={`text-2xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        {item.letter}
                      </span>
                    </div>

                    {/* Connection line */}
                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
                         width="600" height="600"
                         style={{ transform: `translate(-50%, -50%) rotate(${-angle}deg)` }}>
                      <line
                        x1="40" y1="0"
                        x2={radius - 40} y2="0"
                        stroke={isActive ? item.color : 'rgba(255,255,255,0.1)'}
                        strokeWidth={isActive ? 2 : 1}
                        strokeDasharray={isActive ? "0" : "5,5"}
                        opacity={isActive ? 0.5 : 0.2}
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Detail panel */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={selectedIndex}
        >
          <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20">
            <div className="flex items-start gap-6">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${currentItem.gradient} flex items-center justify-center text-white text-2xl font-black`}>
                {currentItem.letter}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">{currentItem.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{currentItem.subtitle}</p>
                <p className="text-gray-200 leading-relaxed">{currentItem.description}</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
              <button
                onClick={() => setIsAutoRotating(!isAutoRotating)}
                className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur text-white text-sm font-medium hover:bg-white/20 transition-colors"
              >
                {isAutoRotating ? '⏸ Pausar rotación' : '▶ Rotar'}
              </button>
              
              <div className="flex gap-2">
                {frameworkData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelect(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === selectedIndex 
                        ? 'w-8 bg-white' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}