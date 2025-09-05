'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'

const FrameworkAppleSpatial = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Parallax transforms
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5])
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5])

  const framework = [
    { letter: 'P', title: 'Precisión', color: 'from-blue-500/20 to-cyan-500/20' },
    { letter: 'U', title: 'Ubicaciones', color: 'from-cyan-500/20 to-teal-500/20' },
    { letter: 'B', title: 'Basado en datos', color: 'from-teal-500/20 to-green-500/20' },
    { letter: 'L', title: 'Localización', color: 'from-green-500/20 to-emerald-500/20' },
    { letter: 'I', title: 'Impacto', color: 'from-yellow-500/20 to-orange-500/20' },
    { letter: 'X', title: 'eXperiencia', color: 'from-orange-500/20 to-red-500/20' },
    { letter: 'Y', title: 'Yield', color: 'from-red-500/20 to-pink-500/20' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % framework.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [framework.length])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <div 
      className="relative w-full max-w-7xl mx-auto px-6 py-16"
      onMouseMove={handleMouseMove}
      style={{ perspective: '2000px' }}
    >
      {/* Spatial background layers - Apple Vision Pro style */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${framework[activeIndex].color.split(' ')[1]} 0%, transparent 70%)`,
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d'
          }}
        />
      </div>

      {/* 3D Letter Stack with spatial depth */}
      <motion.div 
        className="relative flex justify-center items-center mb-20"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
      >
        {framework.map((item, index) => {
          const offset = index - activeIndex
          const isActive = index === activeIndex
          
          return (
            <motion.div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="absolute cursor-pointer"
              style={{
                transform: 'preserve-3d',
              }}
              animate={{
                x: offset * 80,
                z: isActive ? 200 : Math.abs(offset) * -100,
                scale: isActive ? 1.2 : 0.8 - Math.abs(offset) * 0.1,
                opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.3,
                rotateY: offset * -15,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
            >
              {/* Glass panel behind letter */}
              <motion.div
                className="absolute inset-0 -z-10"
                style={{
                  background: isActive 
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  width: '120px',
                  height: '120px',
                  transform: 'translate(-25%, -25%)',
                }}
              />
              
              <span className={`
                text-7xl font-thin
                ${isActive ? 'text-white' : 'text-white/40'}
                transition-all duration-500
                drop-shadow-2xl
              `}>
                {item.letter}
              </span>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Content with depth layers */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          exit={{ opacity: 0, z: 100 }}
          transition={{ duration: 0.5 }}
          className="text-center relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.h2 
            className="text-6xl font-thin mb-8 text-white"
            style={{
              transform: 'translateZ(50px)',
              textShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}
          >
            {framework[activeIndex].title}
          </motion.h2>

          {/* Floating glass cards */}
          <motion.div
            className="relative inline-block"
            style={{ transform: 'translateZ(25px)' }}
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <p className="text-white/60 text-lg">
                Metodología innovadora para publicidad exterior
              </p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Spatial navigation orbs */}
      <div className="flex justify-center gap-4 mt-16">
        {framework.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="relative"
            whileHover={{ scale: 1.2, z: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className={`
                w-3 h-3 rounded-full
                ${activeIndex === index 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/20'
                }
              `}
              animate={{
                scale: activeIndex === index ? [1, 1.5, 1] : 1,
              }}
              transition={{
                duration: 2,
                repeat: activeIndex === index ? Infinity : 0,
              }}
              style={{
                boxShadow: activeIndex === index 
                  ? '0 0 20px rgba(255,255,255,0.5)' 
                  : 'none'
              }}
            />
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default FrameworkAppleSpatial