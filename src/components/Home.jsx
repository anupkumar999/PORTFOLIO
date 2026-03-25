import React from "react";
import Heroimage from "../assets/heroImage.png";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section name="home" className="w-full bg-white text-black pt-20">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full min-h-screen px-4 md:flex-row md:justify-between">
        <div className="flex flex-col justify-center h-full md:w-1/2 md:pr-12 text-center md:text-left">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-black">
            Software Engineer II <span className="text-gray-500">| AI & ML</span>
          </h1>
          <p className="text-gray-600 text-xl py-4 max-w-md mx-auto md:mx-0 leading-relaxed">
            I am <span className="font-bold text-black">Anup Kumar</span>, building the future of finance and enterprise intelligence at <span className="font-bold text-blue-600">JPMorgan Chase & Co.</span> 
            Specializing in Generative AI, LLMs, and cloud-native ML systems.
          </p>

          <div>
            <div className="flex items-center gap-2 mb-4 bg-green-50 text-green-700 w-fit px-3 py-1 rounded-full text-sm font-bold border border-green-200">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                AI AGENT: ACTIVE & OPTIMIZING
            </div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center justify-center mx-auto md:mx-0 rounded-full bg-black cursor-pointer hover:bg-gray-800 duration-300 transform hover:scale-[1.02] transition-transform"
            >
              View My Work
              <span className="group-hover:translate-x-1 duration-300">
                <MdOutlineArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={Heroimage}
            alt="Anup Kumar's Memoji"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;