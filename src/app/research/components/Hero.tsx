'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const introText = "I’ve always loved practical things — and research is what lets us take ideas out of our heads and make them real.";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + introText[index]);
      index++;
      if (index >= introText.length) clearInterval(interval);
    }, 40); // Typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-4 sm:px-8 md:px-16 lg:px-32 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900 via-purple-800 to-black opacity-80 blur-sm"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-2xl animate-pulse"></div>

      {/* Content */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl md:text-6xl font-extrabold text-white mb-6"
      >
        Exploring Ideas, Building Knowledge.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-lg md:text-2xl text-white/80 max-w-3xl leading-relaxed"
      >
        {displayedText}
      </motion.p>
    </section>
  );
};

export default Hero;
