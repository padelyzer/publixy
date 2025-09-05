'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const frameworkData = [
  {
    letter: 'P',
    title: 'Precisión',
    subtitle: 'Targeting Inteligente',
    description: 'Segmentación avanzada basada en comportamiento, demografía y contexto para maximizar el impacto.',
    mediaType: 'Digital Billboard',
    color: 'from-publixy-teal to-publixy-teal-dark',
    metrics: { ctr: '3.2%', reach: '500K' }
  },
  {
    letter: 'U',
    title: 'Ubicación',
    subtitle: 'Puntos Estratégicos',
    description: 'Presencia en las zonas de mayor afluencia y valor comercial de México.',
    mediaType: 'Transit Display',
    color: 'from-publixy-gold to-publixy-yellow',
    metrics: { coverage: '95%', locations: '850+' }
  },
  {
    letter: 'B',
    title: 'Big Data',
    subtitle: 'Analytics en Tiempo Real',
    description: 'Dashboards interactivos con métricas detalladas y reportes automáticos.',
    mediaType: 'Mobile Ads',
    color: 'from-publixy-teal-dark to-publixy-teal',
    metrics: { impressions: '12M', engagement: '8.5%' }
  },
  {
    letter: 'L',
    title: 'Localización',
    subtitle: 'Cobertura Nacional',
    description: 'Red extendida en las principales ciudades y corredores comerciales.',
    mediaType: 'LED Screen',
    color: 'from-publixy-yellow to-publixy-gold',
    metrics: { cities: '32', states: '15' }
  },
  {
    letter: 'I',
    title: 'Impacto',
    subtitle: 'ROI Garantizado',
    description: 'Resultados medibles con retorno de inversión superior al promedio del mercado.',
    mediaType: 'Urban Display',
    color: 'from-publixy-teal to-publixy-gold',
    metrics: { roi: '+250%', conversion: '4.8%' }
  },
  {
    letter: 'X',
    title: 'eXperiencia',
    subtitle: 'Creatividad Premium',
    description: 'Contenido dinámico y adaptativo que conecta con tu audiencia.',
    mediaType: 'Interactive',
    color: 'from-publixy-gold to-publixy-teal',
    metrics: { recall: '73%', awareness: '+45%' }
  },
  {
    letter: 'Y',
    title: 'Yield',
    subtitle: 'Optimización Continua',
    description: 'Machine learning para mejorar el rendimiento de cada campaña.',
    mediaType: 'Programmatic',
    color: 'from-publixy-yellow to-publixy-teal-dark',
    metrics: { optimization: '24/7', performance: '+35%' }
  }
]

