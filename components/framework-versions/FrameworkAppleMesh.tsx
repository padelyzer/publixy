'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FrameworkAppleMesh = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const framework = [
    { letter: 'P', title: 'Precisión', gradient: 'from-blue-400 via-blue-500 to-indigo-600' },
    { letter: 'U', title: 'Ubicaciones', gradient: 'from-cyan-400 via-cyan-500 to-teal-600' },
    { letter: 'B', title: 'Basado en datos', gradient: 'from-emerald-400 via-emerald-500 to-green-600' },
    { letter: 'L', title: 'Localización', gradient: 'from-lime-400 via-lime-500 to-green-600' },
    { letter: 'I', title: 'Impacto', gradient: 'from-amber-400 via-orange-500 to-red-600' },
    { letter: 'X', title: 'eXperiencia', gradient: 'from-pink-400 via-pink-500 to-rose-600' },
    { letter: 'Y', title: 'Yield', gradient: 'from-purple-400 via-purple-500 to-indigo-600' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % framework.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [framework.length])

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-16">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 20% 50%, ${framework[activeIndex].gradient.split(' ')[1]} 0%, transparent 50%),
               radial-gradient(circle at 80% 50%, ${framework[(activeIndex + 1) % 7].gradient.split(' ')[1]} 0%, transparent 50%),
               radial-gradient(circle at 50% 30%, ${framework[(activeIndex + 2) % 7].gradient.split(' ')[1]} 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 50%, ${framework[(activeIndex + 1) % 7].gradient.split(' ')[1]} 0%, transparent 50%),
               radial-gradient(circle at 20% 50%, ${framework[(activeIndex + 2) % 7].gradient.split(' ')[1]} 0%, transparent 50%),
               radial-gradient(circle at 50% 70%, ${framework[activeIndex].gradient.split(' ')[1]} 0%, transparent 50%)`,
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            opacity: 0.1,
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Letter Cards with Mesh Gradients */}
      <div className="relative grid grid-cols-7 gap-3 mb-16">
        {framework.map((item, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative aspect-square"
            whileHover={{ y: -10 }}
            animate={{
              scale: activeIndex === index ? 1.1 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            {/* Mesh gradient background */}
            <motion.div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient}`}
              animate={{
                opacity: activeIndex === index || hoveredIndex === index ? 0.9 : 0.3,
              }}
              style={{
                filter: 'blur(0.5px)',
              }}
            />
            
            {/* Glass overlay */}
            <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10" />
            
            {/* Letter */}
            <div className="relative h-full flex items-center justify-center">
              <span className={`
                text-4xl font-thin
                ${activeIndex === index ? 'text-white' : 'text-white/60'}
                transition-all duration-300
              `}>
                {item.letter}
              </span>
            </div>

            {/* Glow effect on active */}
            {activeIndex === index && (
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255,255,255,0.2)',
                    '0 0 40px rgba(255,255,255,0.4)',
                    '0 0 20px rgba(255,255,255,0.2)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Content Section with Mesh Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Main content card */}
          <div className="relative">
            {/* Mesh gradient background */}
            <div 
              className={`absolute inset-0 bg-gradient-to-br ${framework[activeIndex].gradient} opacity-10 rounded-3xl blur-3xl`}
            />
            
            {/* Glass card */}
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
              <div className="text-center">
                {/* Title with gradient text */}
                <motion.h2 
                  className={`text-6xl font-thin mb-6 bg-gradient-to-r ${framework[activeIndex].gradient} bg-clip-text text-transparent`}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  {framework[activeIndex].title}
                </motion.h2>
                
                <p className="text-white/60 text-xl mb-8 max-w-2xl mx-auto">
                  Metodología avanzada que combina tecnología y estrategia para maximizar tu inversión publicitaria
                </p>

                {/* Mesh pattern visualization */}
                <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="aspect-square rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.1,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicator with Mesh Style */}
      <div className="flex justify-center items-center gap-2 mt-12">
        {framework.map((item, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="relative"
            whileHover={{ scale: 1.2 }}
          >
            <div
              className={`
                h-1 transition-all duration-500
                ${activeIndex === index ? 'w-12' : 'w-1'}
                rounded-full
              `}
              style={{
                background: activeIndex === index 
                  ? `linear-gradient(90deg, ${item.gradient.replace(/from-|via-|to-/g, '').split(' ').join(', ')})`
                  : 'rgba(255,255,255,0.2)'
              }}
            />
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default FrameworkAppleMesh