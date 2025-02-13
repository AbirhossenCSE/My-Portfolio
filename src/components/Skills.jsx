import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase,
    FaJsSquare, FaGitAlt
} from "react-icons/fa";
import {
    SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiVercel
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> }, // Fixed Firebase icon
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Database Management", icon: <FaDatabase className="text-blue-400" /> },
    { name: "VS Code", icon: <VscVscode className="text-blue-500" /> }
];

const Skills = () => {
    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { triggerOnce: true, threshold: 0.5 });

    return (
        <div id="skills" className="py-16 px-6 lg:px-20 bg-gray-800 text-white">
            <div className="max-w-6xl mx-auto">

                {/* Animated Heading */}
                <motion.h2
                    ref={headingRef}
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl font-bold text-center mb-10 text-white"
                >
                    My Skills
                </motion.h2>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="flex flex-col items-center gap-4 p-8 rounded-xl transition-all duration-300 
                                   bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700
                                   hover:shadow-2xl hover:shadow-gray-500/30 hover:scale-105 border border-gray-700"
                        >
                            <div className="text-5xl">{skill.icon}</div>
                            <span className="font-medium text-lg">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;