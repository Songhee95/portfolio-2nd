import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects'
import './Home.css'

function Home() {
    return (
        <div className='whole__container'>
            <Navbar/>
            <Intro/>
            <About/>
            <Projects />
            <Footer/>
        </div>
    )
}

export default Home
