'use client'

import { useState } from 'react'
import HeaderVariant5 from '@/components/headers/HeaderVariant5'
import HeroVariant1 from '@/components/heroes/HeroVariant1'
import HeroVariant2 from '@/components/heroes/HeroVariant2'
import HeroVariant3 from '@/components/heroes/HeroVariant3'
import HeroVariant4 from '@/components/heroes/HeroVariant4'
import HeroVariant5 from '@/components/heroes/HeroInteractiveLiveRefined'

export default function HeroDemoPage() {
  const [selectedHero, setSelectedHero] = useState(1)
  const [scrolled, setScrolled] = useState(false)

  const heroes = [
    { 
      id: 1, 
      name: 'Classic Centered', 
      description: 'Diseño centrado con imagen de fondo y estadísticas',
      component: HeroVariant1 
    },
    { 
      id: 2, 
      name: 'Split Layout', 
      description: 'Diseño dividido con contenido y visual 3D',
      component: HeroVariant2 
    },
    { 
      id: 3, 
      name: 'Dynamic Words', 
      description: 'Palabras animadas y efectos futuristas',
      component: HeroVariant3 
    },
    { 
      id: 4, 
      name: 'Stats Grid', 
      description: 'Grid con estadísticas y diseño balanceado',
      component: HeroVariant4 
    },
    { 
      id: 5, 
      name: 'Interactive Live', 
      description: 'Ubicaciones en vivo y calculadora ROI',
      component: HeroVariant5 
    },
  ]

  const CurrentHero = heroes[selectedHero - 1].component

  return (
    <div className="min-h-screen bg-black">
      {/* Header - Using Minimal Glass */}
      <HeaderVariant5 scrolled={scrolled} />
      
      {/* Current Hero */}
      <CurrentHero />
      
      {/* Hero Selector */}
      <section className="py-20 bg-gradient-to-br from-[#0a0014] via-[#0d1f2d] to-[#0f1629]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Selector de Hero Sections</h2>
            <p className="text-gray-400 text-lg">Explora diferentes opciones de diseño para el hero de Publixy</p>
          </div>

          {/* Options Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {heroes.map((hero) => (
              <button
                key={hero.id}
                onClick={() => setSelectedHero(hero.id)}
                className={`group relative p-6 rounded-2xl border-2 transition-all transform hover:scale-105 ${
                  selectedHero === hero.id
                    ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 shadow-lg shadow-cyan-500/30'
                    : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30'
                }`}
              >
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {hero.id === 1 && '🎯'}
                  {hero.id === 2 && '🎨'}
                  {hero.id === 3 && '🚀'}
                  {hero.id === 4 && '📊'}
                  {hero.id === 5 && '⚡'}
                </div>
                
                {/* Name */}
                <div className={`text-lg font-bold mb-2 ${
                  selectedHero === hero.id ? 'text-cyan-300' : 'text-white'
                }`}>
                  {hero.name}
                </div>
                
                {/* Description */}
                <div className="text-xs text-gray-400">
                  {hero.description}
                </div>
                
                {/* Selected Indicator */}
                {selectedHero === hero.id && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Features Comparison */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Características de cada opción</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className={`p-4 rounded-xl transition-all ${
                selectedHero === 1 ? 'bg-cyan-500/20 border border-cyan-500/50' : 'bg-white/5'
              }`}>
                <h4 className="text-cyan-400 font-bold mb-2">Opción 1: Classic</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>✓ Imagen de fondo fullscreen</li>
                  <li>✓ Contenido centrado</li>
                  <li>✓ Estadísticas destacadas</li>
                  <li>✓ CTAs prominentes</li>
                </ul>
              </div>
              
              <div className={`p-4 rounded-xl transition-all ${
                selectedHero === 2 ? 'bg-cyan-500/20 border border-cyan-500/50' : 'bg-white/5'
              }`}>
                <h4 className="text-cyan-400 font-bold mb-2">Opción 2: Split</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>✓ Layout en 2 columnas</li>
                  <li>✓ Cards 3D animados</li>
                  <li>✓ Gradientes dinámicos</li>
                  <li>✓ Badge de estado</li>
                </ul>
              </div>
              
              <div className={`p-4 rounded-xl transition-all ${
                selectedHero === 3 ? 'bg-cyan-500/20 border border-cyan-500/50' : 'bg-white/5'
              }`}>
                <h4 className="text-cyan-400 font-bold mb-2">Opción 3: Dynamic</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>✓ Palabras rotativas</li>
                  <li>✓ Grid pattern bg</li>
                  <li>✓ Elementos flotantes</li>
                  <li>✓ Contador en vivo</li>
                </ul>
              </div>
              
              <div className={`p-4 rounded-xl transition-all ${
                selectedHero === 4 ? 'bg-cyan-500/20 border border-cyan-500/50' : 'bg-white/5'
              }`}>
                <h4 className="text-cyan-400 font-bold mb-2">Opción 4: Stats</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>✓ Grid de 3 columnas</li>
                  <li>✓ Métricas laterales</li>
                  <li>✓ Features cards</li>
                  <li>✓ Trust bar inferior</li>
                </ul>
              </div>
              
              <div className={`p-4 rounded-xl transition-all ${
                selectedHero === 5 ? 'bg-cyan-500/20 border border-cyan-500/50' : 'bg-white/5'
              }`}>
                <h4 className="text-cyan-400 font-bold mb-2">Opción 5: Live</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>✓ Calculadora ROI</li>
                  <li>✓ Ubicaciones en vivo</li>
                  <li>✓ Cards interactivos</li>
                  <li>✓ Gradiente animado</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setScrolled(!scrolled)}
              className="px-8 py-3 bg-gradient-to-r from-[#64B8CF] to-[#7BD3E2] text-white font-semibold rounded-xl hover:shadow-xl transition-all"
            >
              {scrolled ? 'Simular Sin Scroll' : 'Simular Con Scroll'}
            </button>
            <button
              onClick={() => setSelectedHero(Math.floor(Math.random() * 5) + 1)}
              className="px-8 py-3 bg-gradient-to-r from-[#EFBD4A] to-[#F5D757] text-gray-900 font-semibold rounded-xl hover:shadow-xl transition-all"
            >
              Selección Aleatoria
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}