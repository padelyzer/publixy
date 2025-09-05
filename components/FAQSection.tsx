'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    id: 1,
    letter: 'Q',
    question: '¿Qué es Publixy y cómo funciona?',
    answer: 'Publixy es la red de publicidad digital exterior más inteligente de México. Conectamos marcas con audiencias premium en +1,650 ubicaciones estratégicas, usando pantallas LED con contenido dinámico y métricas en tiempo real.',
    highlight: 'Red más grande de México'
  },
  {
    id: 2,
    letter: 'R',
    question: '¿Por qué es 28% más efectivo?',
    answer: 'Alcanzamos audiencias cuando están receptivas. El 87% de mexicanos ignora ads online pero presta atención a pantallas físicas. Ofrecemos segmentación precisa y métricas verificables.',
    highlight: '28% más conversión'
  },
  {
    id: 3,
    letter: 'I',
    question: '¿Cuál es la inversión mínima?',
    answer: 'Planes desde $10,000 MXN mensuales. Recomendamos pilotos de 3 meses. Incluye diseño, programación y reportes.',
    highlight: 'Desde $10K/mes'
  },
  {
    id: 4,
    letter: 'M',
    question: '¿Cómo mido el ROI?',
    answer: 'Dashboard en tiempo real con: impresiones, alcance único, engagement, horas pico, demografía. ROI promedio: 250%.',
    highlight: 'ROI 250% promedio'
  },
  {
    id: 5,
    letter: 'U',
    question: '¿Dónde están ubicados?',
    answer: '1,650 sucursales BBVA nacional, Aeropuerto Puebla, centros comerciales premium, restaurantes AAA. Expansión activa a CDMX.',
    highlight: '+1,650 ubicaciones'
  },
  {
    id: 6,
    letter: 'T',
    question: '¿Tiempo de lanzamiento?',
    answer: 'Tu campaña al aire en 48-72 horas. Express en 24 horas disponible.',
    highlight: '48 horas al aire'
  }
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-16 relative overflow-hidden bg-black">
      {/* Fondo animado con efecto glass sutil */}
      <div className="absolute inset-0">
        {/* Floating glass orbs */}
        <div className="absolute top-1/4 -right-1/4 w-[450px] h-[450px] bg-gradient-radial from-[#F5D757]/10 via-[#EFBD4A]/3 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/10 via-blue-600/3 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 30% 50%, rgba(100, 184, 207, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 50%, rgba(245, 215, 87, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(123, 211, 226, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 50%, rgba(100, 184, 207, 0.05) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            <span className="text-white">Preguntas</span>
            <span className="bg-gradient-to-r from-[#64B8CF] to-[#F5D757] bg-clip-text text-transparent"> frecuentes</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Todo lo que necesitas saber en 30 segundos
          </p>
        </motion.div>

        {/* Grid de FAQ estilo framework */}
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={`w-full text-left relative overflow-hidden rounded-xl transition-all ${
                  activeIndex === index 
                    ? 'bg-white/[0.03] border border-white/[0.12]' 
                    : 'bg-white/[0.01] border border-white/[0.08] hover:bg-white/[0.02]'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {/* Contenedor principal */}
                <div className="p-4 relative">
                  {/* Letra grande de fondo */}
                  <div 
                    className="absolute -top-2 -left-2 text-6xl font-black opacity-[0.02] text-white"
                  >
                    {faq.letter}
                  </div>

                  {/* Contenido */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 pr-2">
                        <h3 className="text-sm font-medium text-gray-300 mb-1">
                          {faq.question}
                        </h3>
                        {activeIndex === index && (
                          <span className="inline-flex items-center px-2 py-0.5 text-xs bg-white/[0.05] text-gray-500 rounded-full border border-white/[0.08]">
                            {faq.highlight}
                          </span>
                        )}
                      </div>
                      <motion.div
                        animate={{ rotate: activeIndex === index ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <svg 
                          className="w-4 h-4 text-gray-500" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={1.5} 
                            d="M12 6v12m6-6H6" 
                          />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Respuesta expandible */}
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs text-gray-500 leading-relaxed pt-2 border-t border-white/[0.05]">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Efecto de hover */}
                  {activeIndex === index && (
                    <motion.div
                      className="absolute inset-0 opacity-10 blur-2xl"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, rgba(100, 184, 207, 0.3), transparent)`,
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA minimalista */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-xs text-gray-600 mb-4">
            ¿Más preguntas?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center space-x-2 px-5 py-2 bg-white/[0.02] backdrop-blur-sm text-gray-400 text-xs font-medium rounded-full border border-white/[0.08] hover:bg-white/[0.03] hover:border-white/[0.12] transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Chat en vivo</span>
            </motion.a>
            
            <motion.a
              href="https://wa.me/522223589271"
              target="_blank"
              className="inline-flex items-center justify-center space-x-2 px-5 py-2 bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] text-white text-xs font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/>
              </svg>
              <span>WhatsApp directo</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}