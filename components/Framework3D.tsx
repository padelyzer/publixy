'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const frameworkData = [
  { 
    letter: 'P', 
    title: 'Precisión', 
    description: 'Segmentación A/B/B+ verificable con IA',
    color: 'from-blue-500 to-indigo-600',
    icon: '🎯'
  },
  { 
    letter: 'U', 
    title: 'Ubicaciones Premium', 
    description: 'Bancos, aeropuertos, restaurantes exclusivos',
    color: 'from-purple-500 to-pink-600',
    icon: '📍'
  },
  { 
    letter: 'B', 
    title: 'Basado en Datos', 
    description: 'Dashboard transparente en tiempo real',
    color: 'from-cyan-500 to-blue-600',
    icon: '📊'
  },
  { 
    letter: 'L', 
    title: 'Localización', 
    description: 'Dominio Puebla-CDMX con expansión nacional',
    color: 'from-green-500 to-teal-600',
    icon: '🗺️'
  },
  { 
    letter: 'I', 
    title: 'Impacto Medible', 
    description: 'ROI comprobable con métricas verificables',
    color: 'from-orange-500 to-red-600',
    icon: '📈'
  },
  { 
    letter: 'X', 
    title: 'Experiencia Premium', 
    description: 'Account management personalizado',
    color: 'from-pink-500 to-rose-600',
    icon: '✨'
  },
  { 
    letter: 'Y', 
    title: 'Yield Optimization', 
    description: 'Optimización continua con machine learning',
    color: 'from-yellow-500 to-orange-600',
    icon: '🚀'
  }
]

export default function Framework3D() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <div className="relative py-20">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-wider text-publixy-turquoise uppercase bg-publixy-turquoise/10 rounded-full border border-publixy-turquoise/30">
            Metodología Innovadora
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-publixy-blue via-publixy-turquoise to-publixy-blue bg-clip-text text-transparent">
              Framework P.U.B.L.I.X.Y
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            7 pilares tecnológicos que garantizan el éxito de tu campaña con inteligencia artificial y análisis predictivo
          </p>
        </motion.div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 max-w-7xl mx-auto perspective-1000">
          {frameworkData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 10,
                z: 50,
                transition: { duration: 0.3 }
              }}
              className="relative cursor-pointer transform-3d"
            >
              <div className={`relative h-40 rounded-3xl bg-gradient-to-br ${item.color} p-[2px] shadow-2xl`}>
                <div className="h-full rounded-3xl bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center relative overflow-hidden group">
                  {/* Animated background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20`} />
                  </div>
                  
                  {/* Icon */}
                  <motion.div
                    animate={{ 
                      y: hoveredIndex === index ? -5 : 0,
                      scale: hoveredIndex === index ? 1.2 : 1
                    }}
                    className="text-4xl mb-2"
                  >
                    {item.icon}
                  </motion.div>
                  
                  {/* Letter */}
                  <motion.div
                    className={`text-5xl font-black bg-gradient-to-br ${item.color} bg-clip-text text-transparent`}
                    animate={{ 
                      scale: hoveredIndex === index ? 1.2 : 1
                    }}
                  >
                    {item.letter}
                  </motion.div>
                  
                  {/* Title (shown on hover) */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 10
                    }}
                    className="absolute bottom-2 text-xs font-bold text-white text-center px-2"
                  >
                    {item.title}
                  </motion.div>
                </div>
              </div>
              
              {/* Expanded detail card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ 
                  opacity: selectedIndex === index ? 1 : 0,
                  scale: selectedIndex === index ? 1 : 0.8,
                  y: selectedIndex === index ? 0 : 20
                }}
                transition={{ duration: 0.3 }}
                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 p-6 rounded-2xl glass-effect z-50 ${
                  selectedIndex === index ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
              >
                <h4 className={`text-lg font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.title}
                </h4>
                <p className="text-sm text-gray-300">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Interactive hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12 text-sm text-gray-500"
        >
          ✨ Haz clic en cada elemento para explorar más detalles
        </motion.p>
      </div>
    </div>
  )
}