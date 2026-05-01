'use client'

import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'

const GitHubGraph = () => {
  const [hoveredCell, setHoveredCell] = useState<number | null>(null)

  // Generate mock contribution data for a year
  const contributionData = useMemo(() => {
    return Array.from({ length: 52 * 7 }, (_, i) => ({
      id: i,
      level: Math.floor(Math.random() * 5), // 0 to 4
      date: new Date(Date.now() - (52 * 7 - i) * 24 * 60 * 60 * 1000).toDateString()
    }))
  }, [])

  const getColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-white/5'
      case 1: return 'bg-red-900/30'
      case 2: return 'bg-red-800/50'
      case 3: return 'bg-red-600/70'
      case 4: return 'bg-red-500'
      default: return 'bg-white/5'
    }
  }

  return (
    <div className="w-full glass-strong p-6 rounded-2xl border border-white/10 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Contribution_Map_Active</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-white/20">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-sm bg-white/5" />
            <div className="w-2 h-2 rounded-sm bg-red-900/30" />
            <div className="w-2 h-2 rounded-sm bg-red-600/70" />
            <div className="w-2 h-2 rounded-sm bg-red-500" />
          </div>
          <span>More</span>
        </div>
      </div>

      <div className="relative overflow-x-auto pb-4 custom-scrollbar">
        <div className="flex gap-1.5 min-w-max">
          {Array.from({ length: 52 }).map((_, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1.5">
              {contributionData.slice(weekIndex * 7, (weekIndex + 1) * 7).map((day) => (
                <motion.div
                  key={day.id}
                  onMouseEnter={() => setHoveredCell(day.id)}
                  onMouseLeave={() => setHoveredCell(null)}
                  className={`w-3 h-3 rounded-sm transition-all duration-300 ${getColor(day.level)} hover:scale-125 cursor-crosshair relative`}
                  style={{
                    boxShadow: hoveredCell === day.id ? '0 0 10px rgba(239, 68, 68, 0.5)' : 'none',
                    zIndex: hoveredCell === day.id ? 10 : 1
                  }}
                >
                  {hoveredCell === day.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black border border-white/20 rounded text-[8px] whitespace-nowrap z-50 font-mono text-white pointer-events-none"
                    >
                      {day.date}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-white/20">
        <div className="flex gap-4">
            <span>TOTAL_CONTRIBUTIONS: 1,842</span>
            <span>STREAK: 42_DAYS</span>
        </div>
        <span className="italic text-red-500/40 uppercase tracking-tighter">Verified_Sync_v2.0</span>
      </div>
    </div>
  )
}

export default GitHubGraph
