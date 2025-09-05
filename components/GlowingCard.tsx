'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlowingCardProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function GlowingCard({ children, delay = 0, className = '' }: GlowingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={`relative group ${className}`}
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-publixy-turquoise to-publixy-blue rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition duration-500" />
      
      {/* Glass morphism card */}
      <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  )
}