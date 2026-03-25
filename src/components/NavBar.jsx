import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { MdOutlineMoreHoriz, MdOutlineClose } from "react-icons/md";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, name: "Intelligence", target: "home" },
    { id: 2, name: "Showcase", target: "portfolio" },
    { id: 3, name: "Legacy", target: "experience" },
    { id: 4, name: "Credentials", target: "certifications" },
    { id: 5, name: "Connect", target: "contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'apple-glass h-12' : 'bg-white h-16'}`}>
      <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center px-8">
        
        <div className="cursor-pointer">
          <Link to="home" smooth duration={800} className="text-sm font-black tracking-tight uppercase hover:opacity-60 transition-opacity">Anup Kumar</Link>
        </div>

        <nav className="hidden md:flex space-x-10">
          {links.map(({ id, name, target }) => (
            <Link key={id} to={target} smooth duration={800} offset={-48} 
              className="text-[11px] font-semibold text-gray-500 hover:text-black cursor-pointer transition-colors tracking-wide uppercase">
              {name}
            </Link>
          ))}
        </nav>

        <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer text-black">
          {nav ? <MdOutlineClose size={24} /> : <MdOutlineMoreHoriz size={24} />}
        </div>
      </div>

      {nav && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8">
          {links.map(({ id, name, target }) => (
            <Link key={id} onClick={() => setNav(false)} to={target} smooth duration={800} 
              className="text-4xl font-bold tracking-tight text-gray-800 hover:text-black cursor-pointer">
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default NavBar;
