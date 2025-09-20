import React from "react";
import Indoor from "../assets/portfolio/Indoor.jpeg";
import Hotelbooking from "../assets/portfolio/Hotelbooking.jpeg";

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: Indoor, title: "Indoor Navigation System using AR", description: "An award-winning system to enhance visitor experience with 20% faster navigation. Recognized as 'Best Start-Up' by the Institution's Innovation Council.", githubLink: "https://github.com/anupkumar999/Indoor_Navigation.git" },
    { id: 2, src: Hotelbooking, title: "Hotel Reservation System", description: "A full-stack MERN application for hotel reservations, featuring advanced price filtering and dynamic booking calculations, improving search accuracy by 30%.", githubLink: "https://github.com/anupkumar999/HOTEL-BOOKING" },
  ];

  return (
    <section name="portfolio" className="bg-white w-full text-black py-24">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-extrabold inline border-b-4 border-gray-400">
            Portfolio
          </h2>
          <p className="py-6 text-lg text-gray-600">Check out some of my work right here.</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-0">
          {portfolios.map(({ id, src, title, description, githubLink }) => (
            <div key={id} className="rounded-lg border border-gray-200 flex flex-col">
              <img
                src={src}
                alt={title}
                className="rounded-t-lg duration-200 hover:opacity-90"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 flex-grow">{description}</p>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center mt-4 px-6 py-3 duration-200 hover:scale-105 bg-black text-white rounded-full"
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