'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center group max-w-6xl mx-auto px-6 py-20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 rounded-2xl bg-neutral-100 dark:bg-neutral-900">

      {/* Soft Background Glow */}

      <div className="relative z-10 flex flex-col items-center">

        {/* Quote at the Top */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-black mb-6 tracking-wide uppercase"
        >
          &quot;Learning never exhausts the mind.&quot;  Leonardo da Vinci
        </motion.p>

        {/* Main Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 leading-tight drop-shadow-md"
        >
          Journey of <span className="text-indigo-400">Leveling Up</span>
        </motion.h1>

        {/* Typing Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-black max-w-2xl mt-4"
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
