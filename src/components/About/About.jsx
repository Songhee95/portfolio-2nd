import React from 'react';
import './About.css'

function About() {
    return (
        <>
        <div className='about-container'>
            <div className='about-me'>
                <p><strong>About Me</strong></p>
                <p>
                    Full Stack Developer with Engineering background to think more
                    logically and process more efficiently in creating code. Recently
                    earned a certificate in Full Stack Development from Georgia
                    institute of Technology. I have honed my skills in HTML5, CSS,
                    Bootstrap, jQuery, JavaScript, React.js, and responsive Web design
                    to develop clear and impactive client-side applications and MySQL,
                    MoingoDB, Node.js and Express.js to develop effective server-side
                    applications. Known as an outstanding problem solver with analyzing
                    skills and able to work with a team while solving problems in
                    high-stress environments. My motivation is to make great
                    collaboration by giving respect and support to my teammates and this
                    motivation leads our project and team to success. Looking to bring
                    my passion and technical skills to the company to grow and become a
                    valuable asset.
                </p>
            </div>

            <div className='skill-strength row'>
                <div className='skill-set col-sm-12 col-md-12 col-lg-6'>
                    <p><strong>Skill Set</strong></p>
                    <div className="icons row">
                        <i className="devicon-bootstrap-plain-wordmark devicon col"></i>
                        <i className="devicon-jquery-plain-wordmark devicon col"></i>
                        <i className="devicon-javascript-plain devicon col"></i>
                        <i className="devicon-html5-plain-wordmark devicon col"></i>
                        <i className="devicon-react-plain-wordmark devicon col"></i>
                        <i className="devicon-nodejs-plain-wordmark devicon col"></i>
                        <i className="devicon-express-original-wordmark devicon col"></i>
                        <i className="devicon-mysql-plain-wordmark devicon col"></i>
                        <i className="devicon-mongodb-plain-wordmark devicon col"></i>
                        <i className="devicon-heroku-original-wordmark devicon col"></i>
                    </div>
                </div>
                
                <div className='workplace-strength col-sm-12 col-md-12 col-lg-5'>
                    <p><strong>Workplace Strength</strong></p>
                    <div className="row">
                        <strong>Great Teamwork Skill</strong> 
                        <strong>Collaboration</strong>
                        <strong>Fast Learner</strong>
                        <strong>Problem-Solving by Analyzing</strong> 
                        <strong>Excellent Time Management</strong> 
                        <strong>Mind Control Under Pressure</strong>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default About
