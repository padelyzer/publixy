'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'

const navItems = [
  { href: '#framework', label: 'Metodología', icon: '◆' },
  { href: '#locations', label: 'Ubicaciones', icon: '◉' },
  { href: '#metrics', label: 'Métricas', icon: '◈' },
  { href: '#contact', label: 'Contactar', icon: '◊', primary: true }
]

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [currentGradient, setCurrentGradient] = useState(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const gradients = [
    'from-cyan-400 to-blue-500',
    'from-purple-400 to-pink-500',
    'from-blue-400 to-purple-600',
    'from-green-400 to-teal-600'
  ]

  const neonColors = ['#00D4FF', '#FF00FF', '#4040FF', '#00FF88']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = ['framework', 'locations', 'metrics', 'contact']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-6">
        <div className={`relative rounded-2xl transition-all duration-500 overflow-hidden ${
          scrolled 
            ? 'backdrop-blur-2xl border border-white/10' 
            : 'backdrop-blur-md'
        }`}>
          {/* Aurora gradient background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0"
              style={{
                background: scrolled 
                  ? `radial-gradient(circle at ${mouseX.get()}px ${mouseY.get()}px, ${neonColors[currentGradient]}10, transparent 50%)`
                  : 'transparent'
              }}
            />
          </div>

          {/* Glass effect background */}
          <div className={`absolute inset-0 ${
            scrolled ? 'bg-black/60' : 'bg-black/20'
          }`} />

          <div className="relative flex items-center justify-between px-6 py-4">
            {/* Logo with neon effect */}
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                {/* Neon glow */}
                <motion.div 
                  className="absolute inset-0 rounded-lg opacity-75"
                  style={{
                    background: `linear-gradient(135deg, ${neonColors[currentGradient]}, ${neonColors[(currentGradient + 1) % neonColors.length]})`,
                    filter: 'blur(10px)'
                  }}
                  animate={{
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Logo */}
                <div className="relative bg-black/90 backdrop-blur-xl rounded-lg px-3 py-2 border border-white/20">
                  <motion.span 
                    className={`text-2xl font-black bg-gradient-to-r ${gradients[currentGradient]} bg-clip-text text-transparent`}
                    animate={{
                      textShadow: [
                        `0 0 10px ${neonColors[currentGradient]}`,
                        `0 0 20px ${neonColors[currentGradient]}`,
                        `0 0 10px ${neonColors[currentGradient]}`,
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    PUBLIXY
                  </motion.span>
                </div>
              </div>
              <span className="text-xs text-gray-400 hidden md:inline-block font-mono">PREMIUM.2025</span>
            </motion.div>

            {/* Navigation Items with glassmorphism */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-5 py-2.5 rounded-full transition-all duration-300 ${
                    item.primary 
                      ? ''
                      : activeSection === item.href.slice(1)
                      ? 'backdrop-blur-xl bg-white/10 text-white border border-white/20'
                      : 'text-gray-300 hover:backdrop-blur-xl hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.primary ? (
                    <>
                      {/* Primary button with neon border */}
                      <div 
                        className="absolute -inset-0.5 rounded-full"
                        style={{
                          background: `linear-gradient(135deg, ${neonColors[currentGradient]}, ${neonColors[(currentGradient + 1) % neonColors.length]})`
                        }}
                      />
                      <div className="relative bg-black rounded-full px-5 py-2.5 hover:bg-transparent transition-colors">
                        <span className="flex items-center space-x-2 text-white font-semibold">
                          <span className="text-sm">{item.icon}</span>
                          <span>{item.label}</span>
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="relative flex items-center space-x-2">
                        <span className="text-sm">{item.icon}</span>
                        <span>{item.label}</span>
                      </span>
                      {activeSection === item.href.slice(1) && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: `linear-gradient(135deg, ${neonColors[currentGradient]}10, transparent)`,
                            borderColor: `${neonColors[currentGradient]}30`
                          }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        />
                      )}
                    </>
                  )}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button with glassmorphism */}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden relative w-10 h-10 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center"
            >
              {/* Neon glow for mobile button */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${neonColors[currentGradient]}20, transparent)`,
                  filter: 'blur(10px)'
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <div className="relative space-y-1">
                <motion.span 
                  className="block w-5 h-0.5"
                  style={{ background: neonColors[currentGradient] }}
                />
                <motion.span 
                  className="block w-3 h-0.5 ml-auto"
                  style={{ background: neonColors[currentGradient] }}
                />
                <motion.span 
                  className="block w-5 h-0.5"
                  style={{ background: neonColors[currentGradient] }}
                />
              </div>
            </motion.button>
          </div>

          {/* Bottom gradient line */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${neonColors[currentGradient]}, transparent)`
            }}
            animate={{
              opacity: scrolled ? [0.3, 0.6, 0.3] : 0
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.nav>
  )
}