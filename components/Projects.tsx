'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, TrendingUp, Shield, Cpu, Network, Database } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Natural Language to SQL Agent',
    description: 'Developed an LLM-powered agent to translate complex natural language queries into executable SQL, bridging the gap between non-technical users and databases.',
    link: 'https://github.com/whizey/NL--SQL',
    icon: Database,
    date: '2025',
    category: 'GenAI & Data'
  },
  {
    id: 2,
    title: 'Instagram Reach Predictor',
    description: 'Trained regression models to predict content impressions with Groq LLM integration and Django backend architecture.',
    link: 'https://github.com/whizey/Instagram-reach-predictor',
    icon: TrendingUp,
    date: '2025',
    category: 'AI & Data Science'
  },
  {
    id: 3,
    title: 'Olist E-commerce ETL',
    description: 'Built an end-to-end PySpark ETL pipeline for the Olist dataset with Dockerized PostgreSQL and Power BI dashboards.',
    link: 'https://github.com/whizey/Olist_ETL',
    icon: Network,
    date: '2025',
    category: 'Data Engineering'
  },
  {
    id: 4,
    title: 'HISAC Medical Segmentation',
    description: 'Automated histopathological image segmentation (HISAC) using TensorFlow and U-Net + BASNet architectures.',
    link: 'https://github.com/whizey/HISAC',
    icon: Shield,
    date: '2024',
    category: 'Computer Vision'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 sm:px-10 lg:px-16 relative bg-transparent">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed mx-auto md:mx-0">
            A few things I've been building recently. Focused on scalability and precision in AI systems.
          </p>
        </div>

        {/* Project Grid (Blocks) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative glass p-6 rounded-3xl border border-white/5 hover:border-red-500/30 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                   <div className="p-3 rounded-xl bg-white/5 text-white/60 group-hover:bg-red-500/10 group-hover:text-red-500 transition-all">
                     <project.icon className="w-5 h-5" />
                   </div>
                   <span className="text-[9px] font-mono tracking-widest text-white/20 uppercase">{project.category}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold tracking-tight group-hover:text-red-500 transition-colors text-white/90 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-6 mt-8 border-t border-white/5">
                <div className="flex items-center gap-2 group-hover:text-white transition-colors">
                   <span className="text-[9px] font-mono text-white/20 uppercase">View</span>
                   <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <span className="text-[9px] font-mono text-white/10 uppercase tracking-widest">{project.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
