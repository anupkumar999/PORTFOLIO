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

        <p className="text-xl mt-10 text-gray-700 leading-relaxed max-w-4xl mx-auto">
          I’m <span className="font-bold text-black">Anup Kumar</span> — a Software Engineer II at <span className="font-bold text-blue-600">JPMorgan Chase & Co.</span> specializing in <span className="text-black font-semibold">Generative AI</span>, <span className="text-black font-semibold">LLM development</span>, and cloud-native ML systems on Google Cloud. 
        </p>
        <br />
        <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
          I build <span className="font-bold text-black italic">agentic systems</span>, automated pipelines, and end-to-end ML solutions that solve real customer problems at scale. My expertise lies in designing Vertex AI workflows, BigQuery SQL generation pipelines, and enterprise-grade MLOps architectures.
        </p>
        <br />
        <div className="flex flex-wrap justify-center gap-4 py-8">
            <span className="bg-gray-100 px-4 py-2 rounded-full font-medium border border-gray-200">✅ Google Cloud Certified ML Engineer</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full font-medium border border-gray-200">✅ GenAI Agent Development</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full font-medium border border-gray-200">✅ MLOps & Real-time Inference</span>
        </div>
        <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto italic">
          🏆 Recipient of the <span className="font-bold text-black">"Best Start-Up Award"</span> (Ramaiah Institute of Technology) for an innovative AR-based navigation system.
        </p>
      </div>
    </section>
  );
};

export default About;