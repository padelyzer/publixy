'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'

const FrameworkAppleGlass = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const framework = [
    { letter: 'P', title: 'Precisión', desc: 'Targeting exacto', color: 'rgba(99, 102, 241, 0.6)' },
    { letter: 'U', title: 'Ubicaciones', desc: 'Espacios premium', color: 'rgba(34, 197, 94, 0.6)' },
    { letter: 'B', title: 'Basado en datos', desc: 'Métricas reales', color: 'rgba(59, 130, 246, 0.6)' },
    { letter: 'L', title: 'Localización', desc: 'Cobertura total', color: 'rgba(251, 146, 60, 0.6)' },
    { letter: 'I', title: 'Impacto', desc: '28% más efectivo', color: 'rgba(239, 68, 68, 0.6)' },
    { letter: 'X', title: 'eXperiencia', desc: 'Servicio premium', color: 'rgba(236, 72, 153, 0.6)' },
    { letter: 'Y', title: 'Yield', desc: '3.2x ROI', color: 'rgba(168, 85, 247, 0.6)' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % framework.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [framework.length])

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
      className="relative w-full max-w-7xl mx-auto px-6 py-16"
      onMouseMove={handleMouseMove}
    >
      {/* Floating glass panels background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-3xl"
            style={{
              width: '300px',
              height: '300px',
              background: `linear-gradient(135deg, ${framework[(activeIndex + i) % 7].color}, transparent)`,
              backdropFilter: 'blur(100px)',
              x: springX,
              y: springY,
            }}
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Glass letter cards */}
      <div className="relative flex justify-center items-center gap-4 mb-20">
        {framework.map((item, index) => {
          const distance = Math.abs(index - activeIndex)
          const isActive = index === activeIndex
          
          return (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="relative"
              animate={{
                scale: isActive ? 1.2 : 1 - distance * 0.1,
                y: isActive ? -20 : 0,
                opacity: distance > 2 ? 0.3 : 1,
              }}
              whileHover={{ y: -10 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
            >
              {/* Glass card */}
              <motion.div
                className="relative w-20 h-20 rounded-2xl overflow-hidden"
                style={{
                  background: isActive 
                    ? `linear-gradient(135deg, ${item.color}, transparent)`
                    : 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: isActive 
                    ? `0 20px 40px ${item.color}, inset 0 0 20px rgba(255,255,255,0.1)`
                    : 'inset 0 0 20px rgba(255,255,255,0.05)',
                }}
              >
                {/* Reflection effect */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                  }}
                />
                
                <div className="relative h-full flex items-center justify-center">
                  <span className={`
                    text-3xl font-thin
                    ${isActive ? 'text-white' : 'text-white/60'}
                  `}>
                    {item.letter}
                  </span>
                </div>
              </motion.div>
            </motion.button>
          )
        })}
      </div>

      {/* Main glass content panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div 
            className="relative rounded-3xl p-12 overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(40px) saturate(200%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: `0 30px 60px ${framework[activeIndex].color}40, inset 0 0 40px rgba(255,255,255,0.05)`,
            }}
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(circle at ${springX.get() * 100}% ${springY.get() * 100}%, ${framework[activeIndex].color}, transparent)`,
              }}
            />

            {/* Content */}
            <div className="relative text-center">
              <motion.div
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="inline-block mb-6"
              >
                <div 
                  className="w-24 h-24 mx-auto rounded-3xl flex items-center justify-center text-5xl font-thin text-white"
                  style={{
                    background: `linear-gradient(135deg, ${framework[activeIndex].color}, transparent)`,
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {framework[activeIndex].letter}
                </div>
              </motion.div>

              <h2 className="text-5xl font-thin text-white mb-3">
                {framework[activeIndex].title}
              </h2>
              
              <p className="text-2xl text-white/40 mb-8">
                {framework[activeIndex].desc}
              </p>

              {/* Glass metric cards */}
              <div className="flex justify-center gap-4">
                {['97%', '2.1M', '24/7'].map((metric, i) => (
                  <motion.div
                    key={i}
                    className="px-6 py-3 rounded-2xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  >
                    <span className="text-white/80 font-medium">{metric}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Glass navigation dots */}
      <div className="flex justify-center gap-3 mt-12">
        {framework.map((item, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="relative p-2"
            whileHover={{ scale: 1.2 }}
          >
            <div
              className={`
                w-2 h-2 rounded-full transition-all duration-500
                ${activeIndex === index ? 'w-8' : ''}
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
    </div>
  )
}

export default FrameworkAppleGlass