import React from "react";
import Indoor from "../assets/portfolio/Indoor.jpeg";
import PrivateGPT from "../assets/portfolio/Privategpt.png";
import IPLAnalysis from "../assets/portfolio/Ipldataanalysis.png";

const Portfolio = () => {
  const portfolios = [
    { 
      id: 1, 
      src: PrivateGPT, 
      title: "GenAI BRD Automation", 
      subtitle: "Agentic Engineering",
      description: "Built an intelligent agent using Google ADK to automate Business Requirement Document generation, significantly reducing manual documentation time.", 
      githubLink: "https://github.com/anupkumar999",
      tags: ["Vertex AI", "LLM", "Python", "GCP"]
    },
    { 
      id: 2, 
      src: PrivateGPT, 
      title: "Text-to-SQL Pipeline", 
      subtitle: "Dynamic Reporting",
      description: "Developed a natural language query routing system that translates complex stakeholder queries into executable BigQuery scripts.", 
      githubLink: "https://github.com/anupkumar999",
      tags: ["BigQuery", "LangChain", "SQL", "Cloud Run"]
    },
    { 
      id: 3, 
      src: Indoor, 
      title: "AR Navigation System", 
      subtitle: "Spatial AI",
      description: "Engineered an award-winning AR navigation system improving indoor routing speeds by 20%. Recognized as 'Best Start-Up'.", 
      githubLink: "https://github.com/anupkumar999/Indoor_Navigation.git",
      tags: ["Unity", "C#", "AR Core", "Algorithms"]
    },
    { 
      id: 4, 
      src: IPLAnalysis, 
      title: "MLOps Architecture", 
      subtitle: "Real-time Inference",
      description: "Architected production-grade ML endpoints on Vertex AI with CI/CD automation, providing scalable real-time inference.", 
      githubLink: "https://github.com/anupkumar999",
      tags: ["GCP", "Docker", "Vertex AI", "CI/CD"]
    },
  ];

  return (
    <section name="portfolio" className="bg-slate-50 w-full text-slate-800 py-32 border-b border-slate-200">
      <div className="max-w-screen-xl px-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 inline-block border-b-4 border-blue-600 pb-2">
            Featured Projects
          </h2>
          <p className="py-6 text-xl text-slate-600 font-medium max-w-2xl">
            A selection of advanced AI systems and full-stack solutions I've architected.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {portfolios.map(({ id, src, title, subtitle, description, githubLink, tags }) => (
            <div key={id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="h-64 overflow-hidden relative group">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">{subtitle}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 flex-grow leading-relaxed font-medium mb-6 text-lg">{description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {tags?.map(tag => (
                    <span key={tag} className="text-xs font-bold px-3 py-1.5 bg-slate-100 text-slate-700 border border-slate-200 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
                >
                  View Repository
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
