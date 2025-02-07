import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const projectData = {
    1: {
        name: "Employee Management System",
        image: "https://i.ibb.co.com/xSk73sgN/EMPJPG.jpg",
        techStack: ["React.js", "Node.js", "MongoDB", "Firebase", "Stripe"],
        description: "The Employee Management System is a web-based platform designed to help companies manage employee records, monitor workload, process payments, and track workflow updates efficiently. The system features role-based authentication, dashboards for employees and HR executives, data visualization, and integration with payment processing services.",
        liveLink: "https://employee-management-38c38.web.app/",
        githubLink: "https://github.com/AbirhossenCSE/Employee-Management-Client",
        githubLinkServer: "https://github.com/AbirhossenCSE/Employee-Management-Server",
        challenges: "Implementing role-based authentication and real-time workflow tracking.",
        futurePlans: "Adding AI-based analytics for performance tracking."
    },
    2: {
        name: "Food Planet",
        image: "https://i.ibb.co.com/WNCrjp9z/Rmp.jpg",
        techStack: ["React.js", "Axios", "Node.js", "Express.js", "MongoDB"],
        description: "This project is a Food Restaurant Website built with React and Vite. It provides a user-friendly interface for browsing and purchasing food items, managing the restaurant's menu, and more. The application is designed to enhance the customer experience and streamline restaurant operations.",
        liveLink: "https://restaurant-management-b98e1.web.app/",
        githubLink: "https://github.com/AbirhossenCSE/Restaurant-Management-Client",
        githubLinkServer: "https://github.com/AbirhossenCSE/Restaurant-Management-Server",
        challenges: "Implementing secure payment gateways and inventory management.",
        futurePlans: "Adding AI-based product recommendations."
    },
    3: {
        name: "Sports Equipment Store",
        image: "https://i.ibb.co.com/yBsNb4pc/SES.jpg",
        techStack: ["React.js", "Firebase", "Tailwind CSS"],
        description: "The Sports Equipment Store is an e-commerce platform where users can browse, purchase, and review sports accessories. The website includes features like user authentication, product management, and dynamic sorting, providing a seamless shopping experience.",
        liveLink: "https://auth-moha-milon-88362.web.app/",
        githubLink: "https://github.com/AbirhossenCSE/Sports-Store-Client",
        githubLinkServer: "https://github.com/AbirhossenCSE/Sports-Store-Server",
        challenges: "Matching users with relevant career resources dynamically.",
        futurePlans: "Integrating a chatbot for instant career advice."
    }
};

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectData[id];

    if (!project) {
        return <div className="text-center text-white mt-10">Project Not Found</div>;
    }

    return (
        <div className="py-16 px-6 lg:px-20 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-6">{project.name}</h2>
                
                <img src={project.image} alt={project.name} className="w-full object-cover rounded-lg mb-6" />
                
                <h3 className="text-2xl font-semibold">Technology Stack:</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md">
                            {tech}
                        </span>
                    ))}
                </div>

                <p className="mt-6 text-gray-400">{project.description}</p>

                <h3 className="text-2xl font-semibold mt-6">Challenges Faced:</h3>
                <p className="text-gray-400">{project.challenges}</p>

                <h3 className="text-2xl font-semibold mt-6">Future Plans:</h3>
                <p className="text-gray-400">{project.futurePlans}</p>

                {/* Links */}
                <div className="mt-6 flex gap-4">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" 
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                        Live Project
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
                        className="px-4 py-2 flex items-center gap-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300">
                        <FaGithub /> GitHub Repository Client
                    </a>
                    <a href={project.githubLinkServer} target="_blank" rel="noopener noreferrer" 
                        className="px-4 py-2 flex items-center gap-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300">
                        <FaGithub /> GitHub Repository Server
                    </a>
                </div>

                {/* Back Button */}
                <div className="mt-8">
                    <Link to="/" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300">
                        Back to Projects
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
