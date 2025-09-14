import React from 'react';
import Navbar from '../Shared/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Footer from '../Shared/Footer';
import Projects from '../components/Project/Project';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Experience from '../components/Experience';

const Main = () => {
    return (
        <div className='bg-gradient-to-b from-black via-[#110816] to-[#3e237e] bg-fixed text-white'>
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Experience></Experience>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;