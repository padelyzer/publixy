'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'

interface QuantumFieldCardProps {
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  gradient: string
  isActive?: boolean
}

export default function QuantumFieldCard({ title, subtitle, description, icon, gradient, isActive = false }: QuantumFieldCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useTransform(mouseY, [-150, 150], [5, -5])
  const rotateY = useTransform(mouseX, [-150, 150], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      className="relative w-[320px] h-[380px] rounded-2xl cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="relative w-full h-full rounded-2xl overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Quantum Field Background */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`} />
          
          {/* Quantum particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => {
              // Use deterministic values based on index
              const size = ((i * 7) % 3) + 1
              const duration = ((i * 13) % 20) + 10
              const delay = (i * 3) % 5
              const startX = ((i * 37) % 100)
              const startY = ((i * 53) % 100)
              const moveX = ((i * 29) % 200) - 100
              const moveY = ((i * 31) % 200) - 100
              const scaleValue = ((i * 11) % 10) / 10 + 0.5
              
              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${startX}%`,
                    top: `${startY}%`,
                    background: `radial-gradient(circle, rgba(6,147,227,${0.8 - i * 0.02}), transparent)`,
                    boxShadow: `0 0 ${size * 2}px rgba(6,147,227,0.5)`
                  }}
                  animate={{
                    x: [0, moveX, 0],
                    y: [0, moveY, 0],
                    scale: [1, scaleValue, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration,
                    delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )
            })}
          </div>

          {/* Energy waves */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute inset-0 rounded-full"
              style={{
                border: '1px solid',
                borderColor: i === 0 ? 'rgba(6,147,227,0.3)' : 'rgba(155,81,224,0.3)',
              }}
              animate={{
                scale: [0.8, 1.5, 0.8],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 4,
                delay: i * 1.3,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          ))}

          {/* 3D depth layers */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, transparent, rgba(0,0,0,0.3))',
              transform: 'translateZ(10px)'
            }}
          />
          
          <motion.div
            className="absolute inset-0"
            style={{
              background: isHovered 
                ? 'radial-gradient(circle at center, rgba(6,147,227,0.1), transparent)'
                : 'radial-gradient(circle at center, transparent, transparent)',
              transform: 'translateZ(20px)',
              transition: 'background 0.3s'
            }}
          />
        </div>

        {/* Card Content with 3D effect */}
        <motion.div 
          className="relative h-full p-6 backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl"
          style={{
            transform: 'translateZ(30px)'
          }}
        >
          {/* Animated Icon with quantum glow */}
          <motion.div 
            className="w-16 h-16 rounded-xl bg-gradient-to-br from-publixy-cyan/20 to-publixy-purple/20 backdrop-blur-xl flex items-center justify-center mb-4 border border-white/10 relative"
            animate={{
              boxShadow: isActive ? [
                '0 0 20px rgba(6,147,227,0.5)',
                '0 0 40px rgba(155,81,224,0.5)',
                '0 0 20px rgba(6,147,227,0.5)'
              ] : '0 0 10px rgba(255,255,255,0.1)'
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
            style={{
              transform: 'translateZ(40px)'
            }}
          >
            <div className="text-white">
              {icon}
            </div>
            
            {/* Quantum field around icon */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute top-0 left-1/2 w-1 h-1 bg-publixy-cyan rounded-full -translate-x-1/2 -translate-y-2" />
              <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-publixy-purple rounded-full -translate-x-1/2 translate-y-2" />
              <div className="absolute left-0 top-1/2 w-1 h-1 bg-publixy-cyan rounded-full -translate-y-1/2 -translate-x-2" />
              <div className="absolute right-0 top-1/2 w-1 h-1 bg-publixy-purple rounded-full -translate-y-1/2 translate-x-2" />
            </motion.div>
          </motion.div>

          {/* Text content with depth */}
          <div style={{ transform: 'translateZ(35px)' }}>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-publixy-cyan text-sm mb-3">{subtitle}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          </div>

          {/* Quantum energy bar */}
          <div className="absolute bottom-4 left-6 right-6 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-publixy-cyan to-publixy-purple"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                width: '50%',
                filter: 'blur(2px)',
                boxShadow: '0 0 10px rgba(6,147,227,0.8)'
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}