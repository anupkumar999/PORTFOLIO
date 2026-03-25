import React from "react";
import { FaCertificate } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Google Cloud Certified Professional Machine Learning Engineer",
      issuer: "Google Cloud",
      date: "Aug 2025 - Aug 2027",
      link: "https://www.credly.com/badges/your-badge-id", // Replace with real link if known
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "MuleSoft Integration Associate",
      issuer: "MuleSoft",
      date: "Feb 2023 - Feb 2025",
      link: "#",
      color: "bg-cyan-500",
    },
  ];

  return (
    <div name="certifications" className="w-full bg-gray-50 py-24">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div className="pb-8 text-center md:text-left">
          <h2 className="text-4xl font-extrabold inline border-b-4 border-gray-400">
            Certifications
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 mt-10">
          {certifications.map(({ id, title, issuer, date, link, color }) => (
            <div key={id} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-start gap-4 transition-transform hover:scale-[1.02]">
              <div className={`p-4 rounded-xl ${color} text-white`}>
                <FaCertificate size={30} />
              </div>
              <div>
                <h3 className="text-xl font-bold leading-tight">{title}</h3>
                <p className="text-gray-600 font-medium mt-1">{issuer}</p>
                <p className="text-sm text-gray-400 mt-2">{date}</p>
                <a href={link} target="_blank" rel="noreferrer" className="inline-block mt-4 text-sm font-bold border-b-2 border-black">View Credential</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
