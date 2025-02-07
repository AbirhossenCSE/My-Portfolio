import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const projects = [
    {
        id: 1,
        name: "Employee Management System",
        image: "https://i.ibb.co.com/xSk73sgN/EMPJPG.jpg",
        techStack: ["React.js", "Node.js", "MongoDB", "Firebase", "Stripe"],
        description: "A management system for monitoring employee workload, salaries, and workflow updates.",
        liveLink: "https://employee-management-38c38.web.app/",
        githubLink: "https://github.com/AbirhossenCSE/Employee-Management-Client"
    },
    {
        id: 2,
        name: "Food Planet",
        image: "https://i.ibb.co.com/WNCrjp9z/Rmp.jpg",
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
        description: "An e-commerce platform selling tech gadgets with authentication, product management, and payment integration.",
        liveLink: "https://restaurant-management-b98e1.web.app/",
        githubLink: "https://github.com/AbirhossenCSE/Restaurant-Management-Client"
    },
    {
        id: 3,
        name: "Sports Equipment Store",
        image: "https://i.ibb.co.com/yBsNb4pc/SES.jpg",
        techStack: ["React.js", "Firebase", "Tailwind CSS"],
        description: "A web app providing career guidance and resources based on user preferences and interests.",
        liveLink: "https://auth-moha-milon-88362.web.app/",
        githubLink: "https://github.com/AbirhossenCSE/Sports-Store-Client"
    },

];

const Projects = () => {
    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { triggerOnce: true, threshold: 0.5 });

    return (
        <div id="projects" className="py-16 px-6 lg:px-20 bg-gray-800 text-white">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    ref={headingRef}
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl font-bold text-center mb-10 text-white"
                >
                    My Projects
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col justify-between 
                        transition-transform duration-300 hover:scale-105">
                            <div>
                                <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-lg mb-4" />

                                <h3 className="text-2xl font-semibold">{project.name}</h3>


                            </div>

                            {/* Buttons */}
                            <div className="mt-4 mx-auto flex gap-3">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 text-center">
                                    Live Project Link
                                </a>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                    className="px-4 py-2 flex items-center justify-center gap-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300">
                                    <FaGithub /> GitHub Link
                                </a>
                            </div>
                            <Link to={`/project/${project.id}`}
                                className="px-4 py-2 mt-4 mx-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 text-center">
                                View Details
                            </Link>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
