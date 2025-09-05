'use client'

import { useState, useRef, useEffect } from 'react'
import { useMotionValue, useAnimation, PanInfo } from 'framer-motion'

interface UseSwipeGestureProps {
  totalItems: number
  autoPlay?: boolean
  autoPlayInterval?: number
}

export const useSwipeGesture = ({ 
  totalItems, 
  autoPlay = false, 
  autoPlayInterval = 5000 
}: UseSwipeGestureProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const x = useMotionValue(0)
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return
    
    const interval = setInterval(() => {
      handleNext()
    }, autoPlayInterval)
    
    return () => clearInterval(interval)
  }, [currentIndex, autoPlay, autoPlayInterval])
  
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % totalItems
    setCurrentIndex(nextIndex)
    controls.start({ x: -nextIndex * 100 + '%' })
  }
  
  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
    controls.start({ x: -prevIndex * 100 + '%' })
  }
  
  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50
    const velocity = info.velocity.x
    const distance = info.offset.x
    
    // Determine swipe direction with velocity consideration
    if (distance > threshold || velocity > 500) {
      // Swiped right - go to previous
      handlePrev()
    } else if (distance < -threshold || velocity < -500) {
      // Swiped left - go to next
      handleNext()
    } else {
      // Snap back to current position
      controls.start({ x: -currentIndex * 100 + '%' })
    }
  }
  
  const goToIndex = (index: number) => {
    setCurrentIndex(index)
    controls.start({ x: -index * 100 + '%' })
  }
  
  // Touch feedback for mobile
  const handleTouchStart = () => {
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing'
    }
  }
  
  const handleTouchEnd = () => {
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab'
    }
  }
  
  return {
    currentIndex,
    x,
    controls,
    containerRef,
    handleNext,
    handlePrev,
    handleDragEnd,
    goToIndex,
    handleTouchStart,
    handleTouchEnd,
    dragConstraints: { left: 0, right: 0 },
    dragElastic: 0.2,
    dragTransition: { 
      bounceStiffness: 300, 
      bounceDamping: 30 
    }
  }
}