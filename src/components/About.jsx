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
        Software Engineer

        Hello! I'm Anup Kumar, a passionate data enthusiast I had hands-on experience in data science and data engineering.

From transforming raw data into actionable insights to building end-to-end data pipelines, I thrive on solving complex challenges and turning data into powerful tools for decision-making.
<br />
<br />
🌟 What I Bring to the Table:

Versatile Skill Set: Proficient in Python, SQL, and Java, with a strong foundation in Data Structures, Algorithms, and Object-Oriented Programming.
Google Cloud Expertise: Hands-on experience with Google Cloud Platform services like Vertex AI for machine learning models, BigQuery for data warehousing, Cloud Functions and App Engine for serverless applications, and tools like Cloud Storage and Pub/Sub for real-time data streaming.
Application Development: Built an app and developed intelligent agents, integrating them into robust data pipelines to streamline processes and enhance functionality.
End-to-End Project Experience: In a dynamic, small-company environment, I've worn multiple hats—building scalable data pipelines, deploying ML models, and optimizing data workflows.
<br />
<br />

🏆 Achievements:

Start-Up Award Recipient: Honored by the Institution’s Innovation Council for my entrepreneurial spirit and commitment to innovation.
Impactful Projects: Successfully managed multiple data engineering tasks that enhanced operational efficiency and provided actionable business insights.

<br />
<br />
💡 Why I Love What I Do:

Ever since diving into the world of data, I've been fascinated by its potential to solve real-world problems. The thrill of building applications and intelligent agents that automate and optimize processes excites me, and I am committed to staying at the forefront of technology by continuously learning and applying new methodologies.

<br />
<br />
🤝 Let's Connect:

I'm eager to collaborate with forward-thinking professionals and organizations that value innovation and data-driven decision-making. If you're looking for someone who can elevate your data initiatives, let's connect to discuss how we can achieve success together.
        </p>
      </div>
    </div>
  );
};

export default About;
