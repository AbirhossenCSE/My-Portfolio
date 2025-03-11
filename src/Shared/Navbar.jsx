import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo/Abir-formal.jpg';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const links = <>
        <li><Link to="/" onClick={() => handleScroll("home")}>Home</Link></li>
        <li><Link to="/" onClick={() => handleScroll("about")}>About</Link></li>
        <li><Link to="/" onClick={() => handleScroll("skills")}>Skills</Link></li>
        <li><Link to="/" onClick={() => handleScroll("education")}>Education</Link></li>
        <li><Link to="/" onClick={() => handleScroll("projects")}>Projects</Link></li>
        <li><Link to="/" onClick={() => handleScroll("contact")}>Contact</Link></li>
    </>;

    return (
        <nav className="fixed top-0 bg-gray-950  bg-opacity-70 shadow-md z-50">
            <div className="container mx-auto flex items-center justify-between py-3 px-6">

                {/* Logo Section */}
                <div className="flex lg:ml-20 items-center cursor-pointer" onClick={() => handleScroll("home")}>
                    <img className="w-8 h-8 mr-2" src={logo} alt="Logo" />
                    <span className="text-3xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 font-bold transition-all duration-300 hover:opacity-100 focus:outline-none border-none">Abir Hossen</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex lg:mr-20 space-x-6 text-white font-medium">
                    {links}
                </ul>

                {/* Mobile Dropdown */}
                <div className="lg:hidden">
                    <div className="dropdown dropdown-end">
                        <button tabIndex={0} className="btn btn-ghost">
                            <FaBars className="text-2xl text-white" />
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content right-0 mt-3 w-52 p-2 shadow-lg bg-gray-800 text-white rounded-box z-50"
                        >
                            {links}
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
