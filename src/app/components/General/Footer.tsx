'use client';
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-600/90 to-sky-500/90 backdrop-blur-sm shadow-md text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">

        {/* Logo */}
        <div className="flex justify-center sm:justify-start">
          <Logo />
        </div>

        {/* Explore Buttons */}
        <div className="flex flex-col items-center md:items-center justify-center space-y-4">
          <h4 className="font-semibold text-lg">Explore</h4>
          <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
            <Link
              href="/level-up"
              className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg shadow-lg hover:shadow-blue-400 transition text-sm font-semibold"
            >
              Leveling Up
            </Link>
            <a
              href="/coffee-page"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg shadow-lg hover:shadow-blue-400 transition text-sm font-semibold"
            >
              Buy me a Coffee
            </a>
          </div>
        </div>

        {/* Let's Talk Button */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <h4 className="font-semibold text-lg">Let&apos;s Talk</h4>
          <a
            href="mailto:mziarehman4353@gmail.com"
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg shadow-lg hover:shadow-blue-400 transition text-sm font-semibold"
          >
            mziarehman4353@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-10 pt-4 border-t border-blue-400 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p className="text-center sm:text-left">
          &copy; 2025 <Link href="/" className="text-blue-200">CWZ</Link>. All Rights Reserved.
        </p>

        <div className="flex gap-4 mt-4 sm:mt-0 text-2xl items-center justify-center sm:justify-end">
          <a href="https://github.com/mziarehman4353/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://huggingface.co/mziarehman4353/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/huggingface.jpg" alt="Hugging Face" width={24} height={24} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
