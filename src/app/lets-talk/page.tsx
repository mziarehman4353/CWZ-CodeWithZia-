'use client';

import LayoutWrapper from '@/app/components/General/LayoutWrapper';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import PersonalTouch from './components/PersonalTouch';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <LayoutWrapper>
        <ContactHero />
      <main className="flex flex-col md:flex-row gap-8 items-center justify-center px-4 md:px-16 py-12 max-w-7xl mx-auto">
        {/* Left: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full md:w-1/2 hover:scale-105 transition-transform duration-300 ease-in-out flex justify-center"
        >
          <ContactForm />
        </motion.div>

        {/* Right: Personal Touch */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full md:w-1/2 hover:scale-105 transition-transform duration-300 ease-in-out flex justify-center"
        >
          <PersonalTouch />
        </motion.div>
      </main>
    </LayoutWrapper>
  );
};

export default Page;
