import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: "-100vh" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070a13]"
        >
          {/* Ikon Atas */}
          <div className="flex gap-8 mb-6 text-cyan-400">
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="text-3xl">{'</>'}</motion.span>
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} className="text-3xl">👤</motion.span>
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }} className="text-3xl">🧠</motion.span>
          </div>
          
          {/* Teks Utama */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-gray-200 mb-4 text-center tracking-wide"
          >
            Welcome To My <br className="md:hidden" /> Portfolio Website
          </motion.h1>
          
          {/* Domain Link */}
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="text-cyan-400 font-mono tracking-wider text-sm"
          >
            🌐 www.andika.my.id
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;