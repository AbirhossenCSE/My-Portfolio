import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    return (
        <div id="projects" className="py-16 px-6 lg:px-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10">
                    My Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
                            <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-lg mb-4" />

                            <h3 className="text-2xl font-semibold">{project.name}</h3>

                            {/* <p className="mt-2 text-gray-400">{project.description}</p> */}

                            {/* Tech Stack Badges */}
                            {/* <div className="flex flex-wrap gap-2 mt-3">
                                {project.techStack.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md">
                                        {tech}
                                    </span>
                                ))}
                            </div> */}

                            {/* Buttons */}
                            <div className="mt-4 flex gap-3">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" 
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                                    Live Project Link
                                </a>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
                                    className="px-4 py-2 flex items-center gap-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300"> <FaGithub />
                                    GitHub Link
                                </a>
                            </div>
                            {/* View More Button */}
                            <div className="mt-4">
                                <Link to={`/project/${project.id}`} className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition duration-300">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
