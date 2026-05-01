'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github, Linkedin, ArrowUpRight, MessageSquare } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 sm:px-10 lg:px-16 relative bg-transparent overflow-hidden border-t border-white/5 ">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
        
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
             <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
             <span className="text-[10px] font-mono font-bold text-red-500 tracking-widest uppercase">Current Status: Open to Collaboration</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-2xl mx-auto leading-[0.9] text-white">
            Let's build the <span className="text-white/40">future of intelligence</span> together.
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
           <a href="mailto:sdeb14354@gmail.com" className="glass-strong px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-black/10 dark:hover:bg-white/10 transition-all group">
             <Mail className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
             <span className="font-semibold tracking-tight text-white/90">Drop me an email</span>
             <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
           </a>
           
           <a href="https://linkedin.com/in/supriya-deb" target="_blank" className="glass px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-black/5  transition-all group">
             <Linkedin className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
             <span className="font-semibold tracking-tight text-white/60">LinkedIn Profile</span>
           </a>
        </div>

        <div className="pt-20 grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-20 border-t border-white/5  w-full">
           <div className="space-y-4 text-left">
             <div className="text-[10px] font-mono text-white/20 tracking-wider uppercase">Social</div>
             <div className="flex flex-col gap-2">
               <a href="https://github.com/whizey" target="_blank" className="text-sm text-white/60 hover:text-white transition-colors transition-all">GitHub</a>
               <a href="https://linkedin.com/in/supriya-deb" target="_blank" className="text-sm text-white/60 hover:text-white transition-colors transition-all">LinkedIn</a>
             </div>
           </div>

           <div className="space-y-4 text-left">
             <div className="text-[10px] font-mono text-white/20 tracking-wider uppercase">Location</div>
             <div className="text-sm text-white/60 leading-relaxed">
               New Delhi, India <br />
               IST (UTC+5:30)
             </div>
           </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
