// import React, { useRef } from "react";
// import { FaGraduationCap, FaCalendarAlt, FaStar } from "react-icons/fa";
// import { motion, useInView } from "framer-motion";
// import { Fade } from "react-awesome-reveal";

// const Education = () => {
//     const headingRef = useRef(null);
//     const isInView = useInView(headingRef, { triggerOnce: true, threshold: 0.5 });

//     const educationData = [
//         { degree: "BSc. in Computer Science & Engineering", school: "Daffodil International University", mascot: "🎓", passingYear: 2024 },
//         { degree: "Higher Secondary Certificate (HSC)", school: "Kushtia Govt. Central College", mascot: "🏛️", passingYear: 2019 },
//         { degree: "Secondary School Certificate (SSC)", school: "Nobogram High School", mascot: "📘", passingYear: 2017 },
//     ];

//     return (
//         <div id="education" className="py-16 px-6 lg:px-20 text-white">
//             <div className="max-w-4xl mx-auto text-center">
//                 {/* Section Title */}
//                 <motion.h2
//                     ref={headingRef}
//                     initial={{ opacity: 0, y: -50 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                     className="text-4xl font-bold text-center mb-10 text-white"
//                 >
//                     My Education Journey
//                 </motion.h2>

//                 <Fade direction="up" duration={1500} triggerOnce>
//                     <div className="max-w-5xl mx-auto px-4">
//                         <div className="space-y-8">
//                             {educationData.map((edu, index) => (
//                                 <div
//                                     key={index}
//                                     className="relative group rounded-lg transition-all duration-[1000ms] ease-in-out bg-gradient-to-b from-[#4a326f] via-[#3a1f4f] to-[#24144d] hover:scale-110 text-white hover:shadow-xl"
//                                 >
//                                     {/* Card Content */}
//                                     <div className="relative rounded-lg bg-transparent p-8 transition-all duration-300 backdrop-blur-lg">
//                                         {/* Top Icon */}
//                                         <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white p-3 rounded-full shadow-lg">
//                                             <FaGraduationCap className="text-lg" />
//                                         </div>

//                                         {/* Top Section */}
//                                         <div className="flex flex-col items-center gap-3 text-center">
//                                             <span className="text-4xl">{edu.mascot}</span>
//                                             <h3 className="text-lg md:text-xl font-semibold text-white">
//                                                 {edu.degree}
//                                             </h3>
//                                             <p className="text-md text-slate-300 flex items-center gap-2">
//                                                 <FaStar className="text-yellow-400" />
//                                                 {edu.school}
//                                             </p>
//                                             <p className="text-slate-400 flex items-center gap-2 text-sm">
//                                                 <FaCalendarAlt className="w-4 h-4 text-teal-300" /> Passing Year: {edu.passingYear}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </Fade>
//             </div>
//         </div>
//     );
// };

// export default Education;



// import React, { useEffect, useRef, useState } from "react";
// import { FaGraduationCap } from "react-icons/fa";
// import { motion } from "framer-motion";

// const educationData = [
//   {
//     degree: "BSc. in Computer Science & Engineering",
//     school: "Daffodil International University",
//     year: "2024",
//     desc: "Focused on full-stack development, algorithms, and database design. Worked on several MERN stack projects.",
//   },
//   {
//     degree: "Higher Secondary Certificate (HSC)",
//     school: "Kushtia Govt. Central College",
//     year: "2019",
//     desc: "Studied Science group with major subjects in Physics, Chemistry, and Mathematics.",
//   },
//   {
//     degree: "Secondary School Certificate (SSC)",
//     school: "Nobogram High School",
//     year: "2017",
//     desc: "Completed secondary education with distinction, active in extracurricular activities.",
//   },
// ];

// const Education = () => {
//   const lineRef = useRef(null);
//   const [lineHeight, setLineHeight] = useState(0);

//   // Scroll animation for line filling
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!lineRef.current) return;
//       const section = lineRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       let progress = Math.min(
//         1,
//         Math.max(0, (windowHeight - section.top) / section.height)
//       );
//       setLineHeight(progress * 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div id="education" className="py-16 px-6 lg:px-20 text-white relative">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">
//           My Education Journey
//         </h2>

//         {/* Timeline container */}
//         <div className="relative flex flex-col items-center">
//           {/* Vertical Line */}
//           <div
//             className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full"
//             ref={lineRef}
//           >
//             <motion.div
//               className="absolute top-0 left-0 w-1 bg-teal-400"
//               style={{ height: `${lineHeight}%` }}
//               transition={{ duration: 0.3 }}
//             />
//           </div>

//           {/* Timeline Items */}
//           <div className="w-full relative">
//             {educationData.map((edu, i) => (
//               <div
//                 key={i}
//                 className={`relative flex flex-col md:flex-row items-center w-full ${
//                   i % 2 === 0 ? "md:justify-start" : "md:justify-end"
//                 }`}
//               >
//                 {/* Connector line */}
//                 <div
//                   className={`absolute top-1/2 w-12 h-0.5 bg-teal-400 ${
//                     i % 2 === 1
//                       ? "left-1/2 ml-0"
//                       : "right-1/2 mr-0"
//                   }`}
//                 ></div>

//                 {/* Timeline Dot */}
//                 <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-900 border-4 border-teal-400 rounded-full shadow-md"></div>

//                 {/* Card */}
//                 <div
//                   className={`md:w-2/5 p-6 bg-gradient-to-b from-[#4a326f] via-[#3a1f4f] to-[#24144d] rounded-lg shadow-lg border border-gray-600 ${
//                     i % 2 === 0 ? "-ml-0 text-left" : "-mr-0 text-left"
//                   }`}
//                 >
//                   <div className="flex items-center gap-3 mb-3">
//                     <FaGraduationCap className="text-teal-400 text-5xl" />
//                     <h3 className="text-xl font-semibold">{edu.degree}</h3>
//                   </div>
//                   <p className="text-gray-300">{edu.school}</p>
//                   <p className="text-sm text-teal-300 mb-2">
//                     Passing Year: {edu.year}
//                   </p>
//                   <p className="text-gray-400 text-sm">{edu.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;




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
    <div className="py-16 px-6 lg:px-20 text-white min-h-screen">
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
