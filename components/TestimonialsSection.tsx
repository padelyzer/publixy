'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const testimonials = [
    {
      id: 1,
      letter: 'C',
      name: 'Carlos Mendoza',
      company: 'Restaurante La Vista',
      role: 'Director General',
      quote: 'Pasamos de estar vacíos los martes a tener lista de espera. Publixy no solo nos trajo clientes, nos trajo los clientes correctos.',
      stats: [
        { label: 'Ocupación', value: '92%', trend: '+157%' },
        { label: 'Ticket promedio', value: '$850', trend: '+45%' },
        { label: 'Martes-Jueves', value: '+350%', trend: 'ventas' }
      ],
      color: 'rgba(100, 184, 207, 0.8)',
      metric: 'Ocupación entre semana',
      before: '35%',
      after: '92%'
    },
    {
      id: 2,
      letter: 'A',
      name: 'Ana García',
      company: 'Clínica Dental Premium',
      role: 'Directora de Marketing',
      quote: 'Dejé de gastar en Google Ads. Con Publixy, cada peso cuenta porque sé exactamente quién ve mi publicidad y cuándo.',
      stats: [
        { label: 'Costo/paciente', value: '$8.5K', trend: '-81%' },
        { label: 'Nuevos pacientes', value: '47', trend: '2 meses' },
        { label: 'ROI', value: '4.2x', trend: '+320%' }
      ],
      color: 'rgba(245, 215, 87, 0.8)',
      metric: 'Costo por paciente nuevo',
      before: '$45,000',
      after: '$8,500'
    },
    {
      id: 3,
      letter: 'R',
      name: 'Roberto Silva',
      company: 'BMW Puebla',
      role: 'Gerente de Ventas',
      quote: 'Por primera vez en 15 años, puedo decirle a un cliente exactamente cuántas personas de su perfil vieron su anuncio ayer.',
      stats: [
        { label: 'Conversión', value: '14.7%', trend: '+540%' },
        { label: 'Autos vendidos', value: '12', trend: 'directo' },
        { label: 'Leads calificados', value: '156', trend: '+280%' }
      ],
      color: 'rgba(123, 211, 226, 0.8)',
      metric: 'Tasa de conversión',
      before: '2.3%',
      after: '14.7%'
    },
    {
      id: 4,
      letter: 'M',
      name: 'María Fernández',
      company: 'Joyería Exclusive',
      role: 'Fundadora',
      quote: 'Mis competidores siguen en espectaculares. Yo prefiero estar donde mis clientes realmente pasan tiempo: BBVA, aeropuerto, restaurantes AAA.',
      stats: [
        { label: 'ROI', value: '340%', trend: '3 meses' },
        { label: 'Engagement', value: '5.2%', trend: '+550%' },
        { label: 'Ventas premium', value: '+85%', trend: 'vs 2023' }
      ],
      color: 'rgba(255, 107, 0, 0.8)',
      metric: 'Engagement rate',
      before: '0.8%',
      after: '5.2%'
    },
    {
      id: 5,
      letter: 'L',
      name: 'Luis Ramírez',
      company: 'Gimnasio Elite Fitness',
      role: 'CEO',
      quote: 'En enero todos hacen publicidad de gimnasios. Con Publixy, llegamos específicamente a ejecutivos de 30-45 años en BBVA y corporativos.',
      stats: [
        { label: 'Membresías', value: '312', trend: '+267%' },
        { label: 'Premium/Gold', value: '85%', trend: 'del total' },
        { label: 'LTV', value: '$24K', trend: '+120%' }
      ],
      color: 'rgba(139, 0, 255, 0.8)',
      metric: 'Nuevas membresías Premium',
      before: '85',
      after: '312'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
      mouseX.set(x)
      mouseY.set(y)
    }
    
    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="py-16 relative overflow-hidden bg-black">
      {/* Fondo animado con efecto glass sutil */}
      <div className="absolute inset-0">
        {/* Floating glass orbs */}
        <div className="absolute top-1/3 -left-1/4 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/10 via-blue-600/3 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-1/4 w-[550px] h-[550px] bg-gradient-radial from-[#F5D757]/10 via-[#EFBD4A]/3 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        
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

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={containerRef}>
        {/* Header minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            <span className="text-white">Historias que</span>
            <span className="bg-gradient-to-r from-[#64B8CF] to-[#F5D757] bg-clip-text text-transparent"> inspiran</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Resultados reales de empresas que confían en nosotros
          </p>
        </motion.div>


        {/* Card principal del testimonio activo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
            style={{
              transform: `translateX(${springX.get()}px) translateY(${springY.get()}px)`,
            }}
          >
            <div className="relative bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/[0.08] p-8 overflow-hidden">
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 opacity-20 blur-3xl"
                style={{
                  background: `radial-gradient(circle at 30% 50%, ${activeTestimonial.color}, transparent)`,
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

              {/* Letra grande de fondo */}
              <div 
                className="absolute -top-20 -left-10 text-[200px] font-black opacity-5"
                style={{ color: activeTestimonial.color }}
              >
                {activeTestimonial.letter}
              </div>

              <div className="relative z-10 grid lg:grid-cols-2 gap-8">
                {/* Contenido izquierdo */}
                <div className="space-y-6">
                  {/* Quote */}
                  <div>
                    <div className="text-5xl text-white/10 font-serif mb-2">"</div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {activeTestimonial.quote}
                    </p>
                  </div>

                  {/* Comparación Before/After */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-xs text-gray-600 mb-1">Antes</div>
                      <div className="text-lg font-medium text-gray-600 line-through">
                        {activeTestimonial.before}
                      </div>
                    </div>
                    <div 
                      className="rounded-lg p-3 border"
                      style={{ 
                        borderColor: `${activeTestimonial.color}30`,
                        background: `${activeTestimonial.color}10` 
                      }}
                    >
                      <div className="text-xs text-gray-400 mb-1">Con Publixy</div>
                      <div className="text-lg font-bold text-white">
                        {activeTestimonial.after}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">{activeTestimonial.metric}</div>

                  {/* Autor */}
                  <div className="pt-4 border-t border-white/[0.05]">
                    <div className="text-base font-medium text-white">{activeTestimonial.name}</div>
                    <div className="text-sm text-gray-500">{activeTestimonial.role}</div>
                    <div className="text-sm" style={{ color: activeTestimonial.color }}>
                      {activeTestimonial.company}
                    </div>
                  </div>
                </div>

                {/* Métricas derecha */}
                <div className="space-y-3">
                  {activeTestimonial.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-black/30 rounded-lg p-3 border border-white/[0.05] hover:bg-black/40 transition-all"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-xs text-gray-600">{stat.label}</div>
                          <div className="text-2xl font-bold text-white mt-1">
                            {stat.value}
                          </div>
                        </div>
                        <div 
                          className="text-xs px-2 py-1 rounded-full"
                          style={{ 
                            background: `${activeTestimonial.color}15`,
                            color: activeTestimonial.color
                          }}
                        >
                          {stat.trend}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicadores de confianza */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-400">95%</div>
            <div className="text-xs text-gray-600">Retención de clientes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-400">4.9/5</div>
            <div className="text-xs text-gray-600">Satisfacción</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-400">+150</div>
            <div className="text-xs text-gray-600">Casos de éxito</div>
          </div>
        </motion.div>

        {/* CTA minimalista */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center space-x-2 px-5 py-2 bg-white/[0.02] backdrop-blur-sm text-gray-400 text-xs font-medium rounded-full border border-white/[0.08] hover:bg-white/[0.03] hover:border-white/[0.12] transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Únete a estas historias de éxito</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection