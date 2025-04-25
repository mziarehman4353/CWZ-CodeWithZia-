"use client";

import { useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Buy Me A Coffee", href: "/coffee-page" },
  { name: "Let's Talk", href: "/lets-talk" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        {/* Logo container with fixed width to avoid nav push */}
        <div className="w-[280px] min-w-[280px]">
          <Logo />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-200 text-sm font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-blue-600 focus:outline-none"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col items-start space-y-3 bg-white/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full shadow hover:bg-blue-700 transition duration-200 font-medium"
              onClick={() => setMobileMenuOpen(false)} // close on click
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
