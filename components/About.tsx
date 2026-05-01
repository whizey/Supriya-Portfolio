'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Target, LineChart, LayoutDashboard, Atom } from 'lucide-react'
import TechToolkit from './TechToolkit'

const skillCards = [
  { icon: Target, title: 'ML / AI', text: 'Scikit-learn · TF' },
  { icon: LineChart, title: 'Data Analysis', text: 'Pandas · NumPy' },
  { icon: LayoutDashboard, title: 'Visualization', text: 'Power BI · Matplotlib' },
  { icon: Atom, title: 'Cloud / DB', text: 'Snowflake · AWS · SQL' }
]



const About = () => {
  return (
    <section id="about" className="py-32 px-6 sm:px-10 lg:px-16 relative bg-transparent border-y border-white/5 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Core Focus & Approach</h2>
              <p className="text-white/60 leading-relaxed max-w-lg">
                I focus on extracting actionable insights from complex datasets and building automated, end-to-end data pipelines. My approach combines rigorous statistical analysis with robust engineering.
              </p>
            </div>

            <div className="space-y-4">
               <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-1 h-1 rounded-full bg-red-500 group-hover:scale-[3] transition-transform" />
                  <span className="text-sm font-medium text-white/80 transition-colors group-hover:text-white">Building End-to-End ETL Pipelines</span>
               </div>
               <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-1 h-1 rounded-full bg-red-500 group-hover:scale-[3] transition-transform" />
                  <span className="text-sm font-medium text-white/80 transition-colors group-hover:text-white">Developing Predictive ML Models</span>
               </div>
               <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-1 h-1 rounded-full bg-red-500 group-hover:scale-[3] transition-transform" />
                  <span className="text-sm font-medium text-white/80 transition-colors group-hover:text-white">Creating Interactive Data Dashboards</span>
               </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {skillCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-red-500/10 hover:border-red-500/30 bg-black/20 hover:bg-black/40 transition-all cursor-default relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <card.icon className="w-8 h-8 text-red-500 mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                <h3 className="text-sm font-bold text-white tracking-tight mb-1">{card.title}</h3>
                <p className="text-[10px] font-mono text-white/40 uppercase tracking-wider">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <TechToolkit />
      </div>
    </section>
  )
}

export default About
