'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, PanInfo } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const FrameworkAppleGlassEnhanced = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const isMobile = useIsMobile()
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const framework = [
    { 
      letter: 'P', 
      title: 'Precisión de Audiencia',
      subtitle: 'Segmentación A/B/B+ verificada',
      desc: 'Alcanzamos exactamente a tu audiencia objetivo con datos demográficos y de comportamiento verificables.',
      stats: [
        { label: 'Precisión', value: '97%', trend: '+12%' },
        { label: 'Audiencia A/B', value: '83%', trend: '+8%' },
        { label: 'CTR Promedio', value: '2.3%', trend: '+28%' }
      ],
      color: 'rgba(0, 212, 255, 0.8)', // Cyan eléctrico
      examples: ['Profesionales 25-45', 'NSE A/B/B+', 'Decision Makers']
    },
    { 
      letter: 'U', 
      title: 'Ubicaciones Premium',
      subtitle: '1,650+ puntos estratégicos',
      desc: 'Red exclusiva en BBVA, aeropuertos, restaurantes AAA y centros comerciales premium.',
      stats: [
        { label: 'BBVA Sucursales', value: '1,650', trend: 'Nacional' },
        { label: 'Restaurantes AAA', value: '120+', trend: 'Premium' },
        { label: 'Aeropuerto PBC', value: '280K', trend: 'Impactos/mes' }
      ],
      color: 'rgba(0, 255, 136, 0.8)', // Verde neón
      examples: ['Paseo Destino', 'BBVA Torre', 'Aeropuerto Internacional']
    },
    { 
      letter: 'B', 
      title: 'Basado en Datos Reales',
      subtitle: 'Dashboard en tiempo real',
      desc: 'Métricas transparentes y verificables. Cada decisión respaldada por información en tiempo real.',
      stats: [
        { label: 'Impactos/mes', value: '2.1M', trend: '+15%' },
        { label: 'Reportes Live', value: '24/7', trend: 'Real-time' },
        { label: 'KPIs Tracked', value: '15+', trend: 'Métricas' }
      ],
      color: 'rgba(255, 0, 128, 0.8)', // Magenta moderno
      examples: ['Dashboard interactivo', 'Reportes automáticos', 'Analytics avanzado']
    },
    { 
      letter: 'L', 
      title: 'Localización Estratégica',
      subtitle: 'Puebla + CDMX',
      desc: 'Dominio total del corredor Puebla-CDMX con expansión controlada y presencia en puntos clave.',
      stats: [
        { label: 'Cobertura Puebla', value: '85%', trend: 'Zonas AAA' },
        { label: 'Expansión CDMX', value: '2025', trend: 'En proceso' },
        { label: 'Alcance Total', value: '5.2M', trend: 'Personas' }
      ],
      color: 'rgba(255, 215, 0, 0.8)', // Dorado brillante
      examples: ['Angelópolis', 'La Vista', 'Sonata', 'Lomas']
    },
    { 
      letter: 'I', 
      title: 'Impacto Medible',
      subtitle: '28% más efectivo',
      desc: 'Resultados comprobados: tu inversión rinde 28% más que en medios tradicionales.',
      stats: [
        { label: 'vs. Tradicional', value: '+28%', trend: 'Efectividad' },
        { label: 'Brand Recall', value: '67%', trend: '+34%' },
        { label: 'Conversión', value: '4.2%', trend: '+45%' }
      ],
      color: 'rgba(139, 0, 255, 0.8)', // Púrpura profundo
      examples: ['Cases de éxito', 'ROI garantizado', 'Métricas de impacto']
    },
    { 
      letter: 'X', 
      title: 'eXperiencia Premium',
      subtitle: 'Account management dedicado',
      desc: 'Servicio personalizado con ejecutivo dedicado, soporte 24/7 y optimización continua.',
      stats: [
        { label: 'Soporte', value: '24/7', trend: 'Dedicado' },
        { label: 'SLA Response', value: '<2hrs', trend: 'Garantizado' },
        { label: 'Satisfacción', value: '98%', trend: 'NPS: 72' }
      ],
      color: 'rgba(255, 107, 0, 0.8)', // Naranja energético
      examples: ['Ejecutivo dedicado', 'Reportes personalizados', 'Consultoría incluida']
    },
    { 
      letter: 'Y', 
      title: 'Yield Optimization',
      subtitle: 'ROI promedio 3.2x',
      desc: 'Maximizamos cada peso invertido con optimización continua basada en performance real.',
      stats: [
        { label: 'ROI Promedio', value: '3.2x', trend: '+18%' },
        { label: 'Optimización', value: 'Diaria', trend: 'AI-powered' },
        { label: 'Ahorro vs otros', value: '35%', trend: 'Costo/impacto' }
      ],
      color: 'rgba(0, 255, 212, 0.8)', // Turquesa vibrante
      examples: ['A/B Testing', 'Smart scheduling', 'Budget optimization']
    }
  ]

  // Disabled auto-rotation for manual navigation
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setActiveIndex((prev) => (prev + 1) % framework.length)
  //   }, 6000)
  //   return () => clearInterval(timer)
  // }, [framework.length])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set((e.clientX - rect.left) / rect.width)
      mouseY.set((e.clientY - rect.top) / rect.height)
    }
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-7xl mx-auto px-6 py-12"
      onMouseMove={handleMouseMove}
    >
      {/* Static gradient background - no animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${framework[activeIndex].color.replace('0.8', '0.1')} 0%, transparent 50%),
                        radial-gradient(circle at 70% 50%, ${framework[activeIndex].color.replace('0.8', '0.05')} 0%, transparent 50%)`,
          }}
        />
      </div>


      {/* Main glass content panel with business value */}
      <div className="relative">
        {/* Navigation Arrows - Fixed positioning without transform conflicts */}
        <button
          onClick={() => setActiveIndex((prev) => (prev - 1 + framework.length) % framework.length)}
          className="absolute -left-10 z-20 group flex items-center justify-center hidden md:flex"
          style={{ top: 'calc(50% - 28px)' }}
        >
          <motion.div 
            className="relative w-14 h-14 flex items-center justify-center rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.05)',
            }}
            initial={{ opacity: 0.4, x: 0 }}
            whileHover={{ 
              opacity: 1,
              x: 8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.div>
        </button>
        
        <button
          onClick={() => setActiveIndex((prev) => (prev + 1) % framework.length)}
          className="absolute -right-10 z-20 group flex items-center justify-center hidden md:flex"
          style={{ top: 'calc(50% - 28px)' }}
        >
          <motion.div 
            className="relative w-14 h-14 flex items-center justify-center rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.05)',
            }}
            initial={{ opacity: 0.4, x: 0 }}
            whileHover={{ 
              opacity: 1,
              x: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(20px)' }}
            transition={{ duration: 0.5 }}
            className="relative"
            drag={isMobile ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info: PanInfo) => {
              const threshold = 50
              if (info.offset.x > threshold) {
                setActiveIndex((prev) => (prev - 1 + framework.length) % framework.length)
              } else if (info.offset.x < -threshold) {
                setActiveIndex((prev) => (prev + 1) % framework.length)
              }
            }}
        >
          <div 
            className="relative rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-10 overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(40px) saturate(200%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: `0 30px 60px ${framework[activeIndex].color}20, inset 0 0 40px rgba(255,255,255,0.03)`,
            }}
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                background: `radial-gradient(circle at ${springX.get() * 100}% ${springY.get() * 100}%, ${framework[activeIndex].color}, transparent)`,
              }}
            />

            {/* Content Grid */}
            <div className="relative grid lg:grid-cols-2 gap-8">
              {/* Left: Main Info */}
              <div>
                <motion.div
                  animate={{ rotateY: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block mb-4"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${framework[activeIndex].color}, transparent)`,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    {framework[activeIndex].letter}
                  </div>
                </motion.div>

                <h2 className="text-3xl lg:text-4xl font-thin text-white mb-2">
                  {framework[activeIndex].title}
                </h2>
                
                <p className="text-xl text-white/60 mb-4">
                  {framework[activeIndex].subtitle}
                </p>

                <p className="text-white/40 mb-6 leading-relaxed">
                  {framework[activeIndex].desc}
                </p>

                {/* Examples */}
                <div className="flex flex-wrap gap-2">
                  {framework[activeIndex].examples.map((example, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 rounded-lg text-sm"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'rgba(255, 255, 255, 0.6)',
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {example}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Right: Metrics */}
              <div className="grid gap-4">
                {framework[activeIndex].stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    className="relative"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div
                      className="p-4 rounded-xl relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
                        backdropFilter: 'blur(40px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.05), 0 10px 40px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      {/* Glass reflection effect */}
                      <div 
                        className="absolute inset-0 opacity-10"
                        style={{
                          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)',
                          pointerEvents: 'none'
                        }}
                      />
                      <div className="flex justify-between items-start relative z-10">
                        <div>
                          <div className="text-2xl font-bold text-white mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm text-white/40">
                            {stat.label}
                          </div>
                        </div>
                        <motion.div
                          className="px-2 py-1 rounded-lg text-xs font-medium"
                          style={{
                            background: `${framework[activeIndex].color}30`,
                            color: 'white',
                            border: `1px solid ${framework[activeIndex].color}50`,
                          }}
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {stat.trend}
                        </motion.div>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="mt-3 h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${framework[activeIndex].color}, transparent)`,
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: '70%' }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

      {/* Glass navigation dots with progress */}
      <div className="flex justify-center items-center gap-3 mt-8">
        {/* Current indicator aligned with dots */}
        <div className="text-white/40 text-sm mr-4">
          {activeIndex + 1} / {framework.length}
        </div>
        {framework.map((item, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="relative p-2"
            whileHover={{ scale: 1.2 }}
          >
            <div
              className={`
                h-2 rounded-full transition-all duration-500
                ${activeIndex === index ? 'w-12' : 'w-2'}
              `}
              style={{
                background: activeIndex === index 
                  ? item.color
                  : 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            />
          </motion.button>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.a
          href="#contact"
          className="inline-block px-6 py-3 rounded-xl font-medium text-white cursor-pointer"
          style={{
            background: 'rgba(100, 184, 207, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(100, 184, 207, 0.3)',
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 10px 30px rgba(100, 184, 207, 0.3)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          Desarrolla tu nueva estrategia
        </motion.a>
      </motion.div>
    </div>
  )
}

export default FrameworkAppleGlassEnhanced