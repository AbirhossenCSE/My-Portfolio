import React, { useRef } from "react";
import { FaGraduationCap, FaCalendarAlt, FaStar } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const Education = () => {
    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { triggerOnce: true, threshold: 0.5 });

    const educationData = [
        { degree: "BSc. in Computer Science & Engineering", school: "Daffodil International University", mascot: "🎓", passingYear: 2024 },
        { degree: "Higher Secondary Certificate (HSC)", school: "Kushtia Govt. Central College", mascot: "🏛️", passingYear: 2019 },
        // { degree: "Secondary School Certificate (SSC)", school: "Nobogram High School", mascot: "📘", passingYear: 2017 },
    ];

    return (
        <div id="education" className="py-16 px-6 lg:px-20 text-white">
            <div className="max-w-4xl mx-auto text-center">
                {/* Section Title */}
                <motion.h2
                    ref={headingRef}
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl font-bold text-center mb-10 text-white"
                >
                    My Education Journey
                </motion.h2>

                <Fade direction="up" duration={1500} triggerOnce>
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="space-y-8">
                            {educationData.map((edu, index) => (
                                <div
                                    key={index}
                                    className="relative group rounded-lg transition-all duration-[1500ms] ease-in-out bg-gradient-to-b from-[#4a326f] via-[#3a1f4f] to-[#24144d] hover:from-purple-400 hover:via-[#7e207c] hover:to-[#400bc5] bg-fixed text-white hover:shadow-xl"
                                >
                                    {/* Card Content */}
                                    <div className="relative rounded-lg bg-transparent p-8 transition-all duration-300 backdrop-blur-lg">
                                        {/* Top Icon */}
                                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white p-3 rounded-full shadow-lg">
                                            <FaGraduationCap className="text-lg" />
                                        </div>

                                        {/* Top Section */}
                                        <div className="flex flex-col items-center gap-3 text-center">
                                            <span className="text-4xl">{edu.mascot}</span>
                                            <h3 className="text-lg md:text-xl font-semibold text-white">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-md text-slate-300 flex items-center gap-2">
                                                <FaStar className="text-yellow-400" />
                                                {edu.school}
                                            </p>
                                            <p className="text-slate-400 flex items-center gap-2 text-sm">
                                                <FaCalendarAlt className="w-4 h-4 text-teal-300" /> Passing Year: {edu.passingYear}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Education;
