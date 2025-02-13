import React, { useEffect, useState } from 'react';
import { easeOut, motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import abirImg from '../assets/Pic/Abir-home.png';

const Home = () => {
    const texts = ["Web Developer", "Frontend Developer", "MERN Stack Developer"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="home" className="relative overflow-hidden">
            {/* Background Animation */}
            <motion.div
                className="absolute inset-0 z-0"
                animate={{
                    background: [
                        'linear-gradient(45deg, #374151, #1f2937)', // gray-700 to gray-800
                        'linear-gradient(45deg, #1f2937, #374151)', // gray-800 to gray-700
                        'linear-gradient(45deg, #374151, #1f2937)', // gray-700 to gray-800
                    ],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: 'mirror',
                }}
            />

            <div className="hero min-h-screen py-16 px-6 lg:px-20 text-white relative z-10">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-10 lg:gap-20 max-w-6xl mx-auto">

                    {/* Right Section - Image */}
                    <motion.div
                        className="flex-1 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="relative w-72 h-96 lg:w-80 lg:h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-500 to-gray-900 p-1">
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
                        className="flex-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-5xl font-bold mb-4 uppercase">
                            <motion.span
                                animate={{ color: ['#FFA500', '#FFFFFF', '#8898aa'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Abir
                            </motion.span> Hossen
                        </h1>

                        <AnimatePresence mode="wait">
                            <motion.h1
                                className="text-2xl font-bold mb-6"
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                            >
                                {texts[index]}
                            </motion.h1>
                        </AnimatePresence>

                        <p className="text-xl mb-8">
                            Passionate web developer with a degree in Computer Science & Engineering and hands-on experience in developing dynamic web applications.
                        </p>

                        {/* Hire Me Button */}
                        <a
                            href="https://drive.google.com/uc?export=download&id=1Azfyqm_hpW1ojrKnH6kniz_3Wf0_lLV5"
                            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300"
                            download
                        >
                            Download Resume
                        </a>

                        {/* Social Media Links */}
                        <div className="flex gap-6 mt-8">
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
