import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    { id: 1, child: <><FaLinkedin size={25} /></>, href: "https://www.linkedin.com/in/anup-kumar-a4b74717b/", ariaLabel: "LinkedIn" },
    { id: 2, child: <><FaGithub size={25} /></>, href: "https://github.com/anupkumar999", ariaLabel: "GitHub" },
    { id: 3, child: <><HiOutlineMail size={25} /></>, href: "mailto:anupkumarmofficial@gmail.com", ariaLabel: "Email" },
    { id: 4, child: <><BsFillPersonLinesFill size={25} /></>, href: "/Anupkumar.pdf", download: true, ariaLabel: "Resume" },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, download, ariaLabel }) => (
          <li
            key={id}
            className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-200"
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-gray-700 hover:text-black"
              download={download}
              target="_blank"
              rel="noreferrer"
              aria-label={ariaLabel}
            >
              <span className="sr-only">{ariaLabel}</span>
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;