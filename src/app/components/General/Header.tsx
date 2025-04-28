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
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-gradient-to-r from-sky-600/90 to-sky-500/90 backdrop-blur-sm shadow-md" : "bg-transparent"
    }`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        {/* Logo */}
        <div className="w-[280px] min-w-[280px]">
          <Logo />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 text-white ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-800 rounded-lg shadow-lg hover:shadow-blue-400 transition text-sm font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col items-start space-y-3 bg-gradient-to-r from-blue-800/90 to-blue-600/90 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg w-full shadow-lg hover:shadow-blue-400 transition text-sm font-semibold"
              onClick={() => setMobileMenuOpen(false)}
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
