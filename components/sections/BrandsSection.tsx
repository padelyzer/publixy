'use client'

import { motion } from 'framer-motion'

export default function BrandsSection() {
  // Mock de logos usando emojis/íconos como placeholder
  const brands = [
    { name: 'BBVA Bancomer', icon: '🏦', color: 'from-blue-400 to-blue-600' },
    { name: 'Liverpool', icon: '🛍️', color: 'from-pink-400 to-purple-600' },
    { name: 'Volkswagen', icon: '🚗', color: 'from-gray-400 to-gray-600' },
    { name: 'Audi', icon: '🏎️', color: 'from-red-400 to-red-600' },
    { name: 'Cinépolis', icon: '🎬', color: 'from-blue-400 to-indigo-600' },
    { name: 'Starbucks', icon: '☕', color: 'from-green-400 to-green-600' },
    { name: 'Nike', icon: '👟', color: 'from-orange-400 to-red-600' },
    { name: 'Telcel', icon: '📱', color: 'from-blue-400 to-cyan-600' },
    { name: 'Samsung', icon: '📺', color: 'from-blue-400 to-blue-600' },
    { name: 'Coca-Cola', icon: '🥤', color: 'from-red-400 to-red-600' },
    { name: 'BMW', icon: '🏁', color: 'from-blue-400 to-gray-600' },
    { name: 'Apple', icon: '🍎', color: 'from-gray-400 to-gray-600' },
  ]

  return (
    <section className="-mt-8 pb-4 relative overflow-hidden bg-black">
      {/* Fondo animado similar al hero */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(100, 184, 207, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(245, 215, 87, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(123, 211, 226, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(100, 184, 207, 0.08) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Brands Carousel con logos */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="flex space-x-6"
              animate={{ x: [0, -2400] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {/* Primera set de marcas */}
              {[...brands, ...brands].map((brand, i) => (
                <motion.div
                  key={i}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div
                    className="w-40 h-20 flex items-center justify-center backdrop-blur-sm rounded-lg border hover:border-cyan-500/30 transition-all cursor-pointer relative overflow-hidden"
                    style={{
                      background: 'rgba(255, 255, 255, 0.01)',
                      borderColor: 'rgba(255, 255, 255, 0.08)',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {/* Gradiente de fondo sutil */}
                    <div 
                      className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${brand.color}`}
                    />
                    
                    {/* Logo/Icon */}
                    <div className="relative z-10">
                      <motion.div
                        className="text-3xl opacity-40 group-hover:opacity-70 transition-opacity"
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {brand.icon}
                      </motion.div>
                    </div>

                    {/* Efecto de brillo al hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Segunda fila de marcas (opcional, moviéndose en dirección opuesta) */}
        <div className="relative mt-6">
          <motion.div 
            className="flex overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div 
              className="flex space-x-6"
              animate={{ x: [-2400, 0] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {/* Segunda set de marcas */}
              {[...brands.slice(6), ...brands.slice(0, 6), ...brands.slice(6), ...brands.slice(0, 6)].map((brand, i) => (
                <motion.div
                  key={i}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div
                    className="w-40 h-20 flex items-center justify-center backdrop-blur-sm rounded-lg border hover:border-cyan-500/30 transition-all cursor-pointer relative overflow-hidden"
                    style={{
                      background: 'rgba(255, 255, 255, 0.01)',
                      borderColor: 'rgba(255, 255, 255, 0.08)',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {/* Gradiente de fondo sutil */}
                    <div 
                      className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${brand.color}`}
                    />
                    
                    {/* Logo/Icon */}
                    <div className="relative z-10">
                      <motion.div
                        className="text-3xl opacity-40 group-hover:opacity-70 transition-opacity"
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {brand.icon}
                      </motion.div>
                    </div>

                    {/* Efecto de brillo al hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Texto sutil debajo de los logos */}
        <motion.div 
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-500 text-xs mb-8">
            Confianza que se traduce en resultados - Más de 150 marcas
          </p>
          
          {/* Línea divisora sutil */}
          <motion.div 
            className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gray-700 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.div>

      </div>
    </section>
  )
}