'use client'

import { motion, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'
import AnimatedCounter from './AnimatedCounter'
import ParticlesBackground from './ParticlesBackground'

export default function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [currentGradient, setCurrentGradient] = useState(0)

  const gradients = [
    'from-cyan-400 via-blue-500 to-purple-500',
    'from-purple-400 via-pink-500 to-red-500',
    'from-blue-400 via-indigo-500 to-purple-600',
    'from-green-400 via-emerald-500 to-teal-600'
  ]

  const neonColors = ['#00D4FF', '#FF00FF', '#4040FF', '#00FF88']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      <ParticlesBackground />
      
      {/* Aurora gradient background - 2025 Trend */}
      <div className="absolute inset-0">
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${gradients[currentGradient]} opacity-20`}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Aurora waves effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mouseX.get()}px ${mouseY.get()}px, ${neonColors[currentGradient]}15, transparent 50%)`,
          }}
        />
      </div>

      {/* Floating neon orbs - AI Aesthetic */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${neonColors[i]}20, transparent)`,
            filter: 'blur(60px)',
            left: `${10 + i * 30}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(${neonColors[currentGradient]}40 1px, transparent 1px), linear-gradient(90deg, ${neonColors[currentGradient]}40 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        {/* Badge with glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <span className="inline-block px-6 py-3 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-xl bg-white/10 rounded-full border border-white/20">
            <motion.span
              animate={{
                textShadow: [
                  `0 0 10px ${neonColors[currentGradient]}`,
                  `0 0 20px ${neonColors[currentGradient]}`,
                  `0 0 10px ${neonColors[currentGradient]}`,
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Network Premium 2025 • AI Powered
            </motion.span>
          </span>
        </motion.div>

        {/* Main title with neon glow */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
        >
          <span className="block text-white">La Red de Medios</span>
          <motion.span 
            className={`block bg-gradient-to-r ${gradients[currentGradient]} bg-clip-text text-transparent`}
            animate={{
              textShadow: [
                `0 0 30px ${neonColors[currentGradient]}`,
                `0 0 60px ${neonColors[currentGradient]}`,
                `0 0 30px ${neonColors[currentGradient]}`,
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Premium más Inteligente
          </motion.span>
          <span className="block text-white">de México</span>
        </motion.h1>

        {/* Subtitle with glassmorphism */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200 backdrop-blur-sm"
        >
          Conectamos marcas con audiencias A/B/B+ en ubicaciones exclusivas 
          donde realmente prestan atención
        </motion.p>

        {/* Metric Card with neon border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-12 inline-block"
        >
          <div className="rounded-3xl px-12 py-8 relative group cursor-pointer">
            {/* Neon glow background */}
            <motion.div 
              className="absolute -inset-1 rounded-3xl opacity-75"
              style={{
                background: `linear-gradient(135deg, ${neonColors[currentGradient]}, ${neonColors[(currentGradient + 1) % neonColors.length]})`,
                filter: 'blur(15px)'
              }}
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Glass card */}
            <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl px-12 py-8 border border-white/20">
              <div className="text-6xl md:text-7xl font-black mb-2">
                <span className={`bg-gradient-to-r ${gradients[currentGradient]} bg-clip-text text-transparent`}>
                  <AnimatedCounter end={28} suffix="%" />
                </span>
              </div>
              <p className="text-white text-lg font-medium">más efectivo que medios tradicionales</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons with 2025 style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden"
          >
            {/* Neon border animation */}
            <div 
              className="absolute -inset-1 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${neonColors[currentGradient]}, ${neonColors[(currentGradient + 1) % neonColors.length]})`,
              }}
            />
            
            {/* Button content */}
            <div className="relative bg-black rounded-2xl px-10 py-5 group-hover:bg-transparent transition-colors">
              <span className="relative z-10 flex items-center justify-center space-x-2 text-white">
                <span>Calcula el Impacto de tu Campaña</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </div>
          </motion.a>
          
          <motion.a
            href="#framework"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 backdrop-blur-xl bg-white/5 text-white font-bold text-lg rounded-2xl border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all relative overflow-hidden"
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(105deg, transparent 40%, ${neonColors[currentGradient]}20 50%, transparent 60%)`,
              }}
              animate={{
                x: ['-200%', '200%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            <span className="relative">Descubre el Framework</span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator with neon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{
              borderColor: `${neonColors[currentGradient]}40`,
              boxShadow: `0 0 15px ${neonColors[currentGradient]}30`
            }}
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 rounded-full mt-2"
              style={{
                background: neonColors[currentGradient],
                boxShadow: `0 0 10px ${neonColors[currentGradient]}`
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}