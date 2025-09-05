'use client'

import { useState } from 'react'
import HeaderVariant1 from '@/components/headers/HeaderVariant1'
import HeaderVariant2 from '@/components/headers/HeaderVariant2'
import HeaderVariant3 from '@/components/headers/HeaderVariant3'
import HeaderVariant4 from '@/components/headers/HeaderVariant4'
import HeaderVariant5 from '@/components/headers/HeaderVariant5'

export default function HeaderDemoPage() {
  const [selectedHeader, setSelectedHeader] = useState(1)
  const [scrolled, setScrolled] = useState(false)

  const headers = [
    { id: 1, name: 'Classic Professional', component: HeaderVariant1 },
    { id: 2, name: 'With Top Bar', component: HeaderVariant2 },
    { id: 3, name: 'Centered Logo', component: HeaderVariant3 },
    { id: 4, name: 'Animated Modern', component: HeaderVariant4 },
    { id: 5, name: 'Minimal Glass', component: HeaderVariant5 },
  ]

  const CurrentHeader = headers[selectedHeader - 1].component

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#0d1f2d] to-[#0f1629] text-white">
      {/* Current Header */}
      <CurrentHeader scrolled={scrolled} />
      
      {/* Hero Section with Background */}
      <section className="relative min-h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1698807390276-725f3a7e41cf?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-blue-900/20" />
        </div>
        
        <div className="relative z-10 text-center px-6 pt-32 pb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Selector de Headers
            <span className="block text-3xl md:text-4xl mt-4 bg-gradient-to-r from-[#64B8CF] to-[#F5D757] bg-clip-text text-transparent">
              Elige tu diseño favorito
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explora diferentes opciones de diseño para el header de Publixy
          </p>
        </div>
      </section>

      {/* Header Selector */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Opciones de Header</h2>
            <p className="text-gray-400">Haz clic en cualquier opción para previsualizar</p>
          </div>

          {/* Options Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {headers.map((header) => (
              <button
                key={header.id}
                onClick={() => setSelectedHeader(header.id)}
                className={`p-6 rounded-xl border-2 transition-all ${
                  selectedHeader === header.id
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : 'border-white/20 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="text-4xl mb-3">
                  {header.id === 1 && '🎯'}
                  {header.id === 2 && '📊'}
                  {header.id === 3 && '⭐'}
                  {header.id === 4 && '🚀'}
                  {header.id === 5 && '💎'}
                </div>
                <div className="text-sm font-semibold">{header.name}</div>
                <div className="text-xs text-gray-400 mt-1">Opción {header.id}</div>
              </button>
            ))}
          </div>

          {/* Scroll Simulation */}
          <div className="text-center">
            <button
              onClick={() => setScrolled(!scrolled)}
              className="px-8 py-3 bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] text-white font-semibold rounded-lg hover:shadow-xl transition-all"
            >
              {scrolled ? 'Simular Sin Scroll' : 'Simular Con Scroll'}
            </button>
          </div>

          {/* Features Description */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Opción 1: Classic</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Logo a la izquierda</li>
                <li>✓ Menú centrado</li>
                <li>✓ CTA destacado a la derecha</li>
                <li>✓ Diseño tradicional y confiable</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Opción 2: Top Bar</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Barra superior con info</li>
                <li>✓ Logo con ícono</li>
                <li>✓ CTA dorado destacado</li>
                <li>✓ Métricas en tiempo real</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Opción 3: Centered</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Logo centrado prominente</li>
                <li>✓ Menú balanceado</li>
                <li>✓ Diseño simétrico</li>
                <li>✓ Tagline descriptivo</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Opción 4: Animated</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Logo animado</li>
                <li>✓ Efectos hover avanzados</li>
                <li>✓ Menú móvil hamburguesa</li>
                <li>✓ Transiciones suaves</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Opción 5: Minimal</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Diseño ultra minimalista</li>
                <li>✓ Glassmorphism effect</li>
                <li>✓ Tipografía elegante</li>
                <li>✓ Máxima legibilidad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}