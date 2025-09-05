'use client'

import { motion } from 'framer-motion'

export default function HeroVariant2() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-[#0a0014] to-[#0d1f2d]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-br from-[#0d1f2d] to-[#0f1629]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#F5D757]/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
              <span className="text-cyan-300 text-sm">2.1M impactos activos</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Publicidad que</span>
              <span className="block text-transparent bg-gradient-to-r from-[#64B8CF] via-[#7BD3E2] to-[#F5D757] bg-clip-text">
                genera resultados
              </span>
              <span className="block text-white">medibles</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8">
              La red de medios premium más efectiva de México. 
              Conectamos tu marca con audiencias A/B/B+ en ubicaciones estratégicas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#EFBD4A] to-[#F5D757] text-gray-900 font-bold rounded-lg"
              >
                Agenda Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur border border-white/20 text-white font-bold rounded-lg"
              >
                Calcular ROI
              </motion.button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* 3D Cards Stack */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl border border-cyan-500/30"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">BBVA Nacional</h3>
                  <p className="text-cyan-300">1,650 sucursales</p>
                  <div className="mt-4 text-4xl font-bold text-[#F5D757]">+250% ROI</div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                className="absolute top-16 left-8 w-full h-64 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-xl rounded-2xl border border-yellow-500/30"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Aeropuerto PBC</h3>
                  <p className="text-yellow-300">280K impactos/mes</p>
                  <div className="mt-4 text-4xl font-bold text-[#64B8CF]">A/B/B+</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}