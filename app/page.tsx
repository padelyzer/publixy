'use client'

import { useState, useEffect, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import LazySection from '@/components/LazySection'
import HeroInteractiveLiveRefined from '@/components/heroes/HeroInteractiveLiveRefined'
import BrandsSection from '@/components/sections/BrandsSection'

// Lazy load heavy components
const FrameworkAppleGlassEnhanced = dynamic(() => import('@/components/framework-versions/FrameworkAppleGlassEnhanced'), {
  loading: () => <div className="h-96 animate-pulse bg-black rounded-2xl border border-white/[0.02]" />
})

const FAQSection = dynamic(() => import('@/components/FAQSection'), {
  loading: () => <div className="h-96 animate-pulse bg-black rounded-2xl border border-white/[0.02]" />
})

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <div className="h-96 animate-pulse bg-black rounded-2xl border border-white/[0.02]" />
})

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  loading: () => <div className="h-96 animate-pulse bg-black rounded-2xl border border-white/[0.02]" />
})

const LiveMetricsBar = dynamic(() => import('@/components/LiveMetricsBar'), {
  loading: () => <div className="h-64 animate-pulse bg-black rounded-2xl border border-white/[0.02]" />
})

// Colores oficiales de Publixy
const colors = {
  cyan: '#64B8CF',
  teal: '#7BD3E2',
  gold: '#EFBD4A',
  yellow: '#F5D757',
  dark: '#1a1a1a',
  charcoal: '#32373c'
}

