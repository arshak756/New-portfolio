import { useState } from "react";
import { useTheme } from "../components/ThemeContext"; // ✅ Import useTheme hook

function Navbar() {
  const { darkMode, toggleTheme } = useTheme(); // ✅ Use context
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "#home" },
    { name: "About", to: "#about" },
    { name: "Projects", to: "#projects" },
    { name: "Contact", to: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-red-600">
          Net<span className="text-black dark:text-white">flix</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.to}
                className="text-sm font-medium text-black dark:text-white hover:text-red-500 dark:hover:text-red-500 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Toggle + Menu Icon */}
        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="text-sm bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white px-3 py-1 rounded transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Hamburger Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl text-black dark:text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-3 bg-white dark:bg-black">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.to}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium text-black dark:text-white hover:text-red-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
