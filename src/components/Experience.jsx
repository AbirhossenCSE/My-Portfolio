import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Mindsynth Technology",
    role: "Trainee Software Engineer",
    duration: "Jan 2024 – Apr 2024",
    description:
      "Developed a full-fledged web application from scratch, handling both frontend and backend. Built dynamic, responsive UIs using React.js and integrated RESTful APIs with Node.js and Express.js. Designed and optimized MongoDB database schemas, implemented authentication, and ensured application performance and security. Collaborated closely with designers and other developers in an agile environment to deliver high-quality, scalable solutions.",
  },
  {
    company: "ScaleUp Agency",
    role: "Frontend Developer",
    duration: "May 2024 – Present",
    description:
      "Responsible for building responsive, high-performance frontend interfaces using React.js and Tailwind CSS. Integrated RESTful APIs developed by backend teams, optimized application performance, and implemented interactive UI components. Worked in a fast-paced agency environment, collaborating with designers, developers, and clients to deliver multiple projects on time while maintaining code quality and modern best practices.",
  },
];


const Experience = () => {
  return (
    <div id="experience" className="py-16 px-6 lg:px-20 text-white ">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 ">
          My Professional Journey
        </h2>

        <ul className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-700 transform -translate-x-1/2"></div>

          {experiences.map((exp, i) => (
            <li key={i} className="relative flex items-center w-full my-12">
              {/* Year / Duration */}
              <div
                className={`w-1/4 px-4 font-mono font-semibold italic text-white text-xl ${
                  i % 2 === 0 ? "text-right order-1" : "text-left order-3"
                }`}
              >
                {exp.duration}
              </div>

              {/* Card */}
              <div className="z-10 md:w-2/4 w-4/5 p-6 bg-gradient-to-b from-[#4a326f] via-[#3a1f4f] to-[#24144d] rounded-lg shadow-lg border border-gray-700 order-2 mx-auto hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="text-blue-400 text-5xl" />
                  <h3 className="md:text-2xl font-bold">{exp.role}</h3>
                </div>
                <p className="text-blue-300 font-semibold">{exp.company}</p>
                <p className="text-gray-400 text-sm mt-2">{exp.description}</p>
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-900 border-4 border-blue-400 rounded-full shadow-md"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
