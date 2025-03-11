import React, { useRef, useState } from "react";
import { FaEnvelope, FaFacebookSquare, FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { motion, useInView } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for reaching out. I'll get back to you soon.",
            showConfirmButton: false,
            timer: 1500
        });
        setFormData({ name: "", email: "", message: "" });
    };

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.2 });

    return (
        <div id="contact" ref={sectionRef} className="relative overflow-hidden text-white p-4 sm:p-6 md:p-10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl font-bold text-center mb-10 text-white"
                >
                    Get In Touch
                </motion.h2>
                <p className="text-lg text-gray-300 text-center mb-10">
                    Feel free to reach out to me for any collaboration or inquiries.
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="space-y-8"
                    >
                        {[{
                            icon: <IoPersonSharp className="text-blue-400 text-2xl" />, text: "Md. Abir Hossen", link: "mailto:hossenabir694@gmail.com"
                        }, {
                            icon: <FaEnvelope className="text-blue-400 text-2xl" />, text: "hossenabir694@gmail.com", link: "mailto:hossenabir694@gmail.com"
                        }, {
                            icon: <FaPhone className="text-green-400 text-2xl" />, text: "Phone: 01727469464", link: "tel:+8801727469464"
                        }, {
                            icon: <FaWhatsapp className="text-green-500 text-2xl" />, text: "WhatsApp: 01727469464", link: "https://wa.me/8801727469464"
                        }].map((item, index) => (
                            <a key={index} href={item.link} className="flex items-center gap-4 bg-gray-900 px-6 py-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 hover:scale-105">
                                {item.icon}
                                <span className="text-lg">{item.text}</span>
                            </a>
                        ))}
                        {/* Social Links */}
                        <div className="flex justify-center gap-12 mt-10">
                            {[{
                                icon: <FaGithub className="text-white text-3xl hover:text-gray-400 transition duration-300" />, link: "https://github.com/AbirhossenCSE/"
                            }, {
                                icon: <FaLinkedin className="text-blue-400 text-3xl hover:text-blue-300 transition duration-300" />, link: "https://www.linkedin.com/in/abir-hossen-9a627b257/"
                            }, {
                                icon: <FaFacebookSquare className="text-blue-600 text-3xl hover:text-blue-500 transition duration-300" />, link: "https://www.facebook.com/abir.mondol.503"
                            }].map((social, index) => (
                                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="shadow-xl p-4 sm:p-6"
                    >
                        <h3 className="text-3xl font-bold mb-6 text-center">Send Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                            <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" required></textarea>
                            <button type="submit" className="w-full inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300">
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
