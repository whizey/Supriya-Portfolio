'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import BlurText from './BlurText'

interface IntroScreenProps {
  onEnter: () => void
}

const IntroScreen = ({ onEnter }: IntroScreenProps) => {
  const [isExiting, setIsExiting] = useState(false)

  const handleEnter = () => {
    setIsExiting(true)
    setTimeout(() => {
      onEnter()
    }, 400)
  }

  return (
    <div className="fixed inset-0 z-[300] bg-[#020205] flex items-center justify-center overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)]" />
      
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl px-6 text-center space-y-12"
      >
        <div className="space-y-4">
           <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.1 }}
             className="flex justify-center"
           >
             <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-red-500">
               <Sparkles size={24} />
             </div>
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.15 }}
             className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40"
           >
             Data Science & AI
           </motion.h2>
           
           <h1 className="text-[12vw] md:text-7xl font-bold tracking-tighter text-white">
             <BlurText
               text="Supriya Deb"
               delay={40}
               animateBy="letters"
               direction="top"
             />
           </h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 leading-relaxed text-sm md:text-lg max-w-md mx-auto"
        >
          Extracting intelligence from data. Focused on building high-performance analytical systems and shifting insights into real-world impact.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          onClick={handleEnter}
          className="group relative px-8 py-4 md:px-10 md:py-5 bg-white text-black rounded-full font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase overflow-hidden hover:scale-105 active:scale-95 transition-all"
        >
          <div className="relative z-10 flex items-center gap-3">
             Explore My World <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
          <motion.div 
            className="absolute inset-0 bg-red-600"
            initial={{ x: '-100%' }}
            whileHover={{ x: '0%' }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>
      </motion.div>

    </div>
  )
}

export default IntroScreen
