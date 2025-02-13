import React, { useEffect, useState } from 'react';
import { easeOut, motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import abirImg from '../assets/Pic/Abir-home.png';

const Home = () => {

    const texts = ["Web Developer", "Frontend Developer", "MERN Stack Developer"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 2) % texts.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="home">
            <div className="hero min-h-96 py-16 px-6 lg:px-20 bg-gray-800 text-white">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-10 lg:gap-20">

                    {/* Right Section - Image */}
                    <div className='flex-1 flex justify-center'>
                        <motion.img
                            src={abirImg}
                            animate={{ x: [-5, 15, -5] }}
                            transition={{ duration: 5, repeat: Infinity, ease: easeOut }}
                            className="max-w-sm w-72 mt-20 rounded-lg" />
                    </div>

                    {/* Left Section - Text */}
                    <div className='flex-1'>
                        <h1
                            className="text-5xl font-bold mb-4  uppercase">
                            <motion.span
                                animate={{ color: ['#FFA500', '#FFFFFF', '#8898aa'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Abir
                            </motion.span> Hossen
                        </h1>

                        <motion.h1
                            className="text-2xl font-bold"
                            key={index} 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                        >
                            {texts[index]}
                        </motion.h1>

                        <p className="py-6 text-xl">
                            Passionate web developer with a degree in Computer Science & Engineering and hands-on experience in developing dynamic web applications.
                        </p>

                        {/* Hire Me Button */}

                        <a href="https://drive.google.com/uc?export=download&id=1Azfyqm_hpW1ojrKnH6kniz_3Wf0_lLV5"
                            className="btn border-0 bg-gray-700 text-white my-6 px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                            download>
                            Download Resume
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
