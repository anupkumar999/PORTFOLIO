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
      subtitle: "Agentic Documentation",
      description: "Automating requirement engineering with structured LLM workflows.", 
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
      title: "MLOps Architecture", 
      subtitle: "Real-time Inference",
      description: "Production-grade ML endpoints on Vertex AI with automated CI/CD.", 
      githubLink: "https://github.com/anupkumar999",
      tags: ["GCP", "Docker"],
      gridClass: "md:col-span-2 md:row-span-1"
    },
  ];

  return (
    <section name="portfolio" className="bg-gray-50 w-full text-black py-32">
      <div className="max-w-screen-xl p-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-12 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Showcase.
          </h2>
          <p className="text-xl text-gray-500 font-medium">Extraordinary projects built with AI.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {portfolios.map(({ id, src, title, subtitle, description, githubLink, tags, gridClass }) => (
            <div key={id} className={`group relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${gridClass}`}>
              <img
                src={src}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent p-8 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {tags?.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-black px-2 py-1 bg-black text-white rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">{subtitle}</p>
                <h3 className="text-3xl font-bold mb-2 tracking-tight">{title}</h3>
                <p className="text-gray-600 font-medium text-sm max-w-xs mb-4">{description}</p>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-sm font-bold px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
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
