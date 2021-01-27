import React from 'react';
import './Intro.css';
import '../../App.css';
import ScrollDown from '../ScrollToComponent/ScrollDown'

function Intro() {
    return (
        <div className='intro-container'>
            <img className="intro-pic fadeOut" src='./images/songhee.jpg' alt='songhee'></img>
            <div className="intro-context fadeIn">
                <p>&lt;Hello my="name-is"&gt;</p>
                <h1>SONGHEE YIM</h1>
                <h2>FULL STACK DEVELOPER</h2>
                <p>&lt;I like="Debugging"&gt;&lt;/I&gt;</p>
                <p>&lt;/Hello&gt;</p>
            </div>
            <div className='intro-scrolldown'>
                <ScrollDown to="aboutme" id='about'/>
            </div>
        </div>
    )
}

export default Intro
