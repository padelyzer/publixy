'use client'

import { useState } from 'react'

interface FrameworkItem {
  letter: string
  title: string
  description: string
}

const frameworkData: FrameworkItem[] = [
  { letter: 'P', title: 'Precisión', description: 'Segmentación A/B/B+ verificable' },
  { letter: 'U', title: 'Ubicaciones Premium', description: 'Bancos, aeropuertos, restaurantes exclusivos' },
  { letter: 'B', title: 'Basado en Datos', description: 'Dashboard transparente en tiempo real' },
  { letter: 'L', title: 'Localización', description: 'Dominio Puebla-CDMX con expansión nacional' },
  { letter: 'I', title: 'Impacto Medible', description: 'ROI comprobable con métricas verificables' },
  { letter: 'X', title: 'Experiencia Premium', description: 'Account management personalizado' },
  { letter: 'Y', title: 'Yield Optimization', description: 'Optimización continua de performance' }
]

export default function HexagonFramework() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 max-w-6xl mx-auto">
      {frameworkData.map((item, index) => (
        <div
          key={index}
          className="relative group cursor-pointer"
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <div className="hexagon w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-publixy-blue to-publixy-turquoise flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:from-publixy-gold group-hover:to-yellow-400">
            <span className="text-white text-3xl md:text-4xl font-bold">{item.letter}</span>
          </div>
          
          <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-48 bg-white rounded-lg shadow-xl p-4 z-10 transition-all duration-300 ${
            activeIndex === index ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
          }`}>
            <h4 className="text-publixy-blue font-bold text-sm mb-1">{item.title}</h4>
            <p className="text-gray-600 text-xs">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}