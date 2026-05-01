'use client'

import { motion } from 'framer-motion'

const metrics = [
  { label: 'AI Agents Built', value: '4+' },
  { label: 'Data Points Processed', value: '10M+' },
  { label: 'Certifications', value: '3+' },
  { label: 'Pipeline Efficiency', value: '60%' }
]

const KeyMetrics = () => {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex flex-col items-center justify-center p-8 glass rounded-3xl border border-white/5 hover:border-red-500/20 transition-all text-center"
            >
              <div className="text-4xl md:text-5xl font-black tracking-tighter text-white group-hover:text-red-500 transition-colors">
                {metric.value}
              </div>
              <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] mt-2 group-hover:text-white/40 transition-colors">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyMetrics
