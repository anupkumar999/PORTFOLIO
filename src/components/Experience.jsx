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
    { company: "Pluto7", title: "AI Software Engineer", duration: "May 2024 - Present", location: "Greater Bengaluru Area", description: null, },
    { company: "Pluto7", title: "Internship Trainee", duration: "Feb 2024 - Apr 2024", location: "Bangalore Urban, Karnataka, India", description: null, },
    { company: "Dense Layer AI Technologies", title: "AI Engineering Intern", duration: "Dec 2023 - Feb 2024", location: "Greater Bengaluru Area · Remote", description: "Worked on projects involving front-end and back-end technologies for AI/ML, including API development and Docker deployment." },
  ];

  const techs = [
    { id: 1, src: Python, title: "Python" }, { id: 2, src: sql, title: "SQL" }, { id: 3, src: GoogleCloud, title: "Google Cloud" }, { id: 4, src: Ml, title: "Machine Learning" }, { id: 5, src: Kubernetes, title: "Kubernetes" }, { id: 6, src: Etl, title: "ETL" }, { id: 7, src: Docker, title: "Docker" }, { id: 8, src: github, title: "Github" },
  ];

  return (
    <section name="experience" className="bg-white w-full py-24">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div className="pb-8">
          <h2 className="text-4xl font-extrabold inline border-b-4 border-gray-400">
            Experience
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-12">
          {experiences.map(({ company, title, duration, location, description }, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-6">
              <p className="text-2xl font-bold">{company}</p>
              <p className="text-lg font-medium text-gray-800">{title}</p>
              <p className="text-sm text-gray-500">{duration} · {location}</p>
              {description && (
                <p className="mt-2 text-gray-600">{description}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold">Technical Skills</h3>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-0">
            {techs.map(({ id, src, title }) => (
              <div
                key={id}
                className="p-4 border border-gray-200 rounded-lg hover:scale-105 duration-300 flex flex-col items-center justify-center"
              >
                <img src={src} alt={title} className="w-20 mx-auto" />
                <p className="mt-4 font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;