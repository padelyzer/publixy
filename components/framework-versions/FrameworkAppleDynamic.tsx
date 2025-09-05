'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FrameworkAppleDynamic = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const framework = [
    { letter: 'P', title: 'Precisión', emoji: '🎯', accent: '#007AFF' },
    { letter: 'U', title: 'Ubicaciones', emoji: '📍', accent: '#34C759' },
    { letter: 'B', title: 'Basado en datos', emoji: '📊', accent: '#5856D6' },
    { letter: 'L', title: 'Localización', emoji: '🗺️', accent: '#FF9500' },
    { letter: 'I', title: 'Impacto', emoji: '📈', accent: '#FF3B30' },
    { letter: 'X', title: 'eXperiencia', emoji: '⭐', accent: '#FFCC00' },
    { letter: 'Y', title: 'Yield', emoji: '🚀', accent: '#AF52DE' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isExpanded) {
        setActiveIndex((prev) => (prev + 1) % framework.length)
      }
    }, 2500)
    return () => clearInterval(timer)
  }, [isExpanded, framework.length])

  return (
    <div className="relative w-full max-w-6xl mx-auto px-6 py-16">
      {/* Dynamic Island Container - Inspired by iPhone 14 Pro */}
      <motion.div
        className="relative mx-auto"
        animate={{
          width: isExpanded ? '100%' : '400px',
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
      >
        <motion.div
          className="relative bg-black rounded-full overflow-hidden mx-auto"
          animate={{
            height: isExpanded ? '500px' : '80px',
            borderRadius: isExpanded ? '40px' : '40px',
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          {/* Compact View - Pills */}
          {!isExpanded && (
            <motion.div 
              className="flex items-center justify-center h-full px-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center gap-6">
                {/* Active Letter Pill */}
                <motion.div
                  className="flex items-center gap-3 px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: `${framework[activeIndex].accent}20`,
                    border: `1px solid ${framework[activeIndex].accent}40`,
                  }}
                  layoutId="activePill"
                >
                  <span className="text-3xl">{framework[activeIndex].emoji}</span>
                  <span className="text-white text-xl font-medium">
                    {framework[activeIndex].letter}
                  </span>
                </motion.div>

                {/* Mini progress */}
                <div className="flex gap-1">
                  {framework.map((_, index) => (
                    <div
                      key={index}
                      className={`w-1 h-1 rounded-full transition-all ${
                        index === activeIndex ? 'bg-white w-3' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Expanded View */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.1 }}
              >
                {/* Grid of letters */}
                <div className="grid grid-cols-7 gap-2 mb-8">
                  {framework.map((item, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className={`
                          w-full aspect-square rounded-2xl
                          flex flex-col items-center justify-center
                          transition-all duration-300
                          ${activeIndex === index 
                            ? 'scale-110' 
                            : 'scale-100 opacity-60'
                          }
                        `}
                        style={{
                          backgroundColor: activeIndex === index 
                            ? `${item.accent}30`
                            : 'rgba(255,255,255,0.05)',
                          border: `2px solid ${activeIndex === index 
                            ? item.accent 
                            : 'rgba(255,255,255,0.1)'
                          }`,
                        }}
                      >
                        <span className="text-2xl mb-1">{item.emoji}</span>
                        <span className="text-white text-lg font-bold">{item.letter}</span>
                      </motion.div>
                    </motion.button>
                  ))}
                </div>

                {/* Active content */}
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <motion.div
                    className="inline-block mb-4"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="text-6xl">{framework[activeIndex].emoji}</span>
                  </motion.div>
                  
                  <h3 
                    className="text-3xl font-semibold mb-4"
                    style={{ color: framework[activeIndex].accent }}
                  >
                    {framework[activeIndex].title}
                  </h3>
                  
                  <p className="text-white/60 text-lg max-w-md mx-auto">
                    Tecnología avanzada para maximizar el impacto de tu publicidad exterior
                  </p>

                  {/* Activity Rings - Apple Watch style */}
                  <div className="flex justify-center gap-4 mt-8">
                    {[85, 92, 78].map((percent, i) => (
                      <div key={i} className="relative w-16 h-16">
                        <svg className="transform -rotate-90 w-16 h-16">
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="6"
                            fill="none"
                          />
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke={framework[activeIndex].accent}
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 28}`}
                            strokeDashoffset={`${2 * Math.PI * 28 * (1 - percent / 100)}`}
                            className="transition-all duration-1000"
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
                          {percent}%
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Tap hint */}
        <motion.p 
          className="text-center text-white/40 text-sm mt-6"
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          {isExpanded ? 'Toca para cerrar' : 'Toca para expandir'}
        </motion.p>
      </motion.div>
    </div>
  )
}

export default FrameworkAppleDynamic