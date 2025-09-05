'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const frameworkData = [
  { 
    letter: 'P', 
    title: 'Precisión de Audiencia', 
    subtitle: 'No más spray and pray',
    description: 'Tu mensaje llegará exactamente a quien buscas. Nuestro sistema de segmentación A/B/B+ identifica tu audiencia ideal con precisión quirúrgica.',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    metrics: { main: '97%', sub: 'Precisión', detail: 'Segmentación A/B/B+' },
    stats: ['280K impactos/mes', '12 segmentos', 'ML predictivo']
  },
  { 
    letter: 'U', 
    title: 'Ubicaciones Estratégicas', 
    subtitle: 'El lugar correcto importa',
    description: 'Donde tu audiencia toma decisiones. 1,650+ puntos premium en México: desde BBVA y Santander hasta aeropuertos internacionales.',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    metrics: { main: '1,650+', sub: 'Ubicaciones', detail: 'Nacional' },
    stats: ['14 bancos premium', '8 aeropuertos', '90% sucursales BBVA']
  },
  { 
    letter: 'B', 
    title: 'Big Data Intelligence', 
    subtitle: 'Datos que valen oro',
    description: 'Millones de micro-decisiones optimizadas por segundo. Sabemos qué funciona antes de que tu competencia se entere.',
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    metrics: { main: '10M', sub: 'Datos/día', detail: 'Real-time' },
    stats: ['< 100ms latencia', '99.9% uptime', 'Analytics 24/7']
  },
  { 
    letter: 'L', 
    title: 'Localización Premium', 
    subtitle: 'Cobertura que importa',
    description: 'México no es un mercado, son 32. Cubrimos las zonas de mayor poder adquisitivo en 14 estados estratégicos.',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    metrics: { main: '32', sub: 'Ciudades', detail: '14 estados' },
    stats: ['Polanco-Santa Fe', 'Monterrey zona dorada', 'Corredor Puebla-CDMX']
  },
  { 
    letter: 'I', 
    title: 'Impacto Medible', 
    subtitle: 'ROI transparente, sin excusas',
    description: 'Cada peso invertido es rastreable. Reportes en tiempo real que demuestran el impacto real en tu bottom line.',
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    metrics: { main: '3.5x', sub: 'ROI Promedio', detail: '90 días' },
    stats: ['100% tracking', 'Attribution modeling', 'KPIs personalizados']
  },
  { 
    letter: 'X', 
    title: 'eXperiencia White-Glove', 
    subtitle: 'Servicio de Fortune 500',
    description: 'Un equipo dedicado que conoce tu negocio como si fuera propio. Account managers con 10+ años en publicidad premium.',
    gradient: 'from-pink-500 via-rose-500 to-purple-500',
    metrics: { main: '92', sub: 'NPS Score', detail: 'Líder industria' },
    stats: ['< 2 hrs respuesta', 'Account manager dedicado', 'Consultoría estratégica']
  },
  { 
    letter: 'Y', 
    title: 'Yield Optimization', 
    subtitle: 'Tu campaña mejora sola',
    description: 'Machine Learning que aprende y optimiza 24/7. Mientras duermes, tu campaña se vuelve 15% más efectiva cada mes.',
    gradient: 'from-yellow-500 via-amber-500 to-orange-500',
    metrics: { main: '+15%', sub: 'Mejora/mes', detail: 'Automático' },
    stats: ['A/B testing continuo', 'Optimización dinámica', 'Predicción tendencias']
  }
]

export default function GlassmorphismStack() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const currentItem = frameworkData[selectedIndex]

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden px-8 py-12">
      {/* Dynamic background based on selection */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: `linear-gradient(135deg, ${currentItem.gradient.split(' ')[1]} 0%, transparent 70%)`
        }}
        transition={{ duration: 1 }}
      />
      
      {/* Floating orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${currentItem.gradient.split(' ')[1]}30, transparent)`,
            left: `${i * 30}%`,
            top: `${i * 20}%`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        {/* Left side - Stacked cards */}
        <div className="flex-1 relative h-[600px]">
          <AnimatePresence mode="popLayout">
            {frameworkData.map((item, index) => {
              const offset = index - selectedIndex
              const isActive = index === selectedIndex
              const isVisible = Math.abs(offset) <= 3
              
              if (!isVisible) return null

              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2 w-full max-w-md cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    x: '-50%',
                    y: `${-50 + offset * 15}%`,
                    scale: isActive ? 1 : 0.95 - Math.abs(offset) * 0.05,
                    opacity: isActive ? 1 : 0.7 - Math.abs(offset) * 0.2,
                    zIndex: 50 - Math.abs(offset),
                    rotateX: isActive ? 0 : offset * -5,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  onClick={() => setSelectedIndex(index)}
                  whileHover={!isActive ? { scale: 0.98 } : {}}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={`relative p-8 rounded-3xl backdrop-blur-2xl border transition-all ${
                    isActive 
                      ? 'bg-white/15 border-white/30 shadow-2xl' 
                      : 'bg-white/5 border-white/10'
                  }`}>
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-10`} />
                    
                    {/* Content */}
                    <div className="relative">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <motion.div 
                            className={`text-7xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2`}
                            animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {item.letter}
                          </motion.div>
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                          <p className="text-gray-300 text-sm mt-1">{item.subtitle}</p>
                        </div>
                        
                        {/* Metric badge */}
                        <div className={`text-right p-3 rounded-xl bg-gradient-to-r ${item.gradient} bg-opacity-20 backdrop-blur-xl`}>
                          <div className="text-2xl font-bold text-white">{item.metrics.main}</div>
                          <div className="text-xs text-gray-300">{item.metrics.sub}</div>
                        </div>
                      </div>

                      {/* Description - only visible when active */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            <p className="text-gray-200 mb-6 leading-relaxed">
                              {item.description}
                            </p>
                            
                            {/* Stats grid */}
                            <div className="grid grid-cols-3 gap-2">
                              {item.stats.map((stat, i) => (
                                <div key={i} className="text-center p-2 rounded-lg bg-white/5 backdrop-blur">
                                  <div className="text-xs text-white/80">{stat}</div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Right side - Detail panel */}
        <motion.div 
          className="lg:w-96"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="sticky top-8 p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20">
            <div className="mb-6">
              <h3 className="text-3xl font-black text-white mb-2">P.U.B.L.I.X.Y</h3>
              <p className="text-gray-300">Framework de Publicidad Premium</p>
            </div>

            {/* Progress indicators */}
            <div className="space-y-3 mb-8">
              {frameworkData.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedIndex(index)}
                >
                  <div className={`flex items-center p-3 rounded-xl cursor-pointer transition-all ${
                    index === selectedIndex 
                      ? 'bg-white/15' 
                      : 'bg-white/5 hover:bg-white/10'
                  }`}>
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white font-bold mr-3`}>
                      {item.letter}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">{item.title}</div>
                      <div className="text-xs text-gray-400">{item.metrics.detail}</div>
                    </div>
                  </div>
                  
                  {/* Active indicator */}
                  {index === selectedIndex && (
                    <motion.div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.gradient} rounded-full`}
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Action button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className={`w-full py-4 rounded-xl font-medium text-white bg-gradient-to-r ${currentItem.gradient} relative overflow-hidden`}
            >
              <span className="relative z-10">Ver Caso de Éxito</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
                style={{ opacity: 0.2 }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}