// Device mockup component
const DeviceMockup = ({ type, isActive, content }: { type: string, isActive: boolean, content: any }) => {
  const [adRotation, setAdRotation] = useState(0)

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setAdRotation((prev) => (prev + 1) % 3)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isActive])

  const mockups = {
    'Digital Billboard': (
      <div className="relative w-full h-full">
        {/* Billboard Frame */}
        <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-2">
          <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
            {/* Screen Content */}
            <motion.div
              key={adRotation}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className={`absolute inset-0 bg-gradient-to-br ${content.color} flex items-center justify-center`}
            >
              <div className="text-center p-4">
                <div className="text-4xl font-black text-white mb-2">{content.letter}</div>
                <div className="text-sm text-white/80">{content.title}</div>
              </div>
            </motion.div>
            {/* LED Grid Effect */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.5) 3px, rgba(0,0,0,0.5) 4px)',
            }} />
            {/* Live Indicator */}
            {isActive && (
              <motion.div
                className="absolute top-2 right-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">LIVE</div>
              </motion.div>
            )}
          </div>
        </div>
        {/* Stand */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b" />
      </div>
    ),
    'Mobile Ads': (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Phone Frame */}
        <div className="relative w-32 h-56 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-1">
          <div className="relative w-full h-full bg-black rounded-3xl overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-b-xl" />
            {/* Screen */}
            <div className={`absolute inset-0 bg-gradient-to-br ${content.color} flex items-center justify-center`}>
              <motion.div
                animate={isActive ? {
                  y: [0, -10, 0],
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="text-center p-2"
              >
                <div className="text-3xl font-black text-white mb-1">{content.letter}</div>
                <div className="text-xs text-white/80">{content.mediaType}</div>
              </motion.div>
            </div>
            {/* Home Bar */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>
    ),
    'LED Screen': (
      <div className="relative w-full h-full">
        <div className="relative w-full h-full bg-black rounded-lg overflow-hidden border-4 border-gray-800">
          <div className={`absolute inset-0 bg-gradient-to-br ${content.color}`}>
            {/* Animated Pattern */}
            <motion.div
              className="absolute inset-0"
              animate={isActive ? {
                backgroundPosition: ['0% 0%', '100% 100%'],
              } : {}}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`,
                backgroundSize: '100px 100px'
              }}
            />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-5xl font-black text-white mb-2">{content.letter}</div>
                <div className="text-sm text-white/90 font-semibold">{content.title}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    default: (
      <div className="relative w-full h-full">
        <div className={`relative w-full h-full bg-gradient-to-br ${content.color} rounded-xl flex items-center justify-center overflow-hidden`}>
          <motion.div
            animate={isActive ? {
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            } : {}}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
            className="text-center"
          >
            <div className="text-6xl font-black text-white mb-2">{content.letter}</div>
            <div className="text-sm text-white/80">{type}</div>
          </motion.div>
        </div>
      </div>
    )
  }

  return mockups[type as keyof typeof mockups] || mockups.default
}

export default function FrameworkAdvertising() {
  const [activeCard, setActiveCard] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % frameworkData.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-publixy-charcoal via-publixy-dark to-publixy-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `linear-gradient(#7BD3E2 1px, transparent 1px), linear-gradient(to right, #7BD3E2 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <span className="inline-block px-6 py-3 text-sm font-black tracking-wider text-publixy-charcoal uppercase bg-gradient-to-r from-publixy-gold to-publixy-yellow rounded-full">
              Metodología Publicitaria
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-4"
          >
            Framework{' '}
            <span className="bg-gradient-to-r from-publixy-teal via-publixy-gold to-publixy-yellow bg-clip-text text-transparent">
              P.U.B.L.I.X.Y
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            7 pilares que transforman tu inversión publicitaria en resultados medibles
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {frameworkData.map((item, index) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group cursor-pointer ${
                index === activeCard ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              onMouseEnter={() => setActiveCard(index)}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative h-[400px] rounded-2xl overflow-hidden border transition-all duration-500 ${
                  index === activeCard 
                    ? 'border-publixy-gold/50 shadow-2xl shadow-publixy-gold/20' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-publixy-dark/50 to-black/50 backdrop-blur-sm" />
                
                {/* Media Display */}
                <div className="absolute inset-0 p-6">
                  <div className="h-48 mb-4">
                    <DeviceMockup 
                      type={item.mediaType} 
                      isActive={index === activeCard}
                      content={item}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      <span className={`inline-block w-8 h-8 rounded bg-gradient-to-br ${item.color} text-center leading-8 text-white font-black mr-2`}>
                        {item.letter}
                      </span>
                      {item.title}
                    </h3>
                    <p className="text-publixy-gold text-sm font-semibold mb-2">{item.subtitle}</p>
                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                    
                    {/* Metrics */}
                    {index === activeCard && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-2 gap-2"
                      >
                        {Object.entries(item.metrics).map(([key, value]) => (
                          <div key={key} className="bg-white/5 rounded-lg p-2">
                            <div className="text-lg font-bold text-publixy-yellow">{value}</div>
                            <div className="text-xs text-gray-500 capitalize">{key}</div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Active Indicator */}
                {index === activeCard && (
                  <motion.div
                    className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-publixy-teal via-publixy-gold to-publixy-yellow"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 4 }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {frameworkData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeCard 
                  ? 'w-8 bg-gradient-to-r from-publixy-gold to-publixy-yellow' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}