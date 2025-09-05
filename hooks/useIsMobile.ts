'use client'

import { useState, useEffect } from 'react'

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint de Tailwind
    }

    // Check inicial
    checkMobile()

    // Listener para cambios de tamaño
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

// Hook para reducir animaciones en móvil
export const useMobileAnimation = (desktopAnimation: any, mobileAnimation: any = {}) => {
  const isMobile = useIsMobile()
  return isMobile ? mobileAnimation : desktopAnimation
}

// Hook para valores responsivos
export const useResponsiveValue = <T,>(mobileValue: T, desktopValue: T): T => {
  const isMobile = useIsMobile()
  return isMobile ? mobileValue : desktopValue
}