export default function PublixyPage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState<'miyis' | 'paseo' | 'video' | 'banco' | 'aeropuerto'>('miyis')
  const [activeFramework, setActiveFramework] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const href = target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  // Framework P.U.B.L.I.X.Y data
  const framework = [
    { letter: 'P', title: 'PRECISIÓN', desc: 'Definimos exactamente quién, dónde y cuándo', icon: '🎯', detail: 'Segmentación A/B/B+ con datos de tráfico verificables' },
    { letter: 'U', title: 'UBICACIONES PREMIUM', desc: 'Tu marca donde tu audiencia realmente está', icon: '📍', detail: 'Red exclusiva en bancos, aeropuertos, restaurantes premium' },
    { letter: 'B', title: 'BASADO EN DATOS', desc: 'Cada decisión respaldada por información real', icon: '📊', detail: 'Dashboard transparente con métricas verificables' },
    { letter: 'L', title: 'LOCALIZACIÓN ESTRATÉGICA', desc: 'Dominio total del mercado Puebla-CDMX', icon: '🗺️', detail: 'Red establecida con expansión controlada' },
    { letter: 'I', title: 'IMPACTO MEDIBLE', desc: 'Resultados que puedes ver y contar', icon: '📈', detail: '28% más efectivo que medios tradicionales' },
    { letter: 'X', title: 'EXPERIENCIA PREMIUM', desc: 'Servicio que refleja la calidad de nuestros medios', icon: '⭐', detail: 'Account management personalizado y soporte garantizado' },
    { letter: 'Y', title: 'YIELD OPTIMIZATION', desc: 'Maximizamos cada peso de tu inversión', icon: '🚀', detail: 'Optimización continua basada en performance' }
  ]

  // Media types data
  const mediaTypes = {
    miyis: {
      title: 'Miyis & Mirales',
      subtitle: 'Pantallas en sanitarios premium',
      impacts: '50K',
      locations: ['Paseo Destino', 'Hacienda S. José', 'Restaurantes Premium', 'Clubes Deportivos'],
      price: 'Desde $4,450',
      features: ['Pantalla 10" Miyis', 'Pantalla 15" Mirales', 'Spot de 20 segundos', 'Proyección cada 6.40 min'],
      coverage: { total: '45', city: 'Puebla', growth: '+12 nuevas ubicaciones', icon: '📍' }
    },
    paseo: {
      title: 'Paseo Destino',
      subtitle: 'Primer terrapuerto premium de México',
      impacts: '75K',
      locations: ['Strip Mall', 'Terminal Premium', 'Food Court', 'Zona Comercial'],
      price: 'Desde $6,900',
      features: ['7 Plumas entrada/salida', 'Muros frontales', 'Pantallas 85"', 'Rampas publicitarias'],
      coverage: { total: '1', city: 'Puebla', growth: 'Ubicación exclusiva', icon: '🎯' }
    },
    video: {
      title: 'Video Abordo',
      subtitle: 'Flotilla premium CDMX-Puebla',
      impacts: '180K',
      locations: ['TAPO', 'Taxqueña', 'Central del Norte', 'Aeropuerto'],
      price: '$35,000 - $58,500',
      features: ['74 autobuses', 'Rutas estratégicas', 'Primera clase', 'All inclusive'],
      coverage: { total: '74', city: 'CDMX-Puebla', growth: 'Rutas en expansión', icon: '🚌' }
    },
    banco: {
      title: 'Bancomer TV',
      subtitle: 'Red nacional BBVA',
      impacts: '20K/sucursal',
      locations: ['1,650 sucursales', 'Cobertura nacional', 'Zonas premium', 'Alto tráfico'],
      price: '$8,500 por sucursal',
      features: ['Hasta 10 pantallas', 'Spot 30 segundos', '8 horas al día', 'Mínimo 6 sucursales'],
      coverage: { total: '1,650', city: 'Nacional', growth: 'Red completa', icon: '🇲🇽' }
    },
    aeropuerto: {
      title: 'Aeropuerto Internacional',
      subtitle: 'Puebla Hermanos Serdán',
      impacts: '280K',
      locations: ['Sala de registro', 'Sala de espera', 'Food court', 'Entrada principal'],
      price: '$29,500 - $33,500',
      features: ['Muros premium', 'Vallas escaleras', 'Wall entrada', 'Alta visibilidad'],
      coverage: { total: '15', city: 'Puebla', growth: 'Espacios premium', icon: '✈️' }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Gradient Mesh Background - More subtle */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/10 via-blue-600/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-1/4 w-[1000px] h-[1000px] bg-gradient-radial from-[#F5D757]/10 via-[#EFBD4A]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-indigo-600/5 via-cyan-600/3 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Header Navigation - Minimal Glass Style */}
      <header className="fixed top-0 w-full z-50">
        {/* Glass morphism effect */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/10 backdrop-blur-2xl border-b border-white/20' 
            : 'bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm'
        }`} />
        
        <nav className="relative max-w-7xl mx-auto px-4 md:px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo Minimal */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl font-thin text-white tracking-widest">
                PUBLI<span className="font-bold bg-gradient-to-r from-[#64B8CF] to-[#F5D757] bg-clip-text text-transparent">XY</span>
              </span>
            </motion.div>
            
            {/* Minimal Menu */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="#metodologia" className="text-white/70 hover:text-white transition-all text-sm font-light">
                Metodología
              </a>
              <a href="#medios" className="text-white/70 hover:text-white transition-all text-sm font-light">
                Medios
              </a>
              <a href="#pricing" className="text-white/70 hover:text-white transition-all text-sm font-light">
                Planes
              </a>
              <a href="#testimonials" className="text-white/70 hover:text-white transition-all text-sm font-light">
                Casos de Éxito
              </a>
              <a href="#faq" className="text-white/70 hover:text-white transition-all text-sm font-light">
                FAQ
              </a>
              <div className="h-8 w-px bg-white/20" />
              <motion.a 
                href="#contact"
                className="text-white text-sm font-medium relative group"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">Contacto</span>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#64B8CF] to-[#F5D757]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>

            {/* Mobile Menu Icon - Minimal */}
            <button className="md:hidden">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section - Interactive Live Refined */}
      <HeroInteractiveLiveRefined />

      {/* The old hero section has been removed and replaced with HeroInteractiveLiveRefined component */}

      {/* Brands Section - New optimized version */}
      <LazySection delay={0.2}>
        <BrandsSection />
      </LazySection>

      {/* Framework P.U.B.L.I.X.Y Section */}
      <LazySection delay={0.3}>
        <section id="metodologia" className="py-8 md:py-12 lg:py-16 relative overflow-hidden bg-black">
          {/* Fondo animado con efecto glass sutil */}
          <div className="absolute inset-0">
            {/* Floating glass orbs */}
            <div className="absolute top-0 -right-1/4 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/10 via-blue-600/3 to-transparent rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#F5D757]/10 via-[#EFBD4A]/3 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            
            <motion.div
              animate={{
                background: [
                  'radial-gradient(circle at 70% 50%, rgba(100, 184, 207, 0.05) 0%, transparent 50%)',
                  'radial-gradient(circle at 30% 50%, rgba(245, 215, 87, 0.05) 0%, transparent 50%)',
                  'radial-gradient(circle at 50% 50%, rgba(123, 211, 226, 0.05) 0%, transparent 50%)',
                  'radial-gradient(circle at 70% 50%, rgba(100, 184, 207, 0.05) 0%, transparent 50%)',
                ],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-4">
                Nuestra metodología
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                <span className="text-white">Descubre cómo podemos transformar</span>
                <span className="block bg-gradient-to-r from-[#64B8CF] to-[#F5D757] bg-clip-text text-transparent">tu estrategia publicitaria</span>
              </h2>
              <p className="text-sm text-gray-400 max-w-2xl mx-auto">
                Framework P.U.B.L.I.X.Y - Resultados medibles con datos reales
              </p>
            </motion.div>

            {/* Glass Enhanced Framework Component */}
            <FrameworkAppleGlassEnhanced />
          </div>
        </section>
      </LazySection>

      {/* Línea divisora sutil */}
      <div className="relative bg-black">
        <motion.div 
          className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gray-700 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Nuestros Medios Section */}
      <LazySection delay={0.4}>
        <section id="medios" className="py-8 md:py-12 lg:py-16 relative overflow-hidden bg-black">
        {/* Fondo animado con efecto glass sutil */}
        <div className="absolute inset-0">
          {/* Floating glass orbs */}
          <div className="absolute top-0 -left-1/4 w-[550px] h-[550px] bg-gradient-radial from-[#F5D757]/10 via-[#EFBD4A]/3 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -right-1/4 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/10 via-blue-600/3 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 30% 50%, rgba(245, 215, 87, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 50%, rgba(100, 184, 207, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(123, 211, 226, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 30% 50%, rgba(245, 215, 87, 0.05) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-4">
              Red de medios premium
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              <span className="text-white">Conecta con tu audiencia en</span>
              <span className="block bg-gradient-to-r from-[#64B8CF] to-[#F5D757] bg-clip-text text-transparent">los mejores espacios</span>
            </h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Ubicaciones estratégicas con impacto garantizado
            </p>
          </motion.div>

          {/* Media Tabs with Glass Effect */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(mediaTypes).map((key) => (
              <motion.button
                key={key}
                onClick={() => setActiveTab(key as 'miyis' | 'paseo' | 'video' | 'banco' | 'aeropuerto')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  activeTab === key
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                style={{
                  background: activeTab === key 
                    ? 'linear-gradient(135deg, rgba(100, 184, 207, 0.15), rgba(123, 211, 226, 0.1))'
                    : 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: activeTab === key 
                    ? '1px solid rgba(100, 184, 207, 0.3)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: activeTab === key 
                    ? '0 4px 20px rgba(100, 184, 207, 0.1)'
                    : 'none',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {mediaTypes[key as keyof typeof mediaTypes].title}
              </motion.button>
            ))}
          </div>

          {/* Media Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-2 gap-12"
            >
              {/* Left - Details with Glass Effect */}
              <div 
                className="relative rounded-2xl p-4 md:p-6 lg:p-8 overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(40px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.05), 0 20px 60px rgba(0, 0, 0, 0.3)',
                }}
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{mediaTypes[activeTab].title}</h3>
                <p className="text-gray-400 mb-6">{mediaTypes[activeTab].subtitle}</p>

                <div className="space-y-4 md:space-y-6">
                  <div>
                    <div className="flex items-baseline space-x-2 mb-3">
                      <span className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] bg-clip-text text-transparent">
                        {mediaTypes[activeTab].impacts}
                      </span>
                      <span className="text-gray-400">impactos mensuales</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#F5D757] mb-3">Ubicaciones</h4>
                    <ul className="space-y-2">
                      {mediaTypes[activeTab].locations.map((loc, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#64B8CF] rounded-full" />
                          <span className="text-gray-300">{loc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#F5D757] mb-3">Características</h4>
                    <ul className="space-y-2">
                      {mediaTypes[activeTab].features.map((feat, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-300">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Coverage Indicator */}
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-4">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center space-x-2">
                      <span>{mediaTypes[activeTab].coverage.icon}</span>
                      <span>Cobertura</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-lg md:text-xl lg:text-2xl font-bold text-white">{mediaTypes[activeTab].coverage.total}</div>
                        <div className="text-xs text-gray-400">Ubicaciones</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-cyan-300">{mediaTypes[activeTab].coverage.city}</div>
                        <div className="text-xs text-gray-400">{mediaTypes[activeTab].coverage.growth}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-400">Inversión desde</div>
                        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#F5D757]">{mediaTypes[activeTab].price}</div>
                      </div>
                      <motion.button
                        className="px-4 md:px-6 py-3 rounded-lg font-semibold text-white"
                        style={{
                          background: 'linear-gradient(135deg, rgba(100, 184, 207, 0.3), rgba(123, 211, 226, 0.3))',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(100, 184, 207, 0.3)',
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Solicitar Cotización
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              
              {/* Right - Image Space */}
              <div className="relative">
                <motion.div 
                  className="h-full min-h-[500px] rounded-2xl overflow-hidden relative flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
                    backdropFilter: 'blur(30px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div className="text-center p-4 md:p-6 lg:p-8">
                    <div className="text-8xl mb-6 opacity-50">
                      {activeTab === 'miyis' && '🚻'}
                      {activeTab === 'paseo' && '🏢'}
                      {activeTab === 'video' && '🚌'}
                      {activeTab === 'banco' && '🏦'}
                      {activeTab === 'aeropuerto' && '✈️'}
                    </div>
                    <p className="text-white/40 text-lg mb-2">{mediaTypes[activeTab].title}</p>
                    <p className="text-white/20 text-sm">Espacio para imagen del medio</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        </section>
      </LazySection>



      {/* Línea divisora sutil */}
      <div className="relative bg-black">
        <motion.div 
          className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gray-700 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Pricing Calculator */}
      <LazySection delay={0.5}>
        <section id="pricing" className="py-8 md:py-12 lg:py-16 relative overflow-hidden bg-black">
        {/* Fondo animado con efecto glass sutil */}
        <div className="absolute inset-0">
          {/* Floating glass orbs */}
          <div className="absolute top-1/2 -left-1/4 w-[450px] h-[450px] bg-gradient-radial from-cyan-500/10 via-blue-600/3 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] bg-gradient-radial from-[#F5D757]/10 via-[#EFBD4A]/3 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }} />
          
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 50% 30%, rgba(123, 211, 226, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 70%, rgba(245, 215, 87, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(100, 184, 207, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 30%, rgba(123, 211, 226, 0.05) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-4">
              Planes flexibles
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              <span className="text-white">Encuentra el plan perfecto para</span>
              <span className="block bg-gradient-to-r from-[#64B8CF] to-[#F5D757] bg-clip-text text-transparent">tu inversión publicitaria</span>
            </h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Transparencia total con resultados medibles desde el primer día
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 md:p-6 lg:p-8">
            {[
              {
                name: 'Starter',
                price: '$25,000',
                period: '/mes',
                description: 'Prueba piloto perfecta para validar resultados',
                features: [
                  '1 tipo de medio',
                  '3 ubicaciones premium',
                  'Dashboard básico',
                  'Reporte mensual',
                  'Soporte por email'
                ],
                cta: 'Empezar piloto',
                popular: false
              },
              {
                name: 'Growth',
                price: '$85,000',
                period: '/mes',
                description: 'Mix optimizado para crecimiento sostenido',
                features: [
                  '3 tipos de medios',
                  '10+ ubicaciones premium',
                  'Dashboard avanzado',
                  'Reportes semanales',
                  'Account Manager dedicado',
                  'Optimización con IA'
                ],
                cta: 'Más popular',
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                description: 'Solución completa para grandes marcas',
                features: [
                  'Todos los medios',
                  'Cobertura nacional',
                  'Dashboard personalizado',
                  'Reportes en tiempo real',
                  'Equipo dedicado',
                  'SLA garantizado',
                  'Integración API'
                ],
                cta: 'Contactar ventas',
                popular: false
              }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-xl p-6 border ${
                  plan.popular ? 'border-cyan-500/20' : 'border-white/5'
                }`}
                style={{
                  background: plan.popular 
                    ? 'linear-gradient(135deg, rgba(100, 184, 207, 0.05), rgba(123, 211, 226, 0.02))'
                    : 'rgba(255, 255, 255, 0.01)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: plan.popular 
                    ? '0 10px 40px rgba(100, 184, 207, 0.1)'
                    : '0 4px 20px rgba(0, 0, 0, 0.2)',
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] text-white px-3 py-0.5 rounded-full text-xs font-medium">
                    Recomendado
                  </div>
                )}
                
                <div className="mb-4 md:mb-6 lg:mb-8">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-4 md:mb-6 lg:mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  className={`block w-full py-2.5 rounded-lg font-medium text-center transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] text-white'
                      : 'border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
        </section>
      </LazySection>

      {/* Testimonials Section - Adding soul to the site */}
      <LazySection delay={0.6}>
        <section id="testimonials" className="relative">
          <TestimonialsSection />
        </section>
      </LazySection>


      {/* Contact Form Section - Minimal UI like Hero */}
      <LazySection delay={0.7}>
        <section id="contact" className="py-8 md:py-12 lg:py-16 relative overflow-hidden bg-black">
        {/* Fondo animado con efecto glass sutil */}
        <div className="absolute inset-0">
          {/* Floating glass orbs */}
          <div className="absolute bottom-0 -left-1/3 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 via-blue-600/3 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-0 -right-1/3 w-[550px] h-[550px] bg-gradient-radial from-[#F5D757]/10 via-[#EFBD4A]/3 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
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
        
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-white/[0.02] border border-white/[0.08] rounded-full mb-6">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-500">Respuesta en menos de 2 horas</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-white">Hablemos de</span>
                <span className="block bg-gradient-to-r from-[#64B8CF] to-[#F5D757] bg-clip-text text-transparent">resultados reales</span>
              </h2>
              
              <p className="text-sm text-gray-500 mb-6">
                Completa el formulario y un especialista te contactará para diseñar una estrategia personalizada
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-500">Análisis gratuito de tu mercado objetivo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-500">Proyección de ROI personalizada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-500">Demo en vivo del dashboard</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-xs text-gray-600">
                <div className="flex items-center space-x-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>222 358 9271</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contacto@publixy.mx</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div 
                className="relative rounded-2xl p-6 overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(40px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.02), 0 20px 60px rgba(0, 0, 0, 0.3)',
                }}
              >
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
        </section>
      </LazySection>

      {/* FAQ Section - After Contact Form */}
      <LazySection delay={0.8}>
        <section id="faq" className="relative">
          <FAQSection />
        </section>
      </LazySection>

      {/* Live Metrics Bar - Real-time viewer counter */}
      <LazySection delay={0.9}>
        <section id="metricas" className="relative">
          <LiveMetricsBar />
        </section>
      </LazySection>

      {/* Footer - Glass Style Professional */}
      <footer className="relative overflow-hidden bg-black">
        {/* Fondo animado sutil */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 10% 50%, rgba(100, 184, 207, 0.03) 0%, transparent 30%)',
                'radial-gradient(circle at 90% 50%, rgba(245, 215, 87, 0.03) 0%, transparent 30%)',
                'radial-gradient(circle at 50% 50%, rgba(123, 211, 226, 0.03) 0%, transparent 30%)',
                'radial-gradient(circle at 10% 50%, rgba(100, 184, 207, 0.03) 0%, transparent 30%)',
              ],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12">
          {/* Glass container */}
          <div 
            className="relative rounded-2xl p-4 md:p-6 lg:p-8 overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.01)',
              backdropFilter: 'blur(20px) saturate(150%)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.01)',
            }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:p-6 lg:p-8">
              {/* Logo & Description */}
              <div className="lg:col-span-2">
                <motion.div 
                  className="flex items-center mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-2xl font-thin text-white tracking-widest">
                    PUBLI<span className="font-bold bg-gradient-to-r from-[#64B8CF] to-[#F5D757] bg-clip-text text-transparent">XY</span>
                  </span>
                </motion.div>
                <p className="text-xs text-gray-500 mb-4 max-w-sm">
                  La Red de Medios Premium más Inteligente de México con +1,650 ubicaciones estratégicas
                </p>
                
                {/* Social Links */}
                <div className="flex items-center space-x-3">
                  <motion.a 
                    href="https://wa.me/522223589271" 
                    target="_blank"
                    className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.05] transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/company/publixy" 
                    target="_blank"
                    className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.05] transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="mailto:contacto@publixy.mx" 
                    className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.05] transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">Soluciones</h4>
                <ul className="space-y-2">
                  <li><a href="#metodologia" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Metodología PUBLIXY</a></li>
                  <li><a href="#medios" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Red de Medios</a></li>
                  <li><a href="#pricing" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Planes y Precios</a></li>
                  <li><a href="#testimonials" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Casos de Éxito</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">Contacto</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="tel:2223589271" className="flex items-center space-x-2 text-xs text-gray-600 hover:text-gray-400 transition-colors">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>222 358 9271</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contacto@publixy.mx" className="flex items-center space-x-2 text-xs text-gray-600 hover:text-gray-400 transition-colors">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>contacto@publixy.mx</span>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center space-x-2 text-xs text-gray-600">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      <span>Puebla, México</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-4 md:mt-6 lg:mt-8 pt-6 border-t border-white/[0.05]">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-xs text-gray-600 mb-2 md:mb-0">
                  © 2024 Publixy. Todos los derechos reservados.
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-600">
                  <a href="#" className="hover:text-gray-400 transition-colors">Privacidad</a>
                  <span className="text-gray-700">•</span>
                  <a href="#" className="hover:text-gray-400 transition-colors">Términos</a>
                  <span className="text-gray-700">•</span>
                  <a href="#" className="hover:text-gray-400 transition-colors">Cookies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}