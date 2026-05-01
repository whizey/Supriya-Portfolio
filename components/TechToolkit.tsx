'use client'

import { motion } from 'framer-motion'

const tools = [
  { name: 'Python', category: 'Language' },
  { name: 'TensorFlow', category: 'Framework' },
  { name: 'PyTorch', category: 'Framework' },
  { name: 'SQL', category: 'Database' },
  { name: 'Snowflake', category: 'Warehouse' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Power BI', category: 'Viz' },
  { name: 'LangChain', category: 'AI' }
]

const TechToolkit = () => {
  return (
    <div className="pt-12">
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group flex flex-col items-center justify-center p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-red-500/30 hover:bg-red-500/5 transition-all"
          >
            <span className="text-[11px] font-bold text-white/60 group-hover:text-white transition-colors">{tool.name}</span>
            <span className="text-[7px] font-mono text-white/10 uppercase tracking-widest mt-1 group-hover:text-red-500/50 transition-colors">{tool.category}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TechToolkit
