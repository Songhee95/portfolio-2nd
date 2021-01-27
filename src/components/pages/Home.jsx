import React from 'react';
import About from '../About/About';
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
        </>
    )
}

export default Home
