import React from 'react';
import { easeOut, motion } from "framer-motion";
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
                            className="max-w-sm w-72 mt-20 shadow-2xl" />
                    </div>

                    {/* Left Section - Text */}
                    <div className='flex-1'>
                        <motion.h1
                            animate={{ x: [ -20, 100, -20] }} // Left-Right-Left Animation
                            transition={{ duration: 5, repeat: Infinity, ease: easeOut }}
                            className="text-4xl font-bold my-4 ml-10 mt-20">
                            <motion.span
                                animate={{ color: ['#ecff33', '#33ffe3', '#ff6133'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Abir
                            </motion.span> Hossen
                        </motion.h1>

                        <motion.h1
                            className="text-4xl font-bold">Web Developer
                        </motion.h1>

                        <p className="py-6 text-xl">
                            Passionate web developer with a degree in Computer Science & Engineering and hands-on experience in developing dynamic web applications.
                        </p>
                        <button className="btn border-0 bg-blue-600 text-white">Hire Me</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
