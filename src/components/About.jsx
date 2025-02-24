import React, { useRef } from 'react';
import { easeOut, motion, useInView } from "framer-motion";
import aboutImg from '../assets/Pic/About.jpg';

const About = () => {
    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { triggerOnce: true, threshold: 0.5 });

    return (
        <div id="about" className="py-16 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-0">

                {/* Left Section - Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <div className="relative w-full h-96 lg:h-[500px] rounded-xl overflow-hidden border-2 border-transparent bg-gradient-to-br from-blue-500 to-purple-500 p-1">
                        <motion.img
                            src={aboutImg}
                            alt="Abir Hossen - Frontend Developer"
                            className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 1 }}
                        />
                    </div>
                </motion.div>

                {/* Right Section - Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 text-center lg:text-left"
                >
                    <motion.h2
                        ref={headingRef}
                        initial={{ opacity: 1, y: -50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl font-bold text-center mb-10 text-white"
                    >
                        About Me
                    </motion.h2>

                    <p className="text-lg leading-relaxed text-justify mb-6">
                        I am <span className="font-semibold">Abir Hossen</span>, a <strong>Computer Science & Engineering student</strong> at Daffodil International University.
                        As a passionate <strong>Full-Stack Web Developer</strong>, I specialize in building interactive, user-friendly applications with a focus on performance and modern design.
                    </p>

                    <p className="text-lg leading-relaxed text-justify mb-8">
                        I am proficient in HTML5, CSS3, and JavaScript (ES6+) for building responsive, user-friendly web applications. Skilled in Tailwind CSS, DaisyUI, and integrating SweetAlert2 for enhanced UI/UX. Comfortable with basic back-end tasks, RESTful API integration, and using bash for terminal operations. Experienced in Git/GitHub for version control and committed to continuous learning to excel in remote web development roles.
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        {[
                            "JavaScript", "React.js", "HTML5", "CSS3", "Tailwind CSS",
                            "DaisyUI", "Node.js", "Express.js", "MongoDB"
                        ].map((skill, index) => (
                            <motion.span
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;