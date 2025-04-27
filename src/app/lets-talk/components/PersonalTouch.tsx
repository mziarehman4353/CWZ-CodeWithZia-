'use client';

import { motion } from 'framer-motion';

const PersonalTouch = () => {
  return (
    <section className="relative py-20 px-4 sm:px-8 md:px-16 lg:px-32 max-w-screen-xl mx-auto h-full flex flex-col justify-between">
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0 rounded-xl" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8"
      >       
        {/* Quote Block */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-md text-center"
        >
          <blockquote className="text-3xl font-semibold text-white mb-6 drop-shadow-lg">
            You&apos;re just one message away from your best digital version.
          </blockquote>
          <br />
          <br />
          <p className="text-lg text-gray-300">CWZ Team, Digital Experts</p>
        </motion.div>
      </motion.div>

      {/* Secondary Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 mt-12 text-center"
      >
        <p className="text-xl text-gray-200 drop-shadow">
          Ready to take your digital presence to the next level? We&apos;re just one click away.
        </p>
      </motion.div>
    </section>
  );
};

export default PersonalTouch;
