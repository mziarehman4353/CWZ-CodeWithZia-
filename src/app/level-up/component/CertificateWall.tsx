'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'; // ✅ Import Image from next/image

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
    <section className="py-16 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
      <h2 className="text-3xl font-bold text-left mb-16 text-foreground ml-8">Certificates</h2>

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
          {certificates.concat(certificates).map((src) => (
            <motion.div
              key={src} // ✅ use src (the image path) as key instead of index
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-60 h-80 flex-shrink-0 relative rounded-xl overflow-hidden shadow-xl bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer"
            >
              <Image
                src={src}
                alt={`Certificate`}
                fill
                className="object-cover transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificateWall;
