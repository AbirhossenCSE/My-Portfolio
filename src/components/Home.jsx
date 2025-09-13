import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import abirImg from "../assets/Pic/Abir-home.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
    return (
        <div id="home" className="relative overflow-hidden  text-white">
            <div className="hero min-h-screen py-16 px-6 lg:px-20 relative z-10">
                <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-10 lg:gap-20 max-w-7xl mx-auto">

                    {/* Right Section - Image */}
                    <motion.div
                        className="w-full flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="relative w-full sm:w-80 h-auto sm:h-[500px] rounded-xl overflow-hidden md:border-1 p-1">
                            <motion.img
                                src={abirImg}
                                alt="Abir Hossen - Web Developer"
                                className="w-full h-full object-cover rounded-xl"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>

                    {/* Left Section - Text */}
                    <motion.div
                        className="w-full text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4 uppercase bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                            Abir Hossen
                        </h1>

                        <p className="text-xl sm:text-2xl lg:text-3xl text-blue-400 mt-3 py-3 rounded-2xl backdrop-blur-md">
                            <Typewriter
                                words={[
                                    "Front End Developer",
                                    "MERN Stack Developer",
                                    "Full Stack Developer",
                                    "React.js Developer",
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={90}
                                deleteSpeed={70}
                                delaySpeed={1000}
                            />
                        </p>

                        <p className="text-lg sm:text-xl mb-6">
                            Passionate web developer with a degree in Computer Science & Engineering and hands-on experience in developing dynamic web applications.
                        </p>

                        {/* Download Resume */}
                        <a
                            href="https://drive.google.com/uc?export=download&id=1Azfyqm_hpW1ojrKnH6kniz_3Wf0_lLV5"
                            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300"
                            download
                        >
                            Download Resume
                        </a>

                        {/* Social Media Links */}
                        <div className="flex justify-center lg:justify-start gap-6 mt-6">
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
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;

