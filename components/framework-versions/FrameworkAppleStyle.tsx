'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FrameworkAppleStyle = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const framework = [
    { 
      letter: 'P', 
      title: 'Precisión', 
      subtitle: 'Segmentación inteligente',
      desc: 'Definimos exactamente quién, dónde y cuándo ver tu mensaje con datos de tráfico verificables.',
      metric: '97%',
      metricLabel: 'de precisión'
    },
    { 
      letter: 'U', 
      title: 'Ubicaciones', 
      subtitle: 'Premium y exclusivas',
      desc: 'Tu marca presente en los espacios más exclusivos: bancos, aeropuertos, restaurantes AAA.',
      metric: '1,650',
      metricLabel: 'ubicaciones'
    },
    { 
      letter: 'B', 
      title: 'Basado en datos', 
      subtitle: 'Transparencia total',
      desc: 'Dashboard en tiempo real con métricas verificables. Cada decisión respaldada por información.',
      metric: 'Live',
      metricLabel: 'dashboard'
    },
    { 
      letter: 'L', 
      title: 'Localización', 
      subtitle: 'Cobertura estratégica',
      desc: 'Dominio total del mercado Puebla con expansión a CDMX. Tu mensaje donde importa.',
      metric: '2',
      metricLabel: 'ciudades'
    },
    { 
      letter: 'I', 
      title: 'Impacto', 
      subtitle: 'Resultados medibles',
      desc: 'Comprobado: 28% más efectivo que medios tradicionales. ROI garantizado.',
      metric: '+28%',
      metricLabel: 'efectividad'
    },
    { 
      letter: 'X', 
      title: 'eXperiencia', 
      subtitle: 'Servicio premium',
      desc: 'Account management personalizado. Tu éxito es nuestro éxito.',
      metric: '24/7',
      metricLabel: 'soporte'
    },
    { 
      letter: 'Y', 
      title: 'Yield', 
      subtitle: 'Optimización continua',
      desc: 'Maximizamos cada peso invertido con optimización basada en performance real.',
      metric: '3.2x',
      metricLabel: 'ROI promedio'
    }
  ]

  useEffect(() => {
    if (isHovered) return
    
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % framework.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isHovered, framework.length])

  return (
    <div 
      className="relative w-full max-w-7xl mx-auto px-6 py-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      
      {/* Main container */}
      <div className="relative">
        {/* Letters - Apple style minimal */}
        <div className="flex justify-center items-center mb-20">
          <div className="flex items-center gap-1">
            {framework.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className={`
                    text-6xl md:text-7xl lg:text-8xl font-thin tracking-tight
                    transition-all duration-700 cursor-pointer
                    ${activeIndex === index 
                      ? 'text-white' 
                      : 'text-white/20 hover:text-white/40'
                    }
                  `}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0.2,
                    scale: activeIndex === index ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {item.letter}
                </motion.div>
                
                {/* Subtle underline on active */}
                {activeIndex === index && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content - Clean and minimal */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Title with gradient */}
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-thin mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                {framework[activeIndex].title}
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-white/60 mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {framework[activeIndex].subtitle}
            </motion.p>

            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-white/40 mb-12 leading-relaxed font-light max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {framework[activeIndex].desc}
            </motion.p>

            {/* Metric - Super minimal */}
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-thin text-white/80 mb-2">
                  {framework[activeIndex].metric}
                </div>
                <div className="text-sm text-white/30 uppercase tracking-wider">
                  {framework[activeIndex].metricLabel}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots - Apple style */}
        <motion.div 
          className="flex justify-center gap-2 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {framework.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="relative p-1 group"
            >
              <div
                className={`
                  w-1.5 h-1.5 rounded-full transition-all duration-500
                  ${activeIndex === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/20 hover:bg-white/40'
                  }
                `}
              />
            </button>
          ))}
        </motion.div>

        {/* Subtle navigation hints */}
        <motion.div 
          className="flex justify-between items-center mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.6 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => setActiveIndex((prev) => (prev - 1 + framework.length) % framework.length)}
            className="text-white/40 hover:text-white/60 transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <span className="text-white/20 text-sm">
            {activeIndex + 1} / {framework.length}
          </span>
          
          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % framework.length)}
            className="text-white/40 hover:text-white/60 transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default FrameworkAppleStyle