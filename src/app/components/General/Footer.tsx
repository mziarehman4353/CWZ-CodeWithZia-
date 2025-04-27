import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaReddit,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800/80 to-blue-600/80 backdrop-blur-sm text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Explore Buttons */}
        <div className="flex flex-col items-center md:items-center justify-center space-y-4">
          <h4 className="font-semibold text-lg">Explore</h4>
          <div className="flex gap-4">
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
          <h4 className="font-semibold text-lg">Let's Talk</h4>
          <a
            href="mailto:mziarehman4353@gmail.com"
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg shadow-lg hover:shadow-blue-400 transition text-sm font-semibold"
          >
            mziarehman4353@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-10 pt-4 border-t border-blue-400 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-center md:text-left">
          &copy; 2025 CWZ. All Rights Reserved.
        </p>

        <div className="flex gap-4 mt-4 md:mt-0 text-2xl items-center">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://huggingface.co/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/huggingface.jpg" alt="Hugging Face" width={24} height={24} />
          </a>
          <a href="https://reddit.com/" target="_blank" rel="noopener noreferrer"><FaReddit /></a>
          <a href="https://discord.com/" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
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
