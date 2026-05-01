"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const defaultTextColor = 'text-white/40';
  const hoverTextColor = 'text-white';
  const textSizeClass = 'text-[10px] font-bold tracking-[0.2em] uppercase';

  return (
    <a href={href} className={`group relative inline-block overflow-hidden h-[14px] ${textSizeClass}`}>
      <div className="flex flex-col transition-transform duration-500 ease-out transform group-hover:-translate-y-1/2">
        <span className={`${defaultTextColor} h-[14px] flex items-center justify-center`}>{children}</span>
        <span className={`${hoverTextColor} h-[14px] flex items-center justify-center`}>{children}</span>
      </div>
    </a>
  );
};

export default function Navbar({ onContactClick }: { onContactClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass('rounded-2xl');
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full');
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const logoElement = (
    <motion.button
      onClick={() => setIsExpanded(!isExpanded)}
      animate={{ rotate: isExpanded ? 90 : 0 }}
      className="relative w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-xl transition-colors group/logo"
    >
      <div className="relative w-5 h-5">
        <span className="absolute w-1.5 h-1.5 rounded-full bg-red-500 top-0 left-1/2 transform -translate-x-1/2 opacity-100 shadow-[0_0_8px_rgba(239,68,68,0.8)] group-hover/logo:scale-125 transition-transform"></span>
        <span className="absolute w-1.5 h-1.5 rounded-full bg-white/20 left-0 top-1/2 transform -translate-y-1/2"></span>
        <span className="absolute w-1.5 h-1.5 rounded-full bg-white/20 right-0 top-1/2 transform -translate-y-1/2"></span>
        <span className="absolute w-1.5 h-1.5 rounded-full bg-white/20 bottom-0 left-1/2 transform -translate-x-1/2"></span>
      </div>
    </motion.button>
  );

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      // Find the offset of the element relative to its container within SmoothScroll
      const offset = element.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: 'auto' // Let SmoothScroll handle the easing
      });
      setIsOpen(false);
      setIsExpanded(false);
    }
  };

  const navLinksData = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ];

  const loginButtonElement = (
    <a 
      href="/resume.pdf" 
      target="_blank"
      className="px-6 py-2 sm:px-5 text-[10px] font-bold tracking-widest uppercase border border-white/10 bg-white/5 text-white/60 rounded-full hover:border-white/30 hover:text-white transition-all duration-200 w-full sm:w-auto text-center whitespace-nowrap"
    >
      Resume
    </a>
  );



  return (
    <motion.header 
      layout
      className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-[110]
                       flex flex-col items-center
                       py-2 lg:backdrop-blur-md
                       ${headerShapeClass}
                       border border-white/10 bg-[#020205] lg:bg-[#02020557]
                       transition-[border-radius] duration-300 ease-in-out px-2 shadow-2xl overflow-hidden`}
      animate={{ 
        width: isExpanded ? 'auto' : '64px',
        paddingLeft: isExpanded ? '1.5rem' : '0.5rem',
        paddingRight: isExpanded ? '1.5rem' : '0.5rem',
      }}
    >

      <div className="flex items-center justify-between w-full gap-x-8">
        <div className="flex items-center shrink-0">
           {logoElement}
        </div>

        <motion.div 
          animate={{ width: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          className="flex items-center gap-8 overflow-hidden"
        >
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinksData.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="group relative inline-block overflow-hidden h-[14px] text-[10px] font-bold tracking-[0.2em] uppercase"
              >
                 <div className="flex flex-col transition-transform duration-500 ease-out transform group-hover:-translate-y-1/2">
                  <span className="text-white/40 h-[14px] flex items-center justify-center">{link.label}</span>
                  <span className="text-white h-[14px] flex items-center justify-center">{link.label}</span>
                </div>
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            {loginButtonElement}
          </div>
        </motion.div>

        {isExpanded && (
          <button className="lg:hidden flex items-center justify-center w-8 h-8 text-white/60 focus:outline-none" onClick={toggleMenu} aria-label={isOpen ? 'Close Menu' : 'Open Menu'}>
            {isOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        )}
      </div>

      <AnimatePresence>
        {isExpanded && isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden flex flex-col items-center w-full overflow-hidden"
          >
            <nav className="flex flex-col items-center space-y-6 text-[10px] font-bold tracking-widest uppercase w-full pt-8">
              {navLinksData.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={(e) => scrollToSection(e, link.href)} 
                  className="text-white/40 hover:text-white transition-colors w-full text-center"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col items-center space-y-4 mt-8 w-full pb-6">
              {loginButtonElement}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
