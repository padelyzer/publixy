'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function LiveMetricsBar() {
  const [viewerCount, setViewerCount] = useState(2507)
  const [secondsElapsed, setSecondsElapsed] = useState(30)
  const [location, setLocation] = useState('CDMX')

  const locations = ['CDMX', 'Puebla', 'Angelópolis', 'Cholula', 'Lomas', 'La Vista']
  
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 50 + 20))
      
      if (Math.random() > 0.7) {
        setLocation(locations[Math.floor(Math.random() * locations.length)])
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 relative overflow-hidden bg-black">
      {/* Fondo animado con efecto glass sutil */}
      <div className="absolute inset-0">
        {/* Floating glass orbs */}
        <div className="absolute top-0 -left-1/3 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/10 via-blue-600/3 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 -right-1/3 w-[550px] h-[550px] bg-gradient-radial from-[#F5D757]/10 via-[#EFBD4A]/3 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }} />
        
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(100, 184, 207, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(245, 215, 87, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(123, 211, 226, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(100, 184, 207, 0.05) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* CTA Title - Moved to top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-6"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            <span className="text-white">¿Listo para ver</span>
            <span className="bg-gradient-to-r from-[#64B8CF] to-[#F5D757] bg-clip-text text-transparent"> números reales</span>?
          </h3>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Agenda una demo personalizada y descubre cómo Publixy puede transformar tu inversión publicitaria
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-8 overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(40px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.02), 0 20px 60px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left - Main Counter */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-red-500 rounded-full"
                />
                <span className="text-xs text-red-400 font-medium">EN VIVO</span>
                <div className="bg-white/[0.05] text-xs text-gray-500 px-2 py-0.5 rounded-full border border-white/[0.08]">
                  ACTUALIZADO
                </div>
              </div>
              
              <motion.div
                key={viewerCount}
                initial={{ scale: 0.95, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] bg-clip-text text-transparent mb-2"
              >
                {viewerCount.toLocaleString()}
              </motion.div>
              
              <div className="text-gray-400 text-sm">
                personas ya habrían visto tu anuncio
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-3 mt-3">
                <div className="text-xs text-gray-600">
                  En solo <span className="text-gray-400">{secondsElapsed} segundos</span>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Center - Location */}
            <div className="text-center">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-3"
              >
                <svg className="w-6 h-6 text-gray-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </motion.div>
              <div className="text-xs text-gray-600 mb-1">Alcance actual</div>
              <motion.div
                key={location}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg text-gray-300 font-medium"
              >
                {location}
              </motion.div>
              
              {/* Impact Bar */}
              <div className="mt-4">
                <div className="text-xs text-gray-600 mb-2">Impacto en tiempo real</div>
                <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2]"
                    initial={{ width: "0%" }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>

            {/* Right - Metrics */}
            <div className="flex justify-center lg:justify-end gap-4">
              {[
                { label: 'CTR', value: '8.7%', trend: '+2.3%' },
                { label: 'Alcance', value: '42K', trend: '+15%' },
                { label: 'ROI', value: '340%', trend: '+45%' }
              ].map((metric, i) => (
                <motion.div
                  key={metric.label}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/[0.01] backdrop-blur-sm border border-white/[0.08] rounded-lg p-3 text-center min-w-[80px]"
                >
                  <div className="text-xs text-gray-600 mb-1">{metric.label}</div>
                  <div className="text-lg font-semibold text-gray-300">{metric.value}</div>
                  <div className="text-xs text-green-500/70">{metric.trend}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats bar - Moved here */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-lg font-medium text-gray-400">+150</div>
            <div className="text-xs text-gray-600">Clientes activos</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-medium text-gray-400">24/7</div>
            <div className="text-xs text-gray-600">Soporte dedicado</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-medium text-gray-400">250%</div>
            <div className="text-xs text-gray-600">ROI promedio</div>
          </div>
        </motion.div>

        {/* CTA Section Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-8"
        >
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Agenda Demo del Dashboard
            </motion.a>
            <motion.a
              href="#pricing"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-white/[0.02] backdrop-blur-sm text-gray-400 text-sm font-medium rounded-full border border-white/[0.08] hover:bg-white/[0.03] hover:border-white/[0.12] transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Calcula tu ROI Potencial
            </motion.a>
          </div>

          <div className="flex items-center justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-1">
              <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs text-gray-600">Sin compromiso</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs text-gray-600">Demo personalizada</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs text-gray-600">Resultados garantizados</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}