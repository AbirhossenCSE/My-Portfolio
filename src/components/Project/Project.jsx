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
        name: "Task Management System",
        image: "https://i.ibb.co.com/tTLBMbDd/Task-Management-System.jpg",
        techStack: ["React.js", "Firebase", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
        description: "A simple and efficient Task Management Application built with React, Vite, Firebase authentication, and drag-and-drop functionality for seamless task organization.",
        liveLink: "https://simple-firebase-df58a.web.app/",
        githubLink: "https://github.com/AbirhossenCSE/Job-Task-Client",
        githubLinkServer: "https://github.com/AbirhossenCSE/Job-Task-Server",
        challenges: "In Task Management App project, I faced a challenge with implementing real-time drag-and-drop functionality while keeping the database synchronized. To solve this, I used React DnD for the frontend and WebSockets for instant database updates. After testing and debugging, Now successfully ensured smooth reordering of tasks, which improved the user experience significantly.",
        futurePlans: "Integrating a chatbot for instant task management advice."
    },
    {
        id: 3,
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
        id: 4,
        name: "Sports Equipment Store",
        image: "https://i.ibb.co.com/yBsNb4pc/SES.jpg",
        techStack: ["React.js", "Firebase", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
        description: "A web app providing career guidance and resources based on user preferences and interests.",
        liveLink: "https://auth-moha-milon-88362.web.app/",
        githubLink: "https://github.com/AbirhossenCSE/Sports-Store-Client",
        githubLinkServer: "https://github.com/AbirhossenCSE/Sports-Store-Server",
        challenges: "Matching users with relevant career resources dynamically.",
        futurePlans: "Integrating a chatbot for instant career advice."
    },
    {
        id: 5,
        name: "Link Sharing Application",
        image: "https://i.ibb.co.com/dw8ddv1J/Share-Link.jpg",
        techStack: ["React.js", "Firebase", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
        description: "ShareLink is a web-based system that allows users to upload files (images, PDFs) and text, generate shareable links, and manage access settings. Users can mark their links as public (accessible by anyone) or private (requiring authentication or a password). The platform includes.",
        liveLink: "https://sharelink-8fda4.web.app/",
        githubLink: "https://github.com/AbirhossenCSE/Link-Sharing-System-Client",
        githubLinkServer: "https://github.com/AbirhossenCSE/Link-Sharing-System-Server",
        challenges: "Developing ShareLink comes with several challenges. One of the primary concerns is ensuring secure file sharing, where only authorized users can access private links. Implementing robust authentication and authorization is crucial to prevent unauthorized access. Additionally, managing access controls and link expiration adds complexity, as users may want temporary or password-protected links. Efficiently handling large file uploads without affecting performance is another challenge, requiring cloud storage solutions like Firebase Storage or AWS S3. Moreover, database optimization is necessary to retrieve and manage user-generated content efficiently. Lastly, preventing abuse and spam through rate limiting and content moderation is essential to maintaining a safe platform.",
        futurePlans: "Looking ahead, several enhancements are planned to improve ShareLink. An analytics dashboard will be introduced to provide insights into link visits, downloads, and geographical access trends. Users will be able to generate QR codes for easier sharing and create custom shortened URLs for a more personalized experience. Another exciting addition is version control for uploaded files, allowing users to update shared files without altering the original link. Lastly, integration with cloud storage services such as Google Drive and Dropbox will be implemented, enabling seamless file uploads. These future updates aim to enhance user experience, security, and accessibility, making ShareLink a powerful tool for secure and flexible content sharing."
    },
    {
        id: 6,
        name: "Gadget Heaven",
        image: "https://i.ibb.co.com/nqVMqqPY/gadget-Heaven.jpg",
        techStack: ["React.js", "Firebase", "Tailwind CSS", "React Helmet Async"],
        description: "Gadget Haven is a modern e-commerce website focused on selling electronic gadgets. It is built using ReactJS, providing a smooth and interactive user experience. The project demonstrates essential React fundamentals such as components, routing, hooks, and third-party integrations.",
        liveLink: "https://abir-smart-shop.surge.sh/",
        githubLink: "https://github.com/AbirhossenCSE/Gadget-Heaven",
        githubLinkServer: "#",
        challenges: "Building Gadget Heaven presented several challenges. One of the key difficulties was implementing a seamless and responsive UI that ensures a smooth shopping experience across all devices. Managing product data efficiently, including images, pricing, and stock availability, required careful database structuring. Another challenge was optimizing Firebase authentication to handle user sign-ins securely while ensuring a fast checkout process. Additionally, integrating a dynamic cart system and state management for handling user interactions posed some complexities. Finally, ensuring performance optimization, especially for image-heavy content, and improving SEO for better product discoverability were significant hurdles.",
        futurePlans: "Several enhancements are planned to improve Gadget Heaven. Future updates will include an advanced search and filtering system, allowing users to find products more efficiently. A wishlist feature will be introduced to enable users to save favorite products for later. Additionally, integrating a secure payment gateway will provide a smoother checkout experience. Another major improvement will be the introduction of a review and rating system, allowing customers to share feedback on products. Lastly, implementing AI-driven recommendations will enhance personalization, helping users discover products based on their interests and browsing history."
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

    useEffect(() => {
        if (selectedProject) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [selectedProject]);


    return (
        <div id="projects" className="py-16 px-6 lg:px-20  text-white">
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
                            className="bg-gradient-to-b from-gray-700 via-[#2c1936] to-[#170b34] p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300
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