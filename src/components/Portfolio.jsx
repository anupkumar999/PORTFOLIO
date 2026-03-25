import React from "react";
import Indoor from "../assets/portfolio/Indoor.jpeg";
import PrivateGPT from "../assets/portfolio/Privategpt.png";
import IPLAnalysis from "../assets/portfolio/Ipldataanalysis.png";

const Portfolio = () => {
  const portfolios = [
    { 
      id: 1, 
      src: PrivateGPT, 
      title: "GenAI Agent for BRD Automation", 
      description: "Built an intelligent agent using Google ADK to automate Business Requirement Document (BRD) generation. Reduced manual documentation time by 60% through structured LLM workflows.", 
      githubLink: "https://github.com/anupkumar999",
      tags: ["Vertex AI", "LLM", "Python"]
    },
    { 
      id: 2, 
      src: PrivateGPT, 
      title: "BigQuery SQL Generation Pipeline", 
      description: "Developed a text-to-SQL system that routes complex natural language queries into executable BigQuery scripts, enabling non-technical stakeholders to gain instant data insights.", 
      githubLink: "https://github.com/anupkumar999",
      tags: ["BigQuery", "LangChain", "SQL"]
    },
    { 
      id: 3, 
      src: Indoor, 
      title: "Indoor AR Navigation System", 
      description: "Award-winning AR navigation system that achieved 20% faster indoor routing. Recognized as 'Best Start-Up' for its innovative technical implementation.", 
      githubLink: "https://github.com/anupkumar999/Indoor_Navigation.git",
      tags: ["Unity", "AR", "Algorithms"]
    },
    { 
      id: 4, 
      src: IPLAnalysis, 
      title: "Real-time ML Inference Endpoints", 
      description: "Architected and deployed production-grade ML endpoints on Vertex AI with CI/CD automation, providing scalable real-time inference for enterprise customer projects.", 
      githubLink: "https://github.com/anupkumar999",
      tags: ["MLOps", "GCP", "Docker"]
    },
  ];

  return (
    <section name="portfolio" className="bg-white w-full text-black py-28">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-extrabold inline border-b-4 border-gray-400">
            Portfolio
          </h2>
          <p className="py-6 text-xl text-gray-600">A showcase of advanced AI/ML systems and modern software solutions.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-12 px-4 sm:px-0">
          {portfolios.map(({ id, src, title, description, githubLink, tags }) => (
            <div key={id} className="rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
              <div className="h-56 overflow-hidden">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags?.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-black text-white rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-600 flex-grow leading-relaxed text-sm mb-6">{description}</p>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 duration-300 bg-white border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-white"
                >
                  Explore Project
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