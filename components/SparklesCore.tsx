"use client"

import React, { useEffect, useRef } from "react"

interface ParticleProps {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
}

export const SparklesCore = ({
  className,
  minSize = 1,
  maxSize = 3,
  particleColor = "#ffffff",
  particleDensity = 100,
}: ParticleProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: any[] = []

    const isMobile = window.innerWidth < 768
    const actualDensity = isMobile ? Math.floor(particleDensity / 2) : particleDensity

    const resize = () => {
      const { clientWidth, clientHeight } = canvas.parentElement || { clientWidth: 0, clientHeight: 0 }
      canvas.width = clientWidth * (window.devicePixelRatio || 1)
      canvas.height = clientHeight * (window.devicePixelRatio || 1)
      canvas.style.width = `${clientWidth}px`
      canvas.style.height = `${clientHeight}px`
      initParticles()
    }

    const initParticles = () => {
      particles = []
      for (let i = 0; i < actualDensity; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speed: Math.random() * 0.5 + 0.2,
          opacity: Math.random(),
          direction: Math.random() > 0.5 ? 1 : -1,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((p) => {
        p.y -= p.speed
        p.opacity += 0.01 * p.direction
        
        if (p.opacity > 0.8 || p.opacity < 0.1) {
          p.direction *= -1
        }

        if (p.y < -10) {
          p.y = canvas.height + 10
          p.x = Math.random() * canvas.width
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.globalAlpha = Math.max(0, p.opacity)
        ctx.fill()
        
        // Add subtle glow
        ctx.shadowBlur = p.size * 2
        ctx.shadowColor = particleColor
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    const parent = canvas.parentElement
    const resizeObserver = new ResizeObserver(resize)
    if (parent) resizeObserver.observe(parent)

    resize()
    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
      if (parent) resizeObserver.unobserve(parent)
    }
  }, [particleColor, particleDensity, minSize, maxSize])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
    />
  )
}

export default SparklesCore
