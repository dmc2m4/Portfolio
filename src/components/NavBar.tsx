import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const links = [
  { id: 1, label: "Home", to: "home" },
  { id: 2, label: "About", to: "about" },
  { id: 3, label: "Projects", to: "projects" },
  { id: 4, label: "Contact", to: "contact" },
];

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#10131a]/80 border-b border-[#32353c]">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white font-bold tracking-tight text-lg md:text-xl">
          DANIEL<span className="text-[#adc6ff]">_</span>MARTINEZ
        </h1>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              smooth
              duration={500}
              spy
              offset={-70}
              activeClass="text-[#adc6ff] border-b border-[#adc6ff]"
              className="cursor-pointer text-sm font-medium text-gray-400 hover:text-white transition-all pb-1"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-5 py-2 text-sm font-semibold bg-[#adc6ff] text-[#10131a] hover:opacity-90 transition"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Icon */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="md:hidden text-gray-300"
        >
          {navOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden border-t border-[#32353c] bg-[#10131a]">
          <div className="flex flex-col py-6">
            {links.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                smooth
                duration={500}
                onClick={() => setNavOpen(false)}
                className="px-6 py-4 text-gray-300 hover:text-[#adc6ff] cursor-pointer"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              className="mx-6 mt-4 py-3 text-center bg-[#adc6ff] text-[#10131a] font-semibold"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
