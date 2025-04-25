'use client';

import { useState, useEffect } from 'react';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const sections = [
    { name: 'Hero', id: '#hero' },
    { name: 'Services', id: '#services' },
    { name: 'Testimonials', id: '#testimonials' },
    { name: 'How We Work', id: '#how-we-work' },
    { name: 'Contact', id: '#contact' },
  ];

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSelectedIndex(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      setSelectedIndex((prevIndex) =>
        Math.min(prevIndex + 1, filteredSections.length - 1)
      );
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === 'Enter') {
      navigateToSection(filteredSections[selectedIndex].id);
    }
  };

  const filteredSections = sections.filter((section) =>
    section.name.toLowerCase().includes(query.toLowerCase())
  );

  const navigateToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the command palette after navigation
    }
  };

  return (
    <div
      className={`fixed top-4 right-4 w-72 bg-white border rounded-lg shadow-lg p-4 transform transition-all duration-500 ${
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <button
        onClick={handleToggle}
        className="absolute top-0 right-0 p-2 bg-gray-700 text-white rounded-full"
      >
        {isOpen ? 'X' : '⌘'}
      </button>

      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search sections..."
        className="w-full px-4 py-2 border rounded-md mb-4"
      />

      <ul className="max-h-56 overflow-y-auto">
        {filteredSections.map((section, index) => (
          <li
            key={section.id}
            className={`p-2 cursor-pointer ${
              index === selectedIndex ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => navigateToSection(section.id)}
          >
            {section.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommandPalette;
