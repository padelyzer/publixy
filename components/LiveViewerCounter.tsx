'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LiveViewerCounter() {
  const [viewerCount, setViewerCount] = useState(1247)
  const [secondsElapsed, setSecondsElapsed] = useState(5)
  const [isVisible, setIsVisible] = useState(false)
  const [location, setLocation] = useState('Puebla')

  // Ubicaciones aleatorias para hacer más real
  const locations = ['Puebla', 'CDMX', 'Angelópolis', 'Cholula', 'Lomas', 'La Vista']
  
  useEffect(() => {
    // Show after 2 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    // Update viewer count every 5 seconds
    const interval = setInterval(() => {
      setSecondsElapsed(prev => {
        const newSeconds = prev === 30 ? 5 : prev + 5
        
        // Update viewer count based on seconds
        const baseViewers = 1247
        const viewersPerSecond = 42 // Aproximadamente 42 personas por segundo
        const newCount = baseViewers + (newSeconds * viewersPerSecond)
        setViewerCount(newCount)
        
        // Change location occasionally
        if (Math.random() > 0.7) {
          setLocation(locations[Math.floor(Math.random() * locations.length)])
        }
        
        return newSeconds
      })
    }, 5000)

    return () => {
      clearTimeout(showTimer)
      clearInterval(interval)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 20, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl p-5 shadow-2xl shadow-cyan-500/20">
            {/* Live indicator */}
            <div className="absolute top-3 right-3 flex items-center space-x-1">
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-red-500 rounded-full shadow-lg shadow-red-500/50"
              />
              <span className="text-[10px] text-red-500 font-bold">EN VIVO</span>
            </div>

            {/* Main counter */}
            <div className="mb-3">
              <motion.div
                key={viewerCount}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              >
                {viewerCount.toLocaleString()}
              </motion.div>
              <div className="text-white font-medium mt-1">
                personas ya habrían visto tu anuncio
              </div>
            </div>

            {/* Time indicator */}
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-gray-400">
                En solo <span className="text-cyan-400 font-bold">{secondsElapsed} segundos</span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-lg"
              >
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </motion.div>
            </div>

            {/* Location tag */}
            <div className="flex items-center space-x-2 text-xs">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </motion.div>
              <span className="text-gray-400">
                Alcance actual: <span className="text-white font-medium">{location}</span>
              </span>
            </div>

            {/* Visual metrics bars */}
            <div className="mt-4 space-y-2">
              <div className="relative">
                <div className="text-xs text-gray-400 mb-1">Impacto en tiempo real</div>
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${Math.min((secondsElapsed / 30) * 100, 100)}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </div>

            {/* Pulsing glow effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl"
              animate={{ 
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Update indicator */}
            <motion.div
              key={secondsElapsed}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-2 left-1/2 transform -translate-x-1/2"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[10px] px-2 py-1 rounded-full font-bold">
                ACTUALIZADO
              </div>
            </motion.div>
          </div>

          {/* Additional floating metrics */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-3 grid grid-cols-3 gap-2"
          >
            {[
              { label: 'CTR', value: '8.7%', trend: '+2.3%' },
              { label: 'Alcance', value: '42K', trend: '+15%' },
              { label: 'ROI', value: '340%', trend: '+45%' }
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                whileHover={{ scale: 1.05 }}
                className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg p-2 text-center"
              >
                <div className="text-[10px] text-gray-400">{metric.label}</div>
                <div className="text-sm font-bold text-white">{metric.value}</div>
                <div className="text-[9px] text-green-400">{metric.trend}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}