import React from "react";

const About = () => {
  return (
    <section name="about" className="w-full bg-white text-slate-800 py-32 border-b border-slate-200">
      <div className="max-w-screen-xl px-6 mx-auto flex flex-col justify-center w-full h-full text-left">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 inline-block border-b-4 border-blue-600 pb-2">
            Professional Summary
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
          <div>
            <p className="mb-6">
              I am an <span className="font-bold text-slate-900">AI Software Engineer</span> specializing in Generative AI, machine learning pipelines, and cloud-based enterprise solutions. Currently working as a Software Engineer II at <span className="font-bold text-blue-600">JPMorgan Chase & Co.</span>, I design and deploy scalable intelligent applications.
            </p>
            <p className="mb-6">
              My expertise spans developing LLM-powered applications, building agentic workflows, and deploying real-time ML systems on Google Cloud Platform. From transforming raw data into actionable insights to constructing end-to-end data architectures, I thrive on complex technical challenges.
            </p>
          </div>
          <div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Competencies</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Generative AI & LLMs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Google Cloud (Vertex AI)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Python & Data Engineering
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> MLOps & Real-time Inference
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Agentic System Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Enterprise CI/CD
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-200 text-sm">
                <p className="italic text-slate-500">
                  🏆 Recipient of the <span className="font-bold text-slate-900">"Best Start-Up Award"</span> for an innovative AR-based navigation system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
