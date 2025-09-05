'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactFormAdvertisingWhite() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    budget: '',
    campaign: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form submitted:', formData)
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after showing success
    setTimeout(() => {
      setFormData({
        company: '',
        name: '',
        email: '',
        phone: '',
        budget: '',
        campaign: '',
        message: ''
      })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const budgetOptions = [
    { value: '', label: 'Selecciona tu presupuesto' },
    { value: '50k-100k', label: '$50,000 - $100,000 MXN' },
    { value: '100k-250k', label: '$100,000 - $250,000 MXN' },
    { value: '250k-500k', label: '$250,000 - $500,000 MXN' },
    { value: '500k-1m', label: '$500,000 - $1,000,000 MXN' },
    { value: '1m+', label: '$1,000,000+ MXN' }
  ]

  const campaignTypes = [
    { value: '', label: 'Tipo de campaña' },
    { value: 'brand-awareness', label: 'Brand Awareness' },
    { value: 'product-launch', label: 'Lanzamiento de Producto' },
    { value: 'traffic-drive', label: 'Generación de Tráfico' },
    { value: 'event-promotion', label: 'Promoción de Eventos' },
    { value: 'seasonal', label: 'Campaña Estacional' },
    { value: 'other', label: 'Otro' }
  ]

  if (isSubmitted) {
    return (
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-6xl mb-8">🎉</div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              ¡Mensaje Enviado!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Gracias por contactarnos. Nuestro equipo te responderá en las próximas 24 horas con una propuesta personalizada.
            </p>
            <div className="flex items-center justify-center gap-4 text-publixy-gold">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.div>
              <span className="font-bold">Procesando tu solicitud...</span>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-3"
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `linear-gradient(#7BD3E2 1px, transparent 1px), linear-gradient(to right, #7BD3E2 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-publixy-teal/5 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-80 h-80 bg-publixy-gold/5 rounded-full blur-3xl"
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-3 text-sm font-black tracking-wider text-white uppercase bg-gradient-to-r from-publixy-gold to-publixy-yellow rounded-full mb-6 shadow-lg">
              Contacto Premium
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Impulsa tu{' '}
              <span className="bg-gradient-to-r from-publixy-teal to-publixy-gold bg-clip-text text-transparent">
                Campaña
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Obtén una propuesta personalizada en 24 horas. Nuestros expertos diseñarán la estrategia perfecta para tu marca.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Form Background with blur effect */}
            <div className="relative bg-white backdrop-blur-xl rounded-3xl border border-gray-200 p-8 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* First Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company */}
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Empresa <span className="text-publixy-gold">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Nombre de su empresa"
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:border-publixy-gold focus:outline-none focus:ring-2 focus:ring-publixy-gold/20 transition-all duration-300"
                      />
                      <AnimatePresence>
                        {focusedField === 'company' && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-publixy-teal to-publixy-gold origin-left"
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Name */}
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Nombre Completo <span className="text-publixy-gold">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Su nombre completo"
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:border-publixy-gold focus:outline-none focus:ring-2 focus:ring-publixy-gold/20 transition-all duration-300"
                      />
                      <AnimatePresence>
                        {focusedField === 'name' && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-publixy-teal to-publixy-gold origin-left"
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Email Corporativo <span className="text-publixy-gold">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="email@empresa.com"
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:border-publixy-gold focus:outline-none focus:ring-2 focus:ring-publixy-gold/20 transition-all duration-300"
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-publixy-teal">
                        📧
                      </div>
                      <AnimatePresence>
                        {focusedField === 'email' && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-publixy-teal to-publixy-gold origin-left"
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Teléfono
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+52 (55) 1234-5678"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:border-publixy-gold focus:outline-none focus:ring-2 focus:ring-publixy-gold/20 transition-all duration-300"
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-publixy-teal">
                        📱
                      </div>
                      <AnimatePresence>
                        {focusedField === 'phone' && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-publixy-teal to-publixy-gold origin-left"
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>

                {/* Third Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Budget */}
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Presupuesto Estimado
                    </label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('budget')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:border-publixy-gold focus:outline-none focus:ring-2 focus:ring-publixy-gold/20 transition-all duration-300 appearance-none"
                      >
                        {budgetOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-publixy-teal pointer-events-none">
                        💰
                      </div>
                      <AnimatePresence>
                        {focusedField === 'budget' && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-publixy-teal to-publixy-gold origin-left"
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Campaign Type */}
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Tipo de Campaña
                    </label>
                    <div className="relative">
                      <select
                        name="campaign"
                        value={formData.campaign}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('campaign')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:border-publixy-gold focus:outline-none focus:ring-2 focus:ring-publixy-gold/20 transition-all duration-300 appearance-none"
                      >
                        {campaignTypes.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-publixy-teal pointer-events-none">
                        🎯
                      </div>
                      <AnimatePresence>
                        {focusedField === 'campaign' && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-publixy-teal to-publixy-gold origin-left"
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Objetivos de Campaña
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={4}
                      placeholder="Describa sus objetivos de marketing y audiencia target..."
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:border-publixy-gold focus:outline-none focus:ring-2 focus:ring-publixy-gold/20 transition-all duration-300 resize-none"
                    />
                    <AnimatePresence>
                      {focusedField === 'message' && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-publixy-teal to-publixy-gold origin-left"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div 
                  className="text-center pt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative px-12 py-5 bg-gradient-to-r from-publixy-gold to-publixy-yellow text-white font-black text-lg rounded-full shadow-2xl hover:shadow-publixy-gold/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
                    animate={isSubmitting ? { 
                      boxShadow: [
                        '0 0 30px rgba(239,189,74,0.5)',
                        '0 0 60px rgba(123,211,226,0.5)',
                        '0 0 30px rgba(239,189,74,0.5)'
                      ]
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: isSubmitting ? Infinity : 0
                    }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        <span>Solicitar Propuesta</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          🚀
                        </motion.span>
                      </div>
                    )}
                  </motion.button>
                </motion.div>

                {/* Trust indicators */}
                <div className="flex items-center justify-center gap-8 pt-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">🔒</span>
                    <span className="font-semibold">Información Segura</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-publixy-gold">⚡</span>
                    <span className="font-semibold">Respuesta 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-publixy-teal">🎯</span>
                    <span className="font-semibold">Propuesta Personalizada</span>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}