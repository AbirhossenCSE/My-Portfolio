import React from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase,
  FaJsSquare, FaGitAlt
} from "react-icons/fa";
import {
  SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiVercel
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

const skills = [
  {
    name: "React.js",
    icon: <FaReact className="text-blue-400" />,
    desc: "I build modern, responsive, and dynamic UIs with React.js. Reusable components & optimized performance for smooth UX."
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400" />,
    desc: "Core programming language for adding interactivity, logic handling, and building scalable full-stack apps."
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    desc: "Efficient backend services & REST APIs to handle server-side tasks and business logic."
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-400" />,
    desc: "Lightweight APIs with maintainable routes connecting frontend & databases."
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
    desc: "NoSQL database for storing & managing data with efficient queries."
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt className="text-red-500" />,
    desc: "Version control, branching, and collaborative workflows for smooth teamwork."
  },
  {
    name: "Database Management",
    icon: <FaDatabase className="text-blue-400" />,
    desc: "Experience with relational & NoSQL databases, schema design, and performance tuning."
  },
  {
    name: "VS Code",
    icon: <VscVscode className="text-blue-500" />,
    desc: "My go-to editor with custom extensions & snippets for productivity."
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-orange-500" />,
    desc: "Authentication, hosting, and real-time database solutions for small-to-medium projects."
  },
  {
    name: "Vercel",
    icon: <SiVercel className="text-white" />,
    desc: "CI/CD powered deployment for fast, serverless hosting of web projects."
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
    desc: "Clean, semantic, accessible markup ensuring SEO-friendly, well-structured web pages."
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" />,
    desc: "Modern layouts, responsive design, and engaging animations for better UX."
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400" />,
    desc: "Fast, utility-first styling for responsive UIs with clean and scalable code."
  }
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 lg:px-20 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">My Skills</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 sm:grid-cols-2 gap-8"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1a2e91] rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-transform duration-300"
            >
              <div className="text-5xl mb-4 flex justify-center drop-shadow-md ">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

