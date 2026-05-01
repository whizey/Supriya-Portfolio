'use client'

import { useState, useEffect } from 'react'

const DataPulse = () => {
  const [time, setTime] = useState('')
  const [sessionTime, setSessionTime] = useState(0)

  useEffect(() => {
    // Session timer
    const sessionTimer = setInterval(() => {
      setSessionTime(prev => prev + 1)
    }, 1000)

    // Clock
    const clockTimer = setInterval(() => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
      }))
    }, 1000)

    return () => {
      clearInterval(sessionTimer)
      clearInterval(clockTimer)
    }
  }, [])

  const formatSession = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}m ${s}s`
  }

  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 px-6 py-4 glass-strong border border-white/5 rounded-2xl">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-ping absolute inset-0" />
          <div className="w-2 h-2 rounded-full bg-red-500 relative" />
        </div>
        <div className="flex flex-col">
          <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest leading-none">System_Status</span>
          <span className="text-[10px] font-bold text-white/60 tracking-tight uppercase">Operational / Sync_Active</span>
        </div>
      </div>

      <div className="h-6 w-[1px] bg-white/5 hidden sm:block" />

      <div className="flex flex-col">
        <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest leading-none">Location_Time (DEL)</span>
        <span className="text-[10px] font-bold text-white/60 tracking-tight font-mono">{time || '00:00:00'}</span>
      </div>

      <div className="h-6 w-[1px] bg-white/5 hidden sm:block" />

      <div className="flex flex-col">
        <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest leading-none">Session_Runtime</span>
        <span className="text-[10px] font-bold text-white/60 tracking-tight font-mono">{formatSession(sessionTime)}</span>
      </div>

      <div className="h-6 w-[1px] bg-white/5 hidden sm:block" />

      <div className="flex flex-col">
        <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest leading-none">Data_Protocol</span>
        <span className="text-[10px] font-bold text-white/60 tracking-tight uppercase italic">Secure_SSL/TLS</span>
      </div>
    </div>
  )
}

export default DataPulse
