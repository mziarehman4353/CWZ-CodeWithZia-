"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2025",
    title: "Launched Developer Portfolio",
    description: "Built a custom Next.js portfolio with animations and personal branding.",
  },
  {
    year: "2024",
    title: "Started Bachelor’s in Informatics Engineering",
    description: "Received a full scholarship at Universitas Muhammadiyah Surakarta, Indonesia.",
  },
  {
    year: "2023",
    title: "Built First Full-Stack Projects",
    description: "Created CRUD apps with React, Node.js, and Firebase.",
  },
  {
    year: "2023",
    title: "Explored AI & NLP",
    description: "Dived deep into models like GPT, transformers, and text processing.",
  },
];

const JourneyTimeline = () => {
  return (
    <section className="group max-w-6xl mx-auto px-6 py-20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 rounded-2xl bg-neutral-100 dark:bg-neutral-900">
      <h2 className="text-3xl font-bold text-left mb-12">Journey</h2>

      <div className="relative border-l-4 border-blue-500 ml-4">
        {timelineData.map((item, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              className={`mb-12 ml-6 relative ${
                isLeft
                  ? "md:pl-16 md:ml-0 md:text-left"
                  : "md:pr-16 md:ml-0 md:text-right"
              }`}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-[-1.15rem] top-2"></div>

              {/* Timeline Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg border border-blue-100 dark:border-neutral-700 transition-all duration-300"
              >
                <p className="text-blue-600 font-bold text-sm">{item.year}</p>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default JourneyTimeline;
