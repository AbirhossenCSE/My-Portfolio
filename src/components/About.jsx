import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiMongodb, SiVercel, SiExpress } from "react-icons/si";
import aboutImg from "../assets/Pic/About.jpg";

const skills = [
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300 text-xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300 text-xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-xl" /> },
  { name: "Vercel", icon: <SiVercel className="text-white text-xl" /> },
  { name: "Git & GitHub", icon: <FaGithub className="text-gray-400 text-xl" /> },
  { name: "Database Design", icon: <FaDatabase className="text-indigo-400 text-xl" /> },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <img
              src={aboutImg}
              alt="Abir Hossen"
              className="relative w-80 h-96 lg:w-[420px] lg:h-[520px] object-cover rounded-2xl shadow-xl border border-gray-700"
            />
          </div>
        </motion.div>

        {/* Right Section - Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          {/* ✅ Title Animation */}
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          >
            About Me
          </motion.h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Hi, I’m <span className="font-semibold text-white">Abir Hossen</span>, 
            a passionate <strong>Full-Stack Developer</strong> and Computer Science student at 
            Daffodil International University. I specialize in building{" "}
            <span className="text-white">modern, scalable, and user-friendly web applications</span> 
            with clean design and performance-driven architecture.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My expertise includes <strong>React.js, Node.js, Express.js, and MongoDB</strong>, 
            alongside modern tools like <strong>Tailwind CSS, Firebase, and Vercel</strong>. 
            With real-world experience at <span className="text-white">Mindsynth Technology</span> 
            and <span className="text-white">ScaleUp Agency</span>, I have collaborated on projects 
            that combine technical precision with creative problem-solving.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I aspire to grow as a remote <strong>Full-Stack Developer</strong>, 
            contributing to impactful digital products that create real-world value.
          </p>
        </motion.div>
      </div>

      {/* ✅ Skills - Infinite Loop Carousel */}
      <div className="mt-20 relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 bg-gray-800/60 rounded-xl border border-gray-700 shadow hover:shadow-lg transition min-w-[220px]"
            >
              {skill.icon}
              <span className="text-sm">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
