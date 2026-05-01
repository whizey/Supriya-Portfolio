'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Database, Code, BarChart, Server, Cpu } from 'lucide-react'

const skillCategories = [
  {
    category: 'Machine Learning',
    icon: Brain,
    skills: ['Scikit-learn', 'TensorFlow', 'Regression', 'Random Forest', 'Gradient Boosting', 'K-Means'],
    level: 90
  },
  {
    category: 'Data Science & Analysis',
    icon: BarChart,
    skills: ['Pandas', 'NumPy', 'EDA', 'Statistical Analysis', 'Power BI'],
    level: 92
  },
  {
    category: 'Core Programming & AI',
    icon: Code,
    skills: ['Python', 'SQL', 'OOP', 'LLMs', 'Prompt Engineering'],
    level: 95
  },
  {
    category: 'Data Engineering & Cloud',
    icon: Database,
    skills: ['PostgreSQL', 'SQL Server', 'Snowflake', 'AWS (S3, Redshift)'],
    level: 85
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 sm:px-10 lg:px-16 relative bg-transparent overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-20">
          <h2 className="text-3xl font-bold tracking-tight">Capabilities</h2>
          <p className="text-white/40 max-w-sm text-sm">Deep technical expertise across the machine learning lifecycle and production AI systems.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass p-8 rounded-3xl border border-white/5  hover:border-white/10 dark:hover:border-white/10 transition-all"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-3 rounded-2xl bg-white/5">
                  <cat.icon className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" />
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-white/20 tracking-wider uppercase">Proficiency</span>
                  <div className="text-xl font-bold font-mono group-hover:text-red-500 transition-colors">{cat.level}%</div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold tracking-tight">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5  text-xs text-white/40 hover:text-white hover:border-white/20 dark:hover:border-white/20 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
