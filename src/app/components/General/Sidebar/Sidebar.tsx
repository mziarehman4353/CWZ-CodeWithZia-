"use client";

import React, { useState, useEffect } from "react";
import SidebarToggle from "./SidebarToggle";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SidebarToggle onHoverStart={() => setIsOpen(true)} />

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="fixed top-0 left-0 h-full w-56 z-40 pointer-events-none"
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Fully transparent background */}
        <div className="h-full w-full flex flex-col justify-center p-8 space-y-4 pointer-events-auto">
          {[
            { label: "Research", href: "/research" },
            { label: "Services", href: "/services" },
            { label: "Leveling Up", href: "/level-up" },
            { label: "Let’s Talk", href: "/lets-talk" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="bg-blue-600 bg-opacity-90 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200 font-semibold text-lg"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
