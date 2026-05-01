'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Command } from 'lucide-react'

interface CommandItem {
  id: string
  title: string
  subtitle: string
  action: () => void
  icon: string
}

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')

  const commands: CommandItem[] = [
    {
      id: 'about',
      title: 'Go to About',
      subtitle: 'Learn more about me',
      icon: '👤',
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
    {
      id: 'experience',
      title: 'View Experience',
      subtitle: 'See my work history',
      icon: '💼',
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
    {
      id: 'projects',
      title: 'Browse Projects',
      subtitle: 'Explore my work',
      icon: '🚀',
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
    {
      id: 'skills',
      title: 'Technical Skills',
      subtitle: 'View my expertise',
      icon: '⚡',
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
    {
      id: 'contact',
      title: 'Get in Touch',
      subtitle: 'Contact me',
      icon: '📧',
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
    {
      id: 'github',
      title: 'GitHub Profile',
      subtitle: 'View my code',
      icon: '💻',
      action: () => {
        window.open('https://github.com/whizey', '_blank')
        setIsOpen(false)
      },
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Profile',
      subtitle: 'Connect professionally',
      icon: '🔗',
      action: () => {
        window.open('https://www.linkedin.com/in/supriya-deb/', '_blank')
        setIsOpen(false)
      },
    },
    {
      id: 'email',
      title: 'Send Email',
      subtitle: 'sdeb14354@gmail.com',
      icon: '✉️',
      action: () => {
        window.location.href = 'mailto:sdeb14354@gmail.com'
        setIsOpen(false)
      },
    },
    {
      id: 'resume',
      title: 'Download Resume',
      subtitle: 'Get PDF copy',
      icon: '📄',
      action: () => {
        window.open('/resume.pdf', '_blank')
        setIsOpen(false)
      },
    },
    {
      id: 'top',
      title: 'Scroll to Top',
      subtitle: 'Back to hero section',
      icon: '⬆️',
      action: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setIsOpen(false)
      },
    },
  ]

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(search.toLowerCase()) ||
      cmd.subtitle.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K (Mac) or Ctrl+K (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
      // Escape to close
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      {/* Keyboard Shortcut Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-6 left-6 z-40 hidden lg:block"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="glass-strong px-4 py-2 rounded-lg border border-white/10 hover:border-red-500 transition-all group flex items-center gap-2"
        >
          <Command className="w-4 h-4 text-muted-foreground group-hover:text-red-500 transition-colors" />
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            Press
          </span>
          <kbd className="px-2 py-1 text-xs rounded bg-white/10 border border-white/20 font-mono">
            ⌘K
          </kbd>
        </button>
      </motion.div>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
            >
              <div className="glass-strong border-2 border-red-500/30 rounded-2xl overflow-hidden shadow-2xl">
                {/* Search Input */}
                <div className="p-4 border-b border-white/10 flex items-center gap-3">
                  <Search className="w-5 h-5 text-red-500" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search commands..."
                    autoFocus
                    className="flex-1 bg-transparent outline-none text-lg placeholder:text-muted-foreground"
                  />
                  <kbd className="px-2 py-1 text-xs rounded bg-white/10 border border-white/20 font-mono">
                    ESC
                  </kbd>
                </div>

                {/* Commands List */}
                <div className="max-h-[400px] overflow-y-auto">
                  {filteredCommands.length > 0 ? (
                    <div className="p-2">
                      {filteredCommands.map((cmd, index) => (
                        <motion.button
                          key={cmd.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03 }}
                          onClick={cmd.action}
                          className="w-full p-3 rounded-lg hover:bg-white/5 transition-colors text-left flex items-center gap-4 group"
                        >
                          <div className="text-2xl">{cmd.icon}</div>
                          <div className="flex-1">
                            <div className="font-medium group-hover:text-red-500 transition-colors">
                              {cmd.title}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {cmd.subtitle}
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                            ↵
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-muted-foreground">
                      No commands found
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="p-3 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 rounded bg-white/10 border border-white/20 font-mono">
                        ↑
                      </kbd>
                      <kbd className="px-2 py-1 rounded bg-white/10 border border-white/20 font-mono">
                        ↓
                      </kbd>
                      <span className="ml-1">Navigate</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 rounded bg-white/10 border border-white/20 font-mono">
                        ↵
                      </kbd>
                      <span className="ml-1">Select</span>
                    </div>
                  </div>
                  <div>
                    {filteredCommands.length} command{filteredCommands.length !== 1 ? 's' : ''}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default CommandPalette
