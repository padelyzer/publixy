'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Framework2025Refined = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const framework = [
    { 
      letter: 'P', 
      title: 'PRECISIÓN', 
      desc: 'Segmentación A/B/B+ con datos verificables',
      icon: '🎯',
      color: '#64B8CF',
      metric: '97%',
      metricLabel: 'Precisión de Audiencia'
    },
    { 
      letter: 'U', 
      title: 'UBICACIONES PREMIUM', 
      desc: 'Red exclusiva en puntos estratégicos',
      icon: '📍',
      color: '#7BD3E2',
      metric: '1,650+',
      metricLabel: 'Ubicaciones Estratégicas'
    },
    { 
      letter: 'B', 
      title: 'BASADO EN DATOS', 
      desc: 'Dashboard transparente con métricas en tiempo real',
      icon: '📊',
      color: '#64B8CF',
      metric: '2.1M',
      metricLabel: 'Impactos Mensuales'
    },
    { 
      letter: 'L', 
      title: 'LOCALIZACIÓN', 
      desc: 'Dominio total del mercado Puebla-CDMX',
      icon: '🗺️',
      color: '#7BD3E2',
      metric: '85%',
      metricLabel: 'Cobertura de Mercado'
    },
    { 
      letter: 'I', 
      title: 'IMPACTO MEDIBLE', 
      desc: '28% más efectivo que medios tradicionales',
      icon: '📈',
      color: '#EFBD4A',
      metric: '+28%',
      metricLabel: 'Mayor Efectividad'
    },
    { 
      letter: 'X', 
      title: 'EXPERIENCIA PREMIUM', 
      desc: 'Servicio personalizado y soporte garantizado',
      icon: '⭐',
      color: '#F5D757',
      metric: '24/7',
      metricLabel: 'Soporte Dedicado'
    },
    { 
      letter: 'Y', 
      title: 'YIELD OPTIMIZATION', 
      desc: 'Maximizamos cada peso de tu inversión',
      icon: '🚀',
      color: '#EFBD4A',
      metric: '3.2x',
      metricLabel: 'ROI Promedio'
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % framework.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [isAutoPlaying, framework.length])

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
      {/* Title Section */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#64B8CF] to-[#F5D757] bg-clip-text text-transparent">
            Framework P.U.B.L.I.X.Y
          </span>
        </h2>
        <p className="text-gray-400 text-lg">
          Nuestra metodología probada para maximizar tu inversión publicitaria
        </p>
      </motion.div>

      {/* Letters Display */}
      <div className="flex justify-center items-center gap-2 md:gap-4 mb-12">
        {framework.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => {
              setActiveIndex(index)
              setIsAutoPlaying(false)
            }}
            className={`relative cursor-pointer transition-all duration-300 ${
              activeIndex === index ? 'scale-110' : 'scale-100 opacity-60 hover:opacity-80'
            }`}
            whileHover={{ scale: activeIndex === index ? 1.1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`
                w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
                rounded-xl md:rounded-2xl
                flex items-center justify-center
                border-2 transition-all duration-300
                ${activeIndex === index 
                  ? 'border-white/40 bg-gradient-to-br from-white/10 to-white/5' 
                  : 'border-white/20 bg-white/5'
                }
              `}
              style={{
                boxShadow: activeIndex === index 
                  ? `0 0 30px ${item.color}20, inset 0 0 20px ${item.color}10`
                  : 'none'
              }}
            >
              <span 
                className={`
                  text-2xl md:text-3xl lg:text-4xl font-bold
                  transition-all duration-300
                  ${activeIndex === index ? 'text-white' : 'text-gray-400'}
                `}
                style={{
                  textShadow: activeIndex === index 
                    ? `0 0 20px ${item.color}60`
                    : 'none'
                }}
              >
                {item.letter}
              </span>
            </div>

            {/* Active indicator */}
            {activeIndex === index && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full"
                style={{ backgroundColor: item.color }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Active Content Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <div 
            className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-white/10"
            style={{
              background: `linear-gradient(135deg, ${framework[activeIndex].color}08 0%, transparent 50%)`,
            }}
          >
            {/* Icon and Title */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl"
                  style={{
                    background: `linear-gradient(135deg, ${framework[activeIndex].color}20, ${framework[activeIndex].color}10)`,
                    border: `2px solid ${framework[activeIndex].color}30`
                  }}
                >
                  {framework[activeIndex].icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {framework[activeIndex].title}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {framework[activeIndex].desc}
                  </p>
                </div>
              </div>

              {/* Metric Card */}
              <motion.div 
                className="hidden md:block"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <div 
                  className="px-6 py-4 rounded-xl border"
                  style={{
                    borderColor: `${framework[activeIndex].color}40`,
                    background: `linear-gradient(135deg, ${framework[activeIndex].color}10, transparent)`
                  }}
                >
                  <div 
                    className="text-3xl font-bold mb-1"
                    style={{ color: framework[activeIndex].color }}
                  >
                    {framework[activeIndex].metric}
                  </div>
                  <div className="text-xs text-gray-400">
                    {framework[activeIndex].metricLabel}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Progreso del Framework</span>
                <span className="text-sm text-gray-400">
                  {activeIndex + 1} / {framework.length}
                </span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: framework[activeIndex].color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${((activeIndex + 1) / framework.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {framework.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${activeIndex === index 
                      ? 'w-8' 
                      : 'bg-white/20 hover:bg-white/30'
                    }
                  `}
                  style={{
                    backgroundColor: activeIndex === index 
                      ? framework[index].color 
                      : undefined
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Play/Pause Button */}
      <div className="flex justify-center mt-6">
        <motion.button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg flex items-center gap-2 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isAutoPlaying ? (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Pausar</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Reproducir</span>
            </>
          )}
        </motion.button>
      </div>
    </div>
  )
}

export default Framework2025Refined