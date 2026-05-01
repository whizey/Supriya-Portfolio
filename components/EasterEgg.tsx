'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EasterEgg = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [sequence, setSequence] = useState<string[]>([])
  
  // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...sequence, e.key].slice(-konamiCode.length)
      setSequence(newSequence)

      // Check if sequence matches Konami Code
      if (newSequence.join(',') === konamiCode.join(',')) {
        setShowEasterEgg(true)
        setSequence([])
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
          setShowEasterEgg(false)
        }, 5000)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [sequence])

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100]"
        >
          <div className="glass-strong p-12 rounded-3xl border-4 border-neon-purple shadow-2xl text-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-8xl mb-6"
            >
              🎉
            </motion.div>
            <h2 className="text-4xl font-bold text-gradient mb-4">
              You Found It!
            </h2>
            <p className="text-xl text-muted-foreground mb-2">
              Konami Code Master! 🎮
            </p>
            <p className="text-sm text-neon-purple">
              You're clearly a developer. Let's work together! 🚀
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EasterEgg
