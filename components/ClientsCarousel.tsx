'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Simulated client logos - en producción estos serían logos reales
const clients = [
  { name: 'Coca-Cola', logo: '🥤', category: 'Bebidas', campaigns: 15 },
  { name: 'Nike', logo: '👟', category: 'Deportes', campaigns: 12 },
  { name: 'McDonald\'s', logo: '🍔', category: 'Comida', campaigns: 20 },
  { name: 'Apple', logo: '📱', category: 'Tecnología', campaigns: 8 },
  { name: 'Samsung', logo: '📺', category: 'Electrónicos', campaigns: 18 },
  { name: 'OXXO', logo: '🏪', category: 'Retail', campaigns: 25 },
  { name: 'Telcel', logo: '📡', category: 'Telecom', campaigns: 22 },
  { name: 'Bimbo', logo: '🍞', category: 'Alimentos', campaigns: 30 },
  { name: 'Liverpool', logo: '🏬', category: 'Retail', campaigns: 14 },
  { name: 'Bancomer', logo: '🏦', category: 'Financiero', campaigns: 10 },
  { name: 'Walmart', logo: '🛒', category: 'Retail', campaigns: 16 },
  { name: 'Pepsi', logo: '🥤', category: 'Bebidas', campaigns: 13 }
]

export default function ClientsCarousel() {
  const [activeClient, setActiveClient] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveClient((prev) => (prev + 1) % clients.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Duplicate clients for seamless scrolling
  const duplicatedClients = [...clients, ...clients]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-black via-publixy-dark to-publixy-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #7BD3E2 0px, transparent 10px, transparent 20px, #EFBD4A 30px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-3 text-sm font-black tracking-wider text-publixy-charcoal uppercase bg-gradient-to-r from-publixy-gold to-publixy-yellow rounded-full mb-6">
            Marcas de Confianza
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Casos de{' '}
            <span className="bg-gradient-to-r from-publixy-teal to-publixy-gold bg-clip-text text-transparent">
              Éxito
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Marcas líderes que confían en Publixy para maximizar su alcance e impacto
          </p>
        </motion.div>

        {/* Main Client Showcase */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-publixy-gold/30 transition-all duration-500">
            {/* Featured Client */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-6">
                <motion.div
                  key={activeClient}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="text-8xl"
                >
                  {clients[activeClient].logo}
                </motion.div>
                <div>
                  <h3 className="text-4xl font-black text-white mb-2">
                    {clients[activeClient].name}
                  </h3>
                  <p className="text-publixy-gold font-semibold text-lg">
                    {clients[activeClient].category}
                  </p>
                  <p className="text-gray-400">
                    {clients[activeClient].campaigns} campañas exitosas
                  </p>
                </div>
              </div>

              {/* ROI Badge */}
              <motion.div
                className="bg-gradient-to-r from-publixy-teal to-publixy-gold text-white px-6 py-3 rounded-2xl font-black text-xl"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(123,211,226,0.3)',
                    '0 0 40px rgba(239,189,74,0.3)',
                    '0 0 20px rgba(123,211,226,0.3)',
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              >
                +{220 + (activeClient * 37) % 180}% ROI
              </motion.div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-black text-publixy-teal mb-1">
                  {((activeClient * 23) % 60 + 50) / 10}M
                </div>
                <div className="text-sm text-gray-400">Impresiones</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-black text-publixy-gold mb-1">
                  {((activeClient * 17) % 30 + 25) / 10}%
                </div>
                <div className="text-sm text-gray-400">CTR</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-black text-publixy-yellow mb-1">
                  {(activeClient * 13) % 40 + 35}%
                </div>
                <div className="text-sm text-gray-400">Recall</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Infinite Scrolling Logo Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -50 * clients.length]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  className={`flex-shrink-0 w-32 h-32 flex flex-col items-center justify-center rounded-2xl transition-all duration-500 cursor-pointer ${
                    index % clients.length === activeClient
                      ? 'bg-gradient-to-br from-publixy-gold/20 to-publixy-teal/20 border-2 border-publixy-gold/50 scale-110'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => setActiveClient(index % clients.length)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-4xl mb-2">{client.logo}</div>
                  <div className="text-xs text-white font-semibold text-center px-2">
                    {client.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {client.campaigns} 📊
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-publixy-charcoal to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-publixy-charcoal to-transparent pointer-events-none" />
        </div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {[...new Set(clients.map(c => c.category))].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 hover:border-publixy-teal/50 hover:text-publixy-teal transition-all"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl font-black text-publixy-teal mb-2">200+</div>
            <div className="text-gray-400">Marcas Activas</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="text-4xl font-black text-publixy-gold mb-2">500+</div>
            <div className="text-gray-400">Campañas Exitosas</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl font-black text-publixy-yellow mb-2">97%</div>
            <div className="text-gray-400">Satisfacción</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="text-4xl font-black text-publixy-teal mb-2">5</div>
            <div className="text-gray-400">Años Experiencia</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}