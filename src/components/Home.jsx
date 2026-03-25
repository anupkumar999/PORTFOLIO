import React from "react";
import Heroimage from "../assets/heroImage.png";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section name="home" className="w-full bg-slate-50 pt-32 pb-24 border-b border-slate-200">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse items-center justify-center h-full px-6 md:flex-row md:justify-between gap-12">
        <div className="flex flex-col justify-center w-full md:w-3/5 text-center md:text-left">
          
          <div className="flex items-center gap-2 mb-6 bg-blue-100 text-blue-700 w-fit px-4 py-1.5 rounded-full text-xs font-bold border border-blue-200 shadow-sm mx-auto md:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Currently at JPMorgan Chase & Co.
          </div>

          <h2 className="text-lg md:text-xl font-semibold text-slate-500 uppercase tracking-widest mb-2">Software Engineer II</h2>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Building intelligent <br className="hidden md:block" />
            <span className="text-blue-600">enterprise AI systems.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto md:mx-0 leading-relaxed mb-10">
            I'm <span className="font-bold text-slate-900">Anup Kumar</span>, an engineer specializing in Generative AI, LLM workflows, and cloud-native Machine Learning architectures. I build scalable end-to-end solutions that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              offset={-80}
              className="group text-white w-full sm:w-auto px-8 py-4 flex items-center justify-center rounded-xl bg-blue-600 font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              View My Work
              <span className="group-hover:translate-x-1 duration-300">
                <MdOutlineArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className="text-slate-700 w-full sm:w-auto px-8 py-4 flex items-center justify-center rounded-xl bg-white border border-slate-300 font-bold hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm cursor-pointer"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex justify-center mt-8 md:mt-0 relative">
          {/* Decorative Blob */}
          <div className="absolute inset-0 bg-blue-400 blur-[80px] opacity-20 rounded-full w-3/4 h-3/4 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10"></div>
          
          <div className="p-2 bg-white rounded-[2rem] shadow-xl border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src={Heroimage}
              alt="Anup Kumar Profile"
              className="rounded-[1.5rem] w-full max-w-sm object-cover shadow-inner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
