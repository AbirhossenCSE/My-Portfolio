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
        <nav className="fixed top-0 w-full bg-gray-700 bg-opacity-90 shadow-md z-50">
            <div className="container mx-auto flex items-center justify-between py-3 px-6">
                
                {/* Logo Section */}
                <div className="flex lg:ml-20 items-center">
                    <img className="w-8 h-8 mr-3" src={logo} alt="Logo" />
                    <span className="text-white font-bold text-2xl">Abir Hossen</span>
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
