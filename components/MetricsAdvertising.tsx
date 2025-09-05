'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

interface Metric {
  label: string
  value: number
  suffix: string
  prefix?: string
  decimals?: number
  color: string
  icon: string
}

const metrics: Metric[] = [
  {
    label: 'Impresiones Mensuales',
    value: 125000000,
    suffix: 'M',
    decimals: 1,
    color: 'from-publixy-teal to-publixy-teal-dark',
    icon: '👁️'
  },
  {
    label: 'Alcance Único',
    value: 38000000,
    suffix: 'M',
    decimals: 1,
    color: 'from-publixy-gold to-publixy-yellow',
    icon: '👥'
  },
  {
    label: 'Ubicaciones Premium',
    value: 850,
    suffix: '+',
    color: 'from-publixy-yellow to-publixy-gold',
    icon: '📍'
  },
  {
    label: 'ROI Promedio',
    value: 250,
    suffix: '%',
    prefix: '+',
    color: 'from-publixy-teal to-publixy-gold',
    icon: '📈'
  },
  {
    label: 'Tasa de Engagement',
    value: 8.5,
    suffix: '%',
    decimals: 1,
    color: 'from-publixy-gold to-publixy-teal',
    icon: '💫'
  },
  {
    label: 'Clientes Activos',
    value: 200,
    suffix: '+',
    color: 'from-publixy-teal-dark to-publixy-yellow',
    icon: '🏢'
  }
]

const CountUpAnimation = ({ target, duration = 2, prefix = '', suffix = '', decimals = 0 }: {
  target: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = easeOutQuart * target

      if (suffix === 'M' && target > 1000000) {
        setCount(currentCount / 1000000)
      } else {
        setCount(currentCount)
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)
    return () => cancelAnimationFrame(animationFrame)
  }, [target, duration, isInView, suffix])

  const displayValue = suffix === 'M' ? count.toFixed(decimals) : 
                       decimals > 0 ? count.toFixed(decimals) : Math.floor(count)

  return (
    <div ref={ref} className="tabular-nums">
      {prefix}{displayValue}{suffix}
    </div>
  )
}

export default function MetricsAdvertising() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-publixy-charcoal to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Moving Gradient Orbs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-publixy-teal/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-publixy-gold/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
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
          <span className="inline-block px-6 py-3 text-sm font-black tracking-wider text-publixy-charcoal uppercase bg-gradient-to-r from-publixy-teal to-publixy-gold rounded-full mb-6">
            Impacto Real
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Números que{' '}
            <span className="bg-gradient-to-r from-publixy-gold to-publixy-yellow bg-clip-text text-transparent">
              Hablan
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Resultados verificables que demuestran el poder de la publicidad exterior inteligente
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  className="text-4xl mb-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  {metric.icon}
                </motion.div>

                {/* Value */}
                <div className={`text-5xl font-black bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                  <CountUpAnimation
                    target={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    decimals={metric.decimals || 0}
                  />
                </div>

                {/* Label */}
                <div className="text-gray-400 font-medium">{metric.label}</div>

                {/* Live Indicator */}
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Métricas actualizadas en tiempo real desde nuestro dashboard analytics
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-publixy-gold to-publixy-yellow text-publixy-charcoal font-bold rounded-full hover:shadow-lg hover:shadow-publixy-gold/25 transition-shadow"
          >
            Ver Dashboard Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}