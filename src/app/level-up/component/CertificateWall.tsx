'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react'; // for the close icon

const certificates = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.png',
  '/images/4.jpg',
  '/images/5.jpg',
  // Add more as needed
];

const CertificateWall = () => {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <section className="py-16 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
      <h2 className="text-3xl font-bold text-left mb-16 text-foreground ml-8">
        Certificates
      </h2>

      {/* Scrolling carousel */}
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
              key={src}
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-60 h-80 flex-shrink-0 relative rounded-xl overflow-hidden shadow-xl bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer"
              onClick={() => setPreview(src)}
            >
              <Image
                src={src}
                alt="Certificate"
                fill
                className="object-cover transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Preview Modal */}
      {preview && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          {/* Close Button - fixed to screen top-right */}
          <button
            onClick={() => setPreview(null)}
            className="fixed top-4 right-4 z-50 bg-white hover:bg-gray-100 text-black rounded-full p-2 shadow-lg transition"
            aria-label="Close preview"
          >
            <X size={24} />
          </button>

          {/* Preview image container */}
          <div className="relative w-full max-w-md md:max-w-2xl aspect-[3/4] rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white dark:bg-neutral-800">
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificateWall;
