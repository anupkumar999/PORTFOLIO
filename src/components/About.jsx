import React from "react";

const About = () => {
  return (
    <section name="about" className="w-full bg-white text-black py-24">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-center">
        <div className="pb-8">
          <h2 className="text-4xl font-extrabold inline border-b-4 border-gray-400">
            About
          </h2>
        </div>

        <p className="text-xl mt-10 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          I am an AI Software Engineer with ~2 years of experience in AI, data engineering, and cloud-based solutions. My work spans AI agents and Agent Development Kit (ADK), where I design and develop LLM-powered applications that integrate seamlessly into enterprise workflows.
        </p>
        <br />
        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          From transforming raw data into actionable insights to building end-to-end data pipelines, I thrive on solving complex challenges. My technical strengths include Python, SQL, GCP, and modern AI frameworks. I am passionate about creating agentic systems and automation frameworks that deliver measurable business value.
        </p>
        <br />
        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          🏆 Honored with the "Best Start-Up Award" by the Institution’s Innovation Council for entrepreneurial spirit and commitment to innovation.
        </p>
      </div>
    </section>
  );
};

export default About;