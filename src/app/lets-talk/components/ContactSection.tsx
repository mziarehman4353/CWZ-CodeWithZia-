'use client';

import { motion } from 'framer-motion';
import PersonalTouch from './PersonalTouch';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-7xl mx-auto my-20 px-4 sm:px-8 md:px-16 lg:px-20 gap-8">
      {/* Left: Personal Touch */}
      <motion.div
        initial={{ opacity: 0, x: 200 }} // Initially off-screen to the right
        whileInView={{ opacity: 1, x: 0 }} // Move into place and fade in
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center items-stretch"
      >
        <PersonalTouch />
      </motion.div>

      {/* Right: Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -200 }} // Initially off-screen to the left
        whileInView={{ opacity: 1, x: 0 }} // Move into place and fade in
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center items-stretch"
      >
        <ContactForm />
      </motion.div>
    </section>
  );
};

export default ContactSection;
