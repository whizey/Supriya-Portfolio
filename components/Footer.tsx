'use client'



const Footer = () => {
  return (
    <footer className="py-20 px-6 sm:px-10 lg:px-16 bg-transparent border-t border-white/5 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-2">
           <div className="text-xl font-bold tracking-tighter">
             supriya<span className="text-white/40">.</span>
           </div>
           <p className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase">Scale with Precision</p>
        </div>

        <div className="flex items-center gap-8 text-[10px] font-mono text-white/20 tracking-wider uppercase">
          <span>© 2026 SUPRIYA_DEB</span>
          <div className="w-1 h-1 rounded-full bg-white/10" />
          <span>ALL_RIGHTS_RESERVED</span>
          <div className="w-1 h-1 rounded-full bg-white/10 hidden md:block" />
          <span className="hidden md:block">LAT: 28.6N / LON: 77.2E (NEW DELHI)</span>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
