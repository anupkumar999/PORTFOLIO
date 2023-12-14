import React from "react";
import Indoor from "../assets/portfolio/Indoor.jpeg";
import Hotelbooking from "../assets/portfolio/Hotelbooking.jpeg";
import Ipldataanalysis from "../assets/portfolio/Ipldataanalysis.png";
import Privategpt from "../assets/portfolio/Privategpt.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Indoor,
      githubLink: "https://github.com/anupkumar999/Indoor_Navigation.git",
    },
    {
      id: 2,
      src: Ipldataanalysis,
      githubLink: "https://github.com/anupkumar999/IPL-DATA-ANALYSIS-USING-PYTHON-",
    },
    {
      id: 3,
      src: Hotelbooking,
      githubLink: "https://github.com/anupkumar999/HOTEL-BOOKING",
    },
    {
      id: 4,
      src: Privategpt,
      githubLink: "https://github.com/anupkumar999/ScrapingHospital",
    },
  ];

  const openGitHubLink = (githubLink) => {
    window.open(githubLink, "_blank");
  };

  return (
    <div name="portfolio" className="bg-gradient-to-b from-slate-800 to-slate-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 py-2 border-red-900">
            portfolio{" "}
          </p>
          <p className="py-6"> Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, githubLink }) => (
            <div key={id} className="shadow-md shadow-slate-900 rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => openGitHubLink(githubLink)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
