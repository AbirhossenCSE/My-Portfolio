import React, { useRef, useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const projects = [
    {
        id: 1,
        name: "Employee Management System",
        image: "https://i.ibb.co.com/xSk73sgN/EMPJPG.jpg",
        techStack: ["React.js", "Node.js", "MongoDB", "Firebase", "Stripe"],
        description: "A management system for monitoring employee workload, salaries, and workflow updates.",
        liveLink: "https://employee-management-38c38.web.app/",
        githubLink: "https://github.com/AbirhossenCSE/Employee-Management-Client",
        githubLinkServer: "https://github.com/AbirhossenCSE/Employee-Management-Server",
        challenges: "Implementing role-based authentication and real-time workflow tracking.",
        futurePlans: "Adding AI-based analytics for performance tracking."
    },
    {
        id: 2,
        name: "Food Planet",
        image: "https://i.ibb.co.com/WNCrjp9z/Rmp.jpg",
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
        description: "An e-commerce platform selling tech gadgets with authentication, product management, and payment integration.",
        liveLink: "https://restaurant-management-b98e1.web.app/",
        githubLink: "https://github.com/AbirhossenCSE/Restaurant-Management-Client",
        githubLinkServer: "https://github.com/AbirhossenCSE/Restaurant-Management-Server",
        challenges: "Implementing secure payment gateways and inventory management.",
        futurePlans: "Adding AI-based product recommendations."
    },
    {
        id: 3,
        name: "Sports Equipment Store",
        image: "https://i.ibb.co.com/yBsNb4pc/SES.jpg",
        techStack: ["React.js", "Firebase", "Tailwind CSS"],
        description: "A web app providing career guidance and resources based on user preferences and interests.",
        liveLink: "https://auth-moha-milon-88362.web.app/",
        githubLink: "https://github.com/AbirhossenCSE/Sports-Store-Client",
        githubLinkServer: "https://github.com/AbirhossenCSE/Sports-Store-Server",
        challenges: "Matching users with relevant career resources dynamically.",
        futurePlans: "Integrating a chatbot for instant career advice."
    },
];

const Projects = () => {
    const headingRef = useRef(null);
    const modalRef = useRef(null); // Ref for the modal
    const isInView = useInView(headingRef, { triggerOnce: true, threshold: 0.5 });

    const [selectedProject, setSelectedProject] = useState(null);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setSelectedProject(null);
            }
        };

        if (selectedProject) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedProject]);

    return (
        <div id="projects" className="py-16 px-6 lg:px-20 bg-gray-900 text-white">
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

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300
                            relative group overflow-hidden flex flex-col justify-between"
                        >
                            {/* Image */}
                            <div className="relative w-full h-48 overflow-hidden rounded-lg">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Project Info */}
                            <div className="mt-4 flex-1">
                                <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                                <p className="text-gray-400 text-sm mt-2">{project.description}</p>

                                {/* Tech Stack */}
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {project.techStack.map((tech, index) => (
                                        <span key={index} className="text-xs px-3 py-1 bg-gray-700 rounded-full text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex justify-between items-center">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 flex items-center gap-2"
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </a>

                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className=" bg-green-600 px-3 py-3 text-sm rounded-lg transition-opacity text-white"
                                >
                                    View Details →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4">
                    <div
                        ref={modalRef} // Attach the ref to the modal
                        className="bg-gray-900 text-white max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 rounded-lg relative"
                    >
                        {/* Project Title */}
                        <h2 className="text-3xl font-bold mb-4 text-center">{selectedProject.name}</h2>

                        {/* Image */}
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.name}
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />

                        {/* Project Description */}
                        <p className="text-gray-400"><span className="font-semibold  text-white">Description: </span> {selectedProject.description}</p>

                        {/* Challenges Faced */}
                        <p className="text-gray-400 my-2"><span className="font-semibold text-white">Challenges Faced:</span> {selectedProject?.challenges}</p>

                        {/* Future Plans */}
                        <p className="text-gray-400"><span className="font-semibold text-white">Future Plans:</span> {selectedProject?.futurePlans}</p>

                        {/* Tech Stack */}
                        <h3 className=" font-semibold mt-4">Tech Stack:</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {selectedProject.techStack.map((tech, index) => (
                                <span key={index} className="p-2 bg-gray-950 text-white text-sm rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="mt-6 flex flex-wrap gap-4 justify-center">
                            <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer"
                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                                Live Project
                            </a>
                            <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer"
                                className="px-4 flex items-center gap-2 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300">
                                <FaGithub /> GitHub Client
                            </a>
                            <a href={selectedProject.githubLinkServer} target="_blank" rel="noopener noreferrer"
                                className="px-4 flex items-center gap-2 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300">
                                <FaGithub /> GitHub Server
                            </a>
                            <button
                                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
                                onClick={() => setSelectedProject(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;