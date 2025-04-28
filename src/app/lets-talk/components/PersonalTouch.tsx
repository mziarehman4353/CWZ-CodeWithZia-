'use client';

import { motion } from 'framer-motion';

const PersonalTouch = () => {
  return (
    <div className="flex-1 relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col justify-center p-10 min-h-[500px]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0 rounded-xl" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col h-full justify-center items-center text-center space-y-6"
      >
        <blockquote className="text-3xl font-semibold text-white drop-shadow-lg">
          You&apos;re just one message away from your best digital version.
        </blockquote>
        <p className="text-lg text-gray-300">CWZ Team, Digital Experts</p>
        <p className="text-xl text-gray-200 drop-shadow mt-6">
          Ready to take your digital presence to the next level? We&apos;re just one click away.
        </p>
      </motion.div>
    </div>
  );
};

export default PersonalTouch;
