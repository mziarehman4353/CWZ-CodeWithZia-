"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" passHref>
      <button className="logo-wrapper text-[1.5rem] sm:text-[1rem]">
        <span className="logo-cwz">CWZ</span>
        <span className="logo-bar">|</span>
        <span className="logo-typing-wrapper">
          <span className="logo-typing">CodeWithZia</span>
        </span>
      </button>
    </Link>
  );
};

export default Logo;
