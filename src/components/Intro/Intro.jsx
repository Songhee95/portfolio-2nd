import React from 'react';
import './Intro.css';
import '../../App.css';
import ScrollDown from '../ScrollToComponent/ScrollDown'

function Intro() {
    const image = process.env.PUBLIC_URL+"/images/songhee.jpg"
    return (
        <div className='intro-container'>
            <div className="intro-inner-container container">
                <img className="intro-pic fadeOut" src={image} alt='songhee'></img>
                <div className="intro-context fadeIn">
                    <p>&lt;Hello my="name-is"&gt;</p>
                    <h1>SONGHEE YIM</h1>
                    <h2>FULL STACK DEVELOPER</h2>
                    <p>&lt;I like="Debugging"&gt;&lt;/I&gt;</p>
                    <p>&lt;/Hello&gt;</p>
                </div>
            </div>
            <div className='intro-scroll-down'>
                    <ScrollDown to="about"/>
                </div>
        </div>
    )
}

export default Intro
