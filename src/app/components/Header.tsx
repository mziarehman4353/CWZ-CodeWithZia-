import Logo from "./Logo";  // Import Logo component
import Link from "next/link"; // Import Link component

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Logo /> {/* Logo component */}
        <nav>
          <ul className="flex space-x-6 text-white">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
