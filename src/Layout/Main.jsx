import React from 'react';
import Navbar from '../Shared/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Footer from '../Shared/Footer';
import Projects from '../components/Project/Project';
import Contact from '../components/Contact';
import Education from '../components/Education';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;