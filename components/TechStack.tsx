'use client'

import { motion } from 'framer-motion'

const stack = [
  'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy',
  'SQL', 'PostgreSQL', 'Snowflake', 'AWS', 'Docker', 'Power BI',
  'Tableau', 'LLMs', 'Prompt Engineering', 'LangChain', 'FastAPI', 'Django'
]

const TechStack = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-black/20 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex items-center gap-16 pr-16"
        >
          {/* First Set */}
          {stack.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
              <span className="text-xl md:text-3xl font-black tracking-tighter text-white/20 hover:text-red-500 transition-colors cursor-default select-none uppercase">
                {item}
              </span>
            </div>
          ))}
          {/* Duplicate Set for Loop */}
          {stack.map((item, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
              <span className="text-xl md:text-3xl font-black tracking-tighter text-white/20 hover:text-red-500 transition-colors cursor-default select-none uppercase">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
