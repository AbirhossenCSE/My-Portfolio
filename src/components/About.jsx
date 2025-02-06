import React from 'react';
import { motion } from "framer-motion";
import aboutImg from '../assets/Pic/Abir- (new).jpg';

const About = () => {
    return (
        <div id="about" className="py-16 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

                {/* Left Section - Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <img
                        src={aboutImg}
                        alt="Abir Hossen - Frontend Developer"
                        className="w-72 lg:w-96 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
                    />
                </motion.div>

                {/* Right Section - Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 text-center lg:text-left"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        <motion.span
                            animate={{ color: ['#ecff33', '#33ffe3', '#ff6133'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            About Me
                        </motion.span> 
                    </h2>
                    <p className="text-lg leading-relaxed">
                        I am <span className="text-blue-500 font-semibold">Abir Hossen</span>, a <strong>Computer Science & Engineering student</strong> at Daffodil International University.
                        As a passionate <strong>Full-Stack Web Developer</strong>, I specialize in building interactive, user-friendly applications with a focus on performance and modern design.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed">
                        My expertise includes **JavaScript (ES6), React.js, React Router, Tailwind CSS, DaisyUI, Node.js, Express.js, and MongoDB**.
                        I love crafting seamless digital experiences by combining my problem-solving skills with cutting-edge technologies.
                    </p>


                    {/* Skills and More */}
                    {/* Skills and More */}
                    <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
                        <span className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">JavaScript</span>
                        <span className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">React.js</span>
                        <span className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">HTML5</span>
                        <span className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">CSS3</span>
                        <span className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">Tailwind CSS</span>
                        <span className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">DaisyUI</span>
                        <span className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">Node.js</span>
                        <span className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">Express.js</span>
                        <span className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">MongoDB</span>
                    </div>


                    {/* Resume Button */}
                    <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                        Download Resume
                    </button>
                </motion.div>

            </div>
        </div>
    );
};

export default About;
