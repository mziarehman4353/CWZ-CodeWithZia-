'use client';

import { motion } from 'framer-motion';

const events = [
  {
    date: 'Early 2024',
    title: 'Multiple Coursera, DigiSkills, NetCAD Courses',
    mode: 'Online',
    notes: 'Completed free IT courses (HTML, CSS, JS).',
  },
  {
    date: 'March-April 2024',
    title: 'Udemy Development (React, Tailwind, Flutter)',
    mode: 'Online',
    notes: 'Deep-dived into modern frameworks.',
  },
  {
    date: 'August 2024',
    title: 'IRUD Summer Course 2024 - Universitas Diponegoro',
    mode: 'Physical',
    notes: '"Navigating Global Society through the Turmoil World."',
  },
  {
    date: 'September 17–20, 2024',
    title: '2nd IConISF 2024',
    mode: 'Physical',
    notes: 'Presenting "Challenges of Islamic Economy among Youth".',
  },
  {
    date: 'November 12 – December 3, 2024',
    title: 'COIL Project',
    mode: 'Online',
    notes: 'Collaborative learning project (optional).',
  },
  {
    date: 'December 28, 2024 – January 5, 2025',
    title: 'EBN Activity #2: Indonesian Culture Exploration',
    mode: 'Physical',
    notes: 'Selected for Media and Publication Division.',
  },
  {
    date: 'January 2025',
    title: 'Asa Nusantara Step #1 (Sahabat Asa Indonesia)',
    mode: 'Physical',
    notes: 'Location: Genting Island, Karimunjawa (Education Pillar).',
  },
];

const JourneyTimeline = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-32 max-w-screen-xl mx-auto ">
      <div className="relative border-l-2 border-blue-600 py-14 bg-gray-950s group max-w-6xl mx-auto px-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 rounded-2xl bg-neutral-100 dark:bg-neutral-900 ">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-12 ml-6 relative"
          >
            <div className="absolute -left-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg"></div>

            <motion.div
              className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md transition-all"
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(37, 99, 235, 0.2)', // Slight blue background when hovered
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-grey">{event.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{event.date} • {event.mode}</p>
              <p className="text-base text-muted-foreground">{event.notes}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JourneyTimeline;
