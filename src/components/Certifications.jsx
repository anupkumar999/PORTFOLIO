import React from "react";
import { FaCertificate } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Google Cloud Certified Professional Machine Learning Engineer",
      issuer: "Google Cloud",
      date: "Aug 2025 - Aug 2027",
      link: "https://www.credly.com/badges/your-badge-id",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50 border-blue-100",
    },
    {
      id: 2,
      title: "MuleSoft Integration Associate",
      issuer: "MuleSoft",
      date: "Feb 2023 - Feb 2025",
      link: "#",
      iconColor: "text-cyan-600",
      bgColor: "bg-cyan-50 border-cyan-100",
    },
  ];

  return (
    <div name="certifications" className="w-full bg-slate-50 py-32 border-b border-slate-200">
      <div className="max-w-screen-xl px-6 mx-auto flex flex-col justify-center w-full h-full text-slate-800">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 inline-block border-b-4 border-blue-600 pb-2">
            Credentials
          </h2>
          <p className="py-6 text-xl text-slate-600 font-medium max-w-2xl">
            Verified expertise in cloud infrastructure and machine learning engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {certifications.map(({ id, title, issuer, date, link, iconColor, bgColor }) => (
            <div key={id} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-start gap-6">
              <div className={`p-5 rounded-xl border ${bgColor}`}>
                <FaCertificate size={32} className={iconColor} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-2">{title}</h3>
                <p className="text-lg font-bold text-slate-600 mb-1">{issuer}</p>
                <p className="text-sm font-medium text-slate-400 mb-4">{date}</p>
                <a href={link} target="_blank" rel="noreferrer" className="inline-block text-sm font-bold text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                  View Credential &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
