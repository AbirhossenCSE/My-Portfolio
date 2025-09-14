import React, { useRef, useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Employee Management System",
    image: "https://i.ibb.co.com/xSk73sgN/EMPJPG.jpg",
    techStack: ["React.js", "Node.js", "MongoDB", "Firebase", "Stripe"],
    description:
      "A management system for monitoring employee workload, salaries, and workflow updates.",
    liveLink: "https://employee-management-38c38.web.app/",
    githubLink: "https://github.com/AbirhossenCSE/Employee-Management-Client",
    githubLinkServer:
      "https://github.com/AbirhossenCSE/Employee-Management-Server",
    challenges:
      "Implementing role-based authentication and real-time workflow tracking.",
    futurePlans: "Adding AI-based analytics for performance tracking.",
  },
  {
    id: 2,
    name: "Task Management System",
    image: "https://i.ibb.co.com/tTLBMbDd/Task-Management-System.jpg",
    techStack: [
      "React.js",
      "Firebase",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    description:
      "A simple and efficient Task Management Application built with React, Vite, Firebase authentication, and drag-and-drop functionality for seamless task organization.",
    liveLink: "https://simple-firebase-df58a.web.app/",
    githubLink: "https://github.com/AbirhossenCSE/Job-Task-Client",
    githubLinkServer: "https://github.com/AbirhossenCSE/Job-Task-Server",
    challenges:
      "I faced a challenge with implementing real-time drag-and-drop functionality while keeping the database synchronized. Solved this with React DnD + WebSockets.",
    futurePlans: "Integrating a chatbot for instant task management advice.",
  },
  {
    id: 3,
    name: "Food Planet",
    image: "https://i.ibb.co.com/WNCrjp9z/Rmp.jpg",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "An e-commerce platform selling tech gadgets with authentication, product management, and payment integration.",
    liveLink: "https://restaurant-management-b98e1.web.app/",
    githubLink: "https://github.com/AbirhossenCSE/Restaurant-Management-Client",
    githubLinkServer:
      "https://github.com/AbirhossenCSE/Restaurant-Management-Server",
    challenges:
      "Implementing secure payment gateways and inventory management.",
    futurePlans: "Adding AI-based product recommendations.",
  },
  {
    id: 4,
    name: "Sports Equipment Store",
    image: "https://i.ibb.co.com/yBsNb4pc/SES.jpg",
    techStack: [
      "React.js",
      "Firebase",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    description:
      "A web app providing career guidance and resources based on user preferences and interests.",
    liveLink: "https://auth-moha-milon-88362.web.app/",
    githubLink: "https://github.com/AbirhossenCSE/Sports-Store-Client",
    githubLinkServer: "https://github.com/AbirhossenCSE/Sports-Store-Server",
    challenges: "Matching users with relevant career resources dynamically.",
    futurePlans: "Integrating a chatbot for instant career advice.",
  },
  {
    id: 5,
    name: "Link Sharing Application",
    image: "https://i.ibb.co.com/dw8ddv1J/Share-Link.jpg",
    techStack: [
      "React.js",
      "Firebase",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    description:
      "ShareLink lets users upload files (images, PDFs) and text, generate shareable links, and manage access settings. Supports public/private links with authentication.",
    liveLink: "https://sharelink-8fda4.web.app/",
    githubLink: "https://github.com/AbirhossenCSE/Link-Sharing-System-Client",
    githubLinkServer:
      "https://github.com/AbirhossenCSE/Link-Sharing-System-Server",
    challenges:
      "Main challenge was secure file sharing with robust authentication + handling large uploads efficiently using Firebase Storage.",
    futurePlans:
      "Add analytics dashboard, QR codes, version control for files, and Google Drive/Dropbox integrations.",
  },
  {
    id: 6,
    name: "Gadget Heaven",
    image: "https://i.ibb.co.com/nqVMqqPY/gadget-Heaven.jpg",
    techStack: ["React.js", "Firebase", "Tailwind CSS", "React Helmet Async"],
    description:
      "A modern e-commerce website selling electronic gadgets with smooth UI, Firebase authentication, and cart management.",
    liveLink: "https://abir-smart-shop.surge.sh/",
    githubLink: "https://github.com/AbirhossenCSE/Gadget-Heaven",
    githubLinkServer: "#",
    challenges:
      "Biggest challenge was responsive UI, managing product data, and optimizing Firebase authentication for fast checkout.",
    futurePlans:
      "Add wishlist, secure payments, reviews/ratings, and AI-driven recommendations.",
  },
];

const Projects = () => {
  const headingRef = useRef(null);
  const modalRef = useRef(null);
  const isInView = useInView(headingRef, { triggerOnce: true, threshold: 0.5 });

  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on outside click
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

  // Lock scroll when modal open
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
    <div id="projects" className="py-20 px-6 lg:px-20 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-14"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              {/* Image */}
              <div onClick={() => setSelectedProject(project)} className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-lg font-medium">
                  View Details →
                </div>

              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl text-center font-semibold mb-6">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-sm font-medium hover:from-green-600 hover:to-green-700 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center p-4 z-50">
          <div
            ref={modalRef}
            className="bg-gray-900 max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 rounded-2xl shadow-2xl relative"
          >
            <h2 className="text-3xl font-bold mb-4 text-center">
              {selectedProject.name}
            </h2>

            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />

            <p className="text-gray-300 mb-4">
              <span className="font-semibold text-white">Description: </span>
              {selectedProject.description}
            </p>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold text-white">Challenges: </span>
              {selectedProject.challenges}
            </p>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold text-white">Future Plans: </span>
              {selectedProject.futurePlans}
            </p>

            <h3 className="text-lg font-semibold mt-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedProject.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-800 text-sm rounded-lg border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium"
              >
                Live Project
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg"
              >
                <FaGithub /> GitHub Client
              </a>
              <a
                href={selectedProject.githubLinkServer}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg"
              >
                <FaGithub /> GitHub Server
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-medium"
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
