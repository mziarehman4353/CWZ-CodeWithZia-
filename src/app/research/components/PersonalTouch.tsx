'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const PersonalTouch = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-32 max-w-screen-xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center space-y-8"
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold text-blue-700">What's Next?</h2>

        {/* Subtext */}
        <p className="max-w-2xl text-muted-foreground text-lg">
          I’m passionate about pushing the boundaries of AI, Social Impact, and Education Innovation.
          Next, I'm exploring intersections between ethical technology and community-driven solutions.
          If you have an idea, collaboration, or project in mind — let’s make it happen together!
        </p>

        {/* Button */}
        <Link href="/lets-talk">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            🤝 Collaborate with Me
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default PersonalTouch;
