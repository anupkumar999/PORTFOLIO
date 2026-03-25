import React from "react";
import Heroimage from "../assets/heroImage.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section name="home" className="w-full bg-white pt-48 pb-20 relative overflow-hidden">
      
      {/* Background Soft Glow - Subtle AI Vibe */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-gradient-radial from-blue-50/40 via-transparent to-transparent opacity-50 blur-[100px] pointer-events-none"></div>

      <div className="max-w-screen-xl mx-auto flex flex-col items-center px-6">
        
        <div className="flex items-center gap-2 mb-8 bg-blue-50 text-blue-600 w-fit px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border border-blue-100 shadow-sm transition-all hover:scale-105 cursor-default">
            AI AGENT: OPTIMIZED FOR JPMORGAN CHASE & CO.
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-[12vw] md:text-[8rem] font-black tracking-tight leading-[0.9] text-gradient">
            Intelligence. <br />
            Experience it.
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-400 max-w-3xl mx-auto leading-snug tracking-tight">
            Anup Kumar. Software Engineer II. Architecting the future of financial AI. 
            <span className="text-black ml-2 font-black italic">Generative AI. Agentic Systems. Cloud Native ML.</span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
            <Link to="portfolio" smooth duration={1000} offset={-48}
              className="px-10 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-gray-200 cursor-pointer">
              Explore Intelligence
            </Link>
            <Link to="about" smooth duration={1000} offset={-48}
              className="px-10 py-4 bg-transparent border-2 border-black text-black rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
              Learn More
            </Link>
          </div>
        </div>

        {/* Hero Product Presentation */}
        <div className="mt-32 w-full max-w-[1400px]">
          <div className="bento-card relative h-[600px] shadow-sm">
            <img
                src={Heroimage}
                alt="System Architecture"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute bottom-12 left-12">
               <p className="text-xs font-black uppercase tracking-widest text-black/50 mb-2">Neural Engine</p>
               <h3 className="text-4xl font-black tracking-tight">Optimized for Enterprise Scale.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
