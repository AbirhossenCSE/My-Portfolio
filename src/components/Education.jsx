import React, { useRef } from "react";
import { FaUniversity, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const Education = () => {
    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { triggerOnce: true, threshold: 0.5 });

    return (
        <div id="education" className="py-16 px-6 lg:px-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="max-w-4xl mx-auto text-center">
                {/* Section Title */}
                <motion.h2
                    ref={headingRef}
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl font-extrabold mb-12 text-white tracking-wide"
                >
                    Education
                </motion.h2>

                <div className="grid gap-6">
                    {/* BSc Degree */}
                    <motion.div
                        className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-xl transition duration-300 transform hover:scale-105 hover:shadow-xl"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold flex items-center gap-3">
                            <FaGraduationCap className="text-blue-400" /> BSc in Computer Science & Engineering
                        </h3>
                        <p className="mt-2 flex items-center gap-3 text-lg">
                            <FaUniversity className="text-green-400" /> Daffodil International University
                        </p>
                        <p className="mt-2 flex items-center gap-3 text-lg">
                            <FaCalendarAlt className="text-yellow-400" /> Graduation: July, 2024
                        </p>
                    </motion.div>

                    {/* HSC Degree */}
                    <motion.div
                        className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-xl transition duration-300 transform hover:scale-105 hover:shadow-xl"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold flex items-center gap-3">
                            <FaGraduationCap className="text-blue-400" /> Higher Secondary School Certificate (HSC)
                        </h3>
                        <p className="mt-2 flex items-center gap-3 text-lg">
                            <FaUniversity className="text-green-400" /> Kushtia Govt. Central College
                        </p>
                        <p className="mt-2 flex items-center gap-3 text-lg">
                            <FaCalendarAlt className="text-yellow-400" /> Graduation: 2019
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Education;
