import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo/LogoAll.jpg'
import { FaFacebook, FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

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
        <li><Link to='/' onClick={() => handleScroll("education")}>Education</Link></li>
        <li><Link to="/" onClick={() => handleScroll("projects")}>Project</Link></li>
        <li><Link to="/" onClick={() => handleScroll("contact")}>Contact</Link></li>
    </>

    return (
        <div>
            <div className="navbar fixed z-10 text-white bg-gray-600"  >
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img className='w-6 h-6' src={logo} alt="" />
                        <span className='font-bold text-white'>Abir</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="https://drive.google.com/uc?export=download&id=1mEteilgMIaSS6zYGnJkQ1vp3iCL69TS5"
                        className="btn border-0 bg-gray-500 mr-4 text-white "
                        download>
                        Download Resume
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;