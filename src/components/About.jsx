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
        Software Developer

I am a recent Master Of Computer Application graduate with a passion for technology and a strong foundation in Data Structure and Algorithms (DSA) and Object-Oriented Programming (OOP) concepts. As a Developer, I have gained valuable experience in developing and implementing software solutions for various Personal projects.

Certainly, here's a rephrased version of your statement with the information about winning an award:

"Beyond my professional endeavors, I am honored to have received recognition for my entrepreneurial spirit. I was awarded the 'Start-Up Award' by the Institution’s Innovation Council, further affirming my commitment to innovation and excellence."

I am constantly seeking new challenges and opportunities to further develop my skills and knowledge. I am eager to bring my passion, technical expertise, and strong problem-solving skills to new projects and continue to make a positive impact in the industry.
        </p>
      </div>
    </div>
  );
};

export default About;
