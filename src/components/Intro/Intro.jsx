import React from 'react';
import './Intro.css';
import '../../App.css';

function Intro() {
    return (
        <div className='intro-container'>
            <video src='/videos/video1.mp4' autoPlay loop muted />
            <img src='./images/songhee.png' alt='songhee'></img>
            <p>&lt;Hello my="name-is"&gt;</p>
            <h1>SONGHEE YIM</h1>
            <h2>FULL STACK DEVELOPER</h2>
            <p>&lt;I like="Debugging"&gt;&lt;/I&gt;</p>
            <p>&lt;/Hello&gt;</p>
        </div>
    )
}

export default Intro
