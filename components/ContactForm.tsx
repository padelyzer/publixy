'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulación de envío
    setTimeout(() => {
      setShowSuccess(true)
      setIsSubmitting(false)
      setTimeout(() => {
        setShowSuccess(false)
        setFormData({ name: '', email: '', phone: '', company: '', budget: '' })
      }, 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="relative">
      {showSuccess && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-xl flex items-center justify-center z-10"
        >
          <div className="text-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.1 }}
              className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h3 className="text-lg font-medium text-gray-300 mb-1">¡Perfecto!</h3>
            <p className="text-xs text-gray-500">Te contactaremos en menos de 2 horas</p>
          </div>
        </motion.div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Indicador de campos mínimos */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-gray-600">Solo 4 campos rápidos</p>
          <div className="flex items-center space-x-1">
            <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs text-gray-500">100% Seguro</span>
          </div>
        </div>

        {/* Campo combinado Nombre + Empresa */}
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2.5 bg-white/[0.02] border border-white/[0.08] rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-500/30 focus:bg-white/[0.03] transition-all text-sm"
              placeholder="Tu nombre *"
            />
          </div>
          <div>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2.5 bg-white/[0.02] border border-white/[0.08] rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-500/30 focus:bg-white/[0.03] transition-all text-sm"
              placeholder="Empresa *"
            />
          </div>
        </div>
        
        {/* Email con validación visual */}
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2.5 bg-white/[0.02] border border-white/[0.08] rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-500/30 focus:bg-white/[0.03] transition-all text-sm pr-10"
            placeholder="Email corporativo *"
          />
          {formData.email && formData.email.includes('@') && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </motion.div>
          )}
        </div>
        
        {/* Teléfono con código de país */}
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1">
            <div className="w-full px-3 py-2.5 bg-white/[0.02] border border-white/[0.08] rounded-lg text-gray-500 text-sm">
              +52 🇲🇽
            </div>
          </div>
          <div className="col-span-2">
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2.5 bg-white/[0.02] border border-white/[0.08] rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-500/30 focus:bg-white/[0.03] transition-all text-sm"
              placeholder="WhatsApp (10 dígitos) *"
              pattern="[0-9]{10}"
              maxLength={10}
            />
          </div>
        </div>
        
        {/* Presupuesto con iconos */}
        <div>
          <p className="text-xs text-gray-600 mb-2">Inversión mensual estimada</p>
          <div className="grid grid-cols-3 gap-2">
            <motion.label
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <input
                type="radio"
                name="budget"
                value="10-25"
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="text-center px-2 py-2 bg-white/[0.02] border border-white/[0.08] rounded-lg cursor-pointer peer-checked:border-cyan-500/50 peer-checked:bg-cyan-500/10 transition-all">
                <span className="text-xs text-gray-400">$10-25K</span>
              </div>
            </motion.label>
            
            <motion.label
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <input
                type="radio"
                name="budget"
                value="25-50"
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="text-center px-2 py-2 bg-white/[0.02] border border-white/[0.08] rounded-lg cursor-pointer peer-checked:border-cyan-500/50 peer-checked:bg-cyan-500/10 transition-all">
                <span className="text-xs text-gray-400">$25-50K</span>
              </div>
            </motion.label>
            
            <motion.label
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <input
                type="radio"
                name="budget"
                value="50+"
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="text-center px-2 py-2 bg-white/[0.02] border border-white/[0.08] rounded-lg cursor-pointer peer-checked:border-cyan-500/50 peer-checked:bg-cyan-500/10 transition-all">
                <span className="text-xs text-gray-400">$50K+</span>
              </div>
            </motion.label>
          </div>
        </div>
        
        {/* Botón con urgencia */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="relative w-full py-3.5 bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Efecto de brillo */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            }}
          />
          
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Procesando...
            </span>
          ) : (
            <span className="relative z-10 flex items-center justify-center">
              Quiero mi análisis gratis →
              <motion.span 
                className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs bg-white/20 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                HOY
              </motion.span>
            </span>
          )}
        </motion.button>

        {/* Trust indicators */}
        <div className="flex items-center justify-center space-x-4 mt-3">
          <div className="flex items-center space-x-1">
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-xs text-gray-600">Sin spam</span>
          </div>
          <div className="text-gray-700">•</div>
          <div className="flex items-center space-x-1">
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs text-gray-600">Respuesta &lt; 2 hrs</span>
          </div>
          <div className="text-gray-700">•</div>
          <div className="flex items-center space-x-1">
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs text-gray-600">Sin compromiso</span>
          </div>
        </div>
      </form>
    </div>
  )
}