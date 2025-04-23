// HeroSection.tsx
import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import TypingText from './TypingText';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      <BackgroundVideo />
      <div className="z-10 text-center px-4">
        <TypingText />
      </div>
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
    </section>
  );
};

export default HeroSection;
