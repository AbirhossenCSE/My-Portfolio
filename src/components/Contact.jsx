import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="contact" className="py-16 px-6 lg:px-20 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
                <p className="text-lg text-gray-400 mb-6">
                    Feel free to reach out to me for any collaboration or inquiries.
                </p>

                <div className="grid md:grid-cols-2 items-center gap-6 text-lg">
                    
                    {/* Email */}
                    <a href="mailto:your.email@example.com" className="flex items-center gap-3 bg-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                        <FaEnvelope className="text-blue-400 text-2xl" />
                        <span>your.email@example.com</span>
                    </a>

                    {/* Phone */}
                    <a href="tel:+1234567890" className="flex items-center gap-3 bg-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                        <FaPhone className="text-green-400 text-2xl" />
                        <span>+123 456 7890</span>
                    </a>

                    {/* WhatsApp (Optional) */}
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                        <FaWhatsapp className="text-green-500 text-2xl" />
                        <span>WhatsApp: +123 456 7890</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
