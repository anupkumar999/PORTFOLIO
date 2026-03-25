import React from "react";
import Indoor from "../assets/portfolio/Indoor.jpeg";
import PrivateGPT from "../assets/portfolio/Privategpt.png";
import IPLAnalysis from "../assets/portfolio/Ipldataanalysis.png";

const Portfolio = () => {
  const portfolios = [
    { 
      id: 1, 
      src: PrivateGPT, 
      title: "BRD Automation", 
      subtitle: "Agentic Engineering",
      description: "Building autonomous documentation pipelines with structured LLM workflows.", 
      githubLink: "https://github.com/anupkumar999",
      tags: ["Vertex AI", "LLM"],
      gridClass: "md:col-span-2 md:row-span-2"
    },
    { 
      id: 2, 
      src: PrivateGPT, 
      title: "Text-to-SQL", 
      subtitle: "Dynamic Reporting",
      description: "Natural language query routing for BigQuery data pipelines.", 
      githubLink: "https://github.com/anupkumar999",
      tags: ["LangChain", "SQL"],
      gridClass: "md:col-span-1 md:row-span-1"
    },
    { 
      id: 3, 
      src: Indoor, 
      title: "AR Navigation", 
      subtitle: "Indoor Spatial AI",
      description: "Award-winning AR system for 20% faster routing.", 
      githubLink: "https://github.com/anupkumar999/Indoor_Navigation.git",
      tags: ["Unity", "AR"],
      gridClass: "md:col-span-1 md:row-span-1"
    },
    { 
      id: 4, 
      src: IPLAnalysis, 
      title: "MLOps Engine", 
      subtitle: "Real-time Inference",
      description: "Architecting production-grade ML endpoints with CI/CD automation.", 
      githubLink: "https://github.com/anupkumar999",
      tags: ["GCP", "Docker"],
      gridClass: "md:col-span-2 md:row-span-1"
    },
  ];

  return (
    <section name="portfolio" className="bg-white w-full text-black py-48">
      <div className="max-w-screen-xl px-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-20 text-center md:text-left">
          <h2 className="text-[12vw] md:text-[8rem] font-black tracking-tighter leading-none mb-4 text-gradient">
            Showcase.
          </h2>
          <p className="text-2xl text-gray-400 font-bold max-w-2xl">High-impact solutions. Built on intelligence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[350px]">
          {portfolios.map(({ id, src, title, subtitle, description, githubLink, tags, gridClass }) => (
            <div key={id} className={`bento-card relative group ${gridClass}`}>
              <img
                src={src}
                alt={title}
                className="w-full h-full object-cover grayscale transition-all duration-[1s] group-hover:grayscale-0 group-hover:scale-105 opacity-40 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent p-12 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-4 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  {tags?.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-black px-2 py-1 bg-black text-white rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-black text-blue-600 uppercase tracking-widest mb-1">{subtitle}</p>
                <h3 className="text-4xl font-black mb-3 tracking-tighter leading-none">{title}</h3>
                <p className="text-gray-500 font-bold text-lg max-w-xs mb-6 tracking-tight leading-snug">{description}</p>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-sm font-black px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200"
                >
                  View Case Study
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
