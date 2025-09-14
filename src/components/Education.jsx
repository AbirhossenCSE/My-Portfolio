import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "BSc. in Computer Science & Engineering",
    school: "Daffodil International University",
    year: "2024",
    desc: "Focused on full-stack development, algorithms, and database design. Worked on several MERN stack projects.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Kushtia Govt. Central College",
    year: "2019",
    desc: "Studied Science group with major subjects in Physics, Chemistry, and Mathematics.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Nobogram High School",
    year: "2017",
    desc: "Completed secondary education with distinction, active in extracurricular activities.",
  },
];

const Education = () => {
  return (
    <div id="education" className="py-16 px-6 lg:px-20 text-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          My Education Journey
        </h2>

        <ul className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-white transform -translate-x-1/2"></div>

          {educationData.map((edu, i) => (
            <li key={i} className="relative flex items-center w-full my-12">
              {/* Year */}
              <div
                className={`w-1/4 px-4 font-mono font-semibold italic text-white text-3xl ${
                  i % 2 === 0 ? "text-right order-1" : "text-left order-3"
                }`}
              >
                {edu.year}
              </div>

              {/* Card */}
              <div className="z-10 md:w-2/4 w-4/5 p-6 bg-gradient-to-b from-[#4a326f] via-[#3a1f4f] to-[#24144d] rounded-lg shadow-lg border border-gray-600 order-2 mx-auto">
                <div className="flex items-center gap-3 mb-3">
                  <FaGraduationCap className="text-teal-400 text-5xl" />
                  <h3 className="md:text-2xl font-bold">{edu.degree}</h3>
                </div>
                <p className="text-gray-300 font-semibold">{edu.school}</p>
                <p className="text-gray-400 text-sm mt-2">{edu.desc}</p>
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-900 border-4 border-teal-400 rounded-full shadow-md"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
