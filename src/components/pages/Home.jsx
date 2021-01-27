import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects'


function Home() {
    return (
        <>
            <Navbar/>
            <Intro/>
            <About/>
            <Projects />
            <Footer/>
        </>
    )
}

export default Home
