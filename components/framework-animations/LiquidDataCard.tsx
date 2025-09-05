'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LiquidDataCardProps {
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  gradient: string
  isActive?: boolean
}

export default function LiquidDataCard({ title, subtitle, description, icon, gradient, isActive = false }: LiquidDataCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    })
  }

  return (
    <motion.div
      className="relative w-[320px] h-[380px] rounded-2xl overflow-hidden cursor-pointer group"
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Liquid Background Animation */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`} />
        
        {/* Liquid blobs */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <filter id="liquid">
              <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="3" result="turbulence" />
              <feColorMatrix in="turbulence" mode="saturate" values="2" />
            </filter>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0693e3" stopOpacity="0.2">
                <animate attributeName="stop-color" values="#0693e3;#9b51e0;#0693e3" dur="8s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#9b51e0" stopOpacity="0.2">
                <animate attributeName="stop-color" values="#9b51e0;#0693e3;#9b51e0" dur="8s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          
          {/* Animated liquid shapes */}
          <circle 
            cx="30%" 
            cy="30%" 
            r="60"
            fill="url(#gradient1)"
            filter="url(#liquid)"
          >
            <animate attributeName="cx" values="30%;70%;30%" dur="15s" repeatCount="indefinite" />
            <animate attributeName="cy" values="30%;60%;30%" dur="20s" repeatCount="indefinite" />
            <animate attributeName="r" values="60;80;60" dur="10s" repeatCount="indefinite" />
          </circle>
          
          <circle 
            cx="70%" 
            cy="70%" 
            r="50"
            fill="url(#gradient1)"
            filter="url(#liquid)"
          >
            <animate attributeName="cx" values="70%;40%;70%" dur="18s" repeatCount="indefinite" />
            <animate attributeName="cy" values="70%;40%;70%" dur="15s" repeatCount="indefinite" />
            <animate attributeName="r" values="50;70;50" dur="12s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Data particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 5 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.1), transparent 40%)`
          }}
        />
      </div>

      {/* Card Content */}
      <div className="relative h-full p-6 backdrop-blur-sm bg-black/40 border border-white/10 rounded-2xl">
        {/* Animated Icon */}
        <motion.div 
          className="w-16 h-16 rounded-xl bg-gradient-to-br from-publixy-cyan/20 to-publixy-purple/20 backdrop-blur-xl flex items-center justify-center mb-4 border border-white/10"
          animate={{
            scale: isActive ? [1, 1.1, 1] : 1,
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          <div className="text-white">
            {icon}
          </div>
        </motion.div>

        {/* Text content */}
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-publixy-cyan text-sm mb-3">{subtitle}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-publixy-cyan to-publixy-purple opacity-50">
          <motion.div
            className="h-full bg-white/50"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: '50%',
              filter: 'blur(8px)'
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}