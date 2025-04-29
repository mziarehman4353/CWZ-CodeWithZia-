"use client";

import { useState, useEffect } from "react";
import Logo from "./logo";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Services", href: "/services" },
  { name: "Let's Talk", href: "/lets-talk" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      if (mobileMenuOpen) {
        setMobileMenuOpen(false); // close mobile menu on scroll
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-sky-600/90 to-sky-500/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="w-[200px] sm:w-[240px] md:w-[280px] min-w-[160px]">
          <Logo />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-3 text-white font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-800 rounded-lg shadow hover:shadow-blue-400 transition text-sm"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 flex flex-col space-y-2 bg-gradient-to-r from-blue-800/90 to-blue-600/90 backdrop-blur-md text-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-md shadow transition text-sm font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
