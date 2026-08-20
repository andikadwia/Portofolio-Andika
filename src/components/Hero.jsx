import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative z-10 text-center max-w-4xl mt-16 px-4">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false, amount: 0.5 }} // once: false membuat animasi berulang
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/20 mb-6"
      >
        <span className="text-cyan-400 text-sm font-medium tracking-wide">Cyber-Tech Ready</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-none"
      >
        <span className="text-white mr-4 block md:inline mb-2 md:mb-0">I'm a</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400">
          Informatics Engineering Student
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
      >
        Menciptakan Website yang Inovatif, Fungsional, dan User-Friendly untuk Solusi Digital Masa Depan.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col sm:flex-row justify-center gap-5"
      >
        <a href="#portfolio" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] text-center min-w-[150px]">
          Projects
        </a>
        <a href="#contact" className="bg-transparent border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-bold py-3 px-8 rounded-xl transition-all duration-300 text-center min-w-[150px]">
          Contact
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;