'use client'

import React, { useState } from 'react'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Approach from '@/components/Approach'


import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import ContactCard from '@/components/ContactCard'
import CommandPalette from '@/components/CommandPalette'
import EasterEgg from '@/components/EasterEgg'
import ScrollProgress from '@/components/ScrollProgress'

import ScrollSection from '@/components/ScrollSection'
import SmoothScroll from '@/components/SmoothScroll'
import { motion, AnimatePresence } from 'framer-motion'

import IntroScreen from '@/components/IntroScreen'

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [hasEntered, setHasEntered] = useState(false)
  
  React.useEffect(() => {
    if (hasEntered) {
      window.scrollTo(0, 0)
      document.body.style.overflow = 'auto'
    }
  }, [hasEntered])

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <AnimatePresence>
        {!hasEntered && (
          <IntroScreen key="intro-screen" onEnter={() => setHasEntered(true)} />
        )}
      </AnimatePresence>

      {hasEntered && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.0, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1 
          }}
        >
          <ContactCard isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
          <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none">
            <div className="liquid-bg grid-background" />
          </div>
          <ScrollProgress />

          <CommandPalette />
          <EasterEgg />
          <Navbar onContactClick={() => setIsContactOpen(true)} />

          <SmoothScroll>
            <Hero onContactClick={() => setIsContactOpen(true)} />
            
            <ScrollSection id="about">
              <About />
            </ScrollSection>
            
            <Approach />
            
            <ScrollSection id="experience">
              <Experience />
            </ScrollSection>
            
            <ScrollSection id="projects">
              <Projects />
            </ScrollSection>
            



            <ScrollSection id="contact">
              <Contact />
            </ScrollSection>
            
            <ScrollSection id="footer">
              <Footer />
            </ScrollSection>
          </SmoothScroll>
        </motion.div>
      )}
    </main>
  )
}
