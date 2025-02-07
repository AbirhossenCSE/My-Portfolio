import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const Contact = () => {
    return (
        <div id="contact" className="py-16 px-6 lg:px-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
                <p className="text-lg text-gray-400 text-center mb-10">
                    Feel free to reach out to me for any collaboration or inquiries.
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Details */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 bg-gray-800 px-6 py-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                            <IoPersonSharp className="text-blue-400 text-2xl" />
                            <a href="mailto:your.email@example.com" className="text-lg">Md. Abir Hossen</a>
                        </div>
                        <div className="flex items-center gap-4 bg-gray-800 px-6 py-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                            <FaEnvelope className="text-blue-400 text-2xl" />
                            <a href="mailto:your.email@example.com" className="text-lg">hossenabir694@gmail.com</a>
                        </div>

                        <div className="flex items-center gap-4 bg-gray-800 px-6 py-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                            <FaPhone className="text-green-400 text-2xl" />
                            <a href="tel:+1234567890" className="text-lg">Phone: 01727469464</a>
                        </div>

                        <div className="flex items-center gap-4 bg-gray-800 px-6 py-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                            <FaWhatsapp className="text-green-500 text-2xl" />
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-lg">WhatsApp: 01727469464</a>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex gap-6 mt-8">
                            <a href="https://github.com/AbirhossenCSE/" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-white text-3xl hover:text-gray-400 transition duration-300" />
                            </a>
                            <a href="https://www.linkedin.com/in/abir-hossen-9a627b257/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-blue-400 text-3xl hover:text-blue-300 transition duration-300" />
                            </a>
                            <a href="https://www.facebook.com/abir.mondol.503" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-blue-600 text-3xl hover:text-blue-500 transition duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Send Message Form */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4 text-center">Send a Message</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                            
                            <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                            
                            <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" required></textarea>
                            
                            <button type="submit" className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
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

