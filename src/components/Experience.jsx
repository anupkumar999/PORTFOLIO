import React from "react";
import Python from "../assets/Python.png";
import github from "../assets/github.png";
import GoogleCloud from "../assets/GoogleCloud.png";
import sql from "../assets/sql.png";
import Ml from "../assets/Ml.png";
import Kubernetes from "../assets/kubernetes.png";
import Etl from "../assets/Etl.png";
import Docker from "../assets/Docker.png";

const Experience = () => {
  const experiences = [
    { 
      company: "JPMorgan Chase & Co.", 
      title: "Software Engineer II", 
      duration: "Jan 2026 - Present", 
      location: "Bengaluru, India", 
      description: "Asset & Wealth Management. High-performance Python & AI/ML engineering." 
    },
    { 
      company: "Pluto7", 
      title: "AI Software Engineer", 
      duration: "May 2024 - Jan 2026", 
      location: "Bengaluru, India", 
      description: "Agentic AI workflows. Vertex AI. MLOps. GenAI at scale." 
    },
    { 
      company: "Pluto7", 
      title: "Internship Trainee", 
      duration: "Feb 2024 - Apr 2024", 
      location: "Bengaluru, India", 
      description: "GCP Cloud Infrastructure & Data Pipelines." 
    },
  ];

  const techs = [
    { id: 1, src: Python, title: "Python" }, 
    { id: 2, src: sql, title: "SQL" }, 
    { id: 3, src: GoogleCloud, title: "GCP" }, 
    { id: 4, src: Ml, title: "GenAI" }, 
    { id: 5, src: Kubernetes, title: "K8s" }, 
    { id: 6, src: Etl, title: "ETL" }, 
    { id: 7, src: Docker, title: "Docker" }, 
    { id: 8, src: github, title: "GitHub" },
  ];

  return (
    <section name="experience" className="bg-white w-full py-32">
      <div className="max-w-screen-xl mx-auto p-6 flex flex-col justify-center w-full h-full text-black">
        <div className="pb-12 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Legacy.
          </h2>
          <p className="text-xl text-gray-500 font-medium italic">A timeline of technical excellence.</p>
        </div>

        <div className="mt-12 space-y-12">
          {experiences.map(({ company, title, duration, location, description }, index) => (
            <div key={index} className="group flex flex-col md:flex-row gap-8 items-start border-b border-gray-100 pb-12 transition-all duration-500 hover:bg-gray-50/50 p-6 rounded-3xl">
              <div className="w-full md:w-1/3">
                <p className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-2">{duration}</p>
                <h3 className="text-3xl font-bold tracking-tight">{company}</h3>
                <p className="text-lg font-semibold text-gray-400 mt-1">{location}</p>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-2xl font-bold text-gray-800 mb-4">{title}</p>
                <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32">
          <h3 className="text-4xl font-bold tracking-tight text-center mb-16 underline underline-offset-[12px] decoration-blue-600">Technical Arsenal</h3>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8 px-4 sm:px-0">
            {techs.map(({ id, src, title }) => (
              <div
                key={id}
                className="group flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center p-4 transition-all duration-500 group-hover:bg-white group-hover:shadow-2xl group-hover:-translate-y-2 grayscale group-hover:grayscale-0">
                    <img src={src} alt={title} className="w-full h-full object-contain" />
                </div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
