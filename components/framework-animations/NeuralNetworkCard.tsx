'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface NeuralNetworkCardProps {
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  gradient: string
  isActive?: boolean
}

export default function NeuralNetworkCard({ title, subtitle, description, icon, gradient, isActive = false }: NeuralNetworkCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current || !isActive) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 320
    canvas.height = 380

    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = []
    const numNodes = 15

    // Initialize nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach(node => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Draw connections
        nodes.forEach(otherNode => {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + 
            Math.pow(node.y - otherNode.y, 2)
          )
          
          if (distance < 100) {
            ctx.strokeStyle = `rgba(6, 147, 227, ${0.2 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        })

        // Draw node
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 2)
        gradient.addColorStop(0, 'rgba(155, 81, 224, 0.8)')
        gradient.addColorStop(1, 'rgba(6, 147, 227, 0.2)')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw pulses along connections
      nodes.forEach((node, i) => {
        if (i % 3 === 0) {
          const pulse = (Date.now() / 1000) % 2
          if (pulse < 1 && i < nodes.length - 1) {
            const nextNode = nodes[i + 1]
            const x = node.x + (nextNode.x - node.x) * pulse
            const y = node.y + (nextNode.y - node.y) * pulse
            
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
            ctx.beginPath()
            ctx.arc(x, y, 2, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [isActive])

  return (
    <motion.div
      className="relative w-[320px] h-[380px] rounded-2xl overflow-hidden cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`} />
        
        {/* Canvas for neural network */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-50"
        />

        {/* Holographic effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(0deg, transparent, rgba(6,147,227,0.1), transparent)',
              'linear-gradient(180deg, transparent, rgba(155,81,224,0.1), transparent)',
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />

        {/* Scanning line effect */}
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-publixy-cyan to-transparent opacity-50"
          animate={{
            top: ['0%', '100%', '0%']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Card Content */}
      <div className="relative h-full p-6 backdrop-blur-md bg-black/50 border border-white/10 rounded-2xl">
        {/* Animated Icon with holographic effect */}
        <motion.div 
          className="w-16 h-16 rounded-xl bg-gradient-to-br from-publixy-cyan/10 to-publixy-purple/10 backdrop-blur-xl flex items-center justify-center mb-4 border border-white/20 relative overflow-hidden"
          animate={{
            borderColor: ['rgba(6,147,227,0.2)', 'rgba(155,81,224,0.2)', 'rgba(6,147,227,0.2)']
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        >
          {/* Holographic shimmer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          />
          <div className="text-white relative z-10">
            {icon}
          </div>
        </motion.div>

        {/* Text content */}
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-publixy-purple text-sm mb-3">{subtitle}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

        {/* Neural pulse indicators */}
        <div className="absolute bottom-4 left-6 right-6 flex justify-between">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-publixy-cyan rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}