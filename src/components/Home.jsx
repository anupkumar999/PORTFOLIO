import React from "react";
import Heroimage from "../assets/heroImage.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section name="home" className="w-full bg-white text-black min-h-screen pt-32 pb-16">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-6">
        
        {/* Apple-style Badge */}
        <div className="flex items-center gap-2 mb-12 px-4 py-1.5 bg-gray-50 text-gray-900 w-fit rounded-full text-xs font-bold border border-gray-200 shadow-sm transition-all hover:scale-105 cursor-default">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            SYSTEM OPTIMIZED: GENAI & ML
        </div>

        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-black max-w-4xl">
            Intelligence. <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Built Different.
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-500 max-w-2xl leading-snug">
            Anup Kumar. Software Engineer II at <span className="text-black">JPMorgan Chase & Co.</span> 
            Architecting the next generation of AI systems.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              to="portfolio"
              smooth
              duration={800}
              offset={-64}
              className="px-8 py-3.5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-200 cursor-pointer"
            >
              Explore Intelligence
            </Link>
            <Link
              to="about"
              smooth
              duration={800}
              offset={-64}
              className="px-8 py-3.5 bg-transparent border-2 border-black text-black rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Hero Image - Apple Product Style Presentation */}
        <div className="mt-20 w-full max-w-5xl">
          <div className="relative group overflow-hidden rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
            <img
                src={Heroimage}
                alt="System Architecture Presentation"
                className="w-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
