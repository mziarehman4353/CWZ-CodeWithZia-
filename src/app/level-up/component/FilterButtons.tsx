'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = [
  'All',
  'Courses',
  'Conferences',
  'Webinars',
  'Summit',
  'Technical',
  'Softskill',
  'Writing',
];

const floatAnimation = {
  animate: {
    y: [0, 12, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
};

const FilterButtons = () => {
  const [active, setActive] = useState('All');

  return (
    <div className="flex flex-wrap justify-center gap-6 py-14 bg-gray-950s">
      {categories.map((category) => (
        <motion.button
          key={category}
          {...floatAnimation}
          whileHover={{ scale: 1.15 }}
          onClick={() => setActive(category)}
          className={`w-24 h-24 flex items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 ease-in-out shadow-md border
            ${
              active === category
                ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg border-purple-400'
                : 'bg-white text-gray-900 hover:bg-gradient-to-r hover:from-pink-400 hover:to-indigo-400 hover:text-white'
            }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterButtons;
