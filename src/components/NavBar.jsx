import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "certifications" },
    { id: 6, link: "contact" },
  ];

  return (
    <header className="flex justify-center items-center w-full h-16 text-black bg-white/70 backdrop-blur-md fixed z-50 border-b border-gray-200/50">
      <div className="max-w-screen-xl w-full flex justify-between items-center px-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight hover:opacity-70 duration-300 cursor-pointer">Anup Kumar</h1>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="cursor-pointer capitalize text-xs font-semibold text-gray-500 hover:text-black transition-colors duration-300"
              >
                <Link hex to={link} smooth duration={800} offset={-64}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="md:hidden">
            {/* Mobile menu icon remains similar but smaller */}
        </div>
      </div>
    </header>

      {nav && (
        <nav className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-gray-600">
          <ul>
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;