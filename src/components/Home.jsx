import React from "react";
import Heroimage from "../assets/heroImage.png";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-slate-900 bg-slate-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">
            I,m <br/> a Passionate Developer
          </h2>
          <p className="text-white py-4 max-w-md">
            I'm currently pursuing a Master's degree in Computer Applications at
            MS Ramaiah Institute of Technology. I have always been interested in
            technology and its potential to improve our lives.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-800 to-red-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Heroimage}
            alt="MY AVATAR"
            className="rounded-2xl mx-auto w-2/3 md:w-full  "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
