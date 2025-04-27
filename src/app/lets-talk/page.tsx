'use client';

import LayoutWrapper from '@/app/components/General/LayoutWrapper';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import PersonalTouch from './components/PersonalTouch';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <LayoutWrapper>
      <section className="w-full">
        <ContactHero />
      </section>

      <main className="flex flex-col md:flex-row gap-8 items-stretch justify-center px-4 md:px-16 py-12 max-w-7xl mx-auto">
        {/* Left: Personal Touch */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="w-full md:w-1/2 flex justify-center items-stretch"
        >
          <PersonalTouch />
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="w-full md:w-1/2 flex justify-center items-stretch"
        >
          <ContactForm />
        </motion.div>
      </main>
    </LayoutWrapper>
  );
};

export default Page;
