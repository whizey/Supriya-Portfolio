'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Github, Star, GitFork, Code } from 'lucide-react'

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  topics: string[]
}

const GitHubSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch GitHub repos
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/whizey/repos?sort=updated&per_page=6')
        const data = await response.json()
        setRepos(data)
      } catch (error) {
        console.error('Error fetching repos:', error)
        // Fallback to mock data if API fails
        setRepos([
          {
            id: 1,
            name: 'ecommerce-analytics-pipeline',
            description: 'ETL pipeline for predicting operational bottlenecks in e-commerce systems',
            html_url: 'https://github.com/whizey',
            stargazers_count: 12,
            forks_count: 3,
            language: 'Python',
            topics: ['machine-learning', 'sql', 'feature-engineering'],
          },
          {
            id: 2,
            name: 'instagram-strategy-agent',
            description: 'Regression model agent to analyze instagram content',
            html_url: 'https://github.com/whizey',
            stargazers_count: 8,
            forks_count: 2,
            language: 'Python',
            topics: ['classification', 'random-forest', 'data-science'],
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const languageColors: { [key: string]: string } = {
    Python: '#3572A5',
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Java: '#b07219',
    'Jupyter Notebook': '#DA5B0B',
  }

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">GitHub Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-400 mx-auto rounded-full" />
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Explore my latest projects and contributions
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-4 border-neon-blue border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Repositories Grid */}
          {!loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.slice(0, 6).map((repo, index) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-strong p-6 rounded-xl border border-white/5  hover:border-red-500 transition-all duration-300 group hover:neon-glow"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                      <Code className="w-5 h-5 text-red-500" />
                    </div>
                    <Github className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                  </div>

                  {/* Repo Name */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-gradient transition-all line-clamp-1 text-white/90">
                    {repo.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[40px]">
                    {repo.description || 'No description available'}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-white/70">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>

                  {/* Language & Topics */}
                  <div className="flex flex-wrap items-center gap-2">
                    {repo.language && (
                      <div className="flex items-center gap-1.5">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: languageColors[repo.language] || '#888',
                          }}
                        />
                        <span className="text-xs text-white/70">{repo.language}</span>
                      </div>
                    )}
                    {repo.topics?.slice(0, 2).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs rounded-full glass border border-white/5  text-white/70"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          )}

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/whizey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 glass-strong rounded-lg border-2 border-red-500/30 hover:border-red-500 hover:neon-glow transition-all group"
            >
              <Github className="w-5 h-5 text-red-500" />
              <span className="font-medium">View All Repositories</span>
              <span className="text-xs text-muted-foreground group-hover:text-white transition-colors">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHubSection
