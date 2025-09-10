import React, { useRef, useState } from "react";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for reaching out. I'll get back to you soon.",
      showConfirmButton: false,
      timer: 1500,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.2 });

  return (
    <div
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden text-white px-6 py-16 sm:px-10 md:px-16 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Get In Touch
        </motion.h2>
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-14">
          Feel free to reach out to me for collaborations, projects, or just a
          friendly hello. I’d love to connect with you!
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-gray-900/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="text-3xl text-center font-semibold mb-6">Contact Details</h3>
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <IoPersonSharp className="text-blue-400 text-2xl flex-shrink-0" />
                  ),
                  text: "Md. Abir Hossen",
                  link: "mailto:abirhossenkst@gmail.com",
                },
                {
                  icon: (
                    <FaEnvelope className="text-blue-400 text-2xl flex-shrink-0" />
                  ),
                  text: "abirhossenkst@gmail.com",
                  link: "mailto:abirhossenkst@gmail.com",
                },
                {
                  icon: (
                    <FaPhone className="text-green-400 text-2xl flex-shrink-0" />
                  ),
                  text: "01817854737",
                  link: "tel:+8801817854737",
                },
                {
                  icon: (
                    <FaWhatsapp className="text-green-500 text-2xl flex-shrink-0" />
                  ),
                  text: "WhatsApp: 01817854737",
                  link: "https://wa.me/8801817854737",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="flex items-center gap-4 bg-gray-800/70 px-5 py-4 rounded-xl shadow-md hover:bg-gray-700 transition transform hover:scale-[1.02]"
                >
                  {item.icon}
                  <span className="text-base sm:text-lg">{item.text}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-8 mt-10">
              {[
                {
                  icon: (
                    <FaGithub className="text-white text-3xl hover:text-gray-400 transition duration-300" />
                  ),
                  link: "https://github.com/AbirhossenCSE/",
                },
                {
                  icon: (
                    <FaLinkedin className="text-blue-400 text-3xl hover:text-blue-300 transition duration-300" />
                  ),
                  link: "https://www.linkedin.com/in/abir-hossen-9a627b257/",
                },
                {
                  icon: (
                    <FaFacebookSquare className="text-blue-600 text-3xl hover:text-blue-500 transition duration-300" />
                  ),
                  link: "https://www.facebook.com/abir.mondol.503",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800/60 hover:bg-gray-700"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-gray-900/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="text-3xl font-semibold mb-6 text-center">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-300 transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
