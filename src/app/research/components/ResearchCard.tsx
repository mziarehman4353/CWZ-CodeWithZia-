'use client';

import { motion } from 'framer-motion';

interface ResearchCardProps {
  title: string;
  summary: string;
  tags: string[];
  date: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  summary,
  tags,
  date,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        rotate: 1,
        transition: { type: 'spring', stiffness: 300 },
      }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{summary}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-500">{date}</p>
    </motion.div>
  );
};

export default ResearchCard;
