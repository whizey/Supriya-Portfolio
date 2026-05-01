import { motion, useSpring, useMotionValue } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { Button } from './ui/button'
import { ArrowDown, Github, Linkedin, Mail, Calendar, User } from 'lucide-react'
import ParticleNetwork from './ParticleNetwork'
import BlurText from './BlurText'

const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const distanceX = clientX - centerX
    const distanceY = clientY - centerY
    x.set(distanceX * 0.3)
    y.set(distanceY * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  )
}



const Hero = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background layer cleared for performance and LiquidEther */}
      <div className="absolute inset-0 z-0 bg-transparent" />

      {/* Decorative Gradients for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        
        {/* Left Side: Large Typography */}
        <div className="space-y-8 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="text-xs font-semibold tracking-[0.3em] text-white/40 uppercase">AI Engineer Prototype</span>
            <h1 className="text-[15vw] md:text-[clamp(2rem,10vw,6rem)] font-bold tracking-tighter leading-[0.9] flex flex-col text-white">
              <BlurText
                text="Supriya"
                delay={160}
                animateBy="letters"
                direction="top"
              />
            </h1>
            <div className="flex items-center gap-3 pt-4">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest leading-none">Data Science & Machine Learning Engineer</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <a href="#projects" className="group relative glass px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-white/5 transition-all active:scale-95 border border-white/5">
              <div className="p-2 rounded-lg bg-white/5">
                <ArrowDown className="w-5 h-5 text-white/60 group-hover:translate-y-0.5 transition-transform" />
              </div>
              <span className="font-semibold tracking-tight text-white/90">Explore My Work</span>
            </a>
            
            <button 
              onClick={onContactClick}
              className="group relative glass-strong px-8 py-4 rounded-2xl flex items-center gap-3 text-white/90 hover:bg-white/5 transition-all active:scale-95 border border-white/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors" />
              <User className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="font-semibold tracking-tight">My Profile Card</span>
            </button>

            <div className="flex flex-col pl-2 border-l border-white/10">
               <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Base_Location</span>
               <span className="text-xs font-bold text-white/60 tracking-tight">New Delhi, India</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Narrative & Profile Image Container */}
        <div className="space-y-10 lg:pl-12 lg:border-l border-white/5 pb-10 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-32 h-32 mb-4 group"
          >
             <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full group-hover:bg-red-500/40 transition-colors" />
             <div className="relative w-full h-full rounded-full border border-white/10 overflow-hidden glass mix-blend-luminosity hover:mix-blend-normal transition-all duration-500">
                {/* Note: Profile photo from chat */}
                <img 
                  src="https://github.com/whizey.png" 
                  alt="Supriya Deb"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                />
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 max-w-md"
          >
            <p className="text-lg text-white/60 leading-relaxed font-medium capitalize">
              I specialize in Data Science, Machine Learning, and Analytics — turning complex data into <span className="text-white">actionable insights and models</span>.
            </p>
            
            <p className="text-sm text-white/40 leading-relaxed italic">
              "I'm a Data Scientist who builds segmentation models, ETL pipelines, and robust analytical systems using Python, SQL, and Cloud databases."
            </p>
          </motion.div>

          {/* Social Links Mini */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-[1px] bg-white/10" />
            <div className="flex gap-4">
               <a href="https://github.com/whizey" target="_blank"><Github className="w-4 h-4 text-white/30 hover:text-white transition-colors" /></a>
               <a href="https://linkedin.com/in/supriya-deb" target="_blank"><Linkedin className="w-4 h-4 text-white/30 hover:text-white transition-colors" /></a>
               <a href="mailto:sdeb14354@gmail.com"><Mail className="w-4 h-4 text-white/30 hover:text-white transition-colors" /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
