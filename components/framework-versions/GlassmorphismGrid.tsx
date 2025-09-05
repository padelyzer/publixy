'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const frameworkData = [
  { 
    letter: 'P', 
    title: 'Precisión de Audiencia', 
    subtitle: 'No más spray and pray',
    description: 'Tu mensaje llegará exactamente a quien buscas. Nuestro sistema de segmentación A/B/B+ identifica tu audiencia ideal con precisión quirúrgica.',
    gradient: 'from-blue-400 to-cyan-400',
    metrics: ['97% precisión', 'A/B/B+', '280K/mes'],
    icon: '🎯'
  },
  { 
    letter: 'U', 
    title: 'Ubicaciones Estratégicas', 
    subtitle: 'El lugar correcto importa',
    description: 'Donde tu audiencia toma decisiones. 1,650+ puntos premium en México: desde BBVA y Santander hasta aeropuertos internacionales.',
    gradient: 'from-purple-400 to-pink-400',
    metrics: ['1,650+ ubicaciones', '14 bancos', '8 aeropuertos'],
    icon: '📍'
  },
  { 
    letter: 'B', 
    title: 'Big Data Intelligence', 
    subtitle: 'Datos que valen oro',
    description: 'Millones de micro-decisiones optimizadas por segundo. Sabemos qué funciona antes de que tu competencia se entere.',
    gradient: 'from-cyan-400 to-blue-400',
    metrics: ['10M/día', 'Real-time', '99.9% precisión'],
    icon: '📊'
  },
  { 
    letter: 'L', 
    title: 'Localización Premium', 
    subtitle: 'Cobertura que importa',
    description: 'México no es un mercado, son 32. Cubrimos las zonas de mayor poder adquisitivo en 14 estados estratégicos.',
    gradient: 'from-green-400 to-emerald-400',
    metrics: ['14 estados', '32 ciudades', 'Premium'],
    icon: '🗺️'
  },
  { 
    letter: 'I', 
    title: 'Impacto Medible', 
    subtitle: 'ROI transparente',
    description: 'Cada peso invertido es rastreable. Reportes en tiempo real que demuestran el impacto real en tu bottom line.',
    gradient: 'from-orange-400 to-red-400',
    metrics: ['ROI 3.5x', '100% tracking', 'Real-time'],
    icon: '📈'
  },
  { 
    letter: 'X', 
    title: 'eXperiencia White-Glove', 
    subtitle: 'Servicio Fortune 500',
    description: 'Un equipo dedicado que conoce tu negocio como si fuera propio. Account managers con 10+ años en publicidad premium.',
    gradient: 'from-pink-400 to-rose-400',
    metrics: ['NPS 92', '< 2 hrs', '24/7'],
    icon: '⭐'
  },
  { 
    letter: 'Y', 
    title: 'Yield Optimization', 
    subtitle: 'Tu campaña mejora sola',
    description: 'Machine Learning que aprende y optimiza 24/7. Mientras duermes, tu campaña se vuelve 15% más efectiva cada mes.',
    gradient: 'from-yellow-400 to-amber-400',
    metrics: ['+15%/mes', '24/7', '100% auto'],
    icon: '⚡'
  }
]

export default function GlassmorphismGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden p-8">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 100, -100, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-black text-white mb-4">
            Framework <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">P.U.B.L.I.X.Y</span>
          </h2>
          <p className="text-gray-300">Grid Layout • Glassmorphism Design</p>
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {frameworkData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
              className="relative cursor-pointer"
            >
              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.98 }}
                className="relative h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glow effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0`}
                  animate={{ 
                    opacity: hoveredIndex === index ? 0.5 : 0 
                  }}
                />

                {/* Glass card */}
                <div className={`relative h-full p-6 rounded-2xl border transition-all ${
                  selectedIndex === index 
                    ? 'bg-white/20 border-white/40' 
                    : 'bg-white/10 border-white/20'
                } backdrop-blur-2xl`}>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4">{item.icon}</div>
                  
                  {/* Letter watermark */}
                  <div className="absolute top-4 right-4 text-6xl font-black text-white/5">
                    {item.letter}
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">{item.subtitle}</p>
                  
                  <AnimatePresence>
                    {selectedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        
                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-2">
                          {item.metrics.map((metric, i) => (
                            <div 
                              key={i} 
                              className="text-center p-2 rounded-lg bg-white/10 backdrop-blur"
                            >
                              <div className="text-xs font-bold text-white">{metric}</div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom gradient line */}
                  <motion.div 
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-b-2xl`}
                    animate={{ 
                      scaleX: hoveredIndex === index ? 1 : 0.3 
                    }}
                    style={{ originX: 0.5 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Central highlight card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="relative md:col-span-2 lg:col-span-1 xl:col-span-1 flex items-center justify-center"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl border border-white/30">
              <div className="text-center">
                <div className="text-5xl font-black bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
                  PUBLIXY
                </div>
                <p className="text-white/80 text-sm">
                  Red Premium de Publicidad
                </p>
                <p className="text-white/60 text-xs mt-2">
                  México • Enterprise • 2024
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12 text-gray-400 text-sm"
        >
          Click en las tarjetas para ver más detalles
        </motion.div>
      </div>
    </div>
  )
}