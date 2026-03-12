import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isMagnetic, setIsMagnetic] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const magnetic = target.closest('[data-magnetic]');
      const label = target.getAttribute('data-cursor-label');
      
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }

      if (label) {
        setCursorText(label);
      } else {
        setCursorText('');
      }

      setIsMagnetic(!!magnetic);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary pointer-events-none z-[9999] hidden md:flex items-center justify-center overflow-hidden"
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
          borderColor: isHovering ? 'transparent' : 'rgba(99, 102, 241, 0.5)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      >
        <AnimatePresence>
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[6px] font-bold uppercase tracking-tighter text-primary whitespace-nowrap"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 500, mass: 0.2 }}
      />
    </>
  );
}
