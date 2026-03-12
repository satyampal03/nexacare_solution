import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
    >
      <div className="relative w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-8">
        <motion.div
          className="absolute top-0 left-0 h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="overflow-hidden h-20 flex items-center">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-2xl">N</span>
          </div>
          <span className="text-3xl font-display font-bold tracking-tighter">
            NEXACARE<span className="text-primary">.</span>
          </span>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 text-white/40 font-mono text-xs uppercase tracking-widest"
      >
        Initializing Creative Engine... {Math.round(progress)}%
      </motion.p>
    </motion.div>
  );
}
