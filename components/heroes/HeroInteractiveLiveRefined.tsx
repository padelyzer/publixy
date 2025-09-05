'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function HeroInteractiveLiveRefined() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [liveViewers, setLiveViewers] = useState(2847)
  const isMobile = useIsMobile()

  // Simulate live viewer updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveViewers(prev => prev + Math.floor(Math.random() * 10) - 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const locations = [
    { id: 1, name: 'BBVA Angelópolis', viewers: '12,450', type: 'Bancario', trend: '+15%', status: 'hot' },
    { id: 2, name: 'Aeropuerto PBC', viewers: '45,200', type: 'Terminal', trend: '+28%', status: 'hot' },
    { id: 3, name: 'Paseo Destino', viewers: '28,300', type: 'Comercial', trend: '+8%', status: 'active' },
    { id: 4, name: 'Liverpool Puebla', viewers: '18,750', type: 'Retail', trend: '+12%', status: 'active' },
  ]

  return (
    <section className="relative min-h-[600px] md:min-h-screen overflow-hidden bg-black">
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        {/* Floating glass orbs effect - sutil como el header */}
        <div className="absolute top-0 -left-1/4 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/15 via-blue-600/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-1/4 w-[700px] h-[700px] bg-gradient-radial from-[#F5D757]/15 via-[#EFBD4A]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Main gradient animation - más sutil */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(100, 184, 207, 0.06) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(245, 215, 87, 0.06) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(123, 211, 226, 0.06) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(100, 184, 207, 0.06) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />
        
        {/* Floating orbs - Fixed positions for hydration */}
        {!isMobile && [
          { left: '10%', top: '20%', color: 'rgba(100, 184, 207, 0.15)' },
          { left: '70%', top: '15%', color: 'rgba(245, 215, 87, 0.15)' },
          { left: '85%', top: '60%', color: 'rgba(100, 184, 207, 0.15)' },
          { left: '25%', top: '75%', color: 'rgba(245, 215, 87, 0.15)' },
          { left: '50%', top: '45%', color: 'rgba(100, 184, 207, 0.15)' },
        ].map((orb, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full"
            style={{
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              left: orb.left,
              top: orb.top,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Mesh grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 
              `linear-gradient(cyan 1px, transparent 1px), 
               linear-gradient(90deg, cyan 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            transform: 'perspective(1000px) rotateX(60deg)',
            transformOrigin: 'center center',
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left Content - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Enhanced Title */}
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
                <motion.span 
                  className="block text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  La Red de Medios Premium
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="bg-gradient-to-r from-[#64B8CF] via-[#7BD3E2] to-[#F5D757] bg-clip-text text-transparent">
                    más Inteligente
                  </span>
                </motion.span>
                <motion.span 
                  className="block text-white text-xl md:text-3xl lg:text-5xl mt-2 md:mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  de Puebla con visión nacional
                </motion.span>
              </h1>

              <motion.p 
                className="text-sm md:text-xl text-gray-300 mb-6 md:mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Conectamos marcas con audiencias A/B/B+ en los momentos y lugares que importan,
                optimizando cada peso invertido con datos reales y verificables.
              </motion.p>



              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(100, 184, 207, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] text-white text-sm md:text-base font-bold rounded-xl overflow-hidden inline-block text-center"
                >
                  <span className="relative z-10">Empieza ahora</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#F5D757] to-[#EFBD4A]"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                
                <motion.a
                  href="#testimonials"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur border border-white/20 text-white text-sm md:text-base font-bold rounded-xl hover:bg-white/20 transition-colors inline-block text-center"
                >
                  Ver casos de éxito
                </motion.a>
              </div>
            </motion.div>

            {/* Right - Live Locations - Hidden on Mobile */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="mb-4 text-center lg:text-left">
                <span className="text-gray-400 text-sm">Ubicaciones en vivo</span>
                <div className="flex items-center justify-center lg:justify-start gap-2 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-white font-semibold">{liveViewers.toLocaleString()} personas viendo ahora</span>
                </div>
              </div>
                    {/* Live Locations Grid */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      {locations.map((location, index) => (
                        <motion.div
                          key={location.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          onHoverStart={() => setHoveredCard(location.id)}
                          onHoverEnd={() => setHoveredCard(null)}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="relative"
                        >
                          <div className={`p-6 backdrop-blur-xl rounded-xl border transition-all cursor-pointer ${
                            hoveredCard === location.id 
                              ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
                              : 'bg-white/5 border-white/10'
                          }`}>
                            {/* Status indicator */}
                            <div className="absolute top-3 right-3">
                              {location.status === 'hot' && (
                                <div className="px-2 py-1 bg-red-500/20 rounded-full">
                                  <span className="text-xs text-red-400 font-bold">🔥 HOT</span>
                                </div>
                              )}
                            </div>
                            
                            <div className="text-xs text-cyan-400 mb-2 font-semibold">{location.type}</div>
                            <div className="text-white font-bold mb-3">{location.name}</div>
                            
                            {/* Live viewers with animation */}
                            <div className="flex items-center gap-2 mb-2">
                              <motion.div 
                                className="w-2 h-2 bg-green-400 rounded-full"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                              <span className="text-green-400 text-sm font-bold">{location.viewers}</span>
                              <span className="text-green-400/70 text-xs">{location.trend}</span>
                            </div>
                            <div className="text-xs text-gray-500">vistas hoy</div>
                            
                            {/* Mini graph */}
                            <div className="mt-3 flex items-end space-x-1 h-8">
                              {[...Array(7)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="flex-1 bg-gradient-to-t from-cyan-500/50 to-cyan-500/20 rounded-t"
                                  initial={{ height: 0 }}
                                  animate={{ height: `${Math.random() * 100}%` }}
                                  transition={{ delay: i * 0.05, duration: 0.5 }}
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}