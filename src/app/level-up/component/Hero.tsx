'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 px-4 sm:px-8 md:px-16 lg:px-32 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">

      {/* Soft Background Glow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-800/30 via-indigo-700/20 to-black/80 blur-2xl opacity-50 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">

        {/* Quote at the Top */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-indigo-300 mb-6 tracking-wide uppercase"
        >
          "Learning never exhausts the mind." — Leonardo da Vinci
        </motion.p>

        {/* Main Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-md"
        >
          My Journey of <span className="text-indigo-400">Leveling Up</span>
        </motion.h1>

        {/* Typing Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-gray-300 max-w-2xl mt-4"
        >
          <TypeAnimation
            sequence={[
              "A collection of courses, conferences, skills, and experiences that have shaped my path.",
            ]}
            wrapper="span"
            speed={50}
            cursor={false}
            style={{ display: 'inline-block' }}
          />
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;
