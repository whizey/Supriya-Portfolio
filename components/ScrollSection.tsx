'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ScrollSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

const ScrollSection = ({ children, className = '', id }: ScrollSectionProps) => {
  const containerRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [40, 0, 0, -40])

  return (
    <motion.section
      id={id}
      ref={containerRef}
      style={{
        opacity,
        y
      }}
      className={`will-change-[transform,opacity,filter] ${className}`}
    >
      {children}
    </motion.section>
  )
}

export default ScrollSection
