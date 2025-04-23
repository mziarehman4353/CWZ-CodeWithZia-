// TypingText.tsx
"use client";

import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypingText = () => {
  const [text] = useTypewriter({
    words: [
      'grow with us.',
      'build the future.',
      'deploy innovation.',
      'design with code.',
      'scale ideas beautifully.',
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <h1 className="text-4xl md:text-6xl font-bold text-white z-10 relative">
      Let&apos;s <span className="text-blue-400">{text}</span>
      <Cursor cursorColor="#3B82F6" />
    </h1>
  );
};

export default TypingText;
