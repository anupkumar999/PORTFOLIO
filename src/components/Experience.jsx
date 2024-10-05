import React from "react";
import Python from "../assets/Python.png";
import github from "../assets/github.png";
import GoogleCloud from "../assets/GoogleCloud.png";
import sql from "../assets/sql.png"
import Ml from "../assets/Ml.png"
import Kubernetes from "../assets/kubernetes.png"
import Etl from "../assets/Etl.png"
import Docker from "../assets/Docker.png"


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Python,
      title: "Python",
      style: "shadow-white",
    },
    {
      id: 2,
      src: sql,
      title: "Sql",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: GoogleCloud,
      title: "Google Cloud",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: Ml,
      title: "Machine Learning",
      style: "shadow-blue-100",
    },
    {
      id: 5,
      src: Kubernetes,
      title: "Kubernetes",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: Etl,
      title: "ETL",
      style: "shadow-white",
    },
    {
      id: 7,
      src: Docker,
      title: "Docker",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-slate-800 to-slate-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-red-800 p-2 inline py-1">
            Experience
          </p>
          <p className="py-6">These are the technology I've Worked with </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title,style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
