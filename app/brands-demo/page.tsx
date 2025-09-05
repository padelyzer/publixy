'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BrandsDemoPage() {
  const [selectedVariant, setSelectedVariant] = useState(1)

  // Datos de marcas
  const brands = [
    'BBVA Bancomer', 'Liverpool', 'Volkswagen', 'Audi', 'Cinépolis',
    'Starbucks', 'Nike', 'Telcel', 'Samsung', 'Coca-Cola',
    'BMW', 'Apple'
  ]

  const stats = [
    { value: '150+', label: 'Marcas activas', color: 'from-cyan-400 to-blue-500' },
    { value: '95%', label: 'Tasa de renovación', color: 'from-[#7BD3E2] to-[#64B8CF]' },
    { value: '4.8/5', label: 'Satisfacción del cliente', color: 'from-yellow-400 to-orange-500' }
  ]

  const renderVariant = () => {
    switch(selectedVariant) {
      case 1:
        return <Variant1 brands={brands} stats={stats} />
      case 2:
        return <Variant2 brands={brands} stats={stats} />
      case 3:
        return <Variant3 brands={brands} stats={stats} />
      case 4:
        return <Variant4 brands={brands} stats={stats} />
      case 5:
        return <Variant5 brands={brands} stats={stats} />
      default:
        return <Variant1 brands={brands} stats={stats} />
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Selector de variantes */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 p-2 bg-black/50 backdrop-blur-xl rounded-full border border-cyan-500/30">
        {[1, 2, 3, 4, 5].map(num => (
          <button
            key={num}
            onClick={() => setSelectedVariant(num)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedVariant === num
                ? 'bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Opción {num}
          </button>
        ))}
      </div>

      {/* Render de la variante seleccionada */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedVariant}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderVariant()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// Variante 1: Carousel Premium con efecto glass
function Variant1({ brands, stats }: { brands: string[], stats: any[] }) {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      {/* Fondo animado similar al hero */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(100, 184, 207, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(245, 215, 87, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(123, 211, 226, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(100, 184, 207, 0.2) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-300 text-lg mb-2 font-medium">Marcas que confían en nosotros</p>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-[#64B8CF] via-[#7BD3E2] to-[#F5D757] bg-clip-text text-transparent">
            Generando resultados medibles desde el día uno
          </h3>
        </motion.div>

        {/* Brands Carousel con glass effect */}
        <div className="relative mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          
          <motion.div 
            className="flex overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="flex space-x-6"
              animate={{ x: [0, -2000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...brands, ...brands].map((brand, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-8 py-6 backdrop-blur-xl rounded-xl border hover:scale-105 transition-transform"
                  style={{
                    background: 'rgba(100, 184, 207, 0.05)',
                    borderColor: 'rgba(100, 184, 207, 0.2)',
                    boxShadow: '0 4px 20px rgba(100, 184, 207, 0.1)'
                  }}
                >
                  <span className="text-white/80 font-medium whitespace-nowrap">{brand}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Cards con glass effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div 
                className="p-8 backdrop-blur-xl rounded-xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all"
                style={{
                  background: 'linear-gradient(135deg, rgba(100, 184, 207, 0.1), rgba(123, 211, 226, 0.05))',
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(100, 184, 207, 0.2), transparent)',
                  }}
                />
                <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <p className="text-cyan-300/70">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Variante 2: Grid Minimalista con hover effects
function Variant2({ brands, stats }: { brands: string[], stats: any[] }) {
  return (
    <section className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="text-sm uppercase tracking-wider text-cyan-400 mb-4">Confían en nosotros</h3>
          <h2 className="text-5xl font-bold text-white mb-2">Resultados que hablan</h2>
          <p className="text-xl text-gray-400">por sí solos</p>
        </motion.div>

        {/* Grid de marcas */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="aspect-video flex items-center justify-center p-4 rounded-lg border border-white/10 hover:border-cyan-500/50 backdrop-blur-sm transition-all cursor-pointer group"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01))',
              }}
            >
              <span className="text-gray-500 group-hover:text-white transition-colors text-sm text-center">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats con animación de contador */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <motion.div 
                className={`text-6xl font-thin bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.4, delay: i * 0.2 + 0.3 }}
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-500 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Variante 3: Cards flotantes con efecto 3D
function Variant3({ brands, stats }: { brands: string[], stats: any[] }) {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      {/* Mesh grid background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 
            `linear-gradient(cyan 1px, transparent 1px), 
             linear-gradient(90deg, cyan 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16">
          <motion.div 
            className="inline-block mb-6"
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(100, 184, 207, 0.5)',
                '0 0 40px rgba(245, 215, 87, 0.5)',
                '0 0 20px rgba(100, 184, 207, 0.5)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="px-6 py-3 bg-black/50 backdrop-blur-xl rounded-full border border-cyan-500/50">
              <span className="text-cyan-300 font-bold">⚡ Marcas Premium</span>
            </div>
          </motion.div>
          
          <h2 className="text-5xl font-bold text-white mb-4">
            Generando resultados medibles
          </h2>
          <p className="text-xl text-gray-400">desde el día uno</p>
        </motion.div>

        {/* Brands en cards 3D */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {brands.slice(0, 8).map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: -30 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                rotateY: 10,
                z: 50,
                transition: { duration: 0.3 }
              }}
              className="relative preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="p-6 backdrop-blur-xl rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
                style={{
                  background: 'linear-gradient(135deg, rgba(100, 184, 207, 0.1), rgba(123, 211, 226, 0.05))',
                  transform: 'translateZ(20px)',
                  boxShadow: '0 10px 40px rgba(100, 184, 207, 0.2)'
                }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 opacity-50">
                    {i % 4 === 0 && '🏦'}
                    {i % 4 === 1 && '🛍️'}
                    {i % 4 === 2 && '🚗'}
                    {i % 4 === 3 && '☕'}
                  </div>
                  <span className="text-white/80 text-sm">{brand}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats flotantes */}
        <div className="relative h-32">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${i * 33}%`,
                width: '33%'
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <div 
                className="p-6 backdrop-blur-xl rounded-2xl border border-cyan-500/30 mx-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(100, 184, 207, 0.15), rgba(123, 211, 226, 0.1))',
                  boxShadow: '0 20px 40px rgba(100, 184, 207, 0.2)'
                }}
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <p className="text-cyan-300/70 text-sm mt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Variante 4: Timeline interactivo
function Variant4({ brands, stats }: { brands: string[], stats: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="flex items-center justify-between mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Marcas que confían en nosotros</h2>
            <p className="text-gray-400">Generando resultados medibles desde el día uno</p>
          </div>
          <motion.div 
            className="text-6xl opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ✨
          </motion.div>
        </motion.div>

        {/* Timeline de marcas */}
        <div className="relative mb-16">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          
          <div className="flex justify-between items-center">
            {brands.slice(0, 6).map((brand, i) => (
              <motion.div
                key={i}
                className="relative"
                onHoverStart={() => setActiveIndex(i)}
              >
                <motion.div
                  className={`w-4 h-4 rounded-full cursor-pointer ${
                    activeIndex === i ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}
                  whileHover={{ scale: 2 }}
                  transition={{ type: "spring" }}
                />
                
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -top-20 left-1/2 -translate-x-1/2 whitespace-nowrap"
                    >
                      <div 
                        className="px-4 py-2 backdrop-blur-xl rounded-lg border border-cyan-500/50"
                        style={{
                          background: 'rgba(100, 184, 207, 0.1)',
                        }}
                      >
                        <span className="text-white text-sm">{brand}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats con progress bars */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">{stat.label}</span>
                <span className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Variante 5: Live counter con efecto matrix
function Variant5({ brands, stats }: { brands: string[], stats: any[] }) {
  const [currentBrand, setCurrentBrand] = useState(0)

  return (
    <section className="py-20 relative overflow-hidden bg-black">
      {/* Efecto matrix de fondo */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? 'rgba(100, 184, 207, 0.1)' : 'rgba(245, 215, 87, 0.1)'
              } 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Live badge */}
        <motion.div 
          className="flex justify-center mb-8"
          animate={{ 
            boxShadow: [
              '0 0 0 0 rgba(100, 184, 207, 0)',
              '0 0 0 20px rgba(100, 184, 207, 0)',
              '0 0 0 20px rgba(100, 184, 207, 0)',
              '0 0 0 0 rgba(100, 184, 207, 0)',
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-full border border-cyan-500/50">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-cyan-300 font-bold">MARCAS ACTIVAS</span>
            </div>
          </div>
        </motion.div>

        <h2 className="text-center text-5xl font-bold text-white mb-2">
          Generando resultados
        </h2>
        <p className="text-center text-xl text-gray-400 mb-12">
          medibles desde el día uno
        </p>

        {/* Brand switcher */}
        <div className="relative h-24 mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBrand}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onAnimationComplete={() => {
                setTimeout(() => {
                  setCurrentBrand((prev) => (prev + 1) % brands.length)
                }, 2000)
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div 
                className="px-12 py-6 backdrop-blur-xl rounded-2xl border border-cyan-500/30"
                style={{
                  background: 'linear-gradient(135deg, rgba(100, 184, 207, 0.1), rgba(123, 211, 226, 0.05))',
                  boxShadow: '0 20px 40px rgba(100, 184, 207, 0.2)'
                }}
              >
                <span className="text-3xl font-bold bg-gradient-to-r from-[#64B8CF] to-[#F5D757] bg-clip-text text-transparent">
                  {brands[currentBrand]}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Live stats con animación */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="relative group"
            >
              <div 
                className="p-8 backdrop-blur-xl rounded-xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(100, 184, 207, 0.1), rgba(123, 211, 226, 0.05))',
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                  className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.value}
                </motion.div>
                <p className="text-cyan-300/70">{stat.label}</p>
                
                {/* Mini gráfico animado */}
                <div className="mt-4 flex items-end justify-center space-x-1 h-8">
                  {[...Array(7)].map((_, j) => (
                    <motion.div
                      key={j}
                      className="w-2 bg-gradient-to-t from-cyan-500/50 to-cyan-500/20 rounded-t"
                      initial={{ height: 0 }}
                      animate={{ height: `${Math.random() * 100}%` }}
                      transition={{ 
                        duration: 1,
                        delay: j * 0.05,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}