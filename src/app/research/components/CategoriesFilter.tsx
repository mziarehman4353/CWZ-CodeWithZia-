'use client';

import { motion } from 'framer-motion';

const categories = [
  'All',
  'AI/ML',
  'NLP',
  'Social Impact',
  'UX',
  'Education',
  'Leadership',
  'Islamic Studies',
  'Business',
];

interface CategoriesFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoriesFilter: React.FC<CategoriesFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center py-6">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{
            scale: 1.05,
            rotate: 1,
            transition: { type: 'spring', stiffness: 300 },
          }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-800'
          } shadow-md transition-colors duration-300`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoriesFilter;
