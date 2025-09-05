'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactFormCorporate() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    // Reset form
    setFormData({
      company: '',
      name: '',
      email: '',
      phone: '',
      budget: '',
      campaign: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Company Information */}
        <div className="space-y-6">
          <h4 className="text-lg font-medium text-white">Información de la Empresa</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                Empresa *
              </label>
              <input
                type="text"
                name="company"
                id="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/[0.02] backdrop-blur-sm border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-publixy-cyan/50 focus:bg-white/[0.04] transition-all"
                placeholder="Nombre de su empresa"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/[0.02] backdrop-blur-sm border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-publixy-cyan/50 focus:bg-white/[0.04] transition-all"
                placeholder="Su nombre completo"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <h4 className="text-lg font-medium text-white">Información de Contacto</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email Corporativo *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/[0.02] backdrop-blur-sm border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-publixy-cyan/50 focus:bg-white/[0.04] transition-all"
                placeholder="email@empresa.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/[0.02] backdrop-blur-sm border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-publixy-cyan/50 focus:bg-white/[0.04] transition-all"
                placeholder="+52 (55) 1234-5678"
              />
            </div>
          </div>
        </div>

        {/* Campaign Details */}
        <div className="space-y-6">
          <h4 className="text-lg font-medium text-white">Detalles de Campaña</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-400 mb-2">
                Presupuesto Estimado
              </label>
              <select
                name="budget"
                id="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/[0.02] backdrop-blur-sm border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-publixy-cyan/50 focus:bg-white/[0.04] transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-publixy-charcoal">Seleccionar rango</option>
                <option value="50k-100k" className="bg-publixy-charcoal">$50,000 - $100,000 MXN</option>
                <option value="100k-250k" className="bg-publixy-charcoal">$100,000 - $250,000 MXN</option>
                <option value="250k-500k" className="bg-publixy-charcoal">$250,000 - $500,000 MXN</option>
                <option value="500k+" className="bg-publixy-charcoal">$500,000+ MXN</option>
              </select>
            </div>
            <div>
              <label htmlFor="campaign" className="block text-sm font-medium text-gray-400 mb-2">
                Tipo de Campaña
              </label>
              <select
                name="campaign"
                id="campaign"
                value={formData.campaign}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/[0.02] backdrop-blur-sm border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-publixy-cyan/50 focus:bg-white/[0.04] transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-publixy-charcoal">Seleccionar tipo</option>
                <option value="brand" className="bg-publixy-charcoal">Awareness de Marca</option>
                <option value="product" className="bg-publixy-charcoal">Lanzamiento de Producto</option>
                <option value="seasonal" className="bg-publixy-charcoal">Campaña Estacional</option>
                <option value="institutional" className="bg-publixy-charcoal">Institucional</option>
                <option value="other" className="bg-publixy-charcoal">Otro</option>
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
            Objetivos de Campaña
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/[0.02] backdrop-blur-sm border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-publixy-cyan/50 focus:bg-white/[0.04] transition-all resize-none"
            placeholder="Describa sus objetivos de marketing y audiencia target..."
          />
        </div>

        {/* Professional Note */}
        <div className="p-4 rounded-lg bg-gradient-to-r from-publixy-cyan/5 to-publixy-purple/5 border border-white/10">
          <p className="text-sm text-gray-400">
            <span className="text-publixy-cyan font-medium">Compromiso de Privacidad:</span> Su información será tratada con absoluta confidencialidad y utilizada únicamente para crear su propuesta personalizada.
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative px-12 py-4 rounded-full font-medium text-white overflow-hidden group ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-publixy-cyan to-publixy-purple" />
            
            {/* Hover effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-publixy-purple to-publixy-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            {/* Button content */}
            <span className="relative flex items-center justify-center space-x-2">
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <span>Solicitar Propuesta Personalizada</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )}
            </span>
          </motion.button>
        </div>
      </form>
    </motion.div>
  )
}