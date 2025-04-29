'use client';

import React, { useState, useEffect } from 'react';
import RightSidebarToggle from './Right-SidebarToggle';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';
import Image from 'next/image';

const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const icons = [
    { icon: <FaGithub />, link: 'https://github.com/mziarehman4353/' },
    {
      icon: (
        <Image
          src="/images/huggingface.jpg"
          alt="Hugging Face"
          width={24}
          height={24}
        />
      ),
      link: 'https://huggingface.co/mziarehman4353/',
    },
    { icon: <FaLinkedin />, link: 'https://linkedin.com/' },
    { icon: <FaFacebook />, link: 'https://facebook.com/' },
    { icon: <FaInstagram />, link: 'https://instagram.com/' },
    { icon: <FaYoutube />, link: 'https://youtube.com/' },
    { icon: <FaTiktok />, link: 'https://tiktok.com/' },
  ];

  return (
    <>
      <RightSidebarToggle onHoverStart={() => setIsOpen(true)} />

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="fixed top-0 right-0 h-full w-16 sm:w-20 z-40 pointer-events-none"
        onMouseLeave={() => setIsOpen(false)}
        onTouchStart={() => setIsOpen(false)}
      >
        {/* Fully transparent background */}
        <div className="h-full w-full flex flex-col justify-center items-center p-4 space-y-6 pointer-events-auto">
          {icons.map((item) => (
            <a
              key={item.link}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 bg-opacity-90 text-white p-2 rounded-full shadow hover:bg-blue-700 transition duration-200"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default RightSidebar;
