import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/Logo/abir-logo-bg.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    };


  const links = (
    <>
      <li>
        <Link to="/" onClick={() => handleScroll("home")}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/" onClick={() => handleScroll("about")}>
          About
        </Link>
      </li>
      <li>
        <Link to="/" onClick={() => handleScroll("experience")}>
          Experience
        </Link>
      </li>
      <li>
        <Link to="/" onClick={() => handleScroll("skills")}>
          Skills
        </Link>
      </li>
      <li>
        <Link to="/" onClick={() => handleScroll("education")}>
          Education
        </Link>
      </li>
      <li>
        <Link to="/" onClick={() => handleScroll("projects")}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="/" onClick={() => handleScroll("contact")}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 bg-gray-950 w-full bg-opacity-70 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between md:px-24 px-2">
        {/* Logo Section */}
        <div
          className="flex lg:ml-20 items-center cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          <img className="w-24 h-24 mr-2" src={logo2} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:mr-20 space-x-6 text-white text-lg font-medium">
          {links}
        </ul>

        {/* Mobile Sidebar Toggle */}
        <div className="lg:hidden">
          <button
            className="text-white mr-2 text-2xl"
            onClick={() => setIsOpen(true)}
          >
            <FaBars className="w-9 h-9" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col p-4 space-y-4 text-lg font-medium">
          {links}
        </ul>
      </div>

      {/* Overlay Background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
