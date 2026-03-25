import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "certifications" },
    { id: 6, link: "contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight cursor-pointer">
            <Link to="home" smooth duration={500}>Anup Kumar</Link>
          </h1>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="cursor-pointer capitalize text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Link to={link} smooth duration={500} offset={-80}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-50 text-slate-600 hover:text-blue-600 md:hidden transition-colors duration-200"
        >
          {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <nav className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-50 text-slate-900 z-40">
            <ul className="w-full text-center space-y-8">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="cursor-pointer capitalize text-3xl font-bold hover:text-blue-600 transition-colors duration-200"
                >
                  <Link
                    onClick={() => setNav(!nav)}
                    to={link}
                    smooth
                    duration={500}
                    offset={-80}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
