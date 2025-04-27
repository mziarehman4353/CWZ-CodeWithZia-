'use client';

import { motion } from 'framer-motion';

const featuredResearch = {
  title: 'Using NLP to Advance Freedom of Expression',
  summary:
    'This essay discusses how NLP tools can democratize online conversations, protect linguistic diversity, and empower underrepresented voices globally.',
  tags: ['NLP', 'AI', 'Social Impact'],
  date: 'November 2024',
};

const FeaturedSpotlight = () => {
  return (
    <section className="py-10 px-2 sm:px-8 md:px-16 lg:px-32 max-w-screen-xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-4">Featured Research</h2>
        <h3 className="text-2xl font-semibold mb-2">{featuredResearch.title}</h3>
        <p className="mb-4">{featuredResearch.summary}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {featuredResearch.tags.map((tag) => (
            <span
              key={tag}
              className="bg-white text-blue-800 text-sm px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm">{featuredResearch.date}</p>
      </motion.div>
    </section>
  );
};

export default FeaturedSpotlight;
