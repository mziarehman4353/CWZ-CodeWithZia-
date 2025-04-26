'use client';

import { useState } from 'react';
import CategoriesFilter from './CategoriesFilter';
import ResearchCard from './ResearchCard';

const researchData = [
  {
    title: 'What Challenges Do You See the Islamic Economy Face Among Youth?',
    summary:
      'Presented at IConISF 2024, this research explores youth engagement with Islamic economic principles, highlighting gaps in awareness and modern financial literacy.',
    tags: ['Islamic Studies', 'Youth', 'Social Impact'],
    date: 'October 2024',
  },
  {
    title: 'Using NLP to Advance Freedom of Expression',
    summary:
      'This essay discusses how NLP tools can democratize online conversations, protect linguistic diversity, and empower underrepresented voices globally.',
    tags: ['NLP', 'AI', 'Social Impact'],
    date: 'November 2024',
  },
  {
    title: 'AI-Powered Chatbot for Academic Queries',
    summary:
      'A practical project developed during my IT internship to help students find academic information using a natural conversation interface.',
    tags: ['AI/ML', 'UX', 'Education'],
    date: 'July 2024',
  },
  {
    title:
      'Communication Between Doctors and Patients: A Story-Based Learning Project',
    summary:
      'Created with ALICE 3, this visual project bridges technical medical language with public understanding, using storytelling and empathy.',
    tags: ['UX Design', 'Education', 'AI'],
    date: 'October 2024',
  },
  {
    title: 'Community AI: Teaching AI to Local Students and Teachers',
    summary:
      'A grassroots initiative where I taught AI basics to local educators and students, helping them diversify their career paths and embrace tech.',
    tags: ['Social Impact', 'AI Education', 'Community Work'],
    date: 'August 2024',
  },
  {
    title:
      'Israel’s Genocide of Palestine: Human Rights and International Humanitarian Law',
    summary:
      'A critical analysis of war crimes, global silence, and how legal frameworks can help raise awareness and fight injustice.',
    tags: ['Humanitarian Law', 'Islamic Studies', 'Social Justice'],
    date: 'December 2024',
  },
];

const ResearchGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredData =
    selectedCategory === 'All'
      ? researchData
      : researchData.filter((item) =>
          item.tags.includes(selectedCategory)
        );

  return (
    <div className="py-10 px-4 sm:px-8 md:px-16 lg:px-32 max-w-screen-xl mx-auto">
      <CategoriesFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredData.map((item, index) => (
          <ResearchCard
            key={index}
            title={item.title}
            summary={item.summary}
            tags={item.tags}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default ResearchGrid;
