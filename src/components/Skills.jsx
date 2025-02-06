import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaTools, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
    { category: "Frontend", skills: [
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    ]},
    { category: "Backend", skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
    ]},
    { category: "Tools", skills: [
        { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
        { name: "Database Management", icon: <FaDatabase className="text-blue-400" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-500" /> }
    ]}
];

const Skills = () => {
    return (
        <div id="skills" className="py-16 px-6 lg:px-20 bg-gray-800 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10">
                    <motion.span
                        animate={{ color: ["#ecff33", "#33ffe3", "#ff6133"] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        My Skills
                    </motion.span>
                </h2>

                {/* Skill Categories */}
                {skills.map((category, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 inline-block">
                            {category.category}
                        </h3>
                        <div className="grid md:grid-cols-5 gap-6">
                            {category.skills.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: i * 0.2 }}
                                    className="flex flex-col items-center gap-4"
                                >
                                    <div className="text-5xl">{skill.icon}</div>
                                    <span className="font-medium">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
