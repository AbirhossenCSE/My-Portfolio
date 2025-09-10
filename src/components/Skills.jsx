// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//     FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase,
//     FaJsSquare, FaGitAlt
// } from "react-icons/fa";
// import {
//     SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiVercel
// } from "react-icons/si";
// import { VscVscode } from "react-icons/vsc";

// const skills = [
//     { name: "React.js", icon: <FaReact className="text-blue-400" /> },
//     { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
//     { name: "HTML-5", icon: <FaHtml5 className="text-orange-500" /> },
//     { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
//     { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
//     { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
//     { name: "Vercel", icon: <SiVercel className="text-white" /> },
//     { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//     { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
//     { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
//     { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
//     { name: "Database Management", icon: <FaDatabase className="text-blue-400" /> },
//     { name: "VS Code", icon: <VscVscode className="text-blue-500" /> }
// ];

// const Skills = () => {
//     const headingRef = useRef(null);
//     const isInView = useInView(headingRef, { triggerOnce: true, threshold: 0.5 });

//     return (
//         <div id="skills" className="py-16 px-6 lg:px-20 text-white">
//             <div className="max-w-6xl mx-auto">

//                 {/* Animated Heading */}
//                 <motion.h2
//                     ref={headingRef}
//                     initial={{ opacity: 0, y: -50 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                     className="text-4xl font-bold text-center mb-10 text-white"
//                 >
//                     My Skills
//                 </motion.h2>

//                 {/* Skills Grid */}
//                 <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
//                     {skills.map((skill, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ opacity: 0, y: -20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8, delay: i * 0.1 }}
//                             className="flex flex-col items-center       gap-4     p-8 rounded-xl transition-all duration-300 
//                                 bg-gradient-to-br from-gray-900/80 to-gray-800/80 hover:from-gray-800/95 hover:to-gray-700/95
//                                 hover:shadow-2xl hover:shadow-gray-500/30 hover:scale-105 border border-gray-700"
//                         >
//                             <div className="text-5xl">{skill.icon}</div>
//                             <span className="font-medium text-lg">{skill.name}</span>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Skills;


import React, { useState } from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase,
  FaJsSquare, FaGitAlt
} from "react-icons/fa";
import {
  SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiVercel
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    name: "React.js",
    icon: <FaReact className="text-blue-400" />,
    desc: "I use React.js to build modern, responsive, and dynamic user interfaces. I create reusable components and optimize performance for smooth user experiences."
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400" />,
    desc: "JavaScript is my core programming language. I use it to add interactivity, handle logic, and build scalable applications across frontend and backend."
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
    desc: "I structure web pages with HTML5, following semantic standards. I make sure the code is clean, accessible, and SEO-friendly."
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" />,
    desc: "I style websites with CSS3, ensuring modern layouts, responsive design, and animations that improve user engagement."
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400" />,
    desc: "I use Tailwind CSS to design fast and responsive UIs. It helps me keep my codebase clean and speed up development."
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-orange-500" />,
    desc: "I work with Firebase for authentication, hosting, and real-time databases, especially in small-to-medium projects."
  },
  {
    name: "Vercel",
    icon: <SiVercel className="text-white" />,
    desc: "I deploy my projects on Vercel for fast, serverless hosting with CI/CD integration. It ensures smooth production workflows."
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    desc: "I use Node.js to build scalable backend services and REST APIs, handling business logic and server-side tasks efficiently."
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-500" />,
    desc: "I use Express.js to create lightweight APIs. It allows me to connect frontend and database with clean, maintainable routes."
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
    desc: "I work with MongoDB to store and manage data for full-stack apps. I design schemas and write efficient queries."
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt className="text-red-500" />,
    desc: "I manage version control with Git and host projects on GitHub. I use branching, pull requests, and collaboration workflows."
  },
  {
    name: "Database Management",
    icon: <FaDatabase className="text-blue-400" />,
    desc: "I handle relational and NoSQL databases, focusing on data modeling, queries, and optimization for better performance."
  },
  {
    name: "VS Code",
    icon: <VscVscode className="text-blue-500" />,
    desc: "I use VS Code as my main editor, customizing it with extensions, snippets, and settings for faster development."
  }
];

const Skills = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSkill = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="skills" className="py-16 px-6 lg:px-20 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">My Skills</h2>

        {/* 2-row grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-[#4a326f] via-[#3a1f4f] to-[#24144d] rounded-xl border border-gray-700"
            >
              {/* Header */}
              <button
                onClick={() => toggleSkill(i)}
                className="flex items-center w-full px-6 py-5 text-left focus:outline-none"
              >
                <span className="text-4xl mr-4">{skill.icon}</span>
                <span className="text-xl font-semibold flex-1">{skill.name}</span>
                <span className="text-gray-400 text-lg">
                  {openIndex === i ? "▲" : "▼"}
                </span>
              </button>

              {/* Description */}
              {openIndex === i && (
                <div className="px-14 pb-5 text-gray-300 text-base leading-relaxed">
                  {skill.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
