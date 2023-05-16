import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-slate-800 to-slate-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-900">
            {" "}
            About{" "}
          </p>
        </div>
        <p className="text-xl mt-20">
        Hey this is Anup Kumar M and I'm currently pursuing a Master's
          degree in Computer Applications at MS Ramaiah Institute of Technology.
        I have always been interested in technology and its potential to
          improve our lives. In my free time, I enjoy exploring new programming
          languages and frameworks, working on personal coding projects, and
          contributing to open source communities. I'm particularly passionate
          about developing software solutions that solve real-world problems and
          make a positive impact on society. Ah others who share my
          passion for technology and innovation.
        </p>
      </div>
    </div>
  );
};

export default About;
