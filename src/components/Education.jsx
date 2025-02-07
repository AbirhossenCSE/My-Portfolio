import React, { useRef } from "react";
import { FaUniversity, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const Education = () => {
    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { triggerOnce: true, threshold: 0.5 });
    return (
        <div id="education" className="py-16 px-6 lg:px-20 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    ref={headingRef}
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl font-bold text-center mb-10 text-white"
                >
                    Educational Qualification
                </motion.h2>
                <motion.div 
                    className="bg-gray-800 p-6 rounded-lg shadow-lg text-left"
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
            </div>
        </div>
    );
};

export default Education;
