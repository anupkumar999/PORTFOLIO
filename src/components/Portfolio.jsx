import React from "react";
import Indoor from "../assets/portfolio/Indoor.jpeg";
import Hotelbooking from "../assets/portfolio/Hotelbooking.jpeg";

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: Indoor, title: "Indoor Navigation System using AR", description: "Engineered an award-winning AR navigation system that improved visitor experience and achieved 20% faster indoor routing. Recognized as 'Best Start-Up' for its innovative approach.", githubLink: "https://github.com/anupkumar999/Indoor_Navigation.git" },
    { id: 2, src: Hotelbooking, title: "Hotel Reservation System", description: "Developed a full-stack MERN application for hotel reservations, featuring advanced price filtering and dynamic booking calculations which improved search accuracy by 30%.", githubLink: "https://github.com/anupkumar999/HOTEL-BOOKING" },
  ];

  return (
    <section name="portfolio" className="bg-white w-full text-black py-28">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-extrabold inline border-b-4 border-gray-400">
            Portfolio
          </h2>
          <p className="py-6 text-xl text-gray-600">A selection of projects that showcase my skills.</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-0">
          {portfolios.map(({ id, src, title, description, githubLink }) => (
            <div key={id} className="rounded-lg border border-gray-200 flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <img
                src={src}
                alt={title}
                className="rounded-t-lg"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 flex-grow leading-relaxed">{description}</p>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center mt-6 px-6 py-3 duration-300 bg-black text-white rounded-full hover:bg-gray-800"
                >
                  View Code
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