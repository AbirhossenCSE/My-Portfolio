import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        id: 1,
        name: "Employee Management System",
        image: "https://via.placeholder.com/300",
        techStack: ["React.js", "Node.js", "MongoDB", "Firebase", "Stripe"],
        description: "A management system for monitoring employee workload, salaries, and workflow updates.",
        liveLink: "https://employee-management.com",
        githubLink: "https://github.com/yourgithub/employee-management"
    },
    {
        id: 2,
        name: "Smart Shop",
        image: "https://via.placeholder.com/300", // Replace with actual image
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
        description: "An e-commerce platform selling tech gadgets with authentication, product management, and payment integration.",
        liveLink: "https://smart-shop.com", // Replace with actual link
        githubLink: "https://github.com/yourgithub/smart-shop"
    },
    {
        id: 3,
        name: "Career Counseling Website",
        image: "https://via.placeholder.com/300",
        techStack: ["React.js", "Firebase", "Tailwind CSS"],
        description: "A web app providing career guidance and resources based on user preferences and interests.",
        liveLink: "https://career-counseling.com",
        githubLink: "https://github.com/yourgithub/career-counseling"
    },
    
];

const Projects = () => {
    return (
        <div id="project" className="py-16 px-6 lg:px-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10">
                    My Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
                            <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                            
                            <h3 className="text-2xl font-semibold">{project.name}</h3>
                            
                            <p className="mt-2 text-gray-400">{project.description}</p>
                            
                            {/* Tech Stack Badges */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.techStack.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md">
                                        {tech}
                                    </span>
                                ))}
                            </div>

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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
