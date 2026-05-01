'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const DynamicBackground = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDark, setIsDark] = useState(true)

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const gridX = useTransform(springX, (x) => (x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * 0.02)
  const gridY = useTransform(springY, (y) => (y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * 0.02)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    
    const setSize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    setSize()
    window.addEventListener('resize', setSize)
    window.addEventListener('mousemove', handleMouseMove)

    // Particle System
    const particles: any[] = []
    const particleCount = 40
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      })
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height)
      
      // Dark theme colors
      const particleColor = 'rgba(0, 240, 255, 0.2)'
      const strokeColor = 'rgba(0, 240, 255, 0.05)'
      
      ctx.fillStyle = particleColor
      ctx.strokeStyle = strokeColor
      
      const mX = mouseX.get()
      const mY = mouseY.get()

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        const dx = p.x - mX
        const dy = p.y - mY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mX, mY)
          ctx.globalAlpha = (200 - dist) / 2000
          ctx.stroke()
          ctx.globalAlpha = 1
        }
        
        for(let j = i + 1; j < particles.length; j++) {
           const p2 = particles[j]
           const dx2 = p.x - p2.x
           const dy2 = p.y - p2.y
           const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)
           if (dist2 < 150) {
             ctx.beginPath()
             ctx.moveTo(p.x, p.y)
             ctx.lineTo(p2.x, p2.y)
             ctx.globalAlpha = (150 - dist2) / 3000
             ctx.stroke()
             ctx.globalAlpha = 1
           }
        }
      })

      requestAnimationFrame(drawParticles)
    }

    const animId = requestAnimationFrame(drawParticles)

    return () => {
      window.removeEventListener('resize', setSize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animId)
    }
  }, [mouseX, mouseY])

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#020205]">
      {/* Parallax Grid System */}
      <motion.div 
        className="absolute inset-[-100px] opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          x: gridX,
          y: gridY,
        }}
      />

      {/* Dynamic Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.5 }}
      />

      {/* Dynamic Interaction Glow */}
      <motion.div
        className="absolute -inset-[500px] pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, rgba(0,240,255,0.1) 0%, transparent 70%)`,
          x: springX,
          y: springY,
          width: '1000px',
          height: '1000px',
        }}
      />

      {/* Scanning Beam Effect */}
      <motion.div 
        animate={{ 
          y: ['0vh', '100vh', '0vh'],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-[2px] opacity-30"
      />

      {/* Depth Static Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px]" />

      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none noise" />
    </div>
  )
}

export default DynamicBackground
