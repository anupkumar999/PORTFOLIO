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
      description: "Working within Asset & Wealth Management, architecting scalable Python pipelines and deploying cutting-edge AI/ML enterprise solutions." 
    },
    { 
      company: "Pluto7", 
      title: "AI Software Engineer", 
      duration: "May 2024 - Jan 2026", 
      location: "Bengaluru, India", 
      description: "Developed agentic AI workflows using LLMs and Vertex AI. Built BigQuery SQL generation pipelines using a custom LLM routing system and deployed real-time ML endpoints." 
    },
    { 
      company: "Pluto7", 
      title: "Internship Trainee", 
      duration: "Feb 2024 - Apr 2024", 
      location: "Bengaluru, India", 
      description: "Focused on Google Cloud Platform infrastructure, SQL optimization, and large-scale data engineering workflows." 
    },
    { 
      company: "Dense Layer AI Technologies", 
      title: "AI Engineering Intern", 
      duration: "Dec 2023 - Feb 2024", 
      location: "Remote", 
      description: "Engineered UI/UX components for AI applications and developed scalable back-end microservices deployed via Docker." 
    },
  ];

  const techs = [
    { id: 1, src: Python, title: "Python" }, 
    { id: 2, src: sql, title: "SQL" }, 
    { id: 3, src: GoogleCloud, title: "GCP" }, 
    { id: 4, src: Ml, title: "GenAI" }, 
    { id: 5, src: Kubernetes, title: "Kubernetes" }, 
    { id: 6, src: Etl, title: "Data Pipelines" }, 
    { id: 7, src: Docker, title: "Docker" }, 
    { id: 8, src: github, title: "GitHub" },
  ];

  return (
    <section name="experience" className="bg-white w-full py-32 border-b border-slate-200">
      <div className="max-w-screen-xl px-6 mx-auto flex flex-col justify-center w-full h-full text-slate-800">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 inline-block border-b-4 border-blue-600 pb-2">
            Experience & Tools
          </h2>
          <p className="py-6 text-xl text-slate-600 font-medium max-w-2xl">
            My professional journey and the technologies I use to build scalable systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Vertical Timeline */}
          <div className="relative border-l-4 border-slate-200 ml-3">
            {experiences.map(({ company, title, duration, location, description }, index) => (
              <div key={index} className="mb-12 ml-10 relative group">
                <div className="absolute -left-12 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-blue-500 shadow-sm group-hover:scale-125 transition-transform"></div>
                
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">{duration}</p>
                <h3 className="text-2xl font-bold text-slate-900">{company}</h3>
                <h4 className="text-lg font-semibold text-slate-700 mt-1">{title}</h4>
                <p className="text-sm text-slate-500 font-medium mb-3">{location}</p>
                <p className="text-slate-600 leading-relaxed font-medium">{description}</p>
              </div>
            ))}
          </div>

          {/* Technical Arsenal Grid */}
          <div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-8 pb-2 border-b border-slate-200">Technical Arsenal</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {techs.map(({ id, src, title }) => (
                <div
                  key={id}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <img src={src} alt={title} className="w-16 h-16 object-contain mb-4 filter drop-shadow-sm group-hover:scale-110 transition-transform" />
                  <p className="font-bold text-slate-700 text-sm text-center">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
