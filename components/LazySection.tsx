'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface LazySectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function LazySection({ children, className = '', delay = 0 }: LazySectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ 
        once: true, 
        margin: "-100px",
        amount: 0.1
      }}
      transition={{ 
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1] // Ease out expo for smooth animation
      }}
      className={`${className} bg-transparent`}
      style={{ backgroundColor: 'transparent' }}
    >
      {children}
    </motion.div>
  )
}