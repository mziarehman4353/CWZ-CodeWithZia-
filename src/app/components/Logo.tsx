"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" passHref>
      <button className="flex items-center gap-2">
        <span className="logo-text">CWZ-CodeWithZia</span>
      </button>
    </Link>
  );
};

export default Logo;
