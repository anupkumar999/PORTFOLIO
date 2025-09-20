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
    { id: 5, link: "contact" },
  ];

  return (
    <header className="flex justify-between items-center w-full h-20 text-black bg-white px-4 fixed z-20 border-b border-gray-200">
      <div>
        <h1 className="text-2xl font-bold ml-2">Anup Kumar M</h1>
      </div>

      <nav className="hidden md:flex">
        <ul className="flex items-center">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-600 hover:text-black duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-30 text-gray-600 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

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