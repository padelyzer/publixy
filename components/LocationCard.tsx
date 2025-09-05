interface LocationCardProps {
  name: string
  impact: string
  price: string
  delay?: number
}

export default function LocationCard({ name, impact, price, delay = 0 }: LocationCardProps) {
  return (
    <div 
      className="bg-white rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col space-y-3">
        <h3 className="text-lg font-bold text-publixy-blue">{name}</h3>
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-publixy-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span className="text-sm text-gray-600">{impact}</span>
        </div>
        <div className="pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-500">Desde</span>
          <p className="text-xl font-bold text-publixy-gold">{price}</p>
        </div>
      </div>
    </div>
  )
}