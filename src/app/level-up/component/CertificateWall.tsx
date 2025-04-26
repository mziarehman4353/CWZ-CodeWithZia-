'use client';

import { motion } from 'framer-motion';

const certificates = [
  '/certificates/sample1.jpg',
  '/certificates/sample2.jpg',
  '/certificates/sample3.jpg',
  '/certificates/sample4.jpg',
  '/certificates/sample5.jpg',
  '/certificates/sample6.jpg',
  '/certificates/sample7.jpg',
  // Add more sample images later
];

const CertificateWall = () => {
  return (
    <section className="py-16 overflow-hidden bg-background">
      <h2 className="text-3xl font-bold text-center mb-10">📜 My Certificates</h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-10"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          }}
        >
          {certificates.concat(certificates).map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-60 h-80 flex-shrink-0 rounded-xl overflow-hidden shadow-xl bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer"
            >
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className="object-cover w-full h-full transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificateWall;
