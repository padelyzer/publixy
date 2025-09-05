'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

interface Metric {
  id: string
  value: number
  suffix: string
  label: string
  description: string
  icon: string
  color: string
}

const metrics: Metric[] = [
  {
    id: 'clients',
    value: 127,
    suffix: '+',
    label: 'Clientes Activos',
    description: 'Empresas que confían en nosotros',
    icon: 'users',
    color: 'from-cyan-400 to-blue-400'
  },
  {
    id: 'retention',
    value: 95,
    suffix: '%',
    label: 'Retención',
    description: 'Clientes que renuevan',
    icon: 'heart',
    color: 'from-pink-400 to-red-400'
  },
  {
    id: 'roi',
    value: 250,
    suffix: '%',
    label: 'ROI Promedio',
    description: 'Retorno de inversión',
    icon: 'trending-up',
    color: 'from-green-400 to-emerald-400'
  },
  {
    id: 'satisfaction',
    value: 4.9,
    suffix: '/5',
    label: 'Satisfacción',
    description: 'Calificación promedio',
    icon: 'star',
    color: 'from-yellow-400 to-orange-400'
  }
]

const IconComponent = ({ type, className }: { type: string, className?: string }) => {
  const baseClass = className || "w-10 h-10"
  
  switch (type) {
    case 'users':
      return (
        <svg className={`${baseClass} text-cyan-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      )
    case 'heart':
      return (
        <svg className={`${baseClass} text-pink-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      )
    case 'trending-up':
      return (
        <svg className={`${baseClass} text-green-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
        </svg>
      )
    case 'star':
      return (
        <svg className={`${baseClass} text-yellow-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
        </svg>
      )
    default:
      return null
  }
}

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)
  const springValue = useSpring(0, { stiffness: 100, damping: 30 })

  useEffect(() => {
    if (inView) {
      springValue.set(value)
    }
  }, [inView, value, springValue])

  useEffect(() => {
    return springValue.onChange((latest) => {
      setDisplayValue(latest)
    })
  }, [springValue])

  const formattedValue = value % 1 === 0 
    ? Math.round(displayValue).toLocaleString()
    : displayValue.toFixed(1)

  return (
    <span className="tabular-nums">
      {formattedValue}{suffix}
    </span>
  )
}

export default function SuccessMetrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 rounded-full border border-cyan-500/20">
            Resultados que hablan
          </span>
          <h2 className="text-5xl font-bold mb-4">
            Números que
            <span className="bg-gradient-to-r from-[#64B8CF] to-[#F5D757] bg-clip-text text-transparent"> emocionan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cada número cuenta una historia de éxito. Cada cliente, una transformación real.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredMetric(metric.id)}
              onMouseLeave={() => setHoveredMetric(null)}
              className="relative group"
            >
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-2xl hover:scale-105">
                {/* Animated background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 rounded-2xl`}
                  animate={{ 
                    opacity: hoveredMetric === metric.id ? 0.05 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Icon with pulse animation */}
                <motion.div
                  className="mb-4 relative z-10"
                  animate={hoveredMetric === metric.id ? {
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <IconComponent type={metric.icon} />
                </motion.div>

                {/* Animated number */}
                <div className={`text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2 relative z-10`}>
                  <AnimatedCounter 
                    value={metric.value} 
                    suffix={metric.suffix} 
                    inView={isInView} 
                  />
                </div>

                {/* Labels */}
                <div className="text-white font-semibold mb-1 relative z-10">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-400 relative z-10">
                  {metric.description}
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-xl"
                  animate={hoveredMetric === metric.id ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-500/20">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </motion.div>
            <span className="text-cyan-300 font-medium">
              Únete a las empresas que ya están transformando su publicidad
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}