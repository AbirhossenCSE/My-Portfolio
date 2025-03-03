import React, { useRef, useState } from "react";
import { FaEnvelope, FaFacebook, FaFacebookSquare, FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { motion, useInView } from "framer-motion";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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

    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { triggerOnce: true, threshold: 0.5 });

    return (
        <div id="contact" className="py-16 px-6 lg:px-20 text-white">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    ref={headingRef}
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl font-bold text-center mb-10 text-white"
                >
                    Get In Touch
                </motion.h2>
                <p className="text-lg text-gray-400 text-center mb-10">
                    Feel free to reach out to me for any collaboration or inquiries.
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Details */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 bg-gray-900 px-6 py-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 hover:scale-105">
                            <IoPersonSharp className="text-blue-400 text-2xl" />
                            <a href="mailto:your.email@example.com" className="text-lg">Md. Abir Hossen</a>
                        </div>
                        <div className="flex items-center gap-4 bg-gray-900 px-6 py-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 hover:scale-105">
                            <FaEnvelope className="text-blue-400 text-2xl" />
                            <a href="mailto:your.email@example.com" className="text-lg">hossenabir694@gmail.com</a>
                        </div>

                        <div className="flex items-center gap-4 bg-gray-900 px-6 py-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 hover:scale-105">
                            <FaPhone className="text-green-400 text-2xl" />
                            <a href="tel:+1234567890" className="text-lg">Phone: 01727469464</a>
                        </div>

                        <div className="flex items-center gap-4 bg-gray-900 px-6 py-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 hover:scale-105">
                            <FaWhatsapp className="text-green-500 text-2xl" />
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-lg">WhatsApp: 01727469464</a>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex justify-center gap-12 mt-10">
                            <a href="https://github.com/AbirhossenCSE/" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-white text-3xl hover:text-gray-400 transition duration-300" />
                            </a>
                            <a href="https://www.linkedin.com/in/abir-hossen-9a627b257/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-blue-400 text-3xl hover:text-blue-300 transition duration-300" />
                            </a>
                            <a href="https://www.facebook.com/abir.mondol.503" target="_blank" rel="noopener noreferrer">
                                <FaFacebookSquare className="text-blue-600 text-3xl hover:text-blue-500 transition duration-300" />
                            </a>
                        </div>

                    </div>

                    {/* Send Message Form */}
                    <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4 text-center">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

