'use client'

import { motion } from 'framer-motion'
import { Search, Database, Bot } from 'lucide-react'

const approachSteps = [
  {
    title: 'ANALYZE',
    subtitle: 'Data Discovery',
    description: 'Uncovering patterns and statistical significance in raw data.',
    icon: Search,
    color: 'from-red-500/10 to-transparent'
  },
  {
    title: 'ARCHITECT',
    subtitle: 'System Design',
    description: 'Building robust ETL pipelines and model architectures.',
    icon: Database,
    color: 'from-red-600/10 to-transparent'
  },
  {
    title: 'AUTOMATE',
    subtitle: 'Deployment',
    description: 'Integrating AI agents for real-world analytical actions.',
    icon: Bot,
    color: 'from-red-700/10 to-transparent'
  }
]

const Approach = () => {
  return (
    <section className="py-16 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          {approachSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative glass p-6 rounded-[2rem] border border-white/5 hover:border-red-500/20 transition-all flex flex-col items-center text-center space-y-4"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]`} />
              
              <div className="relative z-10 p-3 rounded-xl bg-white/5 text-red-500 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                <step.icon size={20} />
              </div>

              <div className="relative z-10 space-y-1">
                <h3 className="text-xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-[8px] font-mono text-red-500 uppercase tracking-[0.2em]">
                  {step.subtitle}
                </p>
                <p className="text-[11px] text-white/40 leading-relaxed pt-2">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach
