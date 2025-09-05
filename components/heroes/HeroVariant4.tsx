'use client'

import { motion } from 'framer-motion'

export default function HeroVariant4() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0014] via-[#0d1f2d] to-[#0f1629]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/30 via-cyan-600/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-yellow-500/30 via-orange-600/10 to-transparent rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-32 w-full">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-full border border-cyan-500/30">
              <svg className="w-4 h-4 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-cyan-300 text-sm font-medium">Líder en Medios OOH Premium</span>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Stats Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 space-y-6"
            >
              <div className="text-center lg:text-left">
                <div className="text-5xl font-bold text-[#64B8CF]">28%</div>
                <div className="text-gray-400">Más efectivo</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-5xl font-bold text-[#7BD3E2]">1,650</div>
                <div className="text-gray-400">Sucursales BBVA</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-5xl font-bold text-[#F5D757]">2.1M</div>
                <div className="text-gray-400">Impactos/mes</div>
              </div>
            </motion.div>

            {/* Center Hero Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-white">Transforma tu</span>
                <span className="block relative">
                  <span className="bg-gradient-to-r from-[#64B8CF] via-[#7BD3E2] to-[#F5D757] bg-clip-text text-transparent">
                    inversión
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#64B8CF] to-[#F5D757] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </span>
                <span className="block text-white">en resultados</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Red premium de publicidad exterior con datos en tiempo real y ROI garantizado
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/20 transition-all"
                >
                  Calcula tu ROI
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] text-white font-bold rounded-xl"
                >
                  Ver Dashboard
                </motion.button>
              </div>
            </motion.div>

            {/* Right Features */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 space-y-4"
            >
              <div className="p-4 bg-white/5 backdrop-blur rounded-xl border border-white/10">
                <div className="text-cyan-400 text-sm font-semibold mb-1">✓ Dashboard en vivo</div>
                <div className="text-xs text-gray-400">Métricas en tiempo real</div>
              </div>
              <div className="p-4 bg-white/5 backdrop-blur rounded-xl border border-white/10">
                <div className="text-yellow-400 text-sm font-semibold mb-1">✓ ROI Garantizado</div>
                <div className="text-xs text-gray-400">+250% promedio</div>
              </div>
              <div className="p-4 bg-white/5 backdrop-blur rounded-xl border border-white/10">
                <div className="text-green-400 text-sm font-semibold mb-1">✓ Soporte 24/7</div>
                <div className="text-xs text-gray-400">Account manager dedicado</div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm"
          >
            <span>Confían en nosotros:</span>
            <span className="font-semibold text-white">BBVA</span>
            <span className="font-semibold text-white">Liverpool</span>
            <span className="font-semibold text-white">Volkswagen</span>
            <span className="font-semibold text-white">Nike</span>
            <span className="font-semibold text-white">+150 marcas</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}