import React from 'react';
import { easeOut, motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import abirImg from '../assets/Pic/Abir- (new).jpg';

const Home = () => {
    return (
        <div id="home">
            <div className="hero min-h-96 py-16 px-6 lg:px-20 bg-gray-800 text-white">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-10 lg:gap-20">
                    
                    {/* Right Section - Image */}
                    <div className='flex-1 flex justify-center'>
                        <motion.img
                            src={abirImg}
                            animate={{ x: [-5, 50, -5] }} // Left-Right-Left Animation
                            transition={{ duration: 5, repeat: Infinity, ease: easeOut }}
                            className="max-w-sm w-72 mt-20 shadow-2xl rounded-lg" />
                    </div>

                    {/* Left Section - Text */}
                    <div className='flex-1'>
                        <h1
                            className="text-5xl font-bold my-4 mt-20 uppercase">
                            <motion.span
                                animate={{ color: ['#ecff33', '#33ffe3', '#ff6133'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Abir
                            </motion.span> Hossen
                        </h1>

                        <motion.h1 className="text-2xl font-bold">Web Developer | MERN Developer</motion.h1>

                        <p className="py-6 text-xl">
                            Passionate web developer with a degree in Computer Science & Engineering and hands-on experience in developing dynamic web applications.
                        </p>

                        {/* Hire Me Button */}
                        <a href="https://drive.google.com/uc?export=download&id=1mEteilgMIaSS6zYGnJkQ1vp3iCL69TS5" 
                            className="btn border-0 bg-gray-700 text-white my-6"
                            download>
                            Hire Me
                        </a>

                        {/* Social Media Links */}
                        <div className="flex gap-6 mt-4">
                            <a href="https://github.com/AbirhossenCSE/" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-white text-3xl hover:text-gray-400 transition duration-300" />
                            </a>
                            <a href="https://www.linkedin.com/in/abir-hossen-9a627b257/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-blue-600 text-3xl hover:text-blue-300 transition duration-300" />
                            </a>
                            <a href="https://www.facebook.com/abir.mondol.503" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-blue-600 text-3xl hover:text-blue-300 transition duration-300" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
