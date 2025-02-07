import React, { useRef } from 'react';
import { easeOut, motion, useInView } from "framer-motion";
import aboutImg from '../assets/Pic/About.jpg';

const About = () => {
    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { triggerOnce: true, threshold: 0.5 });

    return (
        <div id="about" className="py-16 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

                {/* Left Section - Image */}
                <div
                    className="w-full h-96 lg:w-1/2 flex justify-center"
                >
                    <motion.img
                        src={aboutImg}
                        animate={{ x: [-5, 15, -5] }}
                        transition={{ duration: 5, repeat: Infinity, ease: easeOut }}
                        alt="Abir Hossen - Frontend Developer"
                        className="w-full lg:w-full h-96 rounded-xl transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Right Section - Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 text-center lg:text-left"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        <motion.h2
                            ref={headingRef}
                            initial={{ opacity: 0, y: -50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl font-bold text-center mb-10 text-white"
                        >
                            About Me
                        </motion.h2>
                    </h2>
                    <p className="text-lg p-4 leading-relaxed text-justify">
                        I am <span className="text-blue-500 font-semibold">Abir Hossen</span>, a <strong>Computer Science & Engineering student</strong> at Daffodil International University.
                        As a passionate <strong>Full-Stack Web Developer</strong>, I specialize in building interactive, user-friendly applications with a focus on performance and modern design.
                    </p>
                    <p className="mt-4 p-4 text-lg leading-relaxed text-justify">
                        My expertise includes **JavaScript, React.js, React Router, Tailwind CSS, DaisyUI, Node.js, Express.js, and MongoDB**.
                        I love crafting seamless digital experiences by combining my problem-solving skills with cutting-edge technologies.
                    </p>

                    {/* Skills and More */}
                    <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
                        <span className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/50">JavaScript</span>
                        <span className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/50">React.js</span>
                        <span className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/50">HTML5</span>
                        <span className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/50">CSS3</span>
                        <span className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/50">Tailwind CSS</span>
                        <span className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/50">DaisyUI</span>
                        <span className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/50">Node.js</span>
                        <span className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md">Express.js</span>
                        <span className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/50">MongoDB</span>
                    </div>

                </motion.div>

            </div>
        </div>
    );
};

export default About